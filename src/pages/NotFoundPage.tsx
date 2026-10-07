import React from 'react';
import { ArrowLeft, Home, Layers, Briefcase, Mail } from 'lucide-react';

export const NotFoundPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center pt-28 pb-20 bg-[#070B14] relative overflow-hidden">
      {/* Background Glow */}
      <div className="glow-orb w-96 h-96 bg-blue-600/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="content-container relative z-10 text-center max-w-xl">
        {/* Large animated 404 */}
        <div className="text-8xl sm:text-9xl font-black font-mono tracking-tighter text-transparent bg-gradient-to-r from-blue-500 via-teal-300 to-violet-500 bg-clip-text animate-pulse">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-3">
          Architecture Node Not Found
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed mb-8">
          The requested route or asset has either been relocated, refactored, or is temporarily unavailable in this deployment partition.
        </p>

        {/* Quick Search-Style Links back to key pages */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-8 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
            Recommended Navigation Routes:
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => onNavigate('home')}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white flex items-center justify-center gap-2 transition-colors"
            >
              <Home size={15} className="text-blue-400" />
              <span>Home Flagship</span>
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white flex items-center justify-center gap-2 transition-colors"
            >
              <Layers size={15} className="text-teal-400" />
              <span>Our Capabilities</span>
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white flex items-center justify-center gap-2 transition-colors"
            >
              <Briefcase size={15} className="text-violet-400" />
              <span>Case Studies</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white flex items-center justify-center gap-2 transition-colors"
            >
              <Mail size={15} className="text-cyan-400" />
              <span>Contact Desk</span>
            </button>
          </div>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300 hover:text-teal-200"
        >
          <ArrowLeft size={14} /> Return to Homepage
        </button>
      </div>
    </div>
  );
};
