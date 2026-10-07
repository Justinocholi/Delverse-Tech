import React, { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Eyebrow: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => (
  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm ${className}`}>
    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
    {text}
  </div>
);

export const SectionHeader: React.FC<{
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  className?: string;
}> = ({ eyebrow, title, highlight, description, center = true, className = '' }) => (
  <div className={`mb-12 md:mb-16 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
    {eyebrow && <Eyebrow text={eyebrow} className="mb-4" />}
    <h2 className="section-headline font-bold tracking-tight text-white mt-2">
      {title} {highlight && <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">{highlight}</span>}
    </h2>
    {description && (
      <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed body-fluid">
        {description}
      </p>
    )}
  </div>
);

export const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', onClick }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0D1322]/80 backdrop-blur-md p-6 md:p-8 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1 shadow-glass group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 102, 255, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const ButtonPrimary: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}> = ({ children, onClick, className = '', icon = true, type = 'button', disabled = false }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 hover:from-blue-500 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none group ${className}`}
  >
    <span>{children}</span>
    {icon && (
      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
    )}
  </button>
);

export const ButtonSecondary: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ children, onClick, className = '' }) => (
  <button
    type="button"
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.04] border border-white/[0.12] hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
  >
    {children}
  </button>
);
