/**
 * @file HomePage.tsx
 * @description Long-scroll marketing homepage strictly replicating the structure, layout rhythm,
 * and visual language of cognichip.ai:
 * 1. HERO (Full viewport, category-defining headline, 1-line subhead, two pill CTAs, 3D liquid-metal artwork)
 * 2. BUILT FOR EVERY TEAM (Solutions: section label, headline, 5 persona cards in grid with dash-bullets)
 * 3. MANIFESTO BREAK (Giant-type statement, minimal words, dark background, single artwork)
 * 4. INTELLIGENCE MEETS ENGINEERING (Proprietary delivery approach combining strategy, design, and engineering)
 * 5. TRACTION / ANNOUNCEMENT (Milestone banner, client quote with bold attribution, 6-10 image/telemetry carousel)
 * 6. EMAIL CAPTURE ("Don't miss what's next", enterprise input, early access trigger)
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight, Sparkles, Shield, Cpu, Zap, Activity } from 'lucide-react';
import { Hero } from '../components/Hero';
import { SolutionCard } from '../components/SolutionCard';
import { CinematicArtwork } from '../components/CinematicArtwork';
import { QuoteBlock } from '../components/QuoteBlock';
import { EmailCapture } from '../components/EmailCapture';
import { 
  cogniSolutionsData, 
  tractionCarouselData, 
  getStoredSiteData, 
  SiteData 
} from '../data/delverseData';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [siteData, setSiteData] = useState<SiteData>(() => getStoredSiteData());
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  // Sync data reactively if admin changes occur
  useEffect(() => {
    const handleUpdate = () => {
      setSiteData(getStoredSiteData());
    };
    window.addEventListener('delverse-data-updated', handleUpdate);
    return () => window.removeEventListener('delverse-data-updated', handleUpdate);
  }, []);

  // Carousel auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCarouselIndex((prev) => (prev + 1) % tractionCarouselData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0A0A0B] text-white selection:bg-[#0066FF] selection:text-white">
      
      {/* =========================================================================
          SECTION 1: HERO
          Full-viewport category-defining headline pattern, subhead, dual CTAs,
          and signature 3D liquid-metal abstract artwork.
         ========================================================================= */}
      <Hero
        onStartProject={() => onNavigate('contact')}
        onLearnMore={() => {
          const el = document.getElementById('solutions-section');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        headline={
          siteData.hero.headlinePrefix && siteData.hero.headlineHighlight
            ? `${siteData.hero.headlinePrefix} ${siteData.hero.headlineHighlight}`
            : 'Full-Stack Intelligence for Digital Transformation'
        }
        subheadline={
          siteData.hero.subtext ||
          'We craft innovative, custom-built solutions that enable meaningful, measurable business growth.'
        }
        eyebrow={siteData.hero.eyebrow || 'THE NEW ERA OF TRANSFORMATION STARTS NOW'}
      />

      {/* =========================================================================
          SECTION 2: BUILT FOR EVERY TEAM (SOLUTIONS)
          Section label + headline + 5 persona cards in a grid, one per service line,
          each with 4 dash-prefixed feature checklist items and "Learn more".
         ========================================================================= */}
      <section
        id="solutions-section"
        className="relative py-28 md:py-36 border-t border-white/[0.08] bg-[#0A0A0B] overflow-hidden"
      >
        <div className="absolute inset-0 circuit-dots opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="cogni-section-label block mb-4">
              BUILT FOR EVERY TEAM
            </span>
            <h2 className="cogni-headline-display text-white mb-6">
              Engineered for scale, built for impact.
            </h2>
            <p className="cogni-body text-base md:text-lg text-[#9CA3AF]">
              Digital transformation is not one-size-fits-all. We deploy specialized architectures tuned precisely to the velocity, governance, and operational demands of your organization.
            </p>
          </div>

          {/* 5 Persona Cards in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cogniSolutionsData.map((solution, idx) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                onSelect={(id) => onNavigate(`solutions#${id}`)}
                className={idx === 0 ? 'lg:col-span-1' : ''}
              />
            ))}

            {/* 6th Card: Universal Advisory & Project Diagnostic */}
            <div className="group relative flex flex-col justify-between p-8 md:p-9 rounded-2xl md:rounded-3xl border border-dashed border-white/20 bg-[#111113]/40 backdrop-blur-xl hover:border-[#0066FF]/60 hover:bg-[#151518] transition-all duration-300">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-semibold block mb-6">
                  BESPOKE SCOPE
                </span>
                <h3 className="text-2xl font-medium text-white tracking-tight leading-snug mb-4">
                  Need a custom transformation blueprint?
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  Book a confidential 45-minute architectural review with our principal engineers. We assess legacy bottlenecks, data posture, and deliver an immediate execution roadmap.
                </p>
                <ul className="space-y-3.5 my-6 pt-2 border-t border-white/[0.06] text-sm text-[#9CA3AF]">
                  <li className="flex items-start">
                    <span className="mr-3 text-white/50 font-mono">—</span>
                    <span>Direct review with Principal Systems Architect</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-white/50 font-mono">—</span>
                    <span>Codebase & security posture audit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-white/50 font-mono">—</span>
                    <span>Zero sales pressure; technical diagnostic only</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/[0.06]">
                <button
                  onClick={() => onNavigate('contact')}
                  className="cogni-btn-primary w-full text-xs uppercase tracking-wider py-3.5"
                >
                  <span>Request Architectural Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: MANIFESTO BREAK
          Giant-type statement, minimal words —
          "Transformation, reimagined. Technology, engineered for growth."
          Dark background, single liquid-metal artwork.
         ========================================================================= */}
      <section className="relative py-32 md:py-44 border-t border-white/[0.08] bg-[#070709] overflow-hidden">
        {/* Ambient Dark Horizon Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[350px] bg-[#0066FF]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="cogni-section-label block mb-6">
            THE DELVERSE MANIFESTO
          </span>

          {/* Giant-Type Minimal Statement */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.08] mb-8">
            Transformation, reimagined. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93C5FD] to-[#38BDF8]">
              Technology, engineered for growth.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-xl text-[#9CA3AF] leading-relaxed mb-14">
            We reject the dogma that modernization must take years and burn millions in consulting fees. We engineer deterministic software platforms that accelerate your destiny.
          </p>

          {/* Single Signature 3D Artwork Render */}
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_25px_70px_rgba(0,0,0,0.8)]">
            <CinematicArtwork
              variant="manifesto"
              aspectRatio="wide"
              alt="Giant liquid-chrome singularity monolith in deep space with cyan-violet rim light"
              className="w-full h-64 md:h-80"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: INTELLIGENCE MEETS ENGINEERING
          2–3 sentences on Delverse's proprietary delivery approach
          (proven delivery framework combining strategy, design, and engineering)
          with supporting artwork.
         ========================================================================= */}
      <section className="relative py-28 md:py-36 border-t border-white/[0.08] bg-[#0A0A0B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Delivery Approach Statement */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="cogni-section-label block mb-4">
                DELIVERY FRAMEWORK
              </span>
              <h2 className="cogni-headline-display text-white mb-6">
                Intelligence meets engineering.
              </h2>
              <div className="space-y-4 text-base md:text-lg text-[#9CA3AF] leading-relaxed">
                <p>
                  At Delverse, transformation is not governed by guesswork. We deploy a proprietary delivery framework that fuses mathematical systems strategy, human-centric interface design, and aerospace-grade software engineering.
                </p>
                <p>
                  Every architecture is verified through automated invariants and synthetic load stress tests before production cutover—eliminating technical debt at the point of inception.
                </p>
              </div>

              {/* 3 Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/[0.08] w-full">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="block text-xs font-mono uppercase text-[#38BDF8] mb-1">01 / STRATEGY</span>
                  <span className="text-sm font-medium text-white">First-Principles Architecture</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="block text-xs font-mono uppercase text-[#38BDF8] mb-1">02 / DESIGN</span>
                  <span className="text-sm font-medium text-white">Instant Human Ergonomics</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <span className="block text-xs font-mono uppercase text-[#38BDF8] mb-1">03 / CODE</span>
                  <span className="text-sm font-medium text-white">Fault-Tolerant Execution</span>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#38BDF8] transition-colors"
                >
                  <span>Explore the Delverse delivery doctrine</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Supporting Artwork */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
                <CinematicArtwork
                  variant="engineering"
                  aspectRatio="landscape"
                  alt="Proprietary delivery framework render of intertwined molten chrome helices and circuit micro-architecture"
                  className="w-full h-80 md:h-96"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: TRACTION / ANNOUNCEMENT
          Milestone banner + client or partner quote with bold attribution +
          6–10 image / telemetry architecture carousel.
         ========================================================================= */}
      <section className="relative py-28 md:py-36 border-t border-white/[0.08] bg-[#070709] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Milestone Banner */}
          <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/[0.1] bg-[#111113]/90 backdrop-blur-xl mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center text-[#38BDF8] shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-semibold block">
                  ANNUAL TRACTION DISPATCH
                </span>
                <span className="text-lg md:text-xl font-medium text-white tracking-tight">
                  Over 50+ enterprise systems modernized with 99.8% verified SLA uptime.
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('solutions')}
              className="cogni-btn-secondary whitespace-nowrap text-xs uppercase tracking-wider px-6 py-2.5"
            >
              <span>View Systems Ledger</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Client / Partner Quote with Bold Attribution */}
          <div className="mb-20">
            <QuoteBlock
              quote="Delverse re-architected our entire logistics synchronization engine in four months. We transitioned from daily database timeouts to sub-50ms execution across four continents without a second of downtime."
              author="Dr. Justine Ocholi"
              title="Group Chief Technology Officer"
              company="MECA Group Africa"
              accentBadge="VERIFIED ENTERPRISE TRANSFORMATION"
            />
          </div>

          {/* Section Subhead for Photo / Architecture Telemetry Carousel */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="cogni-section-label block mb-2">
                DEPLOYMENT TELEMETRY
              </span>
              <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
                Architectural whiteboards & active production systems
              </h3>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              {tractionCarouselData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCarouselIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeCarouselIndex === i ? 'w-8 bg-[#0066FF]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 6-10 Image / Telemetry Architecture Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tractionCarouselData.map((item, idx) => {
              const isCurrent = activeCarouselIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveCarouselIndex(idx)}
                  className={`cursor-pointer group relative p-6 rounded-2xl md:rounded-3xl border transition-all duration-300 ${
                    isCurrent
                      ? 'border-[#0066FF]/60 bg-[#151518] shadow-[0_10px_35px_rgba(0,102,255,0.15)]'
                      : 'border-white/[0.08] bg-[#111113]/70 hover:border-white/[0.2]'
                  }`}
                >
                  {/* Visual Render Preview */}
                  <div className="w-full mb-5 overflow-hidden rounded-xl border border-white/[0.06]">
                    <CinematicArtwork
                      variant={item.variant}
                      aspectRatio="landscape"
                      alt={item.title}
                      className="w-full h-36 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#38BDF8] mb-2">
                    <span>{item.tag}</span>
                    <span className="text-white font-medium">{item.metric}</span>
                  </div>

                  <h4 className="text-lg font-medium text-white tracking-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: EMAIL CAPTURE
          "Don't miss what's next" + input + button —
          "Get early access to insights from Delverse."
         ========================================================================= */}
      <section className="relative py-28 md:py-36 border-t border-white/[0.08] bg-[#0A0A0B] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailCapture
            onSubscribe={(email) => {
              console.log('Registered for Delverse Intelligence dispatches:', email);
            }}
          />
        </div>
      </section>

    </div>
  );
};
