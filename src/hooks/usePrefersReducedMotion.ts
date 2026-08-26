import { useEffect, useState } from "react";

/**
 * Tracks the user's prefers-reduced-motion setting so JS-driven effects
 * (parallax, magnetic buttons, cursor spotlight) can be skipped — CSS
 * animations/transitions are already handled globally in index.css.
 */
export default function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
