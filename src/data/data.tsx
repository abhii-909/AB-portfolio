import { Icons } from "@/components/icons";
import { FolderOpen, HomeIcon, Notebook } from "lucide-react";

export const DATA = {
  name: "Abbhinav Mishra",
  initials: "AM",
  url: "https://www.mehulpathak.com",
  location: "Greater Noida, UP",
  locationLink:
    "https://www.google.com/maps/place/Galgotias+University/@28.3659529,77.5389672,17z/data=!4m10!1m2!2m1!1sGalgotias+University!3m6!1s0x390cc7365a740e65:0xd0d60a62e55ab171!8m2!3d28.3668904!4d77.5413398!15sChRHYWxnb3RpYXMgVW5pdmVyc2l0eSIDiAEBWhYiFGdhbGdvdGlhcyB1bml2ZXJzaXR5kgEKdW5pdmVyc2l0eaoBZQoNL2cvMTFma3l5OV9keRABKhgiFGdhbGdvdGlhcyB1bml2ZXJzaXR5KAAyHhABIhr0DiP2Id9awBdKSFH1Mi9eqFKMCxqTo2z2RTIYEAIiFGdhbGdvdGlhcyB1bml2ZXJzaXR54AEA!16s%2Fm%2F0gff9fz?entry=ttu&g_ep=EgoyMDI1MDgyNC4wIKXMDSoASAFQAw%3D%3D",
  description:
    "pre-final year university student with a knack for problem-solving and learning new technologies.",
  summary:
    "Since childhood, I have been passionate about computers, technology, and gaming. While gaming sparked my interest in game development, I ultimately found my true passion in programming through various [projects](/#projects). I particularly enjoy [competitive programming](https://codolio.com/profile/abhii_909) and tackling complex problems. I love learning new technologies and building websites with the latest tech stacks. Additionally, I take pride in my typing skills, often reaching speeds of over 200 words per minute.",
  // avatarUrlLight: "/abhii_light.png",
  // // avatarUrlDark: "/abhii_dark.png",
  avatarUrlDark: "/abhii.jpg",
  skills: [
    "C++",
    "Python",
    "Java",
    "React",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
  ],
  learning: ["AI/ML",],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: FolderOpen, label: "Projects" },
    { href: "/blog", icon: Notebook, label: "Blog" },
  ],
  contact: {
    email: "abbhinav99mishra@gmail.com",
    tel: "+91 7007242537",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhii-909",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abbhinav-mishra/",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "Leetcode",
        url: "https://leetcode.com/u/abhii_909/",
        icon: Icons.leetcode,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/abhii_909",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:abbhinav99mishra@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  projects: [
    {
      title: "PlanetBeyond",
      href: "https://github.com/abhii-909/PLANETBEYOND",
      dates: "Jan. 2025 - July. 2025",
      active: true,
      description:
        "PLANETBEYOND is an immersive, interactive learning platform designed to make space exploration accessible and engaging.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "WebGL",
        "Three.js",
        "Python",
        "Dialogflow",
        "MongoDB",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/abhii-909/PLANETBEYOND",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/a.png",
    },
    {
      title: "Clipyt",
      href: "https://github.com/abhii-909/Clipyt",
      dates: "Dec. 2024",
      active: true,
      description:
        "This project is a tool designed to extract notes from YouTube videos. It's a personal side project.",
      technologies: [
        "Python",
        "CLI",
        "opencv",
        "tkinter",
        "reportlab",
        "yt-dlp",
        "scikit-image",
        "pytesseract",
        "Pillow",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/abhii-909/Clipyt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/c.png",
    },
    // {
    //   title: "notez",
    //   href: "https://notezai.vercel.app",
    //   dates: "Aug. 2024 - Sept. 2024",
    //   active: true,
    //   description:
    //     "An AI math solver that allows users to draw mathematical expressions on a blank canvas. It intelligently recognizes these drawings, solves the expressions, and converts them to LaTeX.",
    //   technologies: [
    //     "Vite",
    //     "React",
    //     "Typescript",
    //     "Gemini GenAI API",
    //     "FastAPI",
    //     "Tailwind CSS",
    //     "Node.js",
    //     "Render",
    //     "Vercel",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://notezai.vercel.app",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Repository",
    //       href: "https://github.com/m3hu1/notez",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/n.png",
    // },
    // {
    //   title: "bugpa",
    //   href: "https://bugpa.vercel.app",
    //   dates: "Dec. 2023 - Jan. 2024",
    //   active: true,
    //   description:
    //     "A GPA calculator designed for college students, addressing the common issue of understanding the credit system. It provides a simple UI for quick SGPA calculation.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "Node.js",
    //     "Tailwind CSS",
    //     "Vercel",
    //     "shadcn/ui",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://bugpa.vercel.app",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Repository",
    //       href: "https://github.com/m3hu1/gpa-calculator",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/b.png",
    // }
  ],
  more_projects: [
    {
      title: "ems",
      href: "https://github.com/abhii-909/ems",
      dates: "Aug 2025",
      active: true,
      description:
        "Made an employee management system to practice react",
      technologies: ["React + Vite", "ESLint", "Javascript", "HTML", "Tailwind CSS"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/abhii-909/ems",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "nerdNarratives ",
      href: "https://github.com/abhii-909/nerdNarratives",
      dates: "June 2025",
      active: true,
      description:
        "Retro version of my blog website",
      technologies: ["HTML", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://nerdnarratives.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/abhii-909/nerdNarratives",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "whack-a-hoe",
      href: "https://github.com/abhii-909/whack-a-hoe",
      dates: "July 2025",
      active: true,
      description:
        "a fun side project",
      technologies: ["HTML", "CSS", "Javascript"],
      links: [
        {
          type: "Website",
          href: "https://whack-a-hoe.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/abhii-909/whack-a-hoe",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "Astro-Trivia",
      href: "https://github.com/abhii-909/Astro-Trivia",
      dates: "Oct 2024",
      active: true,
      description:
        "quiz webapp for PLANETBEYOND project in the NASA hackathon",
      technologies: ["HTML", "CSS", "Javascript"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/abhii-909/Astro-Trivia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "ContactForge",
      href: "https://github.com/abhii-909/ContactForge",
      dates: "May 2025",
      active: true,
      description:
        "A Python-powered GUI tool with MySQL integration for seamless contact management, featuring real-time validation and intuitive double-click editing.",
      technologies: ["Python", "MySQL", "Tkinter", "Regular Expressions"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/abhii-909/ContactForge",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
  ],
};
