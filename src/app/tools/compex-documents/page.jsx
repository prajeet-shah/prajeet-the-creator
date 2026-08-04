"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import { compressImage } from "@/lib/tools/imageProcessing";
import { compressPdf, pdfPageToJpg, imagesToPdf } from "@/lib/tools/pdfProcessing";

export default function CompexDocuments() {
  const [documents, setDocuments] = useState({
    photo: { file: null, processedFile: null, status: "idle", name: "passport_photo.jpg", preview: null, targetFormat: "image/jpeg" },
    signature: { file: null, processedFile: null, status: "idle", name: "signature.jpg", preview: null, targetFormat: "image/jpeg" },
    citizenship: { file: null, processedFile: null, status: "idle", name: "citizenship", preview: null, targetFormat: "application/pdf" },
    tenth: { file: null, processedFile: null, status: "idle", name: "10th_certificate", preview: null, targetFormat: "application/pdf" },
    twelfth: { file: null, processedFile: null, status: "idle", name: "12th_certificate", preview: null, targetFormat: "application/pdf" },
  });

  const fileInputs = {
    photo: useRef(null),
    signature: useRef(null),
    citizenship: useRef(null),
    tenth: useRef(null),
    twelfth: useRef(null),
  };

  const requirements = {
    photo: { maxSizeKB: 90, format: "image/jpeg", label: "Upload the scanned copy of the recent passport size photo: *", exactWidth: 276, exactHeight: 354, hint: "Required: Max 90KB, 3.5x4.5cm, JPG" },
    signature: { maxSizeKB: 90, format: "image/jpeg", label: "Upload your scanned signature: *", hint: "Required: Max 90KB, JPG" },
    citizenship: { maxSizeKB: 900, format: "image/jpeg,application/pdf", label: "Upload your scanned English Translated Citizenship certified by Public Notary: *", hint: "Required: Max 900KB, JPG/PDF" },
    tenth: { maxSizeKB: 900, format: "image/jpeg,application/pdf", label: "Upload your scanned 10th class Pass Certificate: *", hint: "Required: Max 900KB, JPG/PDF" },
    twelfth: { maxSizeKB: 900, format: "image/jpeg,application/pdf", label: "Upload your scanned 12th class Pass Certificate: *", hint: "Required: Max 900KB, JPG/PDF" },
  };

  const handleUploadClick = (key) => {
    if (fileInputs[key].current) {
      fileInputs[key].current.click();
    }
  };

  const handleFileSelect = (key, event) => {
    const file = event.target.files[0];
    if (!file) return;

    setDocuments(prev => ({
      ...prev,
      [key]: { 
        ...prev[key], 
        file, 
        processedFile: null, 
        status: "uploaded",
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
      }
    }));
  };

  const handleTargetFormatChange = (key, format) => {
    setDocuments(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        targetFormat: format,
        processedFile: null,
        status: prev[key].file ? "uploaded" : "idle"
      }
    }));
  };

  const handleConvert = async (key) => {
    const doc = documents[key];
    const file = doc.file;
    if (!file) return;

    setDocuments(prev => ({
      ...prev,
      [key]: { ...prev[key], status: "processing" }
    }));

    try {
      let finalFile;
      const req = requirements[key];
      const targetFormat = doc.targetFormat;
      const isTargetPdf = targetFormat === "application/pdf";
      const ext = isTargetPdf ? ".pdf" : ".jpg";
      const finalName = `${doc.name}${ext}`;

      const isUploadedPdf = file.type === "application/pdf";

      if (isTargetPdf) {
        // PDF Output
        if (isUploadedPdf) {
          // PDF -> PDF: Compress directly
          finalFile = await compressPdf(file);
        } else {
          // Image -> PDF: Convert Image to PDF
          finalFile = await imagesToPdf([file]);
        }
        
        if (finalFile.size > req.maxSizeKB * 1024) {
          alert(`Warning: Processed PDF (${(finalFile.size/1024).toFixed(0)}KB) still exceeds ${req.maxSizeKB}KB. PDF compression is limited. Consider switching target format to JPG, or uploading a smaller PDF.`);
        }
        finalFile = new File([finalFile], finalName, { type: 'application/pdf' });
      } else {
        // JPG Output
        let imageFileToCompress = file;
        
        if (isUploadedPdf) {
          // PDF -> JPG: Render first page of PDF to JPG
          imageFileToCompress = await pdfPageToJpg(file);
        }
        
        if (req.exactWidth && req.exactHeight) {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.src = URL.createObjectURL(imageFileToCompress);
          await new Promise(resolve => img.onload = resolve);
          
          const canvas = document.createElement('canvas');
          canvas.width = req.exactWidth;
          canvas.height = req.exactHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          
          const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 1.0));
          const resized = new File([blob], finalName, { type: 'image/jpeg' });
          
          finalFile = await compressImage(resized, { maxSizeMB: req.maxSizeKB / 1024, maxWidthOrHeight: Math.max(req.exactWidth, req.exactHeight) });
        } else {
          finalFile = await compressImage(imageFileToCompress, { maxSizeMB: req.maxSizeKB / 1024 });
        }
        finalFile = new File([finalFile], finalName, { type: 'image/jpeg' });
      }

      setDocuments(prev => ({
        ...prev,
        [key]: { 
          ...prev[key], 
          processedFile: finalFile, 
          status: "done",
          preview: finalFile.type.startsWith('image/') ? URL.createObjectURL(finalFile) : null
        }
      }));

    } catch (error) {
      console.error(error);
      alert(`Error processing ${key}.`);
      setDocuments(prev => ({
        ...prev,
        [key]: { ...prev[key], status: "error" }
      }));
    }
  };

  const downloadIndividual = (key) => {
    const doc = documents[key];
    if (!doc.processedFile) return;
    
    const url = URL.createObjectURL(doc.processedFile);
    const a = document.createElement('a');
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

    Object.values(documents).forEach(doc => {
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

  const allProcessed = Object.values(documents).some(doc => doc.processedFile !== null);

  return (
    <div className="max-w-6xl mx-auto font-sans">
      <div className="mb-6 flex justify-between items-center">
        <Link href="/tools" className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Tools
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">COMPEX Document Tools</h1>
        <p className="text-dark-300">Prepare all your documents for the COMPEX scholarship application in one place.</p>
      </div>

      <PrivacyBanner />

      <div className="mt-8 space-y-6">
        {Object.entries(requirements).map(([key, req]) => {
          const doc = documents[key];
          const hasFormatOption = req.format.includes("application/pdf") && req.format.includes("image/jpeg");
          
          return (
            <div key={key} className="bg-dark-900 border border-dark-800 rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-start md:items-stretch shadow-lg">
              
              {/* Left Side - Controls */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{req.label}</h3>
                  <p className="text-sm text-primary-400 mb-6">{req.hint}</p>
                  
                  <input 
                    type="file" 
                    className="hidden" 
                    ref={fileInputs[key]} 
                    onChange={(e) => handleFileSelect(key, e)}
                    accept={req.format}
                  />

                  {/* Target Format dropdown (only for fields supporting both JPG and PDF) */}
                  {hasFormatOption && (
                    <div className="mb-6 bg-dark-950/50 p-4 rounded-xl border border-dark-850 inline-flex flex-col">
                      <span className="text-xs font-semibold text-dark-400 mb-2">Convert Target Format:</span>
                      <div className="relative">
                        <select
                          value={doc.targetFormat}
                          onChange={(e) => handleTargetFormatChange(key, e.target.value)}
                          className="appearance-none bg-dark-900 border border-dark-750 text-white text-xs font-bold rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:border-primary-500 cursor-pointer"
                        >
                          <option value="application/pdf">PDF (.pdf)</option>
                          <option value="image/jpeg">JPG (.jpg)</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-dark-400">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <button 
                    onClick={() => handleUploadClick(key)}
                    className="flex-1 bg-dark-800 hover:bg-dark-700 text-white px-4 py-3 text-sm font-bold rounded-xl transition-colors border border-dark-700 cursor-pointer"
                  >
                    {doc.file ? "Change Document" : "Upload Document"}
                  </button>
                  
                  <button 
                    onClick={() => handleConvert(key)}
                    disabled={!doc.file || doc.status === "processing"}
                    className={`flex-1 px-4 py-3 text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      !doc.file 
                        ? 'bg-dark-950 text-dark-500 cursor-not-allowed border border-dark-800' 
                        : doc.status === "processing"
                          ? 'bg-primary-600 text-white opacity-80'
                          : 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                    }`}
                  >
                    {doc.status === "processing" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      "Convert Document"
                    )}
                  </button>
                </div>
              </div>
              
              {/* Divider for Desktop */}
              <div className="hidden md:block w-px bg-dark-800 mx-4"></div>

              {/* Right Side - Result */}
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-dark-950 rounded-xl border border-dark-800 p-6 min-h-[250px]">
                {!doc.file && !doc.processedFile && (
                  <div className="text-dark-500 flex flex-col items-center justify-center text-center">
                    <svg className="w-12 h-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <p className="text-sm font-medium">Result will appear here</p>
                  </div>
                )}

                {doc.file && doc.status !== "done" && (
                   <div className="text-dark-300 flex flex-col items-center justify-center text-center w-full">
                     <p className="text-sm font-bold truncate w-full mb-1">{doc.file.name}</p>
                     <p className="text-xs text-dark-500 mb-4">Original: {(doc.file.size / 1024).toFixed(1)} KB</p>
                     <p className="text-sm text-primary-400">Click Convert to Process</p>
                   </div>
                )}

                {doc.status === "done" && doc.processedFile && (
                  <div className="w-full flex flex-col items-center animate-in fade-in zoom-in duration-300">
                    <div className="flex items-center gap-2 mb-4 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full border border-green-500/20 text-sm font-bold">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      Success: {(doc.processedFile.size / 1024).toFixed(1)} KB
                    </div>
                    
                    {doc.preview ? (
                      <div className="bg-white p-2 rounded-lg shadow-xl mb-4 max-w-full">
                        <img src={doc.preview} alt="Result" className="max-w-[200px] max-h-[200px] object-contain block" />
                      </div>
                    ) : (
                      <div className="bg-dark-800 p-6 rounded-lg mb-4 flex flex-col items-center justify-center text-white">
                        <svg className="w-12 h-12 mb-2 text-red-450" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="text-sm font-bold">PDF Ready</span>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => downloadIndividual(key)}
                      className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 text-sm font-bold rounded-xl transition-all shadow-lg shadow-green-600/20 cursor-pointer"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      Download {doc.processedFile.name}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="mt-12 mb-12 flex justify-center border-t border-dark-800 pt-12">
        <button 
          onClick={downloadZip}
          disabled={!allProcessed}
          className={`flex items-center gap-2 px-8 py-5 rounded-xl font-bold text-white transition-all shadow-xl text-lg w-full md:w-auto justify-center cursor-pointer ${allProcessed ? 'bg-primary-600 hover:bg-primary-500 hover:scale-[1.02] shadow-primary-500/30' : 'bg-dark-800 text-dark-500 cursor-not-allowed shadow-none'}`}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          Download All Processed Documents (ZIP)
        </button>
      </div>
    </div>
  );
}
