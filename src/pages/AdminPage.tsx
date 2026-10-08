/**
 * @file AdminPage.tsx
 * @description Comprehensive administrative dashboard allowing authorized operators to live-edit
 * company credentials, hero messaging, service capabilities, portfolio case studies, and client testimonials.
 * Changes are persisted directly to localStorage and broadcast reactively to the entire application.
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, Sparkles, Layers, Briefcase, Star, 
  Save, RotateCcw, Eye, CheckCircle2, AlertCircle, 
  Sliders, Plus, Trash2, ArrowRight, ShieldCheck, Lock
} from 'lucide-react';
import { 
  getStoredSiteData, saveStoredSiteData, resetStoredSiteData, 
  SiteData, ServiceItem, ProjectItem, TestimonialItem 
} from '../data/delverseData';
import { Eyebrow } from '../components/UIElements';

interface AdminPageProps {
  onNavigate: (page: string) => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ onNavigate }) => {
  // Current active admin tab
  const [activeTab, setActiveTab] = useState<'company' | 'hero' | 'services' | 'portfolio' | 'testimonials'>('hero');
  
  // Working draft state
  const [siteData, setSiteData] = useState<SiteData>(() => getStoredSiteData());
  
  // Feedback toast notifications
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved' | 'reset'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  useEffect(() => {
    // Sync draft on mount
    setSiteData(getStoredSiteData());
  }, []);

  /**
   * Save all active form modifications to persistent storage
   */
  const handleSave = () => {
    saveStoredSiteData(siteData);
    setSaveStatus('saved');
    setStatusMessage('All changes published successfully. Live site has been updated.');
    setTimeout(() => setSaveStatus('idle'), 3500);
  };

  /**
   * Restore factory configuration defaults
   */
  const handleReset = () => {
    if (window.confirm('Are you sure you want to restore all default content? Any custom edits will be discarded.')) {
      const defaults = resetStoredSiteData();
      setSiteData(defaults);
      setSaveStatus('reset');
      setStatusMessage('Site content restored to factory defaults.');
      setTimeout(() => setSaveStatus('idle'), 3500);
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#070B14] text-slate-100">
      <div className="content-container max-w-6xl">
        {/* Header Breadcrumb & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
              <Eyebrow text="Administrative Control Hub" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Site Content & Telemetry Manager
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Live modifications take effect immediately across all client-facing pages and persist in local storage.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all border border-white/10"
            >
              <Eye size={15} className="text-blue-400" />
              <span>Preview Live Site</span>
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-xs font-semibold text-rose-300 transition-all border border-rose-500/20"
              title="Reset to initial factory defaults"
            >
              <RotateCcw size={15} />
              <span>Restore Defaults</span>
            </button>
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-xs font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Save size={15} />
              <span>Save & Publish</span>
            </button>
          </div>
        </div>

        {/* Feedback Alert Toast */}
        {saveStatus !== 'idle' && (
          <div className="mb-6 p-4 rounded-2xl bg-teal-500/15 border border-teal-500/30 text-teal-200 text-xs flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={16} className="text-teal-400" />
              <span>{statusMessage}</span>
            </div>
            <button 
              onClick={() => onNavigate('home')}
              className="underline font-bold text-white hover:text-teal-300"
            >
              View on Homepage
            </button>
          </div>
        )}

        {/* Navigation Tabs Bar */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 mb-8">
          {[
            { id: 'hero', label: 'Hero & Messaging', icon: Sparkles },
            { id: 'company', label: 'Company & Contact Info', icon: Building2 },
            { id: 'services', label: 'Services Manager', icon: Layers },
            { id: 'portfolio', label: 'Portfolio Projects', icon: Briefcase },
            { id: 'testimonials', label: 'Client Testimonials', icon: Star },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Icon size={15} className={isActive ? 'text-white' : 'text-slate-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* =====================================================================
            TAB 1: HERO & MESSAGING EDITOR
            ===================================================================== */}
        {activeTab === 'hero' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles size={18} className="text-blue-400" />
                <span>Hero Section Messaging & Value Propositions</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Configure the primary headline, gradient highlights, and telemetry metrics displayed at the top of the homepage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Eyebrow Pill Tag</label>
                <input
                  type="text"
                  value={siteData.hero.eyebrow}
                  onChange={(e) => setSiteData({
                    ...siteData,
                    hero: { ...siteData.hero, eyebrow: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Headline Prefix Text</label>
                <input
                  type="text"
                  value={siteData.hero.headlinePrefix}
                  onChange={(e) => setSiteData({
                    ...siteData,
                    hero: { ...siteData.hero, headlinePrefix: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-2">
                Headline Highlight Text (Gradient Accent)
              </label>
              <input
                type="text"
                value={siteData.hero.headlineHighlight}
                onChange={(e) => setSiteData({
                  ...siteData,
                  hero: { ...siteData.hero, headlineHighlight: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none font-bold text-teal-300"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Hero Narrative Subtext</label>
              <textarea
                rows={3}
                value={siteData.hero.subtext}
                onChange={(e) => setSiteData({
                  ...siteData,
                  hero: { ...siteData.hero, subtext: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none resize-none leading-relaxed"
              />
            </div>

            {/* Key Stats HUD Configuration */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-teal-400 mb-4">
                Telemetry Card Metrics
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                  <label className="block text-[11px] text-slate-400">Stat 1 (Value & Label)</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={siteData.hero.stat1Value}
                      onChange={(e) => setSiteData({
                        ...siteData,
                        hero: { ...siteData.hero, stat1Value: e.target.value }
                      })}
                      className="w-24 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white font-mono font-bold text-xs"
                    />
                    <input
                      type="text"
                      value={siteData.hero.stat1Label}
                      onChange={(e) => setSiteData({
                        ...siteData,
                        hero: { ...siteData.hero, stat1Label: e.target.value }
                      })}
                      className="flex-1 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                  <label className="block text-[11px] text-slate-400">Stat 2 (Value & Label)</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={siteData.hero.stat2Value}
                      onChange={(e) => setSiteData({
                        ...siteData,
                        hero: { ...siteData.hero, stat2Value: e.target.value }
                      })}
                      className="w-24 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white font-mono font-bold text-xs"
                    />
                    <input
                      type="text"
                      value={siteData.hero.stat2Label}
                      onChange={(e) => setSiteData({
                        ...siteData,
                        hero: { ...siteData.hero, stat2Label: e.target.value }
                      })}
                      className="flex-1 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 2: COMPANY DETAILS & CONTACT INFO
            ===================================================================== */}
        {activeTab === 'company' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 size={18} className="text-teal-400" />
                <span>Headquarters & Executive Contact Channels</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Updates reflected across the Contact Us page, shared Navbar, and Global Footer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Legal Corporate Name</label>
                <input
                  type="text"
                  value={siteData.company.legalName}
                  onChange={(e) => setSiteData({
                    ...siteData,
                    company: { ...siteData.company, legalName: e.target.value, name: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Primary Inquiry Email</label>
                <input
                  type="email"
                  value={siteData.company.email}
                  onChange={(e) => setSiteData({
                    ...siteData,
                    company: { ...siteData.company, email: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Direct Telephone Display</label>
                <input
                  type="text"
                  value={siteData.company.phoneDisplay}
                  onChange={(e) => setSiteData({
                    ...siteData,
                    company: { ...siteData.company, phoneDisplay: e.target.value, phone: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Office Operating Hours</label>
                <input
                  type="text"
                  value={siteData.company.hours}
                  onChange={(e) => setSiteData({
                    ...siteData,
                    company: { ...siteData.company, hours: e.target.value }
                  })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-2">Office Location & Address</label>
              <input
                type="text"
                value={siteData.company.location}
                onChange={(e) => setSiteData({
                  ...siteData,
                  company: { ...siteData.company, location: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 3: SERVICES MANAGER
            ===================================================================== */}
        {activeTab === 'services' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers size={18} className="text-blue-400" />
                <span>Core Capabilities & Practices (6 Practices)</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Customize titles, summaries, and impact narratives for each engineering capability.
              </p>
            </div>

            <div className="space-y-6">
              {siteData.services.map((service, idx) => (
                <div key={service.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-teal-400">
                      Practice {service.number} ({service.id})
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Service Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => {
                          const updated = [...siteData.services];
                          updated[idx].title = e.target.value;
                          setSiteData({ ...siteData, services: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Short Elevator Pitch</label>
                      <input
                        type="text"
                        value={service.shortDesc}
                        onChange={(e) => {
                          const updated = [...siteData.services];
                          updated[idx].shortDesc = e.target.value;
                          setSiteData({ ...siteData, services: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Full Architectural Narrative</label>
                    <textarea
                      rows={2}
                      value={service.fullDesc}
                      onChange={(e) => {
                        const updated = [...siteData.services];
                        updated[idx].fullDesc = e.target.value;
                        setSiteData({ ...siteData, services: updated });
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs focus:border-blue-500 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 4: PORTFOLIO & CASE STUDIES
            ===================================================================== */}
        {activeTab === 'portfolio' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase size={18} className="text-violet-400" />
                <span>Enterprise Case Studies & Audited Metrics</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Manage featured project metrics, challenges, and tailored solutions.
              </p>
            </div>

            <div className="space-y-6">
              {siteData.projects.map((proj, idx) => (
                <div key={proj.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-teal-400">
                      Case Study: {proj.client}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">
                      {proj.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Project Headline Title</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => {
                          const updated = [...siteData.projects];
                          updated[idx].title = e.target.value;
                          setSiteData({ ...siteData, projects: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Headline Result Metric</label>
                      <input
                        type="text"
                        value={proj.metric}
                        onChange={(e) => {
                          const updated = [...siteData.projects];
                          updated[idx].metric = e.target.value;
                          setSiteData({ ...siteData, projects: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-teal-300 font-mono font-bold text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Industry Sector</label>
                      <input
                        type="text"
                        value={proj.industry}
                        onChange={(e) => {
                          const updated = [...siteData.projects];
                          updated[idx].industry = e.target.value;
                          setSiteData({ ...siteData, projects: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Executive Summary</label>
                    <textarea
                      rows={2}
                      value={proj.description}
                      onChange={(e) => {
                        const updated = [...siteData.projects];
                        updated[idx].description = e.target.value;
                        setSiteData({ ...siteData, projects: updated });
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs resize-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: CLIENT TESTIMONIALS
            ===================================================================== */}
        {activeTab === 'testimonials' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Star size={18} className="text-amber-400" />
                <span>Executive Testimonials & Endorsements</span>
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Manage high-impact quotes displayed in the homepage slider.
              </p>
            </div>

            <div className="space-y-6">
              {siteData.testimonials.map((test, idx) => (
                <div key={test.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Author Name</label>
                      <input
                        type="text"
                        value={test.author}
                        onChange={(e) => {
                          const updated = [...siteData.testimonials];
                          updated[idx].author = e.target.value;
                          setSiteData({ ...siteData, testimonials: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Title / Role</label>
                      <input
                        type="text"
                        value={test.role}
                        onChange={(e) => {
                          const updated = [...siteData.testimonials];
                          updated[idx].role = e.target.value;
                          setSiteData({ ...siteData, testimonials: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] text-slate-400 mb-1">Organization / Company</label>
                      <input
                        type="text"
                        value={test.company}
                        onChange={(e) => {
                          const updated = [...siteData.testimonials];
                          updated[idx].company = e.target.value;
                          setSiteData({ ...siteData, testimonials: updated });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-teal-300 font-bold text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Quote Statement</label>
                    <textarea
                      rows={2}
                      value={test.quote}
                      onChange={(e) => {
                        const updated = [...siteData.testimonials];
                        updated[idx].quote = e.target.value;
                        setSiteData({ ...siteData, testimonials: updated });
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-white text-xs resize-none italic"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
