/**
 * @file Hero.tsx
 * @description Full-viewport category-defining hero component matching cognichip.ai:
 * Category-defining headline, tight letter-spacing, one-line subhead, two pill CTAs,
 * embedded cinematic background video (/video.mp4), and signature full-bleed liquid-metal 3D artwork render.
 */

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX, Maximize2, X } from 'lucide-react';
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Manage video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      video.pause();
      setIsPlaying(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center pt-24 pb-16 md:py-32 overflow-hidden bg-[#0A0A0B]">
      
      {/* =========================================================================
          INTEGRAL BACKGROUND VIDEO (/video.mp4)
          Cinematic ambient background layer with obsidian gradient & radial mask
         ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/tech.jpg"
          className="w-full h-full object-cover scale-105 filter brightness-[0.32] contrast-125 opacity-75"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Multi-layered dark gradient overlay for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/75 to-[#0A0A0B]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,102,255,0.22),transparent_70%)]" />
        <div className="absolute inset-0 circuit-overlay opacity-30" />
      </div>

      {/* Video Ambient Telemetry Controls (Bottom Right of Hero) */}
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 p-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-white/70">
        <span className="px-2.5 text-[10px] text-[#38BDF8]">SYSTEMS REEL</span>
        <button
          onClick={togglePlay}
          className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          title={isPlaying ? 'Pause Video' : 'Play Video'}
          aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={() => setIsVideoModalOpen(true)}
          className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          title="Expand Systems Reel"
          aria-label="Expand Systems Reel"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Hero Content */}
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

            {/* Dual CTAs (Pill-Shaped) + Systems Reel Trigger */}
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

              {/* Watch Video Reel Button */}
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-white/80 hover:text-white px-5 py-4 rounded-full border border-white/10 hover:border-white/30 bg-black/40 backdrop-blur-md transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-[#0066FF] flex items-center justify-center text-white">
                  <Play className="w-3 h-3 fill-white ml-0.5" />
                </div>
                <span>Watch Systems Reel</span>
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

      {/* =========================================================================
          EXPANDED SYSTEMS REEL VIDEO MODAL
         ========================================================================= */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl animate-fade-in">
          <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden border border-white/20 bg-[#0A0A0B] shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#111113]">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-white">
                  DELVERSE ENTERPRISE SYSTEMS REEL · 4K HIGH DEFINITION
                </span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Footer Telemetry */}
            <div className="p-4 border-t border-white/10 bg-[#111113] flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
              <span>DELVERSE TECHNOLOGIES LIMITED · ASOKORO, ABUJA HQ</span>
              <span className="text-white">ARCHITECTURE & TRANSFORMATION CAPABILITIES</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
