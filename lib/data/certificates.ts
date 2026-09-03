export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    title: "Coding Camp 2025 powered by DBS Foundation",
    issuer: "Dicoding x DBS Foundation",
    date: "Jul 2025",
  },
  {
    title: "TOEFL Prediction Test",
    issuer: "Central Course",
    date: "Aug 2026",
  },
  {
    title: "AI Class ASEAN",
    issuer: "AI Ready ASEAN, ASEAN Foundation x Google.org",
    date: "Aug 2026",
  },
  {
    title: "React, The Complete Guide 2025",
    issuer: "Udemy",
    date: "Jun 2025",
  },
  {
    title: "Belajar Pengembangan Web Intermediate",
    issuer: "Dicoding Indonesia",
    date: "Jun 2025",
  },
  {
    title: "Pengenalan ke Logika Pemrograman",
    issuer: "Dicoding Indonesia",
    date: "Feb 2025",
  },
];
