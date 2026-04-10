import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamContextImages } from "@/lib/images";
import { teamMembers } from "@/lib/site";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function TeamPreview() {
  return (
    <Section className="bg-white">
      <SectionHeading
        eyebrow="Our team"
        title="Meet the advocates"
        description="Experienced practitioners with a shared commitment to precision and client service."
      />
      
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((m) => {
          const visual = teamContextImages[m.slug];
          return (
            <article
              key={m.slug}
              className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-surface transition-shadow duration-200 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-900 font-serif text-sm font-semibold text-gold">
                    {initials(m.name)}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl font-semibold text-navy-900">
                      {m.name}
                    </h3>
                    <p className="text-sm font-medium text-gold">{m.role}</p>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {m.bio}
                </p>
                <Link
                  href={`/team#${m.slug}`}
                  className="mt-4 cursor-pointer text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  View profile
                </Link>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="/team" variant="secondary">
          Full team
        </Button>
      </div>
    </Section>
  );
}
