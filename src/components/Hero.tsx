/**
 * @file Hero.tsx
 * @description Full-viewport category-defining hero component matching cognichip.ai:
 * Category-defining headline, tight letter-spacing, one-line subhead, two pill CTAs,
 * and signature full-bleed liquid-metal 3D artwork render.
 */

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CinematicArtwork } from './CinematicArtwork';

interface HeroProps {
  onStartProject?: () => void;
  onLearnMore?: () => void;
  headline?: string;
  subheadline?: string;
  eyebrow?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onLearnMore,
  headline = 'Full-Stack Intelligence for Digital Transformation',
  subheadline = 'We craft innovative, custom-built solutions that enable meaningful, measurable business growth.',
  eyebrow = 'THE NEW ERA OF TRANSFORMATION STARTS NOW',
}) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 md:py-32 overflow-hidden bg-[#0A0A0B]">
      {/* Background Ambient Glow & Micro-Grid */}
      <div className="absolute inset-0 circuit-overlay pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0066FF]/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#D1D5DB]">
                {eyebrow}
              </span>
            </div>

            {/* Monumental Headline */}
            <h1 className="cogni-headline-hero text-white mb-6">
              {headline}
            </h1>

            {/* One-Line Subhead */}
            <p className="cogni-body max-w-2xl text-base md:text-xl text-[#9CA3AF] mb-10 leading-relaxed font-normal">
              {subheadline}
            </p>

            {/* Dual CTAs (Pill-Shaped) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onStartProject}
                className="cogni-btn-primary w-full sm:w-auto text-base px-8 py-4"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onLearnMore}
                className="cogni-btn-secondary w-full sm:w-auto text-base px-8 py-4"
              >
                <span>Learn more</span>
              </button>
            </div>

            {/* Minimal Status Indicators */}
            <div className="mt-12 pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center gap-8 text-xs font-mono text-[#9CA3AF]">
              <div>
                <span className="text-white font-medium">EST. 2019</span> · ENTERPRISE SCALE
              </div>
              <div>
                <span className="text-white font-medium">99.8% SLA</span> · RESILIENT ARCHITECTURE
              </div>
              <div>
                <span className="text-white font-medium">GLOBAL</span> · DUAL DISPATCH PODS
              </div>
            </div>
          </div>

          {/* Right Column: Signature 3D Liquid-Metal Artwork */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative w-full aspect-[4/3] lg:aspect-square">
              <CinematicArtwork
                variant="hero"
                aspectRatio="square"
                alt="Signature 3D liquid-metal chrome torus render with fluid glass refraction and circuit micro-traces"
                className="w-full h-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
