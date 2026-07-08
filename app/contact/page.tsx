"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Mail, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, MapPin, Clock, Send, CheckCircle, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';
import { APP_NAME, APP_EMAIL, socialLinks } from "@/lib/data";
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github size={18} />,
  LinkedIn: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />,
};

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const inputFocusVariants: Variants = {
  idle: { scale: 1, borderColor: "rgba(255,255,255,0.08)" },
  focused: { scale: 1.005, borderColor: "rgba(168,85,247,0.6)" },
};

const toastVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }
  return errors;
}

const subjectOptions = [
  "Project Inquiry",
  "Freelance Collaboration",
  "Full-time Opportunity",
  "Open Source",
  "Just Saying Hi",
  "Other",
];

export default function ContactPage() {
  const t = useTranslations();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setToastVisible(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
      if (toastTimer.current) clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => {
        setToastVisible(false);
        setTimeout(() => setSubmitted(false), 400);
      }, 5000);
    }, 1400);
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-800/6 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">
              {t("contact.eyebrow")}
            </span>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="font-syne text-5xl md:text-6xl font-bold tracking-tight text-balance leading-[1.05] mb-4"
          >
            {t("contact.heading.line1")}{" "}
            <span className="text-purple-400">{t("contact.heading.accent")}</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg leading-relaxed max-w-xl text-pretty"
          >
            {t("contact.subheading")}
          </motion.p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* LEFT PANEL */}
          <motion.aside
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Availability badge */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)]">
              <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                </span>
                <span className="text-sm font-semibold text-emerald-400">
                  {t("contact.availability.status")}
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                {t("contact.availability.description")}
              </p>
              <div className="mt-4 pt-4 border-t border-white/6 flex items-center gap-2 text-white/40 text-xs">
                <Clock size={12} />
                <span>{t("contact.availability.timezone")}</span>
              </div>
            </div>

            {/* Contact info */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
                {t("contact.info.label")}
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${APP_EMAIL}`}
                  className="flex items-center gap-3 group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-all duration-200">
                    <Mail size={15} />
                  </span>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">{t("contact.info.emailLabel")}</p>
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors duration-200">
                      {APP_EMAIL}
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <MapPin size={15} />
                  </span>
                  <div>
                    <p className="text-xs text-white/30 mb-0.5">{t("contact.info.locationLabel")}</p>
                    <p className="text-sm text-white/80">{t("contact.info.location")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_24px_-8px_rgba(0,0,0,0.4)]">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
                {t("contact.social.label")}
              </p>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                {socialLinks.map((link) => (
                  <motion.li key={link.label} variants={fadeInUp}>
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-between group px-4 py-3 rounded-xl border border-white/6 bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-white/50 group-hover:text-purple-400 transition-colors duration-200">
                          {socialIcons[link.label] ?? <Mail size={18} />}
                        </span>
                        <span className="text-sm text-white/70 group-hover:text-white transition-colors duration-200 font-medium">
                          {link.label}
                        </span>
                      </div>
                      <ArrowRight
                        size={14}
                        className="text-white/20 group-hover:text-purple-400 transition-colors duration-200"
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.aside>

          {/* RIGHT PANEL — Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-8 md:p-10 shadow-[0_1px_2px_rgba(0,0,0,0.2),0_16px_48px_-16px_rgba(0,0,0,0.5)]">
              <h2 className="font-syne text-2xl font-bold tracking-tight mb-1">
                {t("contact.form.heading")}
              </h2>
              <p className="text-white/40 text-sm mb-8">
                {t("contact.form.subheading")}
              </p>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold uppercase tracking-widest text-white/40"
                    >
                      {t("contact.form.nameLabel")}
                    </label>
                    <motion.div
                      animate={focusedField === "name" ? "focused" : "idle"}
                      variants={inputFocusVariants}
                      className="rounded-xl border bg-white/[0.04] overflow-hidden"
                      style={{ borderColor: errors.name ? "rgba(239,68,68,0.5)" : undefined }}
                    >
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder={t("contact.form.namePlaceholder")}
                        className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-white/20 outline-none"
                        autoComplete="name"
                      />
                    </motion.div>
                    <AnimatePresence>
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="flex items-center gap-1 text-xs text-red-400 mt-0.5"
                        >
                          <AlertCircle size={11} />
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-widest text-white/40"
                    >
                      {t("contact.form.emailLabel")}
                    </label>
                    <motion.div
                      animate={focusedField === "email" ? "focused" : "idle"}
                      variants={inputFocusVariants}
                      className="rounded-xl border bg-white/[0.04] overflow-hidden"
                      style={{ borderColor: errors.email ? "rgba(239,68,68,0.5)" : undefined }}
                    >
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder={t("contact.form.emailPlaceholder")}
                        className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-white/20 outline-none"
                        autoComplete="email"
                      />
                    </motion.div>
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="flex items-center gap-1 text-xs text-red-400 mt-0.5"
                        >
                          <AlertCircle size={11} />
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-semibold uppercase tracking-widest text-white/40"
                  >
                    {t("contact.form.subjectLabel")}
                  </label>
                  <motion.div
                    animate={focusedField === "subject" ? "focused" : "idle"}
                    variants={inputFocusVariants}
                    className="rounded-xl border bg-white/[0.04] overflow-hidden"
                    style={{ borderColor: errors.subject ? "rgba(239,68,68,0.5)" : undefined }}
                  >
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none appearance-none cursor-pointer"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <option value="" disabled style={{ background: "#1a1a1a" }}>
                        {t("contact.form.subjectPlaceholder")}
                      </option>
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt} style={{ background: "#1a1a1a" }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                  <AnimatePresence>
                    {errors.subject && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="flex items-center gap-1 text-xs text-red-400 mt-0.5"
                      >
                        <AlertCircle size={11} />
                        {errors.subject}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-widest text-white/40"
                  >
                    {t("contact.form.messageLabel")}
                  </label>
                  <motion.div
                    animate={focusedField === "message" ? "focused" : "idle"}
                    variants={inputFocusVariants}
                    className="rounded-xl border bg-white/[0.04] overflow-hidden"
                    style={{ borderColor: errors.message ? "rgba(239,68,68,0.5)" : undefined }}
                  >
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder={t("contact.form.messagePlaceholder")}
                      rows={6}
                      className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none leading-relaxed"
                    />
                  </motion.div>
                  <div className="flex items-start justify-between">
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -4 }}
                          className="flex items-center gap-1 text-xs text-red-400 mt-0.5"
                        >
                          <AlertCircle size={11} />
                          {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <span className="text-xs text-white/20 ml-auto mt-1">
                      {form.message.length} {t("contact.form.charCount")}
                    </span>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02 }}
                  whileTap={{ scale: submitting ? 1 : 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.35)] hover:shadow-[0_0_32px_rgba(168,85,247,0.55)] overflow-hidden"
                >
                  {submitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                      <span>{t("contact.form.sending")}</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>{t("contact.form.submit")}</span>
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-white/25">
                  {t("contact.form.disclaimer")}
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toastVisible && (
          <motion.div
            variants={toastVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 20, scale: 0.92, transition: { duration: 0.3 } }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl bg-[#1a1a1a] border border-emerald-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(52,211,153,0.1)] min-w-[300px]"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-400 shrink-0">
              <CheckCircle size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                {t("contact.toast.title")}
              </p>
              <p className="text-xs text-white/50 mt-0.5">
                {t("contact.toast.body")}
              </p>
            </div>
            <button
              onClick={() => setToastVisible(false)}
              className="ml-auto text-white/30 hover:text-white/70 transition-colors duration-200 text-lg leading-none"
              aria-label="Dismiss"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}