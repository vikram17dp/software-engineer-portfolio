'use client';



const techStack = [
  // ================= CORE =================
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },

  // ================= FRONTEND =================
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Framer Motion', logo: 'https://cdn.simpleicons.org/framer/0055FF' },
  { name: 'shadcn/ui', logo: 'https://cdn.simpleicons.org/shadcnui/ffffff' },
  { name: 'TanStack Query', logo: 'https://cdn.simpleicons.org/reactquery/FF4154' },

  // ================= BACKEND =================
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', logo: 'https://cdn.simpleicons.org/express/ffffff' },
  { name: 'Prisma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
  { name: 'Zod', logo: 'https://cdn.simpleicons.org/zod/3E67B1' },
  { name: 'JWT', logo: 'https://cdn.simpleicons.org/jsonwebtokens/ffffff' },
  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Inngest', logo: 'https://avatars.githubusercontent.com/u/104882653?s=200&v=4' },
  { name: 'Kinde Auth', logo: 'https://avatars.githubusercontent.com/u/121923120?s=200&v=4' },

  // ================= DATABASES =================
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Neon', logo: 'https://neon.tech/favicon/favicon-32x32.png' },

  // ================= DEVOPS / HOSTING =================
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Vercel', logo: 'https://cdn.simpleicons.org/vercel/ffffff' },
  { name: 'Render', logo: 'https://avatars.githubusercontent.com/u/36424661?s=200&v=4' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },


  // ================= TOOLS =================
{ name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
{ name: 'npm', logo: 'https://cdn.simpleicons.org/npm/CB3837' },
{ name: 'Postman', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
{ name: 'Cloudinary', logo: 'https://cdn.simpleicons.org/cloudinary/ffffff' },
{ name: 'Insomnia', logo: 'https://avatars.githubusercontent.com/u/16602745?s=200&v=4' },
{ name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
{ name: 'Notion', logo: 'https://cdn.simpleicons.org/notion/ffffff' },
{ name: 'Gemini API', logo: 'https://cdn.simpleicons.org/google/4285F4' },
{ name: 'Windows', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' },
{ name: 'PowerShell', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg' },
{ name: 'Bash', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
{ name: 'Jira', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },

// ================= PRACTICE / DSA =================
{ name: 'LeetCode', logo: 'https://cdn.simpleicons.org/leetcode/FFA116' },
{ name: 'GeeksforGeeks', logo: 'https://cdn.simpleicons.org/geeksforgeeks/2F8D46' },


];


const TechStack = () => {
  return (
    <div className="w-full bg-transparent overflow-hidden pointer-events-none select-none">

      <div className="py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div className="marquee">
            {/* First list */}
            <div className="marquee__content">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
                >
                  <img
  src={tech.logo}
  alt={tech.name}
  className="
    w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8
    object-contain
    opacity-80
    group-hover:opacity-100
    transition-opacity duration-300
  "
/>

                  <span className="text-white/50 text-sm sm:text-base font-light tracking-wide group-hover:text-white/80 transition-colors duration-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Duplicate list for seamless loop */}
            <div className="marquee__content" aria-hidden="true">
              {techStack.map((tech, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="text-white/50 text-sm sm:text-base font-light tracking-wide group-hover:text-white/80 transition-colors duration-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;