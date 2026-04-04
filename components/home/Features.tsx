"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Building2,
  Users,
  BarChart3,
  Smartphone,
  MapPin,
  CalendarDays,
  Brain,
  Bell,
  ArrowRight,
  FileText,
  ScanLine,
  Route,
  CreditCard,
  Share2,
  PenTool,
  Shield,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const tabs = [
  {
    id: "etablissements",
    label: "Établissements",
    icon: Building2,
    href: "/etablissements",
    color: "bg-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    ringColor: "ring-blue-600",
    headline: "Organisez 80 transports en 15 minutes",
    subtitle: "Portail web complet pour votre secrétariat médical",
    features: [
      { icon: Building2, title: "Portail multi-secrétaires", description: "Vue patients du jour, programmation drag & drop, gestion par service (dialyse, radiothérapie, hôpital de jour)." },
      { icon: Users, title: "Matching partagé automatique", description: "L'algorithme regroupe les patients compatibles : même créneau, même zone. Détour max 10 km, attente max 45 min." },
      { icon: BarChart3, title: "Reporting ARS / CPAM", description: "Dashboard taux de partage en temps réel. Rapports conformes exportés automatiquement pour l'ARS." },
    ] as Feature[],
  },
  {
    id: "patients",
    label: "Patients",
    icon: Smartphone,
    href: "/patients",
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    ringColor: "ring-emerald-600",
    headline: "Réservez votre transport en quelques clics",
    subtitle: "Application simple et accessible, pensée pour tous les âges",
    features: [
      { icon: Smartphone, title: "Réservation intuitive", description: "Réservation ponctuelle ou récurrente, gestion des aidants, interface accessible. Pour tous les âges." },
      { icon: MapPin, title: "Suivi GPS temps réel", description: "Position mise à jour toutes les 5 secondes. ETA dynamique et notifications push à chaque étape." },
      { icon: CalendarDays, title: "Trajets récurrents ALD", description: "Programmez vos dialyses pour 1 à 3 mois d'un coup. Plus de réservation hebdomadaire." },
    ] as Feature[],
  },
  {
    id: "transporteurs",
    label: "Transporteurs",
    icon: Brain,
    href: "/transporteurs",
    color: "bg-amber-600",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
    ringColor: "ring-amber-600",
    headline: "+30% de revenus, zéro temps mort",
    subtitle: "Planning, facturation, télétransmission et dispatch — tout dans une seule app",
    features: [
      { icon: CalendarDays, title: "Planning automatisé", description: "Planifiez votre journée sans effort. Création de courses, transport simultané automatique, vue planning centralisée multi-collaborateurs." },
      { icon: Brain, title: "Matching & dispatch", description: "Algorithme par proximité et disponibilité. Suggestions de courses enchaînées. Partagez et assignez des courses entre collègues." },
      { icon: Route, title: "Distancier intégré", description: "Calcul automatique des kilomètres parcourus par course. Tarifs conventionnels CPAM appliqués automatiquement." },
      { icon: FileText, title: "Facturation 606 en 2 clics", description: "Génération automatique des annexes 606 et formulaires Cerfa. Facturation médicale, mutuelle et reste à charge patient." },
      { icon: CreditCard, title: "Télétransmission CPAM", description: "Envoi électronique automatique aux caisses. Suivi des paiements et rejets en temps réel. Réduction de 90% des rejets." },
      { icon: ScanLine, title: "Scan Vitale & PEC+", description: "Scan carte Vitale et prescriptions (PMT/BS). Création automatique des fiches patients avec droits à jour via PEC+." },
      { icon: PenTool, title: "Signature électronique", description: "Validation numérique des transports. Scan et archivage de documents directement dans l'app. Archivage illimité HDS." },
      { icon: Share2, title: "Réseau & partage de courses", description: "Échangez des courses entre indépendants. Intégration WhatsApp/SMS pour déléguer même à des non-utilisateurs." },
      { icon: Shield, title: "Multi-agréments", description: "Support de plusieurs conventions et agréments simultanés. Gestion multi-départements pour les opérateurs multi-zones." },
    ] as Feature[],
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Fonctionnalités"
          title="Une plateforme, trois expériences"
          description="Établissements, patients et transporteurs : chacun a les outils adaptés à son rôle."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === i
                    ? `bg-white shadow-md ${t.textColor}`
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <t.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-50 rounded-3xl p-6 sm:p-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{tab.headline}</h3>
            <p className="text-gray-500">{tab.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {tab.features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className={`w-12 h-12 ${tab.lightColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-6 h-6 ${tab.textColor}`} />
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href={tab.href}
              className={`inline-flex items-center gap-2 ${tab.textColor} font-semibold text-sm hover:gap-3 transition-all`}
            >
              En savoir plus <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
