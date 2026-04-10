import { IconCheck } from "@/components/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    title: "Judgment you can rely on",
    text: "We prioritise outcomes and proportionality—advising when to negotiate, when to litigate, and when to document.",
  },
  {
    title: "Responsive and organised",
    text: "Deadlines, filings, and counterparties are handled with structured workflows and clear ownership.",
  },
  {
    title: "Aligned with regulators",
    text: "Data, employment, and finance mandates are approached with up-to-date awareness of Kenyan frameworks.",
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-navy-950 text-slate-200">
      <SectionHeading
        eyebrow="Why choose us"
        title="Built for decision-makers"
        description="Corporate teams, founders, and property investors work with us for counsel that respects both law and commercial reality."
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-white/10 bg-white/5 p-6 transition-colors duration-200 hover:border-gold/30"
          >
            <IconCheck className="h-6 w-6 text-gold" />
            <h3 className="mt-4 font-serif text-lg font-semibold text-white">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
