"use client";

import React from "react";
import Link from "next/link";
import { Printer, MapPin, Mail, Globe, Award } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 font-mono">
      {/* Top Action Bar (hidden on print) */}
      <div className="no-print flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#00F0FF]/30">
        <Link
          href="/about"
          className="text-[10px] font-pixel text-muted-foreground hover:text-[#00F0FF] transition-colors"
        >
          &lt;&lt; BACK TO CHARACTER PROFILE
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#39FF14] text-black font-bold text-[10px] font-pixel border border-[#39FF14] hover:bg-white transition-all shadow-[0_0_12px_rgba(57,255,20,0.4)]"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>PRINT / SAVE CHARACTER SHEET</span>
        </button>
      </div>

      {/* Resume Document Wrapper */}
      <div className="print-content bg-[#070714] border-2 border-white/[0.15] p-6 sm:p-10 space-y-10 shadow-2xl relative">
        {/* Corner notches */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#00F0FF]" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#00F0FF]" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#00F0FF]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#00F0FF]" />

        {/* Identity & Header */}
        <div className="space-y-3 pb-6 border-b border-white/[0.1]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-pixel text-[#FFE600]">
                CHARACTER SHEET // PLAYER 1
              </div>
              <h1 className="font-pixel font-bold text-2xl sm:text-3xl text-white tracking-wide">
                PRATIK SILWAL 
              </h1>
              <p className="font-pixel text-[10px] text-[#00F0FF] mt-0.5">
                CLASS: CREATIVE TECHNOLOGIST (LVL 99)
              </p>
            </div>

            <div className="text-[10px] font-pixel text-muted-foreground space-y-1 sm:text-right">
              <div>BASE: KATHMANDU, NEPAL (NPT / UTC+5:45)</div>
              <div>COMM: silwalpratik@gmail.com</div>
              <div>WEB: https://https://portfolio-website-1-snowy.vercel.app/work</div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed pt-2 font-sans">
            A maker who operates with an engineer&apos;s precision and an artisan&apos;s reverence.
            Six years synthesizing low-latency software engineering, accessible design systems,
            procedural 3D in Blender, 4K documentary cinematography, and 35mm street monographs.
            Substance over hype.
          </p>
        </div>

        {/* 1. Six Domains Attribute Tree */}
        <section className="space-y-3">
          <h2 className="text-[10px] font-pixel uppercase text-[#00F0FF]">
            == UNLOCKED DOMAIN CAPABILITIES ==
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 bg-black/50 border border-white/[0.1]">
              <span className="text-[#00F0FF] font-pixel text-[10px] block mb-1">
                [01. SOFTWARE_SYS]
              </span>
              <p className="text-[11px] text-muted-foreground">
                TypeScript, Next.js, Web Audio API, WebGL, Rust (Wasm), SQLite, Tailwind
              </p>
            </div>
            <div className="p-3 bg-black/50 border border-white/[0.1]">
              <span className="text-[#FF007F] font-pixel text-[10px] block mb-1">
                [02. VECTOR_FORGE]
              </span>
              <p className="text-[11px] text-muted-foreground">
                Design Systems, Dark Mode Tokens, Topographic GIS, WCAG AAA, Figma
              </p>
            </div>
            <div className="p-3 bg-black/50 border border-white/[0.1]">
              <span className="text-[#FF8C00] font-pixel text-[10px] block mb-1">
                [03. POLYGON_REALM]
              </span>
              <p className="text-[11px] text-muted-foreground">
                Blender 4.2, Geometry Nodes, OptiX Cycles, Three.js, Draco/GLTF
              </p>
            </div>
            <div className="p-3 bg-black/50 border border-white/[0.1]">
              <span className="text-[#FF2A55] font-pixel text-[10px] block mb-1">
                [04. FMV_CINEMATICS]
              </span>
              <p className="text-[11px] text-muted-foreground">
                After Effects (Curves/Physics), Premiere Pro, DaVinci Resolve, Gimbal Rigs
              </p>
            </div>
            <div className="p-3 bg-black/50 border border-white/[0.1]">
              <span className="text-[#39FF14] font-pixel text-[10px] block mb-1">
                [05. OPTICAL_RECON]
              </span>
              <p className="text-[11px] text-muted-foreground">
                Canon EOS 6D, 35mm Prime Optics, Dawn Street Low-Light, Archival Printing
              </p>
            </div>
            <div className="p-3 bg-black/50 border border-white/[0.1]">
              <span className="text-[#FFE600] font-pixel text-[10px] block mb-1">
                [06. LORE_ARCHIVES]
              </span>
              <p className="text-[11px] text-muted-foreground">
                Technical Writing, Focusrite Scarlett Solo (Acoustic Capture), Essays
              </p>
            </div>
          </div>
        </section>

        {/* 2. Campaign History */}
        <section className="space-y-4 pt-4 border-t border-white/[0.1]">
          <h2 className="text-[10px] font-pixel uppercase text-[#39FF14]">
            == CAMPAIGN MISSIONS & COMMISSIONS ==
          </h2>

          <div className="space-y-6 text-xs font-mono">
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-pixel text-[11px]">
                <span>INDEPENDENT CREATIVE TECHNOLOGIST & STUDIO DIRECTOR</span>
                <span className="text-[#FFE600]">2023 – PRESENT • KATHMANDU</span>
              </div>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                Consulting on high-impact projects bridging full-stack web applications,
                interactive 3D WebGL experiences, and visual storytelling. Built the
                Aura Web Audio Synthesizer (4,200+ stars) and executed the Monoliths of
                Patan procedural 3D research.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-pixel text-[11px]">
                <span>DIRECTOR & CINEMATOGRAPHER — &ldquo;ECHOES OF THE VALLEY&rdquo;</span>
                <span className="text-[#FFE600]">2023 • LALITPUR / KATHMANDU</span>
              </div>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                Directed an observational 4K documentary on generational lost-wax bronze
                bell makers. Shot on Canon 6D with prime glass and recorded on Focusrite
                Scarlett Solo. Selected for KIMFF 2023.
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-pixel text-[11px]">
                <span>LEAD PRODUCT & DESIGN SYSTEMS ENGINEER — NEURA & ALPINE LABS</span>
                <span className="text-[#FFE600]">2021 – 2023 • REMOTE / NEPAL</span>
              </div>
              <p className="text-muted-foreground font-sans text-xs leading-relaxed">
                Architected accessible component libraries, standardized design tokens,
                and built Alpine cartographic navigation systems utilized across 14
                Himalayan expeditions.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Trophies & Honors */}
        <section className="space-y-3 pt-4 border-t border-white/[0.1]">
          <h2 className="text-[10px] font-pixel uppercase text-[#FFE600]">
            == TROPHIES & GUILD HONORS ==
          </h2>

          <ul className="space-y-1.5 text-xs text-muted-foreground font-sans">
            <li className="flex items-center gap-2">
              <span className="text-[#FFE600] font-pixel text-[10px]">[TROPHY]</span>
              <strong className="text-white">Official Selection:</strong>
              <span>Kathmandu International Mountain Film Festival (KIMFF), 2023</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#FFE600] font-pixel text-[10px]">[TROPHY]</span>
              <strong className="text-white">Gold Winner:</strong>
              <span>South Asian Design Biennale (Cartography & Wayfinding), 2023</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#FFE600] font-pixel text-[10px]">[TROPHY]</span>
              <strong className="text-white">Exhibitor:</strong>
              <span>Taragaon Next Contemporary Art Museum (Kathmandu at 05:00 Series)</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
