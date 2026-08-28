import Link from "next/link";
import Container from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/content";

const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-line bg-ivory py-12">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link href="#top" className="font-serif text-[17px] tracking-[0.08em] text-ink">
            DES HAGUE
          </Link>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink/65 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-6">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink/65 transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-stone-line/70 pt-6 text-[12px] text-ink/65 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Des Hague. All rights reserved.</span>
          <span>Design concept &mdash; not the production site.</span>
        </div>
      </Container>
    </footer>
  );
}
