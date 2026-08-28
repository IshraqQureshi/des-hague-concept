import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";

export default function FinalCTA() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-ink py-28 text-ivory md:py-40">
      <span
        aria-hidden
        className="pointer-events-none absolute -left-[6vw] -top-[6vw] select-none whitespace-nowrap font-serif text-[24vw] font-light leading-none text-ivory/[0.035]"
      >
        Onwards
      </span>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-serif text-[15vw] font-light leading-[0.98] sm:text-[9vw] lg:text-[5.5vw]">
              What&rsquo;s next?
            </h2>
            <p className="mx-auto mt-8 max-w-[48ch] text-[17px] leading-[1.75] text-ivory-dim/75 md:text-[18px]">
              Whether you&rsquo;re looking for a keynote speaker, leadership
              perspective, strategic conversation or simply want to connect,
              start here.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTALink href="#speaking" variant="solid" className="!bg-ivory !text-ink hover:!bg-accent-soft">
              Invite Des to Speak
            </CTALink>
            <CTALink href="#books" variant="outline-light">
              Explore His Work
            </CTALink>
          </Reveal>

          <Reveal delay={0.25} className="mt-8">
            <CTALink href="#top" variant="link-light">
              Connect With Des
            </CTALink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
