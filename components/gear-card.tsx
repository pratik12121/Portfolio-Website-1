import React from "react";
import { GearItem } from "@/data/gear";
import { CategoryBadge } from "./category-badge";
import { DOMAIN_CONFIG } from "@/lib/utils";

interface GearCardProps {
  item: GearItem;
}

export function GearCard({ item }: GearCardProps) {
  const config = DOMAIN_CONFIG[item.domain];

  return (
    <div className="relative flex flex-col justify-between p-5 rounded-none bg-[#070714] border-2 border-white/[0.12] hover:border-[#00F0FF] shadow-lg transition-all duration-200 group font-mono">
      {/* Corner Brackets */}
      <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#00F0FF]" />
      <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00F0FF]" />
      <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#00F0FF]" />
      <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#00F0FF]" />

      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="text-[9px] font-pixel px-1.5 py-0.5 bg-black/60 text-[#FFE600] border border-[#FFE600]/40">
            ITEM: {item.category.toUpperCase()}
          </span>
          <CategoryBadge domain={item.domain} size="sm" />
        </div>

        <h4 className="font-pixel font-bold text-sm text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
          {item.name}
        </h4>

        <div className="mt-2 text-xs font-terminal text-[#39FF14] bg-black/70 p-2 border border-white/[0.08] tracking-wide">
          &gt; ATTRIBUTES: {item.spec}
        </div>

        <p className="mt-3 text-xs text-muted-foreground/90 leading-relaxed font-sans">
          {item.roleInWorkflow}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-pixel">
        <span className="text-muted-foreground/80">LOADOUT STATUS</span>
        <span
          className="inline-flex items-center gap-1 font-bold"
          style={{ color: config.color }}
        >
          [{item.status.toUpperCase()}]
        </span>
      </div>
    </div>
  );
}
