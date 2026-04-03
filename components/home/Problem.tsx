import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import { Building2, UserX, TrendingDown } from "lucide-react";

const columns = [
  {
    title: "Le secrétariat médical",
    icon: Building2,
    image: "/images/hero-mission.jpg",
    accent: "bg-primary",
    problems: [
      "Des heures au téléphone pour organiser les transports du jour",
      "Aucune visibilité sur les disponibilités des transporteurs",
      "Pas de suivi : le patient est-il bien arrivé ?",
    ],
  },
  {
    title: "Le patient",
    icon: UserX,
    image: "/images/hero-patients-page.jpg",
    accent: "bg-secondary",
    problems: [
      "Attentes imprévisibles devant l'hôpital",
      "Un chauffeur différent à chaque fois",
      "Devoir tout réorganiser chaque semaine",
    ],
  },
  {
    title: "Le transporteur",
    icon: TrendingDown,
    image: "/images/hero-transporteur.jpg",
    accent: "bg-accent",
    problems: [
      "Des trous dans le planning entre deux courses",
      "Pas de visibilité sur les prochaines demandes",
      "Tout se fait encore par téléphone et carnet",
    ],
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Aujourd'hui"
          title="Un quotidien compliqué pour tout le monde"
          description="Trois acteurs, un même problème : trop de temps perdu, pas assez d'outils."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {columns.map((col, ci) => (
            <div key={ci} className="group relative h-[420px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-1">
              <Image
                src={col.image}
                alt={col.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 ${col.accent} rounded-xl flex items-center justify-center shadow-lg`}>
                    <col.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold text-lg">{col.title}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                  <ul className="space-y-3">
                    {col.problems.map((p, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                        <span className="text-white/90 text-sm leading-snug">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
