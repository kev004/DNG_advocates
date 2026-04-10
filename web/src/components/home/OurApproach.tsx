import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Listen & scope",
    text: "We clarify objectives, constraints, and risk so the mandate is defined correctly from day one.",
  },
  {
    step: "02",
    title: "Analyse & advise",
    text: "We produce clear options, implications, and documentation—no unnecessary complexity.",
  },
  {
    step: "03",
    title: "Execute & follow through",
    text: "We coordinate filings, signatures, and closing items until the matter is resolved.",
  },
];

export function OurApproach() {
  return (
    <Section className="bg-surface">
      <SectionHeading
        eyebrow="Our approach"
        title="A disciplined way of working"
        description="Whether the transaction is large or small, our process keeps clients informed and in control."
      />
      <ol className="grid gap-6 lg:grid-cols-3">
        {steps.map((s) => (
          <li
            key={s.step}
            className="relative rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="font-serif text-3xl font-semibold text-gold/90">
              {s.step}
            </span>
            <h3 className="mt-3 font-serif text-xl font-semibold text-navy-900">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
