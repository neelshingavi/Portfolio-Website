import { motion } from 'framer-motion';

export function Reveal({ as = 'div', children, className = '', delay = 0 }) {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
