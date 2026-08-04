"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FileDropzone from "@/components/tools/FileDropzone";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import { mergePdfs, generatePdfThumbnail } from "@/lib/tools/pdfProcessing";

export default function MergePdf() {
  const [items, setItems] = useState([]); // Array of { id, file, thumbnail }
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultFile, setResultFile] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [draggedIdx, setDraggedIdx] = useState(null);

  useEffect(() => {
    return () => {
      if (resultUrl) URL.revokeObjectURL(resultUrl);
    };
  }, [resultUrl]);

  const onFileSelect = async (selected) => {
    const selectedFiles = Array.isArray(selected) ? selected : [selected];
    const newItems = selectedFiles.map((file) => ({
      id: Math.random().toString(36).substring(2, 9) + Date.now(),
      file,
      thumbnail: null,
    }));
    
    setItems((prev) => [...prev, ...newItems]);
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);

    // Generate thumbnails asynchronously
    for (const item of newItems) {
      try {
        const thumbnail = await generatePdfThumbnail(item.file);
        setItems((prev) =>
          prev.map((p) => (p.id === item.id ? { ...p, thumbnail } : p))
        );
      } catch (e) {
        console.error("Could not generate thumbnail for", item.file.name, e);
      }
    }
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
  };

  const moveItem = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= items.length) return;
    
    const reorderedItems = [...items];
    const temp = reorderedItems[index];
    reorderedItems[index] = reorderedItems[newIndex];
    reorderedItems[newIndex] = temp;
    
    setItems(reorderedItems);
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
  };

  // Drag & Drop Swapping
  const handleDragStart = (e, index) => {
    setDraggedIdx(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === index) return;
    
    const reorderedItems = [...items];
    const [draggedItem] = reorderedItems.splice(draggedIdx, 1);
    reorderedItems.splice(index, 0, draggedItem);
    
    setItems(reorderedItems);
    setDraggedIdx(null);
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
  };

  const handleMerge = async () => {
    if (items.length < 2) return;
    setIsProcessing(true);
    
    try {
      const filesToMerge = items.map((item) => item.file);
      const finalFile = await mergePdfs(filesToMerge);
      setResultFile(finalFile);
      setResultUrl(URL.createObjectURL(finalFile));
    } catch (error) {
      console.error(error);
      alert("Error merging PDFs. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadResult = () => {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = `merged-document.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const reset = () => {
    setItems([]);
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
  };

  return (
    <div className="max-w-5xl mx-auto font-sans">
      <div className="mb-6">
        <Link href="/tools" className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Tools
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">Merge PDF</h1>
        <p className="text-dark-300">Combine multiple PDF files into a single document.</p>
      </div>

      <PrivacyBanner />

      <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 md:p-8">
        {!isProcessing && !resultFile && (
          <>
            <FileDropzone 
              onFileSelect={onFileSelect} 
              accept="application/pdf" 
              multiple={true}
              maxSizeMB={50}
            />
            
            {items.length > 0 && (
              <div className="mt-8 border-t border-dark-800 pt-8 animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-white text-lg">Selected PDFs ({items.length})</h3>
                  <p className="text-xs text-dark-400 bg-dark-950 px-3 py-1 rounded-full border border-dark-800">
                    💡 Drag cards or use arrows to swap merge order
                  </p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-8">
                  {items.map((item, idx) => (
                    <div 
                      key={item.id} 
                      draggable
                      onDragStart={(e) => handleDragStart(e, idx)}
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, idx)}
                      className={`relative group rounded-xl border overflow-hidden aspect-[1/1.4] bg-dark-950 flex flex-col transition-all duration-200 cursor-grab active:cursor-grabbing ${
                        draggedIdx === idx ? "border-primary-500 scale-95 opacity-50" : "border-dark-700 hover:border-dark-500 hover:shadow-lg"
                      }`}
                    >
                      <div className="flex-1 p-3 flex items-center justify-center relative bg-white overflow-hidden">
                        {item.thumbnail ? (
                          <img src={item.thumbnail} alt={item.file.name} className="w-full h-full object-contain pointer-events-none" />
                        ) : (
                          <svg className="w-12 h-12 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        )}
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="absolute top-2 right-2 bg-red-650 hover:bg-red-750 text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md cursor-pointer"
                          title="Remove PDF"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="bg-dark-950/80 border-t border-dark-800 p-2 text-xs truncate text-center text-dark-300 select-none">
                        {item.file.name}
                      </div>

                      {/* Manual position arrows & Index label */}
                      <div className="absolute bottom-10 inset-x-2 flex items-center justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          disabled={idx === 0}
                          onClick={(e) => { e.stopPropagation(); moveItem(idx, -1); }}
                          className={`bg-dark-900/90 text-white p-1 rounded-md transition-all shadow-md ${
                            idx === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-primary-600 active:scale-90 cursor-pointer"
                          }`}
                          title="Move Up"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <span className="text-[10px] font-bold bg-primary-600 px-2 py-0.5 rounded text-white select-none">
                          {idx + 1}
                        </span>

                        <button
                          disabled={idx === items.length - 1}
                          onClick={(e) => { e.stopPropagation(); moveItem(idx, 1); }}
                          className={`bg-dark-900/90 text-white p-1 rounded-md transition-all shadow-md ${
                            idx === items.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-primary-600 active:scale-90 cursor-pointer"
                          }`}
                          title="Move Down"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={handleMerge}
                  disabled={items.length < 2}
                  className={`w-full sm:w-auto px-8 py-4 rounded-xl font-bold transition-all shadow-lg cursor-pointer ${
                    items.length >= 2 
                      ? "bg-primary-600 hover:bg-primary-500 text-white hover:scale-[1.02]" 
                      : "bg-dark-800 text-dark-500 cursor-not-allowed"
                  }`}
                >
                  Merge {items.length} PDFs
                </button>
                {items.length === 1 && (
                  <p className="text-red-400 text-sm mt-2">Please upload at least one more PDF to merge.</p>
                )}
              </div>
            )}
          </>
        )}

        {isProcessing && (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-white font-medium text-lg">Merging PDFs...</p>
            <p className="text-sm text-dark-400 mt-1">Stitching documents into a single PDF file</p>
          </div>
        )}

        {resultFile && resultUrl && (
          <div className="text-center min-h-[300px] flex flex-col justify-center items-center">
            <h3 className="font-bold text-2xl mb-2 text-green-400 flex items-center justify-center gap-2">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Merge Complete
            </h3>
            <p className="text-dark-300 mb-8">Your merged PDF is ready. Size: {(resultFile.size / 1024 / 1024).toFixed(2)} MB</p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              <button
                onClick={downloadResult}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 hover:bg-primary-500 rounded-xl text-white font-bold transition-all hover:scale-[1.02] cursor-pointer"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download PDF
              </button>
              <button
                onClick={reset}
                className="w-full sm:w-auto px-6 py-4 bg-dark-800 hover:bg-dark-700 rounded-xl text-white font-medium transition-colors cursor-pointer"
              >
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
