import { Domain } from "@/lib/utils";

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  domain: Domain;
  year: string;
  client: string;
  role: string;
  duration: string;
  featured: boolean;
  bentoSpan?: "large" | "medium" | "tall" | "standard";
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  tools: string[];
  coverImage: string;
  gallery: { url: string; caption: string; aspect?: string }[];
  links?: {
    live?: string;
    github?: string;
    behance?: string;
    preview?: string;
  };
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  specs?: Record<string, string>;
}

export const PROJECTS: Project[] = [
  // 1. SOFTWARE
  {
    id: "software-1",
    slug: "aura-audio-engine",
    title: "Aura Audio Engine",
    subtitle: "Real-time Node-based Web Synthesizer & Spatial Visualizer",
    domain: "software",
    year: "2024",
    client: "Open Source / Self-Initiated",
    role: "Lead Fullstack & Audio Developer",
    duration: "4 Months",
    featured: true,
    bentoSpan: "large",
    summary:
      "A high-performance in-browser modular synthesizer and acoustic visualizer built on Web Audio API and WebGL shaders, achieving sub-12ms latency on low-spec hardware.",
    challenge:
      "Web audio workflows frequently suffer from audio-thread jank, garbled buffer underruns, and disconnection between audio node graphs and visual render loops. The goal was to build a zero-latency audio worklet pipeline that syncs parametric frequency data with custom 60fps fragment shaders.",
    solution:
      "Architected custom AudioWorklet processors off the main UI thread. Designed a drag-and-drop topological node patchbay with WebGL canvas rendering, allowing producers to construct FM synthesis trees with real-time spectrum analysis and spatial pan automation.",
    impact: [
      "Sub-12ms roundtrip audio latency in modern Chromium browsers",
      "Over 4,200 GitHub stars and adopted by digital musicians across 18 countries",
      "Featured on Hacker News front page & Web Audio Weekly",
    ],
    tools: ["TypeScript", "Web Audio API", "Three.js / WebGL", "Rust (Wasm)", "Tailwind CSS", "Next.js"],
    coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
        caption: "Aura interface during multi-oscillator modulation pass with real-time waveform analyzer",
      },
      {
        url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
        caption: "Node graph patch view rendering custom WebGL wireframe cables",
      },
    ],
    links: {
      live: "https://github.com",
      github: "https://github.com",
      preview: "https://github.com",
    },
    quote: {
      text: "Aura proves that browser audio can feel as tactile and responsive as dedicated Eurorack hardware.",
      author: "Julian Vance",
      role: "Electronic Music Producer & Sound Designer",
    },
    specs: {
      Latency: "8.4ms",
      SampleRate: "48kHz / 32-bit float",
      Engine: "AudioWorklet + Wasm",
      Graphics: "Raw GLSL Shaders",
    },
  },
  {
    id: "software-2",
    slug: "katha-distraction-free-editor",
    title: "Katha Markdown Engine",
    subtitle: "Local-first Typographic Workspace for Longform Thinkers",
    domain: "software",
    year: "2024",
    client: "Product Lab",
    role: "Product Architect & Engineer",
    duration: "3 Months",
    featured: false,
    bentoSpan: "standard",
    summary:
      "A fast, distraction-free markdown canvas built on CRDT synchronization with SQLite WASM, designed for authors who write book-length non-fiction.",
    challenge:
      "Modern writing tools are cluttered with AI popups, SaaS bloat, and unreliable cloud sync that betrays writer concentration.",
    solution:
      "Engineered an offline-first desktop-class web app with instant keystroke indexing, full local encryption, and custom typographic kerning pairs.",
    impact: [
      "Zero network latency on document editing with instant local persistence",
      "50k+ words handled without a single millisecond drop in 120Hz scrolling",
    ],
    tools: ["Next.js", "TypeScript", "CRDT (Yjs)", "SQLite WASM", "Tailwind CSS"],
    coverImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
        caption: "Katha's high-contrast editorial typography mode in dark obsidian",
      },
    ],
    links: {
      live: "https://github.com",
      github: "https://github.com",
    },
  },

  // 2. DESIGN
  {
    id: "design-1",
    slug: "himalayan-topography-identity",
    title: "Himalayan Cartography",
    subtitle: "Topographic Visual Identity & Alpine Navigation System",
    domain: "design",
    year: "2023",
    client: "Alpine Research Institute Nepal",
    role: "Brand Strategist & Lead Designer",
    duration: "2.5 Months",
    featured: true,
    bentoSpan: "tall",
    summary:
      "A comprehensive design system and spatial iconography suite inspired by High-Himalayan contour elevations, designed for high-altitude expedition safety and cultural preservation.",
    challenge:
      "Extreme-altitude cartography requires visual symbols that remain legible in whiteout conditions, sub-zero screen glare, and on printed waterproof nylon paper.",
    solution:
      "Constructed a high-contrast geometric symbol taxonomy using mathematical elevation curves, custom iconography with optical sizing, and neo-violet accents that cut through fog and snow glare.",
    impact: [
      "Adopted by 14 international trekking expeditions in Annapurna and Everest regions",
      "Gold Winner at South Asian Design Biennale 2023",
    ],
    tools: ["Figma", "Adobe Illustrator", "Topographic GIS", "Design Tokens"],
    coverImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=1200&auto=format&fit=crop",
        caption: "Vector elevation lines and topographic glyph system",
      },
      {
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
        caption: "Field guidebook test print on waterproof stone paper",
      },
    ],
    links: {
      behance: "https://behance.net",
    },
    quote: {
      text: "Pratik translated complex geographic data into visual poetry that saved actual lives on our Kangchenjunga survey.",
      author: "Dawa Sherpa",
      role: "Senior Cartographer & High-Altitude Lead",
    },
    specs: {
      Grid: "8pt Mathematical Sub-Division",
      ColorContrast: "12.8:1 AAA Compliance",
      Format: "Screen / Stone Paper",
    },
  },
  {
    id: "design-2",
    slug: "neura-design-system",
    title: "Neura Design System",
    subtitle: "Accessible Dark-Mode Component Library for Deep-Tech Tools",
    domain: "design",
    year: "2024",
    client: "Neura Intelligence",
    role: "Principal Product Designer",
    duration: "3 Months",
    featured: false,
    bentoSpan: "standard",
    summary:
      "A unified component system built specifically for data-dense developer tools, telemetries, and darkroom editing consoles.",
    challenge:
      "Data-dense interfaces often suffer from visual fatigue, clashing border weights, and non-standardized states across complex tables and canvases.",
    solution:
      "Engineered 140+ atomic components with dynamic contrast adaptation, micro-interactions, and keyboard-first accessibility.",
    impact: [
      "Reduced front-end sprint feature delivery time by 38%",
      "WCAG 2.2 AAA certified across all states",
    ],
    tools: ["Figma", "Storybook", "Tailwind CSS", "Radix UI Primitives"],
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        caption: "Component hierarchy and semantic color tokens",
      },
    ],
    links: {
      behance: "https://behance.net",
      live: "https://github.com",
    },
  },

  // 3. 3D
  {
    id: "threed-1",
    slug: "monoliths-of-patan",
    title: "Monoliths of Patan",
    subtitle: "Procedural Architectural Sculptures & Newar Geometry in Blender",
    domain: "threed",
    year: "2024",
    client: "Cultural Heritage Lab / Self",
    role: "3D Artist & Creative Technologist",
    duration: "2 Months",
    featured: true,
    bentoSpan: "medium",
    summary:
      "A procedural 3D reconstruction of medieval brickwork, terracotta moldings, and mandalic proportions from Patan Durbar Square, reinterpreted as speculative brutalist monoliths.",
    challenge:
      "Traditional architectural captures either look like sterile polygon scans or loose artistic approximations that miss the sacred proportions of historic Kathmandu Valley artisans.",
    solution:
      "Programmed custom geometry node networks in Blender that calculate golden ratios found in Malla-era pagoda eaves, combined with photorealistic procedural clay and weathered bronze shader networks.",
    impact: [
      "Screened at Kathmandu Triennale Digital Pavilion",
      "Featured by Blender Artists Community Spotlight",
      "Downloaded by 2,800+ 3D artists for study and reference",
    ],
    tools: ["Blender 4.2", "Geometry Nodes", "Cycles Render Engine", "Substance 3D", "Photoshop"],
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
        caption: "Procedural brick displacement map calculated from physical brick specimens",
      },
      {
        url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop",
        caption: "Cycles lighting study with volumetric mist and golden hour illumination",
      },
    ],
    links: {
      behance: "https://behance.net",
    },
    quote: {
      text: "The collision of ancient Newar craftsmanship and computational geometry nodes creates something hauntingly timeless.",
      author: "Sujit Manandhar",
      role: "Architect & Heritage Conservator",
    },
    specs: {
      RenderEngine: "Cycles (OptiX Raytracing)",
      PolyCount: "3.4M Triangles (Optimized)",
      TextureResolution: "8K Procedural UDIM",
    },
  },
  {
    id: "threed-2",
    slug: "kinetic-chrono-webgl",
    title: "Kinetic Chrono 3D",
    subtitle: "Interactive WebGL Mechanical Watch Customizer",
    domain: "threed",
    year: "2023",
    client: "Horology Lab",
    role: "3D Modeler & Three.js Engineer",
    duration: "2 Months",
    featured: false,
    bentoSpan: "standard",
    summary:
      "An interactive 3D mechanical watch tourbillon simulator running directly in the browser with realistic sapphire glass refractions and brushed titanium physics.",
    challenge:
      "Simulating high-end watch mechanics with realistic metal reflection, anisotropy, and micro-gears in WebGL at 60fps on mobile devices.",
    solution:
      "Created low-poly baked normal maps in Blender, loaded via Draco compression in Three.js, with custom PBR shader passes for brushed metals.",
    impact: [
      "94% model file size reduction via Draco and KTX2 texture streaming",
      "Flawless 60 FPS performance across iOS Safari and Android Chrome",
    ],
    tools: ["Three.js", "Blender", "GLSL Shaders", "Draco Compression"],
    coverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop",
        caption: "Exploded view of the escapement wheel and balance spring",
      },
    ],
    links: {
      live: "https://github.com",
      github: "https://github.com",
    },
  },

  // 4. VIDEO
  {
    id: "video-1",
    slug: "echoes-of-the-valley",
    title: "Echoes of the Valley",
    subtitle: "Cinematic 4K Short Film on Kathmandu's Endangered Bell Makers",
    domain: "video",
    year: "2023",
    client: "Independent Documentary",
    role: "Director, Cinematographer & Editor",
    duration: "3 Months",
    featured: true,
    bentoSpan: "medium",
    summary:
      "A poetic, observational documentary capturing the vanishing art of lost-wax bronze bell casting in the alleys of Lalitpur. Captured on Canon 6D with vintage prime glass.",
    challenge:
      "Filming in pitch-black, cramped foundry workshops with molten 1,100°C copper metal, extreme dynamic range contrast, and heavy soot without high-end studio lighting.",
    solution:
      "Mastered low-light manual exposure on the Canon 6D with fast f/1.4 vintage glass, paired with a lightweight phone gimbal for b-roll and Scarlett Solo with shotgun mics for resonant acoustic resonance recording.",
    impact: [
      "Official Selection at Kathmandu International Mountain Film Festival (KIMFF)",
      "Over 120,000 views across independent cinema channels",
      "Lauded for sensory sound design and quiet, contemplative pacing",
    ],
    tools: ["Canon 6D", "Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Scarlett Solo"],
    coverImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop",
        caption: "Molten bronze pour sequence graded in ACES color space",
      },
      {
        url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop",
        caption: "Master artisan testing pitch harmonics of hand-beaten singing bell",
      },
    ],
    links: {
      preview: "https://youtube.com",
      behance: "https://behance.net",
    },
    quote: {
      text: "Pratik captures the heat, the smoke, and the quiet dignity of hands that have shaped metal for five generations.",
      author: "Rohan Tamang",
      role: "Documentary Programmer, KIMFF",
    },
    specs: {
      Camera: "Canon 6D (MagicLantern RAW)",
      Lenses: "50mm f/1.4, 28mm f/2.8",
      Audio: "Røde NTG + Focusrite Scarlett Solo (96kHz/24-bit)",
      Color: "DaVinci Resolve Film Print Emulation",
    },
  },
  {
    id: "video-2",
    slug: "shift-horizon-motion",
    title: "Shift Horizon: Kinetic Title Sequence",
    subtitle: "Experimental Motion Design & Typography for Cyberpunk Pilot",
    domain: "video",
    year: "2024",
    client: "Studio Mirage",
    role: "Motion Designer & Compositor",
    duration: "1 Month",
    featured: false,
    bentoSpan: "standard",
    summary:
      "A fast-paced kinetic typography and glitch-compositing title sequence combining analog VHS scanlines with 3D camera projections in After Effects.",
    challenge:
      "Creating authentic analog CRT tube phosphor decay and chromatic fringing without relying on pre-packaged stock overlay plugins.",
    solution:
      "Built custom expression rigs in Adobe After Effects to distort vectors based on audio transients, fed through an analog CRT monitor re-recording loop.",
    impact: [
      "Awarded Best Title Sequence at Indie Motion Fest 2024",
    ],
    tools: ["Adobe After Effects", "Premiere Pro", "Blender", "Trapcode"],
    coverImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
        caption: "CRT phosphor displacement and typography breakdown",
      },
    ],
    links: {
      preview: "https://youtube.com",
    },
  },

  // 5. PHOTOGRAPHY
  {
    id: "photo-1",
    slug: "kathmandu-at-five-am",
    title: "Kathmandu at 05:00",
    subtitle: "Low-Light Street Photography & Morning Rituals of the Valley",
    domain: "photo",
    year: "2023 - 2024",
    client: "Personal Monograph",
    role: "Photographer & Print Master",
    duration: "Ongoing Series",
    featured: true,
    bentoSpan: "large",
    summary:
      "A meditative photographic study of Kathmandu before the engine roar begins: butter lamps at Swayambhunath, mist drifting through Asan Tole, and morning tea vendors in candlelight.",
    challenge:
      "Capturing authentic street candids at dawn without flash or invasive gear, preserving shadow depth without crushing micro-tonality.",
    solution:
      "Shot exclusively on a full-frame Canon 6D with a single 50mm f/1.4 prime lens. Relied on available temple candlelight, incandescent tungsten bulbs, and early blue-hour atmospheric bounce.",
    impact: [
      "Limited edition photographic zine sold out in 48 hours",
      "Selected images exhibited at Taragaon Next Contemporary Art Museum",
      "Recognized for honoring the intimacy and privacy of subjects with long-standing community rapport",
    ],
    tools: ["Canon 6D", "EF 50mm f/1.4 USM", "Adobe Lightroom Classic", "Hahnemühle Photo Rag"],
    coverImage: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop",
        caption: "Butter lamps illuminating the gilded face of Swayambhunath stupa at 05:14",
      },
      {
        url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
        caption: "A tea vendor in Asan Tole boiling fresh spiced chiya over brass charcoal stove",
      },
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
        caption: "Pigeons rising above the ancient carved courtyards of Bhaktapur",
      },
    ],
    links: {
      behance: "https://behance.net",
    },
    quote: {
      text: "Pratik sees Kathmandu not as an exotic backdrop, but as a living, breathing tapestry of reverence, shadow, and quiet dawn devotion.",
      author: "Pooja Gurung",
      role: "Visual Anthropologist & Curator",
    },
    specs: {
      Camera: "Canon EOS 6D",
      Lens: "Canon EF 50mm f/1.4 USM",
      Aperture: "f/1.8 - f/2.2",
      ISO: "1600 - 3200",
      Paper: "Hahnemühle German Etching 310gsm",
    },
  },
  {
    id: "photo-2",
    slug: "textures-of-mustang",
    title: "Textures of Mustang",
    subtitle: "High-Altitude Rain Shadow Geologies & Wind Scaffolding",
    domain: "photo",
    year: "2023",
    client: "Geographic Exploration",
    role: "Expedition Photographer",
    duration: "18 Days",
    featured: false,
    bentoSpan: "standard",
    summary:
      "A high-contrast monochrome exploration of Upper Mustang's eroded wind-canyons, ancient cliffside sky-caves, and Tibetan border plateaus.",
    challenge:
      "Harsh midday Himalayan sun that bleaches midtones and obliterates subtle geological stratum textures.",
    solution:
      "Utilized circular polarizing filters and calibrated zone-system spot metering to anchor deep sky gradients against limestone precipices.",
    impact: [
      "Featured in National Geographic Traveler Nepal Spotlight",
      "Published as a 12-piece gallery print series",
    ],
    tools: ["Canon 6D", "24-105mm L-Series", "B+W Kaesemann Polarizer", "Lightroom Classic"],
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
        caption: "Erosion flutes in Kali Gandaki gorge under deep blue rain-shadow sky",
      },
    ],
    links: {
      behance: "https://behance.net",
    },
  },

  // 6. BLOG / WRITING
  {
    id: "blog-1",
    slug: "latency-of-physicality",
    title: "The Latency of Physicality",
    subtitle: "Why Tactile Tools Feel Alive and What Digital Interfaces Miss",
    domain: "blog",
    year: "2024",
    client: "Personal Essay",
    role: "Author",
    duration: "Essay",
    featured: true,
    bentoSpan: "medium",
    summary:
      "An inquiry into why pressing an analog piano key or clicking a Canon shutter creates an emotional resonance that glass screens fail to evoke — and how micro-haptics can restore that intimacy.",
    challenge:
      "Deconstructing the subtle psychological gap between digital event firing and sensory confirmation.",
    solution:
      "Analyzed the physics of tactile inertia, mechanical detents, and human acoustic latency thresholds to propose a new rubric for digital interface craftsmanship.",
    impact: [
      "Read by over 35,000 engineers and interaction designers worldwide",
      "Syndicated in The Digest of Creative Computation",
    ],
    tools: ["Longform Prose", "Research", "Interaction Design Theory"],
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1200&auto=format&fit=crop",
        caption: "Notes and comparative latency diagrams from the writing process",
      },
    ],
    links: {
      live: "/blog/latency-of-physicality",
    },
    quote: {
      text: "Pratik writes with the precision of an engineer who measures milliseconds and the soul of an artist who values presence.",
      author: "Elena Rostova",
      role: "Design Critic & Interaction Historian",
    },
    specs: {
      ReadTime: "8 min read",
      WordCount: "1,850 Words",
      Format: "Philosophy / UI Ergonomics",
    },
  },
  {
    id: "blog-2",
    slug: "why-coders-should-learn-after-effects",
    title: "Why Every Coder Needs After Effects",
    subtitle: "Understanding Timing Curves, Interpolation, and Spatial Momentum",
    domain: "blog",
    year: "2024",
    client: "Creative Technologist Dispatch",
    role: "Author",
    duration: "Essay",
    featured: false,
    bentoSpan: "standard",
    summary:
      "Why manipulating cubic-bezier curves in code without animating them visually first leads to stiff, robotic user interfaces.",
    challenge:
      "Developers often think of animation as state transitions rather than mass, acceleration, and spring tension.",
    solution:
      "A visual breakdown demonstrating how keyframe graph editors teach intuition for natural momentum, spring damping, and focal hierarchy.",
    impact: [
      "Shared widely across frontend Twitter and design engineering communities",
    ],
    tools: ["After Effects", "Framer Motion", "Technical Writing"],
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
        caption: "Bezier curve easing vs physical spring damping comparison chart",
      },
    ],
    links: {
      live: "/blog/why-coders-should-learn-after-effects",
    },
  },
];
