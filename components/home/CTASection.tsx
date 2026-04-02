import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import AppMockup from "@/components/ui/AppMockup";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Vague de transition */}
      <div className="w-full">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[60px] lg:h-[80px]">
          <path d="M0,40 C480,80 960,0 1440,40 L1440,80 L0,80 Z" className="fill-[#1E3A8A]" />
        </svg>
      </div>

      <div className="gradient-hero py-20 lg:py-28">
        {/* Formes décoratives */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-white/5 rounded-full translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/15 text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-6 border border-white/20">
                <Building2 className="w-4 h-4 text-secondary-light" />
                Objectif 50% transport partagé
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Votre établissement doit atteindre 50% ?
              </h2>
              <p className="text-lg text-blue-100/70 mb-8 leading-relaxed">
                MediTrajet est la plateforme qui rend le transport partagé opérationnel.
                Démo gratuite, déployable en 2 semaines.
              </p>
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
