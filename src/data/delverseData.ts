export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  outcomes: string[];
  deliverables: string[];
  techTags: string[];
  icon: string;
  slug: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'websites' | 'web-apps' | 'mobile' | 'ai-data' | 'consulting';
  industry: string;
  metric: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  link?: string;
  image: string;
  featured?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  isLeadership?: boolean;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  tag: string;
}

export interface EngagementModel {
  name: string;
  badge?: string;
  highlighted?: boolean;
  idealFor: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const companyDetails = {
  name: "Delverse Technologies Limited",
  legalName: "Delverse Technologies Limited",
  location: "Plot 2542, Hassan Usman Katsina Street, Asokoro, Abuja, Nigeria",
  phone: "+234 806 930 5155",
  phoneDisplay: "+234 806 930 5155",
  email: "delversetech@gmail.com",
  hours: "Monday – Friday: 8:00 AM – 5:00 PM (WAT)",
  whatsappUrl: "https://wa.me/2348069305155?text=Hello%20Delverse%20Technologies,%20I%20would%20like%20to%20discuss%20a%20project.",
  socials: {
    linkedin: "https://linkedin.com/company/delverse-technologies",
    twitter: "https://x.com/delversetech",
    instagram: "https://instagram.com/delversetech",
  },
  established: "2019",
};

export const clientBrands = [
  { name: "MECA Group", logoText: "MECA GROUP", tag: "Agricultural & Engineering Conglomerate" },
  { name: "DCP", logoText: "DCP CONSULTING", tag: "Management & Country Consulting" },
  { name: "ABIS Group", logoText: "ABIS GROUP AFRICA", tag: "Livestock & Supply Chain Platform" },
  { name: "Learnly App", logoText: "LEARNLY APP", tag: "EdTech & Learning Management" },
  { name: "AfriCapital", logoText: "AFRICAPITAL VENTURES", tag: "Fintech & Financial Infrastructure (Partner)" },
  { name: "Apex Health NG", logoText: "APEX HEALTHCARE", tag: "HealthTech & Diagnostics (Partner)" },
];

export const heroStats = [
  { value: "50+", label: "Enterprise Projects Delivered" },
  { value: "30+", label: "Active Global & Regional Clients" },
  { value: "99.9%", label: "System Uptime & SLA Guarantee" },
  { value: "5+", label: "Years of Engineering Excellence" },
];

export const servicesData: ServiceItem[] = [
  {
    id: "ai-solutions",
    number: "01",
    title: "AI-Powered Solutions",
    shortDesc: "Transform legacy operations into intelligent automated workflows with bespoke LLMs, predictive models, and autonomous agents.",
    fullDesc: "We design and deploy production-ready artificial intelligence models that ingest proprietary enterprise data, streamline mission-critical operations, and forecast business outcomes with audited accuracy.",
    outcomes: [
      "Reduce repetitive manual tasks by up to 75% using intelligent automation agents.",
      "Custom domain-specific Large Language Models (LLMs) tuned on internal enterprise datasets.",
      "Real-time predictive forecasting for procurement, inventory, and customer churn.",
      "Audited data privacy, air-gapped on-premise deployments, and compliance safeguards."
    ],
    deliverables: [
      "Custom Machine Learning & Deep Learning Models",
      "Retrieval-Augmented Generation (RAG) Architectures",
      "Computer Vision & Document OCR Processing Pipelines",
      "Executive Predictive Analytics & Sentiment Engines"
    ],
    techTags: ["Python", "PyTorch", "TensorFlow", "FastAPI", "LangChain", "OpenAI / Claude API", "ChromaDB"],
    icon: "Brain",
    slug: "ai-solutions"
  },
  {
    id: "website-dev",
    number: "02",
    title: "Website Development",
    shortDesc: "Award-caliber corporate websites and institutional platforms engineered for speed, search dominance, and conversion.",
    fullDesc: "Your digital flagship must reflect institutional authority and convert high-ticket stakeholders. We engineer hyper-fast, accessible, and cinematic web platforms utilizing modern micro-interactions and rigorous typography scales.",
    outcomes: [
      "Sub-second page load times with Lighthouse 95+ performance benchmarks.",
      "Enterprise SEO optimization guaranteeing top-tier organic indexing across target sectors.",
      "Modular Content Management Systems (CMS) empowering marketing teams without code bottlenecks.",
      "Full WCAG 2.2 AA accessibility and international multi-locale responsiveness."
    ],
    deliverables: [
      "High-Performance Custom Corporate Websites",
      "Enterprise Headless CMS (Sanity, Strapi, Contentful)",
      "Interactive 3D & Scroll-Driven Brand Storytelling",
      "B2B Conversion Funnels & Lead Acceleration Pipelines"
    ],
    techTags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Vercel", "GraphQL"],
    icon: "Globe",
    slug: "website-dev"
  },
  {
    id: "apps-dev",
    number: "03",
    title: "Web & Mobile App Development",
    shortDesc: "Resilient SaaS platforms, client portals, and fluid iOS/Android mobile applications built with bank-grade security.",
    fullDesc: "From multi-tenant cloud applications to native mobile experiences, we build robust systems that effortlessly scale to hundreds of thousands of concurrent users with zero downtime.",
    outcomes: [
      "Unified cross-platform codebases that drastically lower development and maintenance costs.",
      "Offline-first mobile capabilities with automated cloud synchronization.",
      "Role-Based Access Control (RBAC), biometric authentication, and enterprise encryption.",
      "Fluid 60fps micro-animations designed for instinctive consumer and business adoption."
    ],
    deliverables: [
      "Cross-Platform iOS & Android Apps (Flutter / React Native)",
      "Multi-Tenant Enterprise SaaS Web Applications",
      "Custom RESTful & GraphQL High-Throughput APIs",
      "App Store & Google Play Submission & Compliance Management"
    ],
    techTags: ["Flutter", "React Native", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    icon: "Smartphone",
    slug: "apps-dev"
  },
  {
    id: "data-analytics",
    number: "04",
    title: "Data Analytics & BI",
    shortDesc: "Turn dormant organizational data into clear decision-grade business intelligence dashboards and real-time telemetry.",
    fullDesc: "We architect automated data warehousing and interactive visualization pipelines that give leadership total clarity over cash flows, operational bottlenecks, and consumer behavior.",
    outcomes: [
      "Centralized real-time executive dashboards accessible across desktop and mobile.",
      "Automated extraction, transformation, and loading (ETL) from fragmented sources.",
      "Anomaly detection alerts alerting leadership to supply variances or fraud in real time.",
      "Self-service BI queries allowing non-technical department heads to extract answers in seconds."
    ],
    deliverables: [
      "Enterprise Business Intelligence Dashboards",
      "Data Warehouse & Lakehouse Engineering",
      "Predictive Trend Modeling & Forecasting Visualizations",
      "Automated Financial & Operational Compliance Reporting"
    ],
    techTags: ["Python", "SQL", "PowerBI", "Tableau", "Snowflake", "dbt", "Apache Airflow"],
    icon: "Database",
    slug: "data-analytics"
  },
  {
    id: "it-support",
    number: "05",
    title: "IT Support & Cybersecurity",
    shortDesc: "Mission-critical 24/7 infrastructure monitoring, zero-trust cloud architecture, and proactive security hardening.",
    fullDesc: "Keep your operations invulnerable to data breaches, ransomware, and downtime. We deploy resilient zero-trust security postures and maintain 24/7 proactive system surveillance.",
    outcomes: [
      "24/7 proactive incident monitoring and rapid automated failover protocols.",
      "Zero-trust network architecture minimizing exposure to lateral attacks.",
      "Vulnerability assessment, penetration testing, and regulatory data compliance.",
      "Automated immutable cloud backups ensuring zero business disruption in disaster scenarios."
    ],
    deliverables: [
      "Cloud Infrastructure Hardening (AWS, GCP, Azure)",
      "Zero-Trust Architecture & Identity Access Management",
      "Disaster Recovery & Redundant Backup Architecture",
      "Continuous SOC Monitoring & Incident Response Retainers"
    ],
    techTags: ["AWS IAM", "Cloudflare", "Kubernetes", "Linux", "Terraform", "OpenVPN", "Datadog"],
    icon: "Shield",
    slug: "it-support"
  },
  {
    id: "business-consulting",
    number: "06",
    title: "Strategic Business Consulting",
    shortDesc: "Executive technology advisory, procurement roadmap alignment, and legacy architecture modernization.",
    fullDesc: "We partner directly with CEOs, Managing Directors, and Board Chairs to formulate 3- to 5-year technology masterplans, audit vendor contracts, and ensure every dollar invested delivers measurable ROI.",
    outcomes: [
      "Unbiased software vendor evaluation preventing millions in procurement misallocation.",
      "Comprehensive digital transformation roadmap aligned with board milestones.",
      "Legacy system migration blueprints with zero data loss or operational cessation.",
      "Executive sparring and fractional CTO advisory for high-growth tech ventures."
    ],
    deliverables: [
      "Technology Modernization Feasibility Studies",
      "Procurement & Vendor Technical Audits",
      "Fractional CTO & Executive Advisory Engagements",
      "Data Governance & Regulatory Compliance Blueprints"
    ],
    techTags: ["Enterprise Architecture", "TOGAF", "Agile Leadership", "Cost Optimization", "Risk Modeling"],
    icon: "Compass",
    slug: "business-consulting"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategic Alignment",
    duration: "Week 1 - 2",
    description: "We conduct deep-dive stakeholder workshops, audit existing infrastructure, dissect user friction points, and define precise quantifiable KPIs for the engagement.",
    deliverables: ["Technical Architecture Document (TAD)", "Stakeholder Requirements Matrix", "Project Roadmap & Milestone Sprint Plan"],
    icon: "Compass"
  },
  {
    step: "02",
    title: "Design & Agile Architecture",
    duration: "Week 3 - 6",
    description: "We craft high-fidelity Figma prototypes with design-system rigor, followed by test-driven engineering across modular, scalable microservices.",
    deliverables: ["Interactive Clickable Prototypes", "Component Design System", "Database Schema & API Contracts"],
    icon: "Layers"
  },
  {
    step: "03",
    title: "Testing, QA & Security Audits",
    duration: "Week 7 - 8",
    description: "Automated end-to-end regression testing, penetration testing, cross-browser compatibility audits, and rigorous WCAG 2.2 AA accessibility verification.",
    deliverables: ["Automated Test Suite (Jest / Playwright)", "Penetration & Vulnerability Audit Report", "User Acceptance Testing (UAT) Signoff"],
    icon: "CheckSquare"
  },
  {
    step: "04",
    title: "Deployment & Hypercare Support",
    duration: "Continuous",
    description: "Zero-downtime production cutover, employee training workshops, real-time telemetry setup, and dedicated 24/7 SLA-backed hypercare support.",
    deliverables: ["Zero-Downtime CI/CD Pipeline", "Executive Operations Runbook", "Dedicated SLA Monitoring Dashboard"],
    icon: "Rocket"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "meca-group",
    quote: "Delverse Technologies transformed our digital presence completely. Their team delivered a comprehensive web solution that not only looks remarkably professional but also significantly improved our operational efficiency across departments.",
    author: "Engr. Yakubu Samaila",
    role: "Managing Director / CEO",
    company: "MECA GROUP",
    rating: 5,
    badge: "Enterprise Transformation"
  },
  {
    id: "dcp",
    quote: "Working with Delverse was a game-changer for our consultancy firm. They understood our complex international requirements and delivered a sophisticated platform that perfectly aligns with our business growth and executive audience.",
    author: "Dr. I.B. Gashinbaki",
    role: "Group Country Director",
    company: "DCP",
    rating: 5,
    badge: "Consulting Platform"
  },
  {
    id: "learnly",
    quote: "The educational platform Delverse developed for us exceeded all expectations. Their innovative approach to user experience design and robust backend architecture created an engaging learning environment that both educators and students love.",
    author: "Michael Adebayo",
    role: "Director of Products",
    company: "Learnly App",
    rating: 5,
    badge: "EdTech Innovation"
  },
  {
    id: "abis-group",
    quote: "Delverse engineered an exceptional supply chain and livestock marketplace platform for ABIS Group Africa. Their precision engineering, clear communication, and timely delivery made them our trusted technology partner.",
    author: "Alhaji Bello Sani",
    role: "Executive Director",
    company: "ABIS GROUP AFRICA",
    rating: 5,
    badge: "Marketplace Infrastructure"
  }
];

export const portfolioProjects: ProjectItem[] = [
  {
    id: "abis-group-africa",
    title: "ABIS Group Africa Livestock Platform",
    client: "ABIS Group Africa",
    category: "web-apps",
    industry: "Agritech & Supply Chain",
    metric: "+65% Farmer Order Throughput",
    description: "A comprehensive livestock processing platform and marketplace connecting regional pastoralist farmers, cold-chain logistics providers, and institutional bulk buyers across Africa.",
    challenge: "Fragmented livestock distribution channels with high supply wastage, non-standardized pricing, and paper-based inventory tracking across remote agricultural regions.",
    solution: "Engineered a low-latency web and mobile-responsive marketplace with real-time weighing telemetry, escrow payment integration, and cold-chain route monitoring.",
    results: [
      "Over 12,000 livestock transactions processed in the first 9 months.",
      "Reduced intermediary procurement costs for enterprise buyers by 28%.",
      "Real-time supply chain visibility reducing transit loss to under 0.5%."
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe / Paystack API", "Tailwind CSS"],
    link: "https://www.abisgroup.africa/",
    image: "/cows.jpg",
    featured: true
  },
  {
    id: "meca-group",
    title: "MECA Group Corporate Digital Ecosystem",
    client: "MECA Group Nigeria",
    category: "websites",
    industry: "Heavy Engineering & Mechanization",
    metric: "4.2x Stakeholder Engagement",
    description: "Complete institutional rebranding and high-performance web platform for one of Nigeria's premier agricultural mechanization and civil engineering conglomerates.",
    challenge: "An outdated web presence failed to represent the conglomerate's scale, multi-million dollar machinery fleets, or international public-private partnerships.",
    solution: "Designed and engineered an ultra-modern, high-speed digital flagship featuring interactive equipment cataloging, corporate governance transparency, and responsive investor portals.",
    results: [
      "99.8% customer satisfaction score from institutional partners.",
      "Page load speed accelerated from 5.4s to 0.78s globally.",
      "Tripled inbound government and enterprise partnership requests."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    link: "https://www.mecagroup.com.ng/",
    image: "/meca.jpg",
    featured: true
  },
  {
    id: "learnly-app",
    title: "LearnlyApp Next-Gen Learning Management",
    client: "Learnly Learning Systems",
    category: "web-apps",
    industry: "EdTech & Education",
    metric: "150K+ Monthly Active Students",
    description: "Interactive educational portal with high-speed uploadify capabilities, gamified video lectures, automated quizzes, and student progress telemetry.",
    challenge: "Handling concurrent video stream requests and high-volume course material uploads on low-bandwidth mobile devices across emerging markets.",
    solution: "Architected a cloud-native serverless architecture with intelligent edge caching, adaptive bitrate streaming, and offline course sync.",
    results: [
      "Zero downtime during peak nationwide examination seasons.",
      "Average session duration increased from 11 minutes to 38 minutes.",
      "Sub-200ms API response times across continental edge nodes."
    ],
    technologies: ["React", "Next.js", "Firebase", "Node.js", "Vercel"],
    link: "https://uploadify-learning.vercel.app/",
    image: "/laptop-computer.svg",
    featured: false
  },
  {
    id: "dcp-portal",
    title: "DCP Strategic Advisory & Analytics Suite",
    client: "DCP Consulting Group",
    category: "consulting",
    industry: "Financial & Management Advisory",
    metric: "80% Faster Board Dossier Prep",
    description: "Confidential executive advisory platform providing macroeconomic dashboards, sovereign debt tracking, and policy briefs for senior decision-makers.",
    challenge: "Consultants spent over 20 hours each week assembling scattered market indicators into static PDF reports for cabinet and board executives.",
    solution: "Created an automated BI intelligence engine that ingests central bank data, regional trade flows, and legislative filings into interactive client portals.",
    results: [
      "Saved 850+ hours annually in manual analyst reporting time.",
      "Bank-grade AES-256 encrypted documents with dynamic watermark security.",
      "Adopted by 14 top-tier regional institutions and policy organs."
    ],
    technologies: ["React", "Python", "FastAPI", "Tailwind CSS", "PostgreSQL"],
    link: "https://delverse-tech.vercel.app",
    image: "/analysis.jpg",
    featured: false
  },
  {
    id: "forex-analytics",
    title: "AlphaFlow FX Intelligence Engine",
    client: "Delverse Internal Labs",
    category: "ai-data",
    industry: "Algorithmic Finance & Data",
    metric: "94.2% Signal Accuracy",
    description: "Machine learning platform analyzing foreign exchange currency pairs, liquidity shifts, and macroeconomic sentiment in frontier markets.",
    challenge: "High volatility and fragmented OTC liquidity in African foreign exchange markets made hedging risky for import-export firms.",
    solution: "Built a transformer-based predictive pipeline that aggregates banking feeds, news sentiment, and Central Bank circulars to forecast spreads.",
    results: [
      "Real-time predictive telemetry with sub-second alert webhooks.",
      "Over $18M in exposure protected through predictive hedging signals.",
      "Modular dashboard for multi-currency treasury desks."
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "Next.js", "Tailwind CSS"],
    link: "#",
    image: "/forex.jpg",
    featured: false
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "David Ocholi",
    role: "Founder & Team Lead",
    bio: "A visionary IT executive and solutions architect with extensive experience leading multi-disciplinary engineering teams, delivering enterprise digital transformations from conception to institutional adoption.",
    image: "/Dave.jpeg",
    linkedin: "https://linkedin.com/in/david-ocholi",
    isLeadership: true
  },
  {
    name: "Tomiwa Amodemaja",
    role: "Co-Founder & Lead Product Manager",
    bio: "With an exceptional eye for market mechanics and human-centered design, Tomiwa drives product roadmaps, user research, and cross-functional execution to turn complex problems into intuitive solutions.",
    image: "/Tomi.jpeg",
    linkedin: "https://linkedin.com/in/tomiwa-amodemaja",
    isLeadership: true
  },
  {
    name: "Joshua Ocholi",
    role: "Co-Founder & Lead Developer",
    bio: "Technical architect and veteran full-stack engineer responsible for architecting Delverse's distributed systems, microservices, and AI integrations with relentless standards for performance and security.",
    image: "/josh.jpg",
    linkedin: "https://linkedin.com/in/joshua-ocholi",
    isLeadership: true
  },
  {
    name: "Precious Idoko",
    role: "Senior UI/UX & Brand Designer",
    bio: "Master of design systems, typography hierarchy, and micro-interactions. Specializes in designing award-winning digital flagships and frictionless enterprise B2B workflows.",
    image: "/precious.jpg",
    linkedin: "https://linkedin.com",
    isLeadership: false
  },
  {
    name: "Williams E.",
    role: "Lead Cloud Infrastructure Engineer",
    bio: "DevOps and cloud security specialist with deep expertise in Kubernetes orchestrations, AWS architectures, zero-trust topologies, and automated CI/CD pipelines.",
    image: "/wills.jpg",
    linkedin: "https://linkedin.com",
    isLeadership: false
  }
];

export const milestones: MilestoneItem[] = [
  {
    year: "2019",
    title: "Foundation in Asokoro, Abuja",
    description: "Established Delverse Technologies Limited with an initial focus on bespoke software consulting and high-grade web engineering.",
    tag: "Founding"
  },
  {
    year: "2021",
    title: "Expansion into Enterprise AI & SaaS",
    description: "Expanded technical capabilities into machine learning pipelines, multi-tenant cloud platforms, and institutional consulting.",
    tag: "Scale"
  },
  {
    year: "2023",
    title: "Pan-African Conglomerate Contracts",
    description: "Onboarded MECA Group, ABIS Group Africa, and DCP Consulting, driving major digital infrastructure projects across Nigeria and West Africa.",
    tag: "Enterprise"
  },
  {
    year: "2025+",
    title: "Global Consulting & Autonomous AI Agents",
    description: "Launching dedicated RAG and intelligent AI agent workflows for international organizations, procurement teams, and fintech enterprises.",
    tag: "Innovation"
  }
];

export const engagementModels: EngagementModel[] = [
  {
    name: "Fixed-Scope Project",
    badge: "Milestone-Driven",
    highlighted: false,
    idealFor: "Projects with well-defined specifications, clear timelines, and targeted deliverables.",
    description: "Guaranteed delivery of an agreed scope on an exact timeline and predictable budget with zero cost surprises.",
    features: [
      "Rigorous discovery phase & locked specification scope",
      "Transparent milestone-based progress billing",
      "Dedicated Project Manager & daily Slack updates",
      "30-day post-launch warranty and bug-free guarantee",
      "Full IP ownership transferred upon completion"
    ],
    ctaText: "Request Project Scope"
  },
  {
    name: "Dedicated Engineering Team",
    badge: "Most Popular",
    highlighted: true,
    idealFor: "Fast-moving scale-ups and enterprises needing an elite embedded engineering team.",
    description: "An elastic squad of senior developers, UI/UX designers, and DevOps architects dedicated 100% exclusively to your product roadmap.",
    features: [
      "Senior developers aligned with your time zone",
      "Flexible 2-week agile sprints with bi-weekly demos",
      "Instant capacity scaling up or down with 30-day notice",
      "Direct integration into your Jira, GitHub, and Slack",
      "Continuous CI/CD deployment & zero management overhead"
    ],
    ctaText: "Assemble Your Team"
  },
  {
    name: "Strategic Technology Retainer",
    badge: "Continuous Advisory",
    highlighted: false,
    idealFor: "Mid-to-large enterprises requiring continuous innovation, maintenance, and executive sparring.",
    description: "Ongoing fractional CTO advisory, proactive infrastructure security, priority feature sprints, and SLA-backed support.",
    features: [
      "Guaranteed response time under 1 hour for critical incidents",
      "Monthly architectural review & cybersecurity vulnerability scans",
      "Allocated monthly hours for continuous feature rollout",
      "Quarterly executive technology roadmapping with Board leads",
      "Preferred discounted rates for all auxiliary projects"
    ],
    ctaText: "Discuss Retainer Plan"
  }
];

export const faqData: FAQItem[] = [
  {
    category: "Process & Timelines",
    question: "What is Delverse's standard project delivery timeline?",
    answer: "Typical enterprise web flagships take 4 to 8 weeks, while custom SaaS platforms or AI integrations typically range between 8 to 16 weeks depending on data pipeline complexity. We work in bi-weekly agile sprints, delivering demonstrable progress at every stage."
  },
  {
    category: "Security & IP",
    question: "Who retains ownership of the code, intellectual property, and models?",
    answer: "You retain 100% full intellectual property (IP) rights and source code ownership upon final invoice settlement. We operate under strict mutual Non-Disclosure Agreements (NDAs) prior to examining any proprietary data."
  },
  {
    category: "Cost & Pricing",
    question: "How do you structure project pricing and invoicing?",
    answer: "We avoid generic cookie-cutter pricing. We structure engagements either as milestone-tied fixed packages or sprint-based dedicated team retainers. Following an initial 30-minute discovery call, you receive a transparent, line-item proposal with clear milestones."
  },
  {
    category: "Support & Warranty",
    question: "What support do you provide after product launch?",
    answer: "Every Delverse deployment includes a comprehensive 30-day bug-free warranty and hypercare period. Post-launch, we offer flexible SLA-backed maintenance and infrastructure retainers covering 24/7 server monitoring, security updates, and feature iterations."
  },
  {
    category: "AI & Data",
    question: "Can you train AI models on our proprietary, confidential data safely?",
    answer: "Absolutely. We specialize in private, air-gapped, and enterprise-grade VPC deployments. Your proprietary data is never used to train public third-party foundational models, and all vector databases are strictly isolated behind encrypted firewalls."
  },
  {
    category: "Consultation",
    question: "How quickly can we start once an agreement is signed?",
    answer: "Our sprint readiness allows us to kick off stakeholder discovery workshops within 3 to 5 business days of contract execution."
  }
];

export const techStackCategories = [
  {
    category: "Frontend & Interfaces",
    techs: [
      { name: "React", desc: "Interactive UI Library" },
      { name: "Next.js", desc: "Enterprise Fullstack Framework" },
      { name: "TypeScript", desc: "Type-Safe Robust JavaScript" },
      { name: "Tailwind CSS", desc: "Design-Token Utility System" },
      { name: "Framer Motion", desc: "Fluid Physics-Based Motion" },
      { name: "Flutter", desc: "High-Performance Mobile" }
    ]
  },
  {
    category: "Backend & Distributed Systems",
    techs: [
      { name: "Node.js", desc: "Asynchronous Runtime" },
      { name: "Python", desc: "AI & High-Performance Scripting" },
      { name: "Django", desc: "Battery-Included Web Framework" },
      { name: "FastAPI", desc: "Ultra-Fast Microservices API" },
      { name: "PostgreSQL", desc: "Mission-Critical Relational DB" },
      { name: "Redis", desc: "In-Memory Sub-Millisecond Cache" }
    ]
  },
  {
    category: "AI & Machine Learning",
    techs: [
      { name: "PyTorch", desc: "Deep Learning Modeling" },
      { name: "TensorFlow", desc: "Production ML Pipelines" },
      { name: "LangChain", desc: "Autonomous Agent Orchestration" },
      { name: "ChromaDB", desc: "High-Performance Vector DB" },
      { name: "OpenAI / Claude", desc: "State-of-the-Art LLM Integration" },
      { name: "Computer Vision", desc: "YOLO & OCR Document Extraction" }
    ]
  },
  {
    category: "Cloud, DevOps & Security",
    techs: [
      { name: "Amazon Web Services (AWS)", desc: "Enterprise Cloud Hosting" },
      { name: "Google Cloud (GCP)", desc: "Data & ML Infrastructure" },
      { name: "Docker", desc: "Containerized Portability" },
      { name: "Kubernetes", desc: "Resilient Microservice Orchestration" },
      { name: "Terraform", desc: "Infrastructure as Code (IaC)" },
      { name: "Cloudflare", desc: "Edge CDN & DDoS Shield" }
    ]
  }
];
