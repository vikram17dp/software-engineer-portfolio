// src/data/experience-data.ts

import { Experience } from "@/types/experience-interface";



export const experiences: Experience[] = [
  // 1️⃣ InfoTechBrains – SBS (Already covered in your project-like format)
  {
    id: 0,
    company: 'InfoTechBrains – Smarter Business Systems',
    role: 'Full Stack Developer Intern',
    type: 'Internship',
    duration: 'July 2025 – Oct 2025',
    location: 'India',
    mode: 'Remote',
    
    images: [
        "/experience/infotechbrains.png",
      "/projects/internshipproject.png",
      "/projects/internshipproject1.png",
      "/projects/internshipproject2.png",
      "/projects/internshipproject3.png",
      "/projects/internshipproject4.png",
      "/projects/internshipproject5.png",
    ],
    description: [
      'An IT services company providing scalable software solutions for businesses.',
    ],

    detailedWork: [
      'Designed and developed a full-stack Restaurant Management System with role-based access control.',
      'Built REST APIs and integrated MongoDB using Prisma for reliable data handling.',
      'Implemented real-time order tracking (KOT), waiter alerts, and table management.',
      'Integrated Stripe payments with secure authentication using JWT and Firebase.',
    ],

    highlights: [
      'Reduced order delays by 70% through real-time order flow.',
      'Improved kitchen and staff efficiency by 90%.',
      'Worked on production-grade architecture with deployment-ready workflows.',
    ],

    techStack: [
      'Next.js',
      'React',
      'Node.js',
      'MongoDB',
      'Prisma',
      'Tailwind CSS',
      'Stripe',
      'JWT',
      'Firebase',
    ],

    companyLink: 'https://www.linkedin.com/company/infotechbrains/',
  },

  // 2️⃣ Elfinity Technologies (MERN – as you requested)
  {
    id: 1,
    company: 'Elfinity Technologies Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    type: 'Internship',
    duration: 'March 2025 – May 2025',
    location: 'Bangalore, India',
    mode: 'Remote',
    images: [
      '/experience/elfinity.png',
    ],

    description: [
      'A technology company focused on building scalable and user-centric digital products.',
      'Worked on Namatrip, a travel booking platform.',
    ],

    detailedWork: [
      'Developed scalable full-stack features using the MERN stack.',
      'Worked on frontend components using React.js and Tailwind CSS.',
      'Integrated backend APIs for booking workflows and data handling.',
      'Collaborated with team members to improve application performance and UX.',
    ],

    highlights: [
      'Improved booking workflow speed by 40%.',
      'Enhanced overall user experience and responsiveness.',
      'Gained hands-on experience working on a real-world production application.',
    ],

    techStack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
    ],

    companyLink: 'https://www.linkedin.com/company/elfinity-technologies/',
  },

  // 3️⃣ Bluestock Fintech (MERN only – corrected as per your instruction)
  {
    id: 2,
    company: 'Bluestock Fintech',
    role: 'Software Development Engineer Intern (SDE)',
    type: 'Internship',
    duration: 'April 2025 – June 2025',
    location: 'India',
    mode: 'Remote',
    images: [
      '/experience/bluestock.png',
    ],

    description: [
      'A fintech startup building modern platforms for IPO analytics and investment insights.',
    ],

    detailedWork: [
      'Worked on a MERN-based IPO analytics platform.',
      'Developed frontend features using React.js and Tailwind CSS.',
      'Integrated APIs to display real-time IPO data.',
      'Collaborated in Agile workflows with regular sprint planning and reviews.',
    ],

    highlights: [
      'Contributed to a production-level fintech application.',
      'Improved data visualization and frontend performance.',
      'Strengthened understanding of scalable MERN architectures.',
    ],

    techStack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Tailwind CSS',
    ],

    companyLink: 'https://www.linkedin.com/company/bluestock-fintech/',
  },
]
