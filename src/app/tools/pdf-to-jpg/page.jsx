"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import FileDropzone from "@/components/tools/FileDropzone";
import PrivacyBanner from "@/components/tools/PrivacyBanner";

// ─── Quality preset definitions ─────────────────────────────────────────────
const QUALITY_PRESETS = [
  { id: "high",   label: "High",   scale: 2.5, quality: 0.95, desc: "Best quality · larger files" },
  { id: "medium", label: "Medium", scale: 2.0, quality: 0.88, desc: "Great balance · recommended" },
  { id: "low",    label: "Low",    scale: 1.5, quality: 0.75, desc: "Smaller files · faster" },
];

export default function PdfToJpg() {
  const [file, setFile]               = useState(null);
  const [preview, setPreview]         = useState(null); // thumbnail of page 1
  const [quality, setQuality]         = useState("medium");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress]       = useState({ current: 0, total: 0 });
  const [results, setResults]         = useState([]); // array of { name, url, blob }
  const [error, setError]             = useState(null);
  const abortRef                      = useRef(false);

  // Revoke all blob URLs on unmount / when results reset
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
      results.forEach((r) => URL.revokeObjectURL(r.url));
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onFileSelect = async (selected) => {
    const f = Array.isArray(selected) ? selected[0] : selected;
    if (!f) return;

    // Revoke previous
    if (preview) URL.revokeObjectURL(preview);
    results.forEach((r) => URL.revokeObjectURL(r.url));
    setResults([]);
    setError(null);
    setFile(f);

    // Generate page 1 thumbnail preview using pdfjs
    try {
      const pdfjsLib = await import("pdfjs-dist/build/pdf.mjs");
      pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
      const ab    = await f.arrayBuffer();
      const pdf   = await pdfjsLib.getDocument({ data: new Uint8Array(ab) }).promise;
      const page  = await pdf.getPage(1);
      const vp    = page.getViewport({ scale: 0.6 });
      const canvas = document.createElement("canvas");
      canvas.width = vp.width;
      canvas.height = vp.height;
      await page.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
      canvas.toBlob((blob) => {
        if (blob) setPreview(URL.createObjectURL(blob));
      }, "image/jpeg", 0.8);
    } catch {
      // Preview failed — not critical
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    setIsProcessing(true);
    setProgress({ current: 0, total: 0 });
    setError(null);
    abortRef.current = false;

    try {
      const preset = QUALITY_PRESETS.find((p) => p.id === quality);

      // Intercept progress by patching the lib function call manually
      // We do it via a streaming approach — call once but track pages via a wrapper
      const pdfjsLib = await import("pdfjs-dist/build/pdf.mjs");
      pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

      const ab      = await file.arrayBuffer();
      const pdf     = await pdfjsLib.getDocument({ data: new Uint8Array(ab) }).promise;
      const total   = pdf.numPages;
      const baseName = file.name.replace(/\.pdf$/i, "");
      setProgress({ current: 0, total });

      const pageFiles = [];
      for (let i = 1; i <= total; i++) {
        if (abortRef.current) break;

        const page     = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: preset.scale });
        const canvas   = document.createElement("canvas");
        canvas.width   = viewport.width;
        canvas.height  = viewport.height;
        const ctx = canvas.getContext("2d");
        await page.render({ canvasContext: ctx, viewport }).promise;

        const blob = await new Promise((resolve, reject) => {
          canvas.toBlob(
            (b) => (b ? resolve(b) : reject(new Error(`Page ${i} render failed`))),
            "image/jpeg",
            preset.quality
          );
        });

        const fileName =
          total === 1
            ? `${baseName}.jpg`
            : `${baseName}-page-${String(i).padStart(3, "0")}.jpg`;

        pageFiles.push({
          name: fileName,
          url:  URL.createObjectURL(blob),
          blob,
        });
        setProgress({ current: i, total });
      }

      setResults(pageFiles);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while converting. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadSingle = (item) => {
    const a = document.createElement("a");
    a.href = item.url;
    a.download = item.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const downloadAll = async () => {
    if (results.length === 0) return;

    if (results.length === 1) {
      downloadSingle(results[0]);
      return;
    }

    // Multi-page — bundle as ZIP
    const JSZip = (await import("jszip")).default;
    const zip   = new JSZip();
    results.forEach((r) => zip.file(r.name, r.blob));
    const zipBlob = await zip.generateAsync({ type: "blob" });
    const zipName = file.name.replace(/\.pdf$/i, "") + "-images.zip";

    const a = document.createElement("a");
    a.href = URL.createObjectURL(zipBlob);
    a.download = zipName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  };

  const reset = () => {
    if (preview) URL.revokeObjectURL(preview);
    results.forEach((r) => URL.revokeObjectURL(r.url));
    setFile(null);
    setPreview(null);
    setResults([]);
    setProgress({ current: 0, total: 0 });
    setError(null);
    abortRef.current = false;
  };

  const progressPct =
    progress.total > 0 ? Math.round((progress.current / progress.total) * 100) : 0;

  return (
    <div className="max-w-5xl mx-auto font-sans">
      {/* Back link */}
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

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">
          PDF to JPG
        </h1>
        <p className="text-dark-300">
          Convert every page of your PDF into high-quality JPG images. Runs entirely in your browser.
        </p>
      </div>

      <PrivacyBanner />

      <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 md:p-8">

        {/* ── Upload state ─────────────────────────────────────────────────── */}
        {!isProcessing && results.length === 0 && (
          <>
            <FileDropzone
              onFileSelect={onFileSelect}
              accept="application/pdf"
              multiple={false}
              maxSizeMB={50}
            />

            {file && (
              <div className="mt-8 border-t border-dark-800 pt-8 animate-in fade-in duration-300">
                {/* File preview card */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  {preview ? (
                    <div className="w-full sm:w-40 shrink-0 aspect-[3/4] rounded-xl overflow-hidden border border-dark-700 bg-dark-950 flex items-center justify-center shadow-lg">
                      <img src={preview} alt="Page 1 preview" className="object-contain w-full h-full" />
                    </div>
                  ) : (
                    <div className="w-full sm:w-40 shrink-0 aspect-[3/4] rounded-xl border border-dark-700 bg-dark-950 flex items-center justify-center">
                      <svg className="w-10 h-10 text-dark-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  )}

                  <div className="flex-1">
                    <p className="text-white font-semibold text-lg break-all mb-1">{file.name}</p>
                    <p className="text-dark-400 text-sm mb-6">{(file.size / 1024 / 1024).toFixed(2)} MB</p>

                    {/* Quality selector */}
                    <p className="text-dark-300 text-sm font-medium mb-3">Output Quality</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {QUALITY_PRESETS.map((p) => (
                        <button
                          key={p.id}
                          id={`quality-${p.id}`}
                          onClick={() => setQuality(p.id)}
                          className={`flex-1 px-4 py-3 rounded-xl border text-left transition-all cursor-pointer ${
                            quality === p.id
                              ? "border-primary-500 bg-primary-500/10 text-white"
                              : "border-dark-700 bg-dark-950 text-dark-300 hover:border-dark-500"
                          }`}
                        >
                          <span className="font-semibold text-sm block">{p.label}</span>
                          <span className="text-xs opacity-70">{p.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-sm mb-4 bg-red-500/10 px-4 py-3 rounded-lg border border-red-500/20">
                    {error}
                  </p>
                )}

                <button
                  id="convert-pdf-to-jpg-btn"
                  onClick={handleConvert}
                  className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 rounded-xl text-white font-bold transition-all hover:scale-[1.02] shadow-lg cursor-pointer"
                >
                  Convert to JPG
                </button>
              </div>
            )}
          </>
        )}

        {/* ── Processing state ─────────────────────────────────────────────── */}
        {isProcessing && (
          <div className="flex flex-col items-center justify-center min-h-[300px] gap-6">
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="6" className="text-dark-800" />
                <circle
                  cx="40" cy="40" r="34" fill="none" stroke="currentColor" strokeWidth="6"
                  strokeDasharray={`${2 * Math.PI * 34}`}
                  strokeDashoffset={`${2 * Math.PI * 34 * (1 - progressPct / 100)}`}
                  strokeLinecap="round"
                  className="text-primary-500 transition-all duration-300"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                {progressPct}%
              </span>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold text-lg">Converting pages…</p>
              <p className="text-dark-400 text-sm mt-1">
                Page {progress.current} of {progress.total}
              </p>
            </div>
          </div>
        )}

        {/* ── Results state ─────────────────────────────────────────────────── */}
        {!isProcessing && results.length > 0 && (
          <div className="animate-in fade-in duration-300">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-green-400 text-xl flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {results.length} image{results.length > 1 ? "s" : ""} ready
              </h3>
              <p className="text-dark-400 text-sm hidden sm:block">Click an image to download it individually</p>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
              {results.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => downloadSingle(item)}
                  id={`page-img-${idx + 1}`}
                  title={`Download ${item.name}`}
                  className="group relative rounded-xl border border-dark-700 hover:border-primary-500/60 overflow-hidden bg-dark-950 aspect-[3/4] flex items-center justify-center transition-all hover:shadow-xl cursor-pointer"
                >
                  <img src={item.url} alt={item.name} className="object-contain w-full h-full p-1" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span className="text-white text-xs font-semibold">Download</span>
                  </div>
                  {/* Page badge */}
                  <span className="absolute top-2 left-2 bg-dark-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                id="download-all-btn"
                onClick={downloadAll}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 rounded-xl text-white font-bold transition-all hover:scale-[1.02] shadow-lg cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {results.length === 1 ? "Download JPG" : `Download All (${results.length}) as ZIP`}
              </button>
              <button
                id="reset-btn"
                onClick={reset}
                className="w-full sm:w-auto px-6 py-4 bg-dark-800 hover:bg-dark-700 rounded-xl text-white font-medium transition-colors cursor-pointer"
              >
                Convert Another PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
