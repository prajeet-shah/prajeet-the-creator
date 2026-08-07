import Link from "next/link";

export default function ToolsLandingPage() {
  const tools = [
    {
      title: "COMPEX Document Prep",
      description: "All-in-one tool to instantly resize and package all 5 documents needed for the COMPEX portal.",
      href: "/tools/compex-documents",
      icon: "🎓",
      ready: true,
    },
    {
      title: "Image Resizer",
      description: "Crop, resize, and compress your images to exact dimensions and KB size.",
      href: "/tools/image-resizer",
      icon: "🖼️",
      ready: true,
    },
    {
      title: "PDF Compressor",
      description: "Reduce the file size of your PDF documents before uploading.",
      href: "/tools/pdf-compressor",
      icon: "🗜️",
      ready: true,
    },
    {
      title: "Merge PDF",
      description: "Combine multiple PDF files or images into a single document.",
      href: "/tools/merge-pdf",
      icon: "📑",
      ready: true,
    },
    {
      title: "JPG to PDF",
      description: "Convert your image files into PDF format instantly.",
      href: "/tools/jpg-to-pdf",
      icon: "🔄",
      ready: true,
    },
    {
      title: "PDF to JPG",
      description: "Convert every page of your PDF into high-quality JPG images. Download individually or as a ZIP.",
      href: "/tools/pdf-to-jpg",
      icon: "📄",
      ready: true,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-4">
          Document Tools
        </h1>
        <p className="text-dark-300 text-lg">
          Free tools to prepare your photos and documents for scholarship applications. 
          Everything runs entirely in your browser — your files never leave your device.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.ready ? tool.href : "#"}
            className={`p-6 rounded-2xl border transition-all duration-300 ${
              tool.ready
                ? "bg-dark-900 border-dark-800 hover:border-primary-500/50 hover:bg-dark-800/80 group"
                : "bg-dark-900/50 border-dark-800/50 opacity-60 cursor-not-allowed"
            }`}
          >
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
              {tool.title}
              {!tool.ready && (
                <span className="text-[10px] uppercase tracking-wider bg-dark-800 px-2 py-1 rounded-full text-dark-400">
                  Coming Soon
                </span>
              )}
            </h2>
            <p className="text-dark-400 text-sm">{tool.description}</p>
            {tool.ready && (
              <div className="mt-4 text-primary-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Open Tool
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
