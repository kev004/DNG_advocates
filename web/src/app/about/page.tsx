import { PageHeroImage } from "@/components/media/PageHeroImage";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { pageHeroImages } from "@/lib/images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DNG & Company Advocates—our values, our Nairobi base, and how we work with clients.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-navy-900/10 bg-navy-950 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                About
              </p>
              <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">
                A firm built on clarity and care
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                We are a Nairobi-based practice advising businesses, investors, and individuals on matters
                that demand both legal precision and commercial sense.
              </p>
            </div>
            <PageHeroImage image={pageHeroImages.about} priority />
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <div className="max-w-3xl space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy-900">Who we are</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              DNG & Company Advocates brings together practitioners with deep experience across
              commercial transactions, property, finance, employment, intellectual property, and data
              protection. Our work is grounded in Kenyan law and informed by how regulators and courts
              apply it in practice.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy-900">How we collaborate</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              We invest time up front to understand your objectives and constraints. That allows us to
              propose realistic options, document them carefully, and support you through execution—whether
              you are closing a deal, registering an interest, or responding to a dispute.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy-900">Our commitment</h2>
            <p className="mt-3 leading-relaxed text-slate-600">
              We aim to be responsive, transparent on fees where possible, and respectful of your time.
              Legal advice should empower decisions; we deliver it in plain language, with the detail you
              need when it matters.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
