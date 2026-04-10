import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { blogPosts } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

const bodies: Record<string, string[]> = {
  "kenya-data-protection-updates": [
    "Organisations operating in Kenya should treat data protection as an ongoing programme—not a one-off policy upload. Regulators increasingly expect evidence of training, vendor oversight, and breach readiness.",
    "Practical steps include maintaining an accurate processing register, conducting data protection impact assessments where appropriate, and ensuring contracts with processors set out clear instructions and audit rights.",
    "If you are unsure whether a processing activity triggers additional obligations, obtain advice before scaling collection or sharing personal data across borders.",
  ],
  "real-estate-due-diligence": [
    "Before completing a property purchase or taking security, confirm title, encumbrances, and any rates or rent restrictions that could affect value or enforceability.",
    "For commercial acquisitions, review leases, service charge mechanics, and planning permissions. For residential purchases, validate seller identity and any spousal or family law considerations early.",
    "Closing documents should align with agreed conditions—especially where approvals from landlords or authorities are still outstanding.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = bodies[slug] ?? [post.excerpt];

  return (
    <>
      <section className="border-b border-navy-900/10 bg-navy-950 py-16 sm:py-20">
        <Container>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            {post.date}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">{post.excerpt}</p>
        </Container>
      </section>

      <Section className="bg-white">
        <article className="max-w-3xl">
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-6 leading-relaxed text-slate-600 last:mb-0">
              {p}
            </p>
          ))}
          <div className="mt-10 border-t border-slate-200 pt-8">
            <Link
              href="/blog"
              className="cursor-pointer text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-gold-dark"
            >
              ← Back to blog
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}
