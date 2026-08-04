"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import FileDropzone from "@/components/tools/FileDropzone";
import PrivacyBanner from "@/components/tools/PrivacyBanner";
import { compressPdf, generatePdfThumbnail } from "@/lib/tools/pdfProcessing";

export default function PdfCompressor() {
  const [file, setFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [compressionLevel, setCompressionLevel] = useState("recommended"); // "extreme", "recommended", "less"
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultFile, setResultFile] = useState(null);
  const [resultUrl, setResultUrl] = useState(null);

  useEffect(() => {
    return () => {
      if (resultUrl) URL.revokeObjectURL(resultUrl);
    };
  }, [resultUrl]);

  const onFileSelect = async (selectedFile) => {
    setFile(selectedFile);
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
    setThumbnail(null);
    
    try {
      const thumb = await generatePdfThumbnail(selectedFile);
      setThumbnail(thumb);
    } catch (e) {
      console.error("Could not generate thumbnail", e);
    }
  };

  const handleCompress = async () => {
    if (!file) return;
    setIsProcessing(true);
    
    try {
      const finalFile = await compressPdf(file, compressionLevel);
      setResultFile(finalFile);
      setResultUrl(URL.createObjectURL(finalFile));
    } catch (error) {
      console.error(error);
      alert("Error compressing PDF. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadResult = () => {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = `compressed-${file.name}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const reset = () => {
    setFile(null);
    setThumbnail(null);
    setResultFile(null);
    if (resultUrl) URL.revokeObjectURL(resultUrl);
    setResultUrl(null);
    setCompressionLevel("recommended");
  };

  const getCompressionRatio = () => {
    if (!file || !resultFile) return 0;
    const ratio = ((file.size - resultFile.size) / file.size) * 100;
    return ratio > 0 ? ratio.toFixed(1) : 0;
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
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-display)] mb-3">PDF Compressor</h1>
        <p className="text-dark-300">Reduce the file size of your PDF documents (best-effort local compression).</p>
      </div>

      <PrivacyBanner />

      <div className="bg-dark-900 border border-dark-800 rounded-2xl overflow-hidden shadow-2xl p-6 md:p-8">
        {!file && !isProcessing && !resultFile && (
          <FileDropzone onFileSelect={onFileSelect} accept="application/pdf" maxSizeMB={100} />
        )}

        {isProcessing && (
          <div className="flex flex-col items-center justify-center min-h-[350px]">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-white font-medium text-lg">Compressing PDF locally...</p>
            <p className="text-sm text-dark-400 mt-1">Rasterizing pages & optimizing file size</p>
          </div>
        )}

        {file && !isProcessing && !resultFile && (
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* Left Preview Pane */}
            <div className="flex-1 bg-dark-950 rounded-2xl border border-dark-800 p-6 flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-40 aspect-[1/1.4] bg-white rounded-xl shadow-xl border border-dark-200 p-1 flex items-center justify-center relative overflow-hidden mb-4 group">
                {thumbnail ? (
                  <img src={thumbnail} alt="PDF First Page" className="w-full h-full object-contain" />
                ) : (
                  <svg className="w-16 h-16 text-dark-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )}
                <button 
                  onClick={reset}
                  className="absolute top-2 right-2 bg-red-650 hover:bg-red-750 text-white p-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg cursor-pointer"
                  title="Remove File"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h4 className="font-semibold text-white text-center truncate max-w-xs mb-1" title={file.name}>
                {file.name}
              </h4>
              <p className="text-xs font-mono text-dark-400">
                Size: {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            {/* Right Compression Settings Pane */}
            <div className="w-full lg:w-96 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-dark-800 pt-6 lg:pt-0 lg:pl-8">
              <div>
                <h3 className="font-bold text-white text-lg mb-6 tracking-wide">Compression Level</h3>
                <div className="space-y-4 mb-8">
                  {/* Extreme Compression */}
                  <label 
                    className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                      compressionLevel === "extreme"
                        ? "border-red-500 bg-red-500/5 text-white"
                        : "border-dark-800 bg-dark-950/40 text-dark-300 hover:border-dark-700"
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="compressionLevel" 
                      value="extreme"
                      checked={compressionLevel === "extreme"}
                      onChange={() => setCompressionLevel("extreme")}
                      className="mt-1 accent-red-500 cursor-pointer w-4 h-4"
                    />
                    <div>
                      <span className="font-bold block text-sm">EXTREME COMPRESSION</span>
                      <span className="text-xs text-dark-400">Less quality, high compression</span>
                    </div>
                  </label>

                  {/* Recommended Compression */}
                  <label 
                    className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                      compressionLevel === "recommended"
                        ? "border-red-500 bg-red-500/5 text-white"
                        : "border-dark-800 bg-dark-950/40 text-dark-300 hover:border-dark-700"
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="compressionLevel" 
                      value="recommended"
                      checked={compressionLevel === "recommended"}
                      onChange={() => setCompressionLevel("recommended")}
                      className="mt-1 accent-red-500 cursor-pointer w-4 h-4"
                    />
                    <div>
                      <span className="font-bold block text-sm">RECOMMENDED COMPRESSION</span>
                      <span className="text-xs text-dark-400">Good quality, good compression</span>
                    </div>
                  </label>

                  {/* Less Compression */}
                  <label 
                    className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                      compressionLevel === "less"
                        ? "border-red-500 bg-red-500/5 text-white"
                        : "border-dark-800 bg-dark-950/40 text-dark-300 hover:border-dark-700"
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="compressionLevel" 
                      value="less"
                      checked={compressionLevel === "less"}
                      onChange={() => setCompressionLevel("less")}
                      className="mt-1 accent-red-500 cursor-pointer w-4 h-4"
                    />
                    <div>
                      <span className="font-bold block text-sm">LESS COMPRESSION</span>
                      <span className="text-xs text-dark-400">High quality, less compression</span>
                    </div>
                  </label>
                </div>
              </div>

              <button
                onClick={handleCompress}
                className="w-full py-4 bg-red-600 hover:bg-red-500 active:scale-[0.99] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-red-650/10 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Compress PDF</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        )}

        {resultFile && resultUrl && (
          <div className="text-center min-h-[300px] flex flex-col justify-center items-center">
            <h3 className="font-bold text-2xl mb-6 text-green-400 flex items-center justify-center gap-2">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Compression Complete
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-lg mb-8">
              <div className="bg-dark-950 p-4 rounded-xl border border-dark-800">
                <p className="text-xs text-dark-400 uppercase tracking-wider mb-1">Original Size</p>
                <p className="text-xl font-semibold text-white">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <div className="bg-dark-950 p-4 rounded-xl border border-dark-800">
                <p className="text-xs text-dark-400 uppercase tracking-wider mb-1">New Size</p>
                <p className="text-xl font-semibold text-primary-400">{(resultFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <div className="bg-dark-950 p-4 rounded-xl border border-dark-800">
                <p className="text-xs text-dark-400 uppercase tracking-wider mb-1">Saved</p>
                <p className="text-xl font-semibold text-green-400">{getCompressionRatio()}%</p>
              </div>
            </div>

            {getCompressionRatio() == 0 && (
              <p className="text-yellow-400 text-sm mb-6 bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20 max-w-lg">
                <strong>Note:</strong> Client-side compression is limited. Your PDF is already highly compressed or contains vector text and elements that cannot be compressed further without rasterization. Select <strong>Extreme</strong> or <strong>Recommended</strong> levels to apply rasterization-based sizing.
              </p>
            )}
            
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
