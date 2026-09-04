"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PROJECTS, Project } from "@/data/projects";
import { DomainFilter, FilterDomain } from "@/components/domain-filter";
import { ProjectCard } from "@/components/project-card";
import { DOMAIN_CONFIG, Domain } from "@/lib/utils";
import { Search } from "lucide-react";

function WorkContent() {
  const searchParams = useSearchParams();
  const initialDomain = (searchParams.get("domain") as FilterDomain) || "all";

  const [selectedDomain, setSelectedDomain] = useState<FilterDomain>(
    ["software", "design", "threed", "video", "photo", "blog", "all"].includes(
      initialDomain
    )
      ? initialDomain
      : "all"
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const domParam = searchParams.get("domain") as FilterDomain;
    if (
      domParam &&
      ["software", "design", "threed", "video", "photo", "blog", "all"].includes(
        domParam
      )
    ) {
      setSelectedDomain(domParam);
    }
  }, [searchParams]);

  const counts = useMemo(() => {
    const map: Record<FilterDomain, number> = {
      all: PROJECTS.length,
      software: 0,
      design: 0,
      threed: 0,
      video: 0,
      photo: 0,
      blog: 0,
    };
    PROJECTS.forEach((p) => {
      if (map[p.domain] !== undefined) {
        map[p.domain]++;
      }
    });
    return map;
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesDomain =
        selectedDomain === "all" || project.domain === selectedDomain;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesDomain;

      const matchesSearch =
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.client.toLowerCase().includes(q) ||
        project.tools.some((t) => t.toLowerCase().includes(q));

      return matchesDomain && matchesSearch;
    });
  }, [selectedDomain, searchQuery]);

  const activeMeta =
    selectedDomain !== "all" ? DOMAIN_CONFIG[selectedDomain as Domain] : null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 font-mono">
      {/* Page Header */}
      <div className="space-y-3 mb-10 pb-6 border-b border-[#00F0FF]/30">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#090815] border border-[#00F0FF]/40 text-[10px] font-pixel text-[#00F0FF]">
          <span>== MISSION ARCHIVES // SAVE SLOTS ==</span>
        </div>

        <h1 className="font-pixel font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide text-glow-cyan">
          COMPLETED QUESTS & REPLAYS
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed font-sans">
          Index of 12 verified campaign logs spanning low-latency software engines,
          topographic design systems, procedural 3D world-building, 4K documentary
          cinematography, and 35mm street monographs.
        </p>
      </div>

      {/* Control Bar: Filter Pills & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
        <DomainFilter
          selectedDomain={selectedDomain}
          onChange={setSelectedDomain}
          counts={counts}
        />

        {/* Retro Search Input */}
        <div className="relative min-w-[260px] max-w-sm font-terminal text-sm">
          <Search className="w-3.5 h-3.5 text-[#00F0FF] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="SCAN MISSION LOGS BY TOOL OR KEYWORD..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-4 py-2 bg-[#06060E] border-2 border-white/[0.15] focus:border-[#00F0FF] text-xs font-mono text-white placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-pixel text-[#FF007F] hover:text-white"
            >
              [CLR]
            </button>
          )}
        </div>
      </div>

      {/* Results Header Status */}
      <div className="flex items-center justify-between mb-8 text-[11px] font-pixel text-muted-foreground">
        <div>
          <span>QUERY STATUS: </span>
          <span className="text-[#39FF14] font-bold">
            {filteredProjects.length} / {PROJECTS.length} QUESTS MATCHED
          </span>
          {activeMeta && (
            <span className="ml-2 pl-2 border-l border-white/[0.2]">
              SECTOR:{" "}
              <span style={{ color: activeMeta.color }}>
                [{activeMeta.code}]
              </span>
            </span>
          )}
        </div>

        {selectedDomain !== "all" && (
          <button
            onClick={() => setSelectedDomain("all")}
            className="text-[#FFE600] hover:underline"
          >
            [RESET FILTER]
          </button>
        )}
      </div>

      {/* Save Files / Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              layout="grid"
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4 border-2 border-dashed border-[#FF007F]/40 bg-[#0A0710]">
          <p className="font-pixel text-xs text-[#FF007F]">
            NO SAVE DATA FOUND MATCHING &ldquo;{searchQuery}&rdquo;.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedDomain("all");
            }}
            className="px-4 py-2 text-[10px] font-pixel bg-[#00F0FF] text-black font-bold border border-[#00F0FF]"
          >
            RESTORE ALL SLOTS
          </button>
        </div>
      )}
    </div>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={<div className="max-w-6xl mx-auto px-4 py-20 text-center font-pixel text-xs text-[#00F0FF]">NOW LOADING SECTOR ARCHIVES...</div>}>
      <WorkContent />
    </Suspense>
  );
}
