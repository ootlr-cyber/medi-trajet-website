"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import {
  Target,
  Layers,
  ShieldCheck,
  HeartHandshake,
  Ambulance,
  Users,
  Building,
  TrendingUp,
  Send,
  Mail,
  Lock,
  Server,
  Scale,
} from "lucide-react";
import { useState } from "react";

const differentiators = [
  { icon: Layers, title: "Multi-transporteur", description: "Seule app regroupant taxi, VSL et ambulance conventionnés dans une seule interface." },
  { icon: Target, title: "Récurrence native", description: "Conçu pour les trajets réguliers ALD, le coeur de cible du transport médical." },
  { icon: HeartHandshake, title: "Double valeur", description: "Réduit l'attente patient ET les temps morts transporteur. Tout le monde y gagne." },
  { icon: Building, title: "Portail pro", description: "Les secrétariats médicaux deviennent un canal d'acquisition B2B2C." },
  { icon: Ambulance, title: "Adapté au système existant", description: "Compatible avec les outils des transporteurs. Pas de certification CNDA requise pour le MVP." },
  { icon: ShieldCheck, title: "Sécurité maximale", description: "Chiffrement AES-256, TLS 1.3, conforme RGPD. Hébergement HDS recommandé." },
];

const objectives = [
  { period: "3 mois", patients: "100", transporteurs: "30", courses: "500/mois", secretariats: "3" },
  { period: "6 mois", patients: "500", transporteurs: "100", courses: "2 000/mois", secretariats: "10" },
  { period: "12 mois", patients: "2 000", transporteurs: "400", courses: "10 000/mois", secretariats: "50" },
];

const securityItems = [
  { icon: Lock, title: "Chiffrement", description: "AES-256 au repos, TLS 1.3 en transit. Toutes les données sensibles sont chiffrées." },
  { icon: ShieldCheck, title: "Conformité RGPD", description: "Consentement explicite, minimisation des données, droits d'accès et suppression." },
  { icon: Server, title: "Hébergement HDS", description: "Hébergeur de Données de Santé recommandé pour les données médicales." },
  { icon: Scale, title: "Audit & traçabilité", description: "Journalisation de toutes les actions critiques. Protection contre les failles OWASP." },
];

export default function AProposPage() {
  const [formData, setFormData] = useState({ name: "", email: "", role: "patient", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-6">
                Notre <span className="text-primary">mission</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                MediTrajet est né d&apos;un constat simple : le transport médical conventionné
                est un marché de 7 milliards d&apos;euros, essentiel pour 4,6 millions de patients,
                mais qui reste mal digitalisé. Notre mission est de simplifier la vie
                des patients et d&apos;optimiser l&apos;activité des transporteurs.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-mission.jpg"
                  alt="Équipe collaborant pour améliorer le transport médical"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Ce qui nous distingue"
            title="Pourquoi MediTrajet ?"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <d.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Objectifs"
            title="Notre feuille de route"
            description="Des objectifs ambitieux mais atteignables pour transformer le transport médical."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="text-center mb-6">
                  <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-1.5 rounded-full text-sm">
                    {obj.period}
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-2"><Users className="w-4 h-4" /> Patients</span>
                    <span className="font-bold text-dark">{obj.patients}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-2"><Ambulance className="w-4 h-4" /> Transporteurs</span>
                    <span className="font-bold text-dark">{obj.transporteurs}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-2"><TrendingUp className="w-4 h-4" /> Courses</span>
                    <span className="font-bold text-dark">{obj.courses}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-2"><Building className="w-4 h-4" /> Secrétariats</span>
                    <span className="font-bold text-dark">{obj.secretariats}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Sécurité & conformité"
            title="Vos données sont protégées"
            description="La sécurité des données de santé est au coeur de notre architecture."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {securityItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Contact"
            title="Parlons de votre projet"
            description="Une question ? Un partenariat ? Contactez-nous."
          />

          {submitted ? (
            <div className="bg-secondary/10 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">Message envoyé !</h3>
              <p className="text-gray-500">Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-dark mb-2">Vous êtes</label>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark bg-white"
                >
                  <option value="patient">Patient</option>
                  <option value="transporteur">Transporteur conventionné</option>
                  <option value="secretariat">Secrétariat médical</option>
                  <option value="partenaire">Partenaire / Investisseur</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-dark"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3.5 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/25"
              >
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
