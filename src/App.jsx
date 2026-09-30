import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Wrench,
  Brain,
  Database as DatabaseIcon,
  BarChart3,
  Sparkles,
  Mail,
  Linkedin,
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
} from "lucide-react";

// ───────────────────────────────────────────────────────────
//  WhatsApp
// ───────────────────────────────────────────────────────────

// TODO: Replace with your real WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "6287789082198";
const WHATSAPP_TEXT = encodeURIComponent(
  "Halo Nandana, saya ingin berdiskusi tentang teknologi / kolaborasi proyek."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

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
  name: "Nandana Fawaz Al'Aziz",
  title: "Computer Science Student BINUS University",
  bio: "Mahasiswa Computer Science BINUS University yang tertarik pada AI, Machine Learning, Data Analysis, dan Software Development.",
  focus: ["AI", "Machine Learning", "Data Analysis", "Software Development"],
};

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const ABOUT_PARAGRAPHS = [
  "Halo, saya Nandana Fawaz Al'Aziz — mahasiswa BINUS University yang memiliki minat besar dalam bidang teknologi dan pengembangan software. Saya senang mempelajari hal baru, bekerja secara tim, serta mengembangkan kemampuan dalam pemrograman dan analisis sistem.",
  "Saat ini saya sedang fokus meningkatkan kemampuan di bidang software development, khususnya Java, web development, dan database.",
  "Saya terbuka untuk kesempatan belajar, kolaborasi proyek, internship, dan pengembangan karier di bidang teknologi.",
];

const SKILLS = [
  { title: "Programming", icon: Code2, items: ["Python", "Java", "C", "C++"] },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    items: ["PyTorch", "TensorFlow", "ResNet50", "EfficientNetB0", "CNN", "Image Classification"],
  },
  {
    title: "Data & Analysis",
    icon: BarChart3,
    items: ["EDA", "Data Cleaning", "Classification", "Confusion Matrix", "ROC-AUC", "Statistical Testing"],
  },
  {
    title: "Database",
    icon: DatabaseIcon,
    items: ["MySQL", "SQL", "ERD", "Database Design", "Normalisasi"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Figma", "Git", "Android Studio", "VS Code", "Eclipse"],
  },
];

const PROJECTS = [
  {
    title: "TB Detection",
    subtitle: "Deep Learning for Medical Imaging",
    role: "Data Analyst / ML",
    icon: ScanLine,
    accent: "from-cyan-500/30 to-cyan-500/0",
    description:
      "Sistem deep learning untuk mendeteksi Tuberculosis dari citra X-ray paru secara otomatis menggunakan arsitektur CNN modern.",
    tech: ["CNN", "ResNet50", "EfficientNetB0", "Grad-CAM"],
    focus: ["X-ray image analysis", "Model evaluation"],
  },
  {
    title: "VENUEKITAAJA",
    subtitle: "Venue & Event Organizer Discovery",
    role: "UI/UX Designer",
    icon: Smartphone,
    accent: "from-violet-500/30 to-violet-500/0",
    description:
      "Aplikasi mobile untuk menemukan venue dan event organizer terdekat dengan tampilan antarmuka yang intuitif.",
    tech: ["Figma", "Mobile UI", "Design System"],
    focus: ["Home", "Explore", "Activity", "Profile"],
  },
  {
    title: "AI Toxicity Detection",
    subtitle: "Implicit Toxicity in Social Media",
    role: "Research & Data Analysis",
    icon: MessageSquareWarning,
    accent: "from-rose-500/30 to-rose-500/0",
    description:
      "Riset deteksi toksisitas implisit pada media sosial menggunakan pendekatan NLP dan Large Language Model.",
    tech: ["NLP", "LLM", "Contextual Augmentation"],
    focus: ["Implicit toxicity", "Social media analysis"],
  },
];

const EXPERIENCE = [
  {
    title: "Program EESE",
    role: "Anti-bullying Education Volunteer",
    description:
      "Mengedukasi siswa SMP tentang bahaya perundungan dan membangun lingkungan belajar yang aman dan positif.",
    icon: Heart,
  },
];

