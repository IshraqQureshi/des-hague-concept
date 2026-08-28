import Container from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/ui/Stagger";

const STATS = [
  { value: "9×", label: "CEO / President" },
  { value: "40+", label: "Years of Leadership" },
  { value: "20+", label: "Board & Advisory Roles" },
  { value: "30+", label: "Organizations & Companies" },
];

export default function ImpactStats() {
  return (
    <section className="border-b border-stone-line/70 bg-paper">
      <Container>
        <StaggerGroup className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:py-20 lg:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label} className="border-l border-stone-line/70 pl-6">
              <div className="font-serif text-[13vw] font-light leading-none text-ink sm:text-[7vw] lg:text-[3.4vw]">
                {stat.value}
              </div>
              <div className="mt-3 text-[12px] font-medium uppercase tracking-[0.16em] text-stone">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
