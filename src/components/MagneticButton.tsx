import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  strength?: number;
}

/**
 * A CTA that leans gently toward the cursor on hover, then springs back.
 * Disabled entirely under prefers-reduced-motion.
 */
export default function MagneticButton({
  href,
  children,
  className = "",
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: relX * strength, y: relY * strength });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block transition-all duration-200 ease-out will-change-transform ${className}`}
      style={reduced ? undefined : { transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      {children}
    </a>
  );
}
