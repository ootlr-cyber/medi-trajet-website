import { Clock, Smile, Percent, CalendarCheck } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Stat {
  value: string;
  unit: string;
  label: string;
  sublabel: string;
  icon: LucideIcon;
  color: string;
}

const stats: Stat[] = [
  { value: "15", unit: "min", label: "pour organiser 80 transports", sublabel: "au lieu d'une matinée entière", icon: Clock, color: "from-blue-500 to-blue-600" },
  { value: "0", unit: "€", label: "d'avance de frais patient", sublabel: "tiers payant automatique", icon: Smile, color: "from-emerald-500 to-emerald-600" },
  { value: "45", unit: "%", label: "de transport partagé atteint", sublabel: "en 3 mois d'utilisation", icon: Percent, color: "from-amber-500 to-amber-600" },
  { value: "1", unit: "clic", label: "pour programmer un trajet", sublabel: "récurrent ou ponctuel", icon: CalendarCheck, color: "from-violet-500 to-violet-600" },
];

export default function Stats() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Les résultats</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mt-2">Ce que MediTrajet change au quotidien</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className={`w-11 h-11 mx-auto mb-3 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg`}>
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <div className="mb-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-dark">{s.value}</span>
                <span className="text-lg sm:text-xl font-bold text-primary ml-1">{s.unit}</span>
              </div>
              <div className="text-gray-700 font-semibold text-sm leading-snug">{s.label}</div>
              <div className="text-gray-400 text-xs mt-1">{s.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
