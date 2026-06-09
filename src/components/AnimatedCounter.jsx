import { useEffect, useRef, useState } from 'react';

const formatter = new Intl.NumberFormat('en-IN');

export function AnimatedCounter({ value, suffix = '', decimals = 0 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let raf = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const duration = 1500;

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setDisplay(value * eased);
          if (progress < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  const rendered = decimals > 0 ? display.toFixed(decimals) : formatter.format(Math.round(display));

  return (
    <span ref={ref}>
      {rendered}
      {suffix}
    </span>
  );
}
