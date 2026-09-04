# Pratik — Multi-Disciplinary Portfolio & Creative Studio

An award-caliber, modern, dark-mode-first personal portfolio website built for **Pratik**, a multi-disciplinary creative and maker based in **Kathmandu, Nepal**, operating across six distinct domains: **Software, Design, 3D, Video, Photography, and Writing**.

Built with **Next.js 14/15 (App Router)**, **React**, **Tailwind CSS**, **Framer Motion**, **Three.js / WebGL**, and **next-themes**.

---

## 🎨 The 6-Domain Signature Color System

Every creative domain has its own dedicated accent color token, glowing aura, and themed tags that dynamically influence project cards, filter states, hero 3D wireframe colors, and case study templates:

| Domain | Accent Color | Hex | Role / Essence |
|---|---|---|---|
| **Software** | Electric Cyan | `#00F2FE` | Systems, Web Audio engines, WebGL shaders & fullstack tools |
| **Design** | Neo-Violet | `#A855F7` | Cartographic wayfinding, accessible dark-mode design systems |
| **3D** | Neon Tangerine | `#FF7828` | Procedural Blender geometry nodes, OptiX Cycles, low-poly GLTF |
| **Video** | Crimson Carmine | `#F43F5E` | Documentary cinematography, After Effects kinetic timing curves |
| **Photography** | Emerald Mint | `#10B981` | 35mm low-light dawn street monographs, high-altitude geology |
| **Writing** | Solar Gold | `#F59E0B` | Inquiries into tactile friction, digital ergonomics, and craft |

---

## 🏛️ Site Architecture & Pages

1. **Home / Landing (`/`)**:
   - Hero introducing Pratik with kinetic oversized typography.
   - Interactive 3D WebGL core canvas (Three.js wireframe icosahedron & floating particle constellation) that dynamically shifts colors when hovering domain pillars.
   - Live Kathmandu, Nepal clock (`NPT`, `UTC+5:45`) and commission availability badge.
   - Selected Works Bento Grid featuring flagship projects from each domain.
   - Three Guiding Principles: *Zero Decorative Theater*, *Cross-Domain Synthesis*, *Substance Over Hype*.
   - Direct Inquiry call-to-action banner.

2. **Work / Portfolio (`/work`)**:
   - Filterable archive across all 6 domains with animated filter pills.
   - Real-time instant search by title, tool, client, or keyword.
   - URL query parameter sync (`?domain=...`) so links from the home page or footer activate the matching filter.

3. **Case Study Template (`/work/[slug]`)**:
   - Reusable deep-dive template with static parameters generation (`generateStaticParams`).
   - Project metadata drawer (Client, Year, Role, Category).
   - Problem & Challenge, Process & Engineering decisions, Impact metrics, and Tools.
   - Visual documentation gallery with captions.
   - Next & Previous project navigation.

4. **About (`/about`)**:
   - Bio and artistic perspective: Growing up and creating in the Kathmandu Valley.
   - The 6-Domain Continuum breakdown.
   - **The Gear & Hardware Shelf**: Detailed inventory featuring the **Canon EOS 6D**, **Canon 50mm f/1.4**, **Focusrite Scarlett Solo**, **3-Axis Motorized Gimbal**, **Adobe After Effects & Premiere Pro**, **Blender 4.2**, and **Next.js**.
   - Journey Milestones & Timeline.

5. **Blog / Writing (`/blog` & `/blog/[slug]`)**:
   - Editorial archive with reading time badges and featured essay highlight.
   - Single-post reading view with table of contents, typographic hierarchy, pull quotes, and code blocks.

6. **Contact (`/contact`)**:
   - Comprehensive inquiry brief form with multi-domain picker, budget selector, and timeline brackets.
   - One-click "Copy Email" button with instant visual confirmation.
   - Direct links to GitHub, Behance, Twitter/X, and Unsplash.

7. **Resume / CV (`/resume`)**:
   - Clean, professional CV document with 6-domain competency matrix, experience, and honors.
   - One-click Print / Save PDF trigger with `@media print` clean styling.

8. **404 Page (`/not-found`)**:
   - On-brand creative technologist aesthetic featuring coordinates radar animation and return links.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export
```bash
npm run build
npm run start
```

---

## 🖼️ Assets to Swap In for Production

All project images, portraits, and media currently use high-resolution Unsplash and SVG mockups. When ready to swap in your real assets:

1. **Portrait / Studio Photo**:
   - File location: Update `app/about/page.tsx` (`src` attribute of the profile image) or place your photo in `public/images/portrait.jpg`.
2. **Project Cover & Gallery Images**:
   - File location: `data/projects.ts` -> update `coverImage` and `gallery[].url` for each project.
3. **Resume Download PDF**:
   - Place your real `resume.pdf` in `public/resume.pdf` if you wish to provide a direct file download link.
4. **Contact Email & Social Links**:
   - Update `emailAddress` in `app/contact/page.tsx` and the social profile URLs in `components/footer.tsx` and `app/contact/page.tsx`.
