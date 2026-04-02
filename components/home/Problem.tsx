import SectionHeader from "@/components/ui/SectionHeader";
import { Building2, UserX, TrendingDown, Clock, FileX, Phone, Target, ArrowRight } from "lucide-react";

const etablissementProblems = [
  { icon: Target, text: "Objectif 50% de transport partagé imposé sans outil adapté" },
  { icon: Phone, text: "Organisation manuelle par téléphone pour des dizaines de patients" },
  { icon: FileX, text: "Aucun reporting pour justifier les taux auprès de l'ARS" },
];

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

const columns = [
  { title: "Côté Établissement", icon: Building2, color: "primary", problems: etablissementProblems },
  { title: "Côté Patient", icon: UserX, color: "red", problems: patientProblems },
  { title: "Côté Transporteur", icon: TrendingDown, color: "amber", problems: transporteurProblems },
];

const colorMap: Record<string, { border: string; bg: string; text: string; iconBg: string }> = {
  primary: { border: "border-primary/20", bg: "bg-primary/5", text: "text-primary", iconBg: "bg-primary/10" },
  red: { border: "border-red-100", bg: "bg-red-50/50", text: "text-red-500", iconBg: "bg-red-50" },
  amber: { border: "border-amber-100", bg: "bg-amber-50/50", text: "text-amber-600", iconBg: "bg-amber-50" },
};

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Le problème"
          title="Un secteur à 6,3 milliards, sans outil adapté"
          description="L'État impose 50% de transport partagé d'ici 2026. Établissements, patients et transporteurs subissent un système non digitalisé."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {columns.map((col, ci) => {
            const c = colorMap[col.color];
            return (
              <div key={ci} className={`bg-white rounded-2xl p-6 border ${c.border}`}>
                <div className={`inline-flex items-center gap-2 ${c.text} font-semibold mb-5`}>
                  <div className={`w-8 h-8 ${c.iconBg} rounded-lg flex items-center justify-center`}>
                    <col.icon className="w-4 h-4" />
                  </div>
                  {col.title}
                </div>
                <ul className="space-y-4">
                  {col.problems.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <p.icon className={`w-5 h-5 ${c.text} opacity-60 mt-0.5 shrink-0`} />
                      <span className="text-gray-600 text-sm">{p.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center gap-3 bg-primary/10 text-primary font-semibold px-6 py-3 rounded-full">
            <ArrowRight className="w-5 h-5" />
            MediTrajet résout ces trois problèmes
          </div>
        </div>
      </div>
    </section>
  );
}
