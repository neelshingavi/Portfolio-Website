export const profile = {
  name: 'Neel Shingavi',
  title: 'Backend engineer and product builder',
  location: 'Pune, India',
  email: 'shingavineel@gmail.com',
  phone: '+91 9284466546',
  resume: '/assets/neel-shingavi-resume.pdf',
  photo: '/assets/neel-shingavi.png',
  links: {
    linkedin: 'https://linkedin.com/in/neel-shingavi',
    github: 'https://github.com/neelshingavi',
  },
  summary:
    'Software developer building scalable, production-grade applications, backend systems, data-driven products, and LLM-powered analytics with a strong focus on performance, reliability, and clean architecture.',
  availability: 'Open for internships, full-time roles, freelance builds, and serious product collaborations.',
};

export const heroRoles = [
  'Production backend systems',
  'AI analytics products',
  'Client-ready applications',
  'Hackathon-winning execution',
  'Founder-minded product design',
];

export const stats = [
  { value: 4, suffix: '', label: 'Client Projects Delivered End to End', accent: 'teal' },
  { value: 9.32, suffix: '', label: 'Current CGPA', accent: 'gold', decimals: 2 },
  { value: 6, suffix: ' Months', label: 'Work Experience', accent: 'signal' },
  { value: 5, suffix: '+', label: 'Hackathon Victories', accent: 'coral' },
  { value: 10, suffix: '+', label: 'Expert Sessions Attended', accent: 'lime' },
];

export const experience = [
  {
    company: 'Word Lane Tech',
    role: 'Backend Developer and Client Coordination Intern',
    period: 'Jul 2025 - Dec 2025',
    location: 'Pune',
    points: [
      'Developed backend modules for client projects, improving reliability and reducing manual workflows.',
      'Delivered 4 projects end to end, optimizing development cycles and ensuring timely deployment.',
      'Collaborated with clients and cross-functional teams to streamline communication and accelerate delivery timelines.',
      'Built production systems supporting desktop and Android workflows for real client operations.',
    ],
  },
  {
    company: 'Script Lanes',
    role: 'Upcoming Mobile App Developer Intern (React Native Stack)',
    period: 'Jun 2026 - Jun 2027',
    location: 'Pune',
    points: [
      'Upcoming internship focusing on cross-platform mobile app development in the React Native stack.',
    ],
  },
];

export const education = [
  {
    school: 'Pune Institute of Computer Technology (PICT)',
    course: 'B.Tech in Electronics and Computer Engineering',
    period: 'Aug 2025 - Present',
    result: 'CGPA 9.32',
  },
  {
    school: 'Bharati Vidyapeeth J.N.I.O.T., Katraj, Pune',
    course: 'Diploma in Computer Technology',
    period: 'May 2022 - May 2025',
    result: '93.26%',
  },
  {
    school: 'St. Vincent High School, Camp, Pune',
    course: 'Secondary and High School (SSC)',
    period: 'Jul 2015 - May 2022',
    result: '87%',
  },
];

export const projects = [
  {
    name: 'QueryPilot',
    type: 'AI analytics platform',
    period: 'Jan 2026 - Feb 2026',
    description:
      'LLM-powered analytics platform that turns UPI transaction data into contextual business insights, spending patterns, revenue trends, and customer behavior intelligence.',
    impact: ['250,000+ transactions processed', '2nd place at IIT Bombay InsightX', 'Built for real-world business analysis'],
    stack: ['Python', 'LLM APIs', 'SQL', 'Data Analytics', 'PostgreSQL'],
    color: 'lime',
  },
  {
    name: 'TradersDesk',
    type: 'Production trading workflow app',
    period: 'Mar 2026 - Present',
    description:
      'Desktop and Android platform for saree brokers to manage billing, payments, commissions, returns, and cloud-synced daily workflows.',
    impact: ['5,000+ monthly transactions', '2 active clients', 'Offline SQLite plus Supabase cloud sync'],
    stack: ['Java', 'Swing', 'Android', 'Maven', 'SQLite', 'PostgreSQL', 'HTTP APIs'],
    color: 'coral',
  },
  {
    name: 'CertiCraft',
    type: 'Certificate automation system',
    period: 'Jan 2026',
    description:
      'Event management platform for certificate generation, participant management, QR validation, and bulk email communication.',
    impact: ['300+ participants automated', '80% manual effort reduction', 'Hackathon-winning end-to-end product'],
    stack: ['Web Development', 'QR Systems', 'Email Automation'],
    color: 'teal',
  },
  {
    name: 'FounderFlow',
    type: 'Startup operating system',
    period: 'Dec 2025 - Jan 2026',
    description:
      'Startup workflow platform combining idea validation, roadmap planning, task tracking, dashboards, and team communication into one execution system.',
    impact: ['Roadmap and task execution pipelines', 'Centralized founder dashboard', 'Built around startup productivity workflows'],
    stack: ['Workflow Automation', 'Product Design', 'Dashboards'],
    color: 'gold',
  },
];

export const achievements = [
  { title: '2nd Position - InsightX, IIT Bombay', detail: 'Team Leader, 1,700+ teams', tone: 'lime' },
  { title: "1st Position - TechSprint'26 Hackathon", detail: 'Team Leader, 200+ teams', tone: 'gold' },
  { title: 'Finalist - GDG Cloud Pune Hackathon', detail: '1,000+ teams', tone: 'teal' },
  { title: 'Finalist - Meta x OpenEnv x PyTorch Hackathon', detail: 'Team Leader, 52,000+ teams', tone: 'coral' },
  { title: "2nd Position - Indradhanu'25 Project Competition", detail: '150+ projects', tone: 'signal' },
];

export const skills = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'C/C++', 'SQL', 'JavaScript'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Node.js', 'Express.js', 'JavaFX', 'Swing', 'LLM APIs'],
  },
  {
    label: 'Databases',
    items: ['SQLite', 'PostgreSQL', 'Supabase', 'MongoDB'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub', 'Maven', 'VS Code', 'JAR/EXE Packaging'],
  },
  {
    label: 'Core',
    items: ['DSA', 'OOP', 'DBMS', 'Data Modeling', 'System Design Basics', 'HTTP API Integration'],
  },
];
