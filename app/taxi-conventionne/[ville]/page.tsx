import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPin, Phone, Building2, ArrowRight } from "lucide-react";
import { getAllCitySlugs, getCityBySlug } from "@/lib/seo-data/cities/index";
import { getHospitalsByCity } from "@/lib/seo-data/hospitals/index";
import { getCityImagePath } from "@/lib/seo-data/image-helpers";
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
  const cityImage = getCityImagePath(ville, city.region);

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
            Taxi conventionné à {city.name}
          </h1>

          {cityImage && (
            <div className="relative w-full h-48 sm:h-64 rounded-2xl overflow-hidden mb-8">
              <Image
                src={cityImage}
                alt={`${city.name}, ${city.department}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                <p className="text-white text-sm font-medium">{city.name}, {city.department}</p>
              </div>
            </div>
          )}

          <AnswerBox answer={answerBox} />

          {/* Intro */}
          <div className="space-y-4 mb-10">
            {intro.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
            ))}
          </div>

          {/* CPAM locale */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-10">
            <h2 className="text-xl font-bold text-dark mb-4">
              {city.cpam.name}
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
              <h3 className="text-sm font-semibold text-dark mb-2">Comment ça marche ?</h3>
              <p className="text-sm text-gray-600">
                Votre médecin vous prescrit un bon de transport. Vous réservez un taxi conventionné. La CPAM rembourse le transporteur directement. Vous n&apos;avancez rien.
              </p>
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

          {/* Comparatif transport */}
          <TransportComparisonTable />

          {/* FAQ */}
          <FAQSection items={faq} title={`Questions fréquentes`} />

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
