"use client";

import React from "react";
import { DOMAIN_CONFIG, Domain, cn } from "@/lib/utils";

export type FilterDomain = Domain | "all";

interface DomainFilterProps {
  selectedDomain: FilterDomain;
  onChange: (domain: FilterDomain) => void;
  counts?: Record<FilterDomain, number>;
}

export function DomainFilter({
  selectedDomain,
  onChange,
  counts,
}: DomainFilterProps) {
  const filterOptions: { id: FilterDomain; label: string; color: string; code: string }[] = [
    { id: "all", label: "ALL QUESTS", color: "#FFFFFF", code: "ALL_SECTORS" },
    { id: "software", label: DOMAIN_CONFIG.software.name, color: DOMAIN_CONFIG.software.color, code: DOMAIN_CONFIG.software.code },
    { id: "design", label: DOMAIN_CONFIG.design.name, color: DOMAIN_CONFIG.design.color, code: DOMAIN_CONFIG.design.code },
    { id: "threed", label: DOMAIN_CONFIG.threed.name, color: DOMAIN_CONFIG.threed.color, code: DOMAIN_CONFIG.threed.code },
    { id: "video", label: DOMAIN_CONFIG.video.name, color: DOMAIN_CONFIG.video.color, code: DOMAIN_CONFIG.video.code },
    { id: "photo", label: DOMAIN_CONFIG.photo.name, color: DOMAIN_CONFIG.photo.color, code: DOMAIN_CONFIG.photo.code },
    { id: "blog", label: DOMAIN_CONFIG.blog.name, color: DOMAIN_CONFIG.blog.color, code: DOMAIN_CONFIG.blog.code },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-pixel text-[10px]">
      {filterOptions.map((option) => {
        const isSelected = selectedDomain === option.id;
        const count = counts ? counts[option.id] : undefined;

        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            style={{
              borderColor: isSelected ? option.color : undefined,
              backgroundColor: isSelected ? `${option.color}20` : undefined,
              color: isSelected ? option.color : undefined,
              boxShadow: isSelected ? `0 0 12px ${option.color}40` : undefined,
            }}
            className={cn(
              "group relative flex items-center gap-1.5 px-3 py-1.5 whitespace-nowrap transition-all duration-150 border",
              isSelected
                ? "font-bold tracking-wider"
                : "border-white/[0.12] bg-[#0A0918] text-muted-foreground hover:text-white hover:border-white/[0.3]"
            )}
          >
            {isSelected && (
              <span
                className="w-1.5 h-1.5 animate-blink"
                style={{ backgroundColor: option.color }}
              />
            )}
            <span>[{option.code}]</span>
            {count !== undefined && (
              <span
                className={cn(
                  "px-1 py-0.2 text-[9px] font-mono",
                  isSelected
                    ? "bg-white/20 text-white"
                    : "bg-white/[0.06] text-muted-foreground"
                )}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
