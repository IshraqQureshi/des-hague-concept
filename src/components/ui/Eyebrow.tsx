export default function Eyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] md:text-[12px] font-medium uppercase tracking-[0.28em] ${
        tone === "dark" ? "text-stone" : "text-ivory-dim/80"
      }`}
    >
      <span
        className={`h-px w-8 ${tone === "dark" ? "bg-accent" : "bg-accent-soft"}`}
      />
      {children}
    </span>
  );
}
