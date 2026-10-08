/**
 * @file SolutionsPage.tsx
 * @description Solutions Detail page mirroring cognichip.ai workflow pattern:
 * One detail view per solution persona (Startups, Enterprises, Product Teams, Data Leaders, Ops),
 * each featuring:
 * - Headline promise & persona pill
 * - 4–6 capability checklist items
 * - Process / architecture cinematic 3D artwork
 * - 4-stage execution workflow ledger
 * - Direct engagement CTA
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, Check, ChevronRight, Layers, Cpu, Shield, Zap } from 'lucide-react';
import { CinematicArtwork, ArtworkVariant } from '../components/CinematicArtwork';
import { cogniSolutionsData, CogniSolution } from '../data/delverseData';

interface SolutionsPageProps {
  onNavigate: (page: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate }) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.split('#')[1];
      if (cogniSolutionsData.some(s => s.id === hash)) {
        return hash;
      }
    }
    return cogniSolutionsData[0].id;
  });

  const activeSolution: CogniSolution = 
    cogniSolutionsData.find((s) => s.id === activeSolutionId) || cogniSolutionsData[0];

  // Map solution to relevant signature 3D artwork variant
  const getArtworkVariant = (id: string): ArtworkVariant => {
    switch (id) {
      case 'startups': return 'solutions';
      case 'enterprises': return 'engineering';
      case 'product-teams': return 'workflow';
      case 'data-leaders': return 'precision';
      case 'ops-automation': return 'innovation';
      default: return 'solutions';
    }
  };

  return (
    <div className="bg-[#0A0A0B] text-white selection:bg-[#0066FF] selection:text-white pt-24 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="cogni-section-label block mb-4">
            SOLUTIONS ARCHITECTURE
          </span>
          <h1 className="cogni-headline-display text-white mb-6">
            Engineered for every phase of scale.
          </h1>
          <p className="cogni-body text-base md:text-xl text-[#9CA3AF]">
            Delverse deploys bespoke technical pods and battle-tested architectural frameworks aligned directly to your team's stage and strategic roadmap.
          </p>
        </div>

        {/* Persona Selector Tabs (Cognichip Workflow Ribbon) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-14 no-scrollbar border-b border-white/[0.08]">
          {cogniSolutionsData.map((solution) => {
            const isActive = activeSolutionId === solution.id;
            return (
              <button
                key={solution.id}
                onClick={() => setActiveSolutionId(solution.id)}
                className={`whitespace-nowrap px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0066FF] text-white shadow-[0_0_20px_-2px_rgba(0,102,255,0.6)] font-semibold'
                    : 'bg-white/[0.04] text-[#9CA3AF] hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {solution.persona}
              </button>
            );
          })}
        </div>

        {/* Detailed Solution Expanded View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline Promise & Capabilities Checklist */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] px-3 py-1 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10">
                {activeSolution.accentBadge || 'SYSTEMS POD'}
              </span>
              <span className="text-xs text-[#9CA3AF] font-mono">
                {activeSolution.persona}
              </span>
            </div>

            {/* Headline Promise */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
              {activeSolution.headline}
            </h2>

            {/* Overview */}
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8">
              {activeSolution.workflowOverview || activeSolution.description}
            </p>

            {/* 4–6 Capability Checklist Items (Minimal Dash Prefixes) */}
            <div className="w-full pt-6 border-t border-white/[0.08] mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70 block mb-6">
                CORE CAPABILITIES & DELIVERABLES
              </span>
              <ul className="space-y-4">
                {(activeSolution.capabilities || activeSolution.bullets).map((cap, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm sm:text-base text-slate-200 leading-relaxed"
                  >
                    <span className="mr-3.5 text-[#38BDF8] font-mono select-none">—</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Action */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('contact')}
                className="cogni-btn-primary px-8 py-4 text-sm"
              >
                <span>{activeSolution.ctaText || 'Deploy This Solution'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="cogni-btn-secondary px-8 py-4 text-sm"
              >
                <span>View Engineering Standards</span>
              </button>
            </div>
          </div>

          {/* Right Column: Process / Architecture Artwork */}
          <div className="lg:col-span-5 w-full">
            <div className="sticky top-28 space-y-6">
              {/* Cinematic 3D Abstract Process Artwork */}
              <div className="rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <CinematicArtwork
                  variant={getArtworkVariant(activeSolution.id)}
                  aspectRatio="square"
                  alt={`Process architecture render for ${activeSolution.persona}`}
                  className="w-full h-full"
                />
              </div>

              {/* Architectural Telemetry Spec Card */}
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#111113]/85 backdrop-blur-xl">
                <div className="flex items-center justify-between text-xs font-mono text-[#38BDF8] mb-3">
                  <span>DISPATCH SPEC</span>
                  <span>ENTERPRISE GRADE</span>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#9CA3AF]">
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span>Deployment Model</span>
                    <span className="text-white">Dedicated Embedded Squad</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span>Average Onboarding</span>
                    <span className="text-white">5 Business Days</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span>Code Governance</span>
                    <span className="text-white">Full IP Transfer & Comprehensive RFCs</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>SLA Guarantee</span>
                    <span className="text-white">99.8% Uptime & 24/7 Severity-1 Tier</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Stage Execution Workflow Ledger */}
        <div className="mt-28 pt-20 border-t border-white/[0.08]">
          <div className="max-w-3xl mb-14">
            <span className="cogni-section-label block mb-3">
              THE EXECUTION LIFECYCLE
            </span>
            <h3 className="text-3xl font-medium text-white tracking-tight">
              Deterministic delivery from zero to cutover
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#111113]/80">
              <span className="text-xs font-mono text-[#38BDF8] block mb-2">PHASE 01</span>
              <h4 className="text-lg font-medium text-white mb-2">System Discovery</h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Comprehensive audit of legacy constraints, data lineage, throughput bottlenecks, and mathematical requirements modeling.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#111113]/80">
              <span className="text-xs font-mono text-[#38BDF8] block mb-2">PHASE 02</span>
              <h4 className="text-lg font-medium text-white mb-2">Core Prototyping</h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Iterative sprint delivery of modular service backbones with automated integration testing and tokenized design systems.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#111113]/80">
              <span className="text-xs font-mono text-[#38BDF8] block mb-2">PHASE 03</span>
              <h4 className="text-lg font-medium text-white mb-2">Synthetic Chaos Testing</h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Sub-millisecond latency stress testing, network partition simulation, and third-party security vulnerability auditing.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#111113]/80">
              <span className="text-xs font-mono text-[#38BDF8] block mb-2">PHASE 04</span>
              <h4 className="text-lg font-medium text-white mb-2">Zero-Disruption Cutover</h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Canary deployment via edge routing, live telemetry observation, and continuous production monitoring retainers.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
