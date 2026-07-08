"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 as Github, ExternalLink, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";
import { useTranslations } from "next-intl";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year: string;
}

const projects: ProjectItem[] = [
  {
    id: "1",
    title: "Luminary Design System",
    description: "A comprehensive component library built for scale.",
    longDescription:
      "A fully accessible, themeable design system powering 12 products. Includes 80+ components, Figma tokens, and automated visual regression testing.",
    tags: ["React", "TypeScript", "Storybook", "Figma"],
    category: "Frontend",
    image: "https://i.ytimg.com/vi/glCQ5z3yMno/maxresdefault.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024",
  },
  {
    id: "2",
    title: "Orbit Analytics Dashboard",
    description: "Real-time data visualization for SaaS metrics.",
    longDescription:
      "A high-performance analytics platform processing 50M+ events per day. Features live charts, cohort analysis, and customizable KPI widgets.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "WebSockets"],
    category: "Full Stack",
    image: "https://play-lh.googleusercontent.com/3gvSC902Etqh70J9zBlwpPYNu9C79LAu_Y1ebPuCQ2wVw-qdxg_uelAZo0GzMJAVgh2PIKnRo9Iymm8NOlXZmjE",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024",
  },
  {
    id: "3",
    title: "Pulse Mobile App",
    description: "Health tracking app with AI-powered insights.",
    longDescription:
      "A cross-platform wellness app with biometric syncing, personalized coaching, and streak-based habit formation. 40k+ active users.",
    tags: ["React Native", "Expo", "OpenAI", "HealthKit"],
    category: "Mobile",
    image: "https://webforgepro.com/assets/img/product/forgecms-logo.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: "2023",
  },
  {
    id: "4",
    title: "Forge CMS",
    description: "Headless CMS built for developer velocity.",
    longDescription:
      "A flexible headless content platform with a visual schema builder, GraphQL API, and real-time collaboration. Deployed on the edge for sub-50ms reads.",
    tags: ["Node.js", "GraphQL", "MongoDB", "Cloudflare"],
    category: "Backend",
    image: "https://picsum.photos/seed/bbc188b05e73/800/600",
    githubUrl: "https://github.com",
    featured: false,
    year: "2023",
  },
  {
    id: "5",
    title: "Cascade E-Commerce",
    description: "Conversion-optimized storefront for a fashion brand.",
    longDescription:
      "A bespoke Shopify-alternative storefront with 3D product previews, AI size recommendations, and a one-click checkout flow. Lifted CVR by 34%.",
    tags: ["Next.js", "Three.js", "Stripe", "Tailwind"],
    category: "Full Stack",
    image: "https://d2908q01vomqb2.cloudfront.net/fb644351560d8296fe6da332236b1f8d61b2828a/2021/10/20/Thursday10_21_211.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2023",
  },
  {
    id: "6",
    title: "Beacon API Gateway",
    description: "Unified API layer with rate limiting and observability.",
    longDescription:
      "A production-grade API gateway handling 2M+ requests per hour. Includes JWT auth, per-tenant rate limiting, distributed tracing, and a live request inspector.",
    tags: ["Go", "Redis", "Prometheus", "Docker"],
    category: "Backend",
    image: "https://play-lh.googleusercontent.com/1N6KQWe35FmoJp2ko_dlrZcHUReQsAyxZdF3laq5TcKpBIL8hb7VJplJxiD1laDcam7865sSwUkhp2fmdqvnyQ",
    githubUrl: "https://github.com",
    featured: false,
    year: "2022",
  },
  {
    id: "7",
    title: "Mosaic Photo Editor",
    description: "Browser-based image editor with non-destructive layers.",
    longDescription:
      "A WebAssembly-powered photo editor running entirely in the browser. Supports layers, masks, blend modes, and exports at full resolution.",
    tags: ["WebAssembly", "Rust", "Canvas API", "React"],
    category: "Frontend",
    image: "https://preview.redd.it/xa446ss9d9291.png?auto=webp&s=fe32ebc807fe6927c5ad3a672000204e01ef81c1",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: "2022",
  },
  {
    id: "8",
    title: "Relay Chat Platform",
    description: "Slack-alternative built for async-first teams.",
    longDescription:
      "A team messaging platform with threaded conversations, rich embeds, and a powerful search engine. Supports 10k concurrent connections per node.",
    tags: ["Elixir", "Phoenix", "LiveView", "PostgreSQL"],
    category: "Full Stack",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/ExpandedReactions_ChelseaSantiful-RE50Djk?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=2000&hei=1200&qlt=100&fit=constrain",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: "2022",
  },
];

