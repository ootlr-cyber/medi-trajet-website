import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import {
  Smartphone,
  Truck,
  Brain,
  FileCheck,
  MapPin,
  Bell,
  CalendarDays,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "App Patient intuitive",
    description: "Réservation ponctuelle ou récurrente, suivi GPS temps réel, gestion des aidants. Conçue pour tous les âges.",
    color: "primary" as const,
  },
  {
    icon: Truck,
    title: "App Transporteur complète",
    description: "Planning intelligent, acceptation de courses, carte temps réel, historique des revenus et optimisation des tournées.",
    color: "secondary" as const,
  },
  {
    icon: Brain,
    title: "Matching intelligent",
    description: "Algorithme qui trie par proximité, disponibilité, équipements PMR et note moyenne. Résultat en <30 secondes.",
    color: "accent" as const,
  },
  {
    icon: FileCheck,
    title: "Facturation simplifiée",
    description: "Compatible avec le processus CPAM existant. Estimation de prise en charge avant la course (ALD, CSS).",
    color: "primary" as const,
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
    description: "Programmez vos trajets dialyse pour 1 à 3 mois en une seule fois. Plus besoin de réserver chaque semaine.",
    color: "accent" as const,
  },
  {
    icon: Users,
    title: "Gestion des aidants",
    description: "Ajoutez vos proches comme aidants. Ils peuvent réserver et suivre vos trajets à distance, en toute sérénité.",
    color: "primary" as const,
  },
  {
    icon: Bell,
    title: "Notifications intelligentes",
    description: "Confirmation, en route, arrivée imminente, terminé. Alertes retard et anomalies pour patients et aidants.",
    color: "secondary" as const,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Fonctionnalités"
          title="Tout ce dont vous avez besoin"
          description="Une plateforme complète pour patients, transporteurs et secrétariats médicaux."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
