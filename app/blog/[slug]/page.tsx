import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { POSTS, BlogPost } from "@/data/posts";
import { CategoryBadge } from "@/components/category-badge";
import { DOMAIN_CONFIG } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: "Entry Not Found" };
  }

  return {
    title: `[LORE] ${post.title} — Pratik`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Pratik`,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const currentIndex = POSTS.findIndex((p) => p.slug === params.slug);
  if (currentIndex === -1) {
    notFound();
  }

  const post = POSTS[currentIndex];
  const domainConfig = DOMAIN_CONFIG[post.domain];

  const prevPost =
    currentIndex > 0 ? POSTS[currentIndex - 1] : POSTS[POSTS.length - 1];
  const nextPost =
    currentIndex < POSTS.length - 1 ? POSTS[currentIndex + 1] : POSTS[0];

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10 md:py-16 font-mono">
      {/* Back Navigation */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-3 border-b border-white/[0.08]">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-[10px] font-pixel text-muted-foreground hover:text-[#FFE600] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>&lt;&lt; BACK TO CODEX ARCHIVES</span>
        </Link>
        <CategoryBadge domain={post.domain} size="md" />
      </div>

      {/* Post Header */}
      <header className="space-y-3 mb-8">
        <div className="flex items-center gap-3 text-[10px] font-pixel text-muted-foreground">
          <span className="flex items-center gap-1 text-[#FFE600]">
            <Calendar className="w-3 h-3" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-[#39FF14]">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
        </div>

        <h1 className="font-pixel font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide leading-tight text-glow-gold">
          {post.title}
        </h1>

        <p className="text-sm font-terminal text-[#39FF14]">
          &gt;&gt; {post.subtitle}
        </p>
      </header>

      {/* Featured Header Image with Pixel Corner notches */}
      <div className="relative w-full aspect-[16/9] border-2 border-white/[0.15] shadow-2xl mb-10 bg-black/60 overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#FFE600] z-10" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#FFE600] z-10" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FFE600] z-10" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FFE600] z-10" />

        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 800px) 100vw, 800px"
          className="object-cover"
        />
      </div>

      {/* Main Prose Content */}
      <div className="space-y-8 text-sm text-foreground/90 leading-relaxed font-sans">
        {post.content.map((section, idx) => (
          <section key={idx} className="space-y-3">
            <h2 className="font-pixel font-bold text-base sm:text-lg text-white mt-6 tracking-wide">
              {section.heading}
            </h2>

            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="leading-relaxed text-muted-foreground/95">
                {p}
              </p>
            ))}

            {section.callout && (
              <blockquote
                className="p-4 border-l-4 bg-[#0A0714] my-5 font-terminal text-base sm:text-lg text-[#FFE600] italic"
                style={{ borderColor: domainConfig.color }}
              >
                &ldquo;{section.callout}&rdquo;
              </blockquote>
            )}

            {section.codeSnippet && (
              <div className="my-5 border-2 border-white/[0.1] bg-[#040407] p-3 font-mono text-xs">
                <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-white/[0.08] text-muted-foreground text-[10px] font-pixel">
                  <span className="text-[#00F0FF]">
                    [{section.codeSnippet.language.toUpperCase()}]
                  </span>
                  {section.codeSnippet.caption && (
                    <span className="text-[#FFE600]">
                      {section.codeSnippet.caption}
                    </span>
                  )}
                </div>
                <pre className="overflow-x-auto text-[#39FF14] leading-relaxed">
                  <code>{section.codeSnippet.code}</code>
                </pre>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Author Footer Signature */}
      <div className="mt-12 pt-6 border-t border-white/[0.1] flex items-center justify-between gap-4 font-pixel text-[10px]">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#00F0FF] text-black font-bold flex items-center justify-center">
            P1
          </div>
          <div>
            <div className="text-white font-bold">PLAYER 1: PRATIK</div>
            <div className="text-muted-foreground">KATHMANDU SECTOR</div>
          </div>
        </div>

        <Link
          href="/blog"
          className="text-[#FFE600] hover:underline"
        >
          MORE CODEX ENTRIES →
        </Link>
      </div>

      {/* Navigation */}
      <div className="mt-8 pt-6 border-t border-white/[0.1] grid grid-cols-1 sm:grid-cols-2 gap-4 font-pixel text-[10px]">
        <Link
          href={`/blog/${prevPost.slug}`}
          className="p-4 bg-[#070712] border border-white/[0.15] hover:border-[#FFE600] transition-all"
        >
          <span className="text-muted-foreground">&lt;&lt; PREV CODEX</span>
          <span className="font-bold text-white text-xs mt-1 block">{prevPost.title}</span>
        </Link>

        <Link
          href={`/blog/${nextPost.slug}`}
          className="p-4 bg-[#070712] border border-white/[0.15] hover:border-[#FFE600] transition-all text-right"
        >
          <span className="text-muted-foreground">NEXT CODEX &gt;&gt;</span>
          <span className="font-bold text-white text-xs mt-1 block">{nextPost.title}</span>
        </Link>
      </div>
    </article>
  );
}
