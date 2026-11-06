import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiLaravel,
  SiDocker,
  SiMysql,
  SiPython,
  SiScikitlearn,
  SiReact,
  SiTypescript,
  SiExpress,
  SiPrisma,
  SiSvelte,
  SiVite,
  SiVitest,
} from "@icons-pack/react-simple-icons";

export interface ProjectTech {
  name: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
}

export interface Project {
  name: string;
  description: { en: string; id: string };
  tech: ProjectTech[];
  image: string;
  sourceUrl: string | null;
  liveUrl?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "MelinjoScan",
    description: {
      en: "Melinjo seed ripeness classifier using Color Moment HSV and Random Forest, reaching 96.25% test accuracy. Undergraduate thesis project.",
      id: "Pengklasifikasi kematangan biji melinjo menggunakan Color Moment HSV dan Random Forest, mencapai akurasi uji 96.25%. Proyek skripsi sarjana.",
    },
    tech: [
      { name: "Flask", icon: SiFlask },
      { name: "Python", icon: SiPython },
      { name: "scikit-learn", icon: SiScikitlearn },
    ],
    image: "/img/project-melinjoscan.webp",
    sourceUrl: "https://github.com/Deqii/melinjoscan",
    liveUrl: "https://melinjoscan.streamlit.app/",
    featured: true,
  },
  {
    name: "PBI Belajar Bekerja",
    description: {
      en: "Collaborated with a 5 person team as Front-End Developer to build a web application using Laravel and Tailwind CSS, with MySQL for data and Docker for containerization. The team included a Digital Marketing specialist, two UI/UX Designers, and a Back-End Developer, working together from design through deployment.",
      id: "Berkolaborasi dengan tim beranggotakan 5 orang sebagai Front-End Developer untuk membangun aplikasi web menggunakan Laravel dan Tailwind CSS, dengan MySQL untuk data dan Docker untuk containerization. Tim terdiri dari satu spesialis Digital Marketing, dua UI/UX Designer, dan satu Back-End Developer, bekerja sama mulai dari desain hingga deployment.",
    },
    tech: [
      { name: "Laravel", icon: SiLaravel },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Docker", icon: SiDocker },
      { name: "MySQL", icon: SiMysql },
    ],
    image: "/img/project-pbi.webp",
    sourceUrl: "https://github.com/Deqii/pbi-belajar-bekerja",
    liveUrl: "https://belajar-bekerja.vercel.app/",
    featured: true,
  },
  {
    name: "Project Himatif",
    description: {
      en: "Landing page for a campus student organization (Himpunan Mahasiswa).",
      id: "Landing page untuk organisasi mahasiswa kampus (Himpunan Mahasiswa).",
    },
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    image: "/img/project-himatif.webp",
    sourceUrl: "https://github.com/Deqii/himatif-ypkp",
    liveUrl: "https://himatif-ypkp.vercel.app/",
    featured: false,
  },
  {
    name: "Job Application Tracker",
    description: {
      en: "Full-stack job application tracker with JWT authentication, a status pipeline with an append-only history timeline, a response-rate dashboard, and server-side Excel export. Built as an npm workspaces monorepo.",
      id: "Aplikasi pelacak lamaran kerja full-stack dengan autentikasi JWT, pipeline status dengan riwayat append-only, dashboard response rate, dan ekspor Excel di sisi server. Dibangun sebagai monorepo npm workspaces.",
    },
    tech: [
      { name: "React.js", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Express.js", icon: SiExpress },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "MySQL", icon: SiMysql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    image: "/img/project-job-tracker.webp",
    sourceUrl: "https://github.com/Deqii/dq-job-tracker",
    featured: false,
  },
  {
    name: "Daily Tracker",
    description: {
      en: "Gamified habit tracker with daily quests across five stats, XP, ranks from E to S, streaks, and a rewards wallet. Data stays in localStorage with JSON import and export. The rules engine is framework-free TypeScript with unit tests.",
      id: "Pelacak kebiasaan bergaya game dengan quest harian untuk lima stat, XP, peringkat E sampai S, streak, dan dompet hadiah. Data tersimpan di localStorage dengan impor dan ekspor JSON. Rules engine ditulis sebagai TypeScript tanpa framework dan diuji dengan unit test.",
    },
    tech: [
      { name: "Svelte", icon: SiSvelte },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Vite", icon: SiVite },
      { name: "Vitest", icon: SiVitest },
      { name: "Playwright" },
    ],
    image: "/img/project-daily-tracker.webp",
    sourceUrl: "https://github.com/Deqii/daily-tracker",
    liveUrl: "https://dq-daily-tracker.vercel.app",
    featured: false,
  },
];
