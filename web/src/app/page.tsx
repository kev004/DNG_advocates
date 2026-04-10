import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactPreview } from "@/components/home/ContactPreview";
import { CTABanner } from "@/components/home/CTABanner";
import { Hero } from "@/components/home/Hero";
import { ProcessSection } from "@/components/home/ProcessSection";
import { OurApproach } from "@/components/home/OurApproach";
import { PracticeAreasGrid } from "@/components/home/PracticeAreasGrid";
import { TeamPreview } from "@/components/home/TeamPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "DNG & Company Advocates is a Nairobi law firm advising on commercial, property, finance, employment, IP, and data protection matters.",
  openGraph: {
    title: "DNG & Company Advocates | Nairobi Law Firm",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <AboutPreview />
      <PracticeAreasGrid />
      <WhyChooseUs />
      <OurApproach />
      <TeamPreview />
      <CTABanner />
      <ContactPreview />
    </>
  );
}
