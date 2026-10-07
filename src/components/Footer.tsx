import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUp, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyDetails, servicesData } from '../data/delverseData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [newsletterMsg, setNewsletterMsg] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterStatus('error');
      setNewsletterMsg('Please enter a valid email address.');
      return;
    }
    setNewsletterStatus('success');
    setNewsletterMsg('Subscribed! You will receive our quarterly technology briefings.');
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05080F] text-slate-300 pt-16 pb-8 border-t border-white/[0.08] overflow-hidden">
      {/* Top Newsletter Bar */}
      <div className="content-container pb-12 mb-12 border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
              Technology Briefings
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Subscribe to the Delverse Executive Tech Dispatch
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Quarterly research on enterprise AI architecture, African tech procurement, and cloud security. Zero spam.
            </p>
          </div>
          <div className="lg:col-span-6">
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if (newsletterStatus !== 'idle') setNewsletterStatus('idle');
                  }}
                  placeholder="Enter your corporate email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all duration-200 shrink-0"
                >
                  <span>Subscribe</span>
                  <Send size={15} />
                </button>
              </div>
              {newsletterStatus === 'error' && (
                <p className="mt-2 text-xs text-rose-400 flex items-center gap-1.5">
                  <AlertCircle size={13} /> {newsletterMsg}
                </p>
              )}
              {newsletterStatus === 'success' && (
                <p className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 size={13} /> {newsletterMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main 4 Columns */}
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          {/* Column 1: Brand Blurb & Socials */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/circle-logo.PNG"
                alt="Delverse Technologies Limited"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Delverse <span className="text-blue-500">Tech</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 pr-4">
              Delverse Technologies Limited is a premier technology and digital transformation consultancy in Asokoro, Abuja. We engineer custom AI models, mission-critical web and mobile applications, and resilient enterprise software architectures.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={companyDetails.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Delverse on LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href={companyDetails.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Delverse on X (formerly Twitter)"
                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={companyDetails.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Delverse on Instagram"
                className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', page: 'home' },
                { label: 'Services', page: 'services' },
                { label: 'Portfolio', page: 'portfolio' },
                { label: 'About Us', page: 'about' },
                { label: 'Contact Us', page: 'contact' },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => {
                      onNavigate(link.page);
                      scrollToTop();
                    }}
                    className="text-slate-400 hover:text-teal-300 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      scrollToTop();
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-left line-clamp-1"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Headquarters
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={17} className="text-blue-400 shrink-0 mt-0.5" />
                <span>{companyDetails.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={17} className="text-blue-400 shrink-0" />
                <a
                  href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                >
                  {companyDetails.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={17} className="text-blue-400 shrink-0" />
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyDetails.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="inline-block px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs text-teal-300">
                  {companyDetails.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {companyDetails.legalName}. All rights reserved. Registered in Nigeria (RC).
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy & Security
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Engagement
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Giant faded DELVERSE wordmark at bottom as requested */}
      <div className="w-full select-none pointer-events-none overflow-hidden mt-8 opacity-[0.035] leading-none text-center">
        <span className="text-[14vw] font-black tracking-tighter uppercase text-white block">
          DELVERSE
        </span>
      </div>
    </footer>
  );
};
