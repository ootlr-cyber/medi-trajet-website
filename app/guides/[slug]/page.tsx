import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { getAllGuideSlugs, getGuideBySlug } from "@/lib/seo-data/guides/index";
import Breadcrumb from "@/components/seo/Breadcrumb";
import AnswerBox from "@/components/seo/AnswerBox";
import TableOfContents from "@/components/seo/TableOfContents";
import GuideContentRenderer from "@/components/seo/GuideContentRenderer";
import FAQSection from "@/components/seo/FAQSection";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import { ArticleJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.date,
      ...(guide.lastUpdated ? { modifiedTime: guide.lastUpdated } : {}),
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  // Related guides
  const relatedLinks = guide.relatedGuides
    .map((s) => {
      const related = getGuideBySlug(s);
      return related
        ? { label: related.title, href: `/guides/${s}` }
        : null;
    })
    .filter((l): l is { label: string; href: string } => l !== null);

  // City links
  const cityLinks = (guide.relatedCities || ["paris", "lyon", "marseille", "bordeaux", "toulouse"]).slice(0, 5).map((c) => ({
    label: `Taxi conventionné ${c.charAt(0).toUpperCase() + c.slice(1).replace(/-/g, " ")}`,
    href: `/taxi-conventionne-${c}`,
  }));

  return (
    <>
      <ArticleJsonLd
        title={guide.title}
        description={guide.description}
        url={`https://meditrajet.fr/guides/${slug}`}
        datePublished={guide.date}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: guide.title },
            ]}
          />

          {/* Back link */}
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mb-6 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Tous les guides
          </Link>

          {/* Meta info */}
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-1 text-xs text-primary/70 bg-primary/5 px-2 py-1 rounded-full font-medium">
              <Tag className="w-3 h-3" />
              {guide.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              {guide.readTime}
            </span>
            <span className="text-xs text-gray-400">
              {new Date(guide.date).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6">
            {guide.title}
          </h1>

          <AnswerBox answer={guide.answerBox} />

          {/* Table of Contents */}
          <TableOfContents sections={guide.sections} />

          {/* Content */}
          <GuideContentRenderer sections={guide.sections} />

          {/* FAQ */}
          <FAQSection items={guide.faq} />

          {/* Internal links */}
          <InternalLinksSection
            groups={[
              { heading: "Guides associés", links: relatedLinks },
              { heading: "Taxi conventionné par ville", links: cityLinks },
            ]}
          />

          {/* CTA */}
          <div className="mt-12 bg-primary/5 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-dark mb-2">
              Réservez votre transport médical
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Sans avance de frais · Conventionné CPAM · Tiers payant
            </p>
            <Link
              href="/a-propos#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Réserver un transport
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
