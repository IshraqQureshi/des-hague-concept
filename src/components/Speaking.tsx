import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";
import { SPEAKING_TOPICS } from "@/lib/content";

export default function Speaking() {
  return (
    <section id="speaking" className="relative overflow-hidden bg-ink text-ivory">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="relative order-2 aspect-[4/3] lg:order-1 lg:col-span-6 lg:aspect-auto">
          <Image
            src="/images/portrait-warm-office.jpg"
            alt="Des Hague speaking with executives in a conversational, fireside setting"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/50 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-ink/30" />
        </div>

        <div className="order-1 flex flex-col justify-center px-6 py-24 md:px-10 lg:order-2 lg:col-span-6 lg:px-20 lg:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-ivory-dim/50">
              <span className="h-px w-8 bg-accent-soft" />
              Speaking
            </span>
            <h2 className="mt-7 max-w-[14ch] heading-section">
              Lessons earned, not theorized.
            </h2>
            <p className="mt-7 max-w-[46ch] text-[17px] leading-[1.7] text-ivory-dim/75 md:text-[18px]">
              Des brings decades of real-world leadership experience to
              conversations about growth, transformation, resilience and
              leading through uncertainty.
            </p>
          </Reveal>

          <StaggerGroup className="mt-9 flex flex-wrap gap-3">
            {SPEAKING_TOPICS.map((topic) => (
              <StaggerItem key={topic}>
                <span className="inline-block rounded-full border border-ivory/20 px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.12em] text-ivory-dim/75">
                  {topic}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.15} className="mt-11">
            <CTALink href="#final-cta" variant="solid" className="!bg-ivory !text-ink hover:!bg-accent-soft">
              Invite Des to Speak
            </CTALink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
