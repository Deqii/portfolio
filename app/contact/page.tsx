import { Mail, Download } from "lucide-react";
import { SiLinkerd, SiGithub } from "@icons-pack/react-simple-icons";
import Container from "@/components/Container";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "tioprayudha04@gmail.com",
    href: "mailto:tioprayudha04@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tio-prayudha",
    href: "https://linkedin.com/in/tio-prayudha",
    icon: SiLinkerd,
  },
  {
    label: "GitHub",
    value: "github.com/Deqii",
    href: "https://github.com/Deqii",
    icon: SiGithub,
  },
];

export default function ContactPage() {
  return (
    <Container>
      <section className="py-12">
        <h1 className="text-display-hero-mobile md:text-display-hero text-on-surface mb-4 font-extrabold tracking-tight">
          contact
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mb-12">
          Feel free to reach out through any of the channels below.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Email" ? undefined : "_blank"}
              rel={link.label === "Email" ? undefined : "noopener noreferrer"}
              className="flex items-center gap-4 rounded-lg border border-border-light p-4 hover:bg-surface-muted transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-surface-muted flex items-center justify-center shrink-0">
                <link.icon size={20} className="text-on-surface" />
              </div>
              <div>
                <p className="text-headline-item text-on-surface">
                  {link.label}
                </p>
                <p className="text-body-md text-text-muted">{link.value}</p>
              </div>
            </a>
          ))}
        </div>

        <a
          href="/img/resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded bg-primary text-on-primary px-5 py-2.5 text-body-md hover:opacity-90 transition-opacity"
        >
          <Download size={16} />
          Download Resume
        </a>
      </section>
    </Container>
  );
}
