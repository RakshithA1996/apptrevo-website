import { useEffect, useRef, useState } from "react";

interface Options {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Returns a ref to attach to any element, plus whether it's currently
 * in the viewport. Used to drive scroll-triggered reveals and the
 * capability-node connector animation.
 */
export default function useInView<T extends HTMLElement>({
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  triggerOnce = true,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView } as const;
}
