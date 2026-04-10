import Image from "next/image";
import type { Metadata } from "next";
import { PageHeroImage } from "@/components/media/PageHeroImage";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageHeroImages, teamContextImages } from "@/lib/images";
import { teamMembers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the advocates at DNG & Company Advocates—Dolphine Moindi, Gloria Kwamboka Nyambane, and Elvis Oduor.",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function TeamPage() {
  return (
    <>
      <section className="border-b border-navy-900/10 bg-navy-950 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Team</p>
              <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">
                People you will work with
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Experienced advocates focused on clear advice, careful drafting, and steady execution.
              </p>
            </div>
            <PageHeroImage image={pageHeroImages.team} priority />
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <div className="grid gap-12">
          {teamMembers.map((m) => {
            const visual = teamContextImages[m.slug];
            return (
              <article
                key={m.slug}
                id={m.slug}
                className="scroll-mt-28 overflow-hidden rounded-xl border border-slate-200 bg-surface shadow-sm"
              >
                <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
                  <div className="relative aspect-[16/10] min-h-[200px] md:aspect-auto md:min-h-[280px]">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-10">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy-900 font-serif text-lg font-semibold text-gold">
                        {initials(m.name)}
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl font-semibold text-navy-900">{m.name}</h2>
                        <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold">
                          {m.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 max-w-3xl leading-relaxed text-slate-600">{m.bio}</p>
                    <p className="mt-4 text-sm text-slate-500">
                      Admissions and representative matters available on request.
                    </p>
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
