"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import FadeInSection from "@/components/FadeInSection";
import HoverScale from "@/components/HoverScale";

type Tab = "work" | "education";

const WORK_ITEMS = [
  {
    company: "PT Teknologi Edukasi Indonesia",
    role: "Front-End Developer Intern",
    period: "Oct 2025 - Jan 2026",
    logo: "/img/logo-tei.jpg",
    bullets: [
      "Redesigned the Luarsekolah landing page using Laravel Blade and Tailwind CSS, taking the Lighthouse score from around 60 to 92 across all device breakpoints.",
      "Built 8+ reusable Blade components and integrated 3 backend API endpoints, cutting down template duplication and enabling dynamic content rendering.",
      "Worked with 4 other developers in daily standups, opened PRs, and reviewed teammates' code before merge.",
    ],
  },
];

const EDUCATION_ITEMS = [
  {
    company: "DBS Foundation x Dicoding",
    role: "Front-End & Back-End Developer",
    period: "May 2025 - Jul 2025",
    logo: "/img/logo-dicoding.jpg",
    bullets: [
      "Led a 5-person team to build Nutrilance, a web app where users enter dietary data and get personalized diet plans, food recommendations, and recipes powered by an ML model.",
      "Built the full frontend with React.js and Tailwind CSS, plus Flask REST APIs with SQLite, connecting ML predictions to a responsive UI with a Lighthouse performance score above 85%.",
      "Scored 87/100, placing in the top cohort of Coding Camp 2025.",
    ],
  },
  {
    company: "Universitas Sangga Buana YPKP",
    role: "Bachelor of Engineering, Informatics Engineering",
    period: "Oct 2022 - 2026",
    logo: "/img/logo-usb.jpg",
    bullets: ["GPA 3.87 / 4.00"],
  },
];

export default function WorkEducation() {
  const [activeTab, setActiveTab] = useState<Tab>("work");
  const items = activeTab === "work" ? WORK_ITEMS : EDUCATION_ITEMS;

  return (
    <Container>
      <FadeInSection>
        <section className="py-8">
          <div className="rounded-lg border border-border-light p-6">
            <div className="inline-flex rounded-full bg-surface-container p-1">
              <HoverScale
                as="button"
                type="button"
                onClick={() => setActiveTab("work")}
                className={`px-6 py-2 rounded-full text-body-md cursor-pointer transition-colors ${
                  activeTab === "work"
                    ? "bg-surface-container-lowest text-on-surface shadow-sm"
                    : "text-text-muted"
                }`}
              >
                Experience
              </HoverScale>
              <HoverScale
                as="button"
                type="button"
                onClick={() => setActiveTab("education")}
                className={`px-6 py-2 rounded-full text-body-md cursor-pointer transition-colors ${
                  activeTab === "education"
                    ? "bg-surface-container-lowest text-on-surface shadow-sm"
                    : "text-text-muted"
                }`}
              >
                Education
              </HoverScale>
            </div>

            <div className="mt-8 flex flex-col gap-8">
              {items.map((item) => (
                <div key={item.company} className="flex gap-4">
                  <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-surface-container-high border border-gray-300">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                      <h3 className="text-headline-item text-on-surface">
                        {item.company}
                      </h3>
                      <span className="text-body-md text-text-muted">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-body-md text-text-muted mt-1">
                      {item.role}
                    </p>

                    <ul className="mt-3 flex flex-col gap-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-body-md text-on-surface-variant pl-4 relative before:content-['•'] before:absolute before:left-0"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>
    </Container>
  );
}
