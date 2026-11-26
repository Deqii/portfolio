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
    title: "React, The Complete Guide 2025",
    issuer: "Udemy",
    date: "Jun 2025",
    tags: ["React", "Next.js"],
    image: "/img/certificates/certificate-react.webp",
  },
  {
    title: "Belajar Pengembangan Web Intermediate",
    issuer: "Dicoding Indonesia",
    date: "Jun 2025",
    tags: ["Web Development"],
    image: "/img/certificates/certificate-web-intermediate.webp",
  },
  {
    title: "Coding Camp 2025 powered by DBS Foundation",
    issuer: "Dicoding x DBS Foundation",
    date: "Jul 2025",
    tags: ["Web Development", "Machine Learning"],
    image: "/img/certificates/certificate-coding-camp.webp",
  },
  {
    title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
    issuer: "Dicoding Indonesia",
    date: "Oct 2024",
    tags: ["Cloud Computing", "AWS"],
    image: "/img/certificates/certificate-cloud.webp",
  },
  {
    title: "Database Foundations",
    issuer: "Oracle Academy",
    date: "Jun 2023",
    tags: ["Database", "SQL"],
    image: "/img/certificates/certificate-dbms.webp",
  },
  {
    title: "Java Programming",
    issuer: "Oracle Academy",
    date: "Jun 2023",
    tags: ["Java", "Programming"],
    image: "/img/certificates/certificate-java-programming.webp",
  },
  {
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    date: "Jun 2023",
    tags: ["Java", "Programming"],
    image: "/img/certificates/certificate-java-fundamentals.webp",
  },
  {
    title: "AI Class ASEAN",
    issuer: "AI Ready ASEAN, ASEAN Foundation x Google.org",
    date: "Aug 2026",
    tags: ["Artificial Intelligence"],
    image: "/img/certificates/certificate-ai-class-asean.webp",
  },
  {
    title: "Microsoft Office Specialist – Excel Associate",
    issuer: "Microsoft",
    date: "Nov 2025",
    tags: ["Microsoft 365", "Spreadsheet"],
    image: "/img/certificates/certificate-mos.webp",
  },
  {
    title: "TOEFL Prediction Test",
    issuer: "Central Course",
    date: "Aug 2026",
    tags: ["English Proficiency"],
    image: "/img/certificates/certificate-toefl.webp",
  },
  {
    title: "Certificate of Appreciation – Class Captain",
    issuer: "Luarsekolah",
    tags: ["Web Development", "Leadership"],
    image: "/img/certificates/certificate-luarsekolah.webp",
  },
];
