"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import { compressImage } from "@/lib/tools/imageProcessing";
import { compressPdf, pdfPageToJpg, imagesToPdf } from "@/lib/tools/pdfProcessing";

// Keys that support multiple image uploads and always output PDF
const MULTI_UPLOAD_KEYS = ["citizenship", "tenth", "twelfth"];

const DOCUMENT_CONFIG = {
  photo: {
    label: "Upload the scanned copy of the recent passport size photo",
    name: "passport_photo",
    outputFormat: "image/jpeg",
    exactWidth: 276,
    exactHeight: 354,
    maxSizeKB: 90,
    multi: false,
  },
  signature: {
    label: "Upload your scanned signature",
    name: "signature",
    outputFormat: "image/jpeg",
    maxSizeKB: 90,
    multi: false,
  },
  citizenship: {
    label: "Upload your scanned English Translated Citizenship (certified by Public Notary)",
    name: "citizenship",
    outputFormat: "application/pdf",
    maxSizeKB: 900,
    multi: true,
  },
  tenth: {
    label: "Upload your scanned 10th class Pass Certificate",
    name: "10th_certificate",
    outputFormat: "application/pdf",
    maxSizeKB: 900,
    multi: true,
  },
  twelfth: {
    label: "Upload your scanned 12th class Pass Certificate",
    name: "12th_certificate",
    outputFormat: "application/pdf",
    maxSizeKB: 900,
    multi: true,
  },
};

const initialDocState = (multi) => ({
  files: [],       // for multi-upload keys
  file: null,      // for single-upload keys
  processedFile: null,
  status: "idle",  // idle | uploaded | processing | done | error
  preview: null,
});

