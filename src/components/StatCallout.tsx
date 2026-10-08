/**
 * @file StatCallout.tsx
 * @description Cognichip stat callout component:
 * Huge numerical metric (64–80px), clean 1px border card, and minimal 1-line caption.
 */

import React from 'react';

export interface StatItem {
  id?: string;
  metric: string;
  caption: string;
  subtext?: string;
  trend?: string;
}

interface StatCalloutProps {
  stat: StatItem;
  className?: string;
}

export const StatCallout: React.FC<StatCalloutProps> = ({ stat, className = '' }) => {
  return (
    <div
      className={`group relative p-8 md:p-10 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#111113]/85 backdrop-blur-xl hover:border-white/[0.2] hover:bg-[#151518] transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      {/* Top Metric Header */}
      <div>
        <div className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-4 group-hover:text-white transition-colors">
          {stat.metric}
        </div>
        <p className="text-base md:text-lg font-normal text-[#9CA3AF] leading-snug">
          {stat.caption}
        </p>
      </div>

      {stat.subtext && (
        <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#6B7280]">
          {stat.subtext}
        </div>
      )}
    </div>
  );
};
