import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS, Project } from "@/data/projects";
import { CategoryBadge } from "@/components/category-badge";
import { DOMAIN_CONFIG } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  User,
  Wrench,
  CheckCircle2,
  Quote,
  Sparkles,
  Terminal,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Mission Not Found" };
  }

  return {
    title: `[QUEST] ${project.title} — Post-Mortem`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Pratik Portfolio`,
      description: project.summary,
      images: [{ url: project.coverImage }],
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const currentIndex = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const project = PROJECTS[currentIndex];
  const domainConfig = DOMAIN_CONFIG[project.domain];

  const prevProject =
    currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16 font-mono">
      {/* Back Navigation */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-white/[0.08]">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-[10px] font-pixel text-muted-foreground hover:text-[#00F0FF] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>&lt;&lt; RETURN TO MISSION SELECT</span>
        </Link>
        <CategoryBadge domain={project.domain} size="md" />
      </div>

      {/* Header Info */}
      <header className="space-y-3 mb-8">
        <div className="text-[10px] font-pixel text-[#FFE600]">
          QUEST FILE: {project.slug.toUpperCase()}.DAT
        </div>
        <h1 className="font-pixel font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide leading-tight text-glow-cyan">
          {project.title}
        </h1>
        <p className="text-sm font-terminal text-[#39FF14]">
          &gt;&gt; {project.subtitle}
        </p>
      </header>

      {/* Specifications Telemetry Drawer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#070714] border-2 border-white/[0.12] mb-10 text-[10px] font-pixel">
        <div>
          <span className="text-muted-foreground block mb-1">CLIENT FACTION</span>
          <span className="text-[#00F0FF] font-bold">{project.client}</span>
        </div>
        <div>
          <span className="text-muted-foreground block mb-1">CAMPAIGN YEAR</span>
          <span className="text-[#FFE600] font-bold">{project.year} ({project.duration})</span>
        </div>
        <div>
          <span className="text-muted-foreground block mb-1">PLAYER ROLE</span>
          <span className="text-white font-bold">{project.role}</span>
        </div>
        <div>
          <span className="text-muted-foreground block mb-1">DOMAIN CODE</span>
          <span className="font-bold" style={{ color: domainConfig.color }}>
            [{domainConfig.code}]
          </span>
        </div>
      </div>

      {/* Hero Media Cover */}
      <div className="relative w-full aspect-[16/9] border-2 border-white/[0.15] shadow-2xl mb-10 bg-black/60 overflow-hidden">
        {/* Pixel Corner notches */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#00F0FF] z-10" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#00F0FF] z-10" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#00F0FF] z-10" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#00F0FF] z-10" />

        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      {/* Action Links */}
      {project.links && Object.keys(project.links).length > 0 && (
        <div className="flex flex-wrap items-center gap-3 mb-10 font-pixel text-[10px]">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#39FF14] text-black font-bold border border-[#39FF14] hover:bg-white transition-all shadow-[0_0_12px_rgba(57,255,20,0.4)]"
            >
              <span>LAUNCH LIVE SIMULATION</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#070712] hover:bg-black border border-white/[0.2] text-white transition-all"
            >
              <span>VIEW REPO SOURCE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
            </a>
          )}
          {project.links.behance && (
            <a
              href={project.links.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#070712] hover:bg-black border border-white/[0.2] text-white transition-all"
            >
              <span>BEHANCE VAULT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
            </a>
          )}
          {project.links.preview && (
            <a
              href={project.links.preview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#070712] hover:bg-black border border-white/[0.2] text-white transition-all"
            >
              <span>WATCH CUTSCENE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
            </a>
          )}
        </div>
      )}

      {/* Main Mission Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
        <div className="lg:col-span-8 space-y-10">
          <section className="space-y-3">
            <h2 className="text-[10px] font-pixel uppercase tracking-widest text-[#00F0FF]">
              == MISSION BRIEFING & OBJECTIVE ==
            </h2>
            <p className="text-base text-white/90 leading-relaxed font-sans">
              {project.summary}
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-white/[0.08]">
            <h2 className="text-[10px] font-pixel uppercase tracking-widest text-[#FF2A55]">
              [OBSTACLES & BOSS MECHANICS]
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
              {project.challenge}
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-white/[0.08]">
            <h2 className="text-[10px] font-pixel uppercase tracking-widest text-[#39FF14]">
              [TACTICAL EXECUTION & CRAFT]
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans">
              {project.solution}
            </p>
          </section>

          {project.quote && (
            <div
              className="p-5 border-2 bg-[#0A0714] relative font-terminal text-base"
              style={{ borderColor: domainConfig.color }}
            >
              <Quote
                className="w-8 h-8 absolute top-3 right-3 opacity-15"
                style={{ color: domainConfig.color }}
              />
              <p className="text-[#FFE600] italic">
                &ldquo;{project.quote.text}&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2 text-[10px] font-pixel">
                <span className="text-white font-bold">{project.quote.author}</span>
                <span className="text-muted-foreground">({project.quote.role})</span>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar: Weapons, Specs, High Score */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-5 bg-[#070714] border-2 border-white/[0.12]">
            <h3 className="text-[10px] font-pixel uppercase text-[#00F0FF] mb-3">
              EQUIPPED WEAPONRY (STACK)
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 text-[10px] font-pixel bg-black/70 text-white border border-white/[0.15]"
                >
                  +{tool}
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 bg-[#070714] border-2 border-white/[0.12]">
            <h3 className="text-[10px] font-pixel uppercase text-[#39FF14] mb-3">
              QUEST ACHIEVEMENTS
            </h3>
            <ul className="space-y-2 text-xs">
              {project.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle2
                    className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[#39FF14]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.specs && (
            <div className="p-5 bg-[#070714] border-2 border-white/[0.12]">
              <h3 className="text-[10px] font-pixel uppercase text-[#FFE600] mb-3">
                CHASSIS TELEMETRY
              </h3>
              <dl className="space-y-1.5 text-xs">
                {Object.entries(project.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-white/[0.04]">
                    <dt className="text-muted-foreground">{key}</dt>
                    <dd className="text-white font-bold text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mb-16 space-y-6 pt-8 border-t border-white/[0.1]">
          <div className="text-[10px] font-pixel text-[#FFE600]">
            == VISUAL RECON ARTIFACTS ==
          </div>

          <div className="space-y-8">
            {project.gallery.map((img, i) => (
              <figure key={i} className="space-y-2">
                <div className="relative w-full aspect-[16/10] border-2 border-white/[0.12] bg-black/60 overflow-hidden">
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-xs font-terminal text-[#39FF14] flex items-center gap-2">
                  <span>&gt;&gt; {img.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <footer className="pt-10 border-t border-white/[0.1] grid grid-cols-1 sm:grid-cols-2 gap-4 font-pixel text-[10px]">
        <Link
          href={`/work/${prevProject.slug}`}
          className="p-4 bg-[#070712] border border-white/[0.15] hover:border-[#00F0FF] transition-all flex flex-col justify-between"
        >
          <span className="text-muted-foreground">&lt;&lt; PREVIOUS SAVE SLOT</span>
          <span className="font-bold text-white text-xs mt-2">{prevProject.title}</span>
        </Link>

        <Link
          href={`/work/${nextProject.slug}`}
          className="p-4 bg-[#070712] border border-white/[0.15] hover:border-[#00F0FF] transition-all flex flex-col justify-between text-right"
        >
          <span className="text-muted-foreground">NEXT SAVE SLOT &gt;&gt;</span>
          <span className="font-bold text-white text-xs mt-2">{nextProject.title}</span>
        </Link>
      </footer>
    </article>
  );
}
