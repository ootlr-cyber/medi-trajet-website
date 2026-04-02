import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import { Building2, UserX, TrendingDown } from "lucide-react";

const columns = [
  {
    title: "Côté Établissement",
    icon: Building2,
    image: "/images/hero-mission.jpg",
    problems: [
      "Objectif 50% de transport partagé imposé — aucun outil adapté",
      "Organisation manuelle par téléphone pour des dizaines de patients",
      "Aucun reporting pour justifier les taux auprès de l'ARS",
    ],
  },
  {
    title: "Côté Patient",
    icon: UserX,
    image: "/images/hero-patients-page.jpg",
    problems: [
      "Attentes imprévisibles, parfois 1h30",
      "Équipes changeantes, pas de continuité",
      "Réorganisation hebdomadaire épuisante",
    ],
  },
  {
    title: "Côté Transporteur",
    icon: TrendingDown,
    image: "/images/hero-transporteur.jpg",
    problems: [
      "Temps morts importants entre les courses",
      "Flux de courses irrégulier",
      "Système opaque et peu digitalisé",
    ],
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Le problème"
          title="Un secteur à 6,3 milliards, sans outil adapté"
          description="L'État impose 50% de transport partagé d'ici 2026. Trois acteurs subissent un système non digitalisé."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {columns.map((col, ci) => (
            <div key={ci} className="group relative h-[400px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <col.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold">{col.title}</span>
                </div>
                <ul className="space-y-2.5">
                  {col.problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                      <span className="text-white/80 text-sm leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
