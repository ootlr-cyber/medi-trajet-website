import Link from "next/link";
import { ArrowRight, BookOpen, ChevronRight } from "lucide-react";
import FranceMap from "./FranceMap";

const topGuides = [
  { title: "Remboursement transport CPAM", slug: "remboursement-transport-cpam" },
  { title: "Bon de transport medical", slug: "bon-de-transport-medical" },
  { title: "Taxi conventionné : comment ça marche", slug: "taxi-conventionne-comment-ca-marche" },
  { title: "ALD et transport medical", slug: "ald-transport-medical" },
  { title: "Taxi, VSL ou ambulance : le comparatif", slug: "tarifs-taxi-vsl-ambulance" },
  { title: "Transport pour la dialyse", slug: "transport-dialyse" },
];

export default function ResourcesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Carte de France */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-dark mb-2">Taxi conventionné par région</h2>
            <p className="text-sm text-gray-500 mb-6">Cliquez sur une region pour voir les villes desservies</p>
            <FranceMap />
            <div className="text-center mt-6">
              <Link
                href="/taxi-conventionne"
                className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary/15 transition-colors"
              >
                Voir les 100+ villes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Guides */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="text-xl font-bold text-dark">Guides pratiques</h2>
            </div>
            <div className="space-y-3">
              {topGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group flex items-center gap-3 bg-gray-50 hover:bg-primary/5 rounded-xl px-4 py-3.5 transition-all hover:shadow-sm border border-transparent hover:border-primary/10"
                >
                  <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors shrink-0" />
                  <span className="text-sm text-gray-600 group-hover:text-dark font-medium transition-colors">{guide.title}</span>
                </Link>
              ))}
            </div>
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-6 hover:underline"
            >
              Tous les guides
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
