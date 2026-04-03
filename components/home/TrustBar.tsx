import { ShieldCheck, Building2, Lock, Scale } from "lucide-react";

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

      </div>
    </section>
  );
}
