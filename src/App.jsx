import { useEffect, useRef, useState } from "react";
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
} from "lucide-react";

// ───────────────────────────────────────────────────────────
//  WhatsApp
// ───────────────────────────────────────────────────────────

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
  initials: "NF",
  // To use your own photo instead of the initials avatar, set this to your image URL or local path.
  // Examples:
  //   avatar: "/avatar.jpg"
  //   avatar: "https://i.imgur.com/xxxxx.jpg"
  // Leave as null to keep the gradient initials avatar.
  avatar: null,
  title: "3rd-year CS Student - BINUS University",
  bio: "Mahasiswa tahun ke-3 Computer Science BINUS University yang tertarik pada AI, Machine Learning, Data Analysis, dan Software Development.",
};

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const ABOUT_PARAGRAPHS = [
  "Halo, saya Nandana Fawaz Al'Aziz mahasiswa BINUS University yang memiliki minat besar dalam bidang teknologi dan pengembangan software. Saya senang mempelajari hal baru, bekerja secara tim, serta mengembangkan kemampuan dalam pemrograman dan analisis sistem.",
  "Saat ini saya sedang fokus meningkatkan kemampuan di bidang software development, khususnya Java, web development, dan database.",
  "Saya terbuka untuk kesempatan belajar, kolaborasi proyek, internship, dan pengembangan karier di bidang teknologi.",
];

const QUICK_FACTS = [
  { icon: MapPin, text: "Based in Indonesia" },
  { icon: GraduationCap, text: "CS At BINUS University" },
  { icon: Cpu, text: "Software Engineering" },
  { icon: Activity, text: "Currently studying", highlight: true },
];

const EDUCATION = [
  {
    school: "BINUS University",
    detail: "Computer Science",
    period: "Present",
    icon: GraduationCap,
    current: true,
  },
  {
    school: "SMAN 12 Tangerang Selatan",
    detail: "Sekolah Menengah Atas",
    period: "Senior High School",
    icon: GraduationCap,
    current: false,
  },
];

const INTERESTS = [
  { name: "AI", icon: Brain, color: "violet" },
  { name: "Machine Learning", icon: Cpu, color: "cyan" },
  { name: "Computer Vision", icon: Eye, color: "rose" },
  { name: "LLM", icon: Sparkle, color: "emerald" },
  { name: "Data Analysis", icon: BarChart3, color: "cyan" },
  { name: "Software Engineering", icon: Code, color: "violet" },
];

const SKILLS = [
  {
    title: "Programming",
    icon: Code2,
    color: "cyan",
    items: ["Python", "Java", "C", "C++"],
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    color: "violet",
    items: ["PyTorch", "TensorFlow", "ResNet50", "EfficientNetB0", "CNN", "Image Classification"],
  },
  {
    title: "Data & Analysis",
    icon: BarChart3,
    color: "rose",
    items: ["EDA", "Data Cleaning", "Classification", "Confusion Matrix", "ROC-AUC", "Statistical Testing"],
  },
  {
    title: "Database",
    icon: DatabaseIcon,
    color: "emerald",
    items: ["MySQL", "SQL", "ERD", "Database Design", "Normalisasi"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "amber",
    items: ["Figma", "Git", "Android Studio", "VS Code", "Eclipse"],
  },
];

const COLOR_THEME = {
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-500/15",
    border: "border-cyan-400/30",
    ring: "ring-cyan-400/40",
    glow: "bg-cyan-500/30",
    soft: "text-cyan-200/70",
  },
  violet: {
    text: "text-violet-300",
    bg: "bg-violet-500/15",
    border: "border-violet-400/30",
    ring: "ring-violet-400/40",
    glow: "bg-violet-500/30",
    soft: "text-violet-200/70",
  },
  rose: {
    text: "text-rose-300",
    bg: "bg-rose-500/15",
    border: "border-rose-400/30",
    ring: "ring-rose-400/40",
    glow: "bg-rose-500/30",
    soft: "text-rose-200/70",
  },
  emerald: {
    text: "text-emerald-300",
    bg: "bg-emerald-500/15",
    border: "border-emerald-400/30",
    ring: "ring-emerald-400/40",
    glow: "bg-emerald-500/30",
    soft: "text-emerald-200/70",
  },
  amber: {
    text: "text-amber-300",
    bg: "bg-amber-500/15",
    border: "border-amber-400/30",
    ring: "ring-amber-400/40",
    glow: "bg-amber-500/30",
    soft: "text-amber-200/70",
  },
};

