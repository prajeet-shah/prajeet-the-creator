"use client";

import { useCallback, useState } from "react";

export default function FileDropzone({ onFileSelect, accept = "image/*", maxSizeMB = 10, multiple = false }) {
  const [isDragActive, setIsDragActive] = useState(false);
  const [error, setError] = useState(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
      setError(null);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        validateAndPassFiles(e.dataTransfer.files);
      }
    },
    [accept, maxSizeMB, multiple]
  );

  const handleChange = (e) => {
    e.preventDefault();
    setError(null);
    if (e.target.files && e.target.files.length > 0) {
      validateAndPassFiles(e.target.files);
    }
  };

  const validateAndPassFiles = (fileList) => {
    const filesArray = Array.from(fileList);
    if (filesArray.length === 0) return;

    const validFiles = [];
    let validationError = null;

    for (const file of filesArray) {
      // Check type if accept is not wildcard
      if (accept && accept !== "*") {
        const acceptedTypes = accept.split(",").map(t => t.trim());
        const isValidType = acceptedTypes.some(type => {
          if (type.endsWith("/*")) {
            return file.type.startsWith(type.replace("/*", ""));
          }
          return file.type === type || file.name.toLowerCase().endsWith(type.toLowerCase());
        });

        if (!isValidType) {
          validationError = `Invalid file type. Please upload ${accept} file(s).`;
          continue;
        }
      }

      // Check size
      if (file.size > maxSizeMB * 1024 * 1024) {
        validationError = `File "${file.name}" is too large. Maximum size is ${maxSizeMB}MB.`;
        continue;
      }

      validFiles.push(file);
    }

    if (validationError && validFiles.length === 0) {
      setError(validationError);
      return;
    }

    if (validFiles.length > 0) {
      if (multiple) {
        onFileSelect(validFiles);
      } else {
        onFileSelect(validFiles[0]);
      }
    }
  };

  return (
    <div className="w-full">
      <div
        className={`relative border-2 border-dashed rounded-2xl p-10 text-center transition-all duration-200 ${
          isDragActive
            ? "border-primary-500 bg-primary-500/10"
            : "border-dark-700 bg-dark-900/50 hover:border-dark-500 hover:bg-dark-800/50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
          accept={accept}
          multiple={multiple}
        />
        
        <div className="pointer-events-none flex flex-col items-center justify-center space-y-4">
          <div className={`p-4 rounded-full ${isDragActive ? 'bg-primary-500/20 text-primary-400' : 'bg-dark-800 text-dark-400'}`}>
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <div>
            <p className="text-lg font-semibold text-white">
              Drag & Drop your file{multiple ? "s" : ""} here
            </p>
            <p className="text-sm text-dark-400 mt-1">
              or click to browse from your device
            </p>
          </div>
          <div className="text-xs text-dark-500 bg-dark-900 px-3 py-1 rounded-full border border-dark-800">
            Max size: {maxSizeMB}MB • Formats: {accept.replace(/,/g, ", ")}
          </div>
        </div>
      </div>
      
      {error && (
        <div className="mt-3 text-red-400 text-sm flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
