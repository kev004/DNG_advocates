import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { blogPosts } from "@/lib/site";
import { IconChevronRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Updates and short notes on Kenyan law topics from DNG & Company Advocates—data protection, property, and more.",
};

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-navy-900/10 bg-navy-950 py-16 sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Insights</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Practical perspectives on Kenyan law, business, and regulatory developments.
          </p>
        </Container>
      </section>

      <Section className="bg-white">
        <ul className="divide-y divide-slate-200">
          {blogPosts.map((post) => (
            <li key={post.slug} className="py-8 first:pt-0">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                {post.date}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-navy-900">
                <Link
                  href={`/blog/${post.slug}`}
                  className="cursor-pointer transition-colors duration-200 hover:text-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 max-w-3xl text-slate-600">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-navy-800 transition-colors duration-200 hover:text-gold-dark"
              >
                Read more
                <IconChevronRight className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
