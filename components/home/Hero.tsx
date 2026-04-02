import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Heart, Truck, ShieldCheck, Scale } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              Conforme décret février 2025 — Transport partagé
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-dark leading-tight mb-6">
              Le transport médical partagé,{" "}
              <span className="text-primary">intelligent</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              MediTrajet aide les établissements de santé à atteindre 50% de transport
              partagé — l’objectif imposé par l’État d’ici 2026. Un portail
              pour le secrétariat, une app pour le patient, une app pour le transporteur.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/etablissements"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/25"
              >
                <Building2 className="w-5 h-5" />
                Établissements de santé
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/patients"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-dark px-6 py-3.5 rounded-xl font-semibold border-2 border-gray-200 hover:border-primary/30 transition-colors text-sm"
              >
                <Heart className="w-4 h-4 text-primary" />
                Patients
              </Link>
              <Link
                href="/transporteurs"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-dark px-6 py-3.5 rounded-xl font-semibold border-2 border-gray-200 hover:border-secondary/30 transition-colors text-sm"
              >
                <Truck className="w-4 h-4 text-secondary" />
                Transporteurs
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-secondary" />
                Décret 2025 conforme
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-secondary" />
                Portail établissement
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-secondary" />
                RGPD &amp; HDS
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl rotate-3" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-patient.jpg"
                  alt="Plateforme de transport médical partagé"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 z-10">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-dark">Taux de partage</div>
                  <div className="text-xs text-gray-400">47% — Objectif 50% atteint</div>
                </div>
                <div className="ml-2 text-xs font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                  +28%
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 z-10">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary">Décret 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
