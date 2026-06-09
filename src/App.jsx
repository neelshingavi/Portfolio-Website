import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import {
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Send,
  ServerCog,
  Trophy,
} from 'lucide-react';
import { AnimatedCounter } from './components/AnimatedCounter.jsx';
import { Reveal } from './components/Reveal.jsx';
import { SkillBadge } from './components/SkillBadge.jsx';
import { useTypeCycle } from './hooks/useTypeCycle.js';
import { achievements, education, experience, heroRoles, profile, projects, skills, stats } from './data/portfolio.js';

const navItems = ['work', 'systems', 'wins', 'contact'];
const iconMap = [Database, ServerCog, Braces, Rocket];
const BackgroundScene = lazy(() =>
  import('./components/BackgroundScene.jsx').then((module) => ({ default: module.BackgroundScene })),
);

function App() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const heroText = useTypeCycle(heroRoles);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 34, restDelta: 0.001 });

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return undefined;

    // Outer ring follows with smooth spring-like delay
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power2.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power2.out' });

    // Inner dot follows mouse position almost instantly
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });

    const handleMouseMove = (e) => {
      ringX(e.clientX);
      ringY(e.clientY);
      dotX(e.clientX);
      dotY(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [role="button"], .skill-badge, .project-card, .metric-item, .trophy-card');
      if (target) {
        let color = '#bff205'; // default lime
        if (target.classList.contains('coral') || target.closest('.coral')) color = '#ff6b6b';
        else if (target.classList.contains('teal') || target.closest('.teal')) color = '#00e5ff';
        else if (target.classList.contains('gold') || target.closest('.gold')) color = '#fbc02d';
        else if (target.getAttribute('style')?.includes('--hover-color')) {
          const match = target.getAttribute('style').match(/--hover-color:\s*([^;]+)/);
          if (match) color = match[1].trim();
        }

        gsap.to(ring, {
          scale: 1.8,
          borderColor: color,
          backgroundColor: color.startsWith('#') ? `${color}15` : 'rgba(191, 242, 5, 0.08)',
          borderWidth: '2px',
          duration: 0.2,
        });
        gsap.to(dot, {
          scale: 0.4,
          backgroundColor: color,
          duration: 0.2,
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, [role="button"], .skill-badge, .project-card, .metric-item, .trophy-card');
      if (target) {
        gsap.to(ring, {
          scale: 1,
          borderColor: 'rgba(191, 242, 5, 0.65)',
          backgroundColor: 'transparent',
          borderWidth: '1px',
          duration: 0.25,
        });
        gsap.to(dot, {
          scale: 1,
          backgroundColor: '#bff205',
          duration: 0.25,
        });
      }
    };

    window.addEventListener('pointermove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('pointermove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -50% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Suspense fallback={null}>
        <BackgroundScene />
      </Suspense>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Go to top">
          <span>NS</span>
          <small>Product Engineer</small>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={activeSection === item ? 'active' : ''}
            >
              {item}
            </a>
          ))}
        </nav>
        <a className="header-action" href={profile.resume} target="_blank" rel="noreferrer">
          <Download size={17} />
          Resume
        </a>
      </header>

      <main id="top">
        <section className="hero-section section-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {profile.title}
            </motion.p>
            <motion.h1
              id="hero-title"
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              Neel Shingavi
            </motion.h1>
            <motion.div
              className="type-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              <Code2 size={19} />
              <span>{heroText}</span>
              <i />
            </motion.div>
            <motion.p
              className="hero-summary"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.75 }}
            >
              {profile.summary}
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <a className="primary-action" href="#work">
                View shipped work
                <ArrowUpRight size={18} />
              </a>
              <a className="secondary-action" href={`mailto:${profile.email}`}>
                <Send size={18} />
                Start a conversation
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-portrait"
            initial={{ opacity: 0, scale: 0.96, y: 34 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={profile.photo} alt="Neel Shingavi" />
            <div className="portrait-scan" />
            <div className="portrait-tag tag-one">LLM + SQL</div>
            <div className="portrait-tag tag-two">Java Systems</div>
            <div className="portrait-tag tag-three">Client Delivery</div>
          </motion.div>

          <motion.aside
            className="hero-terminal"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.75 }}
            aria-label="Current focus"
          >
            <span>current_signal.log</span>
            <p>Building reliable software where backend architecture, AI, and real business workflows meet.</p>
            <div>
              <MapPin size={16} />
              {profile.location}
            </div>
          </motion.aside>
        </section>

        <section className="metric-strip" aria-label="Portfolio metrics">
          {stats.map((stat) => (
            <div className={`metric-item ${stat.accent}`} key={stat.label}>
              <strong>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section className="about-section section-shell" id="systems">
          <Reveal className="section-heading">
            <p className="eyebrow">Builder profile</p>
            <h2>Software that moves from idea to production.</h2>
          </Reveal>
          <div className="about-grid">
            <Reveal className="about-copy">
              <p>
                I work closest to backend systems, data products, and practical AI. The pattern across my projects is
                simple: understand the workflow, design the architecture, ship the product, and make sure real users can
                depend on it.
              </p>
              <p>
                That shows up in QueryPilot analyzing large transaction datasets, TradersDesk running daily broker
                workflows, and CertiCraft automating event operations with QR validation and email distribution.
              </p>
            </Reveal>

            <div className="system-grid">
              {['Backend Architecture', 'LLM Analytics', 'Workflow Automation', 'Client Delivery'].map((item, index) => {
                const Icon = iconMap[index];
                return (
                  <Reveal className="system-tile" delay={index * 0.08} key={item}>
                    <Icon size={24} />
                    <span>{item}</span>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="experience-section section-shell">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">Experience</p>
              <h2>Client work with production pressure.</h2>
            </div>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              Download full resume
              <Download size={17} />
            </a>
          </Reveal>

          <div className="timeline-layout">
            <div className="timeline-column">
              {experience.map((item) => (
                <Reveal className="timeline-block" key={item.company}>
                  <span>{item.period}</span>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
            <div className="education-column">
              {education.map((item, index) => (
                <Reveal className="education-item" delay={index * 0.08} key={item.school}>
                  <span>{item.period}</span>
                  <h3>{item.school}</h3>
                  <p>{item.course}</p>
                  <strong>{item.result}</strong>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <Reveal className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Projects built around measurable outcomes.</h2>
          </Reveal>

          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal className={`project-card ${project.color}`} delay={index * 0.07} key={project.name}>
                <div className="project-index">0{index + 1}</div>
                <div>
                  <span>{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="impact-list">
                  {project.impact.map((item) => (
                    <strong key={item}>{item}</strong>
                  ))}
                </div>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <em key={item}>{item}</em>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="skills-section section-shell">
          <Reveal className="section-heading">
            <p className="eyebrow">Stack architecture</p>
            <h2>The tools behind the shipped work.</h2>
          </Reveal>
          <div className="skills-board">
            {skills.map((group, index) => (
              <Reveal className="skill-group" delay={index * 0.06} key={group.label}>
                <h3>{group.label}</h3>
                <div>
                  {group.items.map((item) => (
                    <SkillBadge key={item} name={item} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="wins-section section-shell" id="wins">
          <Reveal className="section-heading split-heading">
            <div>
              <p className="eyebrow">Competitive proof</p>
              <h2>Hackathon signal, national scale.</h2>
            </div>
            <div className="trophy-pill">
              <Trophy size={18} />
              5 major recognitions
            </div>
          </Reveal>

          <div className="signal-map">
            {achievements.map((achievement, index) => (
              <Reveal className={`signal-node ${achievement.tone}`} delay={index * 0.08} key={achievement.title}>
                <span>0{index + 1}</span>
                <h3>{achievement.title}</h3>
                <p>{achievement.detail}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <Reveal className="contact-panel">
            <p className="eyebrow">Contact</p>
            <h2>Have a hard problem, a product idea, or a team that ships?</h2>
            <p>{profile.availability}</p>
            <div className="contact-actions">
              <a className="primary-action" href={`mailto:${profile.email}`}>
                <Mail size={18} />
                {profile.email}
              </a>
              <a className="secondary-action" href={`tel:${profile.phone.replaceAll(' ', '')}`}>
                <Phone size={18} />
                {profile.phone}
              </a>
            </div>
            <div className="social-row">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <ExternalLink size={19} />
                LinkedIn
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <ExternalLink size={19} />
                GitHub
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <span>Designed and built for Neel Shingavi.</span>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}

export default App;
