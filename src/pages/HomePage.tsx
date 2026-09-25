import React, { useRef } from 'react';
import {
  Zap,
  Leaf,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenModal: () => void;
  activeTab: 'fast' | 'eco' | 'responsive';
  setActiveTab: (tab: 'fast' | 'eco' | 'responsive') => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenModal,
  activeTab,
  setActiveTab,
}) => {
  // Ultra-smooth 3D Parallax Tilt ref (Zero React re-renders for buttery 120fps smoothness)
  const heroOrbRef = useRef<HTMLDivElement>(null);
  const chip1Ref = useRef<HTMLDivElement>(null);
  const chip2Ref = useRef<HTMLDivElement>(null);
  const chip3Ref = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroOrbRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rx = -(y / rect.height) * 14;
    const ry = (x / rect.width) * 14;
    const tx = (x / rect.width) * 15;
    const ty = (y / rect.height) * 15;

    heroOrbRef.current.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    if (coreRef.current) {
      coreRef.current.style.transform = `translateZ(30px) translate3d(${(tx * 0.5).toFixed(1)}px, ${(ty * 0.5).toFixed(1)}px, 0)`;
    }
    if (chip1Ref.current) {
      chip1Ref.current.style.transform = `translateZ(50px) translate3d(${(tx * 1.3).toFixed(1)}px, ${(ty * 1.3).toFixed(1)}px, 0)`;
    }
    if (chip2Ref.current) {
      chip2Ref.current.style.transform = `translateZ(45px) translate3d(${(-tx * 1.1).toFixed(1)}px, ${(-ty * 1.1).toFixed(1)}px, 0)`;
    }
    if (chip3Ref.current) {
      chip3Ref.current.style.transform = `translateZ(40px) translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0)`;
    }
  };

  const handleHeroMouseLeave = () => {
    if (heroOrbRef.current) {
      heroOrbRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
    if (coreRef.current) coreRef.current.style.transform = `translateZ(30px) translate3d(0, 0, 0)`;
    if (chip1Ref.current) chip1Ref.current.style.transform = `translateZ(50px) translate3d(0, 0, 0)`;
    if (chip2Ref.current) chip2Ref.current.style.transform = `translateZ(45px) translate3d(0, 0, 0)`;
    if (chip3Ref.current) chip3Ref.current.style.transform = `translateZ(40px) translate3d(0, 0, 0)`;
  };

  return (
    <div>
      {/* Hero Section with Cursor-Driven 3D Depth */}
      <section
        id="home"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 bg-gradient-to-b from-[#F5FFF9]/70 via-white to-white"
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
                  onClick={onOpenModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-[#087FCE] hover:bg-[#075985] transition-all shadow-md hover:shadow-lg active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE] focus-visible:ring-offset-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('features')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-base font-semibold text-[#075985] bg-white border border-slate-200 hover:border-[#087FCE]/40 hover:bg-[#F5FFF9] transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087FCE]"
                >
                  Explore Features
                </button>
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

            {/* Right Column: Modern Circular Visual Element with 3D Cursor Parallax */}
            <div
              className="lg:col-span-5 flex justify-center items-center relative"
              style={{
                perspective: '1000px',
              }}
            >
              <div
                ref={heroOrbRef}
                className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] flex items-center justify-center transition-transform duration-200 ease-out will-change-transform"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                
                {/* Outer Orbital Ring 1 */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#087FCE]/25 animate-spin-slow" />
                
                {/* Outer Orbital Ring 2 */}
                <div className="absolute inset-6 rounded-full border border-[#16A34A]/20 animate-reverse-spin" />

                {/* Concentric Glow Ambient Center */}
                <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-[#087FCE]/10 via-[#F5FFF9] to-[#16A34A]/15 blur-xl" />

                {/* Core Circular Hero Element */}
                <div
                  ref={coreRef}
                  className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-white border-2 border-slate-100 shadow-2xl flex flex-col items-center justify-center p-6 text-center animate-gentle-pulse transition-transform duration-200 ease-out will-change-transform"
                  style={{
                    transform: `translateZ(30px)`,
                  }}
                >
                  
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
                <div
                  ref={chip1Ref}
                  className="absolute top-2 right-0 sm:right-2 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-xl border border-slate-100 shadow-subtle flex items-center gap-2.5 transition-transform duration-200 ease-out will-change-transform hover:scale-105"
                  style={{
                    transform: `translateZ(50px)`,
                  }}
                >
                  <div className="w-7 h-7 rounded-lg bg-[#087FCE]/10 text-[#087FCE] flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Response</div>
                    <div className="text-xs font-bold text-[#075985]">&lt; 32ms Fast</div>
                  </div>
                </div>

                {/* Floating Stat Chip 2: Bottom Left */}
                <div
                  ref={chip2Ref}
                  className="absolute bottom-4 left-0 sm:left-2 bg-white/95 backdrop-blur-md py-2 px-3.5 rounded-xl border border-slate-100 shadow-subtle flex items-center gap-2.5 transition-transform duration-200 ease-out will-change-transform hover:scale-105"
                  style={{
                    transform: `translateZ(45px)`,
                  }}
                >
                  <div className="w-7 h-7 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Footprint</div>
                    <div className="text-xs font-bold text-[#16A34A]">-85% CO₂e</div>
                  </div>
                </div>

                {/* Floating Stat Chip 3: Bottom Right */}
                <div
                  ref={chip3Ref}
                  className="absolute bottom-1 right-8 hidden sm:flex bg-white/95 backdrop-blur-md py-1.5 px-3 rounded-xl border border-slate-100 shadow-subtle items-center gap-2 transition-transform duration-200 ease-out will-change-transform"
                  style={{
                    transform: `translateZ(40px)`,
                  }}
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#087FCE]" />
                  <span className="text-xs font-medium text-slate-600">Adaptive UI</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Snapshot Cards Overview */}
      <section className="py-16 bg-[#F5FFF9]/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#087FCE]">
                Platform Foundations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] mt-1">
                Explore The Triad of Verdant Architecture
              </h2>
            </div>
            <button
              onClick={() => onNavigate('features')}
              className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-[#087FCE] hover:text-[#075985] transition-colors"
            >
              <span>View full feature suite</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard
              onClick={() => onNavigate('features')}
              spotlightColor="rgba(52, 211, 153, 0.22)"
              className="cursor-pointer bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:-translate-y-1.5 hover:shadow-card-hover transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#087FCE]/10 text-[#087FCE] flex items-center justify-center mb-4 group-hover:bg-[#087FCE] group-hover:text-white transition-colors">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#087FCE] transition-colors">
                Fast & Modern
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Streamlined execution loops, sub-second LCP, and zero unnecessary bundle bloat.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-[#087FCE]">
                <span>Discover performance specs</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </SpotlightCard>

            <SpotlightCard
              onClick={() => onNavigate('features')}
              spotlightColor="rgba(16, 185, 129, 0.24)"
              className="cursor-pointer bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:-translate-y-1.5 hover:shadow-card-hover transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mb-4 group-hover:bg-[#16A34A] group-hover:text-white transition-colors">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#16A34A] transition-colors">
                Eco Friendly
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Engineered for net-zero carbon hosting, low compute load, and audited sustainability metrics.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-[#16A34A]">
                <span>Discover eco methodology</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </SpotlightCard>

            <SpotlightCard
              onClick={() => onNavigate('features')}
              spotlightColor="rgba(5, 150, 105, 0.22)"
              className="cursor-pointer bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:-translate-y-1.5 hover:shadow-card-hover transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#075985]/10 text-[#075985] flex items-center justify-center mb-4 group-hover:bg-[#075985] group-hover:text-white transition-colors">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#075985] transition-colors">
                Responsive
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Seamless adaptation across 320px mobile displays up to 4K ultra-wide workstations.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-[#075985]">
                <span>Discover viewport matrix</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Quick Benchmark Tab Switcher on Home */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5FFF9]/60 rounded-3xl p-6 sm:p-10 border border-[#16A34A]/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#16A34A]">
                  Verified Data Telemetry
                </span>
                <h3 className="text-2xl font-bold text-[#075985] mt-1">
                  Engineered Performance Dashboard
                </h3>
              </div>
              <div className="inline-flex p-1 bg-slate-200/70 rounded-xl" role="tablist">
                <button
                  role="tab"
                  aria-selected={activeTab === 'fast'}
                  onClick={() => setActiveTab('fast')}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
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
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
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
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === 'responsive'
                      ? 'bg-white text-[#075985] shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Viewport Matrix
                </button>
              </div>
            </div>

            <div className="pt-6">
              {activeTab === 'fast' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <SpotlightCard
                    spotlightColor="rgba(8, 127, 206, 0.18)"
                    className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-3xl font-black text-[#087FCE]">0.38s</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Largest Contentful Paint (LCP)</div>
                    <p className="text-xs text-slate-500 mt-2">Well inside Google's 2.5s good threshold for instant user perceived responsiveness.</p>
                  </SpotlightCard>
                  <SpotlightCard
                    spotlightColor="rgba(7, 89, 133, 0.18)"
                    className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-3xl font-black text-[#075985]">12ms</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Cumulative Layout Shift (CLS)</div>
                    <p className="text-xs text-slate-500 mt-2">Zero visual jumping or disruptive layout shifts during resource hydration.</p>
                  </SpotlightCard>
                  <SpotlightCard
                    spotlightColor="rgba(22, 163, 74, 0.18)"
                    className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-3xl font-black text-[#16A34A]">99/100</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Lighthouse Performance Index</div>
                    <p className="text-xs text-slate-500 mt-2">Consistently verified across high-traffic desktop and throttling mobile networks.</p>
                  </SpotlightCard>
                </div>
              )}

              {activeTab === 'eco' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <SpotlightCard
                    spotlightColor="rgba(22, 163, 74, 0.18)"
                    className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-3xl font-black text-[#16A34A]">0.12g</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Carbon per Page View</div>
                    <p className="text-xs text-slate-500 mt-2">Cleaner than 94% of tested web properties worldwide per Sustainable Web Standards.</p>
                  </SpotlightCard>
                  <SpotlightCard
                    spotlightColor="rgba(8, 127, 206, 0.18)"
                    className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-3xl font-black text-[#087FCE]">100%</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Renewable Energy Powered</div>
                    <p className="text-xs text-slate-500 mt-2">Server points deployed strictly in regional clusters powered by hydro, solar, and wind.</p>
                  </SpotlightCard>
                  <SpotlightCard
                    spotlightColor="rgba(7, 89, 133, 0.18)"
                    className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-3xl font-black text-[#075985]">&lt; 120 KB</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Total Initial Bundle Weight</div>
                    <p className="text-xs text-slate-500 mt-2">Lean code discipline eliminates bloat, cutting continuous compute load.</p>
                  </SpotlightCard>
                </div>
              )}

              {activeTab === 'responsive' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <SpotlightCard
                    spotlightColor="rgba(7, 89, 133, 0.18)"
                    className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-3xl font-black text-[#075985]">320px - 4K</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Continuous Scalability</div>
                    <p className="text-xs text-slate-500 mt-2">Flexible layout constraints that adapt without awkward horizontal scrollbars.</p>
                  </SpotlightCard>
                  <SpotlightCard
                    spotlightColor="rgba(8, 127, 206, 0.18)"
                    className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-3xl font-black text-[#087FCE]">48px+</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Touch Target Minimums</div>
                    <p className="text-xs text-slate-500 mt-2">Ergonomically spaced for thumb reaches on handheld devices and stylus accuracy.</p>
                  </SpotlightCard>
                  <SpotlightCard
                    spotlightColor="rgba(22, 163, 74, 0.18)"
                    className="bg-white rounded-2xl p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="text-3xl font-black text-[#16A34A]">100%</div>
                    <div className="text-xs font-bold text-slate-800 mt-1">Cross-Engine Parity</div>
                    <p className="text-xs text-slate-500 mt-2">Standardized rendering across Chromium, WebKit (Safari), and Gecko (Firefox).</p>
                  </SpotlightCard>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 bg-gradient-to-r from-[#075985] via-[#087FCE] to-[#16A34A] shadow-xl text-white">
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
                  onClick={onOpenModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-[#075985] bg-white hover:bg-[#F5FFF9] transition-all shadow-lg hover:shadow-xl active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#087FCE]"
                >
                  Start Now
                  <ArrowRight className="w-5 h-5 ml-2 text-[#16A34A]" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Contact Engineering
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
