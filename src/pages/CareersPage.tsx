/**
 * @file CareersPage.tsx
 * @description Careers & Mission manifesto page strictly replicating cognichip.ai:
 * Pure manifesto page: 4–6 short paragraphs on Delverse's mission and vision,
 * large statement type, signature liquid-metal artwork, open disciplines,
 * and tagline-style sign-off ("Build what endures.").
 */

import React from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';
import { CinematicArtwork } from '../components/CinematicArtwork';

interface CareersPageProps {
  onNavigate: (page: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0A0A0B] text-white selection:bg-[#0066FF] selection:text-white pt-24 pb-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Eyebrow */}
        <div className="mb-8">
          <span className="cogni-section-label block mb-4">
            CAREERS & MANIFESTO
          </span>
          {/* Large Statement Type */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.08] mb-8">
            We are assembling <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#93C5FD] to-[#38BDF8]">
              the builders of sovereign systems.
            </span>
          </h1>
        </div>

        {/* Cinematic Artwork */}
        <div className="w-full mb-16 rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <CinematicArtwork
            variant="careers"
            aspectRatio="wide"
            alt="Signature 3D liquid metal celestial monolith suspended with luminous filament ribbons"
            className="w-full h-64 md:h-80"
          />
        </div>

        {/* 4–6 Short Manifesto Paragraphs on Mission & Vision */}
        <div className="max-w-[760px] mx-auto space-y-8 text-base sm:text-xl text-[#9CA3AF] leading-[1.75]">
          <p className="text-white font-medium text-xl sm:text-2xl leading-relaxed">
            Software is no longer just code running on servers. It is the nervous system of modern civilization—governing financial liquidity, energy distribution, and industrial production.
          </p>

          <p>
            Yet the tech industry has spent the last decade trapped in vanity metrics: building ephemeral consumer novelties while mission-critical enterprise systems rusted beneath layers of legacy neglect.
          </p>

          <p>
            At Delverse, our conviction is simple: we exist to build software that matters. We engineer systems designed to endure through decades of organizational growth, architectural shifts, and global transformation.
          </p>

          <p>
            We do not maintain corporate hierarchies or tolerate engineering mediocrity. Our pods are small, autonomous, and comprised entirely of builders who take obsessive pride in code hygiene, sub-millisecond latency, and mathematical precision.
          </p>

          <p>
            If you believe that engineering is a serious craft, and that African engineering hubs can set the global standard for architectural excellence, your place is with us.
          </p>

          {/* Tagline-Style Sign-Off */}
          <div className="pt-8 border-t border-white/[0.08]">
            <span className="block text-3xl sm:text-4xl font-medium tracking-tight text-white mb-2">
              Build what endures.
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#38BDF8]">
              DELVERSE CORE DIRECTIVE · ASOKORO, ABUJA
            </span>
          </div>
        </div>

        {/* Open Disciplines Section */}
        <div className="mt-24 pt-16 border-t border-white/[0.08]">
          <div className="max-w-3xl mb-12">
            <span className="cogni-section-label block mb-3">
              ACTIVE RECRUITMENT SQUADS
            </span>
            <h2 className="text-3xl font-medium text-white tracking-tight">
              Open Engineering Seats
            </h2>
            <p className="text-sm text-[#9CA3AF] mt-2">
              We recruit continuously for top 1% technical talent across Africa and remote pods globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#111113]/80 hover:border-white/[0.2] transition-all">
              <div className="flex items-center gap-3 text-xs font-mono text-[#38BDF8] mb-3">
                <Terminal className="w-4 h-4" />
                <span>DISTRIBUTED SYSTEMS</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Staff Distributed Systems Engineer
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                Rust / Go / Kafka. Architecting high-throughput financial settlement engines and event-driven backbones.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs uppercase font-mono tracking-wider text-white hover:text-[#38BDF8] inline-flex items-center gap-2"
              >
                <span>Transmit Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#111113]/80 hover:border-white/[0.2] transition-all">
              <div className="flex items-center gap-3 text-xs font-mono text-[#38BDF8] mb-3">
                <Cpu className="w-4 h-4" />
                <span>MACHINE INTELLIGENCE</span>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Senior Machine Learning Systems Architect
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                PyTorch / LangChain / vLLM. Deploying domain-adapted LLMs, secure RAG pipelines, and agentic workflows.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs uppercase font-mono tracking-wider text-white hover:text-[#38BDF8] inline-flex items-center gap-2"
              >
                <span>Transmit Credentials</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
