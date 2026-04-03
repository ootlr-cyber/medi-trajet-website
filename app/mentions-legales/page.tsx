import type { Metadata } from "next";
import Breadcrumb from "@/components/seo/Breadcrumb";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site meditrajet.fr édité par Outlier Distribution.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "Mentions légales" }]} />

        <h1 className="text-3xl font-extrabold text-dark mb-8">Mentions légales</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong>meditrajet.fr</strong> est édité par :
            </p>
            <ul className="list-none pl-0 space-y-1 mt-3">
              <li><strong>Raison sociale :</strong> Outlier Distribution</li>
              <li><strong>Forme juridique :</strong> Société par actions simplifiée (SAS)</li>
              <li><strong>Capital social :</strong> 2 000 &euro;</li>
              <li><strong>SIREN :</strong> 853 547 859</li>
              <li><strong>SIRET :</strong> 853 547 859 00027</li>
              <li><strong>Code APE :</strong> 7022Z | Conseil pour les affaires et autres conseils de gestion</li>
              <li><strong>Siège social :</strong> 8 rue Georges Méliès, 95550 Bessancourt, France</li>
              <li><strong>Email :</strong> <a href="mailto:contact@meditrajet.fr" className="text-primary hover:underline">contact@meditrajet.fr</a></li>
              <li><strong>Directeur de la publication :</strong> Oussama Sahnoune, Président</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">2. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul className="list-none pl-0 space-y-1 mt-3">
              <li><strong>Raison sociale :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
              <li><strong>Site web :</strong> vercel.com</li>
            </ul>
            <p className="mt-3">
              Les données personnelles collectées sur le site sont hébergées dans l&apos;Union européenne,
              conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">3. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus présents sur le site meditrajet.fr (textes, images, graphismes,
              logo, icônes, logiciels, base de données) est protégé par les dispositions du Code de la
              propriété intellectuelle et appartient à Outlier Distribution ou fait l&apos;objet d&apos;une
              autorisation d&apos;utilisation.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie
              des éléments du site est interdite, sauf autorisation écrite préalable d&apos;Outlier Distribution.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">4. Responsabilité</h2>
            <p>
              Outlier Distribution s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des
              informations diffusées sur le site. Toutefois, elle ne peut garantir l&apos;exactitude,
              la précision ou l&apos;exhaustivité des informations mises à disposition.
            </p>
            <p>
              Outlier Distribution décline toute responsabilité pour toute imprécision, inexactitude ou
              omission portant sur des informations disponibles sur le site, ainsi que pour tout dommage
              résultant d&apos;une intrusion frauduleuse d&apos;un tiers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">5. Données personnelles</h2>
            <p>
              Le traitement des données personnelles collectées sur le site est détaillé dans notre{" "}
              <a href="/politique-de-confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </a>.
            </p>
            <p>
              Conformément au RGPD et à la loi Informatique et Libertés du 6 janvier 1978 modifiée,
              vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition
              au traitement de vos données personnelles. Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:contact@meditrajet.fr" className="text-primary hover:underline">
                contact@meditrajet.fr
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">6. Cookies</h2>
            <p>
              Le site meditrajet.fr peut utiliser des cookies à des fins de mesure d&apos;audience et
              d&apos;amélioration de l&apos;expérience utilisateur. L&apos;utilisation de cookies est détaillée
              dans notre{" "}
              <a href="/politique-de-confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">7. Liens hypertextes</h2>
            <p>
              Le site meditrajet.fr peut contenir des liens hypertextes vers d&apos;autres sites internet.
              Outlier Distribution n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité
              quant à leur contenu.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les
              tribunaux français seront seuls compétents.
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
