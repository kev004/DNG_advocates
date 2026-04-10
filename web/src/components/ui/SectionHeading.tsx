type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignClass =
    align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";
  return (
    <div className={`mb-10 sm:mb-12 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl landscape:max-md:text-2xl landscape:max-md:leading-snug">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg landscape:max-md:mt-3 landscape:max-md:text-sm">
          {description}
        </p>
      ) : null}
    </div>
  );
}
