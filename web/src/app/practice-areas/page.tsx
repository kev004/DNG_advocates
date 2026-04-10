import Image from "next/image";
import type { Metadata } from "next";
import {
  IconBuilding,
  IconChevronRight,
  IconLandmark,
  IconLock,
  IconScale,
  IconShield,
  IconUsers,
} from "@/components/icons";
import { PageHeroImage } from "@/components/media/PageHeroImage";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageHeroImages, practiceAreaImages } from "@/lib/images";
import { practiceAreas } from "@/lib/site";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "Commercial law, real estate, banking & finance, employment, intellectual property, and data protection advice in Nairobi.",
};

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

export default function PracticeAreasPage() {
  return (
    <>
      <section className="border-b border-navy-900/10 bg-navy-950 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Practice areas
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">
                Services aligned to your risks and opportunities
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                From structuring transactions to protecting data and brands, we support clients with
                integrated advice across six core disciplines.
              </p>
            </div>
            <PageHeroImage image={pageHeroImages.practice} priority />
          </div>
        </Container>
      </section>

      <Section className="bg-surface">
        <div className="grid gap-8">
          {practiceAreas.map((area) => {
            const Icon = iconBySlug[area.slug];
            const img = practiceAreaImages[area.slug];
            return (
              <article
                key={area.slug}
                id={area.slug}
                className="scroll-mt-28 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
              >
                <div className="relative aspect-[21/9] min-h-[160px] w-full sm:aspect-[24/9]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1152px"
                    className="object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy-900 text-gold">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-serif text-2xl font-semibold text-navy-900">
                        {area.title}
                      </h2>
                      <p className="mt-3 text-slate-600 leading-relaxed">{area.summary}</p>
                      <p className="mt-4 text-slate-600 leading-relaxed">
                        We tailor engagements to your sector and stage—whether you need a one-off opinion,
                        transaction support, or an ongoing advisory relationship.
                      </p>
                      <a
                        href="/contact"
                        className="mt-6 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                      >
                        Discuss this area
                        <IconChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
