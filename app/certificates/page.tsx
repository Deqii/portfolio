"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, FileImage, ExternalLink, X } from "lucide-react";
import Container from "@/components/Container";
import { CERTIFICATES } from "@/lib/data/certificates";

export default function CertificatesPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <Container>
      <section className="py-12">
        <h1 className="text-display-hero-mobile md:text-display-hero text-on-surface mb-4 font-extrabold tracking-tight">
          certificates
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mb-12">
          Certifications and training completed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.title}
              className="rounded-lg border border-border-light overflow-hidden flex flex-col"
            >
              {cert.image ? (
                <button
                  type="button"
                  onClick={() => setLightboxImage(cert.image!)}
                  className="relative h-32 w-full bg-surface-container-high cursor-pointer"
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    className="object-cover"
                  />
                </button>
              ) : (
                <div className="relative h-32 w-full bg-surface-container-high flex items-center justify-center">
                  <FileImage
                    size={28}
                    className="text-text-muted"
                    strokeWidth={1.5}
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-md bg-surface-muted flex items-center justify-center">
                    <Award size={20} className="text-on-surface" />
                  </div>
                  {cert.date && (
                    <span className="text-label-tag font-mono text-on-surface-variant bg-surface-muted rounded px-2 py-1">
                      {cert.date}
                    </span>
                  )}
                </div>

                <h2 className="text-headline-item text-on-surface mb-1">
                  {cert.title}
                </h2>
                <p className="text-body-md text-text-muted mb-4">
                  {cert.issuer}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-label-tag font-mono text-on-surface-variant bg-surface-muted rounded-full px-3 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-border-light">
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-body-md text-on-surface hover:opacity-70 transition-opacity"
                    >
                      View Certificate <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-body-md text-text-muted cursor-not-allowed">
                      View Certificate <ExternalLink size={14} />
                    </span>
                  )}
                </div>
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
              alt="Full size certificate"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </Container>
  );
}
