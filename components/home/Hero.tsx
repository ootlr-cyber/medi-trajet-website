import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Heart, Truck, CheckCircle, Star } from "lucide-react";

const audiences = [
  {
    href: "/etablissements#demo",
    icon: Building2,
    title: "Centres de soins",
    desc: "Organisez 80 transports en 15 min",
    cta: "Demander une démo",
    image: "/images/card-etablissement.jpg",
    accent: "bg-blue-600",
    ring: "ring-blue-600/20",
  },
  {
    href: "/patients",
    icon: Heart,
    title: "Patients",
    desc: "Réservez votre taxi en quelques clics",
    cta: "Découvrir",
    image: "/images/card-patient.jpg",
    accent: "bg-emerald-600",
    ring: "ring-emerald-600/20",
  },
  {
    href: "/transporteurs",
    icon: Truck,
    title: "Transporteurs",
    desc: "Remplissez votre planning sans temps morts",
    cta: "Découvrir",
    image: "/images/card-transporteur.jpg",
    accent: "bg-gray-800",
    ring: "ring-gray-800/20",
  },
];

export default function Hero() {
  return (
    <>
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 lg:pt-28 lg:pb-44">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-5 py-2 text-sm font-semibold mb-8 border border-white/20">
              <CheckCircle className="w-4 h-4 text-secondary-light" />
              Pris en charge par l&apos;Assurance Maladie
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Vos transports médicaux,
              <br />
              <span className="text-secondary-light">simplifiés</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              Plus de coups de fil, plus d&apos;attente. MediTrajet organise les transports
              de vos patients en quelques clics, avec suivi en temps réel.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Link
                href="/etablissements#demo"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-black/10 text-lg"
              >
                Demander une démo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/patients"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 transition-all backdrop-blur-sm"
              >
                Je suis patient
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-blue-100/60 text-sm">
                Recommandé par <span className="font-semibold text-white">12 établissements</span> en France
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-20 sm:-mt-24 z-10 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
            {audiences.map((a, i) => (
              <Link
                key={i}
                href={a.href}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ring-1 ${a.ring}`}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-9 h-9 ${a.accent} rounded-lg flex items-center justify-center`}>
                      <a.icon className="w-4.5 h-4.5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{a.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{a.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 group-hover:gap-2 transition-all">
                    {a.cta} <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
