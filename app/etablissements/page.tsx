import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import TrustBar from "@/components/home/TrustBar";
import DemoForm from "./DemoForm";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Users,
  BarChart3,
  ClipboardList,
  ShieldCheck,
  Scale,
  Target,
  Clock,
  CheckCircle,
  Zap,
  TrendingUp,
  FileCheck,
  Heart,
  Search,
  Calendar,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Établissements de santé",
  description: "Atteignez 50% de transport partagé (décret 2025). Portail de gestion, matching automatique, reporting ARS/CPAM. Démo gratuite.",
  alternates: { canonical: "/etablissements" },
};

const features = [
  { icon: Zap, title: "Génération auto des courses", description: "Fini la saisie manuelle. Indiquez le besoin (ex : dialyse 3x/semaine) et le système génère automatiquement toutes les courses. Récurrences, modifications, annulations : tout est géré.", color: "secondary" as const },
  { icon: FileCheck, title: "Prescriptions & bons de transport", description: "Importez ou scannez les prescriptions médicales. Extraction automatique des infos patient, trajet et fréquence. Alertes avant expiration.", color: "primary" as const },
  { icon: Users, title: "Portefeuille patients", description: "Fiche patient complète : historique des transports, besoins spécifiques (fauteuil, brancardage, oxygène). Gestion des aidants désignés pour recevoir les notifications.", color: "primary" as const },
  { icon: Calendar, title: "Planning & vue agenda", description: "Vue agenda par patient ou par service. Programmez les transports de tous vos patients depuis un seul portail. Vue liste et calendrier.", color: "primary" as const },
  { icon: MessageSquare, title: "Communication & notifications", description: "Messagerie interne avec les transporteurs. Notifications automatiques aux patients : rappel J-1, heure d’arrivée du véhicule, alertes retard.", color: "primary" as const },
  { icon: BarChart3, title: "Reporting & statistiques", description: "Stats par patient (transports, coût, remboursements) et par service (volume, transporteurs). Export rapports ARS/CPAM.", color: "primary" as const },
];

const regulation = [
  { label: "Taux de partage imposé", value: "50%+", sublabel: "d’ici fin 2026" },
  { label: "Économies visées", value: "300M€", sublabel: "sur 2025-2027" },
  { label: "CHU équipés en plateforme", value: "32", sublabel: "d’ici fin 2026" },
  { label: "Économie par trajet partagé", value: "-15 à -35%", sublabel: "vs trajet individuel" },
];

const journeySteps = [
  { icon: Search, label: "Découverte", text: "Votre établissement découvre MediTrajet (démo, recommandation, contact ANAP)" },
  { icon: Calendar, label: "Configuration", text: "On configure vos services, patients, horaires de soins et transporteurs partenaires" },
  { icon: FileCheck, label: "Import prescriptions", text: "Sophie scanne les prescriptions de ses 80 patients. Les infos sont extraites automatiquement" },
  { icon: Zap, label: "Génération auto", text: "Elle indique : M. Dupont fait 3 dialyses/semaine. Le système génère toutes les courses du mois automatiquement" },
  { icon: BarChart3, label: "Résultat", text: "80 transports programmés en 15 min, reporting ARS automatique, zéro appel téléphonique" },
];

const segments = [
  { icon: Heart, name: "Centres de dialyse", count: "~300 en France", detail: "3 séances/semaine par patient. Volume récurrent maximal." },
  { icon: Zap, name: "Centres de radiothérapie", count: "~200 en France", detail: "Séances quotidiennes sur 5-7 semaines. Très prévisible." },
  { icon: Building2, name: "Hôpitaux de jour", count: "~500 en France", detail: "Chimio ambulatoire, volume croissant." },
  { icon: Target, name: "CHU (obligation plateforme)", count: "32 CHU", detail: "Doivent s’équiper d’une plateforme d’ici fin 2026." },
];

export default function EtablissementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
                <Building2 className="w-4 h-4" />
                Pour les établissements de santé
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-6 leading-tight">
                Organisez <span className="text-primary">80 transports en 15 minutes</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed mb-8">
                Votre secrétariat passe des heures au téléphone pour organiser les transports.
                MediTrajet remplace le téléphone par un portail web : programmez, regroupez
                les patients automatiquement, suivez tout en temps réel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/25"
                >
                  Demander une démo gratuite
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#fonctionnalites"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-dark px-8 py-4 rounded-xl font-semibold border-2 border-gray-200 transition-colors"
                >
                  Voir les fonctionnalités
                </a>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-etablissement.jpg"
                  alt="Plateforme de gestion du transport médical partagé pour établissements"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Regulation Context */}
      <section className="py-16 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-primary-light text-sm font-semibold uppercase tracking-wider">Pourquoi agir maintenant</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Le transport partagé devient obligatoire</h2>
            <p className="text-gray-400 mt-2">Décret février 2025 : objectif 50% de transport partagé d’ici 2026</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {regulation.map((r, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary-light mb-1">{r.value}</div>
                <div className="text-white font-semibold text-sm">{r.label}</div>
                <div className="text-gray-500 text-xs mt-1">{r.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="fonctionnalites" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Fonctionnalités"
            title="Un portail complet pour votre secrétariat"
            description="Tout ce dont votre établissement a besoin pour organiser le transport partagé."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Retour sur investissement"
            title="Des économies mesurables dès le premier mois"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
              <div className="text-4xl font-bold text-primary mb-2">-25%</div>
              <div className="font-semibold text-dark mb-1">Coûts transport</div>
              <p className="text-sm text-gray-500">Grâce au regroupement automatique des patients</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
              <div className="text-4xl font-bold text-secondary mb-2">-80%</div>
              <div className="font-semibold text-dark mb-1">Temps secrétariat</div>
              <p className="text-sm text-gray-500">15 min vs une matinée entière au téléphone</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
              <div className="text-4xl font-bold text-accent mb-2">45%+</div>
              <div className="font-semibold text-dark mb-1">Taux de partage</div>
              <p className="text-sm text-gray-500">Objectif 50% atteignable dès les 3 premiers mois</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Le parcours de Sophie"
            title="Du téléphone au portail intelligent"
            description="Sophie, secrétaire en centre de dialyse, gère 80 patients. Voici comment MediTrajet a transformé son quotidien."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {journeySteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-primary">{step.label}</span>
                  <p className="text-sm text-gray-600 mt-1">{step.text}</p>
                </div>
                <CheckCircle className={`w-5 h-5 shrink-0 mt-2 ${i === journeySteps.length - 1 ? "text-secondary" : "text-secondary/30"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Pour qui ?"
            title="Des établissements avec des besoins récurrents"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {segments.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{s.name}</h3>
                    <div className="text-xs font-semibold text-primary mb-2">{s.count}</div>
                    <p className="text-sm text-gray-500">{s.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section id="demo" className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Demandez votre démo gratuite
              </h2>
              <p className="text-blue-100/80 mb-8 text-lg">
                15 minutes pour découvrir comment MediTrajet peut simplifier vos transports. Sans engagement.
              </p>
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                  Démo personnalisée à votre établissement
                </li>
                <li className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                  Déployable en 2 semaines
                </li>
                <li className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                  Pilote gratuit pour les 10 premiers établissements
                </li>
                <li className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-300 shrink-0" />
                  Réponse sous 24h
                </li>
              </ul>
            </div>
            <DemoForm />
          </div>
        </div>
      </section>
    </>
  );
}
