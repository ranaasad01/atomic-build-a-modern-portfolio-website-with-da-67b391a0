"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Star, Code, Layers, Zap, Mail, ExternalLink, CheckCircle } from 'lucide-react';
import { APP_NAME, APP_TAGLINE, APP_EMAIL, socialLinks } from "@/lib/data";
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { useTranslations } from "next-intl";

const featuredProjects = [
  {
    id: "1",
    title: "Orbit Design System",
    description: "A comprehensive component library built for scale. 120+ components, full dark mode, and accessibility-first architecture used by 3 product teams.",
    tags: ["React", "TypeScript", "Storybook", "Figma"],
    image: "https://s3-alpha.figma.com/hub/file/2243587999456758553/75e4372a-8462-487a-9eef-232cbcde11ad-cover.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "2",
    title: "Pulse Analytics",
    description: "Real-time data visualization dashboard for SaaS metrics. Handles 50k+ events per second with sub-100ms latency using WebSockets and React Query.",
    tags: ["Next.js", "WebSockets", "D3.js", "PostgreSQL"],
    image: "https://media.licdn.com/dms/image/v2/C560BAQFE9hgXdIuk8g/company-logo_200_200/company-logo_200_200/0/1630666773600/pulsedigital_logo?e=2147483647&v=beta&t=bZmZ1PqmRtJYH98AP9oD8heKWwDkKZXGbUyBxAe-vy0",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "3",
    title: "Nomad CMS",
    description: "Headless content management platform with a visual page builder, multi-tenant support, and a GraphQL API powering 40+ client websites.",
    tags: ["GraphQL", "Node.js", "React", "MongoDB"],
    image: "https://images.squarespace-cdn.com/content/v1/62236fcc177d082da969cd37/1708324588987-DFWGUW3Z8B4OIHIHEV1Q/nomad+logo.png",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
];

const skills = [
  { name: "React & Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Framer Motion", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Redis", category: "Backend" },
  { name: "Figma", category: "Design" },
  { name: "Design Systems", category: "Design" },
  { name: "AWS", category: "Infra" },
  { name: "Docker", category: "Infra" },
];

const testimonials = [
  {
    id: "t1",
    name: "Sarah Chen",
    role: "CTO at Luminary",
    avatar: "https://help.figma.com/hc/article_attachments/36480146228759",
    quote: "Alex delivered a design system that cut our frontend development time in half. The attention to detail and documentation quality was exceptional.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Webb",
    role: "Product Lead at Stackr",
    avatar: "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/13483.png&w=350&h=254",
    quote: "Working with Alex felt like having a senior engineer and a designer in one. The Pulse dashboard transformed how our team interprets data.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Priya Nair",
    role: "Founder at Nomadic",
    avatar: "https://media.licdn.com/dms/image/v2/D5622AQE3NpM1FP01Yg/feedshare-shrink_800/B56Zf4pvKcGUAg-/0/1752223383746?e=2147483647&v=beta&t=C11dC6M36dpAKpcbBRMtusPrnkgE-cNJfHc93ZNpFoQ",
    quote: "From architecture to deployment, Alex handled everything with clarity and speed. Our CMS now powers 40 sites without a single incident.",
    rating: 5,
  },
];

const valueProps = [
  {
    icon: <Code size={22} />,
    title: "Clean, Scalable Code",
    description: "Every project ships with TypeScript, thorough tests, and documentation that your future team will thank you for.",
  },
  {
    icon: <Layers size={22} />,
    title: "Design-Aware Engineering",
    description: "I bridge the gap between Figma and production, ensuring pixel-perfect fidelity and smooth interactions at every breakpoint.",
  },
  {
    icon: <Zap size={22} />,
    title: "Performance by Default",
    description: "Core Web Vitals, bundle analysis, and edge-ready architecture are baked in from day one, not bolted on at the end.",
  },
];

const stats = [
  { value: "40+", label: "Projects shipped" },
  { value: "98%", label: "Client satisfaction" },
  { value: "5 yrs", label: "Industry experience" },
  { value: "12+", label: "Open source libs" },
];

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github size={18} />,
  LinkedIn: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />,
};

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations();

  const motionProps = (variants: object) =>
    shouldReduceMotion ? {} : { variants };

  return (
    <main
      className="bg-[#0a0a0a] text-white overflow-x-hidden"
      data-atomic-id="a1fkvi83">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center pt-16"
        data-atomic-id="a1rz02k8">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          data-atomic-id="a1sooiy3">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"
            data-atomic-id="ax7l8i6" />
          <div
            className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-600/8 rounded-full blur-[80px]"
            data-atomic-id="ax902mo" />
        </div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
          data-atomic-id="a1sri773" />

        <div
          className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center"
          data-atomic-id="a1ssx1bl"
          style={{
            backgroundColor: "#22c55e"
          }}>
          {/* Left: copy */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div
              {...motionProps(fadeIn)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold tracking-widest uppercase w-fit"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"
                data-atomic-id="a1txawdn" />
              {t("hero.badge")}
            </motion.div>

            <motion.h1
              {...motionProps(fadeInUp)}
              className="font-syne text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.05]"
            >
              {t("hero.headline1")}{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
                data-atomic-id="a7aor4g">
                {t("hero.headline2")}
              </span>{" "}
              {t("hero.headline3")}
            </motion.h1>

            <motion.p
              {...motionProps(fadeInUp)}
              className="text-white/50 text-lg leading-relaxed max-w-md text-pretty"
            >
              {t("hero.subtext")}
            </motion.p>

            <motion.div
              {...motionProps(fadeInUp)}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.35)] hover:shadow-[0_0_36px_rgba(168,85,247,0.55)] hover:-translate-y-0.5"
              >
                {t("hero.cta_primary")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/25 text-white/70 hover:text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                {t("hero.cta_secondary")}
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...motionProps(fadeIn)}
              className="flex items-center gap-4 pt-2"
            >
              {socialLinks.map((link, __atomicIdx) => (<a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-lg border border-white/8 text-white/40 hover:text-white hover:border-white/20 transition-all duration-200"
                data-atomic-id="aup7sba"
                data-atomic-instance={__atomicIdx}>
                {socialIcons[link.label] ?? null}
              </a>))}
            </motion.div>
          </motion.div>

          {/* Right: stats card cluster */}
          <motion.div
            variants={shouldReduceMotion ? undefined : slideInRight}
            initial="hidden"
            animate="visible"
            className="hidden md:grid grid-cols-2 gap-4"
          >
            {stats.map((stat, __atomicIdx) => (<motion.div
              key={stat.label}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-col gap-1 p-6 rounded-2xl bg-white/[0.04] border border-white/8 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] backdrop-blur-sm"
            >
              <span
                className="font-syne text-4xl font-bold text-white tracking-tight"
                data-atomic-id="a2v4y3e"
                data-atomic-instance={__atomicIdx}>
                {stat.value}
              </span>
              <span
                className="text-sm text-white/40"
                data-atomic-id="a45qk7w"
                data-atomic-instance={__atomicIdx}>{stat.label}</span>
            </motion.div>))}

            {/* Avatar / availability badge */}
            <div
              className="col-span-2 flex items-center gap-4 p-5 rounded-2xl bg-purple-600/10 border border-purple-500/20"
              data-atomic-id="a9vg8f5">
              <div
                className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500/40 flex-shrink-0"
                data-atomic-id="ahsb58k">
                <img
                  src="https://static.wikia.nocookie.net/prototype/images/8/87/Mercer_Blade_Concept.jpg/revision/latest/scale-to-width-down/1200?cb=20120106165703"
                  alt="Alex Mercer"
                  className="w-full h-full object-cover"
                  data-atomic-id="auc6lkx" />
              </div>
              <div data-atomic-id="ahtpzd2">
                <p className="text-sm font-semibold text-white" data-atomic-id="a14lrh3q">{APP_NAME}</p>
                <p className="text-xs text-white/50" data-atomic-id="a14lris8">{APP_TAGLINE}</p>
              </div>
              <div
                className="ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-xs font-semibold"
                data-atomic-id="ahv4thk">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                  data-atomic-id="arnvrbu" />
                {t("hero.available")}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ── VALUE PROPS ──────────────────────────────────────────── */}
      <section
        className="relative py-24 md:py-32 border-t border-white/5"
        data-atomic-id="a1f6yr5o">
        <div className="max-w-6xl mx-auto px-6" data-atomic-id="a75wrjh">
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5"
          >
            {valueProps.map((vp, i) => (
              <motion.div
                key={vp.title}
                variants={shouldReduceMotion ? undefined : fadeInUp}
                whileHover={{ backgroundColor: "rgba(168,85,247,0.06)" }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4 p-8 bg-[#0f0f0f]"
              >
                <div
                  className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center text-purple-400"
                  data-atomic-id="a41rpfl"
                  data-atomic-instance={i}>
                  {vp.icon}
                </div>
                <h3
                  className="font-syne text-lg font-bold text-white"
                  data-atomic-id="a1uulgor"
                  data-atomic-instance={i}>
                  {vp.title}
                </h3>
                <p
                  className="text-sm text-white/45 leading-relaxed"
                  data-atomic-id="a8he5n6"
                  data-atomic-instance={i}>
                  {vp.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ── FEATURED PROJECTS ────────────────────────────────────── */}
      <section id="projects" className="py-24 md:py-32" data-atomic-id="aw4sm3r">
        <div className="max-w-6xl mx-auto px-6" data-atomic-id="a3potmg">
          {/* Section header */}
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div data-atomic-id="angdg80">
              <p
                className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
                data-atomic-id="a1munhyo">
                {t("projects.label")}
              </p>
              <h2
                className="font-syne text-4xl md:text-5xl font-bold tracking-tight text-balance"
                data-atomic-id="ao9jiqk">
                {t("projects.heading")}
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
            >
              {t("projects.view_all")}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Project cards — asymmetric bento */}
          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-5 gap-4"
          >
            {/* Large card */}
            <motion.div
              variants={shouldReduceMotion ? undefined : scaleIn}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:col-span-3 group relative rounded-2xl overflow-hidden border border-white/8 bg-[#0f0f0f] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_12px_32px_-8px_rgba(0,0,0,0.5)]"
            >
              <div className="aspect-[16/9] overflow-hidden" data-atomic-id="a1br5rah">
                <img
                  src={featuredProjects[0]?.image ?? ""}
                  alt={featuredProjects[0]?.title ?? ""}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-atomic-id="aio69qe" />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/20 to-transparent"
                  data-atomic-id="aipkzke" />
              </div>
              <div className="p-6" data-atomic-id="a1bsklez">
                <div className="flex flex-wrap gap-2 mb-3" data-atomic-id="apg1pse">
                  {(featuredProjects[0]?.tags ?? []).map((tag, __atomicIdx) => (<span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-white/6 border border-white/8 text-xs text-white/50"
                    data-atomic-id="ald2skr"
                    data-atomic-instance={__atomicIdx}>
                    {tag}
                  </span>))}
                </div>
                <h3
                  className="font-syne text-xl font-bold text-white mb-2"
                  data-atomic-id="abj8r54">
                  {featuredProjects[0]?.title ?? ""}
                </h3>
                <p
                  className="text-sm text-white/45 leading-relaxed mb-4"
                  data-atomic-id="a17ecl5r">
                  {featuredProjects[0]?.description ?? ""}
                </p>
                <div className="flex items-center gap-3" data-atomic-id="apka85w">
                  {featuredProjects[0]?.liveUrl && (
                    <a
                      href={featuredProjects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                      data-atomic-id="agr4f7l">
                      <ExternalLink size={12} /> Live site
                    </a>
                  )}
                  {featuredProjects[0]?.githubUrl && (
                    <a
                      href={featuredProjects[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/40 hover:text-white transition-colors"
                      data-atomic-id="a1n0gs03">
                      <Github size={12} /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Two smaller cards stacked */}
            <div className="md:col-span-2 flex flex-col gap-4" data-atomic-id="a114d3ai">
              {[featuredProjects[1], featuredProjects[2]].map((project, __atomicIdx) => {
                if (!project) return null;
                return (
                  <motion.div
                    key={project.id}
                    variants={shouldReduceMotion ? undefined : fadeInUp}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group relative rounded-2xl overflow-hidden border border-white/8 bg-[#0f0f0f] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] flex-1"
                  >
                    <div
                      className="aspect-[16/7] overflow-hidden"
                      data-atomic-id="avya6tx"
                      data-atomic-instance={__atomicIdx}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-atomic-id="a5rsdf6"
                        data-atomic-instance={__atomicIdx} />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/10 to-transparent"
                        data-atomic-id="a5t7396"
                        data-atomic-instance={__atomicIdx} />
                    </div>
                    <div
                      className="p-5"
                      data-atomic-id="avzp0yf"
                      data-atomic-instance={__atomicIdx}>
                      <div
                        className="flex flex-wrap gap-1.5 mb-2"
                        data-atomic-id="acjnth6"
                        data-atomic-instance={__atomicIdx}>
                        {project.tags.slice(0, 2).map((tag, __atomicIdx) => (<span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-white/6 border border-white/8 text-xs text-white/50"
                          data-atomic-id="a1l2lf13"
                          data-atomic-instance={__atomicIdx}>
                          {tag}
                        </span>))}
                      </div>
                      <h3
                        className="font-syne text-base font-bold text-white mb-1"
                        data-atomic-id="a2j7uac"
                        data-atomic-instance={__atomicIdx}>
                        {project.title}
                      </h3>
                      <p
                        className="text-xs text-white/40 leading-relaxed line-clamp-2"
                        data-atomic-id="a2rk23"
                        data-atomic-instance={__atomicIdx}>
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
      {/* ── SKILLS ───────────────────────────────────────────────── */}
      <section
        id="about"
        className="py-24 md:py-32 border-t border-white/5 bg-[#0d0d0d]"
        data-atomic-id="ajcrap7">
        <div className="max-w-6xl mx-auto px-6" data-atomic-id="ah9fybg">
          <div
            className="grid md:grid-cols-2 gap-16 items-center"
            data-atomic-id="a17xfy2n">
            {/* Left: copy */}
            <motion.div
              variants={shouldReduceMotion ? undefined : slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <div data-atomic-id="airyqcn">
                <p
                  className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
                  data-atomic-id="a1g0n4ev">
                  {t("skills.label")}
                </p>
                <h2
                  className="font-syne text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4"
                  data-atomic-id="abuj9ib">
                  {t("skills.heading")}
                </h2>
                <p
                  className="text-white/45 leading-relaxed text-pretty"
                  data-atomic-id="a1g0n7rv">
                  {t("skills.body")}
                </p>
              </div>

              <ul className="flex flex-col gap-3" data-atomic-id="a115ts93">
                {[
                  t("skills.point1"),
                  t("skills.point2"),
                  t("skills.point3"),
                ].map((point, __atomicIdx) => (<li
                  key={point}
                  className="flex items-start gap-3 text-sm text-white/60"
                  data-atomic-id="avu1tpl"
                  data-atomic-instance={__atomicIdx}>
                  <CheckCircle size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  {point}
                </li>))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-200 group w-fit"
              >
                {t("skills.cta")}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            {/* Right: skill tags */}
            <motion.div
              variants={shouldReduceMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, __atomicIdx) => (<motion.span
                key={skill.name}
                variants={shouldReduceMotion ? undefined : scaleIn}
                whileHover={{ scale: 1.06, borderColor: "rgba(168,85,247,0.5)" }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 rounded-xl border border-white/8 bg-white/[0.04] text-sm text-white/70 hover:text-white cursor-default transition-colors duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
              >
                {skill.name}
                <span
                  className="ml-2 text-xs text-white/25"
                  data-atomic-id="apa7iqy"
                  data-atomic-instance={__atomicIdx}>{skill.category}</span>
              </motion.span>))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 border-t border-white/5"
        data-atomic-id="a6kpzan">
        <div className="max-w-6xl mx-auto px-6" data-atomic-id="aut730g">
          <motion.div
            variants={shouldReduceMotion ? undefined : fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-3"
              data-atomic-id="akhxtkj">
              {t("testimonials.label")}
            </p>
            <h2
              className="font-syne text-4xl md:text-5xl font-bold tracking-tight text-balance"
              data-atomic-id="a11615bz">
              {t("testimonials.heading")}
            </h2>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t_item, i) => (
              <motion.div
                key={t_item.id}
                variants={shouldReduceMotion ? undefined : fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`flex flex-col gap-5 p-6 rounded-2xl border border-white/8 bg-[#0f0f0f] shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)] ${
                  i === 1 ? "md:mt-6" : ""
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1" data-atomic-id="a1inw60o" data-atomic-instance={i}>
                  {Array.from({ length: t_item.rating }).map((_, si) => (
                    <Star key={si} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p
                  className="text-sm text-white/60 leading-relaxed flex-1"
                  data-atomic-id="aiba8qv"
                  data-atomic-instance={i}>
                  &ldquo;{t_item.quote}&rdquo;
                </p>

                <div
                  className="flex items-center gap-3 pt-2 border-t border-white/5"
                  data-atomic-id="a1iqpu9o"
                  data-atomic-instance={i}>
                  <div
                    className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-white/10 flex-shrink-0"
                    data-atomic-id="a15q75mn"
                    data-atomic-instance={i}>
                    <img
                      src={t_item.avatar}
                      alt={t_item.name}
                      className="w-full h-full object-cover"
                      data-atomic-id="acsy21o"
                      data-atomic-instance={i} />
                  </div>
                  <div data-atomic-id="a15rlzr5" data-atomic-instance={i}>
                    <p
                      className="text-sm font-semibold text-white"
                      data-atomic-id="a1rhdkfl"
                      data-atomic-instance={i}>{t_item.name}</p>
                    <p
                      className="text-xs text-white/35"
                      data-atomic-id="a1rhdm43"
                      data-atomic-instance={i}>{t_item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* ── CTA BANNER ───────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-24 md:py-32 border-t border-white/5"
        data-atomic-id="aqv56a2">
        <div className="max-w-6xl mx-auto px-6" data-atomic-id="a1f8f5q3">
          <motion.div
            variants={shouldReduceMotion ? undefined : scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-br from-purple-900/30 via-[#0f0f0f] to-indigo-900/20 p-12 md:p-16 text-center shadow-[0_0_80px_rgba(168,85,247,0.12)]"
          >
            {/* Glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"
              data-atomic-id="ahu0iar" />
            <div className="absolute inset-0 pointer-events-none" data-atomic-id="ahvfcf9">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/8 rounded-full blur-[80px]"
                data-atomic-id="a1g7tdxk" />
            </div>

            <div className="relative" data-atomic-id="ahwu6jr">
              <p
                className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4"
                data-atomic-id="a9kryzb">
                {t("cta.label")}
              </p>
              <h2
                className="font-syne text-4xl md:text-5xl font-bold tracking-tight text-balance mb-4"
                data-atomic-id="avx8dr7">
                {t("cta.heading")}
              </h2>
              <p
                className="text-white/45 text-lg leading-relaxed max-w-xl mx-auto mb-8 text-pretty"
                data-atomic-id="a9ks2cb">
                {t("cta.body")}
              </p>
              <div
                className="flex flex-wrap items-center justify-center gap-4"
                data-atomic-id="a1n3xgnk">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-[0_0_24px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  {t("cta.button")}
                </Link>
                <a
                  href={`mailto:${APP_EMAIL}`}
                  className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                  data-atomic-id="a3uga4z">
                  {APP_EMAIL}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}