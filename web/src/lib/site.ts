export const site = {
  name: "DNG & Company Advocates",
  shortName: "DNG & Company",
  tagline: "Strategic legal counsel for businesses and individuals in Kenya.",
  description:
    "Nairobi-based law firm delivering commercial, property, finance, employment, IP, and data protection advice with clarity and rigor.",
  url: "https://www.dngadvocates.co.ke",
  email: "info@dngadvocates.co.ke",
  phone: "+254 700 000 000",
  address: {
    line1: "Westlands Business District",
    line2: "Nairobi, Kenya",
  },
  social: {
    linkedin: "https://www.linkedin.com",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/practice-areas", label: "Practice Areas" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const practiceAreas = [
  {
    slug: "commercial-law",
    title: "Commercial Law",
    summary:
      "Contracts, joint ventures, and day-to-day corporate matters aligned with your growth plans.",
  },
  {
    slug: "real-estate-conveyancing",
    title: "Real Estate & Conveyancing",
    summary:
      "Acquisition, leasing, and registration with careful due diligence and clear timelines.",
  },
  {
    slug: "banking-finance",
    title: "Banking & Finance",
    summary:
      "Lending, security, and regulatory aspects structured for lenders and borrowers.",
  },
  {
    slug: "employment-law",
    title: "Employment Law",
    summary:
      "Policies, disputes, and workforce changes handled proportionately and lawfully.",
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    summary:
      "Protection and enforcement of brands, copyrights, and trade secrets.",
  },
  {
    slug: "data-protection",
    title: "Data Protection",
    summary:
      "Compliance programmes, DPIAs, and breach response under Kenyan and regional law.",
  },
] as const;

export const teamMembers = [
  {
    slug: "gloria-kwamboka-nyambane",
    name: "Gloria Kwamboka Nyambane",
    role: "Managing Partner",
    bio: "Advises on property, finance, and employment matters with a solutions-first approach.",
  },
  {
    slug: "dolphine-moindi",
    name: "Dolphine Moindi",
    role: "Partner & Head of Litigation Dispute Resolution",
    bio: "Focus on commercial transactions and regulatory alignment for Kenyan and regional clients.",
  },
  
  {
    slug: "elvis-oduor",
    name: "Elvis Oduor",
    role: "Finance and Administration",
    bio: "Responsible for overseeing financial operations, budgeting, and record keeping while ensuring smooth administrative support across the organization.",
  },
] as const;

export const blogPosts = [
  {
    slug: "kenya-data-protection-updates",
    title: "Kenya data protection: practical compliance notes",
    excerpt:
      "What organisations should document and review as enforcement expectations evolve.",
    date: "2026-03-15",
  },
  {
    slug: "real-estate-due-diligence",
    title: "Due diligence in Nairobi property transactions",
    excerpt:
      "A concise checklist for buyers and lenders before completion.",
    date: "2026-02-02",
  },
] as const;
