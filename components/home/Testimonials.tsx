import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    name: "Marie D.",
    role: "Patiente ALD — Dialyse 3x/semaine",
    quote: "Mon taxi est confirmé pour 3 mois, je n'ai plus à y penser ! Avant, je passais des heures au téléphone chaque semaine.",
    rating: 5,
    image: "/images/avatar-marie.jpg",
  },
  {
    name: "Karim B.",
    role: "Taxi conventionné CPAM — Île-de-France",
    quote: "3 courses qui s'enchaînent parfaitement, zéro temps mort. Mon CA a augmenté de 30% depuis que j'utilise MediTrajet.",
    rating: 5,
    image: "/images/avatar-karim.jpg",
  },
  {
    name: "Sophie M.",
    role: "Secrétaire — Centre de dialyse",
    quote: "Je réserve pour mes 10 patients du matin en 5 minutes. Avant, ça me prenait toute la matinée au téléphone.",
    rating: 5,
    image: "/images/avatar-sophie.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Témoignages"
          title="Ils nous font confiance"
          description="Patients, transporteurs et professionnels de santé partagent leur expérience."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
