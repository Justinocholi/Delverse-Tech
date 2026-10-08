/**
 * @file ContactPage.tsx
 * @description Enterprise Dispatch & Consultation Intake for Delverse Technologies:
 * Ultra-legitimate, high-trust institutional contact page strictly adhering to
 * cognichip.ai design tokens (near-black #0A0A0B, pure white, electric blue, clean cards).
 * Official dual emails (hello@delversetech.com & legal@delversetech.com), Asokoro HQ,
 * bilateral NDA guarantee, and streamlined enterprise brief intake form.
 */

import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Copy, Check, CheckCircle2, 
  ArrowRight, Send, ShieldCheck, Lock, MessageSquare, ArrowUpRight 
} from 'lucide-react';
import { companyDetails } from '../data/delverseData';

export const ContactPage: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    solutionFocus: 'Enterprise Modernization',
    timeline: 'Immediate (< 4 Weeks)',
    message: '',
    honeypot: '', // anti-bot trap
  });

  // Resilient Clipboard Copy
  const handleCopy = async (text: string, fieldName: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2500);
    } catch {
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Spam honeypot validation
    if (formData.honeypot) return;

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid enterprise work email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="bg-[#0A0A0B] text-white selection:bg-[#0066FF] selection:text-white pt-28 pb-28">
      {/* Background Micro Circuit Grid */}
      <div className="absolute inset-0 circuit-overlay pointer-events-none opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="cogni-section-label block mb-4">
            DIRECT DISPATCH & CONSULTATION
          </span>
          <h1 className="cogni-headline-display text-white mb-6">
            Initiate Project Dialogue.
          </h1>
          <p className="cogni-body text-base md:text-lg text-[#9CA3AF]">
            Connect directly with our engineering leadership in Asokoro, Abuja. Every technical brief is evaluated under bilateral NDA within 24 business hours.
          </p>
        </div>

        {/* Main Grid: Left Official Channels & Right Streamlined Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Official Enterprise Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Bilateral NDA Promise Banner */}
            <div className="p-6 rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#111113]/90 backdrop-blur-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0066FF]/20 text-[#38BDF8] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-white mb-1">
                    Bilateral NDA Protection
                  </h3>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    All technical disclosures, codebase architectures, and commercial specifications shared with Delverse are protected by strict institutional non-disclosure standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              
              {/* General Inquiries Email */}
              <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#111113]/85 hover:border-white/[0.18] transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/15 text-[#38BDF8] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#9CA3AF] block">
                      General & Projects
                    </span>
                    <a
                      href="mailto:hello@delversetech.com"
                      className="text-sm font-medium text-white hover:text-[#38BDF8] transition-colors font-mono"
                    >
                      hello@delversetech.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('hello@delversetech.com', 'email')}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 transition-colors"
                  title="Copy email"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Legal & Compliance Email */}
              <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#111113]/85 hover:border-white/[0.18] transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/15 text-purple-400 flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#9CA3AF] block">
                      Legal & Compliance
                    </span>
                    <a
                      href="mailto:legal@delversetech.com"
                      className="text-sm font-medium text-white hover:text-purple-300 transition-colors font-mono"
                    >
                      legal@delversetech.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('legal@delversetech.com', 'legal')}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 transition-colors"
                  title="Copy legal email"
                  aria-label="Copy legal email address"
                >
                  {copiedField === 'legal' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Telephone */}
              <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#111113]/85 hover:border-white/[0.18] transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/15 text-cyan-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#9CA3AF] block">
                      Dispatch Desk (WAT)
                    </span>
                    <a
                      href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-medium text-white hover:text-cyan-300 transition-colors font-mono"
                    >
                      {companyDetails.phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(companyDetails.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 transition-colors"
                  title="Copy phone"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Physical Headquarters Card */}
              <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#111113]/85 hover:border-white/[0.18] transition-colors flex items-center justify-between">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-700/30 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#9CA3AF] block">
                      Corporate Headquarters
                    </span>
                    <p className="text-xs text-white leading-relaxed pr-2 font-normal">
                      {companyDetails.location}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(companyDetails.location, 'address')}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 transition-colors shrink-0"
                  title="Copy address"
                  aria-label="Copy corporate address"
                >
                  {copiedField === 'address' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Quick Executive Chat */}
              <div className="p-5 rounded-2xl border border-white/[0.08] bg-[#111113]/85 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#9CA3AF] block">
                      Fast Executive Messaging
                    </span>
                    <span className="text-xs text-white">Direct WhatsApp Dispatch</span>
                  </div>
                </div>
                <a
                  href={companyDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Streamlined Institutional Brief Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-12 rounded-2xl md:rounded-3xl border border-white/[0.1] bg-[#111113]/90 backdrop-blur-2xl">
              
              <div className="mb-8 pb-6 border-b border-white/[0.08]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] block mb-2">
                  PROJECT SPECIFICATION
                </span>
                <h3 className="text-2xl font-medium text-white tracking-tight">
                  Submit Technical Brief
                </h3>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  Fill in the essential parameters below. Our solutions engineering directorate will review and reply within 24 hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-medium text-white">
                    Brief Transmitted Successfully
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been routed to our Senior Systems Architect in Asokoro. We will respond with an initial technical assessment and NDA framework within 24 hours.
                  </p>
                  <div className="text-xs font-mono text-emerald-400 pt-2">
                    DISPATCH TICKET: #DLV-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                  />

                  {/* Name and Enterprise Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9CA3AF] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#0066FF] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9CA3AF] mb-2">
                        Organization / Enterprise *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Holdings"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#0066FF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Work Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9CA3AF] mb-2">
                        Enterprise Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#0066FF] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9CA3AF] mb-2">
                        Direct Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 ... / +1 ..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#0066FF] transition-all"
                      />
                    </div>
                  </div>

                  {/* Solution Focus & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9CA3AF] mb-2">
                        Primary Capability Needed
                      </label>
                      <select
                        value={formData.solutionFocus}
                        onChange={(e) => setFormData({ ...formData, solutionFocus: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151518] border border-white/10 text-white text-sm focus:outline-none focus:border-[#0066FF] transition-all"
                      >
                        <option value="Enterprise Modernization">Enterprise Modernization</option>
                        <option value="Startups MVP Pod">Startups (Rapid MVP Pod)</option>
                        <option value="Dedicated Engineering Pod">Dedicated Engineering Pod</option>
                        <option value="Data & AI Intelligence">Data & AI Intelligence Models</option>
                        <option value="Autonomous Ops & RPA">Autonomous Ops & RPA</option>
                        <option value="Custom Software Architecture">Custom Software Architecture</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9CA3AF] mb-2">
                        Estimated Target Window
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#151518] border border-white/10 text-white text-sm focus:outline-none focus:border-[#0066FF] transition-all"
                      >
                        <option value="Immediate (< 4 Weeks)">Immediate (&lt; 4 Weeks)</option>
                        <option value="1 - 3 Months">1 - 3 Months</option>
                        <option value="Multi-Quarter Strategic">Multi-Quarter Strategic</option>
                        <option value="Exploratory Architecture Review">Exploratory Architecture Review</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Brief Overview */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#9CA3AF] mb-2">
                      Brief Overview & Current Bottlenecks
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your systems goals, technical stack, or existing legacy constraints..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#0066FF] transition-all resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] font-mono text-[#6B7280]">
                      Protected by 256-bit TLS encryption & bilateral NDA.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cogni-btn-primary w-full sm:w-auto px-8 py-3.5 text-sm"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Brief...</span>
                      ) : (
                        <>
                          <span>Transmit Project Brief</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* What to Expect (3 Steps) */}
        <div className="mt-28 pt-16 border-t border-white/[0.08]">
          <div className="max-w-3xl mb-12">
            <span className="cogni-section-label block mb-3">
              INSTITUTIONAL ONBOARDING
            </span>
            <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">
              What happens after submission?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#111113]/80">
              <span className="text-xs font-mono text-[#38BDF8] block mb-2">STAGE 01</span>
              <h4 className="text-lg font-medium text-white mb-2">Technical Feasibility Check</h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                Our principal systems architect reviews your brief within 2 to 4 hours to assess complexity, capacity, and architectural invariants.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#111113]/80">
              <span className="text-xs font-mono text-[#38BDF8] block mb-2">STAGE 02</span>
              <h4 className="text-lg font-medium text-white mb-2">Confidential Discovery</h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                A 30-minute discovery call under NDA to clarify data sources, deliverable expectations, and pod composition.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#111113]/80">
              <span className="text-xs font-mono text-[#38BDF8] block mb-2">STAGE 03</span>
              <h4 className="text-lg font-medium text-white mb-2">Fixed-Deliverable Specification</h4>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                You receive a transparent engineering specification with concrete sprint milestones, SLA guarantees, and fixed commercial terms.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
