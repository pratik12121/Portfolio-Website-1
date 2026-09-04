import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { KathmanduClock } from "@/components/kathmandu-clock";
import { GearCard } from "@/components/gear-card";
import { TimelineView } from "@/components/timeline-view";
import { GEAR_ITEMS } from "@/data/gear";
import { TIMELINE } from "@/data/timeline";
import { FileText, ArrowUpRight, Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "CHARACTER PROFILE // PRATIK SILWAL (LVL 99)",
  description:
    "Player 1 bio, equipment inventory (Canon 6D, Scarlett Solo, Gimbal), and campaign history from Kathmandu Valley, Nepal.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 font-mono">
      {/* 1. CHARACTER BIO & PORTRAIT */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 pb-12 border-b border-[#00F0FF]/30">
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-pixel text-[#00F0FF]">
              == CHARACTER PROFILE & LOADOUT ==
            </span>
            <span className="text-muted-foreground">•</span>
            <KathmanduClock showAvailability={false} compact={true} />
          </div>

          <h1 className="font-pixel font-bold text-3xl sm:text-5xl text-white tracking-wide leading-tight text-glow-cyan">
            PLAYER 1: PRATIK<br />
            <span className="text-[#FFE600] text-glow-gold">LVL 99</span> CREATIVE TECHNOLOGIST
          </h1>

          <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
            <p>
              Operating from the historic brick alleyways and computational studios
              of the Kathmandu Valley, Nepal.
            </p>
            <p>
              I do not treat code, 3D polygons, and 35mm optical cinema as isolated
              skills. In my engine, they form a synchronized combo: After Effects
              easing curves dictate UI spring damping in React; low-light street
              candids calibrate high-contrast dark mode palettes; Blender procedural
              geometry nodes inspire distributed state architectures.
            </p>
            <p className="text-white font-mono text-xs">
              &gt; CORE DIRECTIVE: <strong className="text-[#39FF14]">SUBSTANCE OVER HYPE</strong>.
              No decorative sprite bloat. Handcrafted tools that endure.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3 font-pixel text-[10px]">
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-black font-bold border border-white hover:bg-[#39FF14] hover:border-[#39FF14] transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CHARACTER SHEET (CV)</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-black/60 hover:bg-black border border-[#00F0FF]/50 text-[#00F0FF] hover:text-white transition-all"
            >
              <span>COMMISSION SUMMON</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Character Portrait with Retro Scan Box */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] border-2 border-[#00F0FF]/40 bg-[#05050C] shadow-[0_0_30px_rgba(0,240,255,0.2)] overflow-hidden">
            {/* Corner Tabs */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#00F0FF] z-10" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#00F0FF] z-10" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#00F0FF] z-10" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#00F0FF] z-10" />

            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
              alt="Pratik — Player 1"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/80 border border-white/10 text-[9px] font-pixel space-y-1">
              <div className="text-[#39FF14] flex items-center justify-between">
                <span>SECTOR: KATHMANDU VALLEY</span>
                <span>STATUS: READY</span>
              </div>
              <div className="text-muted-foreground">
                EQUIPPED: CANON 6D • BLENDER 4.2 • NEXT.JS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIX DOMAIN ATTRIBUTE TREE */}
      <section className="mb-20">
        <div className="max-w-2xl mb-8">
          <span className="text-[10px] font-pixel text-[#FFE600] uppercase tracking-widest">
            == ATTRIBUTE TREE ==
          </span>
          <h2 className="font-pixel font-bold text-xl sm:text-2xl text-white mt-1">
            SIX UNLOCKED DISCIPLINES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-[#070714] border-2 border-[#00F0FF]/40 space-y-2">
            <span className="font-pixel text-[10px] text-[#00F0FF]">[01. SOFTWARE_SYS]</span>
            <h3 className="font-pixel text-xs text-white">Fullstack & Web Audio DSP</h3>
            <p className="text-xs text-muted-foreground font-sans">
              Low-latency Web Audio processors, WebGL fragment shaders, and local-first SQLite architectures. Sub-16ms target.
            </p>
          </div>

          <div className="p-4 bg-[#070714] border-2 border-[#FF007F]/40 space-y-2">
            <span className="font-pixel text-[10px] text-[#FF007F]">[02. VECTOR_FORGE]</span>
            <h3 className="font-pixel text-xs text-white">Design Systems & HUDs</h3>
            <p className="text-xs text-muted-foreground font-sans">
              High-contrast accessibility tokens, cartographic alpine iconography, and dark-mode data consoles.
            </p>
          </div>

          <div className="p-4 bg-[#070714] border-2 border-[#FF8C00]/40 space-y-2">
            <span className="font-pixel text-[10px] text-[#FF8C00]">[03. POLYGON_REALM]</span>
            <h3 className="font-pixel text-xs text-white">3D & Procedural Nodes</h3>
            <p className="text-xs text-muted-foreground font-sans">
              Blender 4.2 Geometry Nodes, OptiX Cycles photorealistic lighting, and Draco-compressed Three.js models.
            </p>
          </div>

          <div className="p-4 bg-[#070714] border-2 border-[#FF2A55]/40 space-y-2">
            <span className="font-pixel text-[10px] text-[#FF2A55]">[04. FMV_CINEMATICS]</span>
            <h3 className="font-pixel text-xs text-white">Cinema & Motion Curves</h3>
            <p className="text-xs text-muted-foreground font-sans">
              Low-light documentary cinema, kinetic timing graphs in After Effects, and narrative rhythm in Premiere Pro.
            </p>
          </div>

          <div className="p-4 bg-[#070714] border-2 border-[#39FF14]/40 space-y-2">
            <span className="font-pixel text-[10px] text-[#39FF14]">[05. OPTICAL_RECON]</span>
            <h3 className="font-pixel text-xs text-white">35mm Street Monographs</h3>
            <p className="text-xs text-muted-foreground font-sans">
              Low-light street candids on Canon 6D with prime glass. Preserving dawn tonality and mountain geologies.
            </p>
          </div>

          <div className="p-4 bg-[#070714] border-2 border-[#FFE600]/40 space-y-2">
            <span className="font-pixel text-[10px] text-[#FFE600]">[06. LORE_ARCHIVES]</span>
            <h3 className="font-pixel text-xs text-white">Codex & Philosophy</h3>
            <p className="text-xs text-muted-foreground font-sans">
              Essays on physical inertia, why analog knobs feel alive, and why quiet interfaces endure trend cycles.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EQUIPMENT INVENTORY / GEAR POUCH */}
      <section className="mb-20">
        <div className="max-w-2xl mb-8">
          <span className="text-[10px] font-pixel text-[#39FF14] uppercase tracking-widest">
            == EQUIPMENT POUCH ==
          </span>
          <h2 className="font-pixel font-bold text-xl sm:text-2xl text-white mt-1">
            HARDWARE & TOOL LOADOUT
          </h2>
          <p className="text-xs text-muted-foreground mt-1">
            Battle-tested physical and digital instruments with thousands of field hours across Kathmandu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GEAR_ITEMS.map((gear) => (
            <GearCard key={gear.id} item={gear} />
          ))}
        </div>
      </section>

      {/* 4. CAMPAIGN LOG TIMELINE */}
      <section className="pt-10 border-t border-white/[0.1]">
        <div className="max-w-2xl mb-8">
          <span className="text-[10px] font-pixel text-[#00F0FF] uppercase tracking-widest">
            == CAMPAIGN LOG ==
          </span>
          <h2 className="font-pixel font-bold text-xl sm:text-2xl text-white mt-1">
            HISTORICAL CHECKPOINTS
          </h2>
        </div>

        <TimelineView milestones={TIMELINE} />
      </section>
    </div>
  );
}
