import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";

export default function Books() {
  return (
    <section id="books" className="bg-ivory py-28 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow>Author</Eyebrow>
          <h2 className="mt-6 max-w-[16ch] font-serif text-[11vw] font-light leading-[1.02] text-ink sm:text-[7vw] lg:text-[3.6vw]">
            Ideas shaped by experience.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <div className="relative flex items-end justify-center gap-0 sm:justify-start">
              <div className="group relative z-10 w-[62%] max-w-[340px] shrink-0 transition-transform duration-500 ease-out hover:-translate-y-2">
                <div className="relative aspect-[538/680] w-full shadow-[0_40px_80px_-30px_rgba(20,19,15,0.45)]">
                  <Image
                    src="/images/book-think-your-way-to-the-top.jpg"
                    alt="Think Your Way to the Top book cover by Des Hague"
                    fill
                    sizes="(min-width: 1024px) 32vw, 55vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="group relative -ml-10 w-[46%] max-w-[240px] shrink-0 translate-y-6 transition-transform duration-500 ease-out hover:-translate-y-2 sm:-ml-14">
                <div className="relative aspect-[400/596] w-full shadow-[0_30px_60px_-24px_rgba(20,19,15,0.4)]">
                  <Image
                    src="/images/book-15-minutes-of-shame.jpg"
                    alt="15 Minutes of Shame: How a Twitter Mob Nearly Ruined My Life, book cover by Des Hague"
                    fill
                    sizes="(min-width: 1024px) 22vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-14 lg:col-span-5">
            <Reveal delay={0.1}>
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone">
                Book One
              </span>
              <h3 className="mt-3 font-serif text-[30px] leading-tight text-ink md:text-[34px]">
                Think Your Way to the Top
              </h3>
              <p className="mt-4 max-w-[42ch] text-[16px] leading-[1.7] text-ink/65">
                A leadership and personal-development framework built from
                Des Hague&rsquo;s experience as a nine-time CEO &mdash; a
                52-week journal for getting ahead and staying there.
              </p>
              <CTALink href="#" variant="link-dark" className="mt-6">
                Explore the Journal
              </CTALink>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="h-px w-full bg-stone-line" />
            </Reveal>

            <Reveal delay={0.2}>
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone">
                Book Two
              </span>
              <h3 className="mt-3 font-serif text-[30px] leading-tight text-ink md:text-[34px]">
                15 Minutes of Shame
              </h3>
              <p className="mt-4 max-w-[42ch] text-[16px] leading-[1.7] text-ink/65">
                A candid account of how a Twitter mob nearly upended a career
                &mdash; and what it takes to withstand public scrutiny with
                resilience.
              </p>
              <CTALink href="#" variant="link-dark" className="mt-6">
                Explore the Memoir
              </CTALink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
