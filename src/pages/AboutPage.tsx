import React from 'react';
import { 
  Users, Target, Compass, Sparkles, Award, ShieldCheck, 
  MapPin, ExternalLink, ArrowRight, Check, X as CrossIcon, 
  Briefcase, HeartHandshake, Eye, Linkedin, Cpu 
} from 'lucide-react';
import { 
  companyDetails, heroStats, milestones, teamMembers 
} from '../data/delverseData';
import { Eyebrow, SectionHeader, ButtonPrimary } from '../components/UIElements';
import { GlobalCTA } from '../components/GlobalCTA';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative">
      {/* =========================================================================
          1. HERO: Big Statement & Visual Image Collage
          ========================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0A0F1E] to-[#070B14]">
        <div className="content-container relative z-10">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <span>/</span>
            <span className="text-teal-400">About Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow text="The Delverse Credo" />
              <h1 className="hero-headline font-extrabold text-white tracking-tight leading-tight">
                We Stand at the Center of{' '}
                <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                  Global Networks
                </span>{' '}
                to Advance Your Strategic Interests.
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed body-fluid">
                Delverse Technologies Limited was founded with an unyielding conviction: that modern African enterprises deserve world-class engineering, bulletproof data sovereignty, and AI capabilities on par with the most elite technology institutions in the world.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <ButtonPrimary onClick={() => onNavigate('contact')}>
                  Consult with Executive Leadership
                </ButtonPrimary>
                <button
                  onClick={() => {
                    const el = document.getElementById('story-timeline');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-slate-200 bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:text-white transition-all"
                >
                  Our Story & Milestones
                </button>
              </div>
            </div>

            {/* Visual Image Collage */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 relative">
              <div className="space-y-3.5">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-44 bg-slate-900">
                  <img src="/image-1.jpg" alt="Delverse engineering hub" className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-56 bg-slate-900">
                  <img src="/tech.jpg" alt="Modern enterprise consultation" className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-3.5 pt-6">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl h-56 bg-slate-900">
                  <img src="/image-3.jpg" alt="Collaborative design workshop" className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="rounded-2xl p-4 bg-gradient-to-br from-blue-600/30 to-teal-500/20 border border-blue-500/30 flex flex-col justify-center">
                  <span className="text-2xl font-black text-white font-mono">100%</span>
                  <span className="text-xs text-slate-300 mt-1">Sovereign Code Ownership & Transparency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STORY + TIMELINE (Signature Feature: Vertical Timeline with Milestone Nodes)
          ========================================================================= */}
      <section id="story-timeline" className="section-py bg-[#070B14] relative">
        <div className="content-container">
          <SectionHeader
            eyebrow="Chronicle of Growth"
            title="Our Story &"
            highlight="Milestone Journey"
            description="From our inception in Asokoro, Abuja to architecting digital ecosystems for leading conglomerates across West Africa."
          />

          <div className="relative max-w-3xl mx-auto mt-12">
            {/* Vertical Center Line */}
            <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-blue-500 via-teal-400 to-violet-600 opacity-30"></div>

            <div className="space-y-12">
              {milestones.map((m, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className="relative flex flex-col sm:flex-row items-start gap-8">
                    {/* Node Circle on Line */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#070B14] border-2 border-teal-400 flex items-center justify-center z-10 shadow-glow-teal">
                      <div className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></div>
                    </div>

                    {/* Left side content for even, Right side for odd */}
                    <div className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto text-left'}`}>
                      <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-colors">
                        <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : ''}`}>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300">
                            {m.tag}
                          </span>
                          <span className="text-sm font-black font-mono text-teal-400">{m.year}</span>
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">{m.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{m.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. VISION, MISSION, VALUES (Three Large Cards + 4 Value Tiles)
          ========================================================================= */}
      <section className="section-py bg-[#050811] border-y border-white/[0.08]">
        <div className="content-container">
          <SectionHeader
            eyebrow="Core Philosophy"
            title="Vision, Mission &"
            highlight="Foundational Values"
            description="The governing principles that define our software standards, executive engagements, and client relationships."
          />

          {/* Three Large Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To stand as the indisputable global benchmark for African AI solutions and enterprise software, proving that world-changing technology is engineered from Abuja.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#0A0F1E] border-2 border-teal-500/50 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-teal-600/20 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                To engineer tailor-made, resilient software systems that eliminate operational waste, accelerate profitability, and forge lasting strategic partnerships.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-violet-500/40 transition-all">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Heritage</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Born out of hands-on technical mastery, relentless curiosity, and absolute integrity in honoring every delivery commitment made to clients.
              </p>
            </div>
          </div>

          {/* Values Expanded into 4 Tiles */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 text-center mb-8">
              The Four Pillars of Delverse Excellence
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Innovation', desc: 'Refusing obsolete templates; deploying modern models that redefine competitive edges.', icon: Sparkles },
                { title: 'Collaboration', desc: 'Direct access to senior partners and architects with zero bureaucratic insulation.', icon: HeartHandshake },
                { title: 'Precision', desc: 'Every millisecond of load time and every line of code tested under rigorous QA.', icon: Award },
                { title: 'Integrity', desc: 'Uncompromised data privacy, transparent billing, and zero vendor lock-in.', icon: ShieldCheck },
              ].map((val, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                  <val.icon className="w-6 h-6 text-teal-400 mb-3" />
                  <h5 className="text-base font-bold text-white mb-2">{val.title}</h5>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. WHY DELVERSE: Comparison Table ("Typical Agency vs Delverse")
          ========================================================================= */}
      <section className="section-py bg-[#070B14]">
        <div className="content-container">
          <SectionHeader
            eyebrow="The Delverse Advantage"
            title="Why Leading Enterprises"
            highlight="Choose Delverse"
            description="See how our institutional engineering standards contrast with traditional outsourcing vendors."
          />

          <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 overflow-hidden bg-white/[0.02] shadow-2xl">
            <div className="grid grid-cols-12 bg-white/[0.04] p-4 sm:p-6 border-b border-white/10 text-xs font-bold uppercase tracking-wider">
              <div className="col-span-5 text-slate-400">Engineering Dimension</div>
              <div className="col-span-3 text-slate-500">Typical Agency</div>
              <div className="col-span-4 text-teal-300">Delverse Technologies</div>
            </div>

            <div className="divide-y divide-white/[0.06] text-xs sm:text-sm">
              {[
                {
                  dim: 'AI & Data Sovereignty',
                  typical: 'Generic wrapper APIs; proprietary data leaked into public LLM training.',
                  delverse: 'Bespoke fine-tuned models hosted on private air-gapped VPCs with zero data leakage.',
                },
                {
                  dim: 'Senior Architect Access',
                  typical: 'Delegated to junior interns after contracts are signed.',
                  delverse: 'Direct sprint communication with Founders and Principal Architects.',
                },
                {
                  dim: 'Code Ownership & Lock-In',
                  typical: 'Proprietary hosting traps with monthly recurring licensing fees.',
                  delverse: '100% full IP and source code transfer upon completion; zero lock-in.',
                },
                {
                  dim: 'Performance Benchmarks',
                  typical: 'Bloated WordPress templates with 4s+ page load times.',
                  delverse: 'Lighthouse 95+ score, sub-second latency, and WCAG AA accessibility.',
                },
                {
                  dim: 'Post-Launch Warranty',
                  typical: 'Paid hourly support for bugs introduced during rollout.',
                  delverse: '30-day bug-free warranty and dedicated SLA-backed hypercare.',
                },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center gap-2">
                  <div className="col-span-5 font-semibold text-white">{row.dim}</div>
                  <div className="col-span-3 text-slate-500 flex items-start gap-1.5 text-xs">
                    <CrossIcon size={14} className="text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.typical}</span>
                  </div>
                  <div className="col-span-4 text-teal-200 flex items-start gap-1.5 text-xs font-medium">
                    <Check size={16} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>{row.delverse}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. TEAM GRID: Photos (Grayscale to Color on Hover), Leadership Larger Cards
          ========================================================================= */}
      <section className="section-py bg-[#050811] border-t border-white/[0.08]">
        <div className="content-container">
          <SectionHeader
            eyebrow="The Minds Behind The Code"
            title="Executive"
            highlight="Leadership & Engineers"
            description="Our senior partners combine extensive industry leadership with rigorous hands-on engineering."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className={`rounded-3xl border border-white/[0.08] bg-[#0D1322] overflow-hidden hover:border-blue-500/40 transition-all duration-300 shadow-glass group ${
                  member.isLeadership ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Photo with grayscale to color transition */}
                <div className="h-72 overflow-hidden relative bg-slate-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-transparent to-transparent opacity-80"></div>
                  
                  {member.isLeadership && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                      Partner / Co-Founder
                    </div>
                  )}
                </div>

                {/* Details & Bio */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-teal-400 mt-0.5">
                        {member.role}
                      </p>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/[0.05] hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin size={15} />
                      </a>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2 border-t border-white/[0.06]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. LOCATION CARD: Stylized Dark Map Pin for Asokoro, Abuja
          ========================================================================= */}
      <section className="section-py bg-[#070B14]">
        <div className="content-container max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0C1222] to-[#080D1A] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400">
                  Global Operations Center
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Headquartered in Asokoro, Abuja
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Located in the premier diplomatic and executive district of Nigeria's capital city, Delverse serves clients across Lagos, Abuja, London, and international timezones.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 pt-2">
                  <p className="flex items-start gap-2.5">
                    <MapPin size={17} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>{companyDetails.location}</span>
                  </p>
                  <p className="text-slate-400 text-xs">
                    Office Hours: {companyDetails.hours}
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Asokoro+Abuja+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300 hover:text-teal-200"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              <div className="md:col-span-5 h-56 rounded-2xl bg-[#090D1A] border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>LAT: 9.0436 deg N</span>
                  <span>LNG: 7.5255 deg E</span>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center py-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/30 border border-teal-400 flex items-center justify-center text-teal-300 shadow-glow-teal animate-bounce">
                    <MapPin size={22} />
                  </div>
                  <span className="text-xs font-bold text-white mt-2">Delverse Tech HQ</span>
                  <span className="text-[10px] text-teal-300">Asokoro District, Abuja</span>
                </div>
                <div className="relative z-10 text-center text-[10px] text-slate-500 font-mono">
                  Physical and remote consultations available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. CAREERS TEASER & GLOBAL CTA
          ========================================================================= */}
      <section className="py-12 bg-[#050811] border-t border-white/[0.08] text-center">
        <div className="content-container max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-400">
            Join The Squad
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
            Want to build the future of technology with us?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
            We are always scouting for top 1% full-stack engineers, AI researchers, and UI/UX designers who care about software craftsmanship.
          </p>
          <a
            href={`mailto:${companyDetails.email}?subject=Career%20Inquiry%20-%20Delverse%20Engineering`}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300 hover:text-teal-200"
          >
            <span>Send CV to Careers Desk</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </section>

      <GlobalCTA onNavigate={onNavigate} />
    </div>
  );
};
