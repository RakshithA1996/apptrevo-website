import type { ReactNode } from "react";
import useInView from "../hooks/useInView";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Wraps any block with a scroll-triggered fade-up. Pass `delay` (ms) to
 * stagger a group of siblings. Falls back to a plain, always-visible
 * render when the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
