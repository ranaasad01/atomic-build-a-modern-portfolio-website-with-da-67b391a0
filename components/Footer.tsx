"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navLinks, APP_NAME, APP_EMAIL, socialLinks } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { Code2 as Github, MessageCircle as Twitter, Briefcase as Linkedin, Mail, ArrowUp } from 'lucide-react';

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github size={16} />,
  LinkedIn: <Linkedin size={16} />,
  Twitter: <Twitter size={16} />,
};

export default function Footer() {
  const pathname = usePathname();

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function getHref(href: string) {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0a]">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={fadeInUp} className="md:col-span-1">
            <Link
              href="/"
              className="font-syne font-bold text-xl tracking-tight text-white hover:text-purple-400 transition-colors duration-200 inline-block mb-3"
            >
              <span className="text-purple-500">{"{"}</span>
              {APP_NAME}
              <span className="text-purple-500">{"}"}</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building digital experiences that live at the intersection of
              design and engineering.
            </p>
            <a
              href={`mailto:${APP_EMAIL}`}
              className="inline-flex items-center gap-2 mt-4 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
            >
              <Mail size={14} />
              {APP_EMAIL}
            </a>
          </motion.div>

          {/* Nav links */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={getHref(link.href)}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeInUp}>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
              Connect
            </p>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {socialIcons[link.label]}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5"
        >
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {APP_NAME}. Crafted with care.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-white/70 transition-colors duration-200 group"
            aria-label="Back to top"
          >
            Back to top
            <span className="p-1 rounded border border-white/10 group-hover:border-white/30 transition-colors duration-200">
              <ArrowUp size={10} />
            </span>
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}