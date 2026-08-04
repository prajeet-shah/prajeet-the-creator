export default function PrivacyBanner() {
  return (
    <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl flex items-start gap-3 mb-6">
      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
      <div>
        <h4 className="font-semibold text-sm">100% Private & Secure</h4>
        <p className="text-xs text-green-400/80 mt-1">
          Processed entirely in your browser. Your files are never uploaded to any server and never leave your device.
        </p>
      </div>
    </div>
  );
}
