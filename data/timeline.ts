import { Domain } from "@/lib/utils";

export interface TimelineMilestone {
  year: string;
  period?: string;
  title: string;
  subtitle: string;
  description: string;
  domain: Domain;
  location: string;
  keySkills: string[];
}

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2024",
    period: "Present",
    title: "Independent Creative Technologist & Studio Director",
    subtitle: "Synthesis of Code, 3D, and Cinema",
    description:
      "Operating from Kathmandu on select client commissions and exploratory tools. Building high-performance web applications, procedural 3D environments, and documentary storytelling.",
    domain: "software",
    location: "Kathmandu, Nepal",
    keySkills: ["Next.js", "Three.js / WebGL", "Blender Geometry Nodes", "Technical Direction"],
  },
  {
    year: "2023",
    title: "Documentary Cinematography & Cartographic Design",
    subtitle: "Directing 'Echoes of the Valley' & Alpine GIS Systems",
    description:
      "Directed and edited award-winning documentary on vanishing bronze bell artisans in Patan. Concurrently led the visual identity for Alpine Research Institute's high-altitude navigation systems.",
    domain: "video",
    location: "Lalitpur & Kathmandu, Nepal",
    keySkills: ["Canon 6D", "Adobe Premiere & After Effects", "Scarlett Solo", "Cartographic Systems"],
  },
  {
    year: "2022",
    title: "Senior Product & Design Systems Engineer",
    subtitle: "Accessible Interfaces & Design Tokens",
    description:
      "Designed and engineered large-scale dark-mode component libraries for distributed teams. Standardized token architectures and WCAG AAA compliance.",
    domain: "design",
    location: "Remote / Nepal",
    keySkills: ["Design Systems", "TypeScript", "Tailwind CSS", "Figma Tokens"],
  },
  {
    year: "2020 - 2021",
    title: "Visual Arts & Street Photography Exploration",
    subtitle: "Monochrome Studies of the Kathmandu Valley",
    description:
      "Spent 18 months documenting early-morning street rituals, Newar brickwork, and the quiet dignity of pre-dawn temple courtyards on 35mm primes.",
    domain: "photo",
    location: "Kathmandu Valley",
    keySkills: ["Low-Light Exposure", "Archival Printing", "Street Candids", "Lightroom"],
  },
  {
    year: "2018 - 2019",
    title: "The Computational Foundations",
    subtitle: "Fullstack Web & Audio Algorithms",
    description:
      "Began deep exploration into Web Audio API, real-time graphics, and performant web architecture, bridging the gap between artistic intuition and engineering rigor.",
    domain: "software",
    location: "Kathmandu",
    keySkills: ["JavaScript / TypeScript", "Audio DSP Basics", "React", "Linux"],
  },
];
