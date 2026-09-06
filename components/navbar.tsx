"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, ArrowUpRight, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

// Loaded only in browser — Three.js needs window/canvas
const SnakeGame = dynamic(() => import("./SnakeGame"), { ssr: false });

const NAV_LINKS = [
  { label: "01.WORK", href: "/work" },
  { label: "02.ABOUT", href: "/about" },
  { label: "03.LORE", href: "/blog" },
  { label: "04.COMM", href: "/contact" },
  { label: "05.STATS", href: "/resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSnakeOpen, setIsSnakeOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pt-3 sm:pt-4 transition-all duration-300 pointer-events-none">
      <div
        className={cn(
          "w-full max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 transition-all duration-300 pointer-events-auto",
          "bg-[#070612]/90 border border-[#00F0FF]/35 shadow-[0_0_20px_rgba(0,240,255,0.15)] backdrop-blur-md",
          scrolled ? "shadow-[0_0_30px_rgba(0,240,255,0.25)] border-[#00F0FF]/60" : ""
        )}
      >
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-foreground hover:opacity-95 transition-opacity"
        >
          <div className="flex items-center justify-center px-2 py-1 bg-[#00F0FF]/15 border border-[#00F0FF] text-[#00F0FF] font-pixel text-xs tracking-tighter">
            P1
          </div>
          <div className="flex flex-col">
            <span className="font-pixel font-bold text-xs sm:text-sm tracking-wider text-white flex items-center gap-1.5">
              PRATIK SILWAL
              <span className="w-1.5 h-1.5 bg-[#39FF14] animate-blink" />
            </span>
            <span className="text-[9px] font-pixel text-[#FFE600] tracking-widest">
              LVL 99 MAKER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-black/40 border border-white/[0.08] p-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-1 text-[11px] font-pixel tracking-wider transition-all duration-150",
                  isActive
                    ? "text-[#00F0FF] bg-[#00F0FF]/15 border border-[#00F0FF]/40 shadow-[0_0_8px_rgba(0,240,255,0.3)]"
                    : "text-muted-foreground hover:text-white hover:bg-white/[0.05]"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Co-Op CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-white bg-black/50 border border-white/[0.15] hover:border-[#FFE600] transition-colors"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-cyan-400" />
              )
            ) : (
              <div className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Snake Easter Egg trigger */}
          <button
            onClick={() => setIsSnakeOpen((o) => !o)}
            aria-label="Toggle snake game"
            title="🐍 Easter egg"
            className={cn(
              "w-7 h-7 flex items-center justify-center border transition-colors",
              isSnakeOpen
                ? "text-[#39FF14] bg-[#39FF14]/10 border-[#39FF14]/60 shadow-[0_0_8px_rgba(57,255,20,0.4)]"
                : "text-muted-foreground hover:text-[#39FF14] bg-black/50 border-white/[0.15] hover:border-[#39FF14]/60"
            )}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
          </button>

          {/* Quick Contact Action */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-pixel text-black bg-[#39FF14] hover:bg-[#39FF14]/90 font-bold border border-[#39FF14] shadow-[0_0_12px_rgba(57,255,20,0.4)] transition-all hover:scale-[1.02]"
          >
            <span>PRESS START</span>
            <ArrowUpRight className="w-3 h-3 text-black" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-7 h-7 flex items-center justify-center text-foreground bg-black/50 border border-[#00F0FF]/40"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-[#FF007F]" />
            ) : (
              <Menu className="w-4 h-4 text-[#00F0FF]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-3 top-16 p-4 bg-[#070612]/95 border-2 border-[#00F0FF]/50 shadow-[0_0_30px_rgba(0,240,255,0.3)] backdrop-blur-2xl pointer-events-auto flex flex-col gap-2 animate-in fade-in duration-150">
          <div className="text-[10px] font-pixel text-[#39FF14] pb-1 border-b border-white/[0.1] tracking-widest">
            == SELECT STAGE / MENU ==
          </div>
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-2 px-3 font-pixel text-xs tracking-wider transition-all",
                  isActive
                    ? "bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF]/40"
                    : "text-muted-foreground hover:text-white hover:bg-white/[0.05]"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-2 border-t border-white/[0.1] flex items-center justify-between">
            <span className="text-[10px] font-pixel text-[#FFE600]">
              COMMUNICATIONS:
            </span>
            <Link
              href="/contact"
              className="text-[10px] font-pixel text-[#00F0FF] hover:underline"
            >
              TRANSMIT BRIEF →
            </Link>
          </div>
        </div>
      )}

      {/* ── Snake Game Panel ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {isSnakeOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="snake-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 pointer-events-auto"
              onClick={() => setIsSnakeOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="snake-panel"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed top-20 left-1/2 -translate-x-1/2 z-50 w-[min(96vw,460px)] p-4 bg-[#070612]/98 border-2 border-[#39FF14]/50 shadow-[0_0_40px_rgba(57,255,20,0.25)] pointer-events-auto"
            >
              {/* Panel header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-3.5 h-3.5 text-[#39FF14]" />
                  <span className="font-pixel text-[10px] text-[#39FF14] tracking-widest">
                    MINI-QUEST: SNAKE.EXE
                  </span>
                </div>
                <span className="font-pixel text-[9px] text-muted-foreground">
                  [EASTER EGG UNLOCKED]
                </span>
              </div>

              {/* Game */}
              <SnakeGame onClose={() => setIsSnakeOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