const EDUCATION = [
  {
    school: "BINUS University",
    detail: "Computer Science — Ongoing",
    period: "Present",
    icon: GraduationCap,
  },
  {
    school: "SMAN 12 Tangerang Selatan",
    detail: "Sekolah Menengah Atas",
    period: "Senior High School",
    icon: GraduationCap,
  },
];

const INTERESTS = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "NLP",
  "LLM",
  "Data Analysis",
  "Software Engineering",
];

// ───────────────────────────────────────────────────────────
//  Glass design tokens
// ───────────────────────────────────────────────────────────

const GLASS_CARD =
  "bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]";
const GLASS_ICON =
  "bg-white/[0.05] backdrop-blur-md border border-white/10";
const GLASS_PILL =
  "bg-white/[0.05] backdrop-blur-md border border-white/10";
const GLASS_BTN_SECONDARY =
  "bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white";

// ───────────────────────────────────────────────────────────
//  Motion helpers
// ───────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

function Reveal({ children, className = "", delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ icon: Icon, title, kicker }) {
  return (
    <Reveal>
      <div className="mb-12">
        {kicker && (
          <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            {kicker}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
          {Icon && (
            <span
              className={`inline-flex items-center justify-center w-11 h-11 rounded-lg ${GLASS_ICON} text-accent`}
            >
              <Icon size={22} />
            </span>
          )}
          <span>{title}</span>
        </h2>
      </div>
    </Reveal>
  );
}

// ───────────────────────────────────────────────────────────
//  Global ambient background — single fixed layer so blobs
//  blend continuously across sections instead of being cut at
//  each section boundary (the "patah-patah" effect).
// ───────────────────────────────────────────────────────────

function AmbientLayer() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Cyan glows */}
      <div
        className="absolute -top-40 -left-40 w-[44rem] h-[44rem] bg-accent/25 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "12s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-accent/12 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "15s" }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[44rem] h-[44rem] bg-accent/22 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      {/* Violet glows */}
      <div
        className="absolute -top-20 -right-40 w-[36rem] h-[36rem] bg-violet-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "13s" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-violet-500/12 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "9s" }}
      />
      <div
        className="absolute bottom-1/4 -left-32 w-[36rem] h-[36rem] bg-violet-500/18 rounded-full blur-3xl animate-pulse"
        style={{ animationDuration: "14s" }}
      />
    </div>
  );
}

