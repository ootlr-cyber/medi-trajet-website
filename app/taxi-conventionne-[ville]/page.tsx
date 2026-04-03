import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Building2, ArrowRight } from "lucide-react";
import { getAllCitySlugs, getCityBySlug } from "@/lib/seo-data/cities/index";
import { getHospitalsByCity } from "@/lib/seo-data/hospitals/index";
import {
  generateCityAnswerBox,
  generateCityIntro,
  generateCityFAQ,
  generateCityMeta,
} from "@/lib/seo-data/content-generators";
import Breadcrumb from "@/components/seo/Breadcrumb";
import AnswerBox from "@/components/seo/AnswerBox";
import FAQSection from "@/components/seo/FAQSection";
import TransportComparisonTable from "@/components/seo/TransportComparisonTable";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import HospitalCard from "@/components/seo/HospitalCard";

export function generateStaticParams() {
  return getAllCitySlugs().map((ville) => ({ ville }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) return {};
  const hospitals = getHospitalsByCity(ville);
  const meta = generateCityMeta(city, hospitals.length);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const city = getCityBySlug(ville);
  if (!city) notFound();

  const hospitals = getHospitalsByCity(ville);
  const intro = generateCityIntro(city, hospitals);
  const faq = generateCityFAQ(city, hospitals);
  const answerBox = generateCityAnswerBox(city, hospitals.length);

  // Internal links
  const guideLinks = [
    { label: "Remboursement transport CPAM", href: "/guides/remboursement-transport-cpam" },
    { label: "Bon de transport médical", href: "/guides/bon-de-transport-medical" },
    { label: "Taxi conventionné : comment ça marche", href: "/guides/taxi-conventionne-comment-ca-marche" },
    { label: "ALD et transport médical", href: "/guides/ald-transport-medical" },
  ];

  const nearbyLinks = city.nearbyCities.slice(0, 5).map((slug) => {
    const nearby = getCityBySlug(slug);
    return {
      label: `Taxi conventionné ${nearby?.name || slug}`,
      href: `/taxi-conventionne-${slug}`,
    };
  });

  const pathologyLinks = [
    { label: "Transport pour la dialyse", href: `/taxi-dialyse-${ville}` },
    { label: "Transport chimiothérapie", href: `/taxi-chimiotherapie-${ville}` },
  ];

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Taxi conventionné", href: "/taxi-conventionne" },
              { label: city.name },
            ]}
          />

          <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6">
            Taxi conventionné à {city.name} | Transport médical CPAM
          </h1>

          <AnswerBox answer={answerBox} source="Assurance Maladie, MediTrajet" />

          {/* Intro */}
          <div className="space-y-4 mb-10">
            {intro.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
            ))}
          </div>

          {/* CPAM locale */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-10">
            <h2 className="text-xl font-bold text-dark mb-4">
              Votre CPAM | {city.cpam.name}
            </h2>
            <div className="space-y-2 text-sm">
              {city.cpam.phone && (
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Téléphone : <strong>{city.cpam.phone}</strong></span>
                </div>
              )}
              {city.cpam.address && (
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{city.cpam.address}</span>
                </div>
              )}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-dark mb-2">Prise en charge CPAM en 3 étapes :</h3>
              <ol className="text-sm text-gray-600 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary shrink-0">1</span>
                  Votre médecin prescrit le transport (bon de transport)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary shrink-0">2</span>
                  Vous réservez via MediTrajet ou par téléphone
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary shrink-0">3</span>
                  La CPAM rembourse directement | aucune avance de frais
                </li>
              </ol>
            </div>
          </div>

          {/* Hôpitaux */}
          {hospitals.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Hôpitaux et centres de soins desservis à {city.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hospitals.map((h) => (
                  <HospitalCard
                    key={h.slug}
                    name={h.name}
                    slug={h.slug}
                    type={h.type}
                    specialties={h.specialties}
                    address={h.address}
                  />
                ))}
              </div>
            </div>
          )}

          {/* CTA mid-page */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center gap-4 border border-primary/10">
            <div className="flex-1">
              <p className="font-semibold text-dark">Besoin d&apos;un transport pour vos soins ?</p>
              <p className="text-sm text-gray-500">MediTrajet organise votre taxi conventionne, sans avance de frais.</p>
            </div>
            <Link
              href="/patients"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-dark transition-colors shrink-0"
            >
              En savoir plus
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Comparatif transport */}
          <TransportComparisonTable />

          {/* FAQ */}
          <FAQSection items={faq} title={`Questions fréquentes | Taxi conventionné ${city.name}`} />

          {/* Internal links */}
          <InternalLinksSection
            groups={[
              { heading: "Guides CPAM", links: guideLinks },
              { heading: "Villes proches", links: nearbyLinks },
              { heading: "Transport par pathologie", links: pathologyLinks },
            ]}
          />

          {/* CTA */}
          <div className="mt-12 bg-primary/5 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-xl font-bold text-dark mb-2">
              Réservez votre taxi conventionné à {city.name}
            </h2>
            <p className="text-gray-500 text-sm mb-5">
              Sans avance de frais · Prise en charge CPAM · Tiers payant
            </p>
            <Link
              href="/a-propos#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
            >
              Réserver un transport
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
