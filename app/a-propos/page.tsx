"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import Image from "next/image";
import {
  Heart,
  Clock,
  Phone,
  CalendarX,
  Smile,
  ShieldCheck,
  Scale,
  Sparkles,
  Send,
  Mail,
  Building,
  Users,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const constatCards = [
  {
    icon: Clock,
    who: "Patients",
    title: "Des heures d'attente inutiles",
    description:
      "Attendre seul sur un brancard qu'un taxi arrive, enchaîner les retards, ne pas savoir quand on rentre chez soi. Le transport médical est souvent une source de stress supplémentaire pour des patients déjà fragilisés.",
  },
  {
    icon: Phone,
    who: "Secrétariats",
    title: "Des journées passées au téléphone",
    description:
      "Appeler un par un les transporteurs, jongler entre les disponibilités, gérer les annulations de dernière minute. Les secrétariats médicaux perdent un temps précieux qui devrait être consacré aux patients.",
  },
  {
    icon: CalendarX,
    who: "Transporteurs",
    title: "Des plannings pleins de trous",
    description:
      "Des courses mal réparties dans la journée, des retours à vide, des créneaux impossibles à remplir. Les taxis conventionnés et ambulanciers subissent un système qui ne leur permet pas de travailler efficacement.",
  },
];

const valeurs = [
  {
    icon: Smile,
    title: "Simplicité",
    description:
      "Une plateforme intuitive, pensée pour le terrain. Pas besoin de formation : quelques clics suffisent pour organiser un transport.",
  },
  {
    icon: Heart,
    title: "Triple bénéfice",
    description:
      "Chaque acteur y gagne : moins d'attente pour les patients, moins d'appels pour les secrétariats, plus de courses pour les transporteurs.",
  },
  {
    icon: Scale,
    title: "Conformité",
    description:
      "Aligné avec le décret de février 2025 sur le transport partagé. MediTrajet vous aide à atteindre les objectifs réglementaires sans effort.",
  },
  {
    icon: ShieldCheck,
    title: "Confiance & sécurité",
    description:
      "Vos données de santé sont protégées par un chiffrement de bout en bout et hébergées en France, conformément au RGPD.",
  },
];

const stats = [
  { value: "12", label: "Établissements partenaires", icon: Building },
  { value: "3", label: "Acteurs connectés en 1 plateforme", icon: Users },
  { value: "100%", label: "Conforme décret 2025", icon: CheckCircle },
  { value: "France", label: "Hébergement des données", icon: MapPin },
];

export default function AProposPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "patient",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rgpd, setRgpd] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rgpd) {
      setError("Veuillez accepter la politique de confidentialité.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Erreur");
      setSubmitted(true);
    } catch {
      setError(
        "Une erreur est survenue. Réessayez ou contactez-nous à contact@meditrajet.fr"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Notre mission
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-dark mb-6 leading-tight">
                Simplifier le transport médical{" "}
                <span className="text-primary">pour tous</span>
              </h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Chaque jour, des milliers de patients attendent leur transport,
                des secrétariats médicaux passent des heures au téléphone et des
                transporteurs roulent avec des plannings à moitié vides.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed mt-4">
                MediTrajet est né d&apos;un constat simple :{" "}
                <strong className="text-dark">
                  en connectant ces trois acteurs sur une seule plateforme
                </strong>
                , on peut transformer l&apos;expérience de chacun.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-about.jpg"
                  alt="Collaboration pour améliorer le transport médical"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le constat */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Le constat"
            title="Un système qui ne fonctionne plus"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {constatCards.map((card, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {card.who}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre approche */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Notre approche"
            title="La technologie au service de l'humain"
            description="Nous croyons que la technologie doit simplifier la vie des gens, pas la compliquer."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {valeurs.map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
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
              <h3 className="text-xl font-bold text-dark mb-2">
                Message envoyé !
              </h3>
              <p className="text-gray-500">
                Nous vous recontacterons <strong>sous 24h</strong>.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-dark mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark"
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Vous êtes
                </label>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-dark bg-white"
                >
                  <option value="directeur">
                    Directeur / gestionnaire établissement
                  </option>
                  <option value="secretariat">Secrétariat médical</option>
                  <option value="patient">Patient</option>
                  <option value="transporteur">
                    Transporteur conventionné
                  </option>
                  <option value="partenaire">Partenaire / Investisseur</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-dark mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-dark"
                  placeholder="Votre message..."
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rgpd}
                  onChange={(e) => setRgpd(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-xs text-gray-500">
                  J&apos;accepte que mes données soient traitées conformément à
                  la{" "}
                  <a
                    href="/politique-de-confidentialite"
                    className="underline text-primary"
                  >
                    politique de confidentialité
                  </a>
                  .
                </span>
              </label>
              {error && (
                <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark disabled:bg-primary/50 text-white py-3.5 rounded-xl font-semibold transition-colors shadow-lg shadow-primary/25"
              >
                <Send className="w-5 h-5" />
                {loading ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
