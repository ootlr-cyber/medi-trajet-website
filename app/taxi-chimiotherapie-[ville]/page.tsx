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
    title: `Transport chimiothérapie ${city.name} | Taxi conventionné CPAM`,
    description: `Taxi conventionné pour la chimiothérapie à ${city.name}. Prise en charge 100% ALD, tiers payant, transport adapté. Réservez sur MediTrajet.`,
    alternates: { canonical: `/taxi-chimiotherapie-${ville}` },
  };
}

export default async function ChimioCityPage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) notFound();

  const hospitals = getHospitalsByCity(ville);
  const oncoHospitals = hospitals.filter((h) =>
    h.type === "cancerologie" || h.specialties.some((s) => s.toLowerCase().includes("oncologie") || s.toLowerCase().includes("cancérologie") || s.toLowerCase().includes("radiothérapie"))
  );
  const otherHospitals = hospitals.filter((h) => !oncoHospitals.includes(h)).slice(0, 3);

  const faq = [
    { q: `Le transport pour la chimio est-il remboursé à ${city.name} ?`, a: `Oui, les patients en chimiothérapie sont en ALD et bénéficient d'une prise en charge à 100% de leurs transports par la CPAM. Aucune avance de frais avec le tiers payant.` },
    { q: `Puis-je prendre un taxi conventionné après la chimio ?`, a: `Oui, le taxi conventionné assure l'aller et le retour. Le chauffeur vous attend pendant la séance ou revient vous chercher à l'heure convenue.` },
    { q: `Faut-il un bon de transport pour chaque séance de chimio ?`, a: `Un seul bon de transport peut couvrir l'ensemble de votre protocole de chimiothérapie. Demandez à votre oncologue une prescription pour la durée totale du traitement.` },
    { q: `Le transport partagé est-il adapté à la chimiothérapie ?`, a: `Le transport partagé est possible si votre état le permet. Le médecin peut vous en exclure si la fatigue post-chimio nécessite un transport individuel.` },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { label: "Accueil", href: "/" },
          { label: "Taxi conventionné", href: "/taxi-conventionne" },
          { label: city.name, href: `/taxi-conventionne-${ville}` },
          { label: "Chimiothérapie" },
        ]} />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6">
          Transport chimiothérapie à {city.name} | Taxi conventionné
        </h1>

        <AnswerBox
          answer={`Le transport pour la chimiothérapie à ${city.name} est pris en charge à 100% par la CPAM pour les patients en ALD. Taxi conventionné avec tiers payant, aller-retour, sans avance de frais.`}
          source="Assurance Maladie"
        />

        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { icon: Clock, label: "Durée", value: "3-6 mois", sub: "Protocole type" },
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

        <div className="space-y-4 mb-10">
          <p className="text-gray-600 leading-relaxed">
            La chimiothérapie implique des déplacements réguliers vers le centre de soins, souvent sur plusieurs mois. Pour les patients de {city.name}, le taxi conventionné CPAM assure un transport confortable et fiable, pris en charge à 100% dans le cadre de l&apos;ALD (affection longue durée).
          </p>
          <p className="text-gray-600 leading-relaxed">
            Après une séance de chimiothérapie, la fatigue peut être importante. Le taxi conventionné offre un transport individuel et adapté : le chauffeur vous attend ou revient vous chercher, vous êtes accompagné de votre domicile au centre de soins et retour, en toute sérénité.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Votre oncologue peut prescrire un bon de transport couvrant l&apos;ensemble du protocole. Avec MediTrajet, tous vos trajets sont planifiés à l&apos;avance avec le même chauffeur de confiance, et le tiers payant vous dispense de toute avance de frais.
          </p>
        </div>

        {oncoHospitals.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-bold text-dark mb-4">Centres de soins en oncologie à {city.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {oncoHospitals.map((h) => (
                <HospitalCard key={h.slug} name={h.name} slug={h.slug} type={h.type} specialties={h.specialties} address={h.address} />
              ))}
            </div>
          </div>
        )}

        {otherHospitals.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-bold text-dark mb-4">Autres établissements à {city.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherHospitals.map((h) => (
                <HospitalCard key={h.slug} name={h.name} slug={h.slug} type={h.type} specialties={h.specialties} />
              ))}
            </div>
          </div>
        )}

        <FAQSection items={faq} title={`Transport chimiothérapie ${city.name} | FAQ`} />

        <InternalLinksSection groups={[
          { heading: "Votre ville", links: [{ label: `Tous les transports à ${city.name}`, href: `/taxi-conventionne-${ville}` }] },
          { heading: "Guides", links: [
            { label: "Transport chimiothérapie (national)", href: "/guides/transport-chimiotherapie" },
            { label: "ALD et transport médical", href: "/guides/ald-transport-medical" },
            { label: "Remboursement CPAM", href: "/guides/remboursement-transport-cpam" },
          ]},
        ]} />

        <div className="mt-10 bg-primary/5 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-dark mb-2">Transport chimiothérapie à {city.name}</h2>
          <p className="text-gray-500 text-sm mb-4">Prise en charge 100% · Même chauffeur · 0€</p>
          <Link href="/a-propos#contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
            Réserver <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
