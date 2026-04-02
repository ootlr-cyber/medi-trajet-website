import SectionHeader from "@/components/ui/SectionHeader";
import StepCard from "@/components/ui/StepCard";
import { CalendarCheck, Users, Navigation, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Réservation",
    description: "Le patient réserve son trajet en 1 clic depuis l'application mobile.",
  },
  {
    icon: Users,
    title: "Matching",
    description: "Notre algorithme trouve le transporteur le plus adapté en moins de 30 secondes.",
  },
  {
    icon: Navigation,
    title: "Suivi GPS",
    description: "Patient et aidants suivent le transporteur en temps réel sur la carte.",
  },
  {
    icon: CheckCircle,
    title: "Arrivée",
    description: "Le patient est pris en charge. Notifications automatiques à chaque étape.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Comment ça marche"
          title="Simple comme 1, 2, 3, 4"
          description="De la réservation à l'arrivée, tout est automatisé et transparent."
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
