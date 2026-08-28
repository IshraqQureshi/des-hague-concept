export default function Eyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[12px] md:text-[13px] font-medium uppercase tracking-[0.28em] ${
        tone === "dark" ? "text-stone" : "text-ivory-dim/75"
      }`}
    >
      <span
        className={`h-px w-8 ${tone === "dark" ? "bg-accent" : "bg-accent-soft"}`}
      />
      {children}
    </span>
  );
}
