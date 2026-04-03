import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import {
  Building2,
  Users,
  BarChart3,
  Smartphone,
  MapPin,
  CalendarDays,
  Brain,
  Bell,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const etablissementFeatures: Feature[] = [
  { icon: Building2, title: "Portail établissement", description: "Vue des patients du jour, programmation des transports, gestion multi-secrétaires depuis un portail web." },
  { icon: Users, title: "Transport partagé intelligent", description: "Regroupement automatique des patients compatibles. Détour max 10 km, attente max 45 min." },
  { icon: BarChart3, title: "Reporting ARS / CPAM", description: "Dashboard taux de partage en temps réel. Rapports exportés pour l’ARS." },
];

const patientFeatures: Feature[] = [
  { icon: Smartphone, title: "App Patient intuitive", description: "Réservation ponctuelle ou récurrente, suivi GPS, gestion des aidants. Pour tous les âges." },
  { icon: MapPin, title: "Suivi GPS temps réel", description: "Position mise à jour toutes les 5 secondes. ETA dynamique et notifications push." },
  { icon: CalendarDays, title: "Trajets récurrents ALD", description: "Programmez vos dialyses pour 1 à 3 mois. Plus de réservation hebdomadaire." },
];

const transporteurFeatures: Feature[] = [
  { icon: Brain, title: "Matching et optimisation", description: "Algorithme par proximité, disponibilité, équipements PMR. Suggestions de courses enchaînées." },
  { icon: Bell, title: "Notifications multi-acteurs", description: "Patient, aidants, secrétariat et transporteur notifiés à chaque étape." },
];

const groups = [
  { label: "Établissements", color: "bg-primary", textColor: "text-primary", iconBg: "bg-primary/10", borderColor: "border-l-primary", features: etablissementFeatures, image: "/images/hero-etablissement.jpg" },
  { label: "Patients", color: "bg-secondary", textColor: "text-secondary", iconBg: "bg-secondary/10", borderColor: "border-l-secondary", features: patientFeatures, image: "/images/hero-patient.jpg" },
  { label: "Transporteurs", color: "bg-accent", textColor: "text-accent", iconBg: "bg-amber-50", borderColor: "border-l-accent", features: transporteurFeatures, image: "/images/hero-transporteur.jpg" },
];

export default function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Fonctionnalités"
          title="Une plateforme, trois expériences"
          description="Établissements, patients et transporteurs : chacun a les outils adaptés à son rôle."
        />

        <div className="space-y-20">
          {groups.map((group, gi) => (
            <div key={gi}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-4 h-4 ${group.color} rounded-full`} />
                <span className={`text-sm font-bold ${group.textColor} uppercase tracking-wider`}>{group.label}</span>
                <div className="flex-1 h-px bg-gray-200 ml-2" />
              </div>

              <div className={`grid lg:grid-cols-${group.features.length + 1} gap-6 items-stretch`}>
                {/* Image du groupe */}
                <div className="relative h-48 lg:h-auto rounded-2xl overflow-hidden shadow-md hidden lg:block">
                  <Image
                    src={group.image}
                    alt={group.label}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent`} />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-white font-bold text-sm bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      {group.label}
                    </span>
                  </div>
                </div>

                {/* Feature cards */}
                {group.features.map((f, i) => (
                  <div key={i} className={`bg-white rounded-2xl p-7 border border-gray-100 border-l-4 ${group.borderColor} hover:shadow-xl hover:-translate-y-0.5 transition-all group/card`}>
                    <div className={`w-14 h-14 ${group.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover/card:scale-110 transition-transform`}>
                      <f.icon className={`w-7 h-7 ${group.textColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-2">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
