/**
 * @file AboutPage.tsx
 * @description About Delverse page strictly replicating the cognichip.ai architectural pattern:
 * 1. WELCOME BLOCK (2 short pedigree paragraphs, credentials, mission + vision + cinematic artwork)
 * 2. THE DIGITAL GAP (The "crisis" pattern: headline + 4 big stat callouts in grid)
 * 3. A NEW ERA (4 value cards with bold titles, 2-3 sentences, and 4 distinct 3D liquid-metal artworks)
 * 4. PULL-QUOTE TESTIMONIAL (Bold name/title attribution)
 * 5. TEAM GRID (Leadership & Advisors with 2-3 pill credential tags)
 * 6. JOIN DELVERSE (Pill CTA block)
 */

import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { CinematicArtwork } from '../components/CinematicArtwork';
import { StatCallout } from '../components/StatCallout';
import { ValueCard } from '../components/ValueCard';
import { QuoteBlock } from '../components/QuoteBlock';
import { TeamCard } from '../components/TeamCard';
import { 
  digitalGapCrisisStats, 
  aNewEraValuesData, 
  leadershipTeamData, 
  advisorsTeamData 
} from '../data/delverseData';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0A0A0B] text-white selection:bg-[#0066FF] selection:text-white pt-24 pb-20">
      
      {/* =========================================================================
          SECTION 1: WELCOME BLOCK
          2 short paragraphs establishing Delverse pedigree, team credentials,
          mission + vision language + embedded cinematic 3D abstract artwork.
         ========================================================================= */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Pedigree & Mission */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="cogni-section-label block mb-4">
                THE DELVERSE PEDIGREE
              </span>
              <h1 className="cogni-headline-display text-white mb-8">
                Future-driven technology solutions that empower businesses globally.
              </h1>

              <div className="space-y-6 text-base md:text-lg text-[#9CA3AF] leading-relaxed">
                <p>
                  Founded in 2019 in Asokoro, Abuja, Delverse Technologies was established with a singular directive: to replace bloated, bureaucratic IT consulting with ruthless engineering precision. Our technical squads comprise senior distributed systems engineers, machine intelligence researchers, and cloud infrastructure veterans with over a decade of enterprise delivery.
                </p>
                <p>
                  Our mission is to craft innovative, custom-built solutions that enable meaningful, measurable business growth. We do not build ephemeral prototypes; we architect sovereign digital infrastructure that withstands geopolitical fluctuations, hyper-scale transaction spikes, and complex regulatory mandates.
                </p>
              </div>

              {/* Pedigree Pill Credentials */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap gap-3">
                <span className="cogni-pill-tag">ESTABLISHED 2019</span>
                <span className="cogni-pill-tag">ASOKORO, ABUJA HQ</span>
                <span className="cogni-pill-tag">50+ PRODUCTION CORES</span>
                <span className="cogni-pill-tag">SOC2 & ISO ALIGNED</span>
              </div>
            </div>

            {/* Right Column: Embedded Signature Artwork */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
                <CinematicArtwork
                  variant="hero"
                  aspectRatio="square"
                  alt="Embedded 3D fluid-glass prism and liquid chrome core render"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: THE DIGITAL GAP (THE CRISIS PATTERN)
          Headline + 4 big stat callouts in a grid, each with a number + 1-line caption.
         ========================================================================= */}
      <section className="relative py-28 md:py-36 border-t border-white/[0.08] bg-[#070709] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Crisis Pattern Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="cogni-section-label block mb-4 text-[#F87171]">
              THE ARCHITECTURAL CRISIS
            </span>
            <h2 className="cogni-headline-display text-white mb-6">
              The Digital Gap.
            </h2>
            <p className="cogni-body text-base md:text-lg text-[#9CA3AF]">
              Global organizations face a widening chasm between legacy fragility and the demand for autonomous, real-time intelligence. The traditional consulting playbook is broken.
            </p>
          </div>

          {/* 4 Big Stat Callouts in a Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalGapCrisisStats.map((stat, idx) => (
              <StatCallout
                key={idx}
                stat={stat}
                className={idx === 0 ? 'border-red-500/20' : ''}
              />
            ))}
          </div>

          {/* Bridging Artwork */}
          <div className="mt-14 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/[0.08]">
            <CinematicArtwork
              variant="gap"
              aspectRatio="wide"
              alt="Fragmented chrome lattice bridging into aligned electric blue superhighways"
              className="w-full h-44 md:h-52"
            />
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: A NEW ERA
          4 value cards, each = bold title + 2–3 sentences + one liquid-metal 3D artwork.
          Titles follow the pattern:
          1. Innovation is the Method
          2. Built on Shared Success
          3. Precision in Every Line
          4. Democratizing Transformation
         ========================================================================= */}
      <section className="relative py-28 md:py-36 border-t border-white/[0.08] bg-[#0A0A0B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="cogni-section-label block mb-4">
              GOVERNING VALUES
            </span>
            <h2 className="cogni-headline-display text-white mb-6">
              A New Era.
            </h2>
            <p className="cogni-body text-base md:text-lg text-[#9CA3AF]">
              We built Delverse on four uncompromising engineering convictions that guide every line of code, architectural blueprint, and client partnership.
            </p>
          </div>

          {/* 4 Value Cards with Dedicated 3D Liquid-Metal Artworks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aNewEraValuesData.map((val) => (
              <ValueCard
                key={val.id}
                value={val}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: PULL-QUOTE TESTIMONIAL
          Pull-quote testimonial with bold name/title attribution.
         ========================================================================= */}
      <section className="relative py-20 md:py-28 border-t border-white/[0.08] bg-[#070709] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteBlock
            quote="In 25 years of overseeing enterprise IT modernization across Africa and Europe, Delverse is the first technical partner that delivered ahead of schedule, with zero architectural regression, and absolute code clarity."
            author="David Alaba"
            title="Senior Partner & Managing Director"
            company="DCP Global Advisory"
            accentBadge="INSTITUTIONAL ENDORSEMENT"
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: TEAM GRID
          "Leadership" and "Advisors" sections, portrait photos/avatars in rounded cards,
          name, title, 2–3 pill credential tags each.
         ========================================================================= */}
      <section className="relative py-28 md:py-36 border-t border-white/[0.08] bg-[#0A0A0B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Leadership Section */}
          <div className="mb-20">
            <div className="max-w-3xl mb-12">
              <span className="cogni-section-label block mb-3">
                EXECUTIVE ENGINEERING
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                Leadership Pod
              </h2>
              <p className="text-[#9CA3AF] text-sm md:text-base mt-2">
                Hands-on architects who code, design, and lead from the frontlines of production.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeamData.map((leader) => (
                <TeamCard
                  key={leader.id}
                  member={leader}
                />
              ))}
            </div>
          </div>

          {/* Advisors Section */}
          <div>
            <div className="max-w-3xl mb-12">
              <span className="cogni-section-label block mb-3">
                GOVERNANCE & RISK
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                Advisory Council
              </h2>
              <p className="text-[#9CA3AF] text-sm md:text-base mt-2">
                Institutional veterans counseling on cross-border capital, regulatory compliance, and technology risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisorsTeamData.map((advisor) => (
                <TeamCard
                  key={advisor.id}
                  member={advisor}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: JOIN DELVERSE CTA BLOCK
         ========================================================================= */}
      <section className="relative py-28 md:py-36 border-t border-white/[0.08] bg-[#070709] overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-10 md:p-16 rounded-3xl border border-white/[0.1] bg-[#111113]/90 backdrop-blur-2xl text-center overflow-hidden">
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="cogni-section-label block mb-4">
                INITIATE PARTNERSHIP
              </span>
              <h2 className="cogni-headline-display text-white mb-6">
                Join Delverse.
              </h2>
              <p className="cogni-body text-base md:text-lg text-[#9CA3AF] mb-10">
                Whether you are modernizing a legacy core or seeking dedicated senior engineering pods to ship your next platform, we stand ready to deploy.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="cogni-btn-primary px-8 py-4 text-base"
                >
                  <span>Book Executive Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('careers')}
                  className="cogni-btn-secondary px-8 py-4 text-base"
                >
                  <span>Read Careers Manifesto</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
