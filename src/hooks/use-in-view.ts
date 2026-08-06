import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number | number[];
  margin?: string;
  once?: boolean;
}

export function useInView({
  threshold = 0.1,
  margin = "0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const isElementInViewport = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;

      return (
        rect.top < viewportHeight &&
        rect.bottom > 0 &&
        rect.left < viewportWidth &&
        rect.right > 0
      );
    };

    if (once && isElementInViewport()) {
      setIsInView(true);
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin: margin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, margin, once]);

  return { ref, isInView };
}
