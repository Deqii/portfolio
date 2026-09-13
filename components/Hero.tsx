"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { FileText, Link as LinkIcon, Code2, Mail } from "lucide-react";
import Container from "@/components/Container";
import FadeInSection from "@/components/FadeInSection";
import HoverScale from "@/components/HoverScale";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <Container>
      <FadeInSection>
        <section className="py-16 flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="flex-1 order-2 sm:order-1">
            <h1
              className="text-display-hero-mobile sm:text-display-hero text-on-surface text-2xl"
              style={{ fontFamily: "var(--font-calistoga)" }}
            >
              {t("greeting")}
            </h1>

            <p className="text-body-md text-text-muted mt-4">{t("location")}</p>

            <p className="text-body-lg text-on-surface mt-2">{t("location")}</p>

            <p className="text-body-md text-text-muted mt-2">
              {t("chatNote")}{" "}
              <span className="text-on-surface underline cursor-pointer">
                {t("chatAction")}
              </span>{" "}
              <br /> {t("chatComingSoon")}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <HoverScale
                as="a"
                href="/img/resume.pdf"
                className="inline-flex items-center gap-2 rounded bg-primary text-on-primary px-4 py-2 text-body-md hover:opacity-90 transition-opacity"
              >
                {t("resumeButton")} <FileText size={16} />
              </HoverScale>

              <HoverScale
                as="a"
                href="#"
                aria-label="Link"
                className="rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
              >
                <LinkIcon size={18} />
              </HoverScale>

              <HoverScale
                as="a"
                href="#"
                aria-label="Source"
                className="rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
              >
                <Code2 size={18} />
              </HoverScale>

              <HoverScale
                as="a"
                href="mailto:tioprayudha04@gmail.com"
                aria-label="Email"
                className="rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
              >
                <Mail size={18} />
              </HoverScale>
            </div>
          </div>

          <div className="order-1 sm:order-2 shrink-0">
            <div className="relative w-40 h-52 sm:w-56 sm:h-72 rounded-lg overflow-hidden shadow-lg rotate-3">
              <Image
                src="/img/profile.jpg"
                alt="Tio's profile photo"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </FadeInSection>
    </Container>
  );
}
