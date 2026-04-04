import type { Metadata } from "next";
import { citiesDB } from "@/lib/seo-data/cities-db";
import { getHospitalsByCity } from "@/lib/seo-data/hospitals/index";
import { getAllRegions } from "@/lib/seo-data/cities/index";
import Breadcrumb from "@/components/seo/Breadcrumb";
import AnswerBox from "@/components/seo/AnswerBox";
import CityCard from "@/components/seo/CityCard";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import MapExplorerWrapper from "./MapExplorerWrapper";

export const metadata: Metadata = {
  title: "Taxi conventionné en France | Toutes les villes",
  description:
    "Trouvez un taxi conventionné CPAM dans votre ville. 100+ villes desservies, prise en charge Assurance Maladie, tiers payant, sans avance de frais.",
  alternates: { canonical: "/taxi-conventionne" },
};

export default function TaxiConventionneHub() {
  const regions = getAllRegions();

  // Pre-compute hospital counts for the client component
  const hospitalCounts: Record<string, number> = {};
  citiesDB.forEach((city) => {
    hospitalCounts[city.slug] = getHospitalsByCity(city.slug).length;
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Taxi conventionné" },
          ]}
        />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-4">
          Taxi conventionné en France
        </h1>

        <AnswerBox
          answer="Plus de 100 villes couvertes partout en France. Trouvez un taxi conventionné CPAM proche de chez vous, remboursé par l'Assurance Maladie."
        />

        <p className="text-gray-600 leading-relaxed mb-8">
          Explorez la carte ou recherchez votre ville pour voir les hôpitaux desservis, les coordonnées de votre CPAM locale et les options de transport disponibles.
        </p>

        {/* ─── Leboncoin-style map explorer ─── */}
        <MapExplorerWrapper
          cities={citiesDB}
          hospitalCounts={hospitalCounts}
        />

        {/* ─── SEO: full city listing by region (below fold) ─── */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-dark mb-8">
            Toutes les villes par région
          </h2>

          {regions.map((region) => {
            const regionCities = citiesDB
              .filter((c) => c.region === region)
              .sort((a, b) => b.population - a.population);

            return (
              <div key={region} id={region.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")} className="mb-10 scroll-mt-20">
                <h3 className="text-lg font-bold text-dark mb-4 border-b border-gray-100 pb-2">
                  {region}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {regionCities.map((city) => {
                    const hospitalCount = hospitalCounts[city.slug] || 0;
                    return (
                      <CityCard
                        key={city.slug}
                        name={city.name}
                        department={city.department}
                        departmentCode={city.departmentCode}
                        hospitalCount={hospitalCount}
                        slug={city.slug}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <InternalLinksSection
          groups={[
            {
              heading: "Guides CPAM",
              links: [
                { label: "Remboursement transport CPAM", href: "/guides/remboursement-transport-cpam" },
                { label: "Bon de transport médical", href: "/guides/bon-de-transport-medical" },
                { label: "Taxi conventionné : comment ça marche", href: "/guides/taxi-conventionne-comment-ca-marche" },
              ],
            },
            {
              heading: "Transport par pathologie",
              links: [
                { label: "Transport dialyse", href: "/guides/transport-dialyse" },
                { label: "Transport chimiothérapie", href: "/guides/transport-chimiotherapie" },
                { label: "Transport radiothérapie", href: "/guides/transport-radiotherapie" },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}
