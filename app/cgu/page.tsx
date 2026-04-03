import type { Metadata } from "next";
import Breadcrumb from "@/components/seo/Breadcrumb";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description: "Conditions générales d'utilisation du site meditrajet.fr édité par Outlier Distribution.",
  alternates: { canonical: "/cgu" },
  robots: { index: true, follow: true },
};

export default function CGU() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Accueil", href: "/" }, { label: "CGU" }]} />

        <h1 className="text-3xl font-extrabold text-dark mb-8">Conditions générales d&apos;utilisation</h1>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">1. Objet</h2>
            <p>
              Les présentes conditions générales d&apos;utilisation (ci-après « CGU ») ont pour objet de
              définir les modalités et conditions d&apos;accès et d&apos;utilisation du site meditrajet.fr
              (ci-après « le Site »), édité par Outlier Distribution.
            </p>
            <p>
              L&apos;accès au Site implique l&apos;acceptation pleine et entière des présentes CGU. Si vous
              n&apos;acceptez pas ces conditions, veuillez ne pas utiliser le Site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">2. Description du service</h2>
            <p>
              MediTrajet est une plateforme de transport médical partagé qui met en relation les
              établissements de santé, les patients et les transporteurs conventionnés CPAM. Le Site
              a pour vocation de :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Présenter les services de la plateforme MediTrajet</li>
              <li>Informer sur le transport médical conventionné en France</li>
              <li>Fournir un annuaire des villes et établissements desservis</li>
              <li>Proposer des guides et ressources sur le transport sanitaire</li>
              <li>Permettre aux professionnels de demander une démonstration</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">3. Accès au site</h2>
            <p>
              Le Site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à internet.
              Outlier Distribution se réserve le droit de suspendre ou d&apos;interrompre l&apos;accès au Site
              à tout moment, notamment pour des raisons de maintenance, sans préavis ni indemnité.
            </p>
            <p>
              Les frais d&apos;accès à internet et d&apos;équipement nécessaire à la consultation du Site
              restent à la charge de l&apos;utilisateur.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments constituant le Site (textes, graphismes, logiciels, photographies,
              images, vidéos, sons, plans, noms, logos, marques, créations et oeuvres protégeables diverses,
              bases de données, etc.) ainsi que le Site lui-même, relèvent des législations françaises
              et internationales sur le droit de la propriété intellectuelle.
            </p>
            <p>
              Ces éléments sont la propriété exclusive d&apos;Outlier Distribution. Toute reproduction ou
              représentation, intégrale ou partielle, est interdite sans autorisation écrite préalable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">5. Obligations de l&apos;utilisateur</h2>
            <p>L&apos;utilisateur s&apos;engage à :</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Utiliser le Site conformément à sa destination et aux présentes CGU</li>
              <li>Ne pas porter atteinte au fonctionnement du Site (tentatives d&apos;intrusion, surcharge, etc.)</li>
              <li>Ne pas collecter ou extraire des données du Site de manière systématique</li>
              <li>Ne pas utiliser le Site à des fins illicites ou contraires à l&apos;ordre public</li>
              <li>Fournir des informations exactes lors de l&apos;utilisation des formulaires de contact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">6. Informations médicales</h2>
            <p>
              Les informations présentes sur le Site (guides, articles, fiches pratiques) sont fournies
              à titre informatif et ne se substituent en aucun cas à un avis médical. Elles ne constituent
              ni un diagnostic, ni une prescription médicale.
            </p>
            <p>
              Pour toute question relative à votre santé ou à votre transport médical, consultez votre
              médecin traitant ou contactez votre caisse primaire d&apos;assurance maladie (CPAM).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">7. Limitation de responsabilité</h2>
            <p>
              Outlier Distribution ne saurait être tenue responsable des dommages directs ou indirects
              résultant de l&apos;utilisation du Site, notamment en cas :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>D&apos;interruption temporaire ou définitive du Site</li>
              <li>D&apos;erreur ou d&apos;omission dans les informations publiées</li>
              <li>De dysfonctionnement technique lié à l&apos;environnement de l&apos;utilisateur</li>
              <li>D&apos;utilisation frauduleuse du Site par un tiers</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">8. Liens hypertextes</h2>
            <p>
              Le Site peut contenir des liens vers des sites tiers. Outlier Distribution n&apos;exerce
              aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu,
              leurs produits ou leurs services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">9. Protection des données</h2>
            <p>
              Le traitement des données personnelles est régi par notre{" "}
              <a href="/politique-de-confidentialite" className="text-primary hover:underline">
                Politique de confidentialité
              </a>, conforme au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">10. Modification des CGU</h2>
            <p>
              Outlier Distribution se réserve le droit de modifier les présentes CGU à tout moment.
              Les modifications prennent effet dès leur publication sur le Site. L&apos;utilisateur est
              invité à consulter régulièrement les CGU.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">11. Droit applicable et juridiction</h2>
            <p>
              Les présentes CGU sont régies par le droit français. Tout litige relatif à l&apos;interprétation
              ou à l&apos;exécution des présentes sera soumis aux tribunaux compétents du ressort du siège
              social d&apos;Outlier Distribution.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-dark mb-3">12. Contact</h2>
            <p>
              Pour toute question relative aux présentes CGU, contactez-nous à :{" "}
              <a href="mailto:contact@meditrajet.fr" className="text-primary hover:underline">
                contact@meditrajet.fr
              </a>
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
