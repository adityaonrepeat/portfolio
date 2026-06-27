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
import { Zustand } from "@/components/ui/svgs/zustand";

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
    { name: "Zustand", icon: Zustand },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "adityasinghstuff@gmail.com",
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
        url: "mailto:adityasinghstuff@gmail.com",
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
        "*Socket.IO",
        "Prisma",
        "PostgreSQL",
        "Gemini AI",
        "*Redis",
        "Betterauth",
        "*Rate Limiting",
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
      details: [
        "A mental wellness platform serving **100+ users** that matches people into anonymous, emotion-based peer video calls, with an AI therapist, journaling, and mood tracking.",
        "Built a real-time matchmaking server (Socket.IO + Redis) pairing users across 4 emotion queues with **sub-second match times**, skip/rematch cooldowns, and atomic re-queueing handling **50+ concurrent sockets** in load testing.",
        "Implemented a streaming AI therapist (Gemini, SSE) with prompts grounded in each user's emotional state and last 10 messages, cutting time-to-first-token to **under 1s** via token streaming.",
        "Designed a session-based chat architecture (Prisma + PostgreSQL) with optimistic UI via TanStack Query, persisting full conversation history across sessions.",
        "Secured **15+ API routes** with authenticated access (better-auth, email/OAuth) and Redis-backed **rate limiting**, plus a peer-moderation pipeline with **auto-blocking** at a configurable report threshold.",
        "Architected as 2 independent services (Next.js + standalone realtime server) deployed across Vercel and Render.",
      ],
      image: "/bloom.png",
      video: "",
      systemDesign: "bloom",
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
        "*Rate Limiting",
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
      details: [
        "A college-exclusive marketplace serving **100+ users** across **5+ institutions** with P2P listings, a campus store directory, and **real-time** chat — all isolated per campus.",
        "Designed per-college data isolation with a **3-tier RBAC** system (user / **college-scoped** moderator / global admin) enforced on every server action, restricting moderators to their own institution.",
        "Built a dedicated Socket.IO server handling **real-time** messaging, typing indicators, and online presence across **50+ concurrent sockets**, architected as **2 independent services** deployed across Vercel and Render.",
        "Integrated Sightengine AI image moderation (synchronous, **blocks before DB insert**), text filtering, and Upstash Redis rate limiting; optimized unread-count queries from **O(n) → O(1)** with a single grouped SQL, and added cursor pagination supporting **200+ listings**.",
      ],
      image: "/campuskart-banner.png",
      video: "",
      systemDesign: "campuskart",
    },
    {
      title: "Scamshield",
      href: "https://github.com/adityaonrepeat/scamshield",
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
        "*Real-time Detection",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/adityaonrepeat/scamshield",
          icon: <Icons.github className="size-3" />,
        },
      ],
      details: [
        "Privacy-first Chrome extension detecting phishing sites using on-device TensorFlow.js.",
        "Trained a TensorFlow.js model on **291k+ URLs** achieving **88.47%** test accuracy; extracts and min-max scales 16 URL features for fully in-browser inference with **zero server dependency**.",
        "Engineered a blended risk scoring system (**30% heuristic + 70% ML**) with independent escalation rules — strong heuristic signals (≥ 70) and high ML confidence (≥ 90%) each escalate to red independently, reducing false negatives on high-confidence threats.",
        "Implemented **homograph attack detection** via Punycode prefix checks and Cyrillic confusable character matching, catching IDN spoofing attacks that bypass standard URL pattern filters.",
        "Injected extension UI via **Shadow DOM** to prevent style conflicts across all sites; cached per-tab results in chrome.storage.local via a background service worker for instant popup response.",
      ],
      image: "/scamshield.png",
      video: "",
      systemDesign: "scamshield",
    },
  ],
  hackathons: [],
} as const;
