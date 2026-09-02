import Link from "next/link";
import { Link as LinkIcon, Code2, Mail } from "lucide-react";
import Container from "@/components/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-6">
      <Container>
        <div className="flex items-center justify-between">
          <p className="text-body-md text-text-muted">
            © {year} tio.dev |{" "}
            <Link
              href="/privacy"
              className="text-text-muted hover:text-on-surface transition-colors underline"
            >
              privacy?
            </Link>
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Link"
              className="rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              <LinkIcon size={16} />
            </a>
            <a
              href="#"
              aria-label="Source"
              className="rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              <Code2 size={16} />
            </a>
            <a
              href="mailto:hello@example.com"
              aria-label="Email"
              className="rounded p-2 text-text-muted hover:bg-surface-container
              hover:text-on-surface cursor-pointer transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
