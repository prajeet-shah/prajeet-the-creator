export const metadata = {
  title: "Contact Us | Prajeet the Creator",
  description: "Get in touch with Prajeet the Creator for any questions about scholarships.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative overflow-hidden grid-bg">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-dark-400 text-lg max-w-xl mx-auto leading-relaxed">
            Have questions about scholarships, application processes, or guidance? Feel free to reach out!
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-2xl border border-dark-800/50 bg-dark-800/20 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mx-auto text-primary-400 text-3xl">
            ✉️
          </div>

          <p className="text-dark-200 text-lg sm:text-xl font-medium max-w-lg mx-auto leading-relaxed">
            If you have any questions about scholarships, email me at{" "}
            <a
              href="mailto:prajeetshah93@gmail.com"
              className="text-primary-400 hover:text-primary-300 underline underline-offset-4 font-semibold transition-colors"
            >
              prajeetshah93@gmail.com
            </a>.
          </p>

          <div className="pt-6 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:prajeetshah93@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-600/20"
            >
              Send an Email
            </a>
            <a
              href="https://youtube.com/@prajeetthecreator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-105"
            >
              Visit YouTube Channel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
