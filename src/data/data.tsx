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
      href: "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/solar-system-earth-beyond_ver_1.png",
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
          type: "Website",
          href: "https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/solar-system-earth-beyond_ver_1.png",
          icon: <Icons.globe className="size-3" />,
        },
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
      href: "https://media.tenor.com/42bcTn0iuVgAAAAi/under-construction-pikachu.gif",
      dates: "Dec. 2024",
      active: true,
      description:
        "This project is a tool designed to extract notes from YouTube videos. It's a personal side project.",
      technologies: [
        "opencv-python",
        "tkinter",
        "reportlab",
        "yt-dlp",
        "scikit-image",
        "pytesseract",
        "Pillow",
      ],
      links: [
        {
          type: "Desktop app",
          href: "https://media.tenor.com/42bcTn0iuVgAAAAi/under-construction-pikachu.gif",
          icon: <Icons.globe className="size-3" />,
        },
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
      title: "codeforces-problem-search",
      href: "https://github.com/m3hu1/codeforces-problem-search",
      dates: "Jan 2025",
      active: true,
      description:
        "This is a Raycast extension that fetches all details of a problem from codeforces using the problem id or problem name.",
      technologies: ["Raycast", "Extension", "TypeScript", "Node.js", "React"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/codeforces-problem-search",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "cf-testcases-checker-rust",
      href: "https://github.com/m3hu1/cf-testcases-checker-rust",
      dates: "Jan 2025",
      active: true,
      description:
        "Simple command-line tool written in Rust to fetch and run test cases for Codeforces problems against your Golang solutions.",
      technologies: ["Rust", "CLI"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/cf-testcases-checker-rust",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "learning-go",
      href: "https://github.com/m3hu1/learning-go",
      dates: "Nov 2024",
      active: true,
      description:
        "Collection of programs and projects that I built using Go while learning the Go programming language.",
      technologies: ["Go", "Misc"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/learning-go",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "go-todo",
      href: "https://github.com/m3hu1/golang-todo-cli",
      dates: "Sept 2024",
      active: true,
      description:
        "A Go-based CLI for todo task management using Cobra. Supports adding, listing, completing, and deleting tasks with CSV persistence.",
      technologies: ["Go", "Cobra", "CRUD", "CLI"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/golang-todo-cli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "go-typing-test",
      href: "https://github.com/m3hu1/typing-test-golang",
      dates: "Oct 2024",
      active: true,
      description:
        "A typing test application that leverages Go for the backend. This project showcases my learning journey in Golang.",
      technologies: ["Go", "HTML", "CSS", "HTTP", "Server"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/typing-test-golang",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "ceh-notes",
      href: "https://cehnotes.netlify.app",
      dates: "Oct 2024",
      active: true,
      description:
        "Revived study notes for the EC-Council Certified Ethical Hacker (C|EH) v12 exam originally by @findmeandkillme hosted using HonKit.",
      technologies: ["HonKit", "GitBook", "Markdown", "Notes", "Netlify"],
      links: [
        {
          type: "Website",
          href: "https://cehnotes.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/m3hu1/ceh-notes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "auto-typer",
      href: "https://github.com/m3hu1/auto-typer",
      dates: "Feb 2024 - Apr 2024",
      active: true,
      description:
        "Python and C++ scripts to automate keyboard typing based on the content of a text file.",
      technologies: ["Python", "C++", "CLI"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/auto-typer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "perfect-circle-exploit",
      href: "https://github.com/m3hu1/perfect-circle",
      dates: "Dec 2023",
      active: true,
      description:
        "MacOS only. Exploit to draw a perfect circle (99.9%) on Neal.fun's Perfect Circle Challenge.",
      technologies: ["C++", "CLI", "Exploit"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/perfect-circle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "instagram-impostor",
      href: "https://github.com/m3hu1/impostor",
      dates: "Jun 2024",
      active: true,
      description:
        "A python3 script to identify Instagram accounts that don't follow you back.",
      technologies: ["Python", "CLI", "Fun"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/impostor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "cpp-fms",
      href: "https://github.com/m3hu1/terminalplusplus",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "A C++ based command-line interface (CLI) file management system that implements essential operations from scratch.",
      technologies: ["C++", "CLI", "Collaboration"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/terminalplusplus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
  ],
};
