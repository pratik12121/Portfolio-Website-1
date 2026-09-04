"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { CategoryBadge } from "./category-badge";
import { DOMAIN_CONFIG, cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  layout?: "grid" | "bento" | "compact";
  className?: string;
}

export function ProjectCard({
  project,
  layout = "grid",
  className = "",
}: ProjectCardProps) {
  const domainConfig = DOMAIN_CONFIG[project.domain];

  const bentoClasses = {
    large: "md:col-span-2 md:row-span-2",
    tall: "md:col-span-1 md:row-span-2",
    medium: "md:col-span-2 md:row-span-1",
    standard: "md:col-span-1 md:row-span-1",
  }[project.bentoSpan || "standard"];

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden border transition-all duration-200",
        "bg-[#070712] border-white/[0.12] hover:border-current",
        "shadow-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.2)]",
        layout === "bento" && bentoClasses,
        className
      )}
      style={{
        borderColor: undefined,
      }}
    >
      {/* Corner Pixel Notches */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00F0FF] z-20" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00F0FF] z-20" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00F0FF] z-20" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00F0FF] z-20" />

      {/* Media / Screenshot Container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/60 border-b border-white/[0.1]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070712] via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
          <CategoryBadge domain={project.domain} size="sm" />
          <span className="text-[9px] font-pixel px-2 py-0.5 bg-black/80 text-[#FFE600] border border-[#FFE600]/40">
            YEAR: {project.year}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-4 font-mono">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-pixel font-bold text-sm sm:text-base text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
              {project.title}
            </h3>
            <div
              className="w-6 h-6 flex items-center justify-center border border-white/20 bg-black/40 text-muted-foreground group-hover:text-white group-hover:border-[#00F0FF] transition-all flex-shrink-0"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <p className="text-[11px] text-[#39FF14] mt-1 font-terminal text-sm">
            &gt; {project.subtitle}
          </p>

          <p className="text-xs text-muted-foreground/90 mt-2 line-clamp-2 leading-relaxed font-sans">
            {project.summary}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2 text-[10px] font-pixel">
          <span className="text-muted-foreground truncate">
            CLIENT: {project.client.toUpperCase()}
          </span>
          <div className="flex items-center gap-1.5 justify-end">
            <span
              className="px-1.5 py-0.5 bg-white/[0.05] border border-white/[0.1] text-white/80"
            >
              STATUS: COMPLETE
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
