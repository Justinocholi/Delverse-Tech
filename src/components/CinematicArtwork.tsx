/**
 * @file CinematicArtwork.tsx
 * @description Full-bleed cinematic 3D abstract renders replicating the signature visual language
 * of cognichip.ai: flowing liquid-metal and fluid-glass forms in iridescent blue, violet, teal,
 * and silver, fused with circuit-board micro-texture and flowing data-stream filaments.
 * Zero stock photos, zero flat illustrations.
 */

import React, { useId } from 'react';

export type ArtworkVariant = 
  | 'hero'
  | 'solutions'
  | 'manifesto'
  | 'engineering'
  | 'gap'
  | 'innovation'
  | 'collaboration'
  | 'precision'
  | 'democratizing'
  | 'journal'
  | 'careers'
  | 'workflow';

interface CinematicArtworkProps {
  variant: ArtworkVariant;
  className?: string;
  aspectRatio?: 'landscape' | 'square' | 'wide' | 'tall';
  alt?: string;
  glowColor?: 'blue' | 'cyan' | 'violet';
}

export const CinematicArtwork: React.FC<CinematicArtworkProps> = ({
  variant,
  className = '',
  aspectRatio = 'landscape',
  alt = 'Cinematic 3D abstract render of liquid metal and fluid glass data filaments',
  glowColor = 'blue',
}) => {
  const uid = useId().replace(/:/g, '');

  const aspectClass = {
    landscape: 'aspect-[16/10]',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
    tall: 'aspect-[4/5]',
  }[aspectRatio];

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#0E0E12] group ${aspectClass} ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Background Ambient Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-700"
        style={{
          background: glowColor === 'cyan'
            ? 'radial-gradient(circle at 60% 40%, rgba(0, 240, 255, 0.18) 0%, rgba(0, 102, 255, 0.08) 45%, transparent 70%)'
            : glowColor === 'violet'
            ? 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.22) 0%, rgba(0, 102, 255, 0.1) 50%, transparent 75%)'
            : 'radial-gradient(circle at 55% 45%, rgba(0, 102, 255, 0.25) 0%, rgba(0, 210, 211, 0.1) 40%, transparent 75%)',
        }}
      />

      {/* Micro-Circuit Board Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-25 mix-blend-screen pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`circuit-${uid}`} width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.75" />
            <circle cx="0" cy="0" r="2" fill="rgba(0, 240, 255, 0.5)" />
            <circle cx="60" cy="60" r="2" fill="rgba(0, 102, 255, 0.6)" />
            <path d="M 20 0 L 20 20 L 40 20 L 40 60" fill="none" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.4)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#circuit-${uid})`} />
      </svg>

      {/* Procedural High-Definition 3D Vector Shaders based on Variant */}
      <div className="absolute inset-0 flex items-center justify-center p-2">
        {variant === 'hero' && <HeroRender uid={uid} />}
        {variant === 'solutions' && <SolutionsRender uid={uid} />}
        {variant === 'manifesto' && <ManifestoRender uid={uid} />}
        {variant === 'engineering' && <EngineeringRender uid={uid} />}
        {variant === 'gap' && <GapRender uid={uid} />}
        {variant === 'innovation' && <InnovationRender uid={uid} />}
        {variant === 'collaboration' && <CollaborationRender uid={uid} />}
        {variant === 'precision' && <PrecisionRender uid={uid} />}
        {variant === 'democratizing' && <DemocratizingRender uid={uid} />}
        {variant === 'journal' && <JournalRender uid={uid} />}
        {variant === 'careers' && <CareersRender uid={uid} />}
        {variant === 'workflow' && <WorkflowRender uid={uid} />}
      </div>

      {/* Fluid Glass Specular Highlights */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A0A0B]/80 via-transparent to-white/[0.04]" />
      
      {/* 1px Inner Refraction Rim */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-white/[0.06] pointer-events-none" />
    </div>
  );
};

