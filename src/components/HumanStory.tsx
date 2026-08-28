import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function HumanStory() {
  return (
    <section className="border-t border-stone-line bg-ivory-dim py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-stone">
              Beyond the Title
            </span>
            <h2 className="mt-8 font-serif text-[10vw] font-light italic leading-[1.15] text-ink sm:text-[6.5vw] lg:text-[3.2vw]">
              Success isn&rsquo;t measured only by what you achieve.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-9 max-w-[52ch] text-[17px] leading-[1.85] text-ink/65 md:text-[18px]">
              Des believes real leadership is measured as much by resilience
              and mentorship as by results. Across every stage of his
              career, he has made room to lift others up &mdash; investing in
              people, giving back, and staying grounded in purpose beyond
              the boardroom.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[12px] font-medium uppercase tracking-[0.18em] text-stone">
            <span>Resilience</span>
            <span className="h-1 w-1 rounded-full bg-accent-soft" />
            <span>Mentorship</span>
            <span className="h-1 w-1 rounded-full bg-accent-soft" />
            <span>Philanthropy</span>
            <span className="h-1 w-1 rounded-full bg-accent-soft" />
            <span>Purpose</span>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