const PROJECTS = [
  {
    number: "01",
    title: "TB Detection",
    subtitle: "Deep Learning for Medical Imaging",
    icon: ScanLine,
    color: "cyan",
    conic: "from-cyan-400 via-violet-500 to-rose-500",
    description:
      "Sistem deep learning untuk mendeteksi Tuberculosis dari citra X-ray paru secara otomatis menggunakan arsitektur CNN modern dengan evaluasi model komprehensif.",
    meta: {
      role: "Data Analyst / ML",
      impact: "Medical Imaging",
      timeline: "2024",
    },
    tech: [
      { name: "CNN", icon: Brain },
      { name: "ResNet50", icon: Layers },
      { name: "EfficientNetB0", icon: Cpu },
      { name: "Grad-CAM", icon: ScanLine },
    ],
    focus: ["X-ray image analysis", "Model evaluation"],
  },
  {
    number: "02",
    title: "VENUEKITAAJA",
    subtitle: "Venue & Event Organizer Discovery",
    icon: Smartphone,
    color: "violet",
    conic: "from-violet-400 via-cyan-500 to-emerald-500",
    description:
      "Aplikasi mobile untuk menemukan venue dan event organizer terdekat dengan tampilan antarmuka yang intuitif dan sistem rekomendasi personal.",
    meta: {
      role: "UI/UX Designer",
      impact: "Mobile App",
      timeline: "2024",
    },
    tech: [
      { name: "Figma", icon: Layers },
      { name: "Mobile UI", icon: Smartphone },
      { name: "Design System", icon: Sparkles },
    ],
    focus: ["Home", "Explore", "Activity", "Profile"],
  },
  {
    number: "03",
    title: "AI Toxicity Detection",
    subtitle: "Implicit Toxicity in Social Media",
    icon: MessageSquareWarning,
    color: "rose",
    conic: "from-rose-400 via-amber-500 to-cyan-500",
    description:
      "Riset deteksi toksisitas implisit pada media sosial menggunakan pendekatan NLP dan Large Language Model dengan contextual augmentation.",
    meta: {
      role: "Researcher",
      impact: "NLP Research",
      timeline: "2025",
    },
    tech: [
      { name: "NLP", icon: MessagesSquare },
      { name: "LLM", icon: Sparkle },
      { name: "Contextual Aug.", icon: Layers },
    ],
    focus: ["Implicit toxicity", "Social media analysis"],
  },
];

const EXPERIENCE = [
  {
    title: "Program EESE",
    role: "Anti-bullying Education Volunteer",
    period: "2024",
    description:
      "Mengedukasi siswa SMP tentang bahaya perundungan dan membangun lingkungan belajar yang aman dan positif melalui sesi interaktif.",
    icon: Heart,
    color: "rose",
  },
];

