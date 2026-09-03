import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiPython,
  SiScikitlearn,
} from "@icons-pack/react-simple-icons";

export interface ProjectTech {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
}

export interface Project {
  name: string;
  description: string;
  tech: ProjectTech[];
  image: string;
  sourceUrl: string | null;
}

export const PROJECTS: Project[] = [
  {
    name: "Project Himatif",
    description:
      "Landing page for a campus student organization (Himpunan Mahasiswa).",
    tech: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    image: "/img/project-himatif.png",
    sourceUrl: null,
  },
  {
    name: "MelinjoScan",
    description:
      "Melinjo seed ripeness classifier using Color Moment HSV and Random Forest, reaching 96.25% test accuracy. Undergraduate thesis project.",
    tech: [
      { name: "Flask", icon: SiFlask },
      { name: "Python", icon: SiPython },
      { name: "scikit-learn", icon: SiScikitlearn },
    ],
    image: "/img/project-melinjoscan.png",
    sourceUrl: null,
  },
];
