"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiPython,
  SiScikitlearn,
  SiGithub,
} from "@icons-pack/react-simple-icons";
import Container from "@/components/Container";

const PROJECTS = [
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

export default function FeaturedProjects() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <Container>
      <section className="py-12">
        <h2 className="text-headline-section text-on-surface mb-6">
          featured projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.name}
              className="rounded-lg border border-border-light overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setLightboxImage(project.image)}
                className="relative h-40 w-full bg-surface-container-high cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-cover"
                />
              </button>

              <div className="p-6">
                <h3 className="text-headline-item text-on-surface mb-2">
                  {project.name}
                </h3>
                <p className="text-body-md text-text-muted mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 text-label-tag font-mono text-on-surface-variant bg-surface-muted rounded-full px-3 py-1.5"
                    >
                      <tech.icon size={14} color="currentColor" />
                      {tech.name}
                    </span>
                  ))}
                </div>

                {project.sourceUrl ? (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded bg-primary text-on-primary px-3 py-2 text-body-md hover:opacity-90 transition-opacity"
                  >
                    <SiGithub size={16} /> Source
                  </a>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded bg-surface-container-high text-text-muted px-3 py-2 text-body-md cursor-not-allowed"
                  >
                    <SiGithub size={16} /> Source
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 cursor-pointer"
        >
          <button
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white cursor-pointer hover:opacity-70 transition-opacity"
          >
            <X size={28} />
          </button>

          <div className="relative w-full max-w-3xl h-[70vh]">
            <Image
              src={lightboxImage}
              alt="Full size screenshot"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </Container>
  );
}
