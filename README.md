# 🌌 Neel Shingavi — Portfolio Website

A high-performance, responsive React portfolio website showcasing production backend systems, AI analytics platforms, and client-ready applications. Built with React 19, Vite, and styled with high-fidelity custom CSS using animations powered by Framer Motion, GSAP, and Three.js.

---

## 🚀 Key Features

* **Interactive WebGL Background:** Implemented using Three.js for a performant, immersive canvas background.
* **Fluid Animations:** Orchestrated with GSAP and Framer Motion for smooth transitions, reveals, and interactive elements.
* **Google Analytics 4 (GA4) Integration:** Privacy-first event-based tracking (IP anonymization, cookie-less) for custom visitor actions (e.g., resumes downloaded, contact form submissions, sections reached).
* **Fully Responsive UI:** Carefully crafted design scales seamlessly across desktop, tablet, and mobile screens.
* **Web Vitals & Performance Audited:** Optimized image preloading (using AVIF/WebP formats), deferring non-critical scripts, and achieving low Cumulative Layout Shift (CLS) and fast Largest Contentful Paint (LCP).
* **Robust Contact System:** Seamless client-side forms connected to contact logic using Web3Forms.

---

## 🛠️ Tech Stack & Tools

* **Core:** React 19, Vite, JavaScript (ES Modules)
* **Styling:** Custom CSS (sleek dark mode, custom typography tokens, fluid grid layouts)
* **Animations:** Three.js, GSAP, Framer Motion
* **Analytics:** Google Analytics 4 (GA4) & Vercel Web Analytics
* **Performance:** Sharp (automated image compression scripts)
* **Form Handling:** Web3Forms integration

---

## 📦 Project Structure

```
Portfolio/
├── public/                 # Static assets (Favicons, Resumes, Manifests)
├── scripts/                # Optimization scripts (e.g. sharp image compressor)
├── src/
│   ├── components/         # Reusable UI components (ContactForm, MobileNav, SkillBadge, etc.)
│   ├── data/               # Centralized data files (portfolio projects, education, stats)
│   ├── hooks/              # Custom React hooks (WebGL availability check, typing animations)
│   ├── utils/              # Helper modules (Analytics tracking, contact handlers, Web Vitals metrics)
│   ├── App.jsx             # App layout and primary sections
│   ├── main.jsx            # Application entrypoint
│   └── styles.css          # Main stylesheet with layout and component definitions
├── eslint.config.js        # Linting configuration
├── vercel.json             # Security headers, CSP & rewrite configuration for Vercel deployment
└── vite.config.js          # Vite compilation & server options
```

---

## ⚙️ Setup & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### 1. Clone the repository
```bash
git clone https://github.com/neelshingavi/Portfolio-Website.git
cd Portfolio-Website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and specify your Web3Forms Access Key and Google Analytics ID:

```env
# Web3Forms API Key for contact form submissions
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here

# Google Analytics Measurement ID (e.g. G-XXXXXXXXXX)
VITE_GA_MEASUREMENT_ID=your_ga_measurement_id_here
```

### 4. Running locally
Launch the Vite development server:
```bash
npm run dev
```
By default, the application runs on [http://localhost:5173/](http://localhost:5173/).

---

## 🔨 Build & Deploy

### Production Build
To build the static application assets for hosting:
```bash
npm run build
```
This generates a production-optimized bundle inside the `dist/` directory.

### Local Preview
Preview the production build locally:
```bash
npm run preview
```

### Image Optimization
To optimize and compress source portfolio images before pushing to production:
```bash
npm run optimize-images
```

---

## 🔒 Security & Deployment Headers
Deployment configurations are optimized for Vercel deployment inside the [vercel.json](file:///Users/macbook/Desktop/Potfolio/vercel.json) file:
* **CSP Headers:** Restricts scripts, styles, and iframe origins to prevent XSS.
* **Privacy Controls:** Strict Referrer-Policy and restricted Permissions-Policy.
* **Performance Headers:** Immutable long-term caching for static assets.
