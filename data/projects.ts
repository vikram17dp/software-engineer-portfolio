// src/data/projects.ts

export const projects = [
  {
    id: 0,
    title: "AI Powered Digital Memory Bank",
    category: "Full Stack",
    year: "2024",
    role: "Full Stack Developer",
    duration: "4 months",

    purpose:
      "To build a secure and scalable digital memory banking platform that allows users to store, organize, and retrieve personal memories using AI-powered intelligence.",

    modules: [
      "Secure user authentication and authorization",
      "AI-powered memory categorization and semantic search",
      "Scalable backend architecture for large-scale memory storage",
      "Optimized performance for fast access and retrieval",
    ],

    description: [
      "Major academic project designed with real-world use cases in mind.",
      "Focused on scalability, clean architecture, performance optimization, and secure data handling.",
    ],

    informationParagraphs: [
      "The platform allows users to securely store digital memories such as notes, images, and personal data while maintaining strict access control and privacy.",
      "AI-powered categorization enables faster retrieval by intelligently grouping and indexing memories, reducing manual organization effort.",
      "The backend was designed to scale efficiently with increasing user data while maintaining low latency and high reliability.",
    ],

    images: [
      "/projects/majorproject.png",
      "/projects/majorproject1.png",
      "/projects/majorproject2.png",
      "/projects/majorproject3.png",
      "/projects/majorproject4.png",
      "/projects/majorproject5.png",
    ],

    tech: ["Next.js", "React", "Node.js", "MongoDB"],
    related: [1, 2],
     github: "https://github.com/yourusername/digital-memory-bank",
    live: "https://memory-bank.vercel.app"
  },

  {
    id: 1,
    title: "Restaurant Management System",
    category: "Full Stack",
    year: "2024",
    role: "Software Engineering Intern",
    duration: "2 months",

    purpose:
      "To automate restaurant operations such as order management, billing, and inventory using a full-stack web solution.",

    modules: [
      "Admin dashboard for restaurant and staff management",
      "Order processing and billing system",
      "REST APIs for real-time order updates",
      "Database schema design for menu and order data",
    ],

    description: [
      "Industry-level internship project built during a software engineering internship.",
      "Worked on real production features including backend APIs and database integration.",
    ],

    informationParagraphs: [
      "This system streamlines daily restaurant operations by digitizing order flow, billing, and inventory tracking.",
      "Backend APIs were designed to support concurrent orders with reliable data consistency.",
      "The project followed industry coding practices and exposed me to real-world production environments.",
    ],

    images: [
      "/projects/internshipproject.png",
      "/projects/internshipproject1.png",
      "/projects/internshipproject2.png",
      "/projects/internshipproject3.png",
      "/projects/internshipproject4.png",
      "/projects/internshipproject5.png",
    ],

    tech: ["React", "Node.js", "MongoDB"],
    related: [0, 2],
     github: "https://github.com/yourusername/digital-memory-bank",
    live: "https://memory-bank.vercel.app"
  },

  {
    id: 2,
    title: "Hospital Management System",
    category: "Frontend",
    year: "2023",
    role: "Frontend Developer",
    duration: "1 month",

    purpose:
      "To design a responsive and user-friendly frontend interface for managing hospital workflows.",

    modules: [
      "Responsive UI for hospital dashboards",
      "Reusable component-based architecture",
      "Optimized layouts for desktop and mobile",
    ],

    description: [
      "Frontend-focused project emphasizing responsive design and clean UI.",
      "Built reusable components to improve maintainability and consistency.",
    ],

    images: ["/projects/projectone.png"],

    tech: ["React", "Tailwind CSS"],
    related: [0],
     github: "https://github.com/yourusername/digital-memory-bank",
    live: "https://memory-bank.vercel.app"
  },

  {
    id: 3,
    title: "AI Powered Vehicle Portal & Car Dealership Management",
    category: "Backend",
    year: "2023",
    role: "Backend Developer",
    duration: "1.5 months",

    purpose:
      "To build scalable backend services for managing vehicle listings and dealership operations.",

    modules: [
      "Authentication and authorization system",
      "Vehicle and dealership data management APIs",
      "Database schema design and optimization",
      "Role-based access control for dealers and admins",
    ],

    description: [
      "Backend-centric project focused on API development and database design.",
      "Implemented secure authentication and scalable data handling mechanisms.",
    ],

    informationParagraphs: [
      "The backend was designed to support multiple dealerships with secure access controls.",
      "APIs were structured to handle vehicle listings, dealer profiles, and administrative operations efficiently.",
      "Emphasis was placed on clean API design, scalability, and data security.",
    ],

    images: [
      "/projects/projecttwo.png",
      "/projects/projecttwo1.png",
      "/projects/projecttwo2.png",
      "/projects/projecttwo3.png",
    ],

    tech: ["Node.js", "Express", "MongoDB"],
    related: [1],
     github: "https://github.com/yourusername/digital-memory-bank",
    live: "https://memory-bank.vercel.app"
  },

  
]