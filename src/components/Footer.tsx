/**
 * @file Footer.tsx
 * @description Cognichip global footer:
 * Contact emails (hello@delversetech.com and legal@delversetech.com),
 * corporate office address, small print, social links, and discreet admin portal lock.
 */

import React from 'react';
import { Mail, MapPin, Phone, Lock, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-[#0A0A0B] border-t border-white/[0.08] text-[#9CA3AF] pt-20 pb-12 overflow-hidden">
      {/* Background Micro Circuit Grid */}
      <div className="absolute inset-0 circuit-overlay pointer-events-none opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
          
          {/* Col 1 & 2: Brand Identity & Manifesto Statement */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-[#151518] border border-white/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#00F0FF] opacity-70" />
                <span className="relative z-10 font-mono font-bold text-white text-sm">D</span>
              </div>
              <span className="text-lg font-medium text-white tracking-tight">
                DELVERSE TECHNOLOGIES
              </span>
            </div>

            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6 max-w-sm">
              The new era of transformation starts now. We engineer high-velocity digital infrastructure, predictive AI pipelines, and custom enterprise software for global scale.
            </p>

            {/* Direct Inquiries & Legal Contact */}
            <div className="space-y-2 text-xs font-mono text-[#D1D5DB]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-[#9CA3AF]">General Inquiries:</span>
                <a href="mailto:hello@delversetech.com" className="hover:text-white transition-colors">
                  hello@delversetech.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span className="text-[#9CA3AF]">Legal & Compliance:</span>
                <a href="mailto:legal@delversetech.com" className="hover:text-white transition-colors">
                  legal@delversetech.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold mb-5">
              PLATFORM
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onNavigate?.('solutions')} className="hover:text-white transition-colors">
                  Solutions Matrix
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('about')} className="hover:text-white transition-colors">
                  About Delverse
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('journal')} className="hover:text-white transition-colors">
                  The Delverse Interface
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('careers')} className="hover:text-white transition-colors">
                  Careers & Manifesto
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('contact')} className="hover:text-white transition-colors">
                  Book Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Solutions Lines */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold mb-5">
              CAPABILITIES
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onNavigate?.('solutions')} className="hover:text-white transition-colors">
                  For Startups (MVP Pods)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('solutions')} className="hover:text-white transition-colors">
                  For Enterprises (Modernization)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('solutions')} className="hover:text-white transition-colors">
                  For Product Teams (Dedicated Pods)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('solutions')} className="hover:text-white transition-colors">
                  For Data Leaders (AI & Analytics)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('solutions')} className="hover:text-white transition-colors">
                  For Ops (Autonomous Workflows)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Location & Direct Dispatch */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-white font-semibold mb-5">
              DISPATCH HEADQUARTERS
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="text-[#9CA3AF]">
                  Plot 2542, Hassan Usman Katsina Street, Asokoro, Abuja, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href="tel:+2348069305155" className="hover:text-white transition-colors font-mono">
                  +234 806 930 5155
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#9CA3AF] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-white/20">/</span>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#9CA3AF] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>X / Twitter</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
          <div>
            &copy; {new Date().getFullYear()} Delverse Technologies Limited. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#9CA3AF]">Confidential & Enterprise Grade</span>
            
            {/* Discreet Admin Link */}
            <button
              onClick={() => onNavigate?.('admin')}
              className="inline-flex items-center gap-1.5 text-xs text-[#6B7280] hover:text-white transition-colors p-1 rounded"
              title="Console Admin Portal"
              aria-label="Console Admin Portal"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Admin Console</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
