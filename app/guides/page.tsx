import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { guidesDB } from "@/lib/seo-data/guides-db";
import { getAllGuideCategories } from "@/lib/seo-data/guides/index";
import Breadcrumb from "@/components/seo/Breadcrumb";
import AnswerBox from "@/components/seo/AnswerBox";
import InternalLinksSection from "@/components/seo/InternalLinksSection";

export const metadata: Metadata = {
  title: "Guides transport médical | Remboursement, CPAM, droits | MediTrajet",
  description:
    "Tous nos guides sur le transport médical : remboursement CPAM, bon de transport, ALD, taxi conventionné, VSL, ambulance. Informations complètes et à jour.",
  alternates: { canonical: "/guides" },
};

export default function GuidesHub() {
  const categories = getAllGuideCategories();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Guides" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6">
          Guides transport médical
        </h1>

        <AnswerBox
          answer="Comment se faire rembourser un transport médical ? Quel véhicule choisir ? Quels sont vos droits ? On vous explique tout, simplement."
        />

        {categories.map((category) => {
          const categoryGuides = guidesDB.filter((g) => g.category === category);
          return (
            <div key={category} className="mb-10">
              <h2 className="text-lg font-bold text-dark mb-4 border-b border-gray-100 pb-2">
                {category}
              </h2>
              <div className="space-y-3">
                {categoryGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group block border border-gray-100 rounded-xl p-4 hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="font-semibold text-dark text-sm group-hover:text-primary transition-colors">
                          {guide.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                          {guide.description}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="flex items-center gap-1 text-[10px] text-gray-400">
                            <Clock className="w-3 h-3" />
                            {guide.readTime}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] text-primary/70">
                            <Tag className="w-3 h-3" />
                            {guide.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        <InternalLinksSection
          groups={[
            {
              heading: "Taxi conventionné par ville",
              links: [
                { label: "Toutes les villes", href: "/taxi-conventionne" },
                { label: "Paris", href: "/taxi-conventionne-paris" },
                { label: "Lyon", href: "/taxi-conventionne-lyon" },
                { label: "Marseille", href: "/taxi-conventionne-marseille" },
              ],
            },
            {
              heading: "Blog",
              links: [
                { label: "Tous les articles", href: "/blog" },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}
