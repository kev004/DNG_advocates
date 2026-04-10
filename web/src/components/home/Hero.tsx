import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconArrowRight } from "@/components/icons";
import { siteImages } from "@/lib/images";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-navy-900/10 bg-navy-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c9a227 0, transparent 45%), radial-gradient(circle at 80% 0%, #1e3a8a 0, transparent 40%)",
        }}
        aria-hidden
      />
      <Container className="relative grid gap-10 py-16 sm:gap-12 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-32 landscape:max-md:gap-8 landscape:max-md:py-10">
        <div className="min-w-0 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Nairobi · Kenya
          </p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl landscape:max-md:text-3xl landscape:max-md:leading-tight lg:text-6xl">
            Counsel that is clear,{" "}
            <span className="text-gold">commercial</span>, and committed.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg landscape:max-md:mt-4 landscape:max-md:text-sm lg:text-xl">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center landscape:max-md:mt-6">
            <Button href="/contact" variant="primary" className="px-6 py-3 text-base">
              Request a consultation
              <IconArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Link
              href="/practice-areas"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-semibold text-white transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              View practice areas
            </Link>
          </div>
        </div>

        <div className="relative min-h-[200px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[380px] landscape:max-md:min-h-[160px] landscape:max-md:max-h-[40vh]">
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src={siteImages.hero.src}
              alt={siteImages.hero.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-navy-950/80 via-navy-950/20 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
              aria-hidden
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
