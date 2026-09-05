import Image from "next/image";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ExternalLink, LinkIcon } from "lucide-react";
import Container from "@/components/Container";
import { PROJECTS } from "@/lib/data/projects";
import FadeInSection from "@/components/FadeInSection";

export default function ProjectsPage() {
  return (
    <Container>
      <FadeInSection>
        <section className="py-12">
          <h1 className="text-display-hero-mobile md:text-display-hero text-on-surface mb-4 font-extrabold tracking-tight">
            projects
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mb-12">
            A selection of technical projects and experiments.
          </p>

          <div className="flex flex-col gap-6">
            {PROJECTS.map((project, index) => {
              const reversed = index % 2 === 1;

              return (
                <article
                  key={project.name}
                  className="bg-surface-container-lowest border border-border-light rounded-xl overflow-hidden"
                >
                  <div
                    className={`flex flex-col md:flex-row ${
                      reversed ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2 h-64 md:h-auto min-h-[260px] relative bg-surface-muted flex items-center justify-center p-4 border-b md:border-b-0 border-border-light">
                      <Image
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        fill
                        className="object-contain rounded-md"
                      />
                    </div>

                    <div className="p-6 md:p-8 flex flex-col justify-between md:w-1/2">
                      <div>
                        <h2 className="text-headline-section text-on-surface mb-3">
                          {project.name}
                        </h2>
                        <p className="text-body-md text-on-surface-variant mb-6">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((tech) => (
                            <span
                              key={tech.name}
                              className="inline-flex items-center gap-1.5 text-label-tag font-mono text-on-surface-variant bg-surface-muted rounded-full px-3 py-1.5 border border-border-light"
                            >
                              <tech.icon size={14} color="currentColor" />
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-primary text-on-primary text-[15px] font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                          >
                            <LinkIcon size={16} />
                            Website
                          </a>
                        )}

                        {project.sourceUrl ? (
                          <a
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 justify-center border border-border-light text-on-surface text-[15px] font-medium px-5 py-2.5 rounded-lg hover:bg-surface-muted transition-colors"
                          >
                            <SiGithub size={16} />
                            Source
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <button
                            type="button"
                            disabled
                            className="inline-flex items-center gap-2 justify-center border border-border-light text-text-muted text-[15px] font-medium px-5 py-2.5 rounded-lg cursor-not-allowed"
                          >
                            <SiGithub size={16} />
                            Source
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </FadeInSection>
    </Container>
  );
}
