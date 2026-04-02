import SectionHeader from "@/components/ui/SectionHeader";
import StepCard from "@/components/ui/StepCard";
import { ClipboardList, Users, Navigation, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Programmation",
    description: "Le secrétariat programme les transports du jour depuis le portail web MediTrajet.",
  },
  {
    icon: Users,
    title: "Matching partagé",
    description: "L’algorithme regroupe automatiquement les patients compatibles dans un même véhicule.",
  },
  {
    icon: Navigation,
    title: "Suivi temps réel",
    description: "Patient, aidants et établissement suivent le transporteur sur la carte avec ETA dynamique.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Dashboard avec taux de partage en temps réel et rapports exportés pour l’ARS et la CPAM.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Comment ça marche"
          title="Du secrétariat au reporting, tout est automatisé"
          description="MediTrajet coordonne l’établissement, le patient et le transporteur en une seule plateforme."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <StepCard
              key={i}
              number={i + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={i === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
