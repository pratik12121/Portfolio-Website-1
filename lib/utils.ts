import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type Domain =
  | "software"
  | "design"
  | "threed"
  | "video"
  | "photo"
  | "blog";

export interface DomainMeta {
  id: Domain;
  name: string;
  code: string;
  tagline: string;
  color: string;
  glowClass: string;
  badgeBg: string;
  dotColor: string;
}

export const DOMAIN_CONFIG: Record<Domain, DomainMeta> = {
  software: {
    id: "software",
    name: "Software",
    code: "SOFTWARE_SYS",
    tagline: "Low-level audio DSP, WebGL & Netcode",
    color: "#00F0FF",
    glowClass: "text-glow-cyan",
    badgeBg: "bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/40",
    dotColor: "bg-[#00F0FF]",
  },
  design: {
    id: "design",
    name: "Design",
    code: "VECTOR_FORGE",
    tagline: "Cartography, HUDs & Pixel Tokens",
    color: "#FF007F",
    glowClass: "text-glow-magenta",
    badgeBg: "bg-[#FF007F]/15 text-[#FF007F] border-[#FF007F]/40",
    dotColor: "bg-[#FF007F]",
  },
  threed: {
    id: "threed",
    name: "3D",
    code: "POLYGON_REALM",
    tagline: "Low-poly geometry, Shaders & OptiX",
    color: "#FF8C00",
    glowClass: "text-glow-amber",
    badgeBg: "bg-[#FF8C00]/15 text-[#FF8C00] border-[#FF8C00]/40",
    dotColor: "bg-[#FF8C00]",
  },
  video: {
    id: "video",
    name: "Video",
    code: "FMV_CINEMATICS",
    tagline: "4K cutscenes & AE kinetic curves",
    color: "#FF2A55",
    glowClass: "text-glow-red",
    badgeBg: "bg-[#FF2A55]/15 text-[#FF2A55] border-[#FF2A55]/40",
    dotColor: "bg-[#FF2A55]",
  },
  photo: {
    id: "photo",
    name: "Photography",
    code: "OPTICAL_RECON",
    tagline: "35mm dawn street monographs & rain shadows",
    color: "#39FF14",
    glowClass: "text-glow-green",
    badgeBg: "bg-[#39FF14]/15 text-[#39FF14] border-[#39FF14]/40",
    dotColor: "bg-[#39FF14]",
  },
  blog: {
    id: "blog",
    name: "Writing",
    code: "LORE_ARCHIVES",
    tagline: "Chronicles of craft, physics & friction",
    color: "#FFE600",
    glowClass: "text-glow-gold",
    badgeBg: "bg-[#FFE600]/15 text-[#FFE600] border-[#FFE600]/40",
    dotColor: "bg-[#FFE600]",
  },
};
