import { ShieldCheck, Building2, Lock, Scale, Rocket } from "lucide-react";

const conformity = [
  { icon: ShieldCheck, label: "Conventionné CPAM", sublabel: "Transporteurs agréés" },
  { icon: Lock, label: "Conforme RGPD", sublabel: "Données protégées" },
  { icon: Building2, label: "Hébergement HDS", sublabel: "Données de santé" },
  { icon: Scale, label: "Décret 2025", sublabel: "Transport partagé" },
];

export default function TrustBar() {
  return (
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conformité */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
          {conformity.map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs font-bold text-dark leading-tight">{item.label}</div>
                <div className="text-[10px] text-gray-400">{item.sublabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* French Tech + BPI */}
        <div className="flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-10 h-10">
                <circle cx="50" cy="50" r="45" fill="#EF4135" />
                <path d="M35 65 L50 30 L65 65 Z" fill="white" />
                <rect x="44" y="28" width="12" height="6" rx="2" fill="white" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-dark leading-tight">La French Tech</div>
              <div className="text-[10px] text-primary font-semibold">Candidature en cours</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-5 py-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 120 40" className="w-16 h-8">
                <rect width="120" height="40" rx="6" fill="#1A1F71" />
                <text x="10" y="27" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="white">Bpi</text>
                <text x="42" y="27" fontFamily="Arial" fontWeight="bold" fontSize="16" fill="#E84E1B">france</text>
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold text-dark leading-tight">Bpifrance</div>
              <div className="text-[10px] text-primary font-semibold">Bourse French Tech — Candidature en cours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
