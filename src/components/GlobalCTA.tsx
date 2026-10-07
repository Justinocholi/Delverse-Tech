import React from 'react';
import { ButtonPrimary, ButtonSecondary } from './UIElements';
import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export const GlobalCTA: React.FC<{
  onNavigate: (page: string) => void;
}> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28 bg-[#070B14]">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-600/20 via-teal-500/15 to-violet-600/20 rounded-full blur-[110px] pointer-events-none"></div>

      <div className="content-container relative z-10">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 md:p-14 lg:p-16 text-center backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Subtle accent border line on top */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-teal-300 border border-teal-500/20 mb-6">
            <Zap size={14} className="text-teal-400" />
            Empowering Forward-Thinking Leaders
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Engineer Your <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
              Digital Transformation?
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Partner with Delverse Technologies to build bespoke AI solutions, award-grade web flagships, and scalable enterprise software that outpaces the market.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonPrimary onClick={() => onNavigate('contact')}>
              Initiate Project Consultation
            </ButtonPrimary>
            <ButtonSecondary onClick={() => onNavigate('services')}>
              Explore Capabilities
            </ButtonSecondary>
          </div>

          <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-teal-400" />
              <span>Strict Mutual NDA Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span>24-Hour Executive Callback Promise</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
              <span>Headquartered in Asokoro, Abuja</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
