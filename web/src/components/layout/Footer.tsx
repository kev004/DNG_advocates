import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-slate-200">
      <Container className="py-12 sm:py-14 landscape:max-md:py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label={site.name}
              className="inline-block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              <div className="rounded-xl bg-white px-6 py-4 shadow-md shadow-black/20 transition-opacity duration-200 hover:opacity-90">
                <Image
                  src="/logo.png"
                  alt={site.name}
                  width={280}
                  height={92}
                  className="w-52 h-auto object-contain sm:w-64"
                />
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="cursor-pointer text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <IconMapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-slate-300">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <IconPhone className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="cursor-pointer text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IconMail className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href={`mailto:${site.email}`}
                  className="cursor-pointer text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="text-slate-500">Developed by KelMi Tech.</p>
        </div>
      </Container>
    </footer>
  );
}
