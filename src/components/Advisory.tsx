import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";
import { ADVISORY_ORGS } from "@/lib/content";

export default function Advisory() {
  const row = [...ADVISORY_ORGS, ...ADVISORY_ORGS];

  return (
    <section id="advisory" className="border-t border-stone-line bg-ivory-dim py-20 md:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Board &amp; Advisory</Eyebrow>
          <h2 className="mt-6 max-w-[16ch] font-serif text-[11vw] font-light leading-[1.02] text-ink sm:text-[7vw] lg:text-[3.6vw]">
            Trusted in the boardroom.
          </h2>
          <p className="mt-6 max-w-[54ch] text-[17px] leading-[1.7] text-ink/65 md:text-[18px]">
            Des has advised and served organizations across consumer goods,
            food &amp; beverage, technology, healthcare, retail and other
            industries.
          </p>
        </Reveal>
      </Container>

      <Reveal delay={0.15} className="mt-12 overflow-hidden border-y border-stone-line/70">
        <div className="flex w-max animate-marquee py-8 hover:[animation-play-state:paused]">
          {row.map((org, i) => (
            <span
              key={`${org}-${i}`}
              className="mx-8 shrink-0 whitespace-nowrap font-serif text-[26px] text-ink/35 md:text-[32px]"
            >
              {org}
            </span>
          ))}
        </div>
      </Reveal>

      <Container>
        <Reveal delay={0.1} className="mt-10">
          <CTALink href="#advisory" variant="link-dark">
            View Advisory Experience
          </CTALink>
        </Reveal>
      </Container>
    </section>
  );
}
