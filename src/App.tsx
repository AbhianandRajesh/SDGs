import React, { useState, useEffect } from 'react';
import {
  Zap,
  Leaf,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  ShieldCheck,
  Cpu,
  Globe2,
  Send,
  BarChart3,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'fast' | 'eco' | 'responsive'>('fast');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: ''
  });

  // Close mobile menu on ESC
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep state shown for 3 seconds then close modal if in modal
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSubmitted(false);
        setFormData({ name: '', email: '', projectType: 'Web Development', message: '' });
      }, 2500);
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      {/* 2. Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE] rounded-lg py-1 px-1.5"
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
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600" aria-label="Main Navigation">
            <a
              href="#home"
              className="text-[#075985] font-semibold transition-colors hover:text-[#087FCE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE] rounded px-1"
            >
              Home
            </a>
            <a
              href="#features"
              className="transition-colors hover:text-[#087FCE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE] rounded px-1"
            >
              Features
            </a>
            <a
              href="#about"
              className="transition-colors hover:text-[#087FCE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE] rounded px-1"
            >
              About
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-[#087FCE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE] rounded px-1"
            >
              Contact
            </a>
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
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F5FFF9] hover:text-[#087FCE] transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F5FFF9] hover:text-[#087FCE] transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F5FFF9] hover:text-[#087FCE] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F5FFF9] hover:text-[#087FCE] transition-colors"
              >
                Contact
              </a>
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

      <main className="flex-1">
        {/* 3. Hero Section */}
        <section
          id="home"
          className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-28 lg:pb-36 bg-gradient-to-b from-[#F5FFF9]/60 via-white to-white"
        >
          {/* Subtle background ambient geometric circles */}
          <div
            className="absolute top-0 right-1/4 w-96 h-96 bg-[#087FCE]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-1/3 left-10 w-80 h-80 bg-[#16A34A]/5 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Headline and CTAs */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Meta indicator */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5FFF9] border border-[#16A34A]/20 text-xs font-semibold text-[#075985] mx-auto lg:mx-0">
                  <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
                  Sustainable Engineering & High-Velocity UI
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                  Build a Better <br />
                  <span className="text-[#16A34A]">Digital Future</span>
                </h1>

                {/* Supporting description */}
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                  Empowering forward-thinking enterprises with ultra-fast, responsive web systems crafted
                  for minimal carbon footprint, pristine aesthetics, and unmatched reliability.
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-[#087FCE] hover:bg-[#075985] transition-all shadow-md hover:shadow-lg active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE] focus-visible:ring-offset-2"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                  <a
                    href="#features"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold text-[#075985] bg-white border border-slate-200 hover:border-[#087FCE]/40 hover:bg-[#F5FFF9] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE]"
                  >
                    Explore More
                  </a>
                </div>

                {/* Trust Metrics Bar */}
                <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-500 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                    <span>99.98% Carbon-Neutral Hosting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#087FCE]" />
                    <span>Sub-50ms Global Core Web Vitals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#075985]" />
                    <span>WCAG AA & ISO 14001 Compliant</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Modern Circular Visual Element */}
              <div className="lg:col-span-5 flex justify-center items-center relative">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center">
                  
                  {/* Outer Orbital Ring 1 */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#087FCE]/25 animate-spin-slow" />
                  
                  {/* Outer Orbital Ring 2 */}
                  <div className="absolute inset-6 rounded-full border border-[#16A34A]/20 animate-reverse-spin" />

                  {/* Concentric Glow Ambient Center */}
                  <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-[#087FCE]/10 via-[#F5FFF9] to-[#16A34A]/15 blur-xl" />

                  {/* Core Circular Hero Element */}
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white border-2 border-slate-100 shadow-2xl flex flex-col items-center justify-center p-6 text-center animate-gentle-pulse">
                    
                    {/* Center Icon Badge */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#087FCE] to-[#16A34A] text-white flex items-center justify-center shadow-md mb-3">
                      <Cpu className="w-8 h-8" />
                    </div>

                    <h3 className="font-bold text-lg text-[#075985]">
                      Eco-Digital Core
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 max-w-[190px]">
                      Optimized reactive architecture running at net-zero carbon load.
                    </p>

                    {/* Mini live indicator */}
                    <div className="mt-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F5FFF9] border border-[#16A34A]/30 text-[11px] font-medium text-[#16A34A]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-ping" />
                      Live Efficiency 99.4%
                    </div>
                  </div>

                  {/* Floating Stat Chip 1: Top Right */}
                  <div className="absolute top-2 right-0 sm:right-2 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-xl border border-slate-100 shadow-subtle flex items-center gap-2.5 transition-transform hover:scale-105">
                    <div className="w-7 h-7 rounded-lg bg-[#087FCE]/10 text-[#087FCE] flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Response</div>
                      <div className="text-xs font-bold text-[#075985]">&lt; 32ms Fast</div>
                    </div>
                  </div>

                  {/* Floating Stat Chip 2: Bottom Left */}
                  <div className="absolute bottom-4 left-0 sm:left-2 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-xl border border-slate-100 shadow-subtle flex items-center gap-2.5 transition-transform hover:scale-105">
                    <div className="w-7 h-7 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Footprint</div>
                      <div className="text-xs font-bold text-[#16A34A]">-85% CO₂e</div>
                    </div>
                  </div>

                  {/* Floating Stat Chip 3: Bottom Right */}
                  <div className="absolute bottom-1 right-8 hidden sm:flex bg-white/95 backdrop-blur-md py-1.5 px-3 rounded-xl border border-slate-100 shadow-subtle items-center gap-2">
                    <Smartphone className="w-3.5 h-3.5 text-[#087FCE]" />
                    <span className="text-xs font-medium text-slate-600">Adaptive UI</span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Features Section */}
        <section id="features" className="py-20 md:py-28 bg-[#F5FFF9]/50 border-t border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold tracking-widest uppercase text-[#087FCE]">
                Core Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] mt-2 tracking-tight">
                Designed for Velocity. Built for Responsibility.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Discover the foundational pillars that allow Verdant systems to perform effortlessly across all devices while maintaining sustainable footprint benchmarks.
              </p>
            </div>

            {/* Three Modern Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Feature Card 1: Fast & Modern */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#087FCE]/50 hover:shadow-card-hover group flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#087FCE]/10 text-[#087FCE] flex items-center justify-center mb-6 transition-colors group-hover:bg-[#087FCE] group-hover:text-white">
                    <Zap className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#087FCE] transition-colors">
                    Fast & Modern
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Engineered with modern component rendering, tree-shaken bundles, and instant edge routing for immediate time-to-interactive and 60fps micro-interactions.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs text-slate-500 font-medium border-t border-slate-100 pt-5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#087FCE]" />
                      <span>Sub-second page rendering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#087FCE]" />
                      <span>Zero-flicker state synchronization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#087FCE]" />
                      <span>Optimized asset delivery pipeline</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-[#087FCE]">
                  <span>High-Fidelity UI</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Feature Card 2: Eco Friendly */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#16A34A]/50 hover:shadow-card-hover group flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mb-6 transition-colors group-hover:bg-[#16A34A] group-hover:text-white">
                    <Leaf className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#16A34A] transition-colors">
                    Eco Friendly
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Designed with low-carbon computing principles, lean execution loops, and green cloud hosting partnerships to decrease carbon footprint per session by over 80%.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs text-slate-500 font-medium border-t border-slate-100 pt-5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                      <span>Clean renewable energy data nodes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                      <span>Minimal compute battery drain</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                      <span>Eco-budget monitoring built-in</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-[#16A34A]">
                  <span>Zero-Waste Tech</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Feature Card 3: Responsive */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#075985]/50 hover:shadow-card-hover group flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#075985]/10 text-[#075985] flex items-center justify-center mb-6 transition-colors group-hover:bg-[#075985] group-hover:text-white">
                    <Smartphone className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#075985] transition-colors">
                    Responsive
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Engineered to transition seamlessly across ultra-wide monitors, laptops, tablets, and smartphones with fluid typographic scaling and natural touch controls.
                  </p>
                  <ul className="mt-6 space-y-2.5 text-xs text-slate-500 font-medium border-t border-slate-100 pt-5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#075985]" />
                      <span>Fluid grid layout with zero overflow</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#075985]" />
                      <span>Accessible 44px+ touch targets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#075985]" />
                      <span>Cross-browser & cross-OS verified</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-[#075985]">
                  <span>Every Screen & Viewport</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

            </div>

            {/* Interactive Feature Deep Dive Showcase */}
            <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-[#075985]">
                    Interactive Performance Showcase
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    Switch between feature criteria to review live engineering specifications.
                  </p>
                </div>
                
                {/* Segmented Filter Control */}
                <div className="inline-flex p-1 bg-slate-100 rounded-xl" role="tablist">
                  <button
                    role="tab"
                    aria-selected={activeTab === 'fast'}
                    onClick={() => setActiveTab('fast')}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === 'fast'
                        ? 'bg-white text-[#087FCE] shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Speed Engine
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === 'eco'}
                    onClick={() => setActiveTab('eco')}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === 'eco'
                        ? 'bg-white text-[#16A34A] shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Eco Metrics
                  </button>
                  <button
                    role="tab"
                    aria-selected={activeTab === 'responsive'}
                    onClick={() => setActiveTab('responsive')}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === 'responsive'
                        ? 'bg-white text-[#075985] shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Viewport Matrix
                  </button>
                </div>
              </div>

              {/* Tab Content Display */}
              <div className="pt-8">
                {activeTab === 'fast' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-[#F5FFF9] rounded-2xl p-5 border border-[#16A34A]/20">
                      <div className="text-2xl font-black text-[#087FCE]">0.38s</div>
                      <div className="text-xs font-bold text-slate-700 mt-1">Largest Contentful Paint (LCP)</div>
                      <p className="text-xs text-slate-500 mt-2">Well inside Google's 2.5s good threshold for instant user perceived responsiveness.</p>
                    </div>
                    <div className="bg-[#F5FFF9] rounded-2xl p-5 border border-[#16A34A]/20">
                      <div className="text-2xl font-black text-[#075985]">12ms</div>
                      <div className="text-xs font-bold text-slate-700 mt-1">Cumulative Layout Shift (CLS)</div>
                      <p className="text-xs text-slate-500 mt-2">Zero visual jumping or disruptive layout shifts during resource hydration.</p>
                    </div>
                    <div className="bg-[#F5FFF9] rounded-2xl p-5 border border-[#16A34A]/20">
                      <div className="text-2xl font-black text-[#16A34A]">99/100</div>
                      <div className="text-xs font-bold text-slate-700 mt-1">Lighthouse Performance Index</div>
                      <p className="text-xs text-slate-500 mt-2">Consistently verified across high-traffic desktop and throttling mobile networks.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'eco' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-[#F5FFF9] rounded-2xl p-5 border border-[#16A34A]/20">
                      <div className="text-2xl font-black text-[#16A34A]">0.12g</div>
                      <div className="text-xs font-bold text-slate-700 mt-1">Carbon per Page View</div>
                      <p className="text-xs text-slate-500 mt-2">Cleaner than 94% of tested web properties worldwide per Sustainable Web Standards.</p>
                    </div>
                    <div className="bg-[#F5FFF9] rounded-2xl p-5 border border-[#16A34A]/20">
                      <div className="text-2xl font-black text-[#087FCE]">100%</div>
                      <div className="text-xs font-bold text-slate-700 mt-1">Renewable Energy Powered</div>
                      <p className="text-xs text-slate-500 mt-2">Server points deployed strictly in regional clusters powered by hydro, solar, and wind.</p>
                    </div>
                    <div className="bg-[#F5FFF9] rounded-2xl p-5 border border-[#16A34A]/20">
                      <div className="text-2xl font-black text-[#075985]">&lt; 120 KB</div>
                      <div className="text-xs font-bold text-slate-700 mt-1">Total Initial Bundle Weight</div>
                      <p className="text-xs text-slate-500 mt-2">Lean code discipline eliminates bloat, cutting continuous compute load.</p>
                    </div>
                  </div>
                )}

                {activeTab === 'responsive' && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-[#F5FFF9] rounded-2xl p-5 border border-[#16A34A]/20">
                      <div className="text-2xl font-black text-[#075985]">320px - 4K</div>
                      <div className="text-xs font-bold text-slate-700 mt-1">Continuous Scalability</div>
                      <p className="text-xs text-slate-500 mt-2">Flexible layout constraints that adapt without awkward horizontal scrollbars.</p>
                    </div>
                    <div className="bg-[#F5FFF9] rounded-2xl p-5 border border-[#16A34A]/20">
                      <div className="text-2xl font-black text-[#087FCE]">48px+</div>
                      <div className="text-xs font-bold text-slate-700 mt-1">Touch Target Minimums</div>
                      <p className="text-xs text-slate-500 mt-2">Ergonomically spaced for thumb reaches on handheld devices and stylus accuracy.</p>
                    </div>
                    <div className="bg-[#F5FFF9] rounded-2xl p-5 border border-[#16A34A]/20">
                      <div className="text-2xl font-black text-[#16A34A]">100%</div>
                      <div className="text-xs font-bold text-slate-700 mt-1">Cross-Engine Parity</div>
                      <p className="text-xs text-slate-500 mt-2">Standardized rendering across Chromium, WebKit (Safari), and Gecko (Firefox).</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-bold tracking-widest uppercase text-[#16A34A]">
                  About Our Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075985] tracking-tight">
                  Sustainable Technology Without Compromising Performance
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Founded with the vision that digital excellence and planetary consciousness are mutually reinforcing, Verdant engineers software platforms for enterprises that prioritize both velocity and environmental responsibility.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-100 bg-[#F5FFF9]/70">
                    <div className="w-8 h-8 rounded-lg bg-[#087FCE]/10 text-[#087FCE] flex items-center justify-center font-bold text-sm mb-2">
                      01
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Lean Codebases</h4>
                    <p className="text-xs text-slate-600 mt-1">Eliminating unnecessary libraries and heavy frameworks reduces client battery draw.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-100 bg-[#F5FFF9]/70">
                    <div className="w-8 h-8 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center font-bold text-sm mb-2">
                      02
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Carbon-Smart Cloud</h4>
                    <p className="text-xs text-slate-600 mt-1">Smart execution scheduling shifts non-urgent batch jobs to times of abundant clean energy.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-100 bg-[#F5FFF9]/70">
                    <div className="w-8 h-8 rounded-lg bg-[#075985]/10 text-[#075985] flex items-center justify-center font-bold text-sm mb-2">
                      03
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Universal Access</h4>
                    <p className="text-xs text-slate-600 mt-1">Strict accessibility compliance ensures technology works seamlessly for every human.</p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-100 bg-[#F5FFF9]/70">
                    <div className="w-8 h-8 rounded-lg bg-[#087FCE]/10 text-[#087FCE] flex items-center justify-center font-bold text-sm mb-2">
                      04
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm">Long-Term Resilience</h4>
                    <p className="text-xs text-slate-600 mt-1">Modern standard HTML5/CSS3 foundations reduce dependency churn and technical debt.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#087FCE] hover:text-[#075985] transition-colors"
                  >
                    <span>Read our technical sustainability whitepaper</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 bg-gradient-to-br from-[#F5FFF9] to-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-subtle">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="font-bold text-slate-900 text-base">Sustainability Impact Metrics</span>
                    <span className="text-xs font-semibold text-[#16A34A] bg-[#16A34A]/10 px-2.5 py-1 rounded-full">Audited 2026</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                        <span>Carbon Footprint Reduction</span>
                        <span className="text-[#16A34A]">86%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#16A34A] h-full rounded-full w-[86%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                        <span>Clean Energy Server Utilization</span>
                        <span className="text-[#087FCE]">99.8%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#087FCE] h-full rounded-full w-[99.8%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                        <span>Mobile Viewport Usability Score</span>
                        <span className="text-[#075985]">100%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#075985] h-full rounded-full w-full" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-[#16A34A] shrink-0" />
                    <p className="text-xs text-slate-600 leading-normal">
                      Every project built on Verdant standards includes real-time telemetry demonstrating tangible reduction in electricity and greenhouse gas output.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. Call-to-Action Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 bg-gradient-to-r from-[#075985] via-[#087FCE] to-[#16A34A] shadow-xl text-white">
              
              {/* Subtle background decorative shapes */}
              <div
                className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Ready to Get Started?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90 font-normal leading-relaxed max-w-2xl mx-auto">
                  Transform your web presence into an ultra-fast, modern, eco-conscious powerhouse. Connect with our engineering specialists today.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-[#075985] bg-white hover:bg-[#F5FFF9] transition-all shadow-lg hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#087FCE]"
                  >
                    Start Now
                    <ArrowRight className="w-5 h-5 ml-2 text-[#16A34A]" />
                  </button>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-24 bg-[#F5FFF9]/40 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold tracking-widest uppercase text-[#087FCE]">
                  Direct Inquiry
                </span>
                <h2 className="text-3xl font-extrabold text-[#075985] tracking-tight">
                  Let's Discuss Your Next Digital Venture
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Whether you are initiating a new product architecture or retrofitting existing systems for energy efficiency and speed, our engineering team is here to assist.
                </p>

                <div className="space-y-4 pt-2 text-sm text-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#087FCE]/10 text-[#087FCE] flex items-center justify-center">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Global Headquarter</div>
                      <div className="text-xs text-slate-500">100 Green Innovation Blvd, Tech Corridor</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Electronic Mail</div>
                      <div className="text-xs text-slate-500">engineering@verdanttech.io</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#075985]/10 text-[#075985] flex items-center justify-center">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">Operational SLA</div>
                      <div className="text-xs text-slate-500">Rapid response within 4 business hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-subtle">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#075985]">Inquiry Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting Verdant Technologies. A dedicated engineering specialist will review your project parameters and respond promptly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2 rounded-lg text-xs font-semibold text-[#087FCE] border border-[#087FCE]/30 hover:bg-[#F5FFF9] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087FCE] focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Work Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087FCE] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Project Focus
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087FCE] focus:border-transparent bg-white transition-all"
                      >
                        <option value="Web Development">High-Performance Web Development</option>
                        <option value="Eco Optimization">Carbon Reduction & Eco-Architecture</option>
                        <option value="Responsive Modernization">Responsive Redesign & Modern UI</option>
                        <option value="Enterprise Architecture">Enterprise Cloud Infrastructure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Project Summary / Objectives
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your team's objectives, timeline, or current technical requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#087FCE] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#087FCE] hover:bg-[#075985] transition-all shadow-md hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE]"
                    >
                      <span>Submit Project Inquiry</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            
            {/* Brand column */}
            <div className="md:col-span-2 space-y-4">
              <a href="#home" className="inline-flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#087FCE] to-[#075985] flex items-center justify-center text-white font-bold text-lg">
                  V<span className="text-[#16A34A] text-xl">.</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Verd<span className="text-[#16A34A]">ant</span>
                </span>
              </a>
              <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                A sustainable digital technology organization engineered to combine blazing frontend speed with environmentally conscious architectures.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-[#16A34A]">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                100% Carbon-Neutral Cloud Verified
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#features" className="hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Technology & Compliance */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                Architecture
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer" onClick={() => { setActiveTab('fast'); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Fast & Modern UI
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer" onClick={() => { setActiveTab('eco'); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Eco-Friendly Protocol
                  </span>
                </li>
                <li>
                  <span className="hover:text-white transition-colors cursor-pointer" onClick={() => { setActiveTab('responsive'); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    Fluid Responsive Grid
                  </span>
                </li>
                <li>
                  <span className="text-slate-500">ISO 14001 Standards</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>
              &copy; {new Date().getFullYear()} <span className="text-slate-300">Verd<span className="text-[#16A34A] font-medium">ant</span></span> Technologies Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="hover:text-slate-400 transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-400 transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-400 transition-colors cursor-pointer">System Status</span>
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

                <form onSubmit={handleFormSubmit} className="space-y-4 mt-6">
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
                      <option value="Web Development">High-Performance Web Development</option>
                      <option value="Eco Optimization">Carbon Reduction & Eco-Architecture</option>
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
