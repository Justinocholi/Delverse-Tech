import React, { useState } from 'react';
import { 
  ArrowRight, ExternalLink, ArrowUpRight, CheckCircle2, 
  X, ChevronRight, Layers, Sliders, Star, Sparkles, ArrowLeftRight 
} from 'lucide-react';
import { getStoredSiteData, ProjectItem, portfolioProjects } from '../data/delverseData';
import { Eyebrow, SectionHeader, ButtonPrimary } from '../components/UIElements';
import { GlobalCTA } from '../components/GlobalCTA';

interface PortfolioPageProps {
  onNavigate: (page: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [projectsList, setProjectsList] = useState<ProjectItem[]>(() => getStoredSiteData().projects);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  // Sync with Admin live data changes
  React.useEffect(() => {
    const handleUpdate = () => {
      setProjectsList(getStoredSiteData().projects);
    };
    window.addEventListener('delverse-data-updated', handleUpdate);
    return () => window.removeEventListener('delverse-data-updated', handleUpdate);
  }, []);

  // Filter categories
  const filterCategories = [
    { key: 'all', label: 'All Projects' },
    { key: 'websites', label: 'Websites' },
    { key: 'web-apps', label: 'Web Applications' },
    { key: 'ai-data', label: 'AI & Data Engines' },
    { key: 'consulting', label: 'Consulting Portals' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsList
    : projectsList.filter((p) => p.category === activeFilter);

  const featuredProject = projectsList.find((p) => p.featured) || projectsList[0] || portfolioProjects[0];

  const industriesWeServe = [
    'Agriculture & Agritech', 'Conglomerates & Heavy Industry', 'Management Consulting',
    'Financial Services & Fintech', 'Higher Education & EdTech', 'Healthcare & Diagnostics',
    'Logistics & Cold-Chain', 'Public Sector & Non-Profits'
  ];

  // Lock body scroll and listen for Escape key when modal is open
  React.useEffect(() => {
    if (!selectedProject) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div className="relative">
      {/* =========================================================================
          1. HERO: Headline "Work that moves businesses forward" + Key Metrics
          ========================================================================= */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#0A0F1E] to-[#070B14]">
        <div className="content-container relative z-10">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6">
            <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
              Home
            </button>
            <span>/</span>
            <span className="text-teal-400">Portfolio & Case Studies</span>
          </nav>

          <div className="max-w-3xl space-y-6">
            <Eyebrow text="Audited Engineering Case Studies" />
            <h1 className="hero-headline font-extrabold text-white tracking-tight">
              Work That Moves{' '}
              <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-violet-400 bg-clip-text text-transparent">
                Businesses Forward
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed body-fluid">
              Explore how we have engineered scalable digital infrastructure, customized AI pipelines, and enterprise flagships for pan-African leaders and forward-thinking enterprises.
            </p>
          </div>

          {/* Row of Key Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
            <div>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono">12,000+</span>
              <p className="text-xs text-slate-400 mt-1">Live Transactions Processed</p>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-teal-300 font-mono">0.78s</span>
              <p className="text-xs text-slate-400 mt-1">Average Page Load Speed</p>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-blue-400 font-mono">150K+</span>
              <p className="text-xs text-slate-400 mt-1">Active Platform Learners</p>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-violet-400 font-mono">100%</span>
              <p className="text-xs text-slate-400 mt-1">On-Time Sprint Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FEATURED PROJECT HERO CARD
          ========================================================================= */}
      <section className="py-12 bg-[#070B14]">
        <div className="content-container">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">Featured Engagement</span>
          </div>

          <div
            onClick={() => setSelectedProject(featuredProject)}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0D1322] to-[#0A0F1E] overflow-hidden shadow-2xl hover:border-blue-500/40 transition-all duration-300 cursor-pointer group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/15 text-teal-300 border border-teal-500/30">
                    {featuredProject.industry}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Client: {featuredProject.client}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-teal-300 transition-colors">
                  {featuredProject.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Headline Result Metric */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] inline-flex items-center gap-4">
                  <div className="text-2xl sm:text-3xl font-black text-teal-300 font-mono">
                    {featuredProject.metric}
                  </div>
                  <div className="text-xs text-slate-400 border-l border-white/10 pl-4">
                    Audited Production Benchmark
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.technologies.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-2 text-sm font-semibold text-teal-300 group-hover:text-teal-200">
                  <span>Open Deep Dive Case Study</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              {/* Cover Image */}
              <div className="lg:col-span-5 h-72 lg:h-full min-h-[320px] relative overflow-hidden bg-slate-900">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0D1322] via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3 & 4. FILTER CHIPS & PROJECT GRID (Masonry / Cards with Result Metrics)
          ========================================================================= */}
      <section className="section-py bg-[#050811] relative">
        <div className="content-container">
          {/* Filter Chips with Project Count */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
            <div className="flex flex-wrap gap-2">
              {filterCategories.map((chip) => {
                const count = chip.key === 'all'
                  ? portfolioProjects.length
                  : portfolioProjects.filter((p) => p.category === chip.key).length;

                return (
                  <button
                    key={chip.key}
                    onClick={() => setActiveFilter(chip.key)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                      activeFilter === chip.key
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    <span>{chip.label}</span>
                    <span className="w-5 h-5 rounded-full bg-black/30 flex items-center justify-center text-[10px] font-mono">
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
            <span className="text-xs font-mono text-slate-500">
              Showing {filteredProjects.length} Verified Engagements
            </span>
          </div>

          {/* Project Grid: 2-3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="rounded-2xl border border-white/[0.08] bg-[#0D1322]/80 backdrop-blur-xl overflow-hidden hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 shadow-glass cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Zoom on Hover */}
                  <div className="h-52 relative overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-transparent to-black/30"></div>

                    {/* Result metric badge on image */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-xs font-mono font-bold text-teal-300">
                      {project.metric}
                    </div>

                    <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded bg-blue-600/80 backdrop-blur-sm text-[11px] font-medium text-white">
                      {project.industry}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-mono text-slate-500 uppercase">
                      Client: {project.client}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Tech tags + View case study link */}
                <div className="px-6 pb-6 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex gap-1.5 overflow-hidden max-w-[65%]">
                    {project.technologies.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 truncate">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-xs font-semibold text-teal-300 group-hover:text-teal-200 inline-flex items-center gap-1 shrink-0">
                    <span>View Study</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CASE STUDY DETAIL MODAL (with Before/After Slider & Metrics)
          ========================================================================= */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-fade-in"
        >
          <div className="relative w-full max-w-4xl bg-[#0A0F1E] border border-white/15 rounded-3xl shadow-2xl max-h-[92vh] overflow-y-auto p-6 sm:p-10 text-slate-200 space-y-8">
            {/* Modal Header & Close Button */}
            <div className="flex items-start justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-teal-400">
                  {selectedProject.industry} Case Study
                </span>
                <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h2>
                <p className="text-xs text-slate-400 font-mono mt-1">Client: {selectedProject.client}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Draggable Before / After Comparison */}
            <div>
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-rose-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> Legacy State (Before)
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  Delverse Engineered Architecture (After) <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </span>
              </div>

              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 select-none bg-slate-900">
                {/* Legacy "Before" Image */}
                <img
                  src={selectedProject.image}
                  alt="Legacy state"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-75 brightness-75"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/80 text-[11px] font-mono text-rose-300">
                  Legacy Architecture
                </div>

                {/* "After" Image clipped by slider position */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={selectedProject.image}
                    alt="Engineered after"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: '100%', maxWidth: 'none' }}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded bg-teal-600/90 text-[11px] font-mono text-white">
                    Delverse Deployment
                  </div>
                </div>

                {/* Draggable Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg text-xs font-bold">
                    <ArrowLeftRight size={14} className="text-slate-900" />
                  </div>
                </div>

                {/* Slider Input Range Controller */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
                />
              </div>
              <p className="text-center text-[11px] text-slate-500 mt-2 font-mono">
                Drag slider to inspect before / after architectural state
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  The Institutional Challenge
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-teal-500/5 border border-teal-500/20 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  The Delverse Solution
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Results with Metric Counters */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Audited Production Outcomes:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProject.results.map((res, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300">{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              {selectedProject.link ? (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-300 hover:text-teal-200"
                >
                  <span>Launch Live Platform</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="text-xs text-slate-500 font-mono">Confidential Enterprise System</span>
              )}

              <ButtonPrimary onClick={() => {
                setSelectedProject(null);
                onNavigate('contact');
              }}>
                Discuss Similar Architecture
              </ButtonPrimary>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          6. INDUSTRIES WE SERVE CHIPS ROW & CLOSING CTA
          ========================================================================= */}
      <section className="py-16 bg-[#070B14] border-t border-white/[0.08]">
        <div className="content-container text-center">
          <SectionHeader
            eyebrow="Sector Depth"
            title="Industries We"
            highlight="Serve & Scale"
            description="Our domain experience enables rapid compliance and frictionless integration into regulated environments."
          />

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {industriesWeServe.map((ind, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-teal-500/40 transition-colors"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      <GlobalCTA onNavigate={onNavigate} />
    </div>
  );
};
