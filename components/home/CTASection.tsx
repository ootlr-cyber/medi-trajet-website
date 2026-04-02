import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
          <Smartphone className="w-4 h-4" />
          Disponible sur iOS et Android
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Prêt à simplifier vos transports médicaux ?
        </h2>
        <p className="text-lg text-primary-light/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Rejoignez MediTrajet et découvrez une nouvelle façon de gérer vos
          transports médicaux conventionnés. Inscription gratuite.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/patients"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
          >
            Je suis patient
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/transporteurs"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold border border-white/20 transition-colors"
          >
            Je suis transporteur
          </Link>
        </div>
      </div>
    </section>
  );
}
