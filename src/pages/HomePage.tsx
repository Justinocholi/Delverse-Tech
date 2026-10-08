import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, Globe, Smartphone, Database, Shield, Users, 
  ArrowRight, ChevronLeft, ChevronRight, Star, 
  CheckCircle2, Compass, Layers, CheckSquare, Rocket, 
  Sparkles, Activity, ShieldCheck, Terminal, Cpu, ArrowUpRight, Target
} from 'lucide-react';
import { 
  companyDetails, clientBrands, heroStats, 
  servicesData, processSteps, testimonialsData 
} from '../data/delverseData';
import { 
  Eyebrow, SectionHeader, SpotlightCard, 
  ButtonPrimary, ButtonSecondary 
} from '../components/UIElements';
import { GlobalCTA } from '../components/GlobalCTA';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Testimonial slider state
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  // Process sticky step state
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  // Video ref for pause on off-screen or reduced motion
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play testimonial slider (pauses on hover)
  useEffect(() => {
    if (isTestimonialHovered) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isTestimonialHovered]);

  // Video intersection observer (pauses when offscreen)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* =========================================================================
          1. HERO SECTION (Cinematic Video Background + Floating Glass Stat Card)
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Video with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/tech.jpg"
            className="w-full h-full object-cover scale-105 filter brightness-[0.4] contrast-125"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          {/* Multi-layered dark gradient overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/75 to-[#070B14]/85"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,102,255,0.25),transparent_70%)]"></div>
          {/* Subtle noise grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 radial-mask pointer-events-none"></div>
        </div>

        <div className="content-container relative z-10 w-full py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/15 text-teal-300 border border-teal-500/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                Digital Transformation Partner
              </div>

              <h1 className="hero-headline font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                  Cutting-Edge Technology
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed body-fluid">
                From bespoke AI implementation and predictive analytics to award-caliber web platforms, we engineer tailored technology solutions that streamline operations and accelerate digital growth for African and international enterprises.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <ButtonPrimary onClick={() => onNavigate('services')}>
                  Our Services
                </ButtonPrimary>
                <ButtonSecondary onClick={() => onNavigate('about')}>
                  About Delverse
                </ButtonSecondary>
              </div>

              {/* Trust Badges under CTAs */}
              <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-teal-400" />
                  <span>Enterprise Security Audited</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-blue-400" />
                  <span>99.9% Uptime Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-violet-400" />
                  <span>Headquartered in Abuja</span>
                </div>
              </div>
            </div>

            {/* Right: Floating Glass Stat Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-7 shadow-2xl shadow-black/60 relative animate-float">
                {/* Header of card */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Cpu size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">System Telemetry</h4>
                      <p className="text-[11px] text-teal-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                        Active Deployments
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-slate-400">
                    SLA v2.4
                  </span>
                </div>

                {/* Stat list */}
                <div className="space-y-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                    <span className="text-xs text-slate-400">Enterprise Projects</span>
                    <span className="text-lg font-black text-white">50+</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                    <span className="text-xs text-slate-400">Corporate Clients</span>
                    <span className="text-lg font-black text-teal-300">30+</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                    <span className="text-xs text-slate-400">Target Coverage</span>
                    <span className="text-lg font-black text-blue-400">Pan-African & Global</span>
                  </div>
                </div>

                {/* Footer of card */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Asokoro, Abuja HQ</span>
                  <button 
                    onClick={() => onNavigate('portfolio')}
                    className="text-teal-300 hover:text-teal-200 font-semibold inline-flex items-center gap-1"
                  >
                    View Case Studies <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Scroll</span>
          <div className="w-4 h-7 rounded-full border border-slate-500 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-blue-400 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TRUST STRIP (Infinite Logo Marquee of Client Brands)
          ========================================================================= */}
      <section className="py-10 bg-[#050811] border-y border-white/[0.06] overflow-hidden">
        <div className="content-container mb-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Trusted by Leaders in Agriculture, Engineering, Consulting & EdTech
          </p>
        </div>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-10 whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-2">
            {[...clientBrands, ...clientBrands].map((brand, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/40 hover:bg-white/[0.06] transition-all duration-300 group cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors"></div>
                <div className="text-left">
                  <span className="text-sm font-bold tracking-tight text-slate-400 group-hover:text-white transition-colors">
                    {brand.name}
                  </span>
                  <span className="block text-[10px] text-slate-600 group-hover:text-teal-400 transition-colors">
                    {brand.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. ABOUT TEASER (Split Layout with Professional Woman Image & Badges)
          ========================================================================= */}
      <section className="section-py bg-[#070B14] relative">
        <div className="content-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Professional Image with Rounded Mask & "Est." Badge */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow behind image */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-teal-500/20 to-violet-600/20 blur-2xl opacity-60"></div>
                
                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/5] bg-slate-900">
                  <img
                    src="/image-2.jpg"
                    alt="Delverse technology consultant at work"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Est. badge */}
                  <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                    <span>Est. {companyDetails.established}</span>
                  </div>

                  {/* Caption on image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                    <p className="text-xs font-semibold text-white">David Ocholi & Executive Team</p>
                    <p className="text-[11px] text-slate-400">Asokoro, Abuja, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Copy & Vision, Mission, Values */}
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow text="About Delverse Technologies" />
              <h2 className="section-headline font-bold text-white tracking-tight">
                Delverse Solutions: Your Partner in{' '}
                <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                  Digital Transformation
                </span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed body-fluid">
                We stand at the core of international networks to advance your strategic interests. Delverse Technologies Limited is an elite consulting and engineering firm built to craft tailored software that drives tangible business growth, operational resilience, and competitive supremacy.
              </p>

              {/* 3 Compact Icon Cards: Vision, Mission, Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/30 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3">
                    <Brain size={18} />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Our Vision</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Global leader in bespoke AI solutions & strategic software for forward-thinking enterprises.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-teal-500/30 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-teal-600/20 text-teal-400 flex items-center justify-center mb-3">
                    <Target size={18} />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Our Mission</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Crafting innovative, high-impact technology architectures that unlock scalable business ROI.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/30 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-violet-600/20 text-violet-400 flex items-center justify-center mb-3">
                    <Sparkles size={18} />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Core Values</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Uncompromising Precision, Bold Innovation, Absolute Transparency, and Partnership.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <ButtonPrimary onClick={() => onNavigate('about')}>
                  Learn More About Us
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CORE SERVICES (Bento Grid: 2 Large + 4 Small with Animated Graphics)
          ========================================================================= */}
      <section className="section-py bg-[#050811] relative">
        <div className="content-container">
          <SectionHeader
            eyebrow="Capabilities & Solutions"
            title="Engineered for"
            highlight="Enterprise Scale"
            description="Our multidisciplinary software engineering practices cover every layer of modern technology, from cognitive artificial intelligence to resilient cloud infrastructure."
          />

          {/* Bento Grid: 2 Large + 4 Small */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bento 1 (Large - Col Span 2): AI-Powered Solutions */}
            <div 
              onClick={() => onNavigate('services')}
              className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#0B132B]/90 via-[#0A0F1E]/80 to-[#070B14] p-8 md:p-10 shadow-glass cursor-pointer group hover:border-blue-400/60 transition-all duration-300"
            >
              {/* Subtle animated neural network background */}
              <div className="absolute top-0 right-0 w-80 h-80 opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
                <svg viewBox="0 0 200 200" className="w-full h-full text-blue-400 animate-spin-slow">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
                  <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" />
                  <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" />
                  <circle cx="100" cy="20" r="4" fill="currentColor" />
                  <circle cx="100" cy="180" r="4" fill="currentColor" />
                  <circle cx="20" cy="100" r="4" fill="currentColor" />
                  <circle cx="180" cy="100" r="4" fill="currentColor" />
                </svg>
              </div>

              <div className="relative z-10 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-6">
                  <Brain size={14} /> Signature Flagship Capability
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  AI-Powered Solutions & Sovereign LLMs
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  Transform organizational intelligence with tailored Large Language Models, autonomous decision agents, and predictive telemetry trained strictly on your proprietary data behind zero-trust firewalls.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['RAG Architecture', 'Deep Learning', 'Computer Vision', 'Autonomous Agents', 'Predictive Forecasting'].map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-teal-300 group-hover:text-teal-200">
                  <span>Explore AI Capabilities</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Bento 2 (Small): Website Development */}
            <SpotlightCard onClick={() => onNavigate('services')} className="cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="card-headline font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                Website Development
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                Cinematic, high-converting digital flagships and headless CMS platforms engineered for sub-second page loads and search dominance.
              </p>
              <div className="flex items-center justify-between text-xs text-teal-400 font-semibold pt-4 border-t border-white/[0.06]">
                <span>Lighthouse 95+ Score</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </SpotlightCard>

            {/* Bento 3 (Small): Web & Mobile App Development */}
            <SpotlightCard onClick={() => onNavigate('services')} className="cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <h3 className="card-headline font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                Web & Mobile Apps
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                Cross-platform Flutter & React Native mobile experiences combined with scalable SaaS architectures engineered for massive concurrency.
              </p>
              <div className="flex items-center justify-between text-xs text-blue-400 font-semibold pt-4 border-t border-white/[0.06]">
                <span>iOS, Android & Cloud</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </SpotlightCard>

            {/* Bento 4 (Small): Data Analytics */}
            <SpotlightCard onClick={() => onNavigate('services')} className="cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Database size={24} />
              </div>
              <h3 className="card-headline font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                Data Analytics & BI
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                Centralized telemetry dashboards and automated ETL pipelines converting fragmented data into real-time board-level clarity.
              </p>
              <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold pt-4 border-t border-white/[0.06]">
                <span>Executive Dashboards</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </SpotlightCard>

            {/* Bento 5 (Small): IT Support & Cybersecurity */}
            <SpotlightCard onClick={() => onNavigate('services')} className="cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <h3 className="card-headline font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                IT Support & Security
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                Zero-trust cloud infrastructure, 24/7 proactive SOC monitoring, automated backups, and institutional disaster recovery architecture.
              </p>
              <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold pt-4 border-t border-white/[0.06]">
                <span>Zero-Trust Topologies</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </SpotlightCard>

            {/* Bento 6 (Large - Col Span 3 or Strategic Business Consulting): */}
            <div 
              onClick={() => onNavigate('services')}
              className="md:col-span-2 lg:col-span-3 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-[#0C1222] via-[#0E162B] to-[#0A0F1E] p-8 md:p-10 shadow-glass cursor-pointer group hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-500/15 text-teal-300 border border-teal-500/25 mb-4">
                    <Compass size={14} /> Executive Technology Advisory
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                    Strategic Business Consulting & Enterprise Modernization
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Partnering directly with CEOs, Managing Directors, and board chairs to formulate multi-year technology roadmaps, audit procurement vendors, and guide digital investments.
                  </p>
                </div>
                <div className="shrink-0">
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/[0.08] border border-white/20 group-hover:bg-blue-600 transition-all">
                    <span>View Advisory Roadmap</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. STATS BAND (Four Animated Counters on Gradient Strip)
          ========================================================================= */}
      <section className="py-14 bg-gradient-to-r from-blue-900/60 via-slate-900/90 to-blue-950/70 border-y border-white/[0.08] relative overflow-hidden">
        <div className="content-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center">
            {heroStats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-teal-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. SIGNATURE FEATURE: PROCESS (Sticky Scroll-Driven Section)
          ========================================================================= */}
      <section className="section-py bg-[#070B14] relative">
        <div className="content-container">
          <SectionHeader
            eyebrow="Signature Engineering Lifecycle"
            title="How We Deliver"
            highlight="Guaranteed Results"
            description="Our battle-tested four-phase methodology guarantees predictable milestones, rigorous security oversight, and on-time deployment."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Pinned Side with Title & Progress Line */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400">
                  Execution Discipline
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                  Predictable, Transparent, and Milestone-Driven
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  Click through our four structured delivery stages or review each sprint outcome in detail.
                </p>

                {/* Progress Navigation Buttons */}
                <div className="space-y-3">
                  {processSteps.map((step, index) => (
                    <button
                      key={step.step}
                      onClick={() => setActiveProcessStep(index)}
                      className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                        activeProcessStep === index
                          ? 'bg-blue-600/20 border-blue-500/50 text-white'
                          : 'bg-transparent border-transparent text-slate-400 hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-mono font-bold ${
                          activeProcessStep === index ? 'bg-blue-600 text-white' : 'bg-white/10 text-slate-400'
                        }`}>
                          {step.step}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold">{step.title}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">{step.duration}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Active Step Display */}
            <div className="lg:col-span-7">
              {processSteps.map((step, index) => {
                if (index !== activeProcessStep) return null;
                return (
                  <div
                    key={step.step}
                    className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#0D1322] to-[#0A0E1A] border border-white/10 shadow-2xl space-y-6 animate-fade-in"
                  >
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl sm:text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text font-mono">
                          {step.step}
                        </span>
                        <div>
                          <h4 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h4>
                          <span className="text-xs font-mono text-teal-400">Typical Sprint: {step.duration}</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-400">
                        {index === 0 && <Compass size={24} />}
                        {index === 1 && <Layers size={24} />}
                        {index === 2 && <CheckSquare size={24} />}
                        {index === 3 && <Rocket size={24} />}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {step.description}
                    </p>

                    <div>
                      <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                        Key Deliverables & Signoffs:
                      </h5>
                      <ul className="space-y-2.5">
                        {step.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-white/10">
                      <button
                        onClick={() => setActiveProcessStep((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1))}
                        className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1"
                      >
                        <ChevronLeft size={14} /> Previous Stage
                      </button>
                      <button
                        onClick={() => setActiveProcessStep((prev) => (prev + 1) % processSteps.length)}
                        className="text-xs font-semibold text-teal-300 hover:text-teal-200 inline-flex items-center gap-1"
                      >
                        Next Stage <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. TESTIMONIALS (Large-Quote Slider with Brand, Stars, Keyboard/Swipe)
          ========================================================================= */}
      <section 
        className="section-py bg-[#050811] relative overflow-hidden"
        onMouseEnter={() => setIsTestimonialHovered(true)}
        onMouseLeave={() => setIsTestimonialHovered(false)}
      >
        <div className="content-container">
          <SectionHeader
            eyebrow="Executive Testimonials"
            title="Trusted by"
            highlight="Industry Pioneers"
            description="Hear firsthand from managing directors and product leaders who trusted Delverse with their mission-critical platforms."
          />

          <div className="max-w-4xl mx-auto relative">
            {/* Active Testimonial Card */}
            <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative">
              {/* Star rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonialsData[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
                <span className="ml-3 text-xs font-semibold uppercase tracking-wider text-teal-400">
                  {testimonialsData[activeTestimonial].badge}
                </span>
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-slate-100 leading-relaxed italic mb-8">
                "{testimonialsData[activeTestimonial].quote}"
              </blockquote>

              {/* Author details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {testimonialsData[activeTestimonial].author}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {testimonialsData[activeTestimonial].role} —{' '}
                    <span className="text-blue-400 font-semibold">
                      {testimonialsData[activeTestimonial].company}
                    </span>
                  </p>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev > 0 ? prev - 1 : testimonialsData.length - 1))}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length)}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/10 text-white flex items-center justify-center transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx ? 'w-8 bg-blue-500' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FINAL CTA BANNER (Global Shared Component)
          ========================================================================= */}
      <GlobalCTA onNavigate={onNavigate} />
    </div>
  );
};
