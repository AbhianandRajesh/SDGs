import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Zap,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Phone,
  Mail,
  ChevronRight
} from 'lucide-react';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CursorEffects } from './components/CursorEffects';

type PageType = 'home' | 'features' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'fast' | 'eco' | 'responsive'>('fast');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'High-Performance Web Development',
    message: ''
  });

  // Listen to browser hash or state for back/forward support & smooth URL sync
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageType;
      if (['home', 'features', 'about', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    const validPage = (['home', 'features', 'about', 'contact'].includes(page) ? page : 'home') as PageType;
    setCurrentPage(validPage);
    window.location.hash = validPage;
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
        setFormData({ name: '', email: '', projectType: 'High-Performance Web Development', message: '' });
      }, 2500);
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 relative selection:bg-[#087FCE]/20 selection:text-[#075985]">
      {/* Eye-Catching Cursor Animation Suite (Spotlight, Particle Trails, Follower & Ripple Waves) */}
      <CursorEffects />

      {/* 2. Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE] rounded-lg py-1 px-1.5 text-left"
            aria-label="Verdant Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#087FCE] to-[#075985] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <span className="font-bold text-xl tracking-tight flex items-center">
                V<span className="text-[#16A34A] text-2xl leading-none">.</span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-[#075985]">
                Verd<span className="text-[#16A34A]">ant</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 -mt-1">
                Technologies
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main Navigation">
            <button
              onClick={() => navigateTo('home')}
              className={`transition-colors py-1 px-2 rounded-lg font-semibold ${
                currentPage === 'home'
                  ? 'text-[#087FCE] bg-[#F5FFF9] border border-[#087FCE]/20'
                  : 'text-slate-600 hover:text-[#087FCE]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('features')}
              className={`transition-colors py-1 px-2 rounded-lg font-semibold ${
                currentPage === 'features'
                  ? 'text-[#087FCE] bg-[#F5FFF9] border border-[#087FCE]/20'
                  : 'text-slate-600 hover:text-[#087FCE]'
              }`}
            >
              Features
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`transition-colors py-1 px-2 rounded-lg font-semibold ${
                currentPage === 'about'
                  ? 'text-[#087FCE] bg-[#F5FFF9] border border-[#087FCE]/20'
                  : 'text-slate-600 hover:text-[#087FCE]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`transition-colors py-1 px-2 rounded-lg font-semibold ${
                currentPage === 'contact'
                  ? 'text-[#087FCE] bg-[#F5FFF9] border border-[#087FCE]/20'
                  : 'text-slate-600 hover:text-[#087FCE]'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#087FCE] hover:bg-[#075985] transition-all shadow-sm hover:shadow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE] focus-visible:ring-offset-2"
            >
              Get Started
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE]"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-2 text-base font-medium text-slate-700">
              <button
                onClick={() => navigateTo('home')}
                className={`text-left px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'home' ? 'bg-[#F5FFF9] text-[#087FCE] font-bold' : 'hover:bg-slate-50'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => navigateTo('features')}
                className={`text-left px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'features' ? 'bg-[#F5FFF9] text-[#087FCE] font-bold' : 'hover:bg-slate-50'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => navigateTo('about')}
                className={`text-left px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'about' ? 'bg-[#F5FFF9] text-[#087FCE] font-bold' : 'hover:bg-slate-50'
                }`}
              >
                About
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className={`text-left px-3 py-2 rounded-md transition-colors ${
                  currentPage === 'contact' ? 'bg-[#F5FFF9] text-[#087FCE] font-bold' : 'hover:bg-slate-50'
                }`}
              >
                Contact
              </button>
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#087FCE] hover:bg-[#075985] transition-all"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Pages Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenModal={() => setIsModalOpen(true)}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
        {currentPage === 'features' && (
          <FeaturesPage
            onOpenModal={() => setIsModalOpen(true)}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onOpenModal={() => setIsModalOpen(true)}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onOpenModal={() => setIsModalOpen(true)}
          />
        )}
      </main>

      {/* 6. Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            
            {/* Brand column */}
            <div className="md:col-span-2 space-y-4">
              <button
                onClick={() => navigateTo('home')}
                className="inline-flex items-center gap-2.5 text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#087FCE] to-[#075985] flex items-center justify-center text-white font-bold text-lg">
                  V<span className="text-[#16A34A]">.</span>
                </div>
                <span className="font-bold text-xl tracking-tight text-white">
                  Verd<span className="text-[#16A34A]">ant</span>
                </span>
              </button>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                Pioneering eco-conscious digital engineering with zero performance compromises. Built with modern HTML5, clean CSS, and scalable responsive architecture.
              </p>
              <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  99.9% Renewable Hosting
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#087FCE]" />
                  ISO 14001 Compliant
                </span>
              </div>
            </div>

            {/* Navigation links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Platform Pages
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => navigateTo('home')}
                    className={`hover:text-white transition-colors ${currentPage === 'home' ? 'text-[#087FCE] font-bold' : ''}`}
                  >
                    Home Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('features')}
                    className={`hover:text-white transition-colors ${currentPage === 'features' ? 'text-[#087FCE] font-bold' : ''}`}
                  >
                    Core Features & Specs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('about')}
                    className={`hover:text-white transition-colors ${currentPage === 'about' ? 'text-[#087FCE] font-bold' : ''}`}
                  >
                    About & Philosophy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('contact')}
                    className={`hover:text-white transition-colors ${currentPage === 'contact' ? 'text-[#087FCE] font-bold' : ''}`}
                  >
                    Contact & Consultation
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Get In Touch
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="hover:text-white transition-colors text-left"
                  >
                    Request Project Consultation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('features')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Review Velocity Benchmarks
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo('contact')}
                    className="hover:text-white transition-colors text-left"
                  >
                    Sustainability Audit
                  </button>
                </li>
                <li className="pt-2 text-xs text-slate-500">
                  Global HQ: Tech Corridor, Innovation Way
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Accents */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <div>
              &copy; {new Date().getFullYear()}{' '}
              <span className="font-semibold text-slate-300">
                Verd<span className="text-[#16A34A]">ant</span>
              </span>{' '}
              Technologies. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => navigateTo('about')} className="hover:text-slate-400 transition-colors">
                Privacy Policy
              </button>
              <button onClick={() => navigateTo('about')} className="hover:text-slate-400 transition-colors">
                Terms of Service
              </button>
              <button onClick={() => navigateTo('features')} className="hover:text-slate-400 transition-colors">
                System Status
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Get Started Quick Action Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 id="modal-title" className="text-2xl font-bold text-[#075985]">
                  You're on Your Way!
                </h3>
                <p className="text-sm text-slate-600">
                  Thank you, <span className="font-semibold text-slate-900">{formData.name}</span>. An engineering advisor will reach out to <span className="font-semibold text-slate-900">{formData.email}</span> within 4 hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#087FCE]/10 text-[#087FCE] flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="modal-title" className="text-xl font-bold text-[#075985]">
                      Initiate Project Kickoff
                    </h3>
                    <p className="text-xs text-slate-500">
                      Connect with Verdant's digital architecture team.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleModalSubmit} className="space-y-4 mt-6">
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087FCE] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Work Email
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@enterprise.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087FCE] transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Primary Objective
                    </label>
                    <select
                      id="modal-type"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087FCE] bg-white transition-all"
                    >
                      <option value="High-Performance Web Development">High-Performance Web Development</option>
                      <option value="Carbon Reduction & Eco-Architecture">Carbon Reduction & Eco-Architecture</option>
                      <option value="Responsive Modernization">Responsive Redesign & Modern UI</option>
                      <option value="Enterprise Architecture">Enterprise Cloud Infrastructure</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#087FCE] hover:bg-[#075985] transition-all shadow-md active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE]"
                    >
                      <span>Confirm & Get Started</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  <p className="text-[11px] text-center text-slate-400">
                    No spam. Zero obligation consultation.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
