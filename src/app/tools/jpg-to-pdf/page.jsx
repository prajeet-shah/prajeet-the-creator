"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FileDropzone from "@/components/tools/FileDropzone";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import { imagesToPdf } from "@/lib/tools/pdfProcessing";

export default function JpgToPdf() {
  const [items, setItems] = useState([]); // Array of { id, file, preview, rotation }
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultFile, setResultFile] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  const [draggedIdx, setDraggedIdx] = useState(null);

  useEffect(() => {
    return () => {
      items.forEach(item => URL.revokeObjectURL(item.preview));
      if (resultUrl) URL.revokeObjectURL(resultUrl);
    };
  }, [items, resultUrl]);

  const onFileSelect = (selected) => {
    const selectedFiles = Array.isArray(selected) ? selected : [selected];
    const newItems = selectedFiles.map((file) => ({
      id: Math.random().toString(36).substring(2, 9) + Date.now(),
      file,
      preview: URL.createObjectURL(file),
      rotation: 0,
    }));
    setItems((prev) => [...prev, ...newItems]);
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
  };

  const removeItem = (id) => {
    const itemToRemove = items.find((item) => item.id === id);
    if (itemToRemove) {
      URL.revokeObjectURL(itemToRemove.preview);
    }
    setItems((prev) => prev.filter((item) => item.id !== id));
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
  };

  const rotateItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, rotation: (item.rotation + 90) % 360 } : item
      )
    );
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

  // Rotate file using canvas before adding to PDF
  const rotateImageFile = async (file, degrees) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        
        if (degrees === 90 || degrees === 270) {
          canvas.width = img.height;
          canvas.height = img.width;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }
        
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((degrees * Math.PI) / 180);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        
        canvas.toBlob((blob) => {
          resolve(new File([blob], file.name, { type: file.type }));
        }, file.type, 0.95);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleConvert = async () => {
    if (items.length === 0) return;
    setIsProcessing(true);
    
    try {
      // Process any rotated images on canvas first
      const processedFiles = await Promise.all(
        items.map(async (item) => {
          if (item.rotation === 0) return item.file;
          return await rotateImageFile(item.file, item.rotation);
        })
      );
      
      const finalFile = await imagesToPdf(processedFiles);
      setResultFile(finalFile);
      setResultUrl(URL.createObjectURL(finalFile));
    } catch (error) {
      console.error(error);
      alert("Error converting to PDF. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadResult = () => {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = `converted-images.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const reset = () => {
    items.forEach(item => URL.revokeObjectURL(item.preview));
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
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">JPG to PDF</h1>
        <p className="text-dark-300">Convert your image files into PDF format instantly.</p>
      </div>

      <PrivacyBanner />

      <div className="bg-dark-900 border border-dark-800 rounded-2xl p-6 md:p-8">
        {!isProcessing && !resultFile && (
          <>
            <FileDropzone 
              onFileSelect={onFileSelect} 
              accept="image/jpeg,image/png,image/jpg" 
              multiple={true}
              maxSizeMB={15}
            />
            
            {items.length > 0 && (
              <div className="mt-8 border-t border-dark-800 pt-8 animate-in fade-in duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-white text-lg">Selected Images ({items.length})</h3>
                  <p className="text-xs text-dark-400 bg-dark-950 px-3 py-1 rounded-full border border-dark-800">
                    💡 Drag cards or use arrows to swap positions
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
                      className={`relative group rounded-xl border overflow-hidden aspect-square bg-dark-950 flex flex-col items-center justify-center transition-all duration-200 cursor-grab active:cursor-grabbing ${
                        draggedIdx === idx ? "border-primary-500 scale-95 opacity-50" : "border-dark-700 hover:border-dark-500 hover:shadow-lg"
                      }`}
                    >
                      <div className="w-full h-full p-3 flex items-center justify-center relative overflow-hidden bg-dark-950/40">
                        <img 
                          src={item.preview} 
                          alt={item.file.name} 
                          style={{ transform: `rotate(${item.rotation}deg)`, transition: "transform 0.2s ease" }}
                          className="max-w-full max-h-full object-contain pointer-events-none" 
                        />
                      </div>
                      
                      {/* Action overlays */}
                      <div className="absolute top-2 right-2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => rotateItem(item.id)}
                          className="bg-dark-900/90 hover:bg-primary-600 text-white p-1.5 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer"
                          title="Rotate Clockwise"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="bg-dark-900/90 hover:bg-red-650 text-white p-1.5 rounded-lg transition-all shadow-md active:scale-95 cursor-pointer"
                          title="Remove Image"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* Manual position arrows (for accessibility/easy reordering) */}
                      <div className="absolute bottom-2 inset-x-2 flex items-center justify-between z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          disabled={idx === 0}
                          onClick={() => moveItem(idx, -1)}
                          className={`bg-dark-900/90 text-white p-1 rounded-md transition-all shadow-md ${
                            idx === 0 ? "opacity-30 cursor-not-allowed" : "hover:bg-primary-600 active:scale-90 cursor-pointer"
                          }`}
                          title="Move Left"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <span className="text-[10px] font-bold bg-dark-900/90 px-2 py-0.5 rounded text-white select-none">
                          {idx + 1}
                        </span>

                        <button
                          disabled={idx === items.length - 1}
                          onClick={() => moveItem(idx, 1)}
                          className={`bg-dark-900/90 text-white p-1 rounded-md transition-all shadow-md ${
                            idx === items.length - 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-primary-600 active:scale-90 cursor-pointer"
                          }`}
                          title="Move Right"
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
                  onClick={handleConvert}
                  className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 rounded-xl text-white font-bold transition-all hover:scale-[1.02] shadow-lg cursor-pointer"
                >
                  Convert {items.length} Image{items.length > 1 ? "s" : ""} to PDF
                </button>
              </div>
            )}
          </>
        )}

        {isProcessing && (
          <div className="flex flex-col items-center justify-center min-h-[300px]">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-white font-medium text-lg">Processing images...</p>
            <p className="text-sm text-dark-400 mt-1">Applying rotation and compiling into PDF</p>
          </div>
        )}

        {resultFile && resultUrl && (
          <div className="text-center min-h-[300px] flex flex-col justify-center items-center">
            <h3 className="font-bold text-2xl mb-2 text-green-400 flex items-center justify-center gap-2">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Conversion Complete
            </h3>
            <p className="text-dark-300 mb-8">Your PDF is ready. Size: {(resultFile.size / 1024).toFixed(1)} KB</p>
            
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
