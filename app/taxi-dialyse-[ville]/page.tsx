import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Heart, Clock, CreditCard } from "lucide-react";
import { getAllCitySlugs, getCityBySlug } from "@/lib/seo-data/cities/index";
import { getHospitalsByCity } from "@/lib/seo-data/hospitals/index";
import Breadcrumb from "@/components/seo/Breadcrumb";
import AnswerBox from "@/components/seo/AnswerBox";
import FAQSection from "@/components/seo/FAQSection";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import HospitalCard from "@/components/seo/HospitalCard";

export function generateStaticParams() {
  return getAllCitySlugs().map((ville) => ({ ville }));
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) return {};
  return {
    title: `Taxi conventionné dialyse ${city.name} (${city.departmentCode}) | Transport CPAM`,
    description: `Transport médical pour la dialyse à ${city.name}. 3 séances/semaine, prise en charge 100% ALD, sans avance de frais. Réservez sur MediTrajet.`,
    alternates: { canonical: `/taxi-dialyse-${ville}` },
  };
}

export default async function DialyseCityPage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) notFound();

  const hospitals = getHospitalsByCity(ville);
  const dialyseHospitals = hospitals.filter((h) =>
    h.type === "dialyse" || h.specialties.some((s) => s.toLowerCase().includes("dialyse") || s.toLowerCase().includes("néphrologie"))
  );
  const otherHospitals = hospitals.filter((h) => !dialyseHospitals.includes(h)).slice(0, 3);

  const faq = [
    { q: `Combien coûte le transport dialyse à ${city.name} ?`, a: `Le transport pour la dialyse est pris en charge à 100% par la CPAM pour les patients en ALD. Aucune avance de frais avec le tiers payant. Le coût moyen d'un trajet en taxi conventionné est de 55 à 70 €.` },
    { q: `Puis-je choisir mon chauffeur pour la dialyse à ${city.name} ?`, a: `Oui, avec MediTrajet vous pouvez être transporté par le même chauffeur conventionné à chaque séance. Cela garantit ponctualité et confiance pour vos 3 séances hebdomadaires.` },
    { q: `Le transport partagé est-il possible pour la dialyse ?`, a: `Oui, le transport partagé est encouragé par le décret de février 2025. Vous pouvez partager le véhicule avec un autre patient dialysé. Le détour ne doit pas excéder 10 km et l'attente 45 minutes.` },
    { q: `Comment organiser le transport régulier pour la dialyse ?`, a: `Demandez un bon de transport à votre néphrologue, puis réservez vos trajets récurrents sur MediTrajet. La plateforme planifie automatiquement vos 3 séances hebdomadaires avec le même transporteur.` },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { label: "Accueil", href: "/" },
          { label: "Taxi conventionné", href: "/taxi-conventionne" },
          { label: city.name, href: `/taxi-conventionne-${ville}` },
          { label: "Dialyse" },
        ]} />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6">
          Transport dialyse à {city.name} | Taxi conventionné CPAM
        </h1>

        <AnswerBox
          answer={`Les patients dialysés de ${city.name} bénéficient d'un transport en taxi conventionné pris en charge à 100% par la CPAM (ALD). 3 séances par semaine, 156 trajets par an, sans avance de frais grâce au tiers payant.`}
          source="Assurance Maladie"
        />

        {/* Key stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { icon: Clock, label: "Fréquence", value: "3x / semaine", sub: "156 trajets/an" },
            { icon: CreditCard, label: "Prise en charge", value: "100%", sub: "ALD, tiers payant" },
            { icon: Heart, label: "Coût patient", value: "0 €", sub: "Sans avance de frais" },
          ].map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="bg-gray-50 rounded-xl border border-gray-100 p-4 text-center">
              <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
              <p className="text-xs text-gray-400">{label}</p>
              <p className="text-lg font-extrabold text-dark">{value}</p>
              <p className="text-[10px] text-gray-400">{sub}</p>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-4 mb-10">
          <p className="text-gray-600 leading-relaxed">
            La dialyse rénale nécessite 3 séances par semaine, soit 156 transports médicaux par an. Pour les patients de {city.name} et du département {city.department}, ce transport régulier est pris en charge à 100% par l&apos;Assurance Maladie dans le cadre de l&apos;ALD (affection longue durée).
          </p>
          <p className="text-gray-600 leading-relaxed">
            Le taxi conventionné CPAM est le mode de transport le plus adapté pour la dialyse : confort optimal, véhicule individuel, disponibilité dès 6h du matin pour les premières séances. Avec MediTrajet, vous bénéficiez du même chauffeur à chaque trajet, garantissant ponctualité et confiance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Le tiers payant vous dispense de toute avance de frais : la CPAM règle directement le transporteur. Il vous suffit de présenter votre bon de transport et votre carte Vitale. Votre néphrologue ou votre médecin traitant peut prescrire le transport pour la durée de votre traitement.
          </p>
        </div>

        {/* Dialysis centers */}
        {dialyseHospitals.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-dark mb-4">
              Centres de dialyse à {city.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dialyseHospitals.map((h) => (
                <HospitalCard key={h.slug} name={h.name} slug={h.slug} type={h.type} specialties={h.specialties} address={h.address} />
              ))}
            </div>
          </div>
        )}

        {otherHospitals.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-bold text-dark mb-4">
              Autres établissements à {city.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherHospitals.map((h) => (
                <HospitalCard key={h.slug} name={h.name} slug={h.slug} type={h.type} specialties={h.specialties} />
              ))}
            </div>
          </div>
        )}

        <FAQSection items={faq} title={`Transport dialyse ${city.name} | Questions fréquentes`} />

        <InternalLinksSection groups={[
          { heading: "Votre ville", links: [{ label: `Tous les transports à ${city.name}`, href: `/taxi-conventionne-${ville}` }] },
          { heading: "Guides", links: [
            { label: "Transport pour la dialyse (national)", href: "/guides/transport-dialyse" },
            { label: "ALD et transport médical", href: "/guides/ald-transport-medical" },
            { label: "Remboursement CPAM", href: "/guides/remboursement-transport-cpam" },
          ]},
        ]} />

        <div className="mt-10 bg-primary/5 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-dark mb-2">
            Organisez vos transports dialyse à {city.name}
          </h2>
          <p className="text-gray-500 text-sm mb-4">3 séances/semaine · Même chauffeur · 0€</p>
          <Link href="/a-propos#contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
            Réserver <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
