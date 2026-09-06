export const metadata = {
  title: "Privacy Policy | Prajeet the Creator",
  description: "Privacy Policy and Disclaimer for Prajeet the Creator.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-dark-950 pt-28 pb-20 relative overflow-hidden grid-bg">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3">
            Legal Information
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] mb-6">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
        </div>

        <div className="p-8 rounded-2xl border border-dark-800/50 bg-dark-800/20 space-y-6 text-dark-300 leading-relaxed">
          <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-300 font-medium">
            <strong>Disclaimer:</strong> www.prajeetthecreator.com is an informational website. We are not the official government or university. We only provide links to official scholarship forms to help students.
          </div>

          <p>
            At www.prajeetthecreator.com, we respect your privacy. This Privacy Policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-xl font-bold text-white pt-4 border-t border-dark-800">
            Google AdSense
          </h2>
          <p>
            We use Google AdSense to display advertisements on our website. Google, as a third-party vendor, uses cookies to serve ads based on your prior visits to our website and other sites on the Internet.
          </p>
          <p>
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet. You may opt-out of personalized advertising by visiting Google&apos;s Ads Settings.
          </p>

          <h2 className="text-xl font-bold text-white pt-4 border-t border-dark-800">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, you can contact us at{" "}
            <a
              href="mailto:prajeetshah93@gmail.com"
              className="text-primary-400 hover:underline font-medium"
            >
              prajeetshah93@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}