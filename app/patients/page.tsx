import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Smartphone,
  MapPin,
  CalendarDays,
  Users,
  Bell,
  Clock,
  Shield,
  FileCheck,
  Heart,
  Search,
  CheckCircle,
  Star,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patients — MediTrajet",
  description: "Réservez vos transports médicaux en 1 clic. Suivi GPS, trajets récurrents ALD, gestion des aidants.",
};

const features = [
  { icon: Smartphone, title: "Réservation 1-clic", description: "Sélectionnez vos adresses favorites, choisissez date et heure. Votre transport est réservé en quelques secondes.", color: "primary" as const },
  { icon: CalendarDays, title: "Trajets récurrents ALD", description: "Programmez vos dialyses ou traitements pour 1 à 3 mois. Plus besoin de réserver chaque semaine.", color: "secondary" as const },
  { icon: MapPin, title: "Suivi GPS temps réel", description: "Voyez votre transporteur sur la carte, avec un temps d'arrivée estimé mis à jour en continu.", color: "primary" as const },
  { icon: Users, title: "Gestion des aidants", description: "Ajoutez vos proches. Ils peuvent réserver et suivre vos trajets à distance, en toute sérénité.", color: "secondary" as const },
  { icon: Bell, title: "Notifications push", description: "Confirmation, en route, arrivée imminente, terminé. Informé à chaque étape sans ouvrir l'app.", color: "accent" as const },
  { icon: Shield, title: "100% conventionné CPAM", description: "Tous nos transporteurs sont conventionnés. Estimation de prise en charge avant chaque course.", color: "primary" as const },
];

const journeySteps = [
  { icon: Search, label: "Découverte", text: "Votre secrétaire ou un proche vous montre l'app MediTrajet" },
  { icon: Smartphone, label: "Inscription", text: "Créez votre compte, ajoutez vos besoins PMR et vos aidants" },
  { icon: CalendarDays, label: "Réservation", text: "Programmez vos 12 trajets dialyse du mois en 2 minutes" },
  { icon: CheckCircle, label: "Confirmation", text: "Recevez le nom et la photo de votre transporteur" },
  { icon: MapPin, label: "Jour J", text: "Notification « Karim arrive dans 10 min » + suivi GPS" },
  { icon: Star, label: "Fidélisation", text: "Notez votre transporteur et demandez-le comme favori" },
];

const faqs = [
  { q: "Comment fonctionne le remboursement CPAM ?", a: "Le transport médical est pris en charge par l'Assurance Maladie sur prescription médicale. Si vous êtes en ALD (Affection Longue Durée) ou bénéficiez de la CSS (Complémentaire Santé Solidaire), la prise en charge est de 100%. MediTrajet vous indique votre taux de prise en charge estimé avant chaque course." },
  { q: "Quels types de transport sont disponibles ?", a: "MediTrajet regroupe taxis conventionnés, VSL (Véhicules Sanitaires Légers) et ambulances dans une seule application. Vous choisissez le type de transport adapté à votre prescription médicale." },
  { q: "Comment ajouter un aidant ?", a: "Depuis votre profil, ajoutez un aidant via son email. Il recevra une invitation et pourra ensuite réserver et suivre vos trajets à distance. Vous pouvez retirer un aidant à tout moment." },
  { q: "Puis-je annuler un trajet ?", a: "Oui, vous pouvez annuler à tout moment un trajet non commencé. Un avertissement s'affiche si l'annulation est faite moins de 2h avant le départ. Le transporteur est notifié immédiatement." },
  { q: "L'app est-elle adaptée aux seniors ?", a: "Absolument. MediTrajet est conçue pour être accessible à tous : texte lisible, navigation simplifiée, taille de police ajustable et contraste élevé. Conforme WCAG AA." },
];

export default function PatientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                <Heart className="w-4 h-4" />
                Espace Patients
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-6">
                Votre transport médical, <span className="text-primary">en toute sérénité</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Plus besoin de chercher un taxi conventionné ni de rappeler chaque semaine.
                MediTrajet organise vos transports médicaux avec un suivi GPS temps réel
                et des notifications à chaque étape.
              </p>
              <Link
                href="/a-propos#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/25"
              >
                Commencer gratuitement
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-patients-page.jpg"
                  alt="Patient accompagné pour son transport médical"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Le parcours de Marie"
            title="De la découverte à la sérénité"
            description="Marie, 68 ans, dialysée 3 fois par semaine. Voici comment MediTrajet a changé son quotidien."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {journeySteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary mb-1">{step.label}</div>
                  <p className="text-sm text-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-semibold px-5 py-2.5 rounded-full text-sm">
              <CheckCircle className="w-4 h-4" />
              &ldquo;Mon taxi est confirmé pour 3 mois, je n&apos;ai plus à y penser !&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Fonctionnalités"
            title="Tout est pensé pour vous"
            description="Une application conçue pour simplifier la vie des patients et de leurs aidants."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="FAQ"
            title="Questions fréquentes"
            description="Tout ce que vous devez savoir sur MediTrajet."
          />
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl border border-gray-100">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-dark hover:text-primary transition-colors">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à simplifier vos trajets médicaux ?
          </h2>
          <p className="text-primary-light/80 mb-8">
            Inscription gratuite. Commencez à réserver en quelques minutes.
          </p>
          <Link
            href="/a-propos#contact"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg"
          >
            Commencer maintenant
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
