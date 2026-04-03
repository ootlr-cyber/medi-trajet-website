import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import { Star, Quote, TrendingUp, Clock, Percent } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Secrétaire, Centre de dialyse",
    quote: "Je programme les transports de mes 80 patients en 15 minutes. Avant, ça me prenait toute la matinée au téléphone. Notre taux de transport partagé est passé de 15% à 45%.",
    image: "/images/avatar-sophie.jpg",
    stat: { icon: Percent, value: "45%", label: "taux de partage" },
  },
  {
    name: "Dr. Martin L.",
    role: "Directeur, Centre de dialyse, IDF",
    quote: "MediTrajet nous a permis d’atteindre nos objectifs de transport partagé en 3 mois. Le reporting ARS est automatique. On a réduit nos coûts transport de 25%.",
    image: "/images/avatar-doctor.jpg",
    stat: { icon: TrendingUp, value: "-25%", label: "coûts transport" },
  },
  {
    name: "Marie D.",
    role: "Patiente ALD, Dialyse 3x/semaine",
    quote: "Mon centre a tout organisé via MediTrajet. Je reçois juste la notification quand mon taxi arrive. C’est simple et rassurant.",
    image: "/images/avatar-marie-new.jpg",
    stat: { icon: Clock, value: "0 min", label: "d’attente en moyenne" },
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary/5 relative overflow-hidden">
      {/* Motif decoaratif */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Témoignages"
          title="Ils nous font confiance"
          description="Établissements, patients et transporteurs partagent leur expérience."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
              <Quote className="w-10 h-10 text-primary/15 mb-5" />
              <p className="text-gray-600 italic leading-relaxed mb-6 text-[15px]">&ldquo;{t.quote}&rdquo;</p>

              {/* Stat highlight */}
              <div className="bg-primary/5 rounded-xl px-4 py-3 flex items-center gap-3 mb-6 group-hover:bg-primary/8 transition-colors">
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <t.stat.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <div>
                  <span className="text-lg font-bold text-primary">{t.stat.value}</span>
                  <span className="text-xs text-gray-400 ml-1.5">{t.stat.label}</span>
                </div>
              </div>

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
