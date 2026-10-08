/**
 * @file ValueCard.tsx
 * @description Cognichip value card pattern:
 * Bold title + 2–3 sentences + dedicated 3D liquid-metal abstract artwork.
 */

import React from 'react';
import { CinematicArtwork, ArtworkVariant } from './CinematicArtwork';

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  artworkVariant: ArtworkVariant;
  eyebrow?: string;
}

interface ValueCardProps {
  value: ValueItem;
  className?: string;
}

export const ValueCard: React.FC<ValueCardProps> = ({ value, className = '' }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden p-8 md:p-9 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#111113]/85 backdrop-blur-xl hover:border-white/[0.2] hover:bg-[#151518] transition-all duration-300 ${className}`}
    >
      {/* 3D Liquid-Metal Abstract Artwork Render */}
      <div className="w-full mb-8">
        <CinematicArtwork
          variant={value.artworkVariant}
          aspectRatio="landscape"
          alt={value.title}
          className="w-full h-48 md:h-56"
        />
      </div>

      {/* Content Text */}
      <div>
        {value.eyebrow && (
          <span className="block text-xs uppercase tracking-[0.25em] text-[#9CA3AF] font-semibold mb-3">
            {value.eyebrow}
          </span>
        )}
        <h3 className="text-2xl md:text-[1.65rem] font-medium text-white tracking-tight leading-snug mb-3.5">
          {value.title}
        </h3>
        <p className="text-base text-[#9CA3AF] leading-relaxed">
          {value.description}
        </p>
      </div>
    </div>
  );
};
