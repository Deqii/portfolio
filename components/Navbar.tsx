"use client";

import { useState } from "react";
import { useTheme } from "@/components/ThemeToggleProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Moon, Sun, Menu, X } from "lucide-react";
import Container from "@/components/Container";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/certificates", label: "certificates" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <div className="w-full">
      <Container>
        <nav className="relative w-full flex items-center justify-between sm:justify-center py-6">
          <div className="flex items-center gap-3 sm:hidden">
            <Link
              href="/contact"
              aria-label="Resume"
              className="inline-flex rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              <FileText size={18} />
            </Link>
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="inline-flex rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )
              ) : (
                <Moon size={18} />
              )}
            </button>
          </div>

          <div className="hidden sm:flex gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "text-body-md text-on-surface font-bold border-b-2 border-on-surface pb-1 transition-colors"
                      : "text-body-md text-text-muted hover:text-on-surface transition-colors"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden sm:flex absolute right-0 items-center gap-3">
            <Link
              href="/contact"
              aria-label="Resume"
              className="inline-flex rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              <FileText size={18} />
            </Link>
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="inline-flex rounded p-2 text-text-muted hover:bg-surface-container hover:text-on-surface cursor-pointer transition-colors"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden rounded p-2 text-text-muted hover:bg-surface-container cursor-pointer transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {isOpen && (
          <div className="sm:hidden flex flex-col gap-4 pb-6">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={
                    isActive
                      ? "text-body-md text-on-surface font-bold border-b-2 border-on-surface pb-1 w-fit transition-colors"
                      : "text-body-md text-text-muted hover:text-on-surface transition-colors"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}
