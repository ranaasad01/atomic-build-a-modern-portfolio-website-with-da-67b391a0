"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";
import { APP_NAME, APP_EMAIL } from "@/lib/data";
import { Download, MapPin, Calendar, Briefcase, GraduationCap, Award, ArrowRight, Mail } from 'lucide-react';
import Link from "next/link";
import { useTranslations } from "next-intl";

const workExperience = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "Vercel",
    location: "San Francisco, CA (Remote)",
    period: "2022 — Present",
    description:
      "Lead frontend development for the dashboard and analytics platform. Architected a component library used across 12 product teams, reducing UI inconsistencies by 60%. Drove adoption of React Server Components and improved Core Web Vitals scores by 40%.",
    highlights: [
      "Built real-time collaboration features serving 200k+ users",
      "Mentored 4 junior engineers through structured code reviews",
      "Reduced bundle size by 35% via code-splitting and lazy loading",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    id: "2",
    role: "Frontend Developer",
    company: "Linear",
    location: "San Francisco, CA (Remote)",
    period: "2020 — 2022",
    description:
      "Contributed to the core product experience for Linear's issue tracking platform. Owned the notifications system end-to-end and built the keyboard shortcut framework that became a signature product feature.",
    highlights: [
      "Shipped keyboard-first navigation used by 80% of power users",
      "Redesigned the notifications panel, increasing engagement by 28%",
      "Integrated real-time sync via WebSockets with sub-100ms latency",
    ],
    tags: ["React", "GraphQL", "Electron", "CSS-in-JS"],
  },
  {
    id: "3",
    role: "UI Engineer",
    company: "Stripe",
    location: "Dublin, Ireland",
    period: "2018 — 2020",
    description:
      "Worked on Stripe's developer documentation and dashboard UI. Rebuilt the API reference explorer from scratch, improving developer onboarding time by 45%. Collaborated closely with design and product to ship the Stripe Elements redesign.",
    highlights: [
      "Rebuilt API reference explorer with live code execution",
      "Contributed to the open-source Stripe.js SDK",
      "Shipped Stripe Elements redesign across 50+ countries",
    ],
    tags: ["React", "Node.js", "Storybook", "Jest"],
  },
  {
    id: "4",
    role: "Junior Web Developer",
    company: "Shopify",
    location: "Ottawa, Canada",
    period: "2016 — 2018",
    description:
      "Started career building merchant-facing features for Shopify's admin panel. Gained deep experience in accessibility, internationalization, and performance optimization at scale.",
    highlights: [
      "Improved accessibility score to WCAG AA across 6 admin sections",
      "Localized UI for 12 new markets",
      "Reduced page load time by 22% through image optimization",
    ],
    tags: ["Ruby on Rails", "React", "Polaris", "SCSS"],
  },
];

const education = [
  {
    id: "1",
    degree: "B.Sc. Computer Science",
    institution: "University of Waterloo",
    location: "Waterloo, Canada",
    period: "2012 — 2016",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Graduated with distinction. Thesis on adaptive UI systems for accessibility.",
    honors: "Dean's List, 2014 — 2016",
  },
  {
    id: "2",
    degree: "Design Systems Certificate",
    institution: "Interaction Design Foundation",
    location: "Online",
    period: "2019",
    description:
      "Completed advanced coursework in design systems, component architecture, and UX research methodologies.",
    honors: "Top 5% of cohort",
  },
];

