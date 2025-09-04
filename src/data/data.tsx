import { Icons } from "@/components/icons";
import { FolderOpen, HomeIcon } from "lucide-react";

export const DATA = {
  name: "Abbhinav Mishra",
  initials: "AM",
  url: "https://www.mehulpathak.com",
  description:
    "pre-final year university student with a knack for problem-solving and learning new technologies.",
  summary:
    "Fueled by curiosity and creativity, I love exploring new technologies, experimenting with ideas, and turning them into projects that are both fun and functional. [Competitive programming](https://codolio.com/profile/abhii_909) is my gym, it keeps me sharp, fast, and always ready for tougher problems. I might not be great with a sketchpad, but code is my [canvas](/#projects) where I turn ideas into something real and (hopefully) pretty cool. For me, tech isn't just a skill - it's the way I create and explore.",
  // avatarUrlLight: "/abhii_light.png",
  // // avatarUrlDark: "/abhii_dark.png",
  avatarUrlDark: "/abhii.jpg",
  avatarVideoUrl: "/abhii.mp4",
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
  ],
  more_projects: [
    {
      title: "ems",
      href: "https://github.com/abhii-909/ems",
      dates: "July 2025",
      active: true,
      description:
        "Made an employee management system to practice react",
      technologies: ["React + Vite", "Javascript", "Tailwind"],
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
      technologies: ["HTML", "Tailwind"],
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
    {
      title: "Astro-Trivia",
      href: "https://github.com/abhii-909/Astro-Trivia",
      dates: "Oct 2024",
      active: true,
      description:
        "quiz webapp for PLANETBEYOND project",
      technologies: ["Javascript"],
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
  ],
};
