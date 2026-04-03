import type { Metadata } from "next";
import Breadcrumb from "@/components/seo/Breadcrumb";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et de protection des données personnelles du site meditrajet.fr.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: true, follow: true },
};

export default function PolitiqueConfidentialite() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Politique de confidentialité" }]} />

        <h1 className="text-3xl font-extrabold text-dark mb-8">Politique de confidentialité</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles collectées sur le site
              meditrajet.fr est :
            </p>
            <ul className="list-none pl-0 space-y-1 mt-3">
              <li><strong>Outlier Distribution</strong></li>
              <li>Siège social : Bessancourt (95550), France</li>
              <li>Email : <a href="mailto:contact@meditrajet.fr" className="text-primary hover:underline">contact@meditrajet.fr</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">2. Données collectées</h2>
            <p>Dans le cadre de l&apos;utilisation du site, nous pouvons collecter les données suivantes :</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Données d&apos;identification :</strong> nom, prénom, adresse email, numéro de téléphone (formulaires de contact et de demande de démo)</li>
              <li><strong>Données professionnelles :</strong> nom de l&apos;établissement, fonction (pour les professionnels de santé)</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages consultées, durée de visite (via cookies analytiques)</li>
            </ul>
            <p className="mt-3">
              <strong>Données de santé :</strong> le site vitrine meditrajet.fr ne collecte aucune donnée
              de santé. Le traitement de données de santé intervient uniquement dans le cadre de la
              plateforme MediTrajet, soumise à des mesures de sécurité renforcées (hébergement HDS).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">3. Finalités du traitement</h2>
            <p>Les données personnelles collectées sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Répondre aux demandes de contact et de démonstration</li>
              <li>Envoyer des informations relatives à nos services (avec consentement)</li>
              <li>Améliorer l&apos;expérience utilisateur et le fonctionnement du site</li>
              <li>Établir des statistiques de fréquentation anonymisées</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">4. Base légale du traitement</h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Votre consentement</strong> (article 6.1.a du RGPD) pour les cookies analytiques et l&apos;envoi de communications</li>
              <li><strong>L&apos;exécution de mesures précontractuelles</strong> (article 6.1.b) pour les demandes de démonstration</li>
              <li><strong>L&apos;intérêt légitime</strong> (article 6.1.f) pour l&apos;amélioration de nos services et la sécurité du site</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">5. Durée de conservation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
              <li><strong>Données de navigation :</strong> 13 mois maximum (conformément aux recommandations de la CNIL)</li>
              <li><strong>Cookies :</strong> 13 mois maximum</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">6. Destinataires des données</h2>
            <p>
              Vos données personnelles sont traitées exclusivement par les équipes d&apos;Outlier Distribution.
              Elles ne sont ni vendues, ni cédées à des tiers à des fins commerciales.
            </p>
            <p>
              Les sous-traitants techniques suivants peuvent avoir accès à certaines données dans le
              strict cadre de leurs missions :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Vercel Inc.</strong> | hébergement du site</li>
            </ul>
            <p className="mt-3">
              En cas de transfert de données hors de l&apos;Union européenne, des garanties appropriées
              sont mises en place (clauses contractuelles types de la Commission européenne).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">7. Cookies</h2>
            <p>Le site utilise les catégories de cookies suivantes :</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Cookies strictement nécessaires :</strong> indispensables au fonctionnement du site (aucun consentement requis)</li>
              <li><strong>Cookies analytiques :</strong> mesure d&apos;audience anonymisée pour améliorer le site (soumis à consentement)</li>
            </ul>
            <p className="mt-3">
              Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres
              de votre navigateur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">8. Vos droits</h2>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Droit d&apos;accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:contact@meditrajet.fr" className="text-primary hover:underline">
                contact@meditrajet.fr
              </a>
            </p>
            <p>
              Nous nous engageons à répondre à votre demande dans un délai d&apos;un mois. En cas de
              difficulté, vous pouvez introduire une réclamation auprès de la{" "}
              <strong>CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) :{" "}
              <a href="https://www.cnil.fr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                www.cnil.fr
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">9. Sécurité</h2>
            <p>
              Outlier Distribution met en oeuvre les mesures techniques et organisationnelles appropriées
              pour protéger vos données personnelles contre tout accès non autorisé, modification,
              divulgation ou destruction. Le site utilise le protocole HTTPS pour sécuriser les échanges.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">10. Modification de la politique</h2>
            <p>
              Outlier Distribution se réserve le droit de modifier la présente politique de confidentialité
              à tout moment. Les modifications prennent effet dès leur publication sur le site. Nous vous
              invitons à la consulter régulièrement.
            </p>
          </div>

          <p className="text-sm text-gray-400 pt-4 border-t border-gray-100">
            Dernière mise à jour : avril 2026
          </p>
        </div>
      </div>
    </section>
  );
}
