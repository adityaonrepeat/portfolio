import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";

export const DATA = {
  name: "Aditya Kumar Singh",
  initials: "AKS",
  url: "https://adityaonrepeat.vercel.app",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Student & builder. I love creating things that matter.",
  summary:
    "I'm a Computer Science student at NIT Agartala building products at the intersection of AI and the web. Currently working on AI safety research and helping others learn to code. I love shipping projects that solve real problems.",
  avatarUrl: "",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL", icon: Postgresql },
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
        "A social networking platform for developers and creators to share ideas, connect, and grow together.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
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
      href: "",
      dates: "",
      active: true,
      description:
        "A marketplace platform built for college students to buy and sell items within their campus community.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
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
        "A tool to help users identify and protect themselves from online scams and phishing attempts.",
      technologies: [],
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
