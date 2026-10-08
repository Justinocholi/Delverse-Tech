/**
 * @file EmailCapture.tsx
 * @description Cognichip email capture component:
 * 'Don't miss what's next' + input + pill button 'Get early access to insights from Delverse.'
 */

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface EmailCaptureProps {
  className?: string;
  onSubscribe?: (email: string) => void;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({
  className = '',
  onSubscribe,
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    onSubscribe?.(email);
    setSubmitted(true);
  };

  return (
    <div
      className={`relative p-8 md:p-14 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#111113]/90 backdrop-blur-xl overflow-hidden ${className}`}
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="block text-xs uppercase tracking-[0.25em] text-[#9CA3AF] font-semibold mb-3">
          STAY AT THE EDGE
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-tight mb-4">
          Don't miss what's next.
        </h2>
        <p className="text-base md:text-lg text-[#9CA3AF] mb-8 leading-relaxed">
          Get early access to executive briefings, systems architecture dispatches, and proprietary digital transformation playbooks from Delverse.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-sm">
            <CheckCircle2 className="w-5 h-5" />
            <span>Telemetry linked. You are registered for the next dispatch.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-xl mx-auto"
          >
            <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your enterprise email..."
                className="w-full px-5 py-3.5 rounded-full bg-white/[0.05] border border-white/10 text-white placeholder-[#9CA3AF]/60 text-sm focus:outline-none focus:border-[#0066FF] focus:bg-white/[0.08] transition-all"
              />
            </div>
            <button
              type="submit"
              className="cogni-btn-primary whitespace-nowrap text-sm px-6 py-3.5"
            >
              <span>Get early access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="mt-4 text-[11px] font-mono text-[#6B7280]">
          Zero marketing spam. Strict privacy architecture. Direct dispatches only.
        </div>
      </div>
    </div>
  );
};
