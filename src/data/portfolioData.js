export const personalInfo = {
  name: "Chamodya Jayasena",
  title: "Information Technology Undergraduate",
  tagline: "Full-Stack Web & Android Mobile Developer",
  summary:
    "Third-year Information Technology undergraduate at SLIIT with hands-on experience in software development, full-stack web applications, and native Android development. Proficient in Java, Python, React.js, Node.js, Spring Boot, the MERN stack, and Kotlin. Seeking an IT internship to contribute to innovative software engineering projects.",
  location: "Sri Lanka",
  email: "chamodyajayasena002@gmail.com",
  phone: "+94 77 046 4371",
  availability: "Available for Internships",
  cvUrl: "/Chamodya_Jayasena_CV.pdf",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:chamodyajayasena002@gmail.com",
  },
  stats: [
    { label: "Academic Standing", value: "3rd Year", sub: "SLIIT B.Sc. (Hons) IT" },
    { label: "Core Projects", value: "5+", sub: "Web, Mobile & Security" },
    { label: "Technical Skills", value: "15+", sub: "Languages & Frameworks" },
    { label: "Internship Status", value: "Open", sub: "Ready for Opportunities" },
  ],
  aboutMe: [
    "I am a passionate software developer and third-year Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT). My technical journey is centered around crafting high-performance, secure, and user-centric applications across both web and mobile environments.",
    "I have spearheaded academic and personal projects encompassing native Android development with Kotlin & MVVM, scalable enterprise backend services with Spring Boot and Node.js, modern reactive user interfaces with React and Tailwind CSS, and robust web security architectures implementing AES-256-GCM encryption and RBAC.",
    "Driven by continuous learning, agile collaboration, and clean architecture principles, I am actively seeking an internship opportunity where I can apply my problem-solving skills, collaborate with forward-thinking engineering teams, and deliver meaningful software products."
  ]
};

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Proficient" },
      { name: "Java", level: "Proficient" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Kotlin", level: "Proficient" },
      { name: "C / C++", level: "Intermediate" },
      { name: "HTML5 & CSS3", level: "Advanced" },
    ],
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" },
      { name: "Component Architecture", level: "Advanced" },
      { name: "State Management", level: "Proficient" },
      { name: "UI / UX Prototyping", level: "Proficient" },
    ],
  },
  {
    category: "Backend & Cloud Services",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "Proficient" },
      { name: "Express.js", level: "Proficient" },
      { name: "Spring Boot", level: "Proficient" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "Jakarta Validation", level: "Intermediate" },
      { name: "JWT Authentication & RBAC", level: "Advanced" },
    ],
  },
  {
    category: "Mobile App Development",
    icon: "Smartphone",
    skills: [
      { name: "Android Studio", level: "Advanced" },
      { name: "Kotlin Native", level: "Proficient" },
      { name: "MVVM Architecture", level: "Advanced" },
      { name: "Room ORM & SQLite", level: "Proficient" },
      { name: "Background Notifications", level: "Proficient" },
      { name: "Flutter", level: "Familiar" },
    ],
  },
  {
    category: "Databases & Data Modeling",
    icon: "Database",
    skills: [
      { name: "MongoDB", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "SQLite", level: "Proficient" },
      { name: "Schema Optimization", level: "Intermediate" },
      { name: "Query Filtering", level: "Proficient" },
    ],
  },
  {
    category: "Tools, Security & Workflows",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Postman API Testing", level: "Advanced" },
      { name: "Figma UI Design", level: "Intermediate" },
      { name: "Jira & Agile / Scrum", level: "Proficient" },
      { name: "AES-256-GCM Encryption", level: "Proficient" },
      { name: "Audit Logging & Security", level: "Proficient" },
    ],
  },
];

