import React, { useState } from 'react';
import {
  Zap,
  Leaf,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Sliders,
  Cpu,
  Layers,
  Gauge,
  Activity,
  ShieldCheck,
  Server,
  Code2
} from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';

interface FeaturesPageProps {
  onOpenModal: () => void;
  onNavigate: (page: string) => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({ onOpenModal, onNavigate }) => {
  const [selectedSpec, setSelectedSpec] = useState<'fast' | 'eco' | 'responsive'>('fast');
  const [interactiveDevices, setInteractiveDevices] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  return (
    <div className="bg-white">
      {/* Page Header Header */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-[#F5FFF9] via-white to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#087FCE]/10 text-xs font-bold text-[#087FCE] mb-4">
            <Sliders className="w-3.5 h-3.5" />
            Comprehensive Architectural Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#075985] tracking-tight">
            Features Built for <span className="text-[#16A34A]">Extreme Performance</span> & Longevity
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every layer of our application stack is tuned for maximum network efficiency, clean energy utilization, and pixel-precise responsive fidelity.
          </p>
        </div>
      </section>

      {/* Main 3 Core Pillar Cards Section with Spotlight Effects */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Fast & Modern */}
            <SpotlightCard
              spotlightColor="rgba(8, 127, 206, 0.18)"
              className={`rounded-3xl p-8 border transition-all duration-300 ${
                selectedSpec === 'fast'
                  ? 'border-[#087FCE] ring-2 ring-[#087FCE]/20 shadow-card-hover bg-[#F5FFF9]/30'
                  : 'border-slate-200/90 hover:border-[#087FCE]/50 shadow-sm'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#087FCE]/10 text-[#087FCE] flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#087FCE] uppercase tracking-wider">
                <span>Pillar 01</span>
                <span>•</span>
                <span>Instant Reactivity</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Fast & Modern
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Engineered with modern component rendering, tree-shaken bundles, and instant edge routing for immediate time-to-interactive and 60fps micro-interactions.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#087FCE] shrink-0 mt-0.5" />
                  <span>Sub-second first contentful paint across global edge CDNs</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#087FCE] shrink-0 mt-0.5" />
                  <span>Zero-flicker client hydration with optimized hydration boundaries</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#087FCE] shrink-0 mt-0.5" />
                  <span>Hardware-accelerated CSS transforms and smooth scroll physics</span>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => setSelectedSpec('fast')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#087FCE] text-white hover:bg-[#075985] transition-colors"
                >
                  View Speed Benchmarks
                </button>
              </div>
            </SpotlightCard>

            {/* Card 2: Eco Friendly */}
            <SpotlightCard
              spotlightColor="rgba(22, 163, 74, 0.18)"
              className={`rounded-3xl p-8 border transition-all duration-300 ${
                selectedSpec === 'eco'
                  ? 'border-[#16A34A] ring-2 ring-[#16A34A]/20 shadow-card-hover bg-[#F5FFF9]/40'
                  : 'border-slate-200/90 hover:border-[#16A34A]/50 shadow-sm'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center mb-6">
                <Leaf className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#16A34A] uppercase tracking-wider">
                <span>Pillar 02</span>
                <span>•</span>
                <span>Carbon Neutrality</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Eco Friendly
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Designed with low-carbon computing principles, lean execution loops, and green cloud hosting partnerships to decrease carbon footprint per session by over 80%.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>100% matched renewable solar, hydro, and wind compute centers</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Minimal CPU thread occupation saving consumer battery lifespan</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span>Automated asset minification and WebP/AVIF media delivery</span>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => setSelectedSpec('eco')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#16A34A] text-white hover:bg-emerald-700 transition-colors"
                >
                  View Carbon Audit
                </button>
              </div>
            </SpotlightCard>

            {/* Card 3: Responsive */}
            <SpotlightCard
              spotlightColor="rgba(7, 89, 133, 0.18)"
              className={`rounded-3xl p-8 border transition-all duration-300 ${
                selectedSpec === 'responsive'
                  ? 'border-[#075985] ring-2 ring-[#075985]/20 shadow-card-hover bg-[#F5FFF9]/30'
                  : 'border-slate-200/90 hover:border-[#075985]/50 shadow-sm'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-[#075985]/10 text-[#075985] flex items-center justify-center mb-6">
                <Smartphone className="w-7 h-7" />
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#075985] uppercase tracking-wider">
                <span>Pillar 03</span>
                <span>•</span>
                <span>Adaptive UI</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Responsive
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Engineered to transition seamlessly across ultra-wide monitors, laptops, tablets, and smartphones with fluid typographic scaling and natural touch controls.
              </p>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#075985] shrink-0 mt-0.5" />
                  <span>Fluid CSS Clamp typography that scales smoothly without break points</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#075985] shrink-0 mt-0.5" />
                  <span>Thumb-friendly ergonomic 48px+ navigation and tap regions</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#075985] shrink-0 mt-0.5" />
                  <span>Tested across iOS Safari, Android Chrome, and Windows Touch</span>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  onClick={() => setSelectedSpec('responsive')}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#075985] text-white hover:bg-slate-900 transition-colors"
                >
                  Test Viewport Device Mode
                </button>
              </div>
            </SpotlightCard>

          </div>
        </div>
      </section>

      {/* Interactive Deep-Dive Explorer Section */}
      <section className="py-16 bg-[#F5FFF9]/60 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-subtle">
            
            {/* Header with Switcher */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#087FCE]">
                  Live Specification Inspector
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075985] mt-1">
                  {selectedSpec === 'fast' && 'High-Velocity Runtime Diagnostics'}
                  {selectedSpec === 'eco' && 'Environmental Impact & Carbon Dashboard'}
                  {selectedSpec === 'responsive' && 'Multi-Device Adaptive Viewport Inspector'}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Select a category to audit technical parameters.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedSpec('fast')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedSpec === 'fast'
                      ? 'bg-[#087FCE] text-white shadow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  Velocity Specs
                </button>
                <button
                  onClick={() => setSelectedSpec('eco')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedSpec === 'eco'
                      ? 'bg-[#16A34A] text-white shadow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Leaf className="w-3.5 h-3.5" />
                  Eco Audits
                </button>
                <button
                  onClick={() => setSelectedSpec('responsive')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedSpec === 'responsive'
                      ? 'bg-[#075985] text-white shadow'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  Viewport Mode
                </button>
              </div>
            </div>

            {/* Spec Details Render */}
            <div className="pt-8">
              {selectedSpec === 'fast' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl bg-[#F5FFF9] border border-[#16A34A]/20">
                      <div className="text-3xl font-black text-[#087FCE]">320ms</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Time to First Byte (TTFB)</div>
                      <p className="text-xs text-slate-500 mt-2">Edge routed from the nearest point of presence without routing hops.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#F5FFF9] border border-[#16A34A]/20">
                      <div className="text-3xl font-black text-[#075985]">0.38s</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">First Contentful Paint</div>
                      <p className="text-xs text-slate-500 mt-2">Zero blocking stylesheets or synchronous third-party tags.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#F5FFF9] border border-[#16A34A]/20">
                      <div className="text-3xl font-black text-[#16A34A]">60 FPS</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Scroll & Hover Fidelity</div>
                      <p className="text-xs text-slate-500 mt-2">Jank-free composited GPU layers across complex interactive components.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#F5FFF9] border border-[#16A34A]/20">
                      <div className="text-3xl font-black text-[#087FCE]">100/100</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Best Practices Score</div>
                      <p className="text-xs text-slate-500 mt-2">Strict Content Security Policy and modern compression headers.</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/60 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#087FCE]/10 text-[#087FCE] flex items-center justify-center">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Automated Code Splitting & Modern Bundling</h4>
                        <p className="text-xs text-slate-500">Only the precise JavaScript executed on each page is loaded by user clients.</p>
                      </div>
                    </div>
                    <button
                      onClick={onOpenModal}
                      className="px-5 py-2.5 rounded-xl bg-[#087FCE] text-white text-xs font-bold hover:bg-[#075985] transition-colors whitespace-nowrap"
                    >
                      Audit Your Current Stack
                    </button>
                  </div>
                </div>
              )}

              {selectedSpec === 'eco' && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl bg-[#F5FFF9] border border-[#16A34A]/20">
                      <div className="text-3xl font-black text-[#16A34A]">0.12g</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">CO₂e Per Page Impression</div>
                      <p className="text-xs text-slate-500 mt-2">Over 85% below the international industry benchmark of 1.76 grams.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#F5FFF9] border border-[#16A34A]/20">
                      <div className="text-3xl font-black text-[#075985]">ISO 14001</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Environmental Standards</div>
                      <p className="text-xs text-slate-500 mt-2">Verified environmental management systems across our hosting infrastructure.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#F5FFF9] border border-[#16A34A]/20">
                      <div className="text-3xl font-black text-[#087FCE]">A+ Rating</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Website Carbon Index</div>
                      <p className="text-xs text-slate-500 mt-2">Certified in top 5% of all scanned modern web platforms worldwide.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#F5FFF9] border border-[#16A34A]/20">
                      <div className="text-3xl font-black text-[#16A34A]">-64%</div>
                      <div className="text-xs font-bold text-slate-800 mt-1">Client Battery Consumption</div>
                      <p className="text-xs text-slate-500 mt-2">Clean render loops prevent mobile thermal throttling and battery drain.</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-slate-100 bg-[#F5FFF9]/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center">
                        <Server className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Carbon-Aware Execution Scheduling</h4>
                        <p className="text-xs text-slate-500">Dynamic compute workloads adapt based on regional renewable grid capacity.</p>
                      </div>
                    </div>
                    <button
                      onClick={onOpenModal}
                      className="px-5 py-2.5 rounded-xl bg-[#16A34A] text-white text-xs font-bold hover:bg-emerald-700 transition-colors whitespace-nowrap"
                    >
                      Request Sustainability Certification
                    </button>
                  </div>
                </div>
              )}

              {selectedSpec === 'responsive' && (
                <div className="space-y-6">
                  {/* Device toggle simulator */}
                  <div className="flex items-center justify-center gap-3 pb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase">Simulate Canvas:</span>
                    <button
                      onClick={() => setInteractiveDevices('desktop')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        interactiveDevices === 'desktop'
                          ? 'bg-[#075985] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Desktop (1440px)
                    </button>
                    <button
                      onClick={() => setInteractiveDevices('tablet')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        interactiveDevices === 'tablet'
                          ? 'bg-[#075985] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Tablet (768px)
                    </button>
                    <button
                      onClick={() => setInteractiveDevices('mobile')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        interactiveDevices === 'mobile'
                          ? 'bg-[#075985] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      Mobile (375px)
                    </button>
                  </div>

                  {/* Responsive Frame Preview */}
                  <div className="flex justify-center bg-slate-100 p-6 rounded-2xl border border-slate-200 transition-all">
                    <div
                      className={`bg-white rounded-xl shadow-lg border border-slate-300 p-6 transition-all duration-300 overflow-hidden ${
                        interactiveDevices === 'desktop'
                          ? 'w-full max-w-3xl'
                          : interactiveDevices === 'tablet'
                          ? 'w-[480px]'
                          : 'w-[280px]'
                      }`}
                    >
                      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">
                          {interactiveDevices === 'desktop' && '1440 × 900 Viewport (Desktop Wide)'}
                          {interactiveDevices === 'tablet' && '768 × 1024 Viewport (Tablet Adaptive)'}
                          {interactiveDevices === 'mobile' && '375 × 812 Viewport (Mobile Fluid)'}
                        </span>
                      </div>

                      <div className="mt-4 space-y-3">
                        <div className="h-6 bg-[#087FCE]/20 rounded-md w-3/4" />
                        <div className="h-3 bg-slate-200 rounded-md w-full" />
                        <div className="h-3 bg-slate-200 rounded-md w-5/6" />

                        <div className={`grid gap-3 pt-3 ${
                          interactiveDevices === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'
                        }`}>
                          <div className="h-16 bg-[#F5FFF9] border border-[#16A34A]/30 rounded-lg p-2 flex flex-col justify-center items-center">
                            <span className="text-[10px] font-bold text-[#16A34A]">Auto-Wrap</span>
                          </div>
                          <div className="h-16 bg-[#F5FFF9] border border-[#087FCE]/30 rounded-lg p-2 flex flex-col justify-center items-center">
                            <span className="text-[10px] font-bold text-[#087FCE]">Fluid Clamp</span>
                          </div>
                          <div className="h-16 bg-[#F5FFF9] border border-[#075985]/30 rounded-lg p-2 flex flex-col justify-center items-center">
                            <span className="text-[10px] font-bold text-[#075985]">Touch 48px</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-xs text-slate-500">
                    No layout jitter, no horizontal scroll overflows, and zero touch interference.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Feature CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#075985] to-[#087FCE] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to build on this stack?</h3>
              <p className="text-white/80 text-sm mt-1 max-w-xl">
                Experience the combination of high velocity, low carbon footprints, and adaptive device ergonomics.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
              <button
                onClick={onOpenModal}
                className="px-6 py-3 rounded-xl bg-white text-[#075985] font-bold text-sm hover:bg-[#F5FFF9] transition-all shadow-md"
              >
                Get Started
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl border border-white/40 text-white font-bold text-sm hover:bg-white/10 transition-all"
              >
                Inquire Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
