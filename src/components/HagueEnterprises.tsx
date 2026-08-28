import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Reveal from "@/components/ui/Reveal";
import CTALink from "@/components/ui/CTALink";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";

const PILLARS = [
  {
    n: "01",
    title: "Investment",
    copy: "Deploying capital into businesses and founders with long-term potential.",
  },
  {
    n: "02",
    title: "Advisory",
    copy: "Guiding leadership teams and boards through growth and change.",
  },
  {
    n: "03",
    title: "Operations",
    copy: "Hands-on operational leadership for organizations in transition.",
  },
  {
    n: "04",
    title: "Philanthropy",
    copy: "Integrating purpose and giving into every enterprise decision.",
  },
];

export default function HagueEnterprises() {
  return (
    <section className="bg-ivory-dim py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Hague Enterprises</Eyebrow>
            <h2 className="mt-6 max-w-[15ch] font-serif text-[10vw] font-light leading-[1.05] text-ink sm:text-[6vw] lg:text-[2.9vw]">
              Backing people. Building businesses. Creating value.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[17px] leading-[1.7] text-ink/65">
              Hague Enterprises is Des Hague&rsquo;s private, family-backed
              enterprise focused on strategic investment, advisory services
              and operational leadership.
            </p>
            <CTALink href="#advisory" variant="link-dark" className="mt-9">
              Explore Hague Enterprises
            </CTALink>
          </Reveal>

          <StaggerGroup className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {PILLARS.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="h-full border-t border-ink/12 py-8 pr-6">
                    <span className="font-serif text-lg text-stone">{p.n}</span>
                    <h3 className="mt-3 font-serif text-[26px] leading-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 max-w-[30ch] text-[15px] leading-[1.65] text-ink/60">
                      {p.copy}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
