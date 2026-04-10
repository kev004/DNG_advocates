import Image from "next/image";
import type { SiteImageDef } from "@/lib/images";

type Props = {
  image: SiteImageDef;
  priority?: boolean;
  aspectClass?: string;
  rounded?: "lg" | "xl" | "2xl";
  className?: string;
};

const roundedMap = {
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
};

export function FigureImage({
  image,
  priority,
  aspectClass = "aspect-[4/3]",
  rounded = "xl",
  className = "",
}: Props) {
  return (
    <figure className={`relative w-full overflow-hidden border border-slate-200/80 shadow-lg ${roundedMap[rounded]} ${className}`}>
      <div className={`relative w-full ${aspectClass}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          className="object-cover"
          priority={priority}
        />
      </div>
    </figure>
  );
}
