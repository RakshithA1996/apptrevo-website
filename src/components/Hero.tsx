import { useRef, useState, type PointerEvent } from "react";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [spot, setSpot] = useState({ x: 50, y: 40 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();

  const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    if (reduced || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    setSpot({ x: px, y: py });
    setTilt({ x: (px - 50) / 50, y: (py - 50) / 50 });
  };

  const handlePointerLeave = () => {
    setSpot({ x: 50, y: 40 });
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative overflow-hidden bg-navy pb-24 pt-40 text-white md:pb-32 md:pt-48"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(245,246,250,0.09) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-navy-light blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 transition-[background] duration-500 ease-out"
        style={{
          background: `radial-gradient(500px circle at ${spot.x}% ${spot.y}%, rgba(45,212,191,0.14), transparent 60%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-content flex-col gap-14 px-6 md:flex-row md:items-center">
        <div className="max-w-xl animate-fade-up">
          <p className="eyebrow mb-6">Cloud · Connected Devices · Enterprise Frontend</p>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Engineering
            <br />
            that connects.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            A full-stack engineering studio built around three disciplines that rarely
            live under one roof: production-grade cloud infrastructure, connected-device
            integration, and enterprise-scale frontend delivery.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#contact"
              className="rounded-full bg-teal px-6 py-3 font-body text-sm font-semibold text-navy hover:bg-teal-dark"
            >
              Start a project
            </MagneticButton>
            <MagneticButton
              href="#capabilities"
              strength={0.2}
              className="rounded-full border border-white/20 px-6 py-3 font-body text-sm font-medium text-white/85 hover:border-white/40"
            >
              See what we build
            </MagneticButton>
          </div>
        </div>

        <div
          className="relative mx-auto flex h-64 w-64 items-center justify-center md:h-80 md:w-80"
          aria-hidden="true"
        >
          <div
            className="transition-transform duration-300 ease-out"
            style={
              reduced
                ? undefined
                : { transform: `translate(${tilt.x * 10}px, ${tilt.y * 10}px) rotate(${tilt.x * 4}deg)` }
            }
          >
            <Logo className="h-full w-full drop-shadow-[0_0_60px_rgba(45,212,191,0.15)]" animated />
          </div>
        </div>
      </div>

      <a
        href="#capabilities"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-white/70 md:flex"
        aria-label="Scroll to capabilities"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          style={{ animation: reduced ? undefined : "chevron-float 2s ease-in-out infinite" }}
        >
          <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M1 9L7 15L13 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        </svg>
      </a>
    </section>
  );
}
