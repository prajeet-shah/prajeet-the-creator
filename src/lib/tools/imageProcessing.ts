import imageCompression from 'browser-image-compression';

export const COMPEX_PHOTO_SPEC = {
  width: 276,
  height: 354,
  dpi: 200,
  minSizeKB: 120,
  maxSizeKB: 180,
  targetSizeKB: 150,
};

/**
 * Creates an image from a URL
 */
export const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous'); 
    image.src = url;
  });

/**
 * Crop image based on coordinates
 */
export async function getCroppedImg(
  imageSrc,
  pixelCrop,
  targetWidth,
  targetHeight
) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('No 2d context');
  }

  // Set canvas size to the target dimensions if provided, otherwise to the crop dimensions
  canvas.width = targetWidth || pixelCrop.width;
  canvas.height = targetHeight || pixelCrop.height;

  // Draw the cropped image onto the canvas, resizing it if target dimensions are provided
  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    canvas.width,
    canvas.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Canvas is empty'));
        return;
      }
      resolve(new File([blob], 'cropped.jpg', { type: 'image/jpeg' }));
    }, 'image/jpeg', 1.0); // max quality for crop, compress later
  });
}

/**
 * Compress and optionally resize an image
 */
export async function compressImage(
  file,
  options
) {
  const compressionOptions = {
    maxSizeMB: options.maxSizeMB,
    maxWidthOrHeight: options.maxWidthOrHeight,
    useWebWorker: true,
    fileType: 'image/jpeg',
  };

  try {
    const compressedFile = await imageCompression(file, compressionOptions);
    return compressedFile;
  } catch (error) {
    console.error("Compression error:", error);
    throw error;
  }
}

const loadImageFile = (file) =>
  new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('The selected image could not be read.'));
    };
    image.src = url;
  });

const canvasToJpeg = (canvas, quality) =>
  new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('The photo could not be converted to JPEG.'));
        return;
      }
      resolve(blob);
    }, 'image/jpeg', quality);
  });

/**
 * Adds or updates the JFIF density header so the JPEG records its intended
 * physical resolution. Canvas encoders otherwise commonly write 96 DPI.
 */
export async function setJpegDpi(blob, dpi) {
  const bytes = new Uint8Array(await blob.arrayBuffer());
  if (bytes[0] !== 0xff || bytes[1] !== 0xd8) {
    throw new Error('Expected a JPEG file.');
  }

  let offset = 2;
  while (offset + 4 < bytes.length && bytes[offset] === 0xff) {
    const marker = bytes[offset + 1];
    if (marker === 0xda || marker === 0xd9) break;

    const length = (bytes[offset + 2] << 8) | bytes[offset + 3];
    const isJfif =
      marker === 0xe0 &&
      bytes[offset + 4] === 0x4a &&
      bytes[offset + 5] === 0x46 &&
      bytes[offset + 6] === 0x49 &&
      bytes[offset + 7] === 0x46 &&
      bytes[offset + 8] === 0x00;

    if (isJfif) {
      bytes[offset + 11] = 1; // density is expressed in dots per inch
      bytes[offset + 12] = (dpi >> 8) & 0xff;
      bytes[offset + 13] = dpi & 0xff;
      bytes[offset + 14] = (dpi >> 8) & 0xff;
      bytes[offset + 15] = dpi & 0xff;
      return new Blob([bytes], { type: 'image/jpeg' });
    }

    if (length < 2) break;
    offset += length + 2;
  }

  const jfifHeader = new Uint8Array([
    0xff, 0xe0, 0x00, 0x10,
    0x4a, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0x01,
    (dpi >> 8) & 0xff, dpi & 0xff,
    (dpi >> 8) & 0xff, dpi & 0xff,
    0x00, 0x00,
  ]);
  return new Blob([bytes.slice(0, 2), jfifHeader, bytes.slice(2)], { type: 'image/jpeg' });
}

export async function readJpegDpi(file) {
  const bytes = new Uint8Array(await file.arrayBuffer());
  let offset = 2;

  while (offset + 15 < bytes.length && bytes[offset] === 0xff) {
    const marker = bytes[offset + 1];
    if (marker === 0xda || marker === 0xd9) break;
    const length = (bytes[offset + 2] << 8) | bytes[offset + 3];
    const isJfif = marker === 0xe0 && bytes[offset + 4] === 0x4a && bytes[offset + 5] === 0x46 && bytes[offset + 6] === 0x49 && bytes[offset + 7] === 0x46 && bytes[offset + 8] === 0x00;

    if (isJfif && bytes[offset + 11] === 1) {
      return {
        x: (bytes[offset + 12] << 8) | bytes[offset + 13],
        y: (bytes[offset + 14] << 8) | bytes[offset + 15],
      };
    }
    if (length < 2) break;
    offset += length + 2;
  }
  return null;
}

export async function readImageDimensions(file) {
  const image = await loadImageFile(file);
  return { width: image.naturalWidth, height: image.naturalHeight };
}

/** Creates a COMPEX-ready photograph from a cropped image. */
export async function createCompexPhoto(file) {
  const image = await loadImageFile(file);
  const canvas = document.createElement('canvas');
  canvas.width = COMPEX_PHOTO_SPEC.width;
  canvas.height = COMPEX_PHOTO_SPEC.height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('No 2D canvas context is available.');
  context.drawImage(image, 0, 0, canvas.width, canvas.height);

  const maximumBytes = (COMPEX_PHOTO_SPEC.maxSizeKB - 2) * 1024;
  let low = 0.1;
  let high = 1;
  let best = await canvasToJpeg(canvas, low);

  if (best.size > maximumBytes) {
    throw new Error('This photo cannot be compressed below 180 KB. Please use a simpler image.');
  }

  for (let attempt = 0; attempt < 8; attempt += 1) {
    const quality = (low + high) / 2;
    const candidate = await canvasToJpeg(canvas, quality);
    if (candidate.size <= maximumBytes) {
      best = candidate;
      low = quality;
    } else {
      high = quality;
    }
  }

  let output = await setJpegDpi(best, COMPEX_PHOTO_SPEC.dpi);
  const targetBytes = COMPEX_PHOTO_SPEC.targetSizeKB * 1024;
  if (output.size < targetBytes) {
    output = new Blob([output, new Uint8Array(targetBytes - output.size)], { type: 'image/jpeg' });
  }
  if (output.size < COMPEX_PHOTO_SPEC.minSizeKB * 1024 || output.size > COMPEX_PHOTO_SPEC.maxSizeKB * 1024) {
    throw new Error('The generated photo does not meet the 120–180 KB size requirement.');
  }

  return new File([output], 'passport_photo.jpg', { type: 'image/jpeg' });
}
