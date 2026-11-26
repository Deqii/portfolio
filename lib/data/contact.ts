import { Mail, Link as LinkIcon } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const CONTACT_LINKS: ContactLink[] = [
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
    icon: LinkIcon,
  },
  {
    label: "GitHub",
    value: "github.com/Deqii",
    href: "https://github.com/Deqii",
    icon: SiGithub,
  },
];
