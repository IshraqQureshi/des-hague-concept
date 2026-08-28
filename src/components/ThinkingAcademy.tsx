import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";

const FEATURES = [
  "Bi-weekly live coaching",
  "Executive development",
  "Strategic clarity",
  "Business growth",
  "High-level expert network",
];

export default function ThinkingAcademy() {
  return (
    <section
      id="thinking-academy"
      className="relative overflow-hidden bg-accent-dim py-28 text-ivory md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f7f3ea 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <Container className="relative">
        <Reveal className="text-center">
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-ivory-dim/60">
            Thinking Academy &middot; Founded 2022
          </span>
          <h2 className="mx-auto mt-8 max-w-[18ch] font-serif text-[12vw] font-light italic leading-[1.05] sm:text-[7vw] lg:text-[4.4vw]">
            Think Your Way to the Top.
          </h2>
          <p className="mx-auto mt-8 max-w-[54ch] text-[17px] leading-[1.75] text-ivory-dim/80 md:text-[18px]">
            A year-long executive coaching and business growth experience
            designed to help ambitious leaders think with greater clarity,
            scale smarter and lead stronger.
          </p>
        </Reveal>

        <StaggerGroup className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-6 border-y border-ivory/15 py-8">
          {FEATURES.map((f) => (
            <StaggerItem key={f}>
              <span className="text-[13px] font-medium uppercase tracking-[0.14em] text-ivory-dim/85">
                {f}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <CTALink href="#" variant="outline-light">
            Explore the Thinking Academy
          </CTALink>
        </Reveal>
      </Container>
    </section>
  );
}
