import { Button } from "@/components/ui/Button";
import { FigureImage } from "@/components/media/FigureImage";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteImages } from "@/lib/images";

const highlights = [
  {
    n: "01",
    text: "Partner-led attention on matters that shape your business or property.",
  },
  {
    n: "02",
    text: "Transparent communication—plain language, realistic timelines, and clear next steps.",
  },
  {
    n: "03",
    text: "Integrated view across commercial, property, finance, employment, IP, and data.",
  },
] as const;

export function AboutPreview() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-32 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-navy-900/[0.06] blur-3xl" />
      </div>

      <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <FigureImage
              image={siteImages.about}
              priority
              aspectClass="aspect-[4/3] lg:aspect-[3/4] lg:min-h-[400px]"
              rounded="2xl"
              className="shadow-2xl shadow-navy-950/10 ring-1 ring-slate-200/90"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="relative">
            <div
              className="pointer-events-none absolute -left-4 top-0 hidden h-full w-px bg-gradient-to-b from-gold via-gold/50 to-transparent sm:block lg:-left-6"
              aria-hidden
            />
            <SectionHeading
              eyebrow="About the firm"
              title="Rooted in Nairobi. Trusted by clients across sectors."
              description="We combine technical depth with commercial judgment—so advice is actionable, documented, and aligned with your risk appetite."
            />
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-3">
            {highlights.map((item) => (
              <div
                key={item.n}
                className="group relative flex flex-col rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-gold/35 hover:shadow-md motion-reduce:transition-none"
              >
                <span className="font-serif text-2xl font-semibold tabular-nums text-gold/90 transition-colors duration-200 group-hover:text-gold">
                  {item.n}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/about" variant="secondary" className="px-6">
              Learn more about us
            </Button>
            <span className="hidden h-px w-12 bg-gradient-to-r from-gold/60 to-transparent sm:block" aria-hidden />
          </div>
        </div>
      </div>
    </Section>
  );
}
