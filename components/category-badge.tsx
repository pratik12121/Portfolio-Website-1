"use client";

import React from "react";
import { DOMAIN_CONFIG, Domain, cn } from "@/lib/utils";
import { Code, Palette, Box, Video, Camera, BookOpen } from "lucide-react";

interface CategoryBadgeProps {
  domain: Domain;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
}

const DOMAIN_ICONS: Record<Domain, React.ComponentType<{ className?: string }>> = {
  software: Code,
  design: Palette,
  threed: Box,
  video: Video,
  photo: Camera,
  blog: BookOpen,
};

export function CategoryBadge({
  domain,
  size = "md",
  interactive = false,
  className,
  onClick,
}: CategoryBadgeProps) {
  const config = DOMAIN_CONFIG[domain];
  const Icon = DOMAIN_ICONS[domain];

  const sizeClasses = {
    sm: "text-[9px] px-2 py-0.5 gap-1",
    md: "text-[10px] px-2.5 py-1 gap-1.5",
    lg: "text-xs px-3.5 py-1.5 gap-2",
  }[size];

  return (
    <span
      onClick={onClick}
      style={{
        borderColor: `${config.color}60`,
        backgroundColor: `${config.color}15`,
        color: config.color,
        boxShadow: `0 0 10px ${config.color}20`,
      }}
      className={cn(
        "inline-flex items-center border font-pixel tracking-wide select-none transition-all duration-200",
        sizeClasses,
        interactive && "cursor-pointer hover:scale-105 hover:brightness-125 shadow-md",
        className
      )}
    >
      <span
        className="w-1.5 h-1.5 rounded-none animate-blink"
        style={{ backgroundColor: config.color }}
      />
      <span>[{config.code}]</span>
    </span>
  );
}
