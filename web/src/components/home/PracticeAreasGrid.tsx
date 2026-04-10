import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import {
  IconBuilding,
  IconChevronRight,
  IconLandmark,
  IconLock,
  IconScale,
  IconShield,
  IconUsers,
} from "@/components/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { practiceAreaImages } from "@/lib/images";
import { practiceAreas } from "@/lib/site";

const iconBySlug: Record<
  (typeof practiceAreas)[number]["slug"],
  ComponentType<{ className?: string }>
> = {
  "commercial-law": IconScale,
  "real-estate-conveyancing": IconBuilding,
  "banking-finance": IconLandmark,
  "employment-law": IconUsers,
  "intellectual-property": IconShield,
  "data-protection": IconLock,
};

export function PracticeAreasGrid() {
  return (
    <Section id="practice-areas" className="bg-white">
      <SectionHeading
        eyebrow="Practice areas"
        title="Where we focus"
        description="Six core disciplines, delivered with consistency and attention to detail."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {practiceAreas.map((area) => {
          const Icon = iconBySlug[area.slug];
          const img = practiceAreaImages[area.slug];
          return (
            <article
              key={area.slug}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border border-slate-200 bg-surface transition-colors duration-200 hover:border-gold/50 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.02]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent"
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy-900 text-gold transition-colors duration-200 group-hover:bg-navy-800">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-navy-900">
                  {area.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {area.summary}
                </p>
                <Link
                  href="/practice-areas"
                  className="mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  Explore
                  <IconChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
