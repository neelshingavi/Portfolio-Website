import { useState, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Systems', href: '#systems' },
  { label: 'Wins', href: '#wins' },
  { label: 'Contact', href: '#contact' },
];

export function MobileNav({ activeSection }) {
  const [open, setOpen] = useState(false);

  // Close on route change / section click
  const handleNavClick = () => setOpen(false);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* Hamburger trigger button */}
      <button
        className="mobile-nav-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-drawer"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay + Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <m.div
              className="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <m.nav
              id="mobile-nav-drawer"
              className="mobile-nav-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              aria-label="Mobile navigation"
            >
              <div className="mobile-nav-header">
                <span>Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>

              <ul className="mobile-nav-list">
                {navItems.map((item, i) => (
                  <m.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <a
                      href={item.href}
                      className={activeSection === item.label.toLowerCase() ? 'active' : ''}
                      onClick={handleNavClick}
                    >
                      <span className="mobile-nav-index">0{i + 1}</span>
                      {item.label}
                    </a>
                  </m.li>
                ))}
              </ul>

              <div className="mobile-nav-footer">
                <a href="/assets/neel-shingavi-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume →
                </a>
              </div>
            </m.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
