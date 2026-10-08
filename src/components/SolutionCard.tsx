/**
 * @file SolutionCard.tsx
 * @description Cognichip persona card pattern:
 * Persona title, headline promise, 4 minimal dash-prefixed checklist bullets, and pill action.
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface SolutionPersona {
  id: string;
  persona: string;
  headline: string;
  description?: string;
  bullets: string[];
  ctaText?: string;
  accentBadge?: string;
}

interface SolutionCardProps {
  solution: SolutionPersona;
  onSelect?: (id: string) => void;
  className?: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({
  solution,
  onSelect,
  className = '',
}) => {
  return (
    <div
      className={`group relative flex flex-col justify-between p-8 md:p-9 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#111113]/85 backdrop-blur-xl hover:border-white/[0.2] hover:bg-[#151518] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.36)] ${className}`}
    >
      {/* Top Section */}
      <div>
        {/* Eyebrow / Persona Pill */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] font-semibold">
            {solution.persona}
          </span>
          {solution.accentBadge && (
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#38BDF8]">
              {solution.accentBadge}
            </span>
          )}
        </div>

        {/* Headline Promise */}
        <h3 className="text-2xl md:text-[1.65rem] font-medium text-white tracking-tight leading-snug mb-4 group-hover:text-white transition-colors">
          {solution.headline}
        </h3>

        {solution.description && (
          <p className="text-sm md:text-[0.9375rem] text-[#9CA3AF] leading-relaxed mb-6">
            {solution.description}
          </p>
        )}

        {/* Minimal Dash-Prefixed Feature List */}
        <ul className="space-y-3.5 my-6 pt-2 border-t border-white/[0.06]">
          {solution.bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="flex items-start text-sm text-[#9CA3AF] leading-relaxed group-hover:text-slate-200 transition-colors"
            >
              <span className="mr-3 text-white/50 font-mono select-none">—</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action / Learn More */}
      <div className="pt-6 border-t border-white/[0.06] mt-4">
        <button
          onClick={() => onSelect?.(solution.id)}
          className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#38BDF8] transition-colors"
        >
          <span>{solution.ctaText || 'Learn more'}</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
