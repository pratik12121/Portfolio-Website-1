import type { Metadata, Viewport } from "next";
import { Silkscreen, VT323, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400", "700"],
  display: "swap",
});

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-terminal",
  weight: ["400"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pratik.nepal"),
  title: {
    default: "NOW LOADING... PRATIK // CREATIVE TECHNOLOGIST (LVL 99)",
    template: "%s | PRATIK_KATHMANDU.SAV",
  },
  description:
    "Player 1: Pratik. Multi-disciplinary maker operating across Software, Design, 3D, Video, Photography, and Lore from Stage: Kathmandu, Nepal.",
  keywords: [
    "Retro Game Loading Screen",
    "Creative Technologist",
    "Kathmandu",
    "Nepal",
    "Software",
    "3D Polygons",
    "Cinematography",
    "Canon 6D",
    "CRT Monitor",
    "Arcade Portfolio",
  ],
  authors: [{ name: "Pratik", url: "https://pratik.nepal" }],
  creator: "Pratik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pratik.nepal",
    siteName: "PRATIK // ARCADE PORTFOLIO",
    title: "NOW LOADING... PRATIK // CREATIVE TECHNOLOGIST (LVL 99)",
    description:
      "Stage: Kathmandu Valley (UTC+5:45). 6 Creative Domains Mounted: Software, Design, 3D, Video, Photography, Lore. Press Start to Explore.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Pratik Retro Arcade Loading Screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOW LOADING... PRATIK // CREATIVE TECHNOLOGIST",
    description:
      "Stage: Kathmandu Valley (UTC+5:45). 6 Domains: Software, Design, 3D, Video, Photography, Lore.",
    creator: "@pratik_nepal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#05050A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${silkscreen.variable} ${vt323.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} dark`}
    >
      <body className="min-h-screen font-mono bg-[#05050A] text-[#E0E7FE] relative overflow-x-hidden selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
        {/* CRT Scanline Overlay Effect */}
        <div className="fixed inset-0 crt-scanlines pointer-events-none z-50 opacity-45" />

        {/* CRT Vignette Edge Shadow */}
        <div className="fixed inset-0 crt-vignette pointer-events-none z-40" />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
