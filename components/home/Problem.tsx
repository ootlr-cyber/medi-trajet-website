import SectionHeader from "@/components/ui/SectionHeader";
import { UserX, Clock, FileX, TrendingDown, ArrowRight } from "lucide-react";

const patientProblems = [
  { icon: Clock, text: "Attentes imprévisibles, parfois 1h30" },
  { icon: UserX, text: "Équipes changeantes, pas de continuité" },
  { icon: FileX, text: "Réorganisation hebdomadaire épuisante" },
];

const transporteurProblems = [
  { icon: Clock, text: "Temps morts importants entre les courses" },
  { icon: TrendingDown, text: "Flux de courses irrégulier" },
  { icon: FileX, text: "Système opaque et peu digitalisé" },
];

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Le problème"
          title="Un secteur essentiel, mal digitalisé"
          description="Patients et transporteurs partagent une double frustration que MediTrajet résout."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border border-red-100">
            <div className="inline-flex items-center gap-2 text-red-500 font-semibold mb-6">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                <UserX className="w-4 h-4" />
              </div>
              Côté Patient
            </div>
            <ul className="space-y-4">
              {patientProblems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <p.icon className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-600">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-red-100">
            <div className="inline-flex items-center gap-2 text-red-500 font-semibold mb-6">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-4 h-4" />
              </div>
              Côté Transporteur
            </div>
            <ul className="space-y-4">
              {transporteurProblems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <p.icon className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-gray-600">{p.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-semibold px-6 py-3 rounded-full">
            <ArrowRight className="w-5 h-5" />
            MediTrajet résout ces deux problèmes
          </div>
        </div>
      </div>
    </section>
  );
}
