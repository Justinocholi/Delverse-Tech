/**
 * @file QuoteBlock.tsx
 * @description Cognichip pull-quote testimonial component:
 * Large quotation typography, bold name/title attribution, and sleek border treatment.
 */

import React from 'react';

interface QuoteBlockProps {
  quote: string;
  author: string;
  title: string;
  company?: string;
  accentBadge?: string;
  className?: string;
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({
  quote,
  author,
  title,
  company,
  accentBadge,
  className = '',
}) => {
  return (
    <div
      className={`relative p-8 md:p-14 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#111113]/85 backdrop-blur-xl ${className}`}
    >
      {/* Decorative Minimal Opening Dash */}
      <div className="text-3xl text-[#38BDF8] font-mono mb-6 select-none opacity-80">
        “
      </div>

      {/* Quote Statement */}
      <blockquote className="text-xl md:text-2xl lg:text-3xl font-normal text-white leading-relaxed tracking-tight mb-8">
        {quote}
      </blockquote>

      {/* Attribution Block */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
        <div>
          <div className="text-base md:text-lg font-medium text-white tracking-tight">
            {author}
          </div>
          <div className="text-sm text-[#9CA3AF] mt-0.5">
            {title}{company ? `, ${company}` : ''}
          </div>
        </div>

        {accentBadge && (
          <span className="self-start sm:self-auto text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#9CA3AF]">
            {accentBadge}
          </span>
        )}
      </div>
    </div>
  );
};
