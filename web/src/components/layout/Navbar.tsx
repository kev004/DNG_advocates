"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-50 shrink-0 overflow-hidden border-b border-navy-900/10 bg-white">
      <Container className="flex h-24 items-center justify-between gap-4 sm:h-28 lg:h-32 landscape:max-md:h-20">
        <Link
          href="/"
          className="group flex h-full shrink-0 cursor-pointer items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label={site.name}
        >
          <Image
            src="/logo.png"
            alt={site.name}
            width={1024}
            height={673}
            className="h-full max-h-20 w-auto object-contain object-left transition-opacity duration-200 group-hover:opacity-90 sm:max-h-24 lg:max-h-28"
            priority
          />
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
