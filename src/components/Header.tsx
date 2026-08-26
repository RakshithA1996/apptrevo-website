import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";
import { nav } from "../data/content";
import useScrollSpy from "../hooks/useScrollSpy";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const sectionIds = useMemo(() => nav.map((item) => item.href.replace("#", "")), []);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      const activeEl = linkRefs.current[activeId];
      const navEl = navRef.current;
      if (!activeEl || !navEl) {
        setIndicator((prev) => ({ ...prev, ready: false }));
        return;
      }
      const navRect = navEl.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setIndicator({ left: linkRect.left - navRect.left, width: linkRect.width, ready: true });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeId]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <Logo className="h-7 w-7 transition-transform duration-300 group-hover:rotate-[8deg]" />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Apptrevo
          </span>
        </a>

        <nav ref={navRef} className="relative hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={item.href}
                ref={(el) => {
                  linkRefs.current[id] = el;
                }}
                href={item.href}
                className={`font-body text-sm transition-colors ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <span
            className="pointer-events-none absolute -bottom-2 h-[2px] rounded-full bg-teal transition-all duration-300 ease-out"
            style={{
              left: indicator.left,
              width: indicator.width,
              opacity: indicator.ready ? 1 : 0,
            }}
          />
        </nav>

        <MagneticButton
          href="#contact"
          strength={0.25}
          className="rounded-full border border-teal/40 px-4 py-2 font-body text-sm font-medium text-teal hover:border-teal hover:bg-teal/10"
        >
          Start a project
        </MagneticButton>
      </div>
    </header>
  );
}
