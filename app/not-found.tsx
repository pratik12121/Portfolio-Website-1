import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 py-16 font-mono">
      <div className="relative p-8 sm:p-12 bg-[#070714] border-2 border-[#FF007F]/60 max-w-lg w-full space-y-5 shadow-[0_0_30px_rgba(255,0,127,0.25)]">
        {/* Corner Notches */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#FF007F]" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF007F]" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FF007F]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF007F]" />

        <div className="space-y-2">
          <div className="text-[10px] font-pixel text-[#FF2A55] tracking-widest uppercase animate-blink">
            == ERROR 404 // MEMORY PARITY FAULT ==
          </div>
          <h1 className="font-pixel font-bold text-3xl sm:text-4xl text-white text-glow-magenta">
            GAME OVER
          </h1>
          <p className="text-xs font-terminal text-[#FFE600] text-sm leading-relaxed pt-1">
            CONTINUE? 09... 08... 07...<br />
            THE REQUESTED SECTOR COORDINATES DO NOT EXIST IN DISK MEMORY.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 font-pixel text-[10px]">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-[#00F0FF] text-black font-bold border border-[#00F0FF] hover:bg-[#39FF14] hover:border-[#39FF14] transition-all"
          >
            <Home className="w-3.5 h-3.5" />
            <span>RESPAWN AT STAGE 01</span>
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-black border border-white/[0.2] text-white hover:text-[#00F0FF] transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>MISSION SELECT</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
