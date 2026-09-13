import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiLaravel,
  SiDocker,
  SiMysql,
  SiPython,
  SiScikitlearn,
} from "@icons-pack/react-simple-icons";

export interface ProjectTech {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
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
    image: "/img/project-melinjoscan.png",
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
    image: "/img/project-pbi.png",
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
    image: "/img/project-himatif.png",
    sourceUrl: "https://github.com/Deqii/himatif-ypkp",
    liveUrl: "https://himatif-ypkp.vercel.app/",
    featured: false,
  },
];
