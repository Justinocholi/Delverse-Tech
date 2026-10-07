import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, Globe, Smartphone, Database, Shield, Compass, 
  Menu, X, Sun, Moon, ArrowRight, Sparkles, ChevronDown 
} from 'lucide-react';
import { servicesData } from '../data/delverseData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  isDark,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const lastScrollY = useRef(0);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolled past 40px threshold
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current + 8) {
          setIsVisible(false); // scrolling down
        } else if (currentScrollY < lastScrollY.current - 8) {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileDrawerOpen]);

  const handleMouseEnterServices = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setServicesMenuOpen(true);
  };

  const handleMouseLeaveServices = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false);
    }, 200);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services', hasMega: true },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return <Brain className="w-5 h-5 text-blue-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-teal-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-blue-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-cyan-400" />;
      default: return <Compass className="w-5 h-5 text-violet-400" />;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#070B14]/85 dark:bg-[#070B14]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="content-container flex items-center justify-between">
          {/* Logo Left */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 focus:outline-none group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-teal-400 p-[2px] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#070B14] rounded-xl flex items-center justify-center">
                <img
                  src="/circle-logo.PNG"
                  alt="Delverse Logo"
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                DELVERSE
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-teal-400 uppercase mt-0.5">
                Technologies
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.id}
                className="relative"
                onMouseEnter={link.hasMega ? handleMouseEnterServices : undefined}
                onMouseLeave={link.hasMega ? handleMouseLeaveServices : undefined}
              >
                <button
                  onClick={() => onNavigate(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group flex items-center gap-1 ${
                    currentPage === link.id
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasMega && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        servicesMenuOpen ? 'rotate-180 text-blue-400' : 'text-slate-400'
                      }`}
                    />
                  )}

                  {/* Active Link Animated Underline */}
                  {currentPage === link.id && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
                  )}
                </button>

                {/* Services Mega Menu on Hover */}
                {link.hasMega && servicesMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[660px] animate-fade-in z-50">
                    <div className="rounded-2xl border border-white/10 bg-[#0A0F1E]/95 backdrop-blur-2xl p-6 shadow-2xl shadow-black/60 grid grid-cols-12 gap-6">
                      {/* Left side: 6 services */}
                      <div className="col-span-8 grid grid-cols-2 gap-3">
                        {servicesData.map((service) => (
                          <div
                            key={service.id}
                            onClick={() => {
                              onNavigate('services');
                              setServicesMenuOpen(false);
                            }}
                            className="p-3 rounded-xl hover:bg-white/[0.05] border border-transparent hover:border-white/[0.08] transition-all cursor-pointer group/item"
                          >
                            <div className="flex items-center gap-2.5 mb-1">
                              <div className="p-1.5 rounded-lg bg-blue-500/10 group-hover/item:bg-blue-500/20 transition-colors">
                                {getServiceIcon(service.icon)}
                              </div>
                              <h4 className="text-xs font-semibold text-white group-hover/item:text-blue-400 transition-colors">
                                {service.title}
                              </h4>
                            </div>
                            <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight">
                              {service.shortDesc}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Right side: Featured Capability Card */}
                      <div className="col-span-4 rounded-xl bg-gradient-to-br from-blue-600/20 to-teal-500/10 border border-blue-500/30 p-4 flex flex-col justify-between">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-blue-500/20 text-blue-300 mb-3">
                            <Sparkles size={11} /> Featured Focus
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1.5">
                            Enterprise AI & Autonomous Agents
                          </h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Bespoke LLM integrations and multi-agent workflows engineered for sovereign enterprise data.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            onNavigate('services');
                            setServicesMenuOpen(false);
                          }}
                          className="mt-4 text-xs font-semibold text-teal-300 hover:text-teal-200 inline-flex items-center gap-1"
                        >
                          Explore Architectures <ArrowRight size={13} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header Actions: Theme toggle & Quote CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle color theme"
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              {isDark ? <Sun size={17} className="text-amber-300" /> : <Moon size={17} className="text-blue-400" />}
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 transition-all duration-200 shadow-md shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get a Quote</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-white/[0.05] text-slate-300 hover:text-white"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} className="text-amber-300" /> : <Moon size={18} className="text-blue-400" />}
            </button>

            <button
              onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
              className="p-2 rounded-lg bg-white/[0.05] text-white hover:bg-white/10"
              aria-label="Open mobile menu"
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Full Screen Drawer with Staggered Links & Pinned CTA) */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-[#070B14]/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-fade-in">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
              Navigation Menu
            </span>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileDrawerOpen(false);
                  }}
                  style={{ animationDelay: `${index * 60}ms` }}
                  className={`text-left text-2xl font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-between ${
                    currentPage === link.id
                      ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30'
                      : 'text-slate-200 hover:bg-white/[0.05]'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={18} className="opacity-40" />
                </button>
              ))}
            </div>
          </div>

          {/* CTA pinned to the bottom */}
          <div className="pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileDrawerOpen(false);
              }}
              className="w-full py-4 rounded-xl text-center text-base font-bold text-white bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
            >
              <span>Get a Free Project Quote</span>
              <ArrowRight size={18} />
            </button>

            <div className="text-center">
              <a
                href="tel:+2348069305155"
                className="text-xs text-slate-400 hover:text-white"
              >
                Direct Office Line: +234 806 930 5155
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
