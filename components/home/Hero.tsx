import Link from "next/link";
import { ArrowRight, MapPin, Clock, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Transport médical conventionné CPAM
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark leading-tight mb-6">
              Votre transport médical,{" "}
              <span className="text-primary">simplifié</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              MediTrajet connecte patients et transporteurs conventionnés CPAM.
              Réservation en 1 clic, suivi GPS temps réel, trajets récurrents
              pour les patients ALD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/patients"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/25"
              >
                Je suis patient
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/transporteurs"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-dark px-7 py-3.5 rounded-xl font-semibold border-2 border-gray-200 hover:border-primary/30 transition-colors"
              >
                Je suis transporteur
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                Suivi GPS temps réel
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-secondary" />
                Matching en &lt;30s
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                100% conventionné CPAM
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-3" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-dark">Course confirmée</div>
                      <div className="text-xs text-gray-400">Karim arrive dans 8 min</div>
                    </div>
                    <div className="ml-auto text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      En route
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-dark">Prochain trajet</div>
                      <div className="text-xs text-gray-400">Dialyse — Lun 14h00</div>
                    </div>
                    <div className="ml-auto text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      Planifié
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-dark">Prise en charge</div>
                      <div className="text-xs text-gray-400">ALD — 100% CPAM</div>
                    </div>
                    <div className="ml-auto text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                      Couvert
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