// -----------------------------------------------------------------------------
// VARIANT: HERO
// Fluid-chrome torus with iridescent violet-teal refractive core & data filaments
// -----------------------------------------------------------------------------
const HeroRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 800 500" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`chrome-hero-1-${uid}`} x1="10%" y1="0%" x2="90%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="25%" stopColor="#7DD3FC" />
        <stop offset="45%" stopColor="#0284C7" />
        <stop offset="70%" stopColor="#4C1D95" />
        <stop offset="90%" stopColor="#E0F2FE" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>

      <linearGradient id={`chrome-hero-2-${uid}`} x1="80%" y1="10%" x2="20%" y2="90%">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="30%" stopColor="#0066FF" />
        <stop offset="55%" stopColor="#00D2D3" />
        <stop offset="85%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>

      <radialGradient id={`glow-core-${uid}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
        <stop offset="40%" stopColor="#0066FF" stopOpacity="0.4" />
        <stop offset="80%" stopColor="#7C3AED" stopOpacity="0.1" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>

      <filter id={`blur-spec-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" />
      </filter>
    </defs>

    {/* Radiant Core */}
    <circle cx="410" cy="250" r="140" fill={`url(#glow-core-${uid})`} filter={`url(#blur-spec-${uid})`} />

    {/* Flowing Circuit Filaments */}
    <path 
      d="M 120 380 C 220 340, 280 180, 420 180 C 560 180, 620 320, 720 280" 
      stroke="url(#chrome-hero-2-${uid})" 
      strokeWidth="2.5" 
      strokeDasharray="6 4"
      opacity="0.8" 
    />
    <path 
      d="M 90 260 C 200 240, 310 320, 430 300 C 550 280, 640 160, 710 140" 
      stroke="#00F0FF" 
      strokeWidth="1.5" 
      opacity="0.6" 
    />

    {/* Molten Chrome Ribbon Primary */}
    <path 
      d="M 160 320 C 190 190, 310 120, 430 140 C 560 160, 640 260, 590 350 C 540 430, 380 430, 290 380 C 200 330, 240 220, 360 210 C 480 200, 560 260, 530 320" 
      fill="none" 
      stroke={`url(#chrome-hero-1-${uid})`} 
      strokeWidth="56" 
      strokeLinecap="round"
      className="transition-transform duration-1000 group-hover:scale-[1.02]"
    />

    {/* Secondary Fluid Glass Interlocking Band */}
    <path 
      d="M 240 180 C 330 110, 490 110, 570 190 C 650 270, 600 390, 480 410 C 360 430, 260 350, 280 260" 
      fill="none" 
      stroke={`url(#chrome-hero-2-${uid})`} 
      strokeWidth="28" 
      strokeLinecap="round" 
      opacity="0.9"
    />

    {/* Specular White Molten Edge Highlighting */}
    <path 
      d="M 190 280 C 220 180, 330 130, 430 150 C 520 170, 590 240, 560 320" 
      fill="none" 
      stroke="#FFFFFF" 
      strokeWidth="4" 
      strokeLinecap="round" 
      opacity="0.85"
    />

    {/* Data Points / Micro Nodes */}
    <circle cx="430" cy="140" r="4.5" fill="#FFFFFF" />
    <circle cx="560" cy="320" r="3.5" fill="#00F0FF" />
    <circle cx="280" cy="260" r="4" fill="#38BDF8" />
  </svg>
);

// -----------------------------------------------------------------------------
// VARIANT: SOLUTIONS
// Neural data filaments & floating fluid mercury spheres in network harmony
// -----------------------------------------------------------------------------
const SolutionsRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 800 500" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`sol-grad-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="35%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#0066FF" />
        <stop offset="100%" stopColor="#1E1B4B" />
      </linearGradient>
      <radialGradient id={`sphere-glow-${uid}`} cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#93C5FD" />
        <stop offset="75%" stopColor="#0052CC" />
        <stop offset="100%" stopColor="#0A0A0B" />
      </radialGradient>
    </defs>

    {/* Background Grid Lines */}
    <line x1="100" y1="250" x2="700" y2="250" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
    <line x1="400" y1="80" x2="400" y2="420" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />

    {/* Intertwined Fluid Filaments */}
    <path d="M 150 350 Q 280 120 420 240 T 670 180" stroke={`url(#sol-grad-${uid})`} strokeWidth="8" fill="none" />
    <path d="M 180 180 Q 320 380 470 260 T 650 340" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="3" fill="none" strokeDasharray="8 6" />

    {/* Fluid Mercury Spheres */}
    <circle cx="420" cy="240" r="54" fill={`url(#sphere-glow-${uid})`} stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
    <circle cx="260" cy="190" r="32" fill={`url(#sphere-glow-${uid})`} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    <circle cx="560" cy="300" r="40" fill={`url(#sphere-glow-${uid})`} stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
    <circle cx="640" cy="180" r="22" fill={`url(#sphere-glow-${uid})`} />

    {/* Laser Data Rays */}
    <line x1="260" y1="190" x2="420" y2="240" stroke="#00F0FF" strokeWidth="1.5" opacity="0.7" />
    <line x1="420" y1="240" x2="560" y2="300" stroke="#38BDF8" strokeWidth="1.5" opacity="0.8" />
  </svg>
);

