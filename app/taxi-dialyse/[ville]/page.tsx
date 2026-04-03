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
    { q: `Combien coûte le transport dialyse à ${city.name} ?`, a: `Rien pour le patient. Les dialysés sont en ALD, donc la CPAM prend tout en charge. Le taxi coûte environ 63 euros en moyenne, mais c'est l'Assurance Maladie qui paie.` },
    { q: `On peut garder le même chauffeur à chaque séance ?`, a: `Oui, c'est même recommandé. Quand vous réservez vos trajets récurrents, vous pouvez demander le même chauffeur. Ça change tout au quotidien.` },
    { q: `Le transport partagé, c'est obligatoire pour la dialyse ?`, a: `C'est encouragé depuis le décret de février 2025, mais pas toujours obligatoire. Si vous partagez le véhicule, le détour ne dépasse pas 10 km et l'attente reste sous 45 minutes.` },
    { q: `Comment s'organiser pour 3 séances par semaine ?`, a: `Votre néphrologue vous fait un bon de transport pour toute la durée du traitement. Ensuite vous réservez vos créneaux réguliers et le même taxi vient vous chercher à chaque séance.` },
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
          Transport dialyse à {city.name}
        </h1>

        <AnswerBox
          answer={`Trois séances par semaine, 156 trajets par an. Pour les patients dialysés de ${city.name}, le taxi conventionné est remboursé à 100 % par la CPAM. Pas d'avance de frais.`}
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
            Quand on est en dialyse, le transport devient vite un sujet. Trois séances par semaine, parfois dès 6h du matin, toute l&apos;année. Pour les patients de {city.name} et du {city.department}, c&apos;est plus de 150 allers-retours par an vers le centre de soins.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Le taxi conventionné CPAM reste le moyen le plus confortable pour s&apos;y rendre. Véhicule individuel, chauffeur qui connaît le trajet, horaires calés sur vos séances. Et surtout, vous pouvez demander le même chauffeur à chaque fois. Quand on fait ce trajet 156 fois par an, ça compte.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Côté administratif, c&apos;est simple : votre néphrologue prescrit le transport pour la durée du traitement. La CPAM règle directement le taxi. Vous montrez votre carte Vitale et votre bon de transport au chauffeur, et c&apos;est tout. Pas de paperasse, pas d&apos;avance de frais.
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

        <FAQSection items={faq} title="Questions fréquentes" />

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
