import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { POSTS } from "@/data/posts";
import { CategoryBadge } from "@/components/category-badge";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "LORE & CODEX // PRATIK",
  description:
    "Longform philosophical inquiries into craft, physical latency, After Effects curves, and Kathmandu dawn street photography.",
};

export default function BlogPage() {
  const featuredPost = POSTS.find((p) => p.featured) || POSTS[0];
  const regularPosts = POSTS.filter((p) => p.slug !== featuredPost.slug);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16 font-mono">
      {/* Header */}
      <div className="space-y-3 mb-12 pb-6 border-b border-[#00F0FF]/30">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#090815] border border-[#FFE600]/40 text-[10px] font-pixel text-[#FFE600]">
          <span>== LORE & CODEX // DEVELOPER DISPATCHES ==</span>
        </div>

        <h1 className="font-pixel font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-wide text-glow-gold">
          PHILOSOPHY, CRAFT & PHYSICS
        </h1>

        <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed font-sans">
          Dispatches from the intersection of digital engineering and physical making.
          Inquiries into friction, timing curves, and the quiet dignity of tools built to last.
        </p>
      </div>

      {/* Featured Essay Card */}
      {featuredPost && (
        <div className="mb-14">
          <div className="text-[10px] font-pixel text-[#FFE600] mb-2">
            FEATURED CODEX ENTRY:
          </div>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block relative border-2 border-white/[0.15] hover:border-[#FFE600] bg-[#070714] transition-all duration-200 shadow-xl"
          >
            {/* Corner Tabs */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-[#FFE600] z-10" />
            <div className="absolute top-0 right-0 w-2 h-2 bg-[#FFE600] z-10" />
            <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FFE600] z-10" />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FFE600] z-10" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="relative md:col-span-6 aspect-[16/10] md:aspect-auto overflow-hidden bg-black/60 border-b md:border-b-0 md:border-r border-white/[0.1]">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <CategoryBadge domain={featuredPost.domain} size="sm" />
                    <span className="text-[10px] font-pixel text-[#39FF14] flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-pixel font-bold text-base sm:text-xl text-white group-hover:text-[#FFE600] transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xs font-terminal text-[#39FF14]">
                    &gt; {featuredPost.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed font-sans line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-[10px] font-pixel">
                  <span className="text-muted-foreground">
                    DATE: {featuredPost.date}
                  </span>
                  <span className="text-[#FFE600] font-bold group-hover:translate-x-1 transition-transform">
                    READ ENTRY →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Other Essays List */}
      <div className="space-y-4 pt-6 border-t border-white/[0.1]">
        <div className="text-[10px] font-pixel text-[#00F0FF]">
          == ARCHIVED CODEX ENTRIES ==
        </div>

        <div className="space-y-3">
          {regularPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#070712] border border-white/[0.12] hover:border-[#00F0FF] transition-all gap-3"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2 mb-1">
                  <CategoryBadge domain={post.domain} size="sm" />
                  <span className="text-[10px] font-pixel text-muted-foreground">
                    {post.date}
                  </span>
                  <span className="text-muted-foreground/40">•</span>
                  <span className="text-[10px] font-pixel text-[#39FF14]">
                    {post.readTime}
                  </span>
                </div>
                <h4 className="font-pixel font-bold text-xs sm:text-sm text-white group-hover:text-[#00F0FF] transition-colors leading-snug">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-1 font-sans">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-1.5 text-[10px] font-pixel text-muted-foreground group-hover:text-[#00F0FF]">
                <span>READ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
