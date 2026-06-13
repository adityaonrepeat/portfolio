import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Prisma } from "@/components/ui/svgs/prisma";
import { SocketIO } from "@/components/ui/svgs/socketio";
import { Redis } from "@/components/ui/svgs/redis";
import { Tailwind } from "@/components/ui/svgs/tailwind";

export const DATA = {
  name: "Aditya Kumar Singh",
  initials: "AKS",
  url: "https://adityaonrepeat.vercel.app",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full Stack Developer · AI · Building things that matter.",
  summary:
    "I'm a Full Stack Developer building products at the intersection of AI and the web. I've shipped projects ranging from social platforms to campus marketplaces to scam detection tools. Currently interning at the National Informatics Centre. I care about shipping fast and building things that actually matter.",
  avatarUrl: "/profile-portfolio.jpg",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "C++", icon: Csharp },
    { name: "MongoDB", icon: MongoDB },
    { name: "Prisma", icon: Prisma },
    { name: "Socket.IO", icon: SocketIO },
    { name: "Redis", icon: Redis },
    { name: "TailwindCSS", icon: Tailwind },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "adityaonrepeat@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adityaonrepeat",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/adityaonrepeat",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/adityaonrepeat",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:adityaonrepeat@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "National Informatics Centre",
      href: "https://nic.in",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/NIC.png",
      start: "May 2026",
      end: "Present",
      description: "",
    },
  ],
  education: [
    {
      school: "National Institute of Technology, Agartala",
      href: "https://nita.ac.in",
      degree: "Bachelor of Technology",
      logoUrl: "/nit-agartala.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Bloom",
      href: "https://bloom-net.vercel.app/",
      dates: "",
      active: true,
      description:
        "A mental wellness platform that matches people into anonymous video chats by emotion, with an AI therapist, journaling, and mood tracking.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "*Socket.IO",
        "Gemini AI",
        "*Redis",
        "Betterauth",
        "Rate Limiting",
      ],
      links: [
        {
          type: "Website",
          href: "https://bloom-net.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/adityaonrepeat/bloom-v2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bloom.png",
      video: "",
    },
    {
      title: "Campuskart",
      href: "https://campuskart-net.vercel.app",
      dates: "",
      active: true,
      description:
        "Campus-isolated marketplace with role-based access (user / college moderator / admin), real-time messaging, and dual-layer content moderation.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "*Socket.IO",
        "Zustand",
        "*Sightengine",
        "Better-auth",
        "Rate Limiting",
      ],
      links: [
        {
          type: "Website",
          href: "https://campuskart-net.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/adityaonrepeat/campuskart",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/campuskart.png",
      video: "",
    },
    {
      title: "Scamshield",
      href: "",
      dates: "",
      active: true,
      description:
        "Chrome extension that detects phishing sites in real-time using a TensorFlow.js model running entirely on your device. Trained on **291k+** urls with **88%** accuracy.",
      technologies: [
        "*TensorFlow.js",
        "ML",
        "Chrome Extension",
        "TypeScript",
        "Cybersecurity",
        "*On-device AI",
        "Real-time Detection",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/adityaonrepeat/scamshield",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/scamshield.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