const STATS = [
  { target: 3, suffix: "+", label: "Projects", color: "cyan" },
  { target: 25, suffix: "+", label: "Skills", color: "violet" },
  { target: 5, suffix: "", label: "Tech Areas", color: "rose" },
  { target: 2028, suffix: "", label: "Graduating", color: "emerald" },
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

// ───────────────────────────────────────────────────────────
//  Motion helpers
// ───────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = (delay = 0.08) => ({
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

function SectionHeading({ number, icon: Icon, title, kicker }) {
  return (
    <Reveal>
      <div className="mb-10 md:mb-14 relative">
        <span
          aria-hidden
          className="absolute -top-4 left-0 font-mono text-7xl md:text-8xl font-black text-white/[0.04] tracking-tighter select-none pointer-events-none"
        >
          {number}
        </span>
        {kicker && (
          <p className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
            {kicker}
          </p>
        )}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold flex items-center gap-3 relative">
          {Icon && (
            <span
              className={`inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg ${GLASS_ICON} text-accent`}
            >
              <Icon size={20} />
            </span>
          )}
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      </div>
    </Reveal>
  );
}

// ───────────────────────────────────────────────────────────
//  Global ambient background
// ───────────────────────────────────────────────────────────

function AmbientLayer() {
  const starField = {
    backgroundImage: [
      "radial-gradient(1.5px 1.5px at 12% 18%, rgba(255,255,255,0.75), transparent 60%)",
      "radial-gradient(1px 1px at 25% 35%, rgba(6,182,212,0.75), transparent 60%)",
      "radial-gradient(2px 2px at 40% 22%, rgba(255,255,255,0.55), transparent 60%)",
      "radial-gradient(1px 1px at 55% 45%, rgba(139,92,246,0.7), transparent 60%)",
      "radial-gradient(1.5px 1.5px at 68% 38%, rgba(255,255,255,0.65), transparent 60%)",
      "radial-gradient(1px 1px at 82% 15%, rgba(6,182,212,0.6), transparent 60%)",
      "radial-gradient(2px 2px at 18% 55%, rgba(255,255,255,0.5), transparent 60%)",
      "radial-gradient(1.5px 1.5px at 35% 65%, rgba(139,92,246,0.7), transparent 60%)",
      "radial-gradient(1px 1px at 50% 75%, rgba(255,255,255,0.7), transparent 60%)",
      "radial-gradient(1.5px 1.5px at 70% 60%, rgba(6,182,212,0.55), transparent 60%)",
      "radial-gradient(1px 1px at 88% 50%, rgba(255,255,255,0.6), transparent 60%)",
      "radial-gradient(2px 2px at 10% 75%, rgba(139,92,246,0.55), transparent 60%)",
      "radial-gradient(1px 1px at 30% 85%, rgba(255,255,255,0.7), transparent 60%)",
      "radial-gradient(1.5px 1.5px at 60% 90%, rgba(6,182,212,0.6), transparent 60%)",
      "radial-gradient(1px 1px at 78% 80%, rgba(255,255,255,0.55), transparent 60%)",
      "radial-gradient(1.5px 1.5px at 45% 50%, rgba(139,92,246,0.45), transparent 60%)",
      "radial-gradient(1px 1px at 8% 40%, rgba(255,255,255,0.5), transparent 60%)",
      "radial-gradient(1px 1px at 92% 70%, rgba(6,182,212,0.5), transparent 60%)",
      "radial-gradient(1px 1px at 65% 8%, rgba(244,114,182,0.55), transparent 60%)",
      "radial-gradient(1.5px 1.5px at 22% 62%, rgba(251,191,36,0.5), transparent 60%)",
      "radial-gradient(1px 1px at 80% 42%, rgba(52,211,153,0.5), transparent 60%)",
      "radial-gradient(1.5px 1.5px at 48% 8%, rgba(255,255,255,0.6), transparent 60%)",
      "radial-gradient(1px 1px at 5% 95%, rgba(244,114,182,0.45), transparent 60%)",
      "radial-gradient(1px 1px at 95% 30%, rgba(251,191,36,0.45), transparent 60%)",
    ].join(", "),
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-20 overflow-hidden pointer-events-none"
      >
        <div className="absolute top-[18%] left-[-20%] w-[140%] h-40 bg-gradient-to-r from-transparent via-accent/12 to-transparent rotate-[-8deg] blur-2xl animate-pulse" style={{ animationDuration: "18s" }} />
        <div className="absolute top-[55%] left-[-20%] w-[140%] h-32 bg-gradient-to-r from-transparent via-violet-500/14 to-transparent rotate-[6deg] blur-2xl animate-pulse" style={{ animationDuration: "22s" }} />
        <div className="absolute top-[80%] left-[-20%] w-[140%] h-28 bg-gradient-to-r from-transparent via-rose-500/8 to-transparent rotate-[-4deg] blur-2xl animate-pulse" style={{ animationDuration: "26s" }} />
        <div className="absolute top-[35%] left-[-10%] w-[120%] h-24 bg-gradient-to-r from-transparent via-amber-500/8 to-transparent rotate-[3deg] blur-2xl animate-pulse" style={{ animationDuration: "24s" }} />

        <div className="absolute top-0 left-[18%] w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" style={{ animation: "beam-shimmer 6s ease-in-out infinite" }} />
        <div className="absolute top-0 right-[28%] w-px h-full bg-gradient-to-b from-transparent via-violet-400/25 to-transparent" style={{ animation: "beam-shimmer 9s ease-in-out infinite 1.5s" }} />
        <div className="absolute top-0 left-[62%] w-px h-full bg-gradient-to-b from-transparent via-rose-400/20 to-transparent" style={{ animation: "beam-shimmer 7s ease-in-out infinite 3s" }} />

        <div className="absolute top-[14%] right-[6%] w-36 h-36 rounded-full border border-accent/15 animate-spin-slow" />
        <div className="absolute top-[12%] right-[8%] w-20 h-20 rounded-full border border-accent/25" style={{ animation: "spin-slow 30s linear infinite reverse" }} />
        <div className="absolute bottom-[18%] left-[4%] w-28 h-28 rounded-full border border-violet-500/20" style={{ animation: "spin-slow 55s linear infinite" }} />
        <div className="absolute top-[42%] left-[8%] w-24 h-24 border border-cyan-400/15 rotate-45" style={{ animation: "spin-slow 40s linear infinite" }} />
        <div className="absolute top-[68%] right-[10%] w-20 h-20 border border-violet-400/15 rotate-12" style={{ animation: "spin-slow 35s linear infinite reverse" }} />
        <div className="absolute top-[8%] left-[25%] w-16 h-16 border border-amber-400/20 rotate-45" style={{ animation: "spin-slow 50s linear infinite" }} />
        <div className="absolute bottom-[10%] right-[25%] w-12 h-12 rounded-full border-2 border-dashed border-emerald-400/30" style={{ animation: "spin-slow 45s linear infinite reverse" }} />

        <svg className="absolute top-[20%] right-[40%] opacity-25" style={{ animation: "spin-slow 60s linear infinite" }} width="60" height="60" viewBox="0 0 60 60" fill="none">
          <polygon points="30,4 54,17 54,43 30,56 6,43 6,17" stroke="#06b6d4" strokeWidth="1.5" />
        </svg>
        <svg className="absolute bottom-[28%] left-[15%] opacity-20" style={{ animation: "spin-slow 70s linear infinite reverse" }} width="50" height="50" viewBox="0 0 50 50" fill="none">
          <polygon points="25,3 46,14 46,36 25,47 4,36 4,14" stroke="#8b5cf6" strokeWidth="1.5" />
        </svg>

        <div className="absolute top-[55%] right-[42%] w-5 h-5 opacity-40">
          <div className="absolute top-1/2 left-0 w-full h-px bg-rose-400 -translate-y-1/2" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-rose-400 -translate-x-1/2" />
        </div>
        <div className="absolute top-[30%] left-[45%] w-3 h-3 opacity-30">
          <div className="absolute top-1/2 left-0 w-full h-px bg-emerald-400 -translate-y-1/2" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-emerald-400 -translate-x-1/2" />
        </div>

        <div className="absolute -top-40 -left-40 w-[44rem] h-[44rem] bg-accent/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-accent/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "15s" }} />
        <div className="absolute -bottom-40 -right-40 w-[44rem] h-[44rem] bg-accent/22 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute -top-20 -right-40 w-[36rem] h-[36rem] bg-violet-500/22 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "13s" }} />
        <div className="absolute top-1/3 left-1/4 w-[28rem] h-[28rem] bg-violet-500/14 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "9s" }} />
        <div className="absolute bottom-1/4 -left-32 w-[36rem] h-[36rem] bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "14s" }} />
        <div className="absolute top-[40%] right-[20%] w-[24rem] h-[24rem] bg-rose-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "16s" }} />
        <div className="absolute top-[8%] left-[50%] w-[28rem] h-[28rem] bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "17s" }} />
        <div className="absolute bottom-[5%] left-[40%] w-[32rem] h-[32rem] bg-emerald-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "19s" }} />
        <div className="absolute top-[60%] left-[5%] w-[26rem] h-[26rem] bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "20s" }} />

        <div className="absolute top-[25%] left-[20%] w-32 h-32 rounded-full bg-cyan-400/20 blur-2xl" style={{ animation: "drift 22s ease-in-out infinite" }} />
        <div className="absolute top-[70%] right-[15%] w-40 h-40 rounded-full bg-violet-400/18 blur-2xl" style={{ animation: "drift-reverse 28s ease-in-out infinite" }} />
        <div className="absolute bottom-[30%] left-[55%] w-28 h-28 rounded-full bg-rose-400/20 blur-2xl" style={{ animation: "drift-y 24s ease-in-out infinite" }} />
        <div className="absolute top-[45%] right-[35%] w-24 h-24 rounded-full bg-emerald-400/15 blur-2xl" style={{ animation: "drift-y-reverse 26s ease-in-out infinite" }} />

        <div className="absolute inset-0 animate-pulse" style={starField} />
      </div>

      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 pointer-events-none bg-noise mix-blend-overlay"
      />
    </>
  );
}

// ───────────────────────────────────────────────────────────
//  Navbar
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
          <span className="text-white">Welcome</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-slate-300">
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

// ───────────────────────────────────────────────────────────
//  Hero
// ───────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none" />

      {[
        { sym: "</>", top: "15%", left: "8%", rot: -12, size: 18 },
        { sym: "{ }", top: "70%", left: "12%", rot: 8, size: 20 },
        { sym: "01", top: "25%", right: "14%", rot: 6, size: 22 },
        { sym: ";", top: "60%", right: "8%", rot: -8, size: 26 },
        { sym: "< />", top: "80%", right: "20%", rot: 12, size: 18 },
      ].map((s, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute font-mono text-cyan-300/15 select-none pointer-events-none animate-float-soft"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            fontSize: s.size,
            "--rot": `${s.rot}deg`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${5 + i}s`,
          }}
        >
          {s.sym}
        </span>
      ))}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger(0.1)}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${GLASS_PILL} text-sm text-slate-300 mb-6`}
            >
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              style={{ animation: "float 6s ease-in-out infinite" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-rose-300 bg-clip-text text-transparent animate-gradient">
                {PROFILE.name}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 font-medium"
            >
              {PROFILE.title}
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-6 text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed"
            >
              {PROFILE.bio}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="mt-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-3 pl-7 pr-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400 text-slate-950 font-bold shadow-xl shadow-cyan-500/40 hover:shadow-cyan-400/60 transition-shadow overflow-hidden"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
                <span className="relative">View projects</span>
                <span
                  className="relative flex items-center"
                  style={{ animation: "arrow-bounce 1.6s ease-in-out infinite" }}
                >
                  <ArrowDown size={18} strokeWidth={2.5} />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex relative w-72 h-72 items-center justify-center mx-auto"
          >
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/30 animate-spin-slow" />
            <div
              className="absolute inset-3 rounded-full border border-violet-400/20"
              style={{ animation: "spin-slow 25s linear infinite reverse" }}
            />
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500 via-violet-500 to-rose-500 shadow-[0_0_60px_rgba(6,182,212,0.4)]">
              {PROFILE.avatar ? (
                <img
                  src={PROFILE.avatar}
                  alt={PROFILE.name}
                  className="absolute inset-1 rounded-full object-cover w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)]"
                />
              ) : (
                <div className="absolute inset-1 rounded-full bg-slate-950 flex items-center justify-center">
                  <span className="text-6xl font-extrabold bg-gradient-to-br from-cyan-300 via-violet-300 to-rose-300 bg-clip-text text-transparent">
                    {PROFILE.initials}
                  </span>
                </div>
              )}
            </div>
            {[
              { icon: Code2, angle: 0, color: "text-cyan-300", bg: "bg-cyan-500/20 border-cyan-400/40" },
              { icon: Brain, angle: 90, color: "text-violet-300", bg: "bg-violet-500/20 border-violet-400/40" },
              { icon: BarChart3, angle: 180, color: "text-rose-300", bg: "bg-rose-500/20 border-rose-400/40" },
              { icon: DatabaseIcon, angle: 270, color: "text-emerald-300", bg: "bg-emerald-500/20 border-emerald-400/40" },
            ].map((o, i) => {
              const rad = (o.angle * Math.PI) / 180;
              const r = 130;
              const x = Math.cos(rad) * r;
              const y = Math.sin(rad) * r;
              const Icon = o.icon;
              return (
                <div
                  key={i}
                  className={`absolute w-10 h-10 rounded-full ${o.bg} border backdrop-blur-md flex items-center justify-center ${o.color}`}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    animation: `spin-slow ${20 + i * 4}s linear infinite ${i % 2 ? "reverse" : ""}`,
                  }}
                >
                  <div
                    style={{
                      animation: `spin-slow ${20 + i * 4}s linear infinite ${i % 2 ? "" : "reverse"}`,
                    }}
                  >
                    <Icon size={18} />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
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

// ───────────────────────────────────────────────────────────
//  Stats Bar
// ───────────────────────────────────────────────────────────

function StatsBar() {
  return (
    <section className="relative py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className={`rounded-2xl ${GLASS_CARD} p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4`}>
            {STATS.map((s) => (
              <StatItem key={s.label} target={s.target} suffix={s.suffix} label={s.label} color={s.color} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatItem({ target, suffix, label, color }) {
  const [ref, value] = useCounter(target);
  const theme = COLOR_THEME[color];
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className={`text-3xl md:text-4xl font-extrabold ${theme.text} tabular-nums`}>
        {value}
        <span className="text-xl">{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">{label}</div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────
//  About (expanded: bio | education + interests)
// ───────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="01" icon={Sparkles} kicker="About me" title="Get to know me" />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          {/* Left: bio + quick facts */}
          <div className="lg:col-span-3 space-y-5">
            <Reveal className="space-y-5">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${GLASS_PILL} text-sm text-slate-300`}>
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                Open to internship · Based in Indonesia
              </div>
              {ABOUT_PARAGRAPHS.map((p, i) => (
                <p key={i} className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <div className={`rounded-2xl ${GLASS_CARD} p-5 md:p-6 relative overflow-hidden`}>
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl bg-cyan-500/20 pointer-events-none" />
                <h3 className="text-sm uppercase tracking-widest text-accent font-semibold mb-4 flex items-center gap-2">
                  <Zap size={14} /> Quick facts
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                  {QUICK_FACTS.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <f.icon
                        size={16}
                        className={`mt-0.5 shrink-0 ${f.highlight ? "text-emerald-400 animate-pulse" : "text-accent"}`}
                      />
                      <span className={f.highlight ? "text-emerald-300" : ""}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: education + interests */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education */}
            <Reveal delay={0.05}>
              <div className={`rounded-2xl ${GLASS_CARD} p-5 md:p-6 relative overflow-hidden`}>
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl bg-violet-500/20 pointer-events-none" />
                <h3 className="text-sm uppercase tracking-widest text-violet-300 font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap size={14} /> Education
                </h3>
                <div className="space-y-4">
                  {EDUCATION.map((ed, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="relative shrink-0 mt-1">
                        <div className="relative w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-400/30 flex items-center justify-center text-violet-300">
                          <ed.icon size={16} />
                        </div>
                        {ed.current && (
                          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                            <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          </span>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-100 leading-tight">
                          {ed.school}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">{ed.detail}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[10px] uppercase tracking-widest text-violet-300/80">
                            {ed.period}
                          </span>
                          {ed.current && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300">
                              Now
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Interests icon grid */}
            <Reveal delay={0.15}>
              <div className={`rounded-2xl ${GLASS_CARD} p-5 md:p-6 relative overflow-hidden`}>
                <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full blur-3xl bg-rose-500/20 pointer-events-none" />
                <h3 className="text-sm uppercase tracking-widest text-rose-300 font-semibold mb-4 flex items-center gap-2">
                  <Heart size={14} /> Areas of Interest
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {INTERESTS.map((it, i) => {
                    const theme = COLOR_THEME[it.color];
                    return (
                      <motion.div
                        key={it.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.04 }}
                        whileHover={{ y: -2, scale: 1.03 }}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl ${theme.bg} ${theme.border} border ${theme.soft} hover:${theme.text} transition-colors cursor-default`}
                      >
                        <it.icon size={14} className={`${theme.text} shrink-0`} />
                        <span className="text-xs font-medium leading-tight">{it.name}</span>
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
//  Skills (with animated progress bars)
// ───────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="02" icon={Layers} kicker="Skills" title="What I work with" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger(0.08)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {SKILLS.map((s) => {
            const theme = COLOR_THEME[s.color];
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`group relative rounded-2xl ${GLASS_CARD} p-5 md:p-6 hover:border-white/20 transition-colors overflow-hidden`}
              >
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl ${theme.glow} opacity-40 pointer-events-none`} />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="relative"
                    >
                      <div className={`absolute inset-0 rounded-lg blur-md ${theme.glow} opacity-60`} />
                      <span
                        className={`relative inline-flex items-center justify-center w-10 h-10 rounded-lg ${theme.bg} ${theme.border} border ${theme.text}`}
                      >
                        <s.icon size={20} />
                      </span>
                    </motion.div>
                    <h3 className={`font-semibold text-base md:text-lg ${theme.text}`}>
                      {s.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.3 }}
                        className={`px-2.5 py-1 text-xs rounded-md border bg-white/[0.03] backdrop-blur-sm ${theme.border} ${theme.soft}`}
                      >
                        {item}
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
//  Projects (icon badges + meta stats)
// ───────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="03" icon={Layers} kicker="Projects" title="Selected work" />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const theme = COLOR_THEME[project.color];
  return (
    <motion.article className="group relative">
      <div className="relative p-[1.5px] rounded-2xl overflow-hidden">
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br ${project.conic} opacity-50 animate-conic-spin`}
          style={{ filter: "blur(0.5px)" }}
        />
        <div className={`relative rounded-2xl ${GLASS_CARD} p-5 md:p-6 h-full`}>
          <span
            aria-hidden
            className="absolute top-2 right-4 font-mono text-6xl md:text-7xl font-black text-white/[0.05] tracking-tighter select-none pointer-events-none"
          >
            {project.number}
          </span>

          <div className="relative">
            <div className="flex items-center justify-between mb-5">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <div className={`absolute inset-0 rounded-lg blur-md ${theme.glow} opacity-40`} />
                <span
                  className={`relative inline-flex items-center justify-center w-11 h-11 rounded-lg ${theme.bg} ${theme.border} border ${theme.text}`}
                >
                  <project.icon size={20} />
                </span>
              </motion.div>
              <span
                className={`text-[10px] uppercase tracking-widest text-slate-300 ${GLASS_PILL} rounded-full px-2.5 py-1`}
              >
                {project.meta.role}
              </span>
            </div>

            <h3 className={`text-lg md:text-xl font-bold mb-1 ${theme.text}`}>{project.title}</h3>
            <p className="text-xs md:text-sm text-slate-400 mb-3">{project.subtitle}</p>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Meta stats grid */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <MetaStat icon={Briefcase} label="Impact" value={project.meta.impact} theme={theme} />
              <MetaStat icon={Calendar} label="Year" value={project.meta.timeline} theme={theme} />
              <MetaStat icon={Activity} label="Status" value="Completed" theme={theme} />
            </div>

            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                Focus
              </p>
              <ul className="text-xs text-slate-300 space-y-1">
                {project.focus.map((f) => (
                  <li key={f} className="flex items-center gap-1.5">
                    <ChevronRight size={12} className={theme.text} />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech icon badges */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t.name}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] border bg-white/[0.03] backdrop-blur-sm ${theme.border} ${theme.soft}`}
                  >
                    <t.icon size={11} className={theme.text} />
                    {t.name}
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
//  Experience (timeline with icons in dots + pulse)
// ───────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="04" icon={Briefcase} kicker="Experience" title="Beyond the code" />

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(0.1)}
            className="space-y-6 md:space-y-8"
          >
            {EXPERIENCE.map((e) => {
              const theme = COLOR_THEME[e.color] || COLOR_THEME.cyan;
              return (
                <motion.li
                  key={e.title}
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  className="relative pl-14 md:pl-16"
                >
                  {/* Pulsing dot with icon */}
                  <div className="absolute left-0 top-0">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-950 border border-white/10 flex items-center justify-center">
                      {/* Pulse ring */}
                      <span className="absolute inset-0 rounded-full bg-rose-400/30 animate-pulse-ring" />
                      <e.icon size={16} className={`relative ${theme.text}`} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`relative rounded-2xl ${GLASS_CARD} p-5 md:p-6 overflow-hidden`}>
                    <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl ${theme.glow} opacity-30 pointer-events-none`} />
                    <div className="relative">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className={`font-bold text-lg ${theme.text}`}>{e.title}</h3>
                        <span className={`text-[10px] uppercase tracking-widest ${GLASS_PILL} rounded-full px-2.5 py-1 text-slate-300`}>
                          {e.period}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-slate-400 mb-3">{e.role}</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{e.description}</p>
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
//  Contact
// ───────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading number="05" icon={Trophy} kicker="Contact" title="Let's Connect" />

        <Reveal>
          <div className="relative">
            <div className={`relative overflow-hidden rounded-3xl ${GLASS_CARD} p-6 sm:p-8 md:p-14`}>
              <CornerBrackets />

              <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm mb-4">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                  </span>
                  Currently online · Average reply: ~2 hours
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Let's build something together
                </h2>
                <p className="text-slate-300 text-sm md:text-base lg:text-lg max-w-2xl mb-8 leading-relaxed">
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
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold shadow-lg shadow-[#25D366]/30 transition-colors text-sm md:text-base"
                  >
                    <WhatsAppIcon size={18} /> Chat on WhatsApp
                  </motion.a>
                  <motion.a
                    href="mailto:nandafawaz07@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-lg ${GLASS_PILL} text-white font-semibold hover:bg-white/[0.08] transition-colors text-sm md:text-base`}
                  >
                    <Mail size={18} /> Email
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/nandana-fawaz-al-aziz-23b1b3326/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-4 sm:px-5 py-3 rounded-lg ${GLASS_PILL} text-white font-semibold hover:bg-white/[0.08] transition-colors text-sm md:text-base`}
                  >
                    <LinkedInIcon size={18} /> LinkedIn
                  </motion.a>
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
  const cls = "absolute w-6 h-6 border-accent/40 pointer-events-none";
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
  return (
    <footer className="relative border-t border-white/10 backdrop-blur-md bg-slate-950/30 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500">
        <p>
          Built with <span className="text-accent">React</span> +{" "}
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