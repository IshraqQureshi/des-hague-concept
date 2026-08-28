"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import CTALink from "@/components/ui/CTALink";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink pt-32 pb-0 text-ivory md:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f7f3ea 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-6 right-0 select-none whitespace-nowrap font-serif text-[26vw] font-light leading-none text-ivory/[0.035] md:text-[20vw]"
      >
        Hague
      </span>

      <Container className="relative">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 lg:col-span-7 lg:pb-24"
          >
            <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory-dim/70">
              <span className="h-px w-8 bg-accent-soft" />
              CEO &middot; Investor &middot; Author &middot; Advisor
            </span>

            <h1 className="mt-7 max-w-[13ch] font-serif text-[13vw] font-light leading-[0.98] tracking-tight sm:max-w-[12ch] sm:text-[9vw] lg:max-w-[10ch] lg:text-[4.6vw]">
              Leadership forged in the real world.
            </h1>

            <p className="mt-8 max-w-[46ch] text-[17px] leading-[1.7] text-ivory-dim/85 md:text-[18px]">
              For decades, Des Hague has built and transformed organizations,
              advised leaders, invested in businesses, and shared the lessons
              earned along the way.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CTALink href="#about" variant="solid" className="!bg-ivory !text-ink hover:!bg-accent-soft">
                Discover Des&rsquo;s Story
              </CTALink>
              <CTALink href="#speaking" variant="outline-light">
                Invite Des to Speak
              </CTALink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative z-10 mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none"
          >
            <div className="relative aspect-[4/5] w-full">
              <div
                aria-hidden
                className="absolute inset-x-6 bottom-0 top-10 rounded-t-[999px] border border-ivory/10 bg-linear-to-b from-accent-dim/40 via-accent-dim/10 to-transparent"
              />
              <Image
                src="/images/portrait-hero-cutout.png"
                alt="Des Hague, CEO and leadership strategist, portrait"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="relative z-10 object-contain object-bottom"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex items-center gap-3 border-t border-ivory/10 py-6 text-[11px] uppercase tracking-[0.24em] text-ivory-dim/50 lg:mt-4">
          <span>Scroll</span>
          <span className="h-px w-10 bg-ivory/25" />
          <span>Nine-time CEO &amp; President</span>
        </div>
      </Container>
    </section>
  );
}
