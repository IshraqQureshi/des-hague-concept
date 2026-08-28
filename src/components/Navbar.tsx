"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const light = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(20,19,15,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">
        <Link
          href="#top"
          className={`font-serif text-[19px] font-medium tracking-[0.08em] transition-colors duration-500 ${
            light ? "text-ivory" : "text-ink"
          }`}
        >
          DES HAGUE
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12.5px] font-medium uppercase tracking-[0.14em] transition-colors duration-500 ${
                light
                  ? "text-ivory-dim/80 hover:text-ivory"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="#speaking"
            className={`rounded-full border px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-500 ${
              light
                ? "border-ivory/35 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink"
                : "border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory"
            }`}
          >
            Invite Des to Speak
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              light ? "bg-ivory" : "bg-ink"
            } ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-transform duration-300 ${
              light ? "bg-ivory" : "bg-ink"
            } ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-stone-line/60 bg-ivory px-6 pb-10 pt-6 lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-stone-line/50 py-4 font-serif text-2xl text-ink"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link
              href="#speaking"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-ink px-6 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-ivory"
            >
              Invite Des to Speak
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
