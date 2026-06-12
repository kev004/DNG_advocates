/** Site imagery: remote URLs and alt text for accessibility. */

export type SiteImageDef = { src: string; alt: string };

export const siteImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
    alt: "Modern city skyline and office towers at dusk",
  },
  about: {
    src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=85",
    alt: "Law books and legal references on shelves in a library",
  },
  contact: {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
    alt: "Bright office interior with large windows",
  },
  teamBanner: {
    src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=85",
    alt: "Professionals reviewing documents together at a meeting table",
  },
  cta: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=85",
    alt: "Legal documents and a pen on a desk",
  },
} as const satisfies Record<string, SiteImageDef>;

/** Thematic visuals for practice areas (not client-specific). */
export const practiceAreaImages: Record<
  string,
  SiteImageDef
> = {
  "commercial-law": {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    alt: "Business team discussing strategy in a meeting room",
  },
  "real-estate-conveyancing": {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=85",
    alt: "Architectural model and planning materials for property development",
  },
  "banking-finance": {
    src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85",
    alt: "Financial data and market charts on displays",
  },
  "employment-law": {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85",
    alt: "Colleagues collaborating in an office environment",
  },
  "intellectual-property": {
    src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=1200&q=85",
    alt: "Creative workspace with design sketches and tools",
  },
  "data-protection": {
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
    alt: "Server room with network equipment representing secure data",
  },
};

/** Official team headshots in /public/team/. */
export const teamContextImages: Record<string, SiteImageDef> = {
  "elvis-oduor": {
    src: "/team/elvis-oduor.png",
    alt: "Elvis Oduor — Finance and Administration, DNG & Company Advocates",
  },
  "gloria-kwamboka-nyambane": {
    src: "/team/gloria-kwamboka-nyambane.png",
    alt: "Gloria Kwamboka Nyambane — Managing Partner, DNG & Company Advocates",
  },
  "dolphine-moindi": {
    src: "/team/dolphine-moindi.png",
    alt: "Dolphine Moindi — Partner & Head of Litigation Dispute Resolution, DNG & Company Advocates",
  },
};

export const pageHeroImages = {
  about: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85",
    alt: "Open-plan office with natural light",
  },
  practice: {
    src: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=85",
    alt: "Rows of law books in a professional library",
  },
  team: {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85",
    alt: "Minimal modern office reception and workspace",
  },
} as const satisfies Record<string, SiteImageDef>;