// -----------------------------------------------------------------------------
// VARIANT: MANIFESTO
// Giant liquid-chrome singularity monolith in deep space with cyan-violet rim light
// -----------------------------------------------------------------------------
const ManifestoRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 1000 450" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`mani-blade-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0B132B" />
        <stop offset="25%" stopColor="#1C2541" />
        <stop offset="50%" stopColor="#FFFFFF" />
        <stop offset="75%" stopColor="#0066FF" />
        <stop offset="100%" stopColor="#0B132B" />
      </linearGradient>
      <radialGradient id={`mani-singularity-${uid}`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.9" />
        <stop offset="35%" stopColor="#2563EB" stopOpacity="0.4" />
        <stop offset="70%" stopColor="#7C3AED" stopOpacity="0.1" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>

    <circle cx="500" cy="225" r="180" fill={`url(#mani-singularity-${uid})`} />

    {/* Horizon Chrome Blade */}
    <path 
      d="M 50 225 Q 350 180 500 225 T 950 225" 
      stroke={`url(#mani-blade-${uid})`} 
      strokeWidth="24" 
      strokeLinecap="round" 
      fill="none" 
    />
    <path 
      d="M 120 225 Q 380 255 500 225 T 880 225" 
      stroke="#FFFFFF" 
      strokeWidth="3" 
      fill="none" 
      opacity="0.9"
    />

    {/* Vertical Singularity Beam */}
    <line x1="500" y1="40" x2="500" y2="410" stroke="rgba(0, 240, 255, 0.4)" strokeWidth="1" strokeDasharray="6 4" />
    <circle cx="500" cy="225" r="7" fill="#FFFFFF" />
  </svg>
);

// -----------------------------------------------------------------------------
// VARIANT: ENGINEERING
// Proprietary delivery approach: strategy, design, and engineering fusion
// -----------------------------------------------------------------------------
const EngineeringRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 800 500" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`eng-helix-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E0F2FE" />
        <stop offset="30%" stopColor="#0284C7" />
        <stop offset="70%" stopColor="#0066FF" />
        <stop offset="100%" stopColor="#FFFFFF" />
      </linearGradient>
    </defs>

    {/* Stratum 1: Strategy (Top Arc) */}
    <path d="M 180 160 C 320 80, 480 80, 620 160" stroke="#00F0FF" strokeWidth="4" strokeDasharray="6 4" fill="none" opacity="0.7" />
    
    {/* Stratum 2: Design (Center Wave) */}
    <path d="M 140 260 C 280 180, 520 340, 660 260" stroke={`url(#eng-helix-${uid})`} strokeWidth="38" strokeLinecap="round" fill="none" />
    <path d="M 140 260 C 280 180, 520 340, 660 260" stroke="#FFFFFF" strokeWidth="4" fill="none" opacity="0.9" />

    {/* Stratum 3: Engineering (Precision Base) */}
    <path d="M 200 370 C 340 430, 460 430, 600 370" stroke="#38BDF8" strokeWidth="6" fill="none" opacity="0.8" />

    {/* Intersecting Precision Nodes */}
    <circle cx="280" cy="220" r="5" fill="#FFFFFF" />
    <circle cx="520" cy="300" r="5" fill="#00F0FF" />
    <line x1="280" y1="220" x2="280" y2="380" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="3 3" />
    <line x1="520" y1="120" x2="520" y2="300" stroke="rgba(0,240,255,0.3)" strokeWidth="1" strokeDasharray="3 3" />
  </svg>
);

