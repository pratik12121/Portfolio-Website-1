"use client";

import React, { useState } from "react";
import { KathmanduClock } from "@/components/kathmandu-clock";
import { DOMAIN_CONFIG, Domain, cn } from "@/lib/utils";
import {
  Copy,
  Check,
  Send,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [selectedDomains, setSelectedDomains] = useState<Domain[]>(["software"]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$3,000 – $6,000 (Core Co-op)",
    timeline: "1 – 2 Months",
    message: "",
  });

  const emailAddress = "pratik@domain.nepal";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const toggleDomain = (domain: Domain) => {
    setSelectedDomains((prev) =>
      prev.includes(domain)
        ? prev.filter((d) => d !== domain)
        : [...prev, domain]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const domains = Object.keys(DOMAIN_CONFIG) as Domain[];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16 font-mono">
      {/* Header */}
      <div className="space-y-3 mb-12 pb-6 border-b border-[#00F0FF]/30">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-pixel text-[#00F0FF]">
            == COMM TERMINAL // CO-OP DISPATCH ==
          </span>
          <span className="text-muted-foreground">•</span>
          <KathmanduClock showAvailability={true} compact={true} />
        </div>

        <h1 className="font-pixel font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide text-glow-cyan">
          CONTINUE GAME? INSERT COIN
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed font-sans">
          Partnering with ambitious founders, engineering leads, and creative studios
          worldwide. Transmit your mission briefing below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Terminal Form */}
        <div className="lg:col-span-7">
          <div className="p-6 bg-[#070714] border-2 border-[#00F0FF]/40 shadow-[0_0_25px_rgba(0,240,255,0.15)] relative">
            {/* Corner notches */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#00F0FF]" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#00F0FF]" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#00F0FF]" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#00F0FF]" />

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-10 h-10 bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14] flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-pixel font-bold text-lg text-white">
                  TRANSMISSION BUFFERED [OK]
                </h3>
                <p className="text-xs text-muted-foreground font-terminal text-sm max-w-md mx-auto">
                  &gt; BRIEF RECEIVED. PLAYER 1 REVIEWS ALL MISSION REQUESTS WITHIN 24-48 HRS (NPT).
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-[10px] font-pixel bg-[#00F0FF] text-black font-bold"
                >
                  TRANSMIT ANOTHER BRIEF
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Domain Selector */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-pixel text-[#FFE600] block">
                    SELECT MISSION DOMAINS:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {domains.map((dom) => {
                      const conf = DOMAIN_CONFIG[dom];
                      const isSelected = selectedDomains.includes(dom);
                      return (
                        <button
                          type="button"
                          key={dom}
                          onClick={() => toggleDomain(dom)}
                          style={{
                            borderColor: isSelected ? conf.color : undefined,
                            backgroundColor: isSelected ? `${conf.color}25` : undefined,
                            color: isSelected ? conf.color : undefined,
                          }}
                          className={cn(
                            "px-2.5 py-1 text-[10px] font-pixel border transition-all",
                            isSelected
                              ? "font-bold shadow-[0_0_8px_rgba(0,240,255,0.3)]"
                              : "border-white/[0.12] bg-black/60 text-muted-foreground hover:text-white"
                          )}
                        >
                          {isSelected ? "✓ " : ""}[{conf.code}]
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-pixel text-muted-foreground block">
                      PLAYER NAME / FACTION *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Maya / Studio Core"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-black/70 border border-white/[0.15] focus:border-[#00F0FF] text-xs font-mono text-white focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-pixel text-muted-foreground block">
                      COMM FREQUENCY (EMAIL) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="maya@domain.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-black/70 border border-white/[0.15] focus:border-[#00F0FF] text-xs font-mono text-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-pixel text-muted-foreground block">
                      CREDITS ALLOCATION
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-[#05050C] border border-white/[0.15] focus:border-[#00F0FF] text-xs font-mono text-white focus:outline-none"
                    >
                      <option>&lt; $3,000 (Small sprint / advisory)</option>
                      <option>$3,000 – $6,000 (Core Co-op)</option>
                      <option>$6,000 – $15,000 (Full Production)</option>
                      <option>$15,000+ (Flagship Suite)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-pixel text-muted-foreground block">
                      MISSION TIMELINE
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({ ...formData, timeline: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-[#05050C] border border-white/[0.15] focus:border-[#00F0FF] text-xs font-mono text-white focus:outline-none"
                    >
                      <option>Immediate / Next 2 weeks</option>
                      <option>1 – 2 Months</option>
                      <option>Q3 / Q4 Campaign</option>
                      <option>Flexible / Exploratory</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-[10px] font-pixel text-muted-foreground block">
                    MISSION OBJECTIVES & SPECS *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what you are building, the performance targets, and the creative intent..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-black/70 border border-white/[0.15] focus:border-[#00F0FF] text-xs font-mono text-white focus:outline-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[#39FF14] hover:bg-[#00F0FF] text-black font-bold font-pixel text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(57,255,20,0.5)]"
                >
                  {submitting ? (
                    <span>TRANSMITTING PACKETS...</span>
                  ) : (
                    <>
                      <span>TRANSMIT BRIEF [SEND]</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right: Direct Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-5 bg-[#070714] border-2 border-white/[0.12] space-y-3">
            <h3 className="text-[10px] font-pixel uppercase text-[#00F0FF]">
              DIRECT COMM CHANNEL
            </h3>
            <p className="text-xs text-muted-foreground font-sans">
              Prefer direct asynchronous electronic mail?
            </p>
            <div className="flex items-center justify-between p-2.5 bg-black/60 border border-white/[0.1] text-xs">
              <span className="text-white font-mono">{emailAddress}</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-pixel bg-white/[0.08] hover:bg-white/[0.15] text-white transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-[#39FF14]" />
                    <span className="text-[#39FF14]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="p-5 bg-[#070714] border-2 border-white/[0.12] space-y-2">
            <h3 className="text-[10px] font-pixel uppercase text-[#39FF14]">
              GEOGRAPHIC COORDINATES
            </h3>
            <div className="text-xs text-muted-foreground space-y-1 font-sans">
              <div className="flex items-center gap-2 text-white font-mono text-xs">
                <MapPin className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>Kathmandu Valley, Nepal (UTC+5:45)</span>
              </div>
              <p>
                Remote co-op commissions worldwide. Seamless overlap with European,
                Asian, and US Eastern time windows.
              </p>
            </div>
          </div>

          <div className="p-5 bg-[#070714] border-2 border-white/[0.12] space-y-3">
            <h3 className="text-[10px] font-pixel uppercase text-[#FFE600]">
              NETWORKS & VAULTS
            </h3>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-pixel">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 border border-white/[0.1] hover:border-[#00F0FF] flex items-center justify-between text-muted-foreground hover:text-white"
              >
                <span>[GITHUB]</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 border border-white/[0.1] hover:border-[#00F0FF] flex items-center justify-between text-muted-foreground hover:text-white"
              >
                <span>[BEHANCE]</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 border border-white/[0.1] hover:border-[#00F0FF] flex items-center justify-between text-muted-foreground hover:text-white"
              >
                <span>[TWITTER]</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="https://unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-black/60 border border-white/[0.1] hover:border-[#00F0FF] flex items-center justify-between text-muted-foreground hover:text-white"
              >
                <span>[UNSPLASH]</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
