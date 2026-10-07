import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, Globe, Smartphone, Database, Shield, Compass, 
  CheckCircle2, ArrowRight, ChevronDown, Lock, Clock, 
  Terminal, BarChart3, Layers, Sparkles, Check, Server, 
  Cpu, FileCheck, ShieldAlert, Award
} from 'lucide-react';
import { 
  servicesData, techStackCategories, engagementModels, 
  faqData, ServiceItem 
} from '../data/delverseData';
import { Eyebrow, SectionHeader, ButtonPrimary } from '../components/UIElements';
import { GlobalCTA } from '../components/GlobalCTA';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(servicesData[0].id);
  const [activeTechTab, setActiveTechTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // IntersectionObserver to highlight sticky nav item in view
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = servicesData.map((s) => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSectionId(servicesData[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* =========================================================================
          1. HERO: Floating Tech Icons Orbiting an Abstract Core
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0A0F1E] to-[#070B14]">
        {/* Background ambient orbs */}
        <div className="glow-orb w-96 h-96 bg-blue-600/20 -top-10 -left-10"></div>
        <div className="glow-orb w-96 h-96 bg-teal-500/15 top-20 right-0"></div>

        <div className="content-container relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <span>/</span>
            <span className="text-teal-400">Services & Capabilities</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow text="Capabilities & Engineering" />
              <h1 className="hero-headline font-extrabold text-white tracking-tight">
                Engineering That Powers{' '}
                <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                  Enterprise Resilience
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed body-fluid">
                We combine deep mathematical modeling, fullstack architecture, and zero-trust cybersecurity to deliver end-to-end technology solutions tailored for African conglomerates and global innovators.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <ButtonPrimary onClick={() => scrollToService('ai-solutions')}>
                  Explore Capabilities Below
                </ButtonPrimary>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:text-white transition-all"
                >
                  Request Technical Discovery
                </button>
              </div>
            </div>

            {/* Orbiting Tech Core CSS/SVG Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Center Core */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-teal-400 p-[2px] shadow-glow-blue z-10 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#070B14] flex flex-col items-center justify-center text-center p-2">
                    <Cpu className="w-7 h-7 text-teal-300 animate-pulse" />
                    <span className="text-[10px] font-mono text-slate-300 mt-1 uppercase tracking-wider">
                      DELVERSE
                    </span>
                  </div>
                </div>

                {/* Outer Orbit Rings */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 border-dashed animate-spin-slow"></div>
                <div className="absolute inset-6 rounded-full border border-teal-500/20"></div>

                {/* Orbiting Tech Icons */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 p-2.5 rounded-xl bg-[#0D1322] border border-white/15 text-blue-400 shadow-lg">
                  <Brain size={18} />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 p-2.5 rounded-xl bg-[#0D1322] border border-white/15 text-teal-400 shadow-lg">
                  <Globe size={18} />
                </div>
                <div className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-[#0D1322] border border-white/15 text-violet-400 shadow-lg">
                  <Database size={18} />
                </div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-[#0D1322] border border-white/15 text-cyan-400 shadow-lg">
                  <Shield size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2 & 3. STICKY NAV + 6 ALTERNATING DEEP-DIVE SPLIT SECTIONS
          ========================================================================= */}
      <section className="py-16 bg-[#070B14] relative">
        <div className="content-container">
          {/* Mobile Horizontal Chip Nav */}
          <div className="lg:hidden sticky top-20 z-30 bg-[#070B14]/95 backdrop-blur-xl py-3 border-b border-white/10 mb-8 overflow-x-auto">
            <div className="flex gap-2 min-w-max px-1">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    activeSectionId === service.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
                  }`}
                >
                  {service.number}. {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Desktop Sticky Sidebar Nav */}
            <div className="hidden lg:block lg:col-span-3 sticky top-28 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 block px-3 mb-2">
                Table of Capabilities
              </span>
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between text-xs font-semibold border ${
                    activeSectionId === service.id
                      ? 'bg-blue-600/15 border-blue-500/40 text-white shadow-lg'
                      : 'border-transparent text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="font-mono text-teal-400">{service.number}</span>
                    <span>{service.title}</span>
                  </span>
                  {activeSectionId === service.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></div>
                  )}
                </button>
              ))}

              <div className="pt-6 border-t border-white/10 px-3">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/30 to-teal-900/20 border border-blue-500/20 text-xs">
                  <p className="font-semibold text-white mb-1">Need a custom scope?</p>
                  <p className="text-slate-400 mb-3 leading-relaxed">
                    Our architects design multi-disciplinary solutions tailored to your infrastructure.
                  </p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-teal-300 hover:text-teal-200 font-bold inline-flex items-center gap-1"
                  >
                    Talk to an Architect <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* 6 Alternating Split Capability Sections */}
            <div className="lg:col-span-9 space-y-24">
              {servicesData.map((service, index) => {
                const isEven = index % 2 === 1;
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl relative scroll-mt-28"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Text Column */}
                      <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-black font-mono text-teal-400/80">
                            {service.number}
                          </span>
                          <span className="w-8 h-[1px] bg-white/20"></span>
                          <span className="text-xs uppercase font-mono tracking-wider text-slate-400">
                            Enterprise Practice
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                          {service.title}
                        </h2>

                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          {service.fullDesc}
                        </p>

                        {/* 4 Outcome Bullets */}
                        <div className="space-y-2.5 pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Measurable Business Impact:
                          </h4>
                          {service.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                              <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                              <span>{outcome}</span>
                            </div>
                          ))}
                        </div>

                        {/* Deliverables List */}
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-2.5">
                            Core Deliverables ("What You Get"):
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                            {service.deliverables.map((d, idx) => (
                              <div key={idx} className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                                <span>{d}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {service.techTags.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={() => onNavigate('contact')}
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300 hover:text-teal-200"
                          >
                            <span>Request {service.title} Proposal</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Custom Visual Column */}
                      <div className="lg:col-span-5">
                        <ServiceCustomVisual serviceId={service.id} />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. TECH STACK GRID with Category Tabs & Tooltips
          ========================================================================= */}
      <section className="section-py bg-[#050811] border-y border-white/[0.08]">
        <div className="content-container">
          <SectionHeader
            eyebrow="Architectural Foundation"
            title="Technologies We"
            highlight="Master & Deploy"
            description="We select modern, resilient, and enterprise-supported open-source frameworks to protect our clients against vendor lock-in."
          />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {techStackCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTechTab(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  activeTechTab === idx
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Active Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStackCategories[activeTechTab].techs.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/40 text-center transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Terminal size={18} />
                </div>
                <h4 className="text-sm font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">
                  {tech.name}
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  {tech.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ENGAGEMENT MODELS: Three Pricing-Style Cards (No prices, "Request a quote")
          ========================================================================= */}
      <section className="section-py bg-[#070B14] relative">
        <div className="content-container">
          <SectionHeader
            eyebrow="Flexible Partnership"
            title="Transparent"
            highlight="Engagement Models"
            description="We adapt to your team structure, whether you require guaranteed project delivery, dedicated engineering squads, or strategic retainers."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {engagementModels.map((model, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  model.highlighted
                    ? 'bg-gradient-to-b from-[#0F172A] to-[#0D1322] border-2 border-blue-500 shadow-2xl shadow-blue-500/20 lg:-translate-y-2'
                    : 'bg-white/[0.02] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {model.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md">
                    {model.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {model.name}
                  </h3>
                  <p className="text-xs font-semibold text-teal-400 mb-4">
                    Ideal for: {model.idealFor}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {model.description}
                  </p>

                  <div className="border-t border-white/10 pt-6 mb-6">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      What's Included:
                    </h5>
                    <ul className="space-y-3">
                      {model.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <Check size={16} className="text-teal-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <button
                    onClick={() => onNavigate('contact')}
                    className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      model.highlighted
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white/[0.05] hover:bg-white/10 text-white border border-white/10'
                    }`}
                  >
                    <span>{model.ctaText}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. DELIVERY GUARANTEES STRIP
          ========================================================================= */}
      <section className="py-12 bg-[#050811] border-y border-white/[0.08]">
        <div className="content-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <Lock className="w-6 h-6 text-teal-400 mx-auto mb-2" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Strict Mutual NDA</h4>
              <p className="text-[11px] text-slate-400 mt-1">100% Confidentiality & Data Privacy</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">2-Week Agile Sprints</h4>
              <p className="text-[11px] text-slate-400 mt-1">Demonstrable progress every 14 days</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <Award className="w-6 h-6 text-violet-400 mx-auto mb-2" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Post-Launch Warranty</h4>
              <p className="text-[11px] text-slate-400 mt-1">30 days guaranteed bug-free hypercare</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <FileCheck className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Transparent Telemetry</h4>
              <p className="text-[11px] text-slate-400 mt-1">Live Jira & GitHub client visibility</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. FAQ ACCORDION (6-8 Questions with Smooth Single-Open Expansion)
          ========================================================================= */}
      <section className="section-py bg-[#070B14]">
        <div className="content-container max-w-4xl">
          <SectionHeader
            eyebrow="Clarity & Protocol"
            title="Frequently Asked"
            highlight="Questions"
            description="Clear answers regarding our development timelines, intellectual property ownership, and security standards."
          />

          <div className="space-y-4">
            {faqData.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-teal-400' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/[0.06] pt-4 animate-fade-in">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FINAL CTA BANNER
          ========================================================================= */}
      <GlobalCTA onNavigate={onNavigate} />
    </div>
  );
};

// =============================================================================
// Custom Visual Components for each service
// =============================================================================
function ServiceCustomVisual({ serviceId }: { serviceId: string }) {
  switch (serviceId) {
    case 'ai-solutions':
      // AI = animated chat/insight panel
      return (
        <div className="rounded-2xl bg-[#090D1A] border border-blue-500/30 p-5 shadow-2xl space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-blue-400">
              <Sparkles size={13} /> Delverse-LLM v3 (Inference Engine)
            </span>
            <span className="text-teal-400">Latency: 18ms</span>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-200">
              <span className="text-[10px] uppercase font-bold text-blue-400 block mb-1">User Prompt:</span>
              "Forecast Q4 agricultural grain logistics variance across northern corridors."
            </div>
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200">
              <span className="text-[10px] uppercase font-bold text-teal-400 block mb-1">AI Output (Confidence 98.4%):</span>
              "Model projects 14.2% supply compression due to rainfall variance. Recommends shifting 4,200 metric tonnes to eastern hub buffers."
            </div>
          </div>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
            <span>Model: Mistral-FineTuned-8x7B</span>
            <span className="text-emerald-400 font-bold">Zero Data Leakage: Audited</span>
          </div>
        </div>
      );

    case 'website-dev':
      // Web = browser mockup with scroll animation
      return (
        <div className="rounded-2xl bg-[#090D1A] border border-teal-500/30 shadow-2xl overflow-hidden text-xs">
          {/* Browser Address Bar */}
          <div className="bg-[#0C1222] p-3 border-b border-white/10 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="flex-1 bg-black/40 rounded-md px-3 py-1 font-mono text-[10px] text-slate-400 truncate">
              https://client-portal.delverse.tech/dashboard
            </div>
          </div>
          {/* Simulated Browser Body */}
          <div className="p-5 space-y-3">
            <div className="h-6 w-3/4 rounded bg-gradient-to-r from-blue-500/20 to-teal-500/20"></div>
            <div className="h-3 w-full rounded bg-white/[0.05]"></div>
            <div className="h-3 w-5/6 rounded bg-white/[0.05]"></div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="h-16 rounded-xl bg-white/[0.04] border border-white/[0.06] p-2 flex flex-col justify-between">
                <span className="text-[10px] text-slate-400">Load Time</span>
                <span className="text-sm font-bold text-teal-300">0.42s (99.8%)</span>
              </div>
              <div className="h-16 rounded-xl bg-white/[0.04] border border-white/[0.06] p-2 flex flex-col justify-between">
                <span className="text-[10px] text-slate-400">SEO Index</span>
                <span className="text-sm font-bold text-blue-400">100 / 100</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'apps-dev':
      // Apps = phone mockup
      return (
        <div className="max-w-[240px] mx-auto rounded-[32px] bg-[#090D1A] border-4 border-slate-700/80 p-3 shadow-2xl">
          {/* Phone Speaker Notch */}
          <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-3"></div>
          <div className="space-y-3 p-1">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span className="font-mono font-bold text-white">Delverse Mobile</span>
              <span className="text-teal-400">5G ● 100%</span>
            </div>
            <div className="p-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-[11px] text-white">
              <span className="text-[9px] text-blue-300 block">Instant Alert</span>
              Order #9401 Processed in Realtime
            </div>
            <div className="space-y-1.5">
              <div className="h-8 rounded-lg bg-white/[0.05] flex items-center px-2 text-[10px] text-slate-300">
                Biometric Auth: Verified
              </div>
              <div className="h-8 rounded-lg bg-white/[0.05] flex items-center px-2 text-[10px] text-slate-300">
                Offline Cache: Active
              </div>
            </div>
            {/* Phone Home Bar */}
            <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mt-4"></div>
          </div>
        </div>
      );

    case 'data-analytics':
      // Data = animated mini dashboard with charts
      return (
        <div className="rounded-2xl bg-[#090D1A] border border-indigo-500/30 p-5 shadow-2xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <BarChart3 size={15} className="text-indigo-400" /> Revenue & Yield Telemetry
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400">
              Live Feed
            </span>
          </div>
          {/* Simulated Bar Chart */}
          <div className="flex items-end justify-between h-28 pt-4 gap-2 border-b border-white/10 pb-2">
            {[45, 60, 35, 80, 95, 70, 88].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-blue-600 to-indigo-400"
                  style={{ height: `${h}%` }}
                ></div>
                <span className="text-[9px] font-mono text-slate-500">D{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[11px] text-slate-400">
            <span>Query Runtime: 0.12s</span>
            <span className="text-teal-300 font-bold">+34.8% YoY ROI</span>
          </div>
        </div>
      );

    case 'it-support':
      // IT Support = shield and status indicators
      return (
        <div className="rounded-2xl bg-[#090D1A] border border-cyan-500/30 p-5 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-bold text-white">SOC Surveillance</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
              Zero-Trust Guard
            </span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center justify-between">
              <span>Firewall Threat Level</span>
              <span className="font-mono font-bold">NOMINAL (0 Alerts)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 flex items-center justify-between">
              <span>Automated Encrypted Backups</span>
              <span className="font-mono text-cyan-300">Synchronized</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 flex items-center justify-between">
              <span>Cloud Uptime Telemetry</span>
              <span className="font-mono font-bold text-teal-400">99.98% SLA</span>
            </div>
          </div>
        </div>
      );

    default:
      // Consulting = roadmap diagram
      return (
        <div className="rounded-2xl bg-[#090D1A] border border-violet-500/30 p-5 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Compass size={15} className="text-violet-400" /> Executive Modernization Path
            </span>
            <span className="text-[10px] font-mono text-violet-300">Phase 1-3</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-violet-600/30 text-violet-300 flex items-center justify-center text-xs font-mono font-bold">1</span>
              <div className="flex-1 text-xs">
                <span className="font-bold text-white block">Procurement Audit</span>
                <span className="text-slate-400 text-[10px]">Vendor cost optimization</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-300 flex items-center justify-center text-xs font-mono font-bold">2</span>
              <div className="flex-1 text-xs">
                <span className="font-bold text-white block">Architecture Refactoring</span>
                <span className="text-slate-400 text-[10px]">Cloud native migration</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-teal-600/30 text-teal-300 flex items-center justify-center text-xs font-mono font-bold">3</span>
              <div className="flex-1 text-xs">
                <span className="font-bold text-white block">Board KPI Alignment</span>
                <span className="text-slate-400 text-[10px]">Long-term equity value</span>
              </div>
            </div>
          </div>
        </div>
      );
  }
}
