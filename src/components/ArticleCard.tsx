/**
 * @file ArticleCard.tsx
 * @description Cognichip journal article card component:
 * Artwork thumbnail, category tag, title, date, and reading time.
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CinematicArtwork, ArtworkVariant } from './CinematicArtwork';

export interface ArticleData {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  artworkVariant?: ArtworkVariant;
  content?: string[];
  pullQuote?: {
    quote: string;
    author: string;
  };
}

interface ArticleCardProps {
  article: ArticleData;
  onRead?: (article: ArticleData) => void;
  className?: string;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  onRead,
  className = '',
}) => {
  return (
    <article
      onClick={() => onRead?.(article)}
      className={`group cursor-pointer flex flex-col justify-between overflow-hidden p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#111113]/85 backdrop-blur-xl hover:border-white/[0.2] hover:bg-[#151518] transition-all duration-300 ${className}`}
    >
      <div>
        {/* Cinematic Artwork Thumbnail */}
        <div className="w-full mb-6 overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.06]">
          <CinematicArtwork
            variant={article.artworkVariant || 'journal'}
            aspectRatio="landscape"
            alt={article.title}
            className="w-full h-44 md:h-48 group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Metadata Row */}
        <div className="flex items-center justify-between gap-3 text-xs mb-3.5">
          <span className="font-mono uppercase tracking-wider text-[#38BDF8] px-2.5 py-0.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10">
            {article.category}
          </span>
          <span className="text-[#9CA3AF] font-mono">
            {article.date} · {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight leading-snug mb-3 group-hover:text-white transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-[#9CA3AF] leading-relaxed line-clamp-2">
          {article.excerpt}
        </p>
      </div>

      {/* Footer Read Action */}
      <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.2em] text-[#9CA3AF] group-hover:text-white transition-colors font-medium">
          Read Interface Log
        </span>
        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white/30 transition-all">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </article>
  );
};
