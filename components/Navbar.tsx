"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Moon, Menu, X } from "lucide-react";
import Container from "@/components/Container";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/certificates", label: "certificates" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <Container>
        <nav className="relative w-full flex items-center justify-center py-6">
          <div className="hidden sm:flex gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-md text-text-muted hover:text-on-surface transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="absolute right-0 flex items-center gap-3">
            <button
              type="button"
              aria-label="Resume"
              className="hidden sm:inline-flex rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              <FileText size={18} />
            </button>
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="hidden sm:inline-flex rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              <Moon size={18} />
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden rounded p-2 text-text-muted hover:bg-surface-container cursor-pointer transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="sm:hidden flex flex-col gap-4 pb-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-body-md text-text-muted hover:text-on-surface transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                aria-label="Resume"
                className="rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
              >
                <FileText size={18} />
              </button>
              <button
                type="button"
                aria-label="Toggle dark mode"
                className="rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
              >
                <Moon size={18} />
              </button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
