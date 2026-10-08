import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieNotice } from './components/CookieNotice';
import { Preloader } from './components/Preloader';

// Page Views
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  // Theme state: defaults to dark (the hero theme) while honoring user preference
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('delverse_theme');
    if (saved) return saved === 'dark';
    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return false;
      }
    }
    return true; // Dark is the hero theme
  });

  // Page routing state
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['home', 'services', 'portfolio', 'about', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  // Sync theme with document class
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('delverse_theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('delverse_theme', 'light');
    }
  }, [isDark]);

  // Sync route with window hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'portfolio', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B14] text-slate-100 transition-colors duration-300">
      {/* Short branded preloader (<800ms) */}
      <Preloader />

      {/* Top scroll-progress bar in accent color */}
      <ScrollProgressBar />

      {/* Shared Global Sticky Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'portfolio' && <PortfolioPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
        {!['home', 'services', 'portfolio', 'about', 'contact'].includes(currentPage) && (
          <NotFoundPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Shared Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Utilities */}
      <WhatsAppButton />
      <CookieNotice />
    </div>
  );
};

export default App;