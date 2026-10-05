import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FloatingDots from "./components/FloatingDots";
import { useTranslation } from "react-i18next";
import {
  Code2,
  Wrench,
  Brain,
  Database as DatabaseIcon,
  BarChart3,
  Sparkles,
  Mail,
  ArrowDown,
  GraduationCap,
  Briefcase,
  Heart,
  Layers,
  Cpu,
  ScanLine,
  Smartphone,
  MessageSquareWarning,
  MapPin,
  Calendar,
  ChevronRight,
  Activity,
  Trophy,
  Zap,
  Eye,
  MessagesSquare,
  Sparkle,
  Code,
  Globe,
} from "lucide-react";

// ───────────────────────────────────────────────────────────
//  WhatsApp
// ───────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "6287789082198";
const WHATSAPP_MESSAGE_KEY = "whatsapp.message";
const EMAIL_ADDRESS = "nandafawaz07@gmail.com";
const EMAIL_URL = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
  EMAIL_ADDRESS
)}&su=${encodeURIComponent("Halo dari portfolio kamu")}&body=${encodeURIComponent(
  "Hi Nandana,\n\n"
)}`;

// ───────────────────────────────────────────────────────────
//  Language Toggle
// ───────────────────────────────────────────────────────────

function LanguageToggle() {
  const { i18n } = useTranslation();
  const toggle = () => {
    const next = i18n.language === "en" ? "id" : "en";
    i18n.changeLanguage(next);
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle language"
      className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
    >
      <Globe size={16} />
      <span className="font-mono font-semibold tracking-wider">
        {i18n.language.toUpperCase()}
      </span>
    </button>
  );
}

function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ───────────────────────────────────────────────────────────
//  Data
// ───────────────────────────────────────────────────────────

const PROFILE = {
  name: "profile.name",
  initials: "NF",
  avatar: null,
  title: "profile.title",
  bio: "profile.bio",
};

const NAV_LINKS = [
  { label: "nav.links.0.label", href: "#about" },
  { label: "nav.links.1.label", href: "#skills" },
  { label: "nav.links.2.label", href: "#projects" },
  { label: "nav.links.3.label", href: "#experience" },
  { label: "nav.links.4.label", href: "#contact" },
];

const ABOUT_PARAGRAPHS_KEYS = [
  "about.paragraphs.0",
  "about.paragraphs.1",
  "about.paragraphs.2",
];

const QUICK_FACTS = [
  { icon: MapPin, key: "about.facts.location", highlight: false },
  { icon: GraduationCap, key: "about.facts.university", highlight: false },
  { icon: Cpu, key: "about.facts.field", highlight: false },
  { icon: Activity, key: "about.facts.status", highlight: true },
];

const EDUCATION = [
  {
    schoolKey: "education.0.school",
    detailKey: "education.0.detail",
    periodKey: "education.0.period",
    currentLabelKey: "education.0.currentLabel",
    icon: GraduationCap,
    current: true,
  },
  {
    schoolKey: "education.1.school",
    detailKey: "education.1.detail",
    periodKey: "education.1.period",
    currentLabelKey: "education.1.currentLabel",
    icon: GraduationCap,
    current: false,
  },
];

const INTERESTS = [
  { nameKey: "interests.0.name", icon: Brain, color: "violet" },
  { nameKey: "interests.1.name", icon: Cpu, color: "cyan" },
  { nameKey: "interests.2.name", icon: Eye, color: "rose" },
  { nameKey: "interests.3.name", icon: Sparkle, color: "emerald" },
  { nameKey: "interests.4.name", icon: BarChart3, color: "cyan" },
  { nameKey: "interests.5.name", icon: Code, color: "violet" },
];

const SKILLS = [
  {
    titleKey: "skills.categories.0.title",
    icon: Code2,
    color: "cyan",
    itemKeys: ["skills.categories.0.items.0","skills.categories.0.items.1","skills.categories.0.items.2","skills.categories.0.items.3"],
  },
  {
    titleKey: "skills.categories.1.title",
    icon: Brain,
    color: "violet",
    itemKeys: ["skills.categories.1.items.0","skills.categories.1.items.1","skills.categories.1.items.2","skills.categories.1.items.3","skills.categories.1.items.4","skills.categories.1.items.5"],
  },
  {
    titleKey: "skills.categories.2.title",
    icon: BarChart3,
    color: "rose",
    itemKeys: ["skills.categories.2.items.0","skills.categories.2.items.1","skills.categories.2.items.2","skills.categories.2.items.3","skills.categories.2.items.4","skills.categories.2.items.5"],
  },
  {
    titleKey: "skills.categories.3.title",
    icon: DatabaseIcon,
    color: "emerald",
    itemKeys: ["skills.categories.3.items.0","skills.categories.3.items.1","skills.categories.3.items.2","skills.categories.3.items.3","skills.categories.3.items.4"],
  },
  {
    titleKey: "skills.categories.4.title",
    icon: Wrench,
    color: "amber",
    itemKeys: ["skills.categories.4.items.0","skills.categories.4.items.1","skills.categories.4.items.2","skills.categories.4.items.3","skills.categories.4.items.4"],
  },
];

const COLOR_THEME = {
  cyan:    { text: "text-white", bg: "bg-white/[0.04]", border: "border-white/10", ring: "ring-white/20", soft: "text-white/70" },
  violet:  { text: "text-white", bg: "bg-white/[0.04]", border: "border-white/10", ring: "ring-white/20", soft: "text-white/70" },
  rose:    { text: "text-white", bg: "bg-white/[0.04]", border: "border-white/10", ring: "ring-white/20", soft: "text-white/70" },
  emerald: { text: "text-white", bg: "bg-white/[0.04]", border: "border-white/10", ring: "ring-white/20", soft: "text-white/70" },
  amber:  { text: "text-white", bg: "bg-white/[0.04]", border: "border-white/10", ring: "ring-white/20", soft: "text-white/70" },
};

const PROJECTS = [
  {
    number: "01",
    titleKey: "projects.items.0.title",
    subtitleKey: "projects.items.0.subtitle",
    descriptionKey: "projects.items.0.description",
    icon: ScanLine,
    color: "cyan",
    conic: "from-white/20 via-white/10 to-white/20",
    meta: { roleKey: "projects.items.0.meta.role", impactKey: "projects.items.0.meta.impact", timelineKey: "projects.items.0.meta.timeline" },
    tech: [
      { nameKey: "projects.items.0.tech.0.name", icon: Brain },
      { nameKey: "projects.items.0.tech.1.name", icon: Layers },
      { nameKey: "projects.items.0.tech.2.name", icon: Cpu },
      { nameKey: "projects.items.0.tech.3.name", icon: ScanLine },
    ],
    focusKeys: ["projects.items.0.focus.0","projects.items.0.focus.1"],
  },
  {
    number: "02",
    titleKey: "projects.items.1.title",
    subtitleKey: "projects.items.1.subtitle",
    descriptionKey: "projects.items.1.description",
    icon: Smartphone,
    color: "violet",
    conic: "from-white/20 via-white/10 to-white/20",
    meta: { roleKey: "projects.items.1.meta.role", impactKey: "projects.items.1.meta.impact", timelineKey: "projects.items.1.meta.timeline" },
    tech: [
      { nameKey: "projects.items.1.tech.0.name", icon: Layers },
      { nameKey: "projects.items.1.tech.1.name", icon: Smartphone },
      { nameKey: "projects.items.1.tech.2.name", icon: Sparkles },
    ],
    focusKeys: ["projects.items.1.focus.0","projects.items.1.focus.1","projects.items.1.focus.2","projects.items.1.focus.3"],
  },
  {
    number: "03",
    titleKey: "projects.items.2.title",
    subtitleKey: "projects.items.2.subtitle",
    descriptionKey: "projects.items.2.description",
    icon: MessageSquareWarning,
    color: "rose",
    conic: "from-white/20 via-white/10 to-white/20",
    meta: { roleKey: "projects.items.2.meta.role", impactKey: "projects.items.2.meta.impact", timelineKey: "projects.items.2.meta.timeline" },
    tech: [
      { nameKey: "projects.items.2.tech.0.name", icon: MessagesSquare },
      { nameKey: "projects.items.2.tech.1.name", icon: Sparkle },
      { nameKey: "projects.items.2.tech.2.name", icon: Layers },
    ],
    focusKeys: ["projects.items.2.focus.0","projects.items.2.focus.1"],
  },
];

const EXPERIENCE = [
  {
    titleKey: "experience.items.0.title",
    roleKey: "experience.items.0.role",
    periodKey: "experience.items.0.period",
    descriptionKey: "experience.items.0.description",
    icon: Heart,
    color: "rose",
  },
];

const STATS = [
  { target: 3,   suffix: "+", key: "stats.0.label", color: "cyan" },
  { target: 25,  suffix: "+", key: "stats.1.label", color: "violet" },
  { target: 5,   suffix: "",  key: "stats.2.label", color: "rose" },
  { target: 2028, suffix: "", key: "stats.3.label", color: "emerald" },
];

const GLASS_CARD = "bg-white/[0.03] backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]";
const GLASS_ICON = "bg-white/[0.04] backdrop-blur-md border border-white/10";
const GLASS_PILL  = "bg-white/[0.04] backdrop-blur-md border border-white/10";

// ───────────────────────────────────────────────────────────
//  Hooks
// ───────────────────────────────────────────────────────────

function useCounter(target, duration = 1600) {
  const [value, setValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const startedRef = useRef(false);
  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.floor(eased * target));
      if (t < 1) requestAnimationFrame(tick);
      else setValue(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return [ref, value];
}

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = (delay = 0.08) => ({ hidden: {}, show: { transition: { staggerChildren: delay } } });

function Reveal({ children, className = "", delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "show" : "hidden"} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionHeading({ number, icon: Icon, title, kicker }) {
  return (
    <Reveal>
      <div className="mb-10 md:mb-14 relative">
        <span aria-hidden className="absolute -top-4 left-0 font-mono text-7xl md:text-8xl font-black text-white/[0.04] tracking-tighter select-none pointer-events-none">{number}</span>
        {kicker && (
          <p className="text-white/40 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 flex items-center gap-2">{kicker}</p>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-3 relative">
          {Icon && (
            <span className={`inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${GLASS_ICON} text-white`}>
              <Icon size={20} />
            </span>
          )}
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">{title}</span>
        </h2>
      </div>
    </Reveal>
  );
}

// ───────────────────────────────────────────────────────────
//  Ambient Background
// ───────────────────────────────────────────────────────────

function AmbientLayer() {
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-20 pointer-events-none bg-grid opacity-40" />
      <FloatingDots />
    </>
  );
}

// ───────────────────────────────────────────────────────────
//  Navbar
// ───────────────────────────────────────────────────────────

function Navbar() {
  const { t, i18n } = useTranslation();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t(WHATSAPP_MESSAGE_KEY))}`;
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="scroll-progress-bar"
        style={{ width: `${scrollPct}%` }}
      />
      <motion.nav initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl backdrop-saturate-150 bg-black/40 border-b border-white/5"
      >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg tracking-tight">
          <span className="text-white">{t("hero.welcome")}</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-slate-300">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors duration-300">{t(l.label)}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <a href={whatsappUrl} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            {t("nav.cta")} <WhatsAppIcon size={16} />
          </a>
        </div>
      </div>
    </motion.nav>
    </>
  );
}

