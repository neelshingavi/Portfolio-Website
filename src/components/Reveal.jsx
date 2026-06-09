import { m, useReducedMotion } from 'framer-motion';

export function Reveal({ as = 'div', children, className = '', delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();
  const Component = m[as] ?? m.div;

  return (
    <Component
      className={className}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{
        duration: prefersReducedMotion ? 0.01 : 0.75,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </Component>
  );
}
