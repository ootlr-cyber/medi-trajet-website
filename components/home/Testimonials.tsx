import SectionHeader from "@/components/ui/SectionHeader";
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Secrétaire — Centre de dialyse",
    quote: "Je programme les transports de mes 80 patients en 15 minutes. Avant, ça me prenait toute la matinée au téléphone. Notre taux de transport partagé est passé de 15% à 45%.",
    rating: 5,
    image: "/images/avatar-sophie.jpg",
  },
  {
    name: "Dr. Martin L.",
    role: "Directeur — Centre de dialyse, IDF",
    quote: "MediTrajet nous a permis d’atteindre nos objectifs de transport partagé en 3 mois. Le reporting ARS est automatique. On a réduit nos coûts transport de 25%.",
    rating: 5,
    image: "/images/avatar-karim.jpg",
  },
  {
    name: "Marie D.",
    role: "Patiente ALD — Dialyse 3x/semaine",
    quote: "Mon centre a tout organisé via MediTrajet. Je reçois juste la notification quand mon taxi arrive. C’est simple et rassurant.",
    rating: 5,
    image: "/images/avatar-marie.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Témoignages"
          title="Ils nous font confiance"
          description="Établissements, patients et transporteurs partagent leur expérience."
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
