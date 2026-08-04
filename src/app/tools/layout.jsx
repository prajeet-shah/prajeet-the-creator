export const metadata = {
  title: "Document Tools | Prajeet the Creator",
  description: "Free online tools to resize photos, compress PDFs, and prepare documents for scholarship applications. 100% secure, processed locally in your browser.",
};

export default function ToolsLayout({ children }) {
  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
