import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";
import { CAREER_MILESTONES } from "@/lib/content";

export default function CareerTimeline() {
  return (
    <section id="about" className="bg-ink py-28 text-ivory md:py-36">
      <Container>
        <Reveal>
          <Eyebrow tone="light">Career</Eyebrow>
          <h2 className="mt-6 max-w-[18ch] font-serif text-[11vw] font-light leading-[1.02] sm:text-[7vw] lg:text-[3.6vw]">
            A career built around transformation.
          </h2>
          <p className="mt-6 max-w-[58ch] text-[17px] leading-[1.7] text-ivory-dim/75 md:text-[18px]">
            From PepsiCo to the C-suite, Des Hague&rsquo;s career has crossed
            industries, companies and markets &mdash; with a consistent focus
            on leadership, growth and operational transformation.
          </p>
        </Reveal>

        {/* Desktop: horizontal editorial timeline */}
        <Reveal delay={0.15} className="relative mt-20 hidden lg:block">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-ink to-transparent"
          />
          <div
            role="region"
            aria-label="Career milestones, scroll horizontally"
            tabIndex={0}
            className="no-scrollbar relative overflow-x-auto pb-6 focus-visible:outline-2 focus-visible:outline-accent-soft focus-visible:outline-offset-4"
          >
            <div className="relative flex min-w-max gap-0 border-t border-ivory/15">
              {CAREER_MILESTONES.map((m, i) => (
                <div
                  key={m.org}
                  className="relative w-[220px] shrink-0 border-r border-ivory/15 px-6 pt-8"
                >
                  <span
                    aria-hidden
                    className="absolute -top-[5px] left-6 h-[9px] w-[9px] rounded-full bg-accent-soft"
                  />
                  <span className="font-serif text-2xl text-ivory-dim/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-serif text-[19px] leading-tight text-ivory">
                    {m.org}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-ivory-dim/60">
                    {m.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Mobile / tablet: vertical timeline */}
        <div className="mt-16 space-y-0 lg:hidden">
          {CAREER_MILESTONES.map((m, i) => (
            <Reveal key={m.org} delay={i * 0.04} y={16}>
              <div className="relative border-l border-ivory/15 py-6 pl-8">
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-7 h-[9px] w-[9px] rounded-full bg-accent-soft"
                />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ivory-dim/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-ivory">{m.org}</h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-ivory-dim/60">
                  {m.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <CTALink href="#advisory" variant="link-light">
            Explore the Full Journey
          </CTALink>
        </Reveal>
      </Container>
    </section>
  );
}
