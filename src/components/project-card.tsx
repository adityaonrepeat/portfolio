/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronDown, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  details?: readonly string[];
  systemDesign?: string;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  details,
  systemDesign,
  className,
}: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const [showDiagram, setShowDiagram] = useState(false);
  const [diagramDark, setDiagramDark] = useState(true);

  useEffect(() => {
    if (!showDiagram) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowDiagram(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showDiagram]);
  return (
    <>
    <div
      className={cn(
        "flex flex-col border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200",
        className
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {(details && details.length > 0 || systemDesign) && (
          <div className="border-t border-border pt-3">
            <div className="flex items-center justify-between">
              {details && details.length > 0 ? (
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronDown
                    className={cn("h-3 w-3 transition-transform duration-200", showDetails && "rotate-180")}
                  />
                  {showDetails ? "Hide details" : "Show details"}
                </button>
              ) : <span />}
              {systemDesign && (
                <button
                  onClick={() => setShowDiagram(true)}
                  className="flex items-center gap-0.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  System Design
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              )}
            </div>
            {showDetails && details && (
              <ul className="mt-3 space-y-2">
                {details.map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-muted-foreground">
                    <span className="mt-0.75 shrink-0 text-foreground/70 leading-none">•</span>
                    <div className="text-xs max-w-full leading-relaxed [&>p]:m-0 [&_strong]:text-foreground [&_strong]:font-semibold">
                      <Markdown>{item}</Markdown>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => {
              const highlighted = tag.startsWith("*");
              const label = highlighted ? tag.slice(1) : tag;
              return (
                <Badge
                  key={tag}
                  className={cn(
                    "text-[11px] font-medium h-6 w-fit px-2",
                    highlighted
                      ? "bg-foreground/10 border border-foreground/20 text-foreground"
                      : "border border-border"
                  )}
                  variant="outline"
                >
                  {label}
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </div>

    {showDiagram && systemDesign && createPortal(
      <div
        className="fixed inset-0 z-9999 bg-black flex items-center justify-center"
        onClick={() => setShowDiagram(false)}
      >
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          <button
            onClick={(e) => { e.stopPropagation(); setDiagramDark(!diagramDark); }}
            className="flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md transition-colors"
          >
            {diagramDark ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
            {diagramDark ? "Light" : "Dark"}
          </button>
          <button
            onClick={() => setShowDiagram(false)}
            className="text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-1.5 rounded-md"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <img
          src={`/${systemDesign}-${diagramDark ? "dark" : "light"}-sd.png`}
          alt={`${title} system design`}
          className="max-h-screen max-w-full w-full h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>,
      document.body
    )}
    </>
  );
}
