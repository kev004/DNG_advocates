import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-navy-950 hover:bg-gold-dark focus-visible:ring-gold/50 shadow-sm",
  secondary:
    "bg-navy-800 text-white hover:bg-navy-900 focus-visible:ring-navy-500/40",
  ghost:
    "bg-transparent text-navy-900 border border-navy-200 hover:border-gold hover:text-navy-950 focus-visible:ring-gold/40",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const base =
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 motion-reduce:transition-none";
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
