import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
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

const features = [
  {
    icon: Building2,
    title: "Portail établissement",
    description: "Vue des patients du jour, programmation des transports, gestion multi-secrétaires et multi-services depuis un portail web.",
    color: "primary" as const,
  },
  {
    icon: Users,
    title: "Transport partagé intelligent",
    description: "Algorithme de regroupement automatique des patients compatibles. Détour max 10 km, attente max 45 min (conforme décret 2025).",
    color: "primary" as const,
  },
  {
    icon: BarChart3,
    title: "Reporting ARS / CPAM",
    description: "Dashboard taux de partage en temps réel. Rapports exportés pour justifier vos objectifs auprès de l’ARS.",
    color: "primary" as const,
  },
  {
    icon: Smartphone,
    title: "App Patient intuitive",
    description: "Réservation ponctuelle ou récurrente, suivi GPS temps réel, gestion des aidants. Conçue pour tous les âges.",
    color: "secondary" as const,
  },
  {
    icon: MapPin,
    title: "Suivi GPS temps réel",
    description: "Position du transporteur mise à jour toutes les 5 secondes. ETA dynamique et notifications push à chaque étape.",
    color: "secondary" as const,
  },
  {
    icon: CalendarDays,
    title: "Trajets récurrents ALD",
    description: "Programmez les dialyses pour 1 à 3 mois en une seule fois. Plus besoin de réserver chaque semaine.",
    color: "secondary" as const,
  },
  {
    icon: Brain,
    title: "Matching & optimisation",
    description: "Algorithme qui trie par proximité, disponibilité, équipements PMR et note. Suggestions de courses enchaînées.",
    color: "accent" as const,
  },
  {
    icon: Bell,
    title: "Notifications multi-acteurs",
    description: "Patient, aidants, secrétariat et transporteur notifiés à chaque étape. Alertes retard et anomalies automatiques.",
    color: "accent" as const,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Fonctionnalités"
          title="Une plateforme, trois expériences"
          description="Établissements, patients et transporteurs — chacun a les outils adaptés à son rôle."
        />

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Établissements</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {features.slice(0, 3).map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-secondary rounded-full" />
            <span className="text-sm font-semibold text-secondary uppercase tracking-wide">Patients</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {features.slice(3, 6).map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-accent rounded-full" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Transporteurs</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {features.slice(6, 8).map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
