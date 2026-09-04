import { Domain } from "@/lib/utils";

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  domain: Domain;
  excerpt: string;
  featured: boolean;
  coverImage: string;
  content: {
    heading: string;
    paragraphs: string[];
    callout?: string;
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
  }[];
}

export const POSTS: BlogPost[] = [
  {
    slug: "latency-of-physicality",
    title: "The Latency of Physicality",
    subtitle: "Why Tactile Tools Feel Alive and What Digital Interfaces Miss",
    date: "August 18, 2024",
    readTime: "7 min read",
    domain: "blog",
    featured: true,
    excerpt:
      "When you press a key on an upright piano or click the mechanical shutter on a Canon 6D, the feedback isn't an animation—it's an exchange of momentum. Why does modern software feel so ungrounded, and how can we design interfaces with weight?",
    coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=1600&auto=format&fit=crop",
    content: [
      {
        heading: "The Moment of Inertia",
        paragraphs: [
          "In 1982, the psychological threshold for human perception of instantaneous cause-and-effect was measured around 100 milliseconds. Today, in 2024, our processors execute billions of cycles per second, yet opening a menu in many corporate software suites still triggers an existential pause while client-side hydration resolves.",
          "When I pick up my Canon 6D—a camera manufactured over a decade ago—and turn the knurled dial to adjust exposure compensation, there is zero computation required to tell my fingertips that a click occurred. The detent is a physical spring falling into a machined notch. The mechanical feedback precedes the LCD display change by milliseconds.",
          "This is what I call the latency of physicality. Physical tools do not promise action; they embody it.",
        ],
        callout: "A physical tool never apologizes for being heavy. Its weight is proof of its capacity to hold tension.",
      },
      {
        heading: "The Trap of Decoupled Feedback",
        paragraphs: [
          "In web and mobile development, we have accidentally decoupled action from resistance. When a user taps a glass screen, the glass does not push back. To compensate, designers invented micro-animations: scale bounces, color morphs, and glowing ripples. But when an animation has no inertia—when it eases out with a generic bezier curve regardless of finger velocity—it registers as decorative theater rather than true mechanical response.",
          "Consider audio production hardware. On a Focusrite interface, the potentiometer knob has a viscous, damped resistance. You cannot accidentally flick it from zero to maximum with an errant touch. That viscous resistance is a deliberate design decision: it protects the recording from abrupt clipping.",
        ],
        codeSnippet: {
          language: "typescript",
          code: `// Simulating tactile spring damping rather than linear duration
const physicalSpring = {
  stiffness: 420,
  damping: 28,
  mass: 1.2,
  restDelta: 0.001,
};`,
          caption: "A spring configuration calibrated to mimic heavy machined aluminum knobs",
        },
      },
      {
        heading: "Engineering Weight in Digital Space",
        paragraphs: [
          "If we accept that digital interfaces cannot have mass in the Newtonian sense, what is our responsibility as builders? We must create perceptual weight.",
          "Perceptual weight is achieved through three principles:",
          "1. Asymmetric Velocity: Things should yield instantly to user intent, but return to rest with deliberate decay.",
          "2. Acoustic Congruence: When audio or haptics are used, they must land in the same 16ms frame window as the visual change, or the brain flags the mismatch as artificial.",
          "3. Relentless Respect for State: A user should never wonder if their command was received. Silence should mean completion, not doubt.",
        ],
      },
      {
        heading: "Conclusion: Craft Over Speed",
        paragraphs: [
          "The modern urge is to ship faster, abstract deeper, and let AI generate our components. But tools that last—the ones people love thirty years later—are built by people who cared about the detent on the dial.",
          "Next time you build a button or a slider, ask yourself: does this feel like glass, or does it feel like brass?",
        ],
      },
    ],
  },
  {
    slug: "why-coders-should-learn-after-effects",
    title: "Why Every Frontend Engineer Should Learn After Effects",
    subtitle: "Understanding Timing Curves, Interpolation, and Spatial Momentum",
    date: "July 24, 2024",
    readTime: "6 min read",
    domain: "video",
    featured: false,
    excerpt:
      "Developers often treat animation as a state transition from Point A to Point B. Spending twenty hours inside After Effects graph editor fundamentally changes how you understand easing and visual rhythm in code.",
    coverImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop",
    content: [
      {
        heading: "Beyond transition: all 0.3s ease",
        paragraphs: [
          "Most CSS codebases are littered with 'transition: all 0.3s ease'. It is the default seasoning of frontend development, and it makes every website taste like cardboard.",
          "When you animate an element in Adobe After Effects, the first thing you learn is the Speed Graph. The Speed Graph doesn't ask how long an animation takes; it shows you how fast the object accelerates and how long it coasted before hitting resistance.",
        ],
        callout: "Motion in nature never starts at maximum speed and never stops instantaneously without an impact.",
      },
      {
        heading: "The Translation to Framer Motion",
        paragraphs: [
          "Once you see the velocity curve in After Effects, writing transition configs in Framer Motion or GSAP becomes intuitive. You stop guessing numbers and start visualizing momentum.",
          "An entrance animation should have a sharp acceleration followed by a long, silky deceleration tail. An exit animation should be snappy and decisive.",
        ],
        codeSnippet: {
          language: "tsx",
          code: `// Kinetic entrance curve: fast onset, extended deceleration tail
export const cinematicEase = {
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1], // Custom bezier modeled from AE curve
};`,
          caption: "A cubic-bezier curve that mimics high-inertia camera slider movements",
        },
      },
    ],
  },
  {
    slug: "light-shadow-kathmandu-photography",
    title: "Light, Shadow, and Topography: Shooting Kathmandu at Dawn",
    subtitle: "A 35mm Retrospective on Preserving Tonality in Sacred Spaces",
    date: "June 12, 2024",
    readTime: "8 min read",
    domain: "photo",
    featured: false,
    excerpt:
      "In the dense alleyways of Patan and Asan, morning light is not a flood—it is a scalpel. How shooting low-light documentary street photography shaped my approach to digital contrast systems.",
    coverImage: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1600&auto=format&fit=crop",
    content: [
      {
        heading: "The Valley Basin and Morning Fog",
        paragraphs: [
          "Kathmandu sits in a high bowl surrounded by hills. At 05:00, the temperature inversion traps charcoal woodsmoke and valley mist beneath the cold air. When the sun crests the ridge, the light doesn't illuminate everything; it cuts through narrow brick chowks in razor-sharp amber shafts.",
          "To photograph this requires an immense respect for black. If you expose for the shadows, you blow out the sacred butter lamps and golden roofs. If you expose for the highlights, the courtyard plunges into pitch black.",
        ],
        callout: "True contrast isn't the difference between white and black; it is the nuance of how gently you let shadows fall off.",
      },
      {
        heading: "From Canon 6D to UI Design Systems",
        paragraphs: [
          "Years of metering for dawn light in Kathmandu taught me more about interface color palettes than any design school textbook. In software UI, developers often make dark mode either pure black (#000000), which causes halation and eye fatigue, or muddy grey (#333333).",
          "Real darkness in nature is never neutral grey. It is deep indigo, slate, or umber. That is why in my digital work, my dark-mode backgrounds always carry a 2-3% mineral tone—an homage to wet Kathmandu terracotta and pre-dawn stone.",
        ],
      },
    ],
  },
  {
    slug: "craft-of-silent-interfaces",
    title: "Substance Over Hype: The Lost Art of Quiet Interfaces",
    subtitle: "Why the Most Enduring Tools Refuse to Scream for Attention",
    date: "May 03, 2024",
    readTime: "5 min read",
    domain: "design",
    featured: false,
    excerpt:
      "When every app on your screen is competing for engagement metrics with confetti, badges, and push notifications, building something calm and dignified is an act of rebellion.",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    content: [
      {
        heading: "The Engagement Epidemic",
        paragraphs: [
          "The modern software landscape is noisy. Every SaaS tool wants to be your companion, your assistant, your cheerleader. Popups inform you that someone in Berlin just bought a subscription; tooltips demand that you try the new AI assistant.",
          "I build for people who have serious work to do. A surgeon does not want a scalpel that vibrates with cheerful compliments when they make an incision. They want balance, edge retention, and predictable mechanical feedback.",
        ],
        callout: "The highest compliment a user can pay a tool is that they forgot they were using it.",
      },
      {
        heading: "The Builder's Creed",
        paragraphs: [
          "Craft is not ornamentation. Craft is the elimination of the accidental.",
          "When you strip away the sales pitch, what remains? The typography either works or it doesn't. The database either queries in single-digit milliseconds or it doesn't. The video either moves the soul or it doesn't.",
          "Let the work do the talking.",
        ],
      },
    ],
  },
];