// -----------------------------------------------------------------------------
// VARIANT: GAP (Crisis Pattern)
// Fragmented chrome lattice transitioning into aligned electric blue superhighways
// -----------------------------------------------------------------------------
const GapRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 800 500" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`gap-grad-${uid}`} x1="0%" y1="50%" x2="100%" y2="50%">
        <stop offset="0%" stopColor="#475569" stopOpacity="0.4" />
        <stop offset="45%" stopColor="#94A3B8" />
        <stop offset="60%" stopColor="#0066FF" />
        <stop offset="100%" stopColor="#00F0FF" />
      </linearGradient>
    </defs>

    {/* Fragmented chaotic rays on the left */}
    <line x1="80" y1="140" x2="280" y2="180" stroke="#64748B" strokeWidth="3" opacity="0.5" />
    <line x1="100" y1="260" x2="260" y2="240" stroke="#475569" strokeWidth="4" opacity="0.4" />
    <line x1="70" y1="360" x2="290" y2="320" stroke="#64748B" strokeWidth="2.5" opacity="0.6" />

    {/* Convergence Choke Point */}
    <circle cx="340" cy="250" r="8" fill="#FFFFFF" />

    {/* Unified Electric Superhighways accelerating to the right */}
    <path d="M 340 250 C 440 250, 520 180, 720 180" stroke={`url(#gap-grad-${uid})`} strokeWidth="16" fill="none" strokeLinecap="round" />
    <path d="M 340 250 C 440 250, 520 250, 740 250" stroke={`url(#gap-grad-${uid})`} strokeWidth="24" fill="none" strokeLinecap="round" />
    <path d="M 340 250 C 440 250, 520 320, 720 320" stroke={`url(#gap-grad-${uid})`} strokeWidth="16" fill="none" strokeLinecap="round" />

    {/* Stream Data Sparks */}
    <circle cx="580" cy="180" r="3" fill="#FFFFFF" />
    <circle cx="620" cy="250" r="4" fill="#FFFFFF" />
    <circle cx="560" cy="320" r="3" fill="#FFFFFF" />
  </svg>
);

// -----------------------------------------------------------------------------
// VALUE CARDS (4 Distinct 3D Liquid Metal Renders)
// -----------------------------------------------------------------------------
const InnovationRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 600 400" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`inno-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="40%" stopColor="#38BDF8" />
        <stop offset="80%" stopColor="#1E40AF" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
    </defs>
    <circle cx="300" cy="200" r="90" fill="url(#inno-${uid})" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
    <path d="M 220 200 C 260 140, 340 140, 380 200" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none" />
    <circle cx="300" cy="140" r="3" fill="#00F0FF" />
  </svg>
);

const CollaborationRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 600 400" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="260" cy="200" rx="90" ry="55" stroke="#0066FF" strokeWidth="18" fill="none" transform="rotate(-25 260 200)" />
    <ellipse cx="340" cy="200" rx="90" ry="55" stroke="#FFFFFF" strokeWidth="18" fill="none" transform="rotate(25 340 200)" opacity="0.9" />
  </svg>
);

const PrecisionRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 600 400" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="300,90 420,310 180,310" stroke="#00F0FF" strokeWidth="14" fill="rgba(0,102,255,0.15)" strokeLinejoin="round" />
    <polygon points="300,120 390,290 210,290" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.8" />
    <line x1="300" y1="90" x2="300" y2="310" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);

const DemocratizingRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 600 400" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="300" cy="200" r="130" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
    <circle cx="300" cy="200" r="95" stroke="#38BDF8" strokeWidth="4" fill="none" opacity="0.6" />
    <circle cx="300" cy="200" r="60" stroke="#0066FF" strokeWidth="16" fill="none" />
    <circle cx="300" cy="200" r="25" fill="#FFFFFF" />
  </svg>
);

const JournalRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 800 450" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 120 180 L 680 180" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <path d="M 120 270 L 680 270" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <path d="M 200 350 C 350 120, 450 120, 600 350" stroke="#0066FF" strokeWidth="32" strokeLinecap="round" fill="none" />
    <path d="M 200 350 C 350 120, 450 120, 600 350" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.9" />
  </svg>
);

const CareersRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 800 500" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="400" cy="250" r="160" stroke="rgba(0,102,255,0.25)" strokeWidth="1" fill="none" />
    <path d="M 220 380 Q 400 100 580 380" stroke="#38BDF8" strokeWidth="22" strokeLinecap="round" fill="none" />
    <circle cx="400" cy="190" r="12" fill="#FFFFFF" />
  </svg>
);

const WorkflowRender: React.FC<{ uid: string }> = ({ uid }) => (
  <svg viewBox="0 0 800 500" className="w-full h-full object-contain" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="180" y="100" width="440" height="300" rx="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="rgba(17,17,19,0.7)" />
    <line x1="180" y1="160" x2="620" y2="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <circle cx="220" cy="130" r="4" fill="#00F0FF" />
    <circle cx="240" cy="130" r="4" fill="#38BDF8" />
    <circle cx="260" cy="130" r="4" fill="#94A3B8" />
    <path d="M 240 310 C 320 220, 480 220, 560 310" stroke="#0066FF" strokeWidth="12" strokeLinecap="round" fill="none" />
    <path d="M 240 310 C 320 220, 480 220, 560 310" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);
