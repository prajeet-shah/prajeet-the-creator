import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist/build/pdf.mjs';

if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
}

/**
 * Generate a thumbnail data URL for a PDF file
 */
export async function generatePdfThumbnail(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
  const page = await pdf.getPage(1);
  const viewport = page.getViewport({ scale: 1.0 });
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  
  await page.render({ canvasContext: ctx, viewport }).promise;
  return canvas.toDataURL('image/jpeg');
}

/**
 * Converts images to a single PDF
 */
export async function imagesToPdf(files) {
  const pdfDoc = await PDFDocument.create();

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    
    let image;
    if (file.type === 'image/png') {
      image = await pdfDoc.embedPng(arrayBuffer);
    } else {
      image = await pdfDoc.embedJpg(arrayBuffer);
    }

    const { width, height } = image.scale(1);
    const page = pdfDoc.addPage([width, height]);
    
    page.drawImage(image, {
      x: 0,
      y: 0,
      width,
      height,
    });
  }

  const pdfBytes = await pdfDoc.save();
  return new File([pdfBytes], 'converted.pdf', { type: 'application/pdf' });
}

/**
 * Merges multiple PDFs into one
 */
export async function mergePdfs(files) {
  const mergedPdf = await PDFDocument.create();
  
  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }
  
  const pdfBytes = await mergedPdf.save();
  return new File([pdfBytes], 'merged.pdf', { type: 'application/pdf' });
}

/**
 * Client-side PDF compression based on level (extreme, recommended, less)
 */
export async function compressPdf(file, level = 'recommended') {
  try {
    // 1. Perform clean vector-level compression first as a baseline (always safe, preserves text selection)
    const arrayBuffer = await file.arrayBuffer();
    const cleanPdfDoc = await PDFDocument.load(arrayBuffer);
    const cleanPdfBytes = await cleanPdfDoc.save({ useObjectStreams: true });
    const cleanFile = new File([cleanPdfBytes], file.name, { type: 'application/pdf' });

    if (level === 'less') {
      return cleanFile;
    }

    // 2. For extreme and recommended, render pages using PDF.js and re-embed them as JPEGs
    const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
    const numPages = pdf.numPages;
    const pdfDoc = await PDFDocument.create();

    // Compression settings
    let scale = 1.15;
    let quality = 0.5;

    if (level === 'extreme') {
      scale = 0.85;
      quality = 0.35;
    }

    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale });
      
      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get 2d context for page rendering');
      
      await page.render({ canvasContext: ctx, viewport }).promise;

      // Convert page to compressed JPEG blob
      const imageBlob = await new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Failed to render page to blob'));
        }, 'image/jpeg', quality);
      });

      const imageBytes = await imageBlob.arrayBuffer();
      const embeddedImage = await pdfDoc.embedJpg(imageBytes);

      // Create a page with original layout dimensions
      const origViewport = page.getViewport({ scale: 1.0 });
      const newPage = pdfDoc.addPage([origViewport.width, origViewport.height]);
      
      newPage.drawImage(embeddedImage, {
        x: 0,
        y: 0,
        width: origViewport.width,
        height: origViewport.height,
      });
    }

    const rasterPdfBytes = await pdfDoc.save({ useObjectStreams: true });
    const rasterFile = new File([rasterPdfBytes], file.name, { type: 'application/pdf' });

    // 3. Fallback: If rasterized file size is larger than the clean vector-compressed version,
    // it means rasterization is counter-productive (usually because it's a text-heavy PDF).
    // We fall back to the vector-compressed version to keep text sharp and save bytes.
    if (rasterFile.size >= cleanFile.size) {
      console.log(`Rasterized PDF size (${(rasterFile.size / 1024 / 1024).toFixed(2)} MB) is larger than vector-compressed size (${(cleanFile.size / 1024 / 1024).toFixed(2)} MB). Falling back to clean vector PDF.`);
      return cleanFile;
    }

    return rasterFile;
  } catch (error) {
    console.error("PDF compression error:", error);
    throw error;
  }
}

/**
 * Render the first page of a PDF and return it as a JPEG File
 */
export async function pdfPageToJpg(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
  const page = await pdf.getPage(1);
  
  // Set scale to a reasonable resolution (e.g. 2.0) for good quality rendering
  const viewport = page.getViewport({ scale: 2.0 });
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  
  await page.render({ canvasContext: ctx, viewport }).promise;
  
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Canvas rendering failed'));
        return;
      }
      resolve(new File([blob], file.name.replace(/\.pdf$/i, '.jpg'), { type: 'image/jpeg' }));
    }, 'image/jpeg', 0.9);
  });
}

/**
 * Convert every page of a PDF to individual JPEG Files.
 * Returns an array of File objects, one per page.
 */
export async function allPdfPagesToJpg(
  file: File,
  scale = 2.0,
  quality = 0.92
): Promise<File[]> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) }).promise;
  const numPages = pdf.numPages;
  const baseName = file.name.replace(/\.pdf$/i, '');
  const results: File[] = [];

  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get 2d context');

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx, viewport }).promise;

    const jpgFile = await new Promise<File>((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) { reject(new Error(`Failed to render page ${i}`)); return; }
        const fileName = numPages === 1
          ? `${baseName}.jpg`
          : `${baseName}-page-${String(i).padStart(3, '0')}.jpg`;
        resolve(new File([blob], fileName, { type: 'image/jpeg' }));
      }, 'image/jpeg', quality);
    });

    results.push(jpgFile);
  }

  return results;
}
