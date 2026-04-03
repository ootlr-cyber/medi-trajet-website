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
    { q: `La chimio, c'est remboursé en taxi à ${city.name} ?`, a: `Oui, à 100 %. Les patients en chimio sont en ALD. La CPAM paie directement le transporteur, vous n'avancez rien.` },
    { q: `Le chauffeur attend pendant la séance ?`, a: `Ça dépend de la durée. Pour les séances courtes, il peut attendre. Sinon, il revient vous chercher à l'heure que vous avez fixée ensemble.` },
    { q: `Il faut un bon de transport à chaque séance ?`, a: `Non, un seul bon peut couvrir tout le protocole. Demandez à votre oncologue de prescrire le transport pour la durée complète du traitement.` },
    { q: `On est obligé de partager le taxi après la chimio ?`, a: `Non. Si la fatigue après la séance le justifie, votre médecin peut vous prescrire un transport individuel. C'est du cas par cas.` },
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
          Transport chimiothérapie à {city.name}
        </h1>

        <AnswerBox
          answer={`Vos trajets vers le centre de soins à ${city.name} sont remboursés à 100 % par la CPAM. Le taxi conventionné vous emmène et vous ramène, sans rien à payer.`}
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
            Un protocole de chimiothérapie, c&apos;est des semaines, parfois des mois de rendez-vous réguliers. À {city.name}, les patients qui suivent ce traitement ont besoin d&apos;un transport fiable pour chaque séance. Le taxi conventionné reste le plus adapté.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Après une séance, la fatigue est souvent forte. C&apos;est pour ça que le retour en taxi fait toute la différence : le chauffeur vous attend ou revient à l&apos;heure prévue, vous rentrez directement chez vous sans chercher de transport.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Côté paperasse, votre oncologue peut prescrire un seul bon de transport pour tout le protocole. La CPAM paie le taxi directement. Vous n&apos;avez qu&apos;à montrer votre carte Vitale au chauffeur.
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

        <FAQSection items={faq} title="Questions fréquentes" />

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
