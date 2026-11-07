"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";
import HoverScale from "@/components/HoverScale";

interface ProjectImageLightboxProps {
  src: string;
  alt: string;
  sizes: string;
  className: string;
}

export default function ProjectImageLightbox({
  src,
  alt,
  sizes,
  className,
}: ProjectImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const close = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <Image src={src} alt={alt} fill sizes={sizes} className={className} />
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge ${alt}`}
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      />
      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 cursor-pointer"
          >
            <HoverScale
              as="button"
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-6 right-6 text-white cursor-pointer hover:opacity-70 transition-opacity"
            >
              <X size={28} />
            </HoverScale>

            <div className="relative w-full max-w-3xl h-[70vh]">
              <Image
                src={src}
                alt="Full size screenshot"
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
