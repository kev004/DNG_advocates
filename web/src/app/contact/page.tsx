import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { PageHeroImage } from "@/components/media/PageHeroImage";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteImages } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DNG & Company Advocates in Nairobi—office address, phone, email, and secure enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-navy-900/10 bg-navy-950 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
              <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">
                Let us hear from you
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                Send a confidential message or call us. We will confirm receipt and outline practical next
                steps.
              </p>
            </div>
            <PageHeroImage image={siteImages.contact} priority />
          </div>
        </Container>
      </section>

      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-navy-900">Office</h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IconPhone className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="cursor-pointer font-medium text-navy-900 hover:text-navy-800"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href={`mailto:${site.email}`}
                  className="cursor-pointer font-medium text-navy-900 hover:text-navy-800"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="mt-8 text-sm text-slate-600">
              Office hours: Monday–Friday, 8:30 a.m.–5:30 p.m. (EAT). Meetings by appointment.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-xl font-semibold text-navy-900">Enquiry form</h2>
            <p className="mt-2 text-sm text-slate-600">
              Please avoid sharing privileged information until we have confirmed the engagement.
            </p>
            <div className="mt-6">
              <ContactForm source="contact-page" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
