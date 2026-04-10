import Image from "next/image";
import type { SiteImageDef } from "@/lib/images";

type Props = {
  image: SiteImageDef;
  priority?: boolean;
  className?: string;
};

/** Rounded hero visual for inner page headers (beside or below title on small screens). */
export function PageHeroImage({ image, priority, className = "" }: Props) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 shadow-xl sm:aspect-[16/10] lg:max-h-[320px] lg:max-w-xl ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 480px"
        className="object-cover"
        priority={priority}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent"
        aria-hidden
      />
    </div>
  );
}