// ───────────────────────────────────────────────────────────
//  Components
// ───────────────────────────────────────────────────────────

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl backdrop-saturate-150 bg-slate-950/40 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg tracking-tight">
          <span className="text-white">Nandana</span>
          <span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-accent transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          Let's talk <WhatsAppIcon size={16} />
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger(0.1)}
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${GLASS_PILL} text-sm text-slate-300 mb-6`}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Welcome to my portfolio
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            style={{ animation: "float 6s ease-in-out infinite" }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-4 text-lg md:text-xl text-slate-300 font-medium"
          >
            {PROFILE.title}
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-6 text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            {PROFILE.bio}
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {PROFILE.focus.map((f) => (
              <span
                key={f}
                className={`px-3 py-1.5 text-xs sm:text-sm rounded-full ${GLASS_PILL} text-slate-200`}
              >
                {f}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-slate-950 font-semibold shadow-lg shadow-accent/30 transition-colors"
            >
              View projects <ArrowDown size={18} />
            </motion.a>
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${GLASS_BTN_SECONDARY} font-semibold transition-colors`}
            >
              <WhatsAppIcon size={18} /> Contact me
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Sparkles} kicker="About me" title="Get to know me" />

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <Reveal className="md:col-span-2 space-y-5 text-slate-300 leading-relaxed text-base md:text-lg">
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-1">
            <div className={`rounded-2xl ${GLASS_CARD} p-6`}>
              <h3 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4">
                Quick facts
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 text-accent shrink-0" />
                  <span>Based in Indonesia</span>
                </li>
                <li className="flex items-start gap-3">
                  <GraduationCap size={16} className="mt-1 text-accent shrink-0" />
                  <span>CS — BINUS University</span>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu size={16} className="mt-1 text-accent shrink-0" />
                  <span>AI / ML & Software Engineering</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight size={16} className="mt-1 text-accent shrink-0" />
                  <span>Open to internships & collaborations</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Layers} kicker="Skills" title="What I work with" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger(0.08)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILLS.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group rounded-2xl ${GLASS_CARD} p-6 hover:border-accent/40 transition-colors`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${GLASS_ICON} text-accent group-hover:bg-accent group-hover:text-slate-950 group-hover:border-accent transition-colors`}
                >
                  <s.icon size={20} />
                </span>
                <h3 className="font-semibold text-lg">{s.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className={`px-2.5 py-1 text-xs rounded-md ${GLASS_PILL} text-slate-300`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Layers} kicker="Projects" title="Selected work" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative overflow-hidden rounded-2xl ${GLASS_CARD} p-6 hover:border-accent/40 transition-colors group`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60 pointer-events-none`}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-lg ${GLASS_ICON} text-accent group-hover:bg-accent group-hover:text-slate-950 group-hover:border-accent transition-colors`}
                  >
                    <p.icon size={20} />
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-widest text-slate-300 ${GLASS_PILL} rounded-full px-2.5 py-1`}
                  >
                    {p.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{p.subtitle}</p>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="mb-4">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                    Tech
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 text-[11px] rounded ${GLASS_PILL} text-slate-300`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                    Focus
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {p.focus.map((f) => (
                      <li key={f} className="flex items-center gap-1.5">
                        <ChevronRight size={12} className="text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Briefcase} kicker="Experience" title="Beyond the code" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {EXPERIENCE.map((e) => (
            <motion.div
              key={e.title}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`rounded-2xl ${GLASS_CARD} p-6 hover:border-accent/40 transition-colors`}
            >
              <span
                className={`inline-flex items-center justify-center w-11 h-11 rounded-lg ${GLASS_ICON} text-accent mb-5`}
              >
                <e.icon size={20} />
              </span>
              <h3 className="font-bold text-lg mb-1">{e.title}</h3>
              <p className="text-sm text-slate-400 mb-3">{e.role}</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {e.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={GraduationCap} kicker="Education" title="Academic journey" />

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/20 to-white/10" />
          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(0.12)}
            className="space-y-10"
          >
            {EDUCATION.map((ed, i) => (
              <motion.li
                key={ed.school}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                  i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div
                  className={`pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-slate-950 shadow-[0_0_0_2px_rgba(6,182,212,0.4)]" />
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${GLASS_ICON} text-accent mb-3`}
                  >
                    <ed.icon size={18} />
                  </div>
                  <h3 className="text-lg font-bold">{ed.school}</h3>
                  <p className="text-slate-400 text-sm">{ed.detail}</p>
                  <p className="text-xs text-accent mt-1 inline-flex items-center gap-1">
                    <Calendar size={12} /> {ed.period}
                  </p>
                </div>
                <div className="hidden md:block" />
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

function Interests() {
  return (
    <section id="interests" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle icon={Heart} kicker="Interests" title="What excites me" />

        <Reveal>
          <div className="flex flex-wrap gap-3">
            {INTERESTS.map((i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full ${GLASS_PILL} text-slate-200 text-sm hover:border-accent/60 hover:text-accent transition-colors cursor-default`}
              >
                {i}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className={`relative overflow-hidden rounded-3xl ${GLASS_CARD} p-8 md:p-14`}
          >
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                Contact
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
                Let's Connect
              </h2>
              <p className="text-slate-300 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
                Saya terbuka untuk diskusi tentang teknologi, kolaborasi proyek,
                atau peluang internship. Cara tercepat untuk menghubungi saya
                adalah lewat WhatsApp.
              </p>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold shadow-lg shadow-[#25D366]/30 transition-colors"
                >
                  <WhatsAppIcon size={18} /> Chat on WhatsApp
                </motion.a>
                <motion.a
                  href="mailto:nandana@example.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg ${GLASS_BTN_SECONDARY} font-semibold transition-colors`}
                >
                  <Mail size={18} /> Email
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/nandana-fawaz-al-aziz-23b1b3326/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg ${GLASS_BTN_SECONDARY} font-semibold transition-colors`}
                >
                  <LinkedInIcon size={18} /> LinkedIn
                </motion.a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 backdrop-blur-md bg-slate-950/30 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          Built with{" "}
          <span className="text-accent">React</span> +{" "}
          <span className="text-accent">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}

// ───────────────────────────────────────────────────────────
//  App
// ───────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <AmbientLayer />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}