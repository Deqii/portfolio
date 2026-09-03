export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
  tags: string[];
  link?: string;
  image?: string;
}

export const CERTIFICATES: Certificate[] = [
  {
    title: "Coding Camp 2025 powered by DBS Foundation",
    issuer: "Dicoding x DBS Foundation",
    date: "Jul 2025",
    tags: ["Web Development", "Machine Learning"],
    image: "/img/certificate-coding-camp.png",
  },
  {
    title: "TOEFL Prediction Test",
    issuer: "Central Course",
    date: "Aug 2026",
    tags: ["English Proficiency"],
    image: "/img/certificate-toefl.png",
  },
  {
    title: "AI Class ASEAN",
    issuer: "AI Ready ASEAN, ASEAN Foundation x Google.org",
    date: "Aug 2026",
    tags: ["Artificial Intelligence"],
    image: "/img/certificate-ai-class-asean.png",
  },
  {
    title: "React, The Complete Guide 2025",
    issuer: "Udemy",
    date: "Jun 2025",
    tags: ["React", "Next.js"],
    image: "/img/certificate-react.png",
  },
  {
    title: "Belajar Pengembangan Web Intermediate",
    issuer: "Dicoding Indonesia",
    date: "Jun 2025",
    tags: ["Web Development"],
    image: "/img/certificate-dicoding.png",
  },
  {
    title: "Certificate of Appreciation – Class Captain",
    issuer: "Luarsekolah",
    tags: ["Web Development", "Leadership"],
    image: "/img/certificate-luarsekolah.png",
  },
];
