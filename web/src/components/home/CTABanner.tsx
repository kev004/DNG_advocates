import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteImages } from "@/lib/images";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden border-y border-navy-900/10">
      <div className="absolute inset-0">
        <Image
          src={siteImages.cta.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-navy-950/88 backdrop-blur-[2px]"
          aria-hidden
        />
      </div>
      <Container className="relative flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Ready to discuss your matter?
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Share a short confidential briefing—we will respond with next steps and a realistic timeline.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="primary" className="min-w-[200px] justify-center">
            Contact the firm
          </Button>
          <Link
            href="/practice-areas"
            className="inline-flex min-w-[200px] cursor-pointer items-center justify-center rounded-md border border-white/35 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
          >
            View services
          </Link>
        </div>
      </Container>
    </section>
  );
}
