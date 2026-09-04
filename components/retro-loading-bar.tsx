"use client";

import React, { useState, useEffect } from "react";

const TELEMETRY_MESSAGES = [
  "MOUNTING MEMORY CARD (SLOT 01)...",
  "READING SECTOR 0x4B544D (KATHMANDU)...",
  "LOADING PROCEDURAL SHADERS // GLSL OK",
  "CALIBRATING CANON 6D SENSOR TELEMETRY...",
  "PARSING 6 CREATIVE DOMAINS // 100% MOUNTED",
  "SYS READY // PRESS START OR SCROLL DOWN",
];

export function RetroLoadingBar() {
  const [progress, setProgress] = useState(78);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) return 64; // loop dynamically like classic demo loops
        return prev + 2;
      });
    }, 450);

    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % TELEMETRY_MESSAGES.length);
    }, 2400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(msgInterval);
    };
  }, []);

  const totalBlocks = 18;
  const filledBlocks = Math.floor((progress / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-5 rounded-xl bg-[#06060E]/90 border border-[#00F0FF]/30 shadow-[0_0_20px_rgba(0,240,255,0.15)] font-terminal text-sm sm:text-base space-y-3">
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-[#00F0FF]">
        <div className="flex items-center gap-2 font-pixel text-[11px]">
          <span className="w-2 h-2 rounded-none bg-[#39FF14] animate-blink" />
          <span className="text-[#39FF14] tracking-wider">NOW LOADING...</span>
        </div>
        <div className="font-pixel text-[10px] text-[#FFE600] tracking-wider">
          FREE PLAY [CREDITS: 99]
        </div>
      </div>

      {/* Segmented Chunky Loading Bar */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-xs font-pixel text-muted-foreground">
          <span className="text-white/80">READING DISK DATA</span>
          <span className="text-[#00F0FF] font-bold">{progress}%</span>
        </div>

        <div className="w-full bg-[#0C0B1C] border border-[#00F0FF]/40 p-1 flex items-center gap-0.5">
          {Array.from({ length: totalBlocks }).map((_, i) => (
            <span
              key={i}
              className={`h-4 sm:h-5 flex-1 transition-colors duration-150 ${
                i < filledBlocks
                  ? "bg-[#00F0FF] shadow-[0_0_6px_rgba(0,240,255,0.8)]"
                  : "bg-white/[0.04]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Cycling Memory Text Log */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground pt-1 border-t border-white/[0.08]">
        <div className="truncate text-[#E0E7FE] flex items-center gap-1.5 font-mono text-[11px] sm:text-xs">
          <span className="text-[#39FF14]">&gt;&gt;</span>
          <span>{TELEMETRY_MESSAGES[msgIndex]}</span>
          <span className="animate-blink text-[#00F0FF]">_</span>
        </div>
        <span className="hidden sm:inline-block font-pixel text-[9px] text-muted-foreground/60">
          60 FPS CRT BIOS
        </span>
      </div>
    </div>
  );
}
