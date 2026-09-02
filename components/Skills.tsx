import Container from "@/components/Container";
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

const SKILL_GROUPS = [
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

export default function Skills() {
  return (
    <Container>
      <section className="py-12">
        <h2 className="text-headline-section text-on-surface mb-6">skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="text-headline-item text-on-surface mb-3">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 text-label-tag font-mono text-on-surface-variant bg-surface-muted rounded-full px-3 py-1.5"
                    >
                      {Icon && <Icon size={14} color="currentColor" />}
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