// ───────────────────────────────────────────────────────────
//  Hero
// ───────────────────────────────────────────────────────────

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
          <motion.div initial="hidden" animate="show" variants={stagger(0.1)} className="max-w-2xl">
            <motion.div variants={fadeUp} transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${GLASS_PILL} text-sm text-slate-300 mb-6`}
            >
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </span>
              {t("hero.availability")}
            </motion.div>

            <motion.h1 variants={fadeUp} transition={{ duration: 0.6 }}
              style={{ animation: "float 6s ease-in-out infinite" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent animate-gradient">
                {t("profile.name")}
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 font-medium">
              {t("profile.title")}
            </motion.p>

            <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mt-6 text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed blur-in">
              {t("profile.bio")}
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mt-10">
              <motion.a href="#projects" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-3 pl-7 pr-6 py-3.5 rounded-full bg-white text-slate-950 font-bold shadow-xl shadow-white/10 hover:shadow-white/20 transition-shadow overflow-hidden"
              >
                <span aria-hidden className="btn-shine-overlay" />
                <span className="relative">{t("hero.viewProjects")}</span>
                <span className="relative flex items-center" style={{ animation: "arrow-bounce 1.6s ease-in-out infinite" }}>
                  <ArrowDown size={18} strokeWidth={2.5} />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex relative w-48 h-48 items-center justify-center mx-auto"
          >
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10">
              {PROFILE.avatar ? (
                <img src={PROFILE.avatar} alt={t("profile.name")} className="absolute inset-1 rounded-full object-cover w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)]" />
              ) : (
                <div className="absolute inset-1 rounded-full bg-slate-950 flex items-center justify-center">
                  <span className="text-6xl font-extrabold bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                    {PROFILE.initials}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────
//  Stats Bar
// ───────────────────────────────────────────────────────────

function StatsBar() {
  const { t } = useTranslation();
  return (
    <section className="relative py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className={`rounded-2xl ${GLASS_CARD} p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4`}>
            {STATS.map((s) => (
              <StatItem key={s.key} target={s.target} suffix={s.suffix} label={t(s.key)} color={s.color} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatItem({ target, suffix, label, color }) {
  const [ref, value] = useCounter(target);
  const [flash, setFlash] = useState(false);
  const prevValue = useRef(0);
  useEffect(() => {
    if (value === target && prevValue.current !== target && target > 0) {
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 500);
      prevValue.current = target;
      return () => clearTimeout(t);
    }
    prevValue.current = value;
  }, [value, target]);
  const theme = COLOR_THEME[color];
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className={`text-3xl md:text-4xl font-extrabold ${theme.text} tabular-nums${flash ? " stats-flash" : ""}`}>
        {value}<span className="text-xl">{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">{label}</div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
//  About
// ───────────────────────────────────────────────────────────

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="01" icon={Sparkles} kicker={t("about.sectionKicker")} title={t("about.sectionTitle")} />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-3 space-y-5">
            <Reveal className="space-y-5">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${GLASS_PILL} text-sm text-slate-300`}>
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                {t("about.status")}
              </div>
              {ABOUT_PARAGRAPHS_KEYS.map((pk, i) => (
                <p key={i} className="text-slate-300 leading-relaxed text-sm md:text-base">{t(pk)}</p>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <div className={`rounded-2xl ${GLASS_CARD} p-5 md:p-6 relative overflow-hidden`}>
                <h3 className="text-sm uppercase tracking-widest text-white/70 font-semibold mb-4 flex items-center gap-2">
                  <Zap size={14} /> {t("about.quickFacts")}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                  {QUICK_FACTS.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <f.icon size={16} className={`mt-0.5 shrink-0 ${f.highlight ? "text-emerald-400 animate-pulse" : "text-white/70"}`} />
                      <span className={f.highlight ? "text-emerald-300" : ""}>{t(f.key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <Reveal delay={0.05}>
              <div className={`rounded-2xl ${GLASS_CARD} p-5 md:p-6 relative overflow-hidden`}>
                <h3 className="text-sm uppercase tracking-widest text-white/70 font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap size={14} /> {t("about.education")}
                </h3>
                <div className="space-y-4">
                  {EDUCATION.map((ed, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="relative shrink-0 mt-1">
                        <div className="relative w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/80">
                          <ed.icon size={16} />
                        </div>
                        {ed.current && (
                          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                          </span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-100 leading-tight">{t(ed.schoolKey)}</p>
                        <p className="text-xs text-slate-400 mt-0.5">{t(ed.detailKey)}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] uppercase tracking-widest text-white/60">{t(ed.periodKey)}</span>
                          {ed.current && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300">
                              {t(ed.currentLabelKey)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className={`rounded-2xl ${GLASS_CARD} p-5 md:p-6 relative overflow-hidden`}>
                <h3 className="text-sm uppercase tracking-widest text-white/70 font-semibold mb-4 flex items-center gap-2">
                  <Heart size={14} /> {t("about.interests")}
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {INTERESTS.map((it, i) => {
                    const theme = COLOR_THEME[it.color];
                    return (
                      <motion.div key={it.nameKey}
                        initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                        whileHover={{ y: -2, scale: 1.03 }}
                        className={`interest-shimmer flex items-center gap-2.5 px-3 py-2 rounded-xl ${theme.bg} ${theme.border} border ${theme.soft} hover:text-white transition-colors cursor-default`}
                      >
                        <it.icon size={14} className={`${theme.text} shrink-0`} />
                        <span className="text-xs font-medium leading-tight">{t(it.nameKey)}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────
//  Skills
// ───────────────────────────────────────────────────────────

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="02" icon={Layers} kicker={t("skills.sectionKicker")} title={t("skills.sectionTitle")} />

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger(0.08)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {SKILLS.map((s) => {
            const theme = COLOR_THEME[s.color];
            const cardRef = useRef(null);
            const rotateX = useMotionValue(0);
            const rotateY = useMotionValue(0);

            const handleMouseMove = (e) => {
              const rect = cardRef.current?.getBoundingClientRect();
              if (!rect) return;
              const cx = (e.clientX - rect.left) / rect.width;
              const cy = (e.clientY - rect.top)  / rect.height;
              rotateY.set((cx - 0.5) * 28);
              rotateX.set((0.5 - cy) * 28);
            };
            const handleMouseLeave = () => {
              rotateX.set(0);
              rotateY.set(0);
            };

            return (
              <motion.div key={s.titleKey} ref={cardRef}
                variants={fadeUp} transition={{ duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.01 }}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`group relative rounded-2xl ${GLASS_CARD} p-5 md:p-6 hover:border-white/20 transition-colors overflow-hidden skill-card-inner`}>
                <div className="relative" style={{ transform: "translateZ(24px)" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${theme.bg} ${theme.border} border ${theme.text}`}>
                      <s.icon size={20} />
                    </span>
                    <h3 className={`font-semibold text-base md:text-lg ${theme.text}`}>{t(s.titleKey)}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {s.itemKeys.map((itemKey) => (
                      <motion.span key={itemKey}
                        initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.3 }}
                        className={`px-2.5 py-1 text-xs rounded-md border bg-white/[0.03] backdrop-blur-sm ${theme.border} ${theme.soft}`}
                      >
                        {t(itemKey)}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────
//  Projects
// ───────────────────────────────────────────────────────────

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="03" icon={Layers} kicker={t("projects.sectionKicker")} title={t("projects.sectionTitle")} />

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={stagger(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {PROJECTS.map((p) => <ProjectCard key={p.titleKey} project={p} />)}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { t } = useTranslation();
  const theme = COLOR_THEME[project.color];

  return (
    <motion.article className="group relative">
      <div className="relative p-[1.5px] rounded-2xl overflow-hidden">
        <div aria-hidden className={`absolute inset-0 bg-gradient-to-br ${project.conic} opacity-40 animate-conic-spin`} style={{ filter: "blur(0.5px)" }} />
        <div className={`relative rounded-2xl ${GLASS_CARD} p-5 md:p-6 h-full`}>
          <span aria-hidden className="absolute top-2 right-4 font-mono text-6xl md:text-7xl font-black text-white/[0.05] tracking-tighter select-none pointer-events-none">{project.number}</span>
          <div className="relative">
            <div className="flex items-center justify-between mb-5">
              <motion.div initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.4 }}
              >
                <span className={`inline-flex items-center justify-center w-11 h-11 rounded-lg ${theme.bg} ${theme.border} border ${theme.text}`}>
                  <project.icon size={20} />
                </span>
              </motion.div>
              <span className={`text-[10px] uppercase tracking-widest text-slate-300 ${GLASS_PILL} rounded-full px-2.5 py-1`}>
                {t(project.meta.roleKey)}
              </span>
            </div>

            <h3 className={`text-lg md:text-xl font-bold mb-1 ${theme.text}`}>{t(project.titleKey)}</h3>
            <p className="text-xs md:text-sm text-slate-400 mb-3">{t(project.subtitleKey)}</p>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">{t(project.descriptionKey)}</p>

            <div className="grid grid-cols-3 gap-2 mb-4">
              <MetaStat icon={Briefcase} label={t("projects.meta.impact")}  value={t(project.meta.impactKey)}  theme={theme} />
              <MetaStat icon={Calendar}  label={t("projects.meta.year")}   value={t(project.meta.timelineKey)} theme={theme} />
              <MetaStat icon={Activity} label={t("projects.meta.status")} value={t("projects.meta.completed")} theme={theme} />
            </div>

            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">{t("projects.meta.focus")}</p>
              <ul className="text-xs text-slate-300 space-y-1">
                {project.focusKeys.map((fk) => (
                  <li key={fk} className="flex items-center gap-1.5">
                    <ChevronRight size={12} className={theme.text} />{t(fk)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">{t("projects.meta.techStack")}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tItem) => (
                  <span key={tItem.nameKey}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] border bg-white/[0.03] backdrop-blur-sm ${theme.border} ${theme.soft}`}
                  >
                    <tItem.icon size={11} className={theme.text} />{t(tItem.nameKey)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function MetaStat({ icon: Icon, label, value, theme }) {
  return (
    <div className={`rounded-lg ${theme.bg} border ${theme.border} px-2 py-2`}>
      <Icon size={11} className={`${theme.text} mb-1`} />
      <div className="text-[9px] uppercase tracking-widest text-slate-500">{label}</div>
      <div className="text-[11px] font-semibold text-slate-200 truncate">{value}</div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
//  Experience
// ───────────────────────────────────────────────────────────

function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="04" icon={Briefcase} kicker={t("experience.sectionKicker")} title={t("experience.sectionTitle")} />

        <div className="relative max-w-3xl">
          <div className="absolute left-5 md:left-6 top-2 bottom-2 w-px"
            style={{
              background: "repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 4px, transparent 4px, transparent 10px)",
              backgroundSize: "1px 10px",
              animation: "timeline-flow 1.2s linear infinite",
            }}
          />
          <motion.ol initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger(0.1)}
            className="space-y-6 md:space-y-8"
          >
            {EXPERIENCE.map((e) => {
              const theme = COLOR_THEME[e.color] || COLOR_THEME.cyan;
              return (
                <motion.li key={e.titleKey} variants={fadeUp} transition={{ duration: 0.6 }} className="relative pl-14 md:pl-16">
                  <div className="absolute left-0 top-0">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                      <e.icon size={16} className={`relative ${theme.text}`} />
                    </div>
                  </div>
                  <div className={`relative rounded-2xl ${GLASS_CARD} p-5 md:p-6 overflow-hidden`}>
                    <div className="relative">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className={`font-bold text-lg ${theme.text}`}>{t(e.titleKey)}</h3>
                        <span className={`text-[10px] uppercase tracking-widest ${GLASS_PILL} rounded-full px-2.5 py-1 text-slate-300`}>
                          {t(e.periodKey)}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-400 mb-3">{t(e.roleKey)}</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{t(e.descriptionKey)}</p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────
//  Ripple Button
// ───────────────────────────────────────────────────────────

function RippleButton({ href, children, className = "", external = false, primary = false, ...props }) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top  - size / 2;
    const id = Date.now();
    setRipples(prev => [...prev, { id, x, y, size }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 700);
  };

  return (
    <motion.a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}
      whileHover={{ scale: primary ? 1.05 : 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <AnimatePresence>
        {ripples.map(r => (
          <motion.span key={r.id}
            className="btn-ripple"
            style={{ width: r.size, height: r.size, left: r.x, top: r.y }}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
      {children}
    </motion.a>
  );
}

// ───────────────────────────────────────────────────────────
//  Contact
// ───────────────────────────────────────────────────────────

function Contact() {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t(WHATSAPP_MESSAGE_KEY))}`;

  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="05" icon={Trophy} kicker={t("contact.sectionKicker")} title={t("contact.sectionTitle")} />

        <Reveal>
          <div className="relative">
            <div className={`relative overflow-hidden rounded-3xl ${GLASS_CARD} p-6 sm:p-8 md:p-14`}>
              <CornerBrackets />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm mb-4">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                  </span>
                  {t("contact.status")}
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  {t("contact.headline")}
                </h2>
                <p className="text-slate-300 text-sm md:text-base lg:text-lg max-w-2xl mb-8 leading-relaxed">
                  {t("contact.body")}
                </p>
                <div className="flex flex-wrap gap-3">
                  <RippleButton href={whatsappUrl} primary
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-lg bg-white text-slate-950 hover:bg-slate-200 font-semibold shadow-lg shadow-white/10 transition-colors text-sm md:text-base"
                  >
                    <WhatsAppIcon size={18} /> {t("contact.whatsapp")}
                  </RippleButton>
                  <RippleButton href={EMAIL_URL}
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-lg ${GLASS_PILL} text-white font-semibold hover:bg-white/[0.08] transition-colors text-sm md:text-base`}
                  >
                    <Mail size={18} /> {t("contact.email")}
                  </RippleButton>
                  <RippleButton href="https://www.linkedin.com/in/nandana-fawaz-al-aziz-23b1b3326/"
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-lg ${GLASS_PILL} text-white font-semibold hover:bg-white/[0.08] transition-colors text-sm md:text-base`}
                  >
                    <LinkedInIcon size={18} /> {t("contact.linkedin")}
                  </RippleButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CornerBrackets() {
  const cls = "absolute w-6 h-6 border-white/20 pointer-events-none";
  return (
    <>
      <span className={`${cls} top-3 left-3 border-t-2 border-l-2 rounded-tl-md`} />
      <span className={`${cls} top-3 right-3 border-t-2 border-r-2 rounded-tr-md`} />
      <span className={`${cls} bottom-3 left-3 border-b-2 border-l-2 rounded-bl-md`} />
      <span className={`${cls} bottom-3 right-3 border-b-2 border-r-2 rounded-br-md`} />
    </>
  );
}

// ───────────────────────────────────────────────────────────
//  Footer
// ───────────────────────────────────────────────────────────

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="relative border-t border-white/5 backdrop-blur-md bg-black/30 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
        <p>{t("footer.builtWith")}</p>
      </div>
    </footer>
  );
}

// ───────────────────────────────────────────────────────────
//  App
// ───────────────────────────────────────────────────────────

export default function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen text-white">
      <AmbientLayer />
      <Navbar />
      <main className="relative">
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
