import React from "react";
import Link from "next/link";
import { KathmanduClock } from "./kathmandu-clock";
import { DOMAIN_CONFIG, Domain } from "@/lib/utils";
import {
  Github,
  Twitter,
  Linkedin,
  ArrowUpRight,
  Layers,
  Camera,
  Terminal,
} from "lucide-react";

const SOCIAL_LINKS = [
  { name: "GITHUB_NET", href: "https://github.com", icon: Github },
  { name: "BEHANCE_VAULT", href: "https://behance.net", icon: Layers },
  { name: "X_DISPATCH", href: "https://twitter.com", icon: Twitter },
  { name: "LINKED_LINK", href: "https://linkedin.com", icon: Linkedin },
  { name: "UNSPLASH_FILMS", href: "https://unsplash.com", icon: Camera },
];

export function Footer() {
  const domains = Object.keys(DOMAIN_CONFIG) as Domain[];

  return (
    <footer className="relative border-t-2 border-[#00F0FF]/30 bg-[#040409] text-foreground pt-14 pb-12 overflow-hidden font-mono">
      {/* Subtle CRT Phosphor Scan Grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-36 bg-gradient-to-b from-[#00F0FF]/10 via-transparent to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Tier: Arcade Credits Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-white/[0.1]">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-pixel font-bold text-xl sm:text-2xl text-white text-glow-cyan tracking-wider">
                PRATIK SILWAL 
              </span>
              <span className="text-[10px] font-pixel px-2 py-0.5 bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/40">
                [LVL 99 MAKER]
              </span>
            </div>
            <p className="text-xs text-muted-foreground max-w-md leading-relaxed">
              Quietly confident. Operating across 6 computational disciplines from
              Sector Kathmandu, Nepal. Realtime rendering, low-latency DSP, 4K FMV,
              and tactile physical tools.
            </p>
            <div className="pt-1">
              <KathmanduClock showAvailability={true} />
            </div>
          </div>

          {/* Six Domains Quest Select */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-pixel text-[#FFE600] tracking-widest uppercase">
              == SELECT QUEST ==
            </h4>
            <ul className="space-y-1.5 text-xs font-mono">
              {domains.map((dom) => {
                const conf = DOMAIN_CONFIG[dom];
                return (
                  <li key={dom}>
                    <Link
                      href={`/work?domain=${dom}`}
                      className="group flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
                    >
                      <span
                        className="w-1.5 h-1.5 animate-blink"
                        style={{ backgroundColor: conf.color }}
                      />
                      <span className="font-pixel text-[10px]" style={{ color: conf.color }}>
                        [{conf.code}]
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Comm Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-pixel text-[#39FF14] tracking-widest uppercase">
              == COMM CHANNELS ==
            </h4>
            <ul className="space-y-1.5 text-xs font-mono">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-[#00F0FF] transition-all"
                  >
                    <span className="font-pixel text-[10px]">{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="font-pixel text-[10px] text-[#FFE600] hover:underline flex items-center gap-1"
                >
                  <span>&gt;&gt; INSERT COIN TO COMMUNICATE</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} PLAYER 1 (PRATIK).</span>
            <span>•</span>
            <span className="text-[#39FF14]">MEMORY CARD 01 SAVED</span>
          </div>
          <div className="flex items-center gap-2 font-pixel text-[9px] text-[#00F0FF]/80">
            <span>60HZ CRT EMULATION • ZERO SPRITE BLOAT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
