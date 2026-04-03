"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    etablissement: "",
    role: "directeur",
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

      if (!res.ok) throw new Error("Erreur serveur");
      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Réessayez ou contactez-nous à contact@meditrajet.fr");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Demande envoyée !</h3>
        <p className="text-gray-500 text-sm">
          Nous vous recontacterons <strong>sous 24h</strong> pour planifier votre démo personnalisée.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="demo-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Nom complet *
          </label>
          <input
            type="text"
            id="demo-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="demo-email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email professionnel *
          </label>
          <input
            type="email"
            id="demo-email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
            placeholder="vous@etablissement.fr"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="demo-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Téléphone
          </label>
          <input
            type="tel"
            id="demo-phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
            placeholder="06 12 34 56 78"
          />
        </div>
        <div>
          <label htmlFor="demo-etablissement" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Établissement *
          </label>
          <input
            type="text"
            id="demo-etablissement"
            required
            value={formData.etablissement}
            onChange={(e) => setFormData({ ...formData, etablissement: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900"
            placeholder="CHU, clinique, centre..."
          />
        </div>
      </div>

      <div>
        <label htmlFor="demo-role" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Votre fonction
        </label>
        <select
          id="demo-role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 bg-white"
        >
          <option value="directeur">Directeur / gestionnaire</option>
          <option value="secretariat">Secrétariat médical</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="demo-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Message (optionnel)
        </label>
        <textarea
          id="demo-message"
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none text-gray-900"
          placeholder="Volume de patients, besoins spécifiques..."
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={rgpd}
          onChange={(e) => setRgpd(e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <span className="text-xs text-gray-500">
          J&apos;accepte que mes données soient traitées par MediTrajet pour répondre à ma demande,
          conformément à notre <a href="/politique-de-confidentialite" className="underline text-blue-600">politique de confidentialité</a>.
        </span>
      </label>

      {error && (
        <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white py-3.5 rounded-xl font-semibold transition-colors shadow-lg"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Demander ma démo gratuite
          </>
        )}
      </button>
    </form>
  );
}
