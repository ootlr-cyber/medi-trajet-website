import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Truck,
  Map,
  Calendar,
  Brain,
  TrendingUp,
  BarChart3,
  Clock,
  Users,
  CheckCircle,
  Zap,
  Target,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Transporteurs — MediTrajet",
  description: "Optimisez votre activité de transport médical conventionné. +30% de CA, zéro temps mort, courses optimisées.",
};

const advantages = [
  { value: "+30%", label: "Chiffre d\u2019affaires", description: "Flux stabilis\u00e9 gr\u00e2ce aux \u00e9tablissements partenaires + optimisation des tourn\u00e9es" },
  { value: "0", label: "Temps mort", description: "Courses group\u00e9es (transport partag\u00e9) et encha\u00een\u00e9es gr\u00e2ce au matching intelligent" },
  { value: "<30s", label: "Matching", description: "Recevez des propositions adapt\u00e9es \u00e0 votre profil, zone et \u00e9quipements PMR" },
];

const features = [
  { icon: Map, title: "Carte temps réel", description: "Visualisez les patients en attente dans votre zone de couverture. Filtrez par type de transport et besoins PMR.", color: "primary" as const },
  { icon: Calendar, title: "Planning intelligent", description: "Gérez vos disponibilités, voyez vos courses en vue liste ou calendrier. Organisez votre journée efficacement.", color: "secondary" as const },
  { icon: Brain, title: "Suggestions IA", description: "L'algorithme vous propose des courses qui s'enchaînent bien, réduisant les trajets à vide et maximisant vos revenus.", color: "accent" as const },
  { icon: BarChart3, title: "Historique & revenus", description: "Consultez vos statistiques, revenus par période et exportez en CSV. Suivez votre rentabilité en temps réel.", color: "primary" as const },
  { icon: Users, title: "Profil complet", description: "Photo, équipements PMR, zone de couverture, note moyenne. Les patients voient vos capacités et votre fiabilité.", color: "secondary" as const },
  { icon: Zap, title: "Courses group\u00e9es (partag\u00e9)", description: "Recevez des courses avec 2+ patients regroup\u00e9s par l\u2019algo. Plus de volume, moins de trajets \u00e0 vide.", color: "accent" as const },
];

const journeySteps = [
  { icon: Users, label: "Inscription", text: "Créez votre profil, ajoutez vos équipements PMR et votre zone de couverture" },
  { icon: Calendar, label: "Configuration", text: "Définissez vos plages de disponibilité et indisponibilités" },
  { icon: Target, label: "Première course", text: "Voyez les patients en attente dans votre zone, acceptez une course" },
  { icon: Brain, label: "Optimisation", text: "L'app suggère des courses qui s'enchaînent pour optimiser vos journées" },
  { icon: TrendingUp, label: "Résultat", text: "6 courses, 0 temps mort, +30% de CA. Votre activité est transformée" },
];

export default function TransporteursPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/5 via-white to-primary/5 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                <Truck className="w-4 h-4" />
                Espace Transporteurs
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-6">
                Optimisez votre activité, <span className="text-secondary">maximisez vos revenus</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Fini les temps morts et le flux de courses irrégulier. MediTrajet vous
                connecte aux patients de votre zone avec un matching intelligent
                et des suggestions d&apos;optimisation de tournées.
              </p>
              <Link
                href="/a-propos#contact"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-secondary/25"
              >
                Rejoindre MediTrajet
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-transporteur.jpg"
                  alt="Transporteur professionnel conventionné CPAM"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-secondary mb-2">{adv.value}</div>
                <div className="text-dark font-semibold mb-1">{adv.label}</div>
                <p className="text-sm text-gray-400">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Fonctionnalités"
            title="Des outils pensés pour votre métier"
            description="Tout ce dont un transporteur conventionné a besoin pour gérer son activité efficacement."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Le parcours de Karim"
            title="De l'inscription au succès"
            description="Karim, 45 ans, taxi conventionné CPAM depuis 8 ans. 60% de son CA en médical."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {journeySteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-secondary">{step.label}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{step.text}</p>
                </div>
                {i < journeySteps.length - 1 && (
                  <CheckCircle className="w-5 h-5 text-secondary/30 shrink-0 mt-2" />
                )}
                {i === journeySteps.length - 1 && (
                  <Award className="w-5 h-5 text-secondary shrink-0 mt-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Prérequis"
            title="Qui peut rejoindre MediTrajet ?"
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Taxi conventionné CPAM",
              "VSL (Véhicule Sanitaire Léger)",
              "Ambulance conventionnée",
              "SIRET valide",
              "Conventionnement CPAM en cours",
              "Assurance professionnelle à jour",
            ].map((req, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-secondary to-secondary-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à booster votre activité ?
          </h2>
          <p className="text-secondary-light/80 mb-8">
            Inscription gratuite. Commencez à recevoir des courses dès aujourd&apos;hui.
          </p>
          <Link
            href="/a-propos#contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-secondary px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
          >
            S&apos;inscrire maintenant
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
