import { Clock, Smile, Percent, CalendarCheck } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Stat {
  value: string;
  unit: string;
  label: string;
  sublabel: string;
  icon: LucideIcon;
}

const stats: Stat[] = [
  { value: "15", unit: "min", label: "pour organiser 80 transports", sublabel: "au lieu d'une matinée entière", icon: Clock },
  { value: "0", unit: "€", label: "d'avance de frais patient", sublabel: "tiers payant automatique", icon: Smile },
  { value: "45", unit: "%", label: "de transport partagé atteint", sublabel: "en 3 mois d'utilisation", icon: Percent },
  { value: "1", unit: "clic", label: "pour programmer un trajet", sublabel: "récurrent ou ponctuel", icon: CalendarCheck },
];

export default function Stats() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-secondary-light text-sm font-semibold uppercase tracking-wider">Les résultats</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Ce que MediTrajet change au quotidien</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center py-8 px-4 ${
                i < stats.length - 1 ? "lg:border-r lg:border-white/10" : ""
              }`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-secondary-light" />
              </div>
              <div className="mb-3">
                <span className="text-4xl sm:text-5xl font-bold text-white">{s.value}</span>
                <span className="text-xl sm:text-2xl font-bold text-secondary-light ml-1">{s.unit}</span>
              </div>
              <div className="text-white/80 font-semibold text-sm">{s.label}</div>
              <div className="text-white/40 text-xs mt-1">{s.sublabel}</div>
              <div className="w-8 h-0.5 bg-secondary/40 mx-auto mt-4 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
