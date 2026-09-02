import Image from "next/image";
import { FileText, Link as LinkIcon, Code2, Mail } from "lucide-react";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <Container>
      <section className="py-16 flex flex-col sm:flex-row items-center sm:items-start gap-8">
        <div className="flex-1 order-2 sm:order-1">
          <h1
            className="text-display-hero-mobile sm:text-display-hero text-on-surface text-2xl"
            style={{ fontFamily: "var(--font-calistoga)" }}
          >
            hi, I&apos;m tio. 👋
          </h1>

          <p className="text-body-md text-text-muted mt-4">
            Fullstack Developer from Bandung, Indonesia 🇮🇩
          </p>

          <p className="text-body-lg text-on-surface mt-2">
            Building web apps end-to-end, from backend logic to polished UI.
          </p>

          <p className="text-body-md text-text-muted mt-2">
            For Q&amp;A, feel free to{" "}
            <span className="text-on-surface underline cursor-pointer">
              start a chat
            </span>{" "}
            chat support coming soon.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="/img/resume.pdf"
              className="inline-flex items-center gap-2 rounded bg-primary text-on-primary px-4 py-2 text-body-md hover:opacity-90 transition-opacity"
            >
              Resume <FileText size={16} />
            </a>

            <a
              href="#"
              aria-label="Link"
              className="rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              <LinkIcon size={18} />
            </a>

            <a
              href="#"
              aria-label="Source"
              className="rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              <Code2 size={18} />
            </a>

            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              className="rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              <Mail size={18} />
            </a>
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
    </Container>
  );
}