const values = [
  {
    icon: "craft",
    title: "Craft over speed",
    description:
      "I believe the details matter. Pixel-perfect execution, thoughtful micro-interactions, and clean code are non-negotiable.",
  },
  {
    icon: "collab",
    title: "Design and code, together",
    description:
      "The best products emerge when engineering and design think as one. I bridge that gap fluently.",
  },
  {
    icon: "open",
    title: "Open by default",
    description:
      "I contribute to open source, share what I learn, and believe the web is better when knowledge flows freely.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero — split layout */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-800/8 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Portrait — left */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-purple-600/20 via-transparent to-purple-900/10 blur-sm" />
                <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_48px_rgba(0,0,0,0.6)]">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198143ff-55cc-44d3-a66f-e19c60f91635/ddutnwl-8f83b483-9f4f-41f4-b79a-41e45d67f9ae.jpg/v1/fill/w_821,h_973,q_70,strp/alex_mercer_portrait_by_maironru_ddutnwl-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NiIsInBhdGgiOiIvZi8xOTgxNDNmZi01NWNjLTQ0ZDMtYTY2Zi1lMTljNjBmOTE2MzUvZGR1dG53bC04ZjgzYjQ4My05ZjRmLTQxZjQtYjc5YS00MWU0NWQ2N2Y5YWUuanBnIiwid2lkdGgiOiI8PTg4MyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.I8v4Uzq6CdpcLr4WQiaFXRz860wN0yPXIssFD8pjdpk"
                    alt={`${APP_NAME} — Creative Developer`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background =
                          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)";
                        const initials = document.createElement("div");
                        initials.className =
                          "absolute inset-0 flex items-center justify-center";
                        initials.innerHTML =
                          '<span style="font-size:4rem;font-weight:700;color:rgba(168,85,247,0.8);font-family:sans-serif">AM</span>';
                        parent.appendChild(initials);
                      }
                    }}
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                  className="absolute -bottom-4 -right-4 bg-[#141414] border border-white/10 rounded-xl px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    <span className="text-xs font-medium text-white/70">
                      Open to work
                    </span>
                  </div>
                </motion.div>

                {/* Years badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.75, duration: 0.4, ease: "easeOut" }}
                  className="absolute -top-4 -left-4 bg-purple-600/90 backdrop-blur-sm border border-purple-500/30 rounded-xl px-4 py-3 shadow-[0_4px_24px_rgba(168,85,247,0.3)]"
                >
                  <p className="text-2xl font-bold text-white leading-none">8+</p>
                  <p className="text-xs text-purple-200 mt-0.5">Years exp.</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Bio — right */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">
                  <span className="w-6 h-px bg-purple-500" />
                  About me
                </span>
                <h1 className="font-syne text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-tight">
                  I build interfaces people{" "}
                  <span className="text-purple-400">actually enjoy</span> using.
                </h1>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-white/60 text-lg leading-relaxed"
              >
                Hi, I&apos;m {APP_NAME}. I&apos;m a creative developer based between San
                Francisco and Dublin, specializing in high-performance web
                applications and design systems. I care deeply about the
                intersection of engineering rigor and visual craft.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-white/50 leading-relaxed"
              >
                Over 8 years I&apos;ve shipped products at Vercel, Linear, Stripe, and
                Shopify. I thrive in environments where the bar is high and the
                team is small. When I&apos;m not coding, I&apos;m hiking, reading about
                typography, or contributing to open-source tools I wish existed.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-3 pt-2"
              >
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <MapPin size={14} className="text-purple-400" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Mail size={14} className="text-purple-400" />
                  {APP_EMAIL}
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-3 pt-2"
              >
                <a
                  href="/resume-alex-mercer.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.55)]"
                >
                  <Download size={15} />
                  Download Resume
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold rounded-lg transition-all duration-200"
                >
                  Get in touch
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-purple-500/30 transition-colors duration-300"
              >
                <h3 className="font-syne font-bold text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">
              <Briefcase size={12} />
              Work Experience
            </span>
            <h2 className="font-syne text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Where I&apos;ve worked
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-white/10 to-transparent hidden md:block" />

            <div className="flex flex-col gap-12">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: index * 0.05 }}
                  className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-10"
                >
                  {/* Period — left column */}
                  <div className="md:text-right md:pr-10 flex md:flex-col gap-3 md:gap-1 items-start md:items-end">
                    <span className="text-xs font-semibold text-purple-400 whitespace-nowrap">
                      {job.period}
                    </span>
                    <div className="flex items-center gap-1.5 text-white/30 text-xs">
                      <MapPin size={10} />
                      <span className="hidden md:inline">{job.location}</span>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-[200px] top-1.5 w-3 h-3 rounded-full bg-purple-500 border-2 border-[#0a0a0a] shadow-[0_0_8px_rgba(168,85,247,0.6)] -translate-x-1/2" />

                  {/* Content — right column */}
                  <div className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-purple-500/20 transition-colors duration-300 group">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-syne font-bold text-white text-lg">
                          {job.role}
                        </h3>
                        <p className="text-purple-400 text-sm font-medium">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/30 text-xs md:hidden">
                        <MapPin size={10} />
                        {job.location}
                      </div>
                    </div>

                    <p className="text-white/50 text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <ul className="flex flex-col gap-2 mb-4">
                      {job.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-white/40"
                        >
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-500 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">
              <GraduationCap size={12} />
              Education
            </span>
            <h2 className="font-syne text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Academic background
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-6 hover:border-purple-500/30 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-syne font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-purple-400 text-sm font-medium mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="flex-shrink-0 text-xs text-white/30 font-medium">
                    {edu.period}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-white/30 text-xs mb-3">
                  <MapPin size={10} />
                  {edu.location}
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {edu.description}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
                  <Award size={11} className="text-amber-400" />
                  <span className="text-xs font-medium text-amber-300">
                    {edu.honors}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resume CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative rounded-3xl overflow-hidden border border-white/8 bg-gradient-to-br from-purple-900/30 via-[#0f0f1a] to-[#0a0a0a] p-12 text-center"
          >
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08)_0%,transparent_60%)] pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400 mb-6">
                <Download size={12} />
                Resume
              </span>
              <h2 className="font-syne text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4 text-balance">
                Want the full picture?
              </h2>
              <p className="text-white/50 max-w-md mx-auto leading-relaxed mb-8">
                Download my resume for a complete overview of my experience,
                skills, and the projects I&apos;m most proud of.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href="/resume-alex-mercer.pdf"
                  download
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-[0_0_24px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                >
                  <Download size={16} />
                  Download Resume (PDF)
                </motion.a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all duration-200"
                >
                  Let&apos;s talk
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}