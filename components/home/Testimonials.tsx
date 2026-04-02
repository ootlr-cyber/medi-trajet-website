import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Secrétaire — Centre de dialyse",
    quote: "Je programme les transports de mes 80 patients en 15 minutes. Avant, ça me prenait toute la matinée au téléphone. Notre taux de transport partagé est passé de 15% à 45%.",
    image: "/images/avatar-sophie.jpg",
  },
  {
    name: "Dr. Martin L.",
    role: "Directeur — Centre de dialyse, IDF",
    quote: "MediTrajet nous a permis d'atteindre nos objectifs de transport partagé en 3 mois. Le reporting ARS est automatique. On a réduit nos coûts transport de 25%.",
    image: "/images/avatar-karim.jpg",
  },
  {
    name: "Marie D.",
    role: "Patiente ALD — Dialyse 3x/semaine",
    quote: "Mon centre a tout organisé via MediTrajet. Je reçois juste la notification quand mon taxi arrive. C'est simple et rassurant.",
    image: "/images/avatar-marie.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Témoignages"
          title="Ils nous font confiance"
          description="Établissements, patients et transporteurs partagent leur expérience."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <Quote className="w-10 h-10 text-primary/15 mb-5" />
              <p className="text-gray-600 italic leading-relaxed mb-8 text-[15px]">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-primary/20 shrink-0">
                  <Image src={t.image} alt={t.name} width={56} height={56} className="object-cover w-full h-full" />
                </div>
                <div>
                  <div className="font-bold text-dark text-[15px]">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
