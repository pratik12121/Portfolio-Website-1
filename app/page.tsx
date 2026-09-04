"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeroCanvas } from "@/components/hero-canvas";
import { KathmanduClock } from "@/components/kathmandu-clock";
import { RetroLoadingBar } from "@/components/retro-loading-bar";
import { ProjectCard } from "@/components/project-card";
import { DOMAIN_CONFIG, Domain, cn } from "@/lib/utils";
import { PROJECTS } from "@/data/projects";
import {
  ArrowRight,
  ArrowUpRight,
  Code,
  Palette,
  Box,
  Video,
  Camera,
  BookOpen,
  Terminal,
  Shield,
  Zap,
  Flame,
} from "lucide-react";

const DOMAIN_ICONS: Record<Domain, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  software: Code,
  design: Palette,
  threed: Box,
  video: Video,
  photo: Camera,
  blog: BookOpen,
};

export default function HomePage() {
  const [activeDomain, setActiveDomain] = useState<Domain | null>("software");

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  const domains = Object.keys(DOMAIN_CONFIG) as Domain[];

  return (
    <div className="relative flex flex-col min-h-screen font-mono">
      {/* 1. RETRO LOADING SCREEN HERO */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-[#00F0FF]/25">
        {/* Subtle Phosphor Ambient Radial */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#00F0FF]/15 via-[#FF007F]/10 to-[#39FF14]/10 blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top Status HUD */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-white/[0.08]">
            <KathmanduClock showAvailability={true} />
            <div className="flex items-center gap-3 text-[10px] font-pixel text-[#FFE600]">
              <span className="text-[#39FF14]">HP: 100/100</span>
              <span>•</span>
              <span className="text-[#00F0FF]">MP: 99/99</span>
              <span>•</span>
              <span className="text-white">CO-OP: READY</span>
            </div>
          </div>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Pixel Kinetic Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#090815] border border-[#00F0FF]/50 text-[10px] font-pixel text-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                <Terminal className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>PLAYER 1: PRATIK // CLASS: CREATIVE TECHNOLOGIST</span>
              </div>

              <div className="space-y-2">
                <div className="font-pixel text-xs sm:text-sm text-[#39FF14] tracking-widest uppercase">
                  &gt; MISSION: SUBSTANCE OVER HYPE
                </div>
                <h1 className="font-pixel font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-wide leading-tight text-glow-cyan">
                  NOW LOADING...<br />
                  <span className="text-[#FFE600] text-glow-gold">STAGE 01:</span> KATHMANDU
                </h1>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-sans max-w-xl">
                Operating from the high Himalayan valley of Kathmandu, Nepal.
                Synthesizing low-latency software engines, procedural 3D polygon
                architectures, 4K documentary cinematography, and 35mm street monographs.
                Zero sprite bloat. Realtime execution.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 font-pixel text-xs">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#00F0FF] text-black font-bold border border-[#00F0FF] hover:bg-[#39FF14] hover:border-[#39FF14] transition-all hover:scale-[1.02] shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                >
                  <span>START GAME (WORK)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-black/60 hover:bg-black/90 border border-[#00F0FF]/50 text-[#00F0FF] hover:text-white transition-all shadow-md"
                >
                  <span>INSERT COIN (COMMISSION)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-1.5 px-3 py-3 text-muted-foreground hover:text-[#FFE600] transition-colors text-[11px]"
                >
                  <span>[READ ATTRIBUTES]</span>
                </Link>
              </div>
            </div>

            {/* Right: Vector 3D Wireframe Console */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[400px] border-2 border-[#00F0FF]/40 bg-[#05050C] p-3 shadow-[0_0_30px_rgba(0,240,255,0.18)] flex flex-col justify-between overflow-hidden">
                {/* Pixel Corner Tabs */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#00F0FF]" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#00F0FF]" />
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#00F0FF]" />
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#00F0FF]" />

                {/* 3D Wireframe Layer */}
                <div className="absolute inset-0 pointer-events-auto">
                  <HeroCanvas activeDomain={activeDomain} />
                </div>

                {/* Overlay Header HUD */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-pixel text-[#00F0FF] pointer-events-none">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#39FF14] animate-blink" />
                    VECTOR_POLY_CORE
                  </span>
                  <span className="text-[#FFE600]">[60 FPS]</span>
                </div>

                {/* Overlay Footer HUD */}
                <div className="relative z-10 mt-auto pt-2 flex items-center justify-between text-[9px] font-pixel text-muted-foreground pointer-events-none border-t border-white/[0.08]">
                  <span>ROTATION: MOUSE_INPUT</span>
                  <span className="text-[#00F0FF]">KATHMANDU LAB</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Loading Bar Component */}
          <div className="mt-12 pt-6 border-t border-white/[0.08]">
            <RetroLoadingBar />
          </div>
        </div>
      </section>

      {/* 2. THE SIX CAMPAIGNS MATRIX */}
      <section className="py-14 md:py-20 border-b border-[#00F0FF]/25 bg-[#030307]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[10px] font-pixel text-[#39FF14] uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#39FF14] animate-blink" />
                <span>SELECT YOUR CAMPAIGN</span>
              </div>
              <h2 className="font-pixel font-bold text-xl sm:text-3xl text-white text-glow-cyan">
                SIX DISCIPLINES. ONE ENGINE.
              </h2>
            </div>
            <p className="text-xs text-muted-foreground font-mono max-w-md">
              Hover to re-calibrate vector wireframe resonance. Each discipline
              represents a mounted subsystem in the Kathmandu lab.
            </p>
          </div>

          {/* Domain Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {domains.map((dom) => {
              const conf = DOMAIN_CONFIG[dom];
              const Icon = DOMAIN_ICONS[dom];
              const isHovered = activeDomain === dom;

              return (
                <Link
                  key={dom}
                  href={`/work?domain=${dom}`}
                  onMouseEnter={() => setActiveDomain(dom)}
                  style={{
                    borderColor: isHovered ? conf.color : undefined,
                    boxShadow: isHovered
                      ? `0 0 20px ${conf.color}35`
                      : undefined,
                  }}
                  className={cn(
                    "group relative p-5 border-2 transition-all duration-150 flex flex-col justify-between",
                    "bg-[#070712] border-white/[0.12] hover:bg-[#0A0A1C]"
                  )}
                >
                  {/* Corner notches */}
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#00F0FF]" />
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00F0FF]" />
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#00F0FF]" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#00F0FF]" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className="font-pixel text-[10px] px-2 py-0.5 border"
                        style={{
                          color: conf.color,
                          borderColor: `${conf.color}60`,
                          backgroundColor: `${conf.color}15`,
                        }}
                      >
                        [{conf.code}]
                      </span>
                      <Icon className="w-4 h-4" style={{ color: conf.color }} />
                    </div>

                    <h3 className="font-pixel font-bold text-base text-white group-hover:text-[#00F0FF] transition-colors">
                      {conf.name}
                    </h3>
                    <p className="text-xs font-terminal text-[#39FF14] mt-1">
                      &gt; {conf.tagline}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-pixel">
                    <span className="text-muted-foreground">MISSION LOGS</span>
                    <span
                      className="font-bold inline-flex items-center gap-1"
                      style={{ color: conf.color }}
                    >
                      ENTER STAGE →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORK / MISSION REPLAYS */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-[10px] font-pixel uppercase tracking-widest text-[#00F0FF] mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#00F0FF] animate-blink" />
                <span>SAVE SLOTS // COMPLETED MISSIONS</span>
              </div>
              <h2 className="font-pixel font-bold text-2xl sm:text-4xl text-white">
                FLAGSHIP QUESTS
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[10px] font-pixel px-4 py-2 bg-black/60 hover:bg-black border border-[#00F0FF]/40 text-[#00F0FF] transition-all"
            >
              <span>VIEW ALL 12+ MISSIONS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                layout="bento"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. THREE ARCADE OPERATING LAWS */}
      <section className="py-16 border-t-2 border-[#00F0FF]/25 bg-[#040409]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-[10px] font-pixel uppercase tracking-widest text-[#FFE600]">
              == ENGINE DIRECTIVES ==
            </span>
            <h2 className="font-pixel font-bold text-xl sm:text-3xl text-white mt-1.5">
              THREE OPERATING LAWS
            </h2>
            <p className="text-xs text-muted-foreground mt-2">
              Every system, frame, and polygon compiled here adheres to strict
              chassis standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-[#070714] border-2 border-white/[0.12] space-y-3">
              <div className="font-pixel text-xs text-[#00F0FF] flex items-center gap-2">
                <span>[RULE 01]</span>
                <span className="text-white">ZERO SPRITE BLOAT</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                If an animation doesn&apos;t confirm a mechanical state or clarify
                spatial depth, it gets dropped from the frame buffer.
              </p>
            </div>

            <div className="p-5 bg-[#070714] border-2 border-white/[0.12] space-y-3">
              <div className="font-pixel text-xs text-[#FF007F] flex items-center gap-2">
                <span>[RULE 02]</span>
                <span className="text-white">CROSS-PLATFORM COMBO</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                Cinema informs interface easing curves; After Effects informs UI
                spring damping; 3D geometry nodes inform distributed state trees.
              </p>
            </div>

            <div className="p-5 bg-[#070714] border-2 border-white/[0.12] space-y-3">
              <div className="font-pixel text-xs text-[#39FF14] flex items-center gap-2">
                <span>[RULE 03]</span>
                <span className="text-white">SUBSTANCE OVER HYPE</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-sans">
                We build tools and stories intended to outlast hardware cycles.
                Tactile weight over ephemeral marketing gimmicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTINUE GAME? CTA */}
      <section className="py-20 border-t border-[#00F0FF]/25 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 bg-[#070714] border-2 border-[#00F0FF]/50 shadow-[0_0_30px_rgba(0,240,255,0.2)] text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#39FF14]/15 border border-[#39FF14]/50 text-[#39FF14] text-[10px] font-pixel">
              <span className="w-2 h-2 bg-[#39FF14] animate-ping" />
              <span>CO-OP COMMISSION SLOTS OPEN (Q3 / Q4)</span>
            </div>

            <h2 className="font-pixel font-bold text-2xl sm:text-4xl text-white text-glow-cyan leading-tight">
              CONTINUE GAME? 09... 08... 07...
            </h2>

            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans">
              Have an ambitious mission that requires low-latency software,
              procedural 3D WebGL, or cinematic 4K narrative direction? Insert coin
              and transmit your mission briefing.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 font-pixel text-xs">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-[#39FF14] text-black font-bold border border-[#39FF14] hover:bg-[#00F0FF] hover:border-[#00F0FF] transition-all shadow-[0_0_20px_rgba(57,255,20,0.5)]"
              >
                <span>INSERT COIN (START CO-OP)</span>
              </Link>
              <Link
                href="/about"
                className="px-5 py-3.5 bg-black/60 hover:bg-black border border-white/[0.15] text-white transition-colors text-[11px]"
              >
                <span>[CHARACTER PROFILE]</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