export default function CompexDocuments() {
  const [documents, setDocuments] = useState(
    Object.fromEntries(
      Object.keys(DOCUMENT_CONFIG).map((k) => [
        k,
        initialDocState(DOCUMENT_CONFIG[k].multi),
      ])
    )
  );

  const fileInputs = Object.fromEntries(
    Object.keys(DOCUMENT_CONFIG).map((k) => [k, useRef(null)])
  );

  // ── Upload handlers ────────────────────────────────────────────────────────

  const handleUploadClick = (key) => {
    if (fileInputs[key].current) fileInputs[key].current.click();
  };

  const handleFileSelect = (key, event) => {
    const cfg = DOCUMENT_CONFIG[key];
    const selected = Array.from(event.target.files);
    if (!selected.length) return;

    if (cfg.multi) {
      setDocuments((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          files: [...prev[key].files, ...selected],
          processedFile: null,
          status: "uploaded",
          preview: null,
        },
      }));
    } else {
      const file = selected[0];
      setDocuments((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          file,
          processedFile: null,
          status: "uploaded",
          preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
        },
      }));
    }
    // Reset input so same file can be re-selected
    event.target.value = "";
  };

  const removeMultiFile = (key, idx) => {
    setDocuments((prev) => {
      const newFiles = prev[key].files.filter((_, i) => i !== idx);
      return {
        ...prev,
        [key]: {
          ...prev[key],
          files: newFiles,
          processedFile: null,
          status: newFiles.length > 0 ? "uploaded" : "idle",
        },
      };
    });
  };

  // ── Conversion ─────────────────────────────────────────────────────────────

  const handleConvert = async (key) => {
    const cfg = DOCUMENT_CONFIG[key];
    const doc = documents[key];

    const hasInput = cfg.multi ? doc.files.length > 0 : !!doc.file;
    if (!hasInput) return;

    setDocuments((prev) => ({
      ...prev,
      [key]: { ...prev[key], status: "processing" },
    }));

    try {
      let finalFile;

      if (cfg.multi) {
        // ── Multi-image → PDF ────────────────────────────────────────────────
        // Separate images from PDFs if any mixed
        const imageFiles = [];
        for (const f of doc.files) {
          if (f.type === "application/pdf") {
            // Render first page of PDF as image so we can merge
            const jpg = await pdfPageToJpg(f);
            imageFiles.push(jpg);
          } else {
            imageFiles.push(f);
          }
        }
        const merged = await imagesToPdf(imageFiles);
        finalFile = new File([merged], `${cfg.name}.pdf`, { type: "application/pdf" });

      } else {
        // ── Single file (photo / signature) → JPG ───────────────────────────
        let imageFileToCompress = doc.file;
        const isUploadedPdf = doc.file.type === "application/pdf";

        if (isUploadedPdf) {
          imageFileToCompress = await pdfPageToJpg(doc.file);
        }

        if (cfg.exactWidth && cfg.exactHeight) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = URL.createObjectURL(imageFileToCompress);
          await new Promise((resolve) => (img.onload = resolve));

          const canvas = document.createElement("canvas");
          canvas.width = cfg.exactWidth;
          canvas.height = cfg.exactHeight;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          const blob = await new Promise((resolve) =>
            canvas.toBlob(resolve, "image/jpeg", 1.0)
          );
          const resized = new File([blob], `${cfg.name}.jpg`, { type: "image/jpeg" });
          finalFile = await compressImage(resized, {
            maxSizeMB: cfg.maxSizeKB / 1024,
            maxWidthOrHeight: Math.max(cfg.exactWidth, cfg.exactHeight),
          });
        } else {
          finalFile = await compressImage(imageFileToCompress, {
            maxSizeMB: cfg.maxSizeKB / 1024,
          });
        }
        finalFile = new File([finalFile], `${cfg.name}.jpg`, { type: "image/jpeg" });
      }

      setDocuments((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          processedFile: finalFile,
          status: "done",
          preview: finalFile.type.startsWith("image/")
            ? URL.createObjectURL(finalFile)
            : null,
        },
      }));
    } catch (error) {
      console.error(error);
      alert(`Error processing document. Please try again.`);
      setDocuments((prev) => ({
        ...prev,
        [key]: { ...prev[key], status: "error" },
      }));
    }
  };

  // ── Downloads ──────────────────────────────────────────────────────────────

  const downloadIndividual = (key) => {
    const doc = documents[key];
    if (!doc.processedFile) return;
    const url = URL.createObjectURL(doc.processedFile);
    const a = document.createElement("a");
    a.href = url;
    a.download = doc.processedFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    let hasFiles = false;
    Object.values(documents).forEach((doc) => {
      if (doc.processedFile) {
        zip.file(doc.processedFile.name, doc.processedFile);
        hasFiles = true;
      }
    });
    if (!hasFiles) {
      alert("No documents have been processed yet.");
      return;
    }
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "COMPEX_Documents.zip");
  };

  const allProcessed = Object.values(documents).some((d) => d.processedFile !== null);

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="max-w-6xl mx-auto font-sans">
      <div className="mb-6">
        <Link
          href="/tools"
          className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Tools
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
          COMPEX Document Tools
        </h1>
        <p className="text-dark-300">
          Prepare all your documents for the COMPEX scholarship application in one place.
        </p>
      </div>

      <PrivacyBanner />

      <div className="mt-8 space-y-6">
        {Object.entries(DOCUMENT_CONFIG).map(([key, cfg]) => {
          const doc = documents[key];
          const hasInput = cfg.multi ? doc.files.length > 0 : !!doc.file;

          return (
            <div
              key={key}
              className="bg-dark-900 border border-dark-800 rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-start md:items-stretch shadow-lg"
            >
              {/* ── Left: Controls ──────────────────────────────────────── */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">{cfg.label}</h3>

                  <input
                    type="file"
                    className="hidden"
                    ref={fileInputs[key]}
                    onChange={(e) => handleFileSelect(key, e)}
                    accept={cfg.multi ? "image/jpeg,image/png,image/jpg,application/pdf" : "image/jpeg,image/png,image/jpg,application/pdf"}
                    multiple={cfg.multi}
                  />

                  {/* Multi-file list */}
                  {cfg.multi && doc.files.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {doc.files.map((f, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between bg-dark-950 border border-dark-800 rounded-lg px-3 py-2 text-sm"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-dark-400 shrink-0 font-bold w-5 text-center">
                              {idx + 1}
                            </span>
                            <span className="text-white truncate">{f.name}</span>
                            <span className="text-dark-500 shrink-0 text-xs">
                              ({(f.size / 1024).toFixed(0)} KB)
                            </span>
                          </div>
                          <button
                            onClick={() => removeMultiFile(key, idx)}
                            className="ml-2 text-dark-500 hover:text-red-400 transition-colors shrink-0 cursor-pointer"
                            title="Remove"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Single file info */}
                  {!cfg.multi && doc.file && (
                    <p className="text-sm text-dark-400 mb-4 truncate">
                      {doc.file.name}{" "}
                      <span className="text-dark-500">({(doc.file.size / 1024).toFixed(1)} KB)</span>
                    </p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    onClick={() => handleUploadClick(key)}
                    className="flex-1 bg-dark-800 hover:bg-dark-700 text-white px-4 py-3 text-sm font-bold rounded-xl transition-colors border border-dark-700 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l4-4m0 0l4 4m-4-4v12" />
                    </svg>
                    {cfg.multi
                      ? doc.files.length > 0
                        ? "Add More Images"
                        : "Upload Images"
                      : doc.file
                      ? "Change Document"
                      : "Upload Document"}
                  </button>

                  <button
                    onClick={() => handleConvert(key)}
                    disabled={!hasInput || doc.status === "processing"}
                    className={`flex-1 px-4 py-3 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      !hasInput
                        ? "bg-dark-950 text-dark-500 cursor-not-allowed border border-dark-800"
                        : doc.status === "processing"
                        ? "bg-primary-600 text-white opacity-80"
                        : "bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                    }`}
                  >
                    {doc.status === "processing" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Convert Document"
                    )}
                  </button>
                </div>

                {cfg.multi && doc.files.length > 0 && (
                  <p className="text-xs text-dark-500 mt-3">
                    {doc.files.length} image{doc.files.length > 1 ? "s" : ""} selected — will be merged into a single PDF
                  </p>
                )}
              </div>

              {/* ── Divider ─────────────────────────────────────────────── */}
              <div className="hidden md:block w-px bg-dark-800 mx-4" />

              {/* ── Right: Result ────────────────────────────────────────── */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-dark-950 rounded-xl border border-dark-800 p-6 min-h-[250px]">
                {!hasInput && !doc.processedFile && (
                  <div className="text-dark-500 flex flex-col items-center justify-center text-center">
                    <svg className="w-12 h-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">Result will appear here</p>
                  </div>
                )}

                {hasInput && doc.status !== "done" && (
                  <div className="text-dark-300 flex flex-col items-center justify-center text-center w-full">
                    {cfg.multi ? (
                      <p className="text-sm text-primary-400">
                        {doc.files.length} image{doc.files.length > 1 ? "s" : ""} ready — click Convert
                      </p>
                    ) : (
                      <>
                        <p className="text-sm font-bold truncate w-full mb-1">{doc.file?.name}</p>
                        <p className="text-xs text-dark-500 mb-4">
                          Original: {(doc.file?.size / 1024).toFixed(1)} KB
                        </p>
                        <p className="text-sm text-primary-400">Click Convert to Process</p>
                      </>
                    )}
                  </div>
                )}

                {doc.status === "done" && doc.processedFile && (
                  <div className="w-full flex flex-col items-center animate-in fade-in zoom-in duration-300">
                    <div className="flex items-center gap-2 mb-4 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full border border-green-500/20 text-sm font-bold">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Success: {(doc.processedFile.size / 1024).toFixed(1)} KB
                    </div>

                    {doc.preview ? (
                      <div className="bg-white p-2 rounded-lg shadow-xl mb-4 max-w-full">
                        <img
                          src={doc.preview}
                          alt="Result"
                          className="max-w-[200px] max-h-[200px] object-contain block"
                        />
                      </div>
                    ) : (
                      <div className="bg-dark-800 p-6 rounded-lg mb-4 flex flex-col items-center justify-center text-white">
                        <svg className="w-12 h-12 mb-2 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm font-bold">PDF Ready</span>
                      </div>
                    )}

                    <button
                      onClick={() => downloadIndividual(key)}
                      className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 text-sm font-bold rounded-xl transition-all shadow-lg shadow-green-600/20 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download {doc.processedFile.name}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 mb-12 flex justify-center border-t border-dark-800 pt-12">
        <button
          onClick={downloadZip}
          disabled={!allProcessed}
          className={`flex items-center gap-2 px-8 py-5 rounded-xl font-bold text-white transition-all shadow-xl text-lg w-full md:w-auto justify-center cursor-pointer ${
            allProcessed
              ? "bg-primary-600 hover:bg-primary-500 hover:scale-[1.02] shadow-primary-500/30"
              : "bg-dark-800 text-dark-500 cursor-not-allowed shadow-none"
          }`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download All Processed Documents (ZIP)
        </button>
      </div>
    </div>
  );
}
