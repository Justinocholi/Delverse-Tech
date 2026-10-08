/**
 * @file JournalPage.tsx
 * @description Editorial hub & article reader for "The Delverse Interface" matching cognichip.ai:
 * - HUB: branded editorial name, mission-statement intro, grid of article cards.
 * - ARTICLE READER: long-form editorial, large cinematic hero artwork, generous reading column (max ~720px),
 *   H2 section headings, mid-article pull-quote, CTA banner at end.
 */

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Share2, Clock, Calendar, Check } from 'lucide-react';
import { ArticleCard, ArticleData } from '../components/ArticleCard';
import { CinematicArtwork } from '../components/CinematicArtwork';
import { journalArticlesData } from '../data/delverseData';

interface JournalPageProps {
  onNavigate: (page: string) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onNavigate }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard?.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // If an article is selected, display the full editorial reader view
  if (selectedArticle) {
    return (
      <div className="bg-[#0A0A0B] text-white selection:bg-[#0066FF] selection:text-white pt-24 pb-24">
        {/* Top Back Navigation Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <button
            onClick={() => setSelectedArticle(null)}
            className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to The Delverse Interface</span>
          </button>
        </div>

        {/* Editorial Article Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header Metadata */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-mono mb-4">
              <span className="text-[#38BDF8] uppercase px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10">
                {selectedArticle.category}
              </span>
              <span className="text-[#9CA3AF]">
                {selectedArticle.date} · {selectedArticle.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
              {selectedArticle.title}
            </h1>

            <p className="text-lg md:text-xl text-[#9CA3AF] leading-relaxed font-normal">
              {selectedArticle.excerpt}
            </p>
          </div>

          {/* Large Cinematic Hero Artwork at Top */}
          <div className="w-full mb-14 rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <CinematicArtwork
              variant={selectedArticle.artworkVariant || 'journal'}
              aspectRatio="wide"
              alt={selectedArticle.title}
              className="w-full h-72 md:h-96"
            />
          </div>

          {/* Generous Reading Column (max-w-[720px]) */}
          <div className="max-w-[720px] mx-auto text-base sm:text-lg text-slate-300 leading-[1.8] space-y-8">
            {selectedArticle.content?.slice(0, 2).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* H2 Section Heading */}
            <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight pt-4">
              Structural Decoupling as an Organizational Superpower
            </h2>

            {/* Mid-Article Pull-Quote */}
            {selectedArticle.pullQuote && (
              <figure className="my-10 p-8 rounded-2xl border-l-2 border-[#0066FF] bg-[#111113]/80">
                <blockquote className="text-xl sm:text-2xl font-normal text-white italic leading-relaxed mb-3">
                  “{selectedArticle.pullQuote.quote}”
                </blockquote>
                <figcaption className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF]">
                  — {selectedArticle.pullQuote.author}
                </figcaption>
              </figure>
            )}

            {selectedArticle.content?.slice(2).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Share and Metadata Actions */}
            <div className="pt-10 mt-12 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs font-mono text-[#9CA3AF]">
                DOCUMENT CLASSIFICATION: PUBLIC ARCHITECTURE BRIEFING
              </span>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-full border border-white/10 hover:border-white/30 text-white transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share Briefing'}</span>
              </button>
            </div>
          </div>

          {/* End-of-Article CTA Banner */}
          <div className="mt-20 p-10 md:p-14 rounded-3xl border border-white/[0.1] bg-[#111113]/90 text-center">
            <span className="cogni-section-label block mb-3">
              TRANSFORM YOUR ENTERPRISE
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mb-4">
              Ready to engineer deterministic growth?
            </h3>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-[#9CA3AF] mb-8">
              Consult with our systems architects to evaluate how these engineering patterns can be deployed inside your organization.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="cogni-btn-primary px-8 py-3.5 text-sm"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </article>
      </div>
    );
  }

  // HUB VIEW: "The Delverse Interface"
  return (
    <div className="bg-[#0A0A0B] text-white selection:bg-[#0066FF] selection:text-white pt-24 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hub Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="cogni-section-label block mb-4">
            EDITORIAL JOURNAL
          </span>
          <h1 className="cogni-headline-display text-white mb-6">
            The Delverse Interface.
          </h1>
          <p className="cogni-body text-base md:text-xl text-[#9CA3AF]">
            Insights on digital transformation, engineering, and innovation. Dispatches from the frontlines of production systems, distributed architecture, and machine intelligence.
          </p>
        </div>

        {/* Featured Editorial Hero Banner */}
        <div 
          onClick={() => setSelectedArticle(journalArticlesData[0])}
          className="cursor-pointer group relative mb-16 p-8 md:p-12 rounded-3xl border border-white/[0.1] bg-[#111113]/85 backdrop-blur-xl hover:border-white/[0.2] transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 mb-5">
                FEATURED DISPATCH · {journalArticlesData[0].category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-medium text-white tracking-tight leading-snug mb-4 group-hover:text-white">
                {journalArticlesData[0].title}
              </h2>
              <p className="text-base text-[#9CA3AF] leading-relaxed mb-8">
                {journalArticlesData[0].excerpt}
              </p>
              <div className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#38BDF8] transition-colors">
                <span>Read Full Essay</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="rounded-2xl overflow-hidden border border-white/[0.06]">
                <CinematicArtwork
                  variant="journal"
                  aspectRatio="landscape"
                  alt={journalArticlesData[0].title}
                  className="w-full h-56 md:h-64 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Grid of Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalArticlesData.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              onRead={(a) => setSelectedArticle(a)}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
