import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import AppMockup from "@/components/ui/AppMockup";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[60px] lg:h-[80px]">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" className="fill-[#0F3D2E]" />
        </svg>
      </div>

      <div className="gradient-cta py-20 lg:py-28">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Prêt à simplifier vos transports ?
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Démo gratuite en 15 minutes. Déployable en 2 semaines.
                Vos secrétaires vous remercieront.
              </p>

              <ul className="space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0">
                <li className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                  Programmation des transports en quelques clics
                </li>
                <li className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                  Suivi GPS en temps réel pour patients et aidants
                </li>
                <li className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                  Reporting ARS automatique, sans ressaisie
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/etablissements#demo"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-2xl font-bold transition-all shadow-xl text-lg"
                >
                  Demander une démo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/patients"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 transition-all"
                >
                  Je suis patient
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <AppMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
