import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";

export default function CurrentLeadership() {
  return (
    <section id="leadership" className="bg-ivory py-28 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-6 max-w-[16ch] font-serif text-[11vw] font-light leading-[1.02] text-ink sm:text-[7vw] lg:text-[3.6vw]">
            Leading what&rsquo;s next.
          </h2>
          <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.7] text-ink/65 md:text-[18px]">
            Today, Des leads organizations at the intersection of consumer
            brands, food, nutrition, growth and innovation.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-5">
          <Reveal className="lg:col-span-7">
            <div className="group relative flex h-[440px] flex-col justify-end overflow-hidden rounded-[2px] lg:h-[560px]">
              <Image
                src="/images/portrait-studio-blue.jpg"
                alt="Des Hague, Chief Executive Officer of Potandon Produce"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/35 to-transparent" />
              <div className="relative z-10 p-8 md:p-12">
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-ivory-dim/70">
                  Current &middot; Chief Executive Officer
                </span>
                <h3 className="mt-4 font-serif text-[10vw] font-light leading-[0.98] text-ivory sm:text-[5.5vw] lg:text-[3vw]">
                  Potandon Produce
                </h3>
                <p className="mt-4 max-w-[38ch] text-[15px] leading-[1.7] text-ivory-dim/80">
                  Exclusive marketer of Green Giant Fresh Potatoes and Onions.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="flex h-[215px] flex-col justify-between border border-stone-line bg-paper p-8 md:h-[268px] md:p-10">
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-stone">
                  Current &middot; CEO &amp; President
                </span>
                <div>
                  <h3 className="font-serif text-[9vw] font-light leading-[0.98] text-ink sm:text-[4.5vw] lg:text-[2.3vw]">
                    Rä Foods
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.7] text-ink/60">
                    Living nutrition.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex h-[215px] flex-col justify-between bg-ink p-8 md:h-[268px] md:p-10">
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-ivory-dim/60">
                  Founded 2015 &middot; Founder &amp; CEO
                </span>
                <div>
                  <h3 className="font-serif text-[9vw] font-light leading-[0.98] text-ivory sm:text-[4.5vw] lg:text-[2.3vw]">
                    Hague Enterprises
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.7] text-ivory-dim/70">
                    Investment &middot; Advisory &middot; Operational Leadership
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
