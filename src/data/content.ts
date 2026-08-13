export const site = {
  name: 'Hava',
  fullName: 'Hava Jusufi',
  title: 'Junior Software Developer',
  tagline: 'Building scalable, user-focused full-stack applications.',
  email: 'havajusufi05@gmail.com',
  phone: '(+383) 49625317',
  github: 'https://github.com/H4284',
  githubAlt: 'https://github.com/Hava05',
  linkedin: 'https://www.linkedin.com/in/hava-jusufi-93b317279/',
  heroIntro:
    "Hi, I'm Hava Jusufi — a Computer Science graduate passionate about building reliable, modern, and user-focused applications.",
  about: {
    subtitle:
      'Computer Science graduate with practical full-stack experience and a focus on clean, secure software.',
    lead: 'I am a Computer Science graduate with a strong interest in software development and modern application design. I have practical experience developing full-stack applications using C#, .NET, ASP.NET Core, Entity Framework Core, SQL Server, HTML, CSS, JavaScript, and React.',
    highlights: [
      'Designing scalable solutions with ASP.NET Core, RESTful APIs, and SQL Server',
      'Implementing secure authentication, authorization, and role-based access control',
      'Building responsive interfaces with HTML, CSS, JavaScript, Bootstrap, and React',
      'Applying clean architecture, SOLID principles, and software engineering best practices',
      'Experience with inventory, scholarship, and identity-based application domains',
      'Software testing, debugging, and performance optimization for reliable delivery',
    ],
    asideTitle: 'Continuous growth',
    aside:
      'I am motivated to solve real-world problems through technology and committed to continuous learning and professional growth. I am continuously expanding my knowledge by exploring new technologies and best practices in full-stack development.',
  },
  experienceSubtitle:
    'Education, professional training, and hands-on experience in software development.',
  contactHeadline: "Let's build something great together.",
  contactSubtitle:
    'Open to internships, junior developer roles, and collaborative software projects.',
  footerTagline: 'Crafting thoughtful software, one commit at a time.',
  copyright: `© ${new Date().getFullYear()} Hava Jusufi. All rights reserved.`,
  contactLabels: {
    linkedin: 'linkedin.com/in/hava-jusufi-93b317279',
    github: 'github.com/H4284',
    githubAlt: 'github.com/Hava05',
  },
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories = [
  {
    title: 'Backend',
    skills: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'ASP.NET MVC',
      'Web API',
      'Entity Framework Core',
      'WinForms',
      'Node.js',
    ],
  },
  {
    title: 'Frontend',
    skills: [
      'HTML5',
      'CSS',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'React',
      'Razor Views',
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      'SQL Server',
      'Entity Framework 6',
      'Git',
      'GitHub',
      'GitLab',
      'Docker',
      'Firebase',
      'Figma',
      'Webflow',
      'Software Testing',
      'Cursor (AI-assisted development)',
      'Microsoft Office',
    ],
  },
];

