import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline-light" | "outline-dark" | "link-light" | "link-dark";

const base =
  "group inline-flex items-center gap-2.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid:
    "rounded-full bg-ink px-7 py-3.5 text-ivory hover:bg-accent-dim",
  "outline-light":
    "rounded-full border border-ivory/35 px-7 py-3.5 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink",
  "outline-dark":
    "rounded-full border border-ink/25 px-7 py-3.5 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  "link-light": "text-ivory",
  "link-dark": "text-ink",
};

export default function CTALink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const isLink = variant.startsWith("link");
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      <span className={isLink ? "border-b border-current/40 pb-0.5 transition-colors group-hover:border-current" : ""}>
        {children}
      </span>
      <span
        aria-hidden
        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
      >
        &#8594;
      </span>
    </Link>
  );
}
