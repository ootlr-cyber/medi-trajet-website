import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug, getAllSlugs } from "@/lib/blog-data";
import { ArrowLeft, ArrowRight, Clock, Tag, ChevronDown } from "lucide-react";
import { ArticleJsonLd, FAQJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | MediTrajet`,
    description: article.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <ArticleJsonLd
        title={article.title}
        description={article.description}
        url={`https://meditrajet.fr/blog/${slug}`}
        datePublished={article.date}
      />
      {article.faq && article.faq.length > 0 && <FAQJsonLd items={article.faq} />}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
            <span className="text-xs text-gray-400">{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-6 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed border-l-4 border-primary pl-4">
            {article.description}
          </p>

          <div className="prose prose-lg max-w-none">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {article.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-dark mb-6">Questions fréquentes</h2>
              <div className="space-y-3">
                {article.faq.map((faq, i) => (
                  <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100">
                    <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-dark hover:text-primary transition-colors text-sm">
                      {faq.q}
                      <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" />
                    </summary>
                    <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
            <h3 className="text-xl font-bold text-dark mb-3">Intéressé par MediTrajet ?</h3>
            <p className="text-gray-500 mb-6 text-sm">{article.cta.text}</p>
            <Link
              href={article.cta.href}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