export const projects = [
  {
    id: "habitix",
    title: "Habitix – Habit & Wellness Tracker",
    category: "Mobile",
    subtitle: "Native Android application for lifestyle, mood tracking, and hydration routines",
    description:
      "A comprehensive Android application engineered to help users establish sustainable daily habits, monitor emotional wellness, and stay hydrated with personalized intake calculations.",
    highlights: [
      "Built with Kotlin, Android Studio, and modern MVVM architectural design pattern.",
      "Utilized Room ORM and SQLite for persistent, fast, and offline-first local data storage.",
      "Integrated visual analytics for daily habit streaks and emotional mood trend tracking.",
      "Implemented intelligent drinking reminders with customizable background push notifications.",
    ],
    tags: ["Kotlin", "Android Studio", "SQLite", "Room ORM", "MVVM", "Notifications"],
    links: {
      github: "https://github.com",
      demo: null,
    },
    featured: true,
  },
  {
    id: "lost-and-found",
    title: "Campus Lost and Found Platform",
    category: "Full Stack",
    subtitle: "Enterprise item tracking portal with role-based access control and JWT security",
    description:
      "A dynamic full-stack web application designed to connect university members for reporting, searching, and claiming misplaced belongings with high security and verification.",
    highlights: [
      "Engineered secure user authentication with JSON Web Tokens (JWT) and multi-factor verification.",
      "Developed an intuitive administration control panel with Role-Based Access Control (RBAC).",
      "Created granular query filters to locate items by location, category, date, and status.",
      "Built responsive, accessible interfaces using React.js and Tailwind CSS.",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "RBAC", "Tailwind CSS"],
    links: {
      github: "https://github.com",
      demo: null,
    },
    featured: true,
  },
  {
    id: "smart-campus",
    title: "Smart Campus Facilities & Asset Catalogue",
    category: "Backend",
    subtitle: "Enterprise resource management service built on Spring Boot & MongoDB",
    description:
      "A microservice-oriented backend subsystem responsible for university campus asset allocation, facilities auditing, and equipment booking lifecycle management.",
    highlights: [
      "Developed robust RESTful CRUD endpoints adhering to OpenAPI specifications in Spring Boot.",
      "Implemented Jakarta bean validation to guarantee strict data integrity across records.",
      "Engineered multi-criteria dynamic database querying on MongoDB for real-time asset search.",
      "Documented and thoroughly tested API contracts utilizing Postman collections.",
    ],
    tags: ["Java", "Spring Boot", "MongoDB", "REST APIs", "Jakarta Validation", "Postman"],
    links: {
      github: "https://github.com",
      demo: null,
    },
    featured: true,
  },
  {
    id: "hardware-system",
    title: "Hardware Store Management System",
    category: "Full Stack",
    subtitle: "End-to-end commercial inventory, customer ordering, and supplier portal",
    description:
      "A comprehensive retail management web solution enabling hardware retailers to handle point-of-sale customer checkouts, inventory stock alerts, and supplier procurement.",
    highlights: [
      "Developed interactive shopping cart, checkout processing, and real-time stock deductions.",
      "Built automated supplier re-ordering pipelines to prevent stock shortages.",
      "Generated actionable visual reporting dashboards for top-selling products and revenue.",
      "Architected REST endpoints with Express.js and structured data persistence in MongoDB.",
    ],
    tags: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    links: {
      github: "https://github.com",
      demo: null,
    },
    featured: false,
  },
  {
    id: "health-security",
    title: "Security-Hardened Health Management System",
    category: "Security & Web",
    subtitle: "Healthcare data portal safeguarded with military-grade encryption and geo-blocking",
    description:
      "A secure patient and medical record framework created to prevent unauthorized data exfiltration, intercept cross-site vulnerabilities, and enforce clinical privacy standards.",
    highlights: [
      "Engineered AES-256-GCM symmetric cryptographic protection for sensitive patient health records.",
      "Implemented comprehensive tamper-evident audit logging for every administrative query.",
      "Added geo-blocking IP restriction layers and two-factor authentication (2FA) barriers.",
      "Formulated defense-in-depth mitigations against OWASP Top 10 vulnerabilities.",
    ],
    tags: ["Web Security", "AES-256-GCM", "JWT", "2FA", "Audit Logging", "Node.js"],
    links: {
      github: "https://github.com",
      demo: null,
    },
    featured: false,
  },
];

export const educationHistory = [
  {
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "B.Sc. (Hons) in Information Technology",
    period: "2024 – Present",
    status: "3rd Year Undergraduate",
    location: "Malabe, Sri Lanka",
    description:
      "Pursuing honors specialization with intensive coursework in Full-Stack Web Development, Mobile Application Development, Database Systems, Object-Oriented Analysis & Design, Computer Networks, and Software Engineering Methodologies.",
    achievements: [
      "Completed hands-on projects spanning MERN, Spring Boot, and Android Kotlin platforms.",
      "Active participant in academic software engineering teams and agile project showcases.",
    ],
  },
  {
    institution: "Galahitiyawa Central College",
    degree: "G.C.E. Advanced Level",
    period: "2015 – 2021",
    status: "Physical Science Stream",
    location: "Gampaha, Sri Lanka",
    description:
      "Completed secondary education in the Physical Science stream with focus on Combined Mathematics, Physics, and Chemistry, laying a rigorous analytical foundation for computer science.",
    achievements: [
      "Qualified for national university admission under the Physical Science stream.",
      "Participated actively in school STEM and extracurricular societies.",
    ],
  },
];

export const certifications = [
  {
    title: "Full Stack Development Certification",
    issuer: "University of Moratuwa",
    year: "Completed",
    skills: ["Frontend Web Development", "Backend Architectures", "Database Design", "Python", "Cloud Deployment"],
    description:
      "Comprehensive certification training covering modern responsive frontend frameworks, backend server engineering, relational & NoSQL databases, and cloud deployment practices.",
  },
];
