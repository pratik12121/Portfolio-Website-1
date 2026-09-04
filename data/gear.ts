import { Domain } from "@/lib/utils";

export interface GearItem {
  id: string;
  name: string;
  category: "Camera & Optics" | "Audio & Recording" | "Computing & Rig" | "Software & Creative Suite" | "Peripherals & Stabilization";
  domain: Domain;
  spec: string;
  roleInWorkflow: string;
  featured: boolean;
  status: "Daily Workhorse" | "Field Rig" | "Studio Core" | "Production Standard";
}

export const GEAR_ITEMS: GearItem[] = [
  {
    id: "canon-6d",
    name: "Canon EOS 6D Full-Frame",
    category: "Camera & Optics",
    domain: "photo",
    spec: "20.2MP Full-Frame CMOS, ISO 100-25600, MagicLantern RAW",
    roleInWorkflow: "The core sensor behind my photography monographs and low-light documentary cinema work in Kathmandu. Renowned for its organic color rendering, soft noise grain, and exceptional dawn low-light performance.",
    featured: true,
    status: "Daily Workhorse",
  },
  {
    id: "canon-50mm",
    name: "Canon EF 50mm f/1.4 USM",
    category: "Camera & Optics",
    domain: "photo",
    spec: "Standard Prime, Ultrasonic Motor, 8-blade circular aperture",
    roleInWorkflow: "My primary lens for street photography and intimate artisan interviews. The natural human perspective matches how the eye wanders through Patan's courtyards.",
    featured: true,
    status: "Daily Workhorse",
  },
  {
    id: "scarlett-solo",
    name: "Focusrite Scarlett Solo (3rd Gen)",
    category: "Audio & Recording",
    domain: "video",
    spec: "24-bit/192kHz USB Audio Interface, High-headroom instrument input",
    roleInWorkflow: "The acoustic anchor for voiceover recording, foley capture of bronze bells, and monitoring Web Audio engine synthesizer waveforms with zero jitter.",
    featured: true,
    status: "Studio Core",
  },
  {
    id: "phone-gimbal",
    name: "3-Axis Motorized Mobile Gimbal",
    category: "Peripherals & Stabilization",
    domain: "video",
    spec: "Magnetic Quick-Release, 3-Axis Stabilization, Active Tracking",
    roleInWorkflow: "Enables fast, unobtrusive run-and-gun b-roll tracking shots through tight alleyways where bulky tripod setups would disrupt candid human interactions.",
    featured: true,
    status: "Field Rig",
  },
  {
    id: "adobe-ae",
    name: "Adobe After Effects",
    category: "Software & Creative Suite",
    domain: "video",
    spec: "Graph Editor, Expression Engines, 3D Camera Tracking",
    roleInWorkflow: "The laboratory where timing, velocity curves, spatial physics, and title kinematics are tested and translated into digital code animations.",
    featured: true,
    status: "Production Standard",
  },
  {
    id: "adobe-premiere",
    name: "Adobe Premiere Pro",
    category: "Software & Creative Suite",
    domain: "video",
    spec: "Non-Linear 4K Timeline, Lumetri Color Engine, Essential Sound",
    roleInWorkflow: "Longform narrative editing for documentary shorts, documentary pacing, and multi-track audio synchronization with Scarlett recordings.",
    featured: false,
    status: "Production Standard",
  },
  {
    id: "blender-3d",
    name: "Blender 4.2 LTS",
    category: "Software & Creative Suite",
    domain: "threed",
    spec: "Geometry Nodes, Cycles OptiX, Procedural Shader Graph",
    roleInWorkflow: "Procedural architectural modeling, Newar pagoda geometry reconstruction, and generating optimized low-poly GLTF models for Three.js web scenes.",
    featured: true,
    status: "Studio Core",
  },
  {
    id: "next-fullstack",
    name: "Next.js & TypeScript Stack",
    category: "Software & Creative Suite",
    domain: "software",
    spec: "App Router, Server Components, Tailwind CSS, Framer Motion",
    roleInWorkflow: "The architectural foundation for web applications, editorial platforms, and interactive canvas tools that load fast and respect visitor attention.",
    featured: true,
    status: "Daily Workhorse",
  },
  {
    id: "studio-display",
    name: "Calibrated 4K Color-Accurate Monitor",
    category: "Computing & Rig",
    domain: "design",
    spec: "99% DCI-P3, 100% sRGB, Hardware Calibrated Delta-E < 1.5",
    roleInWorkflow: "Crucial for ensuring print-ready photography grading, high-altitude color fidelity, and accessible WCAG contrast compliance.",
    featured: false,
    status: "Studio Core",
  },
];
