"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { IconMenu, IconX } from "@/components/icons";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-navy-900/10 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90">
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16 lg:h-[4.25rem] landscape:max-md:h-14">
        <Link
          href="/"
          className="group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <span className="block font-serif text-lg font-semibold tracking-tight text-navy-900 transition-colors duration-200 group-hover:text-navy-800 sm:text-xl">
            {site.shortName}
          </span>
          <span className="hidden text-xs font-medium text-slate-600 sm:block">
            Advocates
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                  active
                    ? "text-navy-900"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden cursor-pointer rounded-md bg-gold px-4 py-2 text-sm font-semibold text-navy-950 shadow-sm transition-colors duration-200 hover:bg-gold-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:inline-flex"
          >
            Consultation
          </Link>
          <button
            type="button"
            className="inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-navy-900 transition-colors duration-200 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-navy-900/10 bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="cursor-pointer rounded-md px-3 py-3 text-base font-medium text-slate-800 transition-colors duration-200 hover:bg-slate-50 hover:text-navy-900"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 cursor-pointer rounded-md bg-gold px-4 py-3 text-center text-sm font-semibold text-navy-950"
            >
              Book a consultation
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
