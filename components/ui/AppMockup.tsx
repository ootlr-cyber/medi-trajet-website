import { BarChart3, Users, MapPin, Clock, CheckCircle, TrendingUp } from "lucide-react";

export default function AppMockup() {
  return (
    <div className="relative mx-auto max-w-2xl">
      {/* Browser frame */}
      <div className="bg-gray-800 rounded-t-2xl px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-gray-700 rounded-lg px-3 py-1 ml-3">
          <span className="text-gray-400 text-xs">app.meditrajet.fr/etablissement/dashboard</span>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="bg-white border-x border-b border-gray-200 rounded-b-2xl p-5 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-sm font-bold text-dark">Centre de Dialyse Saint-Louis</div>
            <div className="text-xs text-gray-400">Tableau de bord — Lundi 2 avril 2026</div>
          </div>
          <div className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Connecté
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          <div className="bg-primary/5 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-primary">47%</div>
            <div className="text-[10px] text-gray-500 font-medium">Taux partage</div>
            <div className="text-[9px] text-secondary font-bold flex items-center justify-center gap-0.5 mt-0.5">
              <TrendingUp className="w-2.5 h-2.5" /> +12%
            </div>
          </div>
          <div className="bg-secondary/5 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-secondary">24</div>
            <div className="text-[10px] text-gray-500 font-medium">Patients du jour</div>
          </div>
          <div className="bg-amber-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-amber-600">18</div>
            <div className="text-[10px] text-gray-500 font-medium">Courses planifiées</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-purple-600">6</div>
            <div className="text-[10px] text-gray-500 font-medium">Courses partagées</div>
          </div>
        </div>

        {/* Patient list */}
        <div className="bg-gray-50 rounded-xl p-3">
          <div className="text-xs font-bold text-dark mb-2 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-primary" />
            Prochains transports
          </div>
          {[
            { name: "Marie D.", time: "14:00", dest: "Dialyse", status: "Partagé", statusColor: "text-secondary bg-secondary/10" },
            { name: "Robert P.", time: "14:15", dest: "Dialyse", status: "Partagé", statusColor: "text-secondary bg-secondary/10" },
            { name: "Jeanne L.", time: "14:30", dest: "Chimio", status: "Individuel", statusColor: "text-gray-500 bg-gray-100" },
          ].map((p, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-t border-gray-100 first:border-0">
              <div className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold text-primary">{p.name.split(" ").map(n => n[0]).join("")}</span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-dark">{p.name}</div>
                <div className="text-[10px] text-gray-400 flex items-center gap-1">
                  <Clock className="w-2.5 h-2.5" /> {p.time} — {p.dest}
                </div>
              </div>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${p.statusColor}`}>
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
