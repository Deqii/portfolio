import Container from "@/components/Container";
import { SKILL_GROUPS } from "@/lib/data/skills";
import FadeInSection from "@/components/FadeInSection";

export default function Skills() {
  return (
    <Container>
      <FadeInSection>
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
      </FadeInSection>
    </Container>
  );
}
