/**
 * @file App.tsx
 * @description Main application controller for Delverse Technologies.
 * Dark-themed marketing platform strictly adhering to cognichip.ai design system,
 * layout patterns, and component architecture.
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieNotice } from './components/CookieNotice';
import { Preloader } from './components/Preloader';

// Page Views
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { NotFoundPage } from './pages/NotFoundPage';

const VALID_PAGES = [
  'home',
  'solutions',
  'about',
  'journal',
  'careers',
  'contact',
  'services',
  'portfolio',
  'admin',
];

export const App: React.FC = () => {
  // Page routing state synchronized with window.location.hash
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const rawHash = window.location.hash.replace('#', '').toLowerCase();
    const cleanHash = rawHash.split('?')[0].split('#')[0];
    if (VALID_PAGES.includes(cleanHash)) {
      return cleanHash;
    }
    return 'home';
  });

  // Always enforce dark theme matching Cognichip aesthetic
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
    localStorage.setItem('delverse_theme', 'dark');
  }, []);

  // Sync route with window hash
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      const cleanHash = rawHash.split('?')[0].split('#')[0];
      if (VALID_PAGES.includes(cleanHash)) {
        setCurrentPage(cleanHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: string) => {
    const cleanPage = page.split('?')[0].split('#')[0];
    setCurrentPage(cleanPage);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0B] text-white selection:bg-[#0066FF] selection:text-white font-sans antialiased">
      {/* Short branded preloader */}
      <Preloader />

      {/* Top scroll-progress bar in electric blue */}
      <ScrollProgressBar />

      {/* Shared Global Sticky Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {(currentPage === 'solutions' || currentPage === 'services') && (
          <SolutionsPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'journal' && <JournalPage onNavigate={handleNavigate} />}
        {currentPage === 'careers' && <CareersPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'portfolio' && <PortfolioPage onNavigate={handleNavigate} />}
        {currentPage === 'admin' && <AdminPage onNavigate={handleNavigate} />}
        {!VALID_PAGES.includes(currentPage) && (
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