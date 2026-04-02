import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Heart, Truck, ShieldCheck } from "lucide-react";

const audiences = [
  {
    href: "/etablissements",
    icon: Building2,
    title: "Établissements de santé",
    desc: "Portail transport partagé, reporting ARS",
    image: "/images/card-etablissement.jpg",
    color: "from-primary/80 to-primary-dark/90",
  },
  {
    href: "/patients",
    icon: Heart,
    title: "Patients",
    desc: "Suivi GPS, notifications, aidants",
    image: "/images/card-patient.jpg",
    color: "from-secondary/80 to-secondary-dark/90",
  },
  {
    href: "/transporteurs",
    icon: Truck,
    title: "Transporteurs",
    desc: "Planning, matching, optimisation",
    image: "/images/card-transporteur.jpg",
    color: "from-gray-700/80 to-gray-900/90",
  },
];

export default function Hero() {
  return (
    <>
      {/* Hero principal — fond dégradé immersif */}
      <section className="relative gradient-hero overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white rounded-full px-5 py-2 text-sm font-semibold mb-8 border border-white/20">
              <ShieldCheck className="w-4 h-4 text-secondary-light" />
              Conforme décret février 2025 — Transport partagé
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Le transport médical
              <br />
              partagé, <span className="text-secondary-light">intelligent</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed mb-10 max-w-2xl mx-auto">
              MediTrajet aide les établissements à atteindre 50% de transport
              partagé — l&apos;objectif imposé par l&apos;État d&apos;ici 2026.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <Link
                href="/etablissements"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-black/10 text-lg"
              >
                Demander une démo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/blog/transport-medical-partage-guide"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 transition-all backdrop-blur-sm"
              >
                Comprendre le décret 2025
              </Link>
            </div>
          </div>
        </div>

        {/* Vague de transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[50px] sm:h-[80px] lg:h-[100px]">
            <path d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,50 1440,40 L1440,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Cartes audience — style AleHop */}
      <section className="relative -mt-6 sm:-mt-10 lg:-mt-16 z-10 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {audiences.map((a, i) => (
              <Link
                key={i}
                href={a.href}
                className="group relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${a.color}`} />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-2 mb-2">
                    <a.icon className="w-5 h-5 text-white/80" />
                    <span className="text-white text-xl font-bold">{a.title}</span>
                  </div>
                  <p className="text-white/70 text-sm">{a.desc}</p>
                  <div className="mt-3 inline-flex items-center gap-1 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Découvrir <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
