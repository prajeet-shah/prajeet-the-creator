"use client";

import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

export default function CropperModal({ imageSrc, onCropComplete, onCancel, targetWidth, targetHeight }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  // If width and height are provided, we enforce an aspect ratio
  const aspect = (targetWidth && targetHeight) ? targetWidth / targetHeight : undefined;

  const onCropCompleteInternal = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = () => {
    if (croppedAreaPixels) {
      onCropComplete(croppedAreaPixels);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-dark-900 w-full max-w-2xl rounded-2xl overflow-hidden border border-dark-700 shadow-2xl flex flex-col">
        <div className="p-4 border-b border-dark-800 flex items-center justify-between">
          <h3 className="font-bold text-lg">Crop Photo</h3>
          <button onClick={onCancel} className="text-dark-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="relative h-[60vh] w-full bg-dark-950">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onCropComplete={onCropCompleteInternal}
            onZoomChange={setZoom}
            objectFit="contain"
          />
        </div>
        
        <div className="p-4 bg-dark-900 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 flex items-center gap-3">
            <span className="text-sm text-dark-400">Zoom</span>
            <input
              type="range"
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e) => setZoom(e.target.value)}
              className="w-full accent-primary-500"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onCancel}
              className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-700 text-white text-sm font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 sm:flex-none px-6 py-2 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium transition-colors"
            >
              Apply Crop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
