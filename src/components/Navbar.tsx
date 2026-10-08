/**
 * @file Navbar.tsx
 * @description Cognichip sticky top navigation bar:
 * Delverse logo left; links: Solutions, About, Journal, Careers, Contact;
 * right-aligned pill CTA button 'Start a Project'.
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDark?: boolean;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'solutions', label: 'Solutions' },
    { id: 'about', label: 'About' },
    { id: 'journal', label: 'Journal' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0B]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Delverse Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            {/* Minimal Liquid Chrome Monogram */}
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-[#151518] border border-white/20 flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-[#00F0FF] to-[#7C3AED] opacity-70" />
              <div className="relative z-10 font-mono font-bold text-white text-base">
                D
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-base font-medium tracking-tight text-white group-hover:text-white transition-colors">
                DELVERSE
              </span>
              <span className="text-[10px] font-mono tracking-widest text-[#9CA3AF] uppercase">
                TECHNOLOGIES
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Pill CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="cogni-btn-primary text-xs tracking-wide uppercase px-6 py-2.5 font-medium"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#9CA3AF] hover:text-white hover:bg-white/[0.05] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0B]/95 backdrop-blur-2xl border-b border-white/[0.08] px-4 pt-4 pb-8 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-white/[0.08] text-white'
                      : 'text-[#9CA3AF] hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/[0.08]">
            <button
              onClick={() => handleNavClick('contact')}
              className="cogni-btn-primary w-full text-center text-sm py-3.5"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
