import React, { useEffect, useState, useRef } from 'react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  radius: number;
  color: string;
  strokeColor: string;
  opacity: number;
  vx: number;
  vy: number;
  wobbleSpeed: number;
  wobbleOffset: number;
  life: number;
  maxLife: number;
}

interface SplashDroplet {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
}

interface WaterRipple {
  id: number;
  x: number;
  y: number;
  maxRadius: number;
  color: string;
}

export const CursorEffects: React.FC = () => {
  const [enabled, setEnabled] = useState<boolean>(true);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [cursorHovered, setCursorHovered] = useState<boolean>(false);
  const [cursorClicked, setCursorClicked] = useState<boolean>(false);
  const [hoverType, setHoverType] = useState<'button' | 'link' | 'card' | 'input' | null>(null);

  // Position references for fluid physics lerping
  const mousePos = useRef({ x: -100, y: -100 });
  const prevMousePos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });
  const ringRef = useRef<HTMLDivElement>(null);
  const dropletRef = useRef<HTMLDivElement>(null);
  const causticRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<WaterRipple[]>([]);
  const bubblesRef = useRef<Bubble[]>([]);
  const splashDropletsRef = useRef<SplashDroplet[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Detect touch-only device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    let animationFrameId: number;
    let bubbleIdCounter = 0;
    let lastBubbleTime = 0;
    let lastWakeTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Update ambient underwater caustic glow pool
      if (causticRef.current) {
        causticRef.current.style.transform = `translate3d(${e.clientX - 260}px, ${e.clientY - 260}px, 0)`;
      }

      // Calculate speed for water wake
      const dx = e.clientX - prevMousePos.current.x;
      const dy = e.clientY - prevMousePos.current.y;
      const speed = Math.hypot(dx, dy);
      prevMousePos.current = { x: e.clientX, y: e.clientY };

      const now = performance.now();

      // Emit buoyant translucent green water bubbles on movement
      if (enabled && now - lastBubbleTime > 40) {
        lastBubbleTime = now;
        const emeraldShades = [
          { fill: 'rgba(167, 243, 208, 0.22)', stroke: 'rgba(52, 211, 153, 0.75)' },
          { fill: 'rgba(110, 231, 183, 0.25)', stroke: 'rgba(16, 185, 129, 0.85)' },
          { fill: 'rgba(209, 250, 229, 0.3)', stroke: 'rgba(5, 150, 105, 0.7)' },
          { fill: 'rgba(52, 211, 153, 0.2)', stroke: 'rgba(16, 185, 129, 0.9)' },
        ];
        const shade = emeraldShades[Math.floor(Math.random() * emeraldShades.length)];
        const baseRadius = Math.random() * 4 + 2.5;

        bubblesRef.current.push({
          id: bubbleIdCounter++,
          x: e.clientX + (Math.random() * 12 - 6),
          y: e.clientY + (Math.random() * 12 - 6),
          radius: baseRadius,
          color: shade.fill,
          strokeColor: shade.stroke,
          opacity: 0.85,
          vx: (Math.random() - 0.5) * 0.9,
          vy: -(Math.random() * 1.1 + 0.5), // Buoyancy: rises naturally in water
          wobbleSpeed: Math.random() * 0.05 + 0.03,
          wobbleOffset: Math.random() * Math.PI * 2,
          life: 0,
          maxLife: Math.random() * 45 + 35,
        });

        if (bubblesRef.current.length > 35) {
          bubblesRef.current.shift();
        }
      }

      // Emit gentle water wake ripples when surfing fast through the page
      if (enabled && speed > 22 && now - lastWakeTime > 160) {
        lastWakeTime = now;
        const wakeRipple: WaterRipple = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          maxRadius: Math.min(speed * 1.5, 45),
          color: 'rgba(52, 211, 153, 0.6)',
        };
        setRipples((prev) => [...prev.slice(-5), wakeRipple]);
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== wakeRipple.id));
        }, 850);
      }

      // Check hovered interactive elements for surface tension bloom
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactiveEl = target.closest(
          'button, a, input, select, textarea, [role="button"], [role="tab"], .hover-interactive'
        );
        if (interactiveEl) {
          setCursorHovered(true);
          if (interactiveEl.tagName === 'BUTTON' || interactiveEl.getAttribute('role') === 'button') {
            setHoverType('button');
          } else if (interactiveEl.tagName === 'A') {
            setHoverType('link');
          } else if (interactiveEl.tagName === 'INPUT' || interactiveEl.tagName === 'TEXTAREA' || interactiveEl.tagName === 'SELECT') {
            setHoverType('input');
          } else {
            setHoverType('card');
          }
        } else {
          setCursorHovered(false);
          setHoverType(null);
        }
      }
    };

    // Click triggers an emerald water splash with concentric rings & droplet beads
    const handleMouseDown = (e: MouseEvent) => {
      setCursorClicked(true);

      // 1. Concentric water ripples (expanding waves)
      const now = Date.now();
      const wave1: WaterRipple = { id: now, x: e.clientX, y: e.clientY, maxRadius: 55, color: 'rgba(16, 185, 129, 0.85)' };
      const wave2: WaterRipple = { id: now + 1, x: e.clientX, y: e.clientY, maxRadius: 40, color: 'rgba(52, 211, 153, 0.7)' };
      setRipples((prev) => [...prev.slice(-4), wave1, wave2]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== wave1.id && r.id !== wave2.id));
      }, 900);

      // 2. Physical water splash droplets flying out in a circle
      const splashCount = 8;
      for (let i = 0; i < splashCount; i++) {
        const angle = (Math.PI * 2 * i) / splashCount + (Math.random() * 0.4 - 0.2);
        const force = Math.random() * 3.5 + 2;
        splashDropletsRef.current.push({
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * force,
          vy: Math.sin(angle) * force - 0.8,
          radius: Math.random() * 2.8 + 1.8,
          opacity: 0.95,
          color: Math.random() > 0.5 ? '#10b981' : '#34d399',
        });
      }
    };

    const handleMouseUp = () => {
      setCursorClicked(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Canvas resize handler
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Main animation loop for water bubble float & splash physics
    const renderLoop = () => {
      // Fluid lerp follower (simulating liquid drag)
      const fluidDrag = 0.16;
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * fluidDrag;
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * fluidDrag;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${followerPos.current.x}px, ${followerPos.current.y}px, 0)`;
      }

      if (dropletRef.current) {
        dropletRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Render Green Water Bubbles & Splash Droplets on Canvas
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // 1. Render Floating Translucent Water Bubbles
        for (let i = bubblesRef.current.length - 1; i >= 0; i--) {
          const b = bubblesRef.current[i];
          b.life += 1;
          b.y += b.vy;
          // Sinusoidal lateral wobble like real air/water bubbles
          b.x += b.vx + Math.sin(b.life * b.wobbleSpeed + b.wobbleOffset) * 0.45;
          b.opacity = 1 - b.life / b.maxLife;

          if (b.life >= b.maxLife || b.y < 0) {
            bubblesRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          // Draw translucent watery bubble body
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
          ctx.fillStyle = b.color;
          ctx.globalAlpha = b.opacity * 0.7;
          ctx.fill();

          // Draw emerald water bubble contour
          ctx.strokeStyle = b.strokeColor;
          ctx.lineWidth = 1.2;
          ctx.globalAlpha = b.opacity * 0.9;
          ctx.stroke();

          // Draw specular water reflection highlight (white shiny arc in top-left)
          ctx.beginPath();
          ctx.arc(
            b.x - b.radius * 0.35,
            b.y - b.radius * 0.35,
            b.radius * 0.35,
            Math.PI * 0.9,
            Math.PI * 1.6
          );
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Tiny secondary specular bottom-right reflection bead
          ctx.beginPath();
          ctx.arc(
            b.x + b.radius * 0.35,
            b.y + b.radius * 0.35,
            Math.max(b.radius * 0.15, 0.6),
            0,
            Math.PI * 2
          );
          ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
          ctx.fill();

          ctx.restore();
        }

        // 2. Render Splash Droplets
        for (let i = splashDropletsRef.current.length - 1; i >= 0; i--) {
          const s = splashDropletsRef.current[i];
          s.x += s.vx;
          s.y += s.vy;
          s.vy += 0.12; // Gravity pulling splash droplets back down
          s.vx *= 0.96; // Air drag
          s.opacity -= 0.024;
          s.radius *= 0.97;

          if (s.opacity <= 0 || s.radius < 0.5) {
            splashDropletsRef.current.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = s.opacity;
          ctx.shadowBlur = 6;
          ctx.shadowColor = '#10b981';
          ctx.fill();

          // Specular white dot for droplet bead
          ctx.beginPath();
          ctx.arc(s.x - s.radius * 0.3, s.y - s.radius * 0.3, s.radius * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (isTouchDevice || !enabled) {
    return (
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setEnabled(true)}
          className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-emerald-200 text-[11px] font-semibold text-emerald-800 hover:bg-[#F5FFF9] shadow-sm flex items-center gap-1.5 transition-all"
          title="Enable Green Water cursor effects"
        >
          <span className="w-2 h-2 rounded-full bg-slate-300" />
          <span>Water FX: Off</span>
        </button>
      </div>
    );
  }

  return (
    <>
      {/* 1. Ambient Green Lagoon & Caustic Water Glow */}
      <div
        ref={causticRef}
        className="pointer-events-none fixed top-0 left-0 w-[520px] h-[520px] rounded-full blur-3xl z-10 opacity-70 transition-opacity duration-300"
        style={{
          willChange: 'transform',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(52, 211, 153, 0.09) 38%, rgba(5, 150, 105, 0.03) 65%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* 2. Water Bubbles & Aquatic Wake Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-30"
        aria-hidden="true"
      />

      {/* 3. Fluid Pond / Water Surface Tension Follower Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-40 -mt-6 -ml-6 transition-[width,height,border-color,background-color,transform] duration-200 ease-out"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <div
          className={`animate-water-droplet border transition-all duration-300 flex items-center justify-center relative ${
            cursorClicked
              ? 'w-9 h-9 scale-90 border-[#10b981] bg-[#10b981]/25 shadow-[0_0_18px_rgba(16,185,129,0.5)]'
              : cursorHovered
              ? hoverType === 'button'
                ? 'w-16 h-16 -translate-x-2 -translate-y-2 border-[#10b981] bg-[#10b981]/15 shadow-[0_0_24px_rgba(16,185,129,0.45)]'
                : 'w-14 h-14 -translate-x-1 -translate-y-1 border-[#34d399] bg-[#34d399]/15 shadow-[0_0_18px_rgba(52,211,153,0.35)]'
              : 'w-12 h-12 border-[#10b981]/60 bg-[#10b981]/10 shadow-[0_0_12px_rgba(16,185,129,0.25)]'
          }`}
        >
          {/* Subtle concentric inner water ripple ring */}
          <span className="w-6 h-6 rounded-full border border-[#34d399]/40 animate-ping opacity-40 pointer-events-none" />
        </div>
      </div>

      {/* 4. Sparkling 3D Green Water Droplet (Inner Cursor) */}
      <div
        ref={dropletRef}
        className="pointer-events-none fixed top-0 left-0 z-50 -mt-2 -ml-2 transition-transform duration-75"
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <div
          className={`relative rounded-full transition-all duration-150 shadow-[0_3px_12px_rgba(16,185,129,0.5)] ${
            cursorClicked
              ? 'w-5 h-3.5 scale-x-125 scale-y-75 bg-gradient-to-br from-[#6ee7b7] via-[#10b981] to-[#047857]'
              : cursorHovered
              ? 'w-3.5 h-3.5 bg-gradient-to-br from-[#a7f3d0] via-[#10b981] to-[#059669] scale-110'
              : 'w-4 h-4 bg-gradient-to-br from-[#6ee7b7] via-[#10b981] to-[#047857]'
          }`}
        >
          {/* 3D Liquid Specular Reflection Crescent */}
          <span className="absolute top-0.5 left-0.5 w-1.5 h-1.5 rounded-full bg-white/90 shadow-sm pointer-events-none" />
          <span className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 rounded-full bg-emerald-200/80 pointer-events-none" />
        </div>
      </div>

      {/* 5. Expanding Water Ripples on Movement & Clicks */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="pointer-events-none fixed z-20 rounded-full animate-water-ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.maxRadius * 2,
            height: ripple.maxRadius * 2,
            marginTop: -ripple.maxRadius,
            marginLeft: -ripple.maxRadius,
            border: `2px solid ${ripple.color}`,
            boxShadow: `0 0 15px ${ripple.color}`,
          }}
          aria-hidden="true"
        />
      ))}

      {/* 6. Green Water Theme Control Badge in bottom corner */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setEnabled(false)}
          className="group px-3 py-1.5 rounded-full bg-white/95 hover:bg-[#F5FFF9] backdrop-blur-md border border-emerald-300 text-[11px] font-semibold text-emerald-800 shadow-md flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
          title="Toggle green water ripple and bubble cursor"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
          </span>
          <span className="flex items-center gap-1">
            <span className="text-xs">💧</span>
            <span>Green Water FX: On</span>
          </span>
        </button>
      </div>
    </>
  );
};
