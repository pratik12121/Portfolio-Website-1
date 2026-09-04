import React from "react";
import { TimelineMilestone } from "@/data/timeline";
import { CategoryBadge } from "./category-badge";
import { DOMAIN_CONFIG } from "@/lib/utils";
import { MapPin } from "lucide-react";

interface TimelineViewProps {
  milestones: TimelineMilestone[];
}

export function TimelineView({ milestones }: TimelineViewProps) {
  return (
    <div className="relative border-l-2 border-dashed border-[#00F0FF]/40 ml-3 md:ml-4 space-y-10 py-4 font-mono">
      {milestones.map((item, index) => {
        const config = DOMAIN_CONFIG[item.domain];
        return (
          <div key={index} className="relative pl-6 md:pl-8 group">
            {/* Square Pixel Node */}
            <div
              className="absolute -left-[7px] top-1.5 w-3 h-3 border border-black transition-transform duration-200 group-hover:scale-125"
              style={{ backgroundColor: config.color, boxShadow: `0 0 8px ${config.color}` }}
            />

            {/* Checkpoint Header */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="font-pixel text-xs font-bold text-[#FFE600]">
                YEAR: {item.year}
              </span>
              {item.period && (
                <span className="text-[9px] font-pixel px-1.5 py-0.5 bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/40">
                  {item.period}
                </span>
              )}
              <span className="text-muted-foreground/40">|</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1 font-terminal">
                <MapPin className="w-3 h-3 text-[#00F0FF]" />
                ZONE: {item.location.toUpperCase()}
              </span>
              <CategoryBadge domain={item.domain} size="sm" />
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-pixel font-bold text-sm sm:text-base text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
              {item.title}
            </h3>
            <p className="text-xs font-terminal text-[#39FF14] mt-0.5 tracking-wide">
              &gt; {item.subtitle}
            </p>

            {/* Description */}
            <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed max-w-2xl font-sans">
              {item.description}
            </p>

            {/* Unlocked Abilities / Key Skills */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.keySkills.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] font-pixel px-2 py-0.5 bg-black/60 border border-white/[0.1] text-white/80"
                >
                  +{skill}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
