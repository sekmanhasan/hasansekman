import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Smooth from "@/components/fx/Smooth";
import ArticlePage from "@/components/journal/ArticlePage";
import { ARTICLE_BODIES } from "@/data/articleBodies";
import { ARTICLES } from "@/data/journal";

// Every slug is generated at build time, so the page never waits on request data.
export const instant = false;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const body = ARTICLE_BODIES[slug];
  if (!body) return {};
  return { title: body.seoTitle, description: body.seoDescription };
}

export default async function Article({ params }: Params) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  const body = ARTICLE_BODIES[slug];
  if (!article || !body) notFound();
  const more = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);
  return (
    <main className="page-main" data-framer-name="Main">
      <Smooth />
      <ArticlePage article={article} html={body.html} more={more} />
    </main>
  );
}
