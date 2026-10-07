import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Copy, Check, CheckCircle2, 
  ArrowRight, ArrowLeft, Send, Sparkles, MessageSquare, 
  ShieldCheck, HelpCircle, ExternalLink, AlertCircle 
} from 'lucide-react';
import { companyDetails, servicesData } from '../data/delverseData';
import { Eyebrow, SectionHeader, ButtonPrimary } from '../components/UIElements';

export const ContactPage: React.FC = () => {
  // Multi-step form state
  const [currentStep, setCurrentStep] = useState(1);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form inputs
  const [selectedServices, setSelectedServices] = useState<string[]>(['AI-Powered Solutions']);
  const [budgetRange, setBudgetRange] = useState<number>(25000); // in USD or equivalent
  const [timeline, setTimeline] = useState<string>('1 - 2 Months');
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '', // anti-spam bot trap
  });

  // Copy to clipboard helper
  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleNext = () => {
    setErrorMessage('');
    if (currentStep === 1) {
      if (selectedServices.length === 0) {
        setErrorMessage('Please select at least one capability you need.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Spam honeypot validation
    if (formData.honeypot) {
      return;
    }

    // Required fields validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid work email address.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-[#070B14]">
      {/* Background glow orbs */}
      <div className="glow-orb w-96 h-96 bg-blue-600/15 top-20 left-10"></div>
      <div className="glow-orb w-96 h-96 bg-teal-500/15 top-40 right-10"></div>

      <div className="content-container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <Eyebrow text="Start Your Engagement" />
          <h1 className="hero-headline font-extrabold text-white tracking-tight mt-3">
            Let's Engineer Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
              Next Breakthrough
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed body-fluid mt-4">
            Connect directly with our engineering team in Asokoro, Abuja. We respond with a technical brief and NDA within 24 business hours.
          </p>
        </div>

        {/* =========================================================================
            1 & 2. SPLIT LAYOUT: Direct Cards Left & Multi-Step Form Right
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            {/* Response Promise Banner */}
            <div className="p-5 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-teal-400/20 text-teal-300 flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">24-Hour Executive Promise</h4>
                <p className="text-xs text-teal-200">
                  Every inquiry is reviewed directly by a Senior Architect, never an automated bot.
                </p>
              </div>
            </div>

            {/* Direct Cards: Email, Phone, Address with Copy-to-Clipboard */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Direct Inquiries</span>
                    <a
                      href={`mailto:${companyDetails.email}`}
                      className="text-sm font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      {companyDetails.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(companyDetails.email, 'email')}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-slate-300 transition-colors"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check size={16} className="text-teal-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card with Click-to-Call & Copy */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-600/20 text-teal-400 flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Office Telephone</span>
                    <a
                      href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-bold text-white hover:text-teal-300 transition-colors"
                    >
                      {companyDetails.phoneDisplay}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(companyDetails.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-slate-300 transition-colors"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check size={16} className="text-teal-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Office Address Card */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-colors flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Asokoro Headquarters</span>
                    <p className="text-xs text-white leading-relaxed pr-2">
                      {companyDetails.location}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(companyDetails.location, 'address')}
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-slate-300 transition-colors shrink-0"
                  aria-label="Copy office address"
                  title="Copy address"
                >
                  {copiedField === 'address' ? <Check size={16} className="text-teal-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Quick Chat Card */}
            <div className="p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                <div>
                  <h5 className="text-xs font-bold text-white">Need an urgent consultation?</h5>
                  <p className="text-[11px] text-slate-300">Message our executive desk on WhatsApp</p>
                </div>
              </div>
              <a
                href={companyDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-all"
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* Right Column: Multi-Step Project Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
              {/* Stepper Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-teal-400 font-bold">Step {currentStep} of 3</span>
                  <span className="text-slate-400">
                    {currentStep === 1 && 'Select Capabilities'}
                    {currentStep === 2 && 'Budget & Timeline'}
                    {currentStep === 3 && 'Contact Credentials'}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-teal-400 to-violet-500 transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Success View */}
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-teal-500/20 border-2 border-teal-400 flex items-center justify-center mx-auto text-teal-300 shadow-glow-teal animate-bounce">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. A Delverse Technology Director will review your specifications and reach out within 24 business hours.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
                    <span className="font-bold text-teal-400 uppercase tracking-wider block">Next Protocol:</span>
                    <p className="text-slate-300">1. We assemble our preliminary architectural assessment.</p>
                    <p className="text-slate-300">2. A mutual Non-Disclosure Agreement (NDA) will be issued.</p>
                    <p className="text-slate-300">3. 30-minute discovery consultation on Zoom or in Asokoro HQ.</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                      setFormData({ fullName: '', company: '', email: '', phone: '', message: '', honeypot: '' });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 text-xs text-slate-300 font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot Spam Protection (hidden from humans) */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                  </div>

                  {/* STEP 1: What You Need (Service Multi-Select Chips) */}
                  {currentStep === 1 && (
                    <div className="space-y-5 animate-fade-in">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          What capabilities does your project require?
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          Select all services that align with your requirements:
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {servicesData.map((service) => {
                          const isSelected = selectedServices.includes(service.title);
                          return (
                            <div
                              key={service.id}
                              onClick={() => toggleService(service.title)}
                              className={`p-4 rounded-xl border text-xs font-semibold cursor-pointer transition-all flex items-center justify-between ${
                                isSelected
                                  ? 'bg-blue-600/20 border-blue-500 text-white shadow-md'
                                  : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.05]'
                              }`}
                            >
                              <span>{service.title}</span>
                              <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                                isSelected ? 'bg-blue-600 border-blue-500 text-white' : 'border-white/20'
                              }`}>
                                {isSelected && <Check size={12} />}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={handleNext}
                          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
                        >
                          <span>Continue to Scope</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Budget Slider & Timeline Select */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Estimated Budget & Preferred Timeline
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          Help us tailor architecture complexity to your financial plan:
                        </p>
                      </div>

                      {/* Budget Slider */}
                      <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-slate-400">Target Budget Allocation</span>
                          <span className="text-lg font-black font-mono text-teal-300">
                            ${budgetRange.toLocaleString()} USD+
                          </span>
                        </div>
                        <input
                          type="range"
                          min="5000"
                          max="150000"
                          step="5000"
                          value={budgetRange}
                          onChange={(e) => setBudgetRange(Number(e.target.value))}
                          className="w-full accent-teal-400 cursor-pointer"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-slate-500">
                          <span>$5,000 (POC / Sprints)</span>
                          <span>$50,000 (Enterprise)</span>
                          <span>$150,000+ (Institutional)</span>
                        </div>
                      </div>

                      {/* Timeline Selector */}
                      <div>
                        <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                          Target Launch Window
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                          {['Immediate (< 4 Wks)', '1 - 2 Months', '3 - 6 Months', 'Flexible / Strategic'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setTimeline(t)}
                              className={`p-3 rounded-xl border text-xs font-semibold transition-all ${
                                timeline === t
                                  ? 'bg-teal-500/20 border-teal-400 text-teal-300'
                                  : 'bg-white/[0.02] border-white/10 text-slate-400 hover:text-white'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between border-t border-white/10">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
                        >
                          <ArrowLeft size={14} /> Back
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all"
                        >
                          <span>Credentials</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Contact Credentials & Message */}
                  {currentStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Where should we send your technical proposal?
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          Your credentials are encrypted under our strict NDA protocol.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ibrahim Abubakar"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Company / Organization *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. MECA Group Ltd."
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Work Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="ibrahim@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Direct Phone / WhatsApp</label>
                          <input
                            type="tel"
                            placeholder="+234 ..."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Brief Description of Project</label>
                        <textarea
                          rows={3}
                          placeholder="Briefly describe your objectives, key challenges, or existing stack..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-blue-500 resize-none"
                        />
                      </div>

                      {errorMessage && (
                        <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                          <AlertCircle size={15} />
                          <span>{errorMessage}</span>
                        </div>
                      )}

                      <div className="pt-4 flex items-center justify-between border-t border-white/10">
                        <button
                          type="button"
                          onClick={() => setCurrentStep(2)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
                        >
                          <ArrowLeft size={14} /> Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Submitting Brief...</span>
                          ) : (
                            <>
                              <span>Submit Project Brief</span>
                              <Send size={14} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. WHAT HAPPENS NEXT STRIP (3 Steps)
            ========================================================================= */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <SectionHeader
            eyebrow="Onboarding Protocol"
            title="What Happens"
            highlight="Next?"
            description="Our transparent client intake pipeline from initial submission to sprint kickoff."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <span className="w-8 h-8 rounded-full bg-blue-600/30 text-blue-300 font-mono font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                1
              </span>
              <h4 className="text-base font-bold text-white mb-1">Architecture Review</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Within 2 to 4 hours, our senior engineering team examines your requirements and validates feasibility.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <span className="w-8 h-8 rounded-full bg-teal-600/30 text-teal-300 font-mono font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                2
              </span>
              <h4 className="text-base font-bold text-white mb-1">Confidential Consultation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                A 30-minute discovery session under NDA to clarify data sources, deliverables, and sprint milestones.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-center">
              <span className="w-8 h-8 rounded-full bg-violet-600/30 text-violet-300 font-mono font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                3
              </span>
              <h4 className="text-base font-bold text-white mb-1">Milestone Proposal</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                You receive a fixed-deliverable engineering roadmap with transparent pricing and zero hidden costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
