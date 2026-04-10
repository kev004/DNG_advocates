import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { FigureImage } from "@/components/media/FigureImage";
import { IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteImages } from "@/lib/images";
import { site } from "@/lib/site";

export function ContactPreview() {
  return (
    <Section id="contact" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start a confidential conversation"
            description="Use the form or reach us directly. We aim to respond within one business day."
          />
          <FigureImage
            image={siteImages.contact}
            aspectClass="aspect-[16/10]"
            className="mt-8"
          />
          <ul className="mt-8 space-y-4 text-slate-700">
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
                className="cursor-pointer font-medium text-navy-900 transition-colors duration-200 hover:text-navy-800"
              >
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconMail className="h-5 w-5 shrink-0 text-gold" />
              <a
                href={`mailto:${site.email}`}
                className="cursor-pointer font-medium text-navy-900 transition-colors duration-200 hover:text-navy-800"
              >
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm text-slate-600">
            Prefer email?{" "}
            <Link
              href="/contact"
              className="cursor-pointer font-semibold text-navy-800 underline-offset-4 transition-colors duration-200 hover:text-gold-dark hover:underline"
            >
              Visit the full contact page
            </Link>{" "}
            for office hours and map.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm source="home" />
        </div>
      </div>
    </Section>
  );
}
