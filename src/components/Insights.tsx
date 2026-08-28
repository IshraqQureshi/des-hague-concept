import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";

export default function Insights() {
  return (
    <section id="insights" className="bg-ivory py-28 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow>Ideas &amp; Media</Eyebrow>
          <h2 className="mt-6 max-w-[16ch] heading-section text-ink">
            Ideas from the front lines.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Reveal>
            <div className="flex h-full flex-col justify-between border border-stone-line bg-paper p-10">
              <div>
                <span className="font-serif text-lg text-stone">01</span>
                <h3 className="mt-5 font-serif text-[26px] leading-tight text-ink">
                  Articles
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-ink/65">
                  Leadership, business, transformation and personal growth.
                </p>
              </div>
              <CTALink href="#" variant="link-dark" className="mt-8">
                Read the Insights
              </CTALink>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-between border border-stone-line bg-paper p-10">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg text-stone">02</span>
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-stone-line">
                    <Image
                      src="/images/podcast-onwards.jpeg"
                      alt="Onwards! with Des Hague — podcast cover art"
                      fill
                      sizes="48px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
                <h3 className="mt-5 font-serif text-[26px] leading-tight text-ink">
                  Podcasts
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-ink/65">
                  Conversations with founders, executives and thought
                  leaders on <em className="not-italic text-ink">Onwards! with Des Hague</em>.
                </p>
              </div>
              <CTALink href="#" variant="link-dark" className="mt-8">
                Listen Now
              </CTALink>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full flex-col justify-between border border-stone-line bg-paper p-10">
              <div>
                <span className="font-serif text-lg text-stone">03</span>
                <h3 className="mt-5 font-serif text-[26px] leading-tight text-ink">
                  Interviews &amp; Media
                </h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-ink/65">
                  Selected appearances, interviews and speaking engagements.
                </p>
              </div>
              <CTALink href="#" variant="link-dark" className="mt-8">
                View Media
              </CTALink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
