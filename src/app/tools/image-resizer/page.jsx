"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FileDropzone from "@/components/tools/FileDropzone";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import CropperModal from "@/components/tools/CropperModal";
import { compressImage, getCroppedImg } from "@/lib/tools/imageProcessing";

export default function ImageResizer() {
  const [file, setFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultFile, setResultFile] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);
  
  // Settings state
  const [activeTab, setActiveTab] = useState("size"); // "size" or "percent"
  const [percentage, setPercentage] = useState(100);
  const [unit, setUnit] = useState("pixel"); // "pixel", "inch", "centimeter", "millimeter" — used only in By Size tab
  
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");
  const [lockAspectRatio, setLockAspectRatio] = useState(true);
  const [originalAspectRatio, setOriginalAspectRatio] = useState(1);
  const [customMaxSize, setCustomMaxSize] = useState("");
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);

  // Crop & Rotate & Info states
  const [previewRotation, setPreviewRotation] = useState(0);
  const [showCropper, setShowCropper] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    return () => {
      if (imageSrc) URL.revokeObjectURL(imageSrc);
      if (resultUrl) URL.revokeObjectURL(resultUrl);
    };
  }, [imageSrc, resultUrl]);

  const onFileSelect = (selectedFile) => {
    setFile(selectedFile);
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
    setPreviewRotation(0);
    
    const url = URL.createObjectURL(selectedFile);
    setImageSrc(url);

    // Get original dimensions to set aspect ratio and default width/height
    const img = new Image();
    img.onload = () => {
      setOriginalAspectRatio(img.width / img.height);
      setOriginalWidth(img.width);
      setOriginalHeight(img.height);
      // Show default dimensions in the current unit
      const mult = getUnitMultiplierForUnit(unit);
      setCustomWidth((img.width / mult).toFixed(unit === "pixel" ? 0 : 2));
      setCustomHeight((img.height / mult).toFixed(unit === "pixel" ? 0 : 2));
    };
    img.src = url;
  };

  const handleWidthChange = (val) => {
    setCustomWidth(val);
    if (lockAspectRatio && val && !isNaN(val)) {
      const decimals = unit === "pixel" ? 0 : 2;
      setCustomHeight((parseFloat(val) / originalAspectRatio).toFixed(decimals));
    }
  };

  const handleHeightChange = (val) => {
    setCustomHeight(val);
    if (lockAspectRatio && val && !isNaN(val)) {
      const decimals = unit === "pixel" ? 0 : 2;
      setCustomWidth((parseFloat(val) * originalAspectRatio).toFixed(decimals));
    }
  };

  const handleRotate = () => {
    setPreviewRotation((prev) => (prev + 90) % 360);
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
  };

  const handleCropComplete = async (croppedAreaPixels) => {
    setShowCropper(false);
    if (!imageSrc) return;

    try {
      setIsProcessing(true);
      const croppedFile = await getCroppedImg(imageSrc, croppedAreaPixels);
      setFile(croppedFile);
      
      const url = URL.createObjectURL(croppedFile);
      if (imageSrc) URL.revokeObjectURL(imageSrc);
      setImageSrc(url);

      setOriginalAspectRatio(croppedAreaPixels.width / croppedAreaPixels.height);
      setOriginalWidth(croppedAreaPixels.width);
      setOriginalHeight(croppedAreaPixels.height);
      // Update width/height in the currently selected unit
      const mult = getUnitMultiplier(unit);
      const decimals = unit === "pixel" ? 0 : 2;
      setCustomWidth((croppedAreaPixels.width / mult).toFixed(decimals));
      setCustomHeight((croppedAreaPixels.height / mult).toFixed(decimals));
      setPreviewRotation(0); // Reset rotation after cropping
      
      setResultFile(null);
      if (resultUrl) URL.revokeObjectURL(resultUrl);
      setResultUrl(null);
    } catch (error) {
      console.error(error);
      alert("Error cropping image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // Dimension conversions based on DPI = 96
  // Helper used before state is available (during onload)
  const getUnitMultiplierForUnit = (currentUnit) => {
    switch (currentUnit) {
      case "inch": return 96; // 1 in = 96 px
      case "centimeter": return 96 / 2.54; // 1 cm ≈ 37.795 px
      case "millimeter": return 96 / 25.4; // 1 mm ≈ 3.7795 px
      default: return 1; // pixels
    }
  };

  const getUnitMultiplier = (currentUnit) => getUnitMultiplierForUnit(currentUnit);

  const getUnitAbbreviation = (currentUnit) => {
    switch (currentUnit) {
      case "inch": return "in";
      case "centimeter": return "cm";
      case "millimeter": return "mm";
      default: return "px";
    }
  };

  // Dimensions of the preview image considering rotation
  const isRotated90or270 = previewRotation === 90 || previewRotation === 270;
  const rotatedOrigWidth = isRotated90or270 ? originalHeight : originalWidth;
  const rotatedOrigHeight = isRotated90or270 ? originalWidth : originalHeight;

  // Final processed target dimensions in pixels
  const getTargetDimensionsPx = () => {
    if (activeTab === "size") {
      // Convert the user-entered value from the selected unit back to pixels
      const mult = getUnitMultiplier(unit);
      const targetW = customWidth ? Math.round(parseFloat(customWidth) * mult) : rotatedOrigWidth;
      const targetH = customHeight ? Math.round(parseFloat(customHeight) * mult) : rotatedOrigHeight;
      return { width: targetW, height: targetH };
    } else {
      // Percentage scaling is always relative to original pixel dimensions
      const targetW = Math.round(rotatedOrigWidth * (percentage / 100));
      const targetH = Math.round(rotatedOrigHeight * (percentage / 100));
      return { width: targetW, height: targetH };
    }
  };

  const targetDims = getTargetDimensionsPx();

  // Helper to format values for selected unit
  const formatByUnit = (pxValue, selectedUnit) => {
    const mult = getUnitMultiplier(selectedUnit);
    const converted = pxValue / mult;
    if (selectedUnit === "pixel") return `${Math.round(converted)} px`;
    if (selectedUnit === "millimeter") return `${converted.toFixed(1)} mm`;
    return `${converted.toFixed(2)} ${getUnitAbbreviation(selectedUnit)}`;
  };

  const handleProcess = async () => {
    if (!imageSrc) return;
    
    setIsProcessing(true);
    
    try {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = imageSrc;
      await new Promise(resolve => img.onload = resolve);
      
      const canvas = document.createElement('canvas');
      canvas.width = targetDims.width;
      canvas.height = targetDims.height;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error("Could not get canvas context");

      // Draw rotated and resized onto the canvas
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((previewRotation * Math.PI) / 180);
      
      // If rotated 90 or 270 degrees, draw size swaps
      const drawW = isRotated90or270 ? targetDims.height : targetDims.width;
      const drawH = isRotated90or270 ? targetDims.width : targetDims.height;
      ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
      
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg', 1.0));
      const resizedFile = new File([blob], file.name, { type: 'image/jpeg' });
      
      let finalFile = resizedFile;
      
      if (customMaxSize) {
        const maxMB = parseFloat(customMaxSize) / 1024;
        finalFile = await compressImage(resizedFile, {
          maxSizeMB: maxMB,
          maxWidthOrHeight: Math.max(canvas.width, canvas.height)
        });
      }
      
      setResultFile(finalFile);
      setResultUrl(URL.createObjectURL(finalFile));
    } catch (error) {
      console.error(error);
      alert("Error processing image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadResult = () => {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = `resized-${file.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const reset = () => {
    setFile(null);
    setImageSrc(null);
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
    setPreviewRotation(0);
    setPercentage(100);
    setUnit("pixel");
  };

  return (
    <div className="max-w-6xl mx-auto font-sans">
      {showCropper && (
        <CropperModal
          imageSrc={imageSrc}
          onCropComplete={handleCropComplete}
          onCancel={() => setShowCropper(false)}
        />
      )}

      {showInfo && file && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-dark-900 border border-dark-700 w-full max-w-md rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4 border-b border-dark-800 pb-3">
              <h3 className="font-bold text-lg text-white">Image Information</h3>
              <button onClick={() => setShowInfo(false)} className="text-dark-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-3 text-sm text-dark-300">
              <div>
                <span className="font-semibold text-dark-400 block text-xs uppercase tracking-wider">File Name</span>
                <span className="text-white truncate block font-mono">{file.name}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold text-dark-400 block text-xs uppercase tracking-wider">Original Resolution</span>
                  <span className="text-white font-mono">{originalWidth} × {originalHeight} px</span>
                </div>
                <div>
                  <span className="font-semibold text-dark-400 block text-xs uppercase tracking-wider">File Size</span>
                  <span className="text-white font-mono">{(file.size / 1024).toFixed(1)} KB</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-semibold text-dark-400 block text-xs uppercase tracking-wider">File Type</span>
                  <span className="text-white font-mono">{file.type}</span>
                </div>
                <div>
                  <span className="font-semibold text-dark-400 block text-xs uppercase tracking-wider">Rotation Angle</span>
                  <span className="text-white font-mono">{previewRotation}°</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowInfo(false)}
              className="mt-6 w-full py-2.5 bg-dark-800 hover:bg-dark-700 text-white font-medium rounded-xl transition-colors text-sm border border-dark-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mb-6">
        <Link href="/tools" className="text-primary-400 hover:text-primary-300 text-sm flex items-center gap-1 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Tools
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">Image Resizer</h1>
        <p className="text-dark-300">Resize and compress your images entirely in your browser.</p>
      </div>

      <PrivacyBanner />

      <div className="flex flex-col lg:flex-row gap-0 bg-dark-950 rounded-2xl overflow-hidden border border-dark-800 shadow-2xl">
        
        {/* Left Sidebar - Settings */}
        <div className="w-full lg:w-80 bg-white text-dark-900 flex flex-col p-6 border-r border-dark-200 z-10 shadow-[4px_0_24px_rgba(0,0,0,0.05)]">
          
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-6 border-b border-dark-200 pb-2">Resize Settings</h3>
            
            {/* Tabs */}
            <div className="flex border-b border-dark-200 mb-6 gap-6">
              <button 
                onClick={() => setActiveTab("size")}
                className={`pb-2 border-b-2 text-sm font-bold transition-all ${
                  activeTab === "size"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-dark-400 hover:text-dark-600 font-medium"
                }`}
              >
                By Size
              </button>
              <button 
                onClick={() => setActiveTab("percent")}
                className={`pb-2 border-b-2 text-sm font-bold transition-all ${
                  activeTab === "percent"
                    ? "border-primary-500 text-primary-600"
                    : "border-transparent text-dark-400 hover:text-dark-600 font-medium"
                }`}
              >
                As Percentage
              </button>
            </div>

            {activeTab === "size" ? (
              <>
                {/* Unit selector for By Size tab */}
                <div className="mb-4">
                  <label className="block text-xs font-semibold text-dark-600 mb-1">Unit</label>
                  <div className="relative">
                    <select
                      value={unit}
                      onChange={(e) => {
                        const newUnit = e.target.value;
                        // Convert current width/height values from old unit to new unit
                        if (customWidth) {
                          const oldMult = getUnitMultiplier(unit);
                          const newMult = getUnitMultiplier(newUnit);
                          const px = parseFloat(customWidth) * oldMult;
                          const decimals = newUnit === "pixel" ? 0 : 2;
                          const newW = (px / newMult).toFixed(decimals);
                          const newH = customHeight ? ((parseFloat(customHeight) * oldMult) / newMult).toFixed(decimals) : "";
                          setCustomWidth(newW);
                          setCustomHeight(newH);
                        }
                        setUnit(newUnit);
                        setResultFile(null);
                        if (resultUrl) URL.revokeObjectURL(resultUrl);
                        setResultUrl(null);
                      }}
                      disabled={!file}
                      className="w-full appearance-none bg-white border border-dark-300 rounded-lg pl-3 pr-8 py-2 text-sm font-medium text-dark-800 focus:outline-none focus:border-primary-500 cursor-pointer"
                    >
                      <option value="pixel">Pixel (px)</option>
                      <option value="inch">Inch (in)</option>
                      <option value="centimeter">Centimeter (cm)</option>
                      <option value="millimeter">Millimeter (mm)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-dark-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 relative">
                  <div>
                    <label className="block text-xs font-semibold text-dark-600 mb-1">Width</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        value={customWidth}
                        onChange={(e) => handleWidthChange(e.target.value)}
                        className="w-full bg-white border border-dark-300 rounded-lg px-3 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none pr-10 transition-all" 
                        placeholder="Auto"
                        disabled={!file}
                        step={unit === "pixel" ? 1 : 0.01}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-dark-400">{getUnitAbbreviation(unit)}</span>
                    </div>
                  </div>
                  
                  {/* Link icon connecting width and height visually */}
                  <div className="absolute left-1/2 top-[28px] -translate-x-1/2 text-dark-300 bg-white px-1">
                    <svg className={`w-4 h-4 ${lockAspectRatio ? 'text-primary-500' : 'text-dark-300'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-dark-600 mb-1">Height</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        value={customHeight}
                        onChange={(e) => handleHeightChange(e.target.value)}
                        className="w-full bg-white border border-dark-300 rounded-lg px-3 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none pr-10 transition-all" 
                        placeholder="Auto"
                        disabled={!file}
                        step={unit === "pixel" ? 1 : 0.01}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-dark-400">{getUnitAbbreviation(unit)}</span>
                    </div>
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer mb-8 group">
                  <div className="relative flex items-center justify-center">
                    <input 
                      type="checkbox" 
                      checked={lockAspectRatio}
                      onChange={(e) => setLockAspectRatio(e.target.checked)}
                      className="w-4 h-4 rounded border-dark-300 text-primary-600 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer"
                      disabled={!file}
                    />
                  </div>
                  <span className="text-sm font-medium text-dark-600 group-hover:text-dark-800 transition-colors">Lock Aspect Ratio</span>
                </label>
              </>
            ) : (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-dark-600">Scale</label>
                  <span className="text-sm font-bold text-primary-600">{percentage}%</span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="200"
                  value={percentage}
                  onChange={(e) => {
                    setPercentage(parseInt(e.target.value, 10));
                    setResultFile(null);
                    if (resultUrl) URL.revokeObjectURL(resultUrl);
                    setResultUrl(null);
                  }}
                  disabled={!file}
                  className="w-full h-2 bg-dark-100 rounded-lg appearance-none cursor-pointer accent-primary-500 mb-4"
                />

                {/* Quick percentage presets */}
                <div className="flex gap-2 mb-6 flex-wrap">
                  {[25, 50, 75, 100, 150].map((p) => (
                    <button
                      key={p}
                      onClick={() => {
                        setPercentage(p);
                        setResultFile(null);
                        if (resultUrl) URL.revokeObjectURL(resultUrl);
                        setResultUrl(null);
                      }}
                      disabled={!file}
                      className={`flex-1 py-1 text-xs font-bold rounded-lg border transition-all ${
                        percentage === p
                          ? "bg-primary-500 text-white border-primary-500"
                          : "bg-white text-dark-600 border-dark-300 hover:border-primary-400 hover:text-primary-600"
                      } disabled:opacity-40 disabled:cursor-not-allowed`}
                    >
                      {p}%
                    </button>
                  ))}
                </div>
                
                <div className="border border-dark-200 rounded-xl p-3 bg-dark-50/50">
                  <div className="text-xs text-dark-600 font-medium">
                    Scale to <span className="font-bold text-dark-900">{percentage}%</span> of original size
                  </div>
                  {originalWidth > 0 && (
                    <div className="mt-1.5 text-xs text-dark-500 font-mono">
                      {originalWidth} × {originalHeight} px → <span className="text-primary-600 font-bold">{Math.round(rotatedOrigWidth * percentage / 100)} × {Math.round(rotatedOrigHeight * percentage / 100)} px</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <h3 className="font-bold text-lg mb-6 border-b border-dark-200 pb-2 flex items-center justify-between cursor-pointer">
              Export Settings
              <svg className="w-5 h-5 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
            </h3>
            
            <div className="mb-8">
              <label className="block text-xs font-semibold text-dark-600 mb-1">Target File Size (optional)</label>
              <div className="relative">
                <input 
                  type="number" 
                  value={customMaxSize}
                  onChange={(e) => setCustomMaxSize(e.target.value)}
                  className="w-full bg-white border border-dark-300 rounded-lg px-3 py-2 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 focus:outline-none pr-12 transition-all" 
                  placeholder="Leave empty for auto"
                  disabled={!file}
                />
                <div className="absolute right-0 top-0 bottom-0 flex items-center bg-dark-50 border-l border-dark-300 rounded-r-lg px-3 pointer-events-none">
                  <span className="text-xs font-medium text-dark-500">KB ▼</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-dark-200">
            <button
              onClick={resultFile ? downloadResult : handleProcess}
              disabled={!file || isProcessing}
              className={`w-full py-3.5 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98] ${
                file && !isProcessing
                  ? resultFile 
                    ? "bg-green-600 hover:bg-green-500" 
                    : "bg-blue-500 hover:bg-blue-600"
                  : "bg-dark-200 text-dark-400 shadow-none cursor-not-allowed"
              }`}
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : resultFile ? (
                <>
                  Download
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </>
              ) : (
                <>
                  Export
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Main Area - Preview */}
        <div className="flex-1 bg-dark-50/5 relative min-h-[500px]">
          {/* Header Toolbar */}
          <div className="absolute top-0 left-0 right-0 h-16 border-b border-dark-800 bg-dark-900/50 flex items-center justify-between px-6 z-10 backdrop-blur-sm">
            <div className="flex items-center gap-4 text-dark-300">
              <button onClick={reset} className="p-2 hover:bg-dark-800 rounded-lg transition-colors cursor-pointer" title="Add Image">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
              </button>
              <div className="w-px h-6 bg-dark-700"></div>
              <button className="p-2 hover:bg-dark-800 rounded-lg transition-colors cursor-pointer" title="List View">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <button onClick={reset} className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors cursor-pointer" title="Clear All">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </div>
            {resultFile && (
               <button onClick={downloadResult} className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-full transition-colors flex items-center gap-2">
                 DOWNLOAD
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </button>
            )}
          </div>

          <div className="pt-24 pb-10 px-6 h-full flex flex-col items-center justify-center">
            {!file && (
              <div className="w-full max-w-lg bg-dark-900 rounded-2xl shadow-xl overflow-hidden border border-dark-800">
                <FileDropzone onFileSelect={onFileSelect} accept="image/jpeg,image/png,image/jpg" />
              </div>
            )}

            {file && !resultFile && (
              <div className="bg-white rounded-lg shadow-2xl p-1 inline-block max-w-full">
                <div className="bg-dark-100/50 rounded flex items-center justify-center p-4 relative overflow-hidden">
                  
                  {/* Tool Action Overlay on Uploaded Preview Card */}
                  <div className="absolute top-2 right-2 flex gap-1.5 z-10">
                    <button 
                      onClick={() => setShowCropper(true)} 
                      className="p-1.5 bg-white/95 hover:bg-white text-dark-700 hover:text-primary-600 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer" 
                      title="Crop"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                    </button>
                    <button 
                      onClick={handleRotate} 
                      className="p-1.5 bg-white/95 hover:bg-white text-dark-700 hover:text-primary-600 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer" 
                      title="Rotate"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </button>
                    <button 
                      onClick={() => setShowInfo(true)} 
                      className="p-1.5 bg-white/95 hover:bg-white text-dark-700 hover:text-primary-600 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer" 
                      title="Info"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                    <button 
                      onClick={reset} 
                      className="p-1.5 bg-white/95 hover:bg-red-50 text-dark-700 hover:text-red-650 rounded-lg shadow-md transition-all active:scale-95 cursor-pointer" 
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>

                  <img 
                    src={imageSrc} 
                    alt="Preview" 
                    style={{ transform: `rotate(${previewRotation}deg)`, transition: "transform 0.2s ease" }}
                    className="max-w-full max-h-[50vh] object-contain block shadow-sm border border-dark-200" 
                  />
                </div>
                <div className="p-3 border-t border-dark-200 bg-white text-dark-900 rounded-b-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-medium text-sm truncate max-w-[200px] text-dark-600">{file.name}</span>
                  <div className="flex items-center gap-2 bg-dark-100 px-3 py-1.5 rounded-full">
                    <span className="text-xs font-semibold text-dark-500">
                      {formatByUnit(rotatedOrigWidth, unit)} × {formatByUnit(rotatedOrigHeight, unit)}
                    </span>
                    <svg className="w-3 h-3 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    <span className="text-xs font-bold text-primary-600">
                      {formatByUnit(targetDims.width, unit)} × {formatByUnit(targetDims.height, unit)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {resultFile && resultUrl && (
              <div className="bg-white rounded-lg shadow-2xl p-1 inline-block max-w-full animate-in fade-in zoom-in duration-300">
                <div className="bg-dark-100/50 rounded flex items-center justify-center p-4 relative">
                  <div className="absolute top-2 right-2 flex gap-1 z-10">
                    <button 
                      onClick={() => setShowInfo(true)} 
                      className="p-1.5 bg-white/80 hover:bg-white text-dark-600 rounded shadow-sm transition-colors backdrop-blur-sm cursor-pointer" 
                      title="Info"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                    <button 
                      onClick={reset} 
                      className="p-1.5 bg-white/80 hover:bg-red-55 hover:text-white text-dark-600 rounded shadow-sm transition-colors backdrop-blur-sm cursor-pointer" 
                      title="Close"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                  <img src={resultUrl} alt="Result Preview" className="max-w-full max-h-[50vh] object-contain block shadow-sm border border-dark-200" />
                </div>
                
                <div className="p-4 border-t border-dark-200 bg-white text-dark-900 rounded-b-lg">
                  <p className="font-bold text-sm text-dark-800 mb-2 truncate max-w-sm">{file.name}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2 bg-dark-100 px-3 py-1.5 rounded font-mono text-xs">
                       <span className="text-dark-500">{formatByUnit(rotatedOrigWidth, unit)} x {formatByUnit(rotatedOrigHeight, unit)}</span>
                       <svg className="w-3 h-3 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                       <span className="text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded">{formatByUnit(targetDims.width, unit)} x {formatByUnit(targetDims.height, unit)}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-dark-100 px-3 py-1.5 rounded font-mono text-xs">
                       <span className="text-dark-500">{(file.size / 1024).toFixed(1)} KB</span>
                       <svg className="w-3 h-3 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                       <span className="text-primary-600 font-bold bg-primary-50 px-1.5 py-0.5 rounded">{(resultFile.size / 1024).toFixed(1)} KB</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
