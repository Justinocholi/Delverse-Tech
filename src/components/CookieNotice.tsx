import React, { useState, useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

export const CookieNotice: React.FC = () => {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const isDismissed = localStorage.getItem('delverse_cookie_consent');
    if (!isDismissed) {
      setDismissed(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('delverse_cookie_consent', 'true');
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <aside aria-label="Cookie consent banner" className="fixed bottom-6 left-6 z-50 max-w-sm p-4 rounded-xl bg-[#0D1322]/95 border border-white/10 shadow-2xl backdrop-blur-xl animate-fade-in text-xs text-slate-300">
      <div className="flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-semibold text-white mb-1">Privacy & Security Commitment</p>
          <p className="text-slate-400 leading-relaxed mb-3">
            We use essential telemetry to guarantee performance, protect against attacks, and enhance client interactions.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
            >
              Acknowledge
            </button>
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
        <button
          onClick={handleAccept}
          className="text-slate-400 hover:text-white transition-colors"
          aria-label="Close notice"
        >
          <X size={16} />
        </button>
      </div>
    </aside>
  );
};
