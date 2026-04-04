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
    subtitle: "Remplissez votre planning grâce au matching intelligent",
    features: [
      { icon: Brain, title: "Matching intelligent", description: "Algorithme par proximité, disponibilité, équipements PMR. Suggestions de courses enchaînées pour optimiser vos trajets." },
      { icon: Bell, title: "Notifications instantanées", description: "Patient, aidants, secrétariat et transporteur notifiés à chaque étape. Alertes retard automatiques." },
      { icon: BarChart3, title: "Facturation CPAM intégrée", description: "Télétransmission des factures 606, signature électronique, scan de documents. Gestion multi-conventions." },
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
