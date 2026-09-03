import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiLaravel,
  SiPhp,
  SiJest,
  SiTestinglibrary,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiPython,
  SiScikitlearn,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "@icons-pack/react-simple-icons";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }> | null;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn/ui", icon: SiShadcnui },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Hapi.js", icon: null },
      { name: "Flask", icon: SiFlask },
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
      { name: "REST API", icon: null },
    ],
  },
  {
    label: "Testing",
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "React Testing Library", icon: SiTestinglibrary },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
  {
    label: "ML/Data",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "scikit-learn", icon: SiScikitlearn },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];
