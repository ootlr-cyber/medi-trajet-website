import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/blog-data";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Ressources — MediTrajet",
  description: "Guides, réglementation et actualités sur le transport médical partagé, le remboursement CPAM, et l’organisation des transports sanitaires.",
};

export default function BlogPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
              Blog &amp; <span className="text-primary">Ressources</span>
            </h1>
            <p className="text-lg text-gray-500">
              Guides pratiques, décryptage réglementaire et conseils pour le transport médical.
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
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
                <h2 className="text-xl font-bold text-dark group-hover:text-primary transition-colors mb-2">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {article.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                  Lire l&apos;article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