export const projects = [
  {
    title: 'Scholarship Management System',
    period: 'Feb 2026 – May 2026',
    description:
      'Developed a full-stack Scholarship Management System to streamline the management of scholarships, student applications, and eligibility verification. Implemented secure user authentication, role-based authorization, and CRUD functionalities for administrators and students using ASP.NET Core MVC, Entity Framework Core, and SQL Server. Incorporated the OneR machine learning algorithm to predict students at risk of losing scholarships based on attendance and participation data.',
    technologies: [
      'C#',
      'ASP.NET Core MVC',
      'Entity Framework Core',
      'SQL Server',
      'OneR ML',
    ],
    features: [
      'Secure authentication and role-based authorization',
      'Scholarship and student application management',
      'OneR algorithm for at-risk student prediction',
      'Responsive UI with structured backend architecture',
      'Early intervention support for informed decision-making',
    ],
    github: 'https://github.com/H4284/scholarship-management-system',
    demo: '',
    demoAvailable: false,
  },
  {
    title: 'Distributed Job Queue System',
    period: 'Mar 2026 – May 2026',
    description:
      'Developed a distributed job queue system using C# .NET 9 and Docker to execute Python and C# code across multiple worker containers. Implemented a priority-based job queue with the Least-Loaded scheduling algorithm, heartbeat monitoring, automatic worker failure detection, job reassignment, and Docker-based auto-scaling for fault tolerance and high availability.',
    technologies: ['C#', '.NET 9', 'Docker', 'Python'],
    features: [
      'Priority-based job queue with Least-Loaded scheduling',
      'Heartbeat monitoring and automatic failure detection',
      'Job reassignment and Docker-based auto-scaling',
      'Real-time web dashboard for job and system monitoring',
      'Distributed workers for Python and C# execution',
    ],
    github: 'https://github.com/H4284/distributed-job-queue',
    demo: '',
    demoAvailable: false,
  },
  {
    title: 'Bletaria Amë – Beekeeping E-commerce Website',
    period: 'Apr 2026 – May 2026',
    description:
      'Developed a responsive web application for a local beekeeping business, enabling customers to browse products, place online orders, and contact the business. Implemented secure authentication with Email/Password and Google Sign-In using Firebase Authentication, with Firebase Security Rules protecting user data. Integrated Firebase Firestore for application data and deployed using Firebase Hosting.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    features: [
      'Product browsing and online order placement',
      'Firebase Authentication (Email/Password and Google Sign-In)',
      'Firebase Firestore and Security Rules',
      'Responsive design and Firebase Hosting deployment',
    ],
    github: 'https://github.com/Hava05/Pjc_Bletaria',
    demo: '',
    demoAvailable: false,
  },
  {
    title: 'Sales & Employee Management System',
    period: 'Mar 2025 – May 2025',
    description:
      'Developed a Windows Forms desktop application for managing business operations, including employees, products, orders, and sellers. Implemented secure user authentication with separate Administrator and User dashboards for role-based access. Designed a SQL Server database using Entity Framework 6 with CRUD functionalities, order tracking, and inventory operations following object-oriented programming principles.',
    technologies: [
      'C#',
      '.NET Framework 4.7.2',
      'WinForms',
      'Entity Framework 6',
      'SQL Server',
    ],
    features: [
      'Administrator and User role-based dashboards',
      'Employee, product, order, and seller management',
      'SQL Server database with Entity Framework 6',
      'CRUD operations, order tracking, and inventory management',
    ],
    github: 'https://github.com/H4284/stock-management-system',
    demo: '',
    demoAvailable: false,
  },
];

export const timeline = [
  {
    period: 'Oct 2023 – Jun 2026',
    title: 'Programming',
    organization: 'AAB College, Prishtina',
    description:
      'Software development focused on full-stack web applications using ASP.NET Core, C#, Entity Framework Core, and RESTful APIs. Frontend development with HTML5, CSS3, JavaScript, Bootstrap, and Razor Views. Database design with SQL Server, authentication and RBAC, API integration, and scholarship system development with predictive risk algorithms. EQF level 6.',
  },
  {
    period: 'Mar 2026 – Aug 2026',
    title: '.NET Developer Training',
    organization: 'Unity Tech Hub, Vushtrri',
    description:
      'Currently enrolled in a .NET Developer training program focusing on C#, ASP.NET Core, Entity Framework Core, and RESTful APIs. EQF level 5.',
  },
  {
    period: 'Jul 2026 – Present',
    title: 'Junior Software Developer Intern',
    organization: 'Thrio',
    description:
      'Currently ongoing internship working with React, Node.js, JavaScript, and Webflow, with experience in QA/software testing and Cursor/AI-assisted development.',
  },
];

export const strengths = [
  {
    title: 'Problem Solver',
    description:
      'Strong problem-solving, analytical thinking, and attention to detail in software development and data analysis.',
    icon: 'puzzle',
  },
  {
    title: 'Full-Stack Developer',
    description:
      'Practical experience building backend APIs, databases, and responsive user interfaces with modern .NET and web technologies.',
    icon: 'server',
  },
  {
    title: 'Fast Learner',
    description:
      'Continuously expanding knowledge by exploring new technologies and best practices in full-stack development.',
    icon: 'rocket',
  },
  {
    title: 'Quality Mindset',
    description:
      'Focused on clean code, SOLID principles, software testing, debugging, and delivering reliable applications.',
    icon: 'shield',
  },
];