const CATEGORIES = ["All", "Frontend", "Full Stack", "Backend", "Mobile"];

export default function ProjectsPage() {
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-32">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4"
          >
            {t("projects.eyebrow")}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-syne text-5xl md:text-6xl font-bold tracking-tight text-white text-balance mb-6"
          >
            {t("projects.heading")}
            <span className="text-purple-500">.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg leading-relaxed max-w-xl text-pretty"
          >
            {t("projects.subheading")}
          </motion.p>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-purple-600 border-purple-500 text-white shadow-[0_0_16px_rgba(168,85,247,0.35)]"
                  : "bg-white/5 border-white/10 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto flex items-center text-xs text-white/30 font-medium">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </motion.div>

        {/* Masonry-style grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto"
          >
            {filtered.map((project, index) => {
              const isFeatured = project.featured && index < 2;
              return (
                <motion.article
                  key={project.id}
                  variants={scaleIn}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                  className={`group relative rounded-2xl overflow-hidden border border-white/8 bg-[#111111] cursor-pointer transition-all duration-300 ${
                    isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                  } ${
                    project.id === "1" ? "lg:col-span-2 lg:row-span-1" : ""
                  } shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_-8px_rgba(0,0,0,0.6)]`}
                  whileHover={{
                    y: -4,
                    boxShadow:
                      "0 4px 8px rgba(0,0,0,0.4), 0 20px 48px -12px rgba(168,85,247,0.2)",
                    borderColor: "rgba(168,85,247,0.3)",
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                >
                  {/* Cover image */}
                  <div
                    className={`relative overflow-hidden bg-[#1a1a1a] ${
                      project.id === "1" ? "h-52" : "h-44"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />

                    {/* Featured badge */}
                    {project.featured && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-600/90 text-white border border-purple-400/30 backdrop-blur-sm">
                        Featured
                      </span>
                    )}

                    {/* Year badge */}
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium bg-black/50 text-white/60 border border-white/10 backdrop-blur-sm">
                      {project.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Category */}
                    <p className="text-xs font-semibold uppercase tracking-widest text-purple-400/80 mb-2">
                      {project.category}
                    </p>

                    {/* Title */}
                    <h2 className="font-syne text-lg font-bold text-white tracking-tight mb-2 group-hover:text-purple-100 transition-colors duration-200">
                      {project.title}
                    </h2>

                    {/* Description — short by default, long on hover */}
                    <div className="relative overflow-hidden">
                      <p className="text-sm text-white/50 leading-relaxed mb-4 transition-all duration-300">
                        {hoveredId === project.id
                          ? project.longDescription
                          : project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(project.tags ?? []).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/6 text-white/50 border border-white/8 group-hover:border-purple-500/20 group-hover:text-white/70 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-3 border-t border-white/6">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-white transition-colors duration-200"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github size={13} />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-purple-400 transition-colors duration-200"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink size={13} />
                          Live
                        </a>
                      )}
                      <motion.span
                        className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        animate={
                          hoveredId === project.id
                            ? { x: 0, opacity: 1 }
                            : { x: -4, opacity: 0 }
                        }
                        transition={{ duration: 0.2 }}
                      >
                        View details
                        <ArrowRight size={12} />
                      </motion.span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-px rounded-2xl bg-gradient-to-br from-purple-500/30 via-white/5 to-transparent">
            <div className="bg-[#111111] rounded-2xl px-10 py-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3">
                {t("projects.cta.eyebrow")}
              </p>
              <h3 className="font-syne text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 text-balance">
                {t("projects.cta.heading")}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
                {t("projects.cta.body")}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-purple-600 hover:bg-purple-500 text-white transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.55)]"
              >
                {t("projects.cta.button")}
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}