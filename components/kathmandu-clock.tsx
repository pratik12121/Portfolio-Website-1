"use client";

import React, { useState, useEffect } from "react";
import { Clock, MapPin, Radio, Terminal } from "lucide-react";

interface KathmanduClockProps {
  showAvailability?: boolean;
  compact?: boolean;
}

export function KathmanduClock({
  showAvailability = true,
  compact = false,
}: KathmanduClockProps) {
  const [timeString, setTimeString] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kathmandu",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setTimeString(formatter.format(new Date()));
      } catch {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const npt = new Date(utc + 3600000 * 5.75);
        setTimeString(npt.toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center gap-2 text-xs font-pixel">
      {/* Location & Time HUD */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#090815] border border-[#00F0FF]/40 text-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.2)]">
        <span className="w-1.5 h-1.5 bg-[#00F0FF] animate-blink" />
        <span className="text-[10px] text-white/90 tracking-wide">
          STAGE: KATHMANDU
        </span>
        <span className="text-[#00F0FF]/40">|</span>
        <span className="text-[10px] text-[#FFE600] tabular-nums font-mono font-bold">
          {mounted && timeString ? timeString : "18:14:00"} NPT
        </span>
      </div>

      {/* Availability / Co-Op Status */}
      {showAvailability && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#061A0C] border border-[#39FF14]/50 text-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.2)]">
          <span className="w-1.5 h-1.5 bg-[#39FF14] animate-ping" />
          <span className="text-[9px] tracking-wider uppercase">
            {compact ? "P1 READY" : "PLAYER 1: READY FOR CO-OP"}
          </span>
        </div>
      )}
    </div>
  );
}
