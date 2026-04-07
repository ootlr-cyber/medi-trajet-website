import type { Metadata } from "next";
import { citiesDB } from "@/lib/seo-data/cities-db";
import { getHospitalsByCity } from "@/lib/seo-data/hospitals/index";
import { getAllRegions } from "@/lib/seo-data/cities/index";
import Breadcrumb from "@/components/seo/Breadcrumb";
import CityCard from "@/components/seo/CityCard";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import SectionHeader from "@/components/ui/SectionHeader";
import MapExplorerWrapper from "./MapExplorerWrapper";
import {
  MapPin,
  Building2,
  CreditCard,
  CheckCircle,
  Search,
  Hospital,
  Car,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi conventionné en France | Toutes les villes",
  description:
    "Trouvez un taxi conventionné CPAM dans votre ville. 100+ villes desservies, prise en charge Assurance Maladie, tiers payant, sans avance de frais.",
  alternates: { canonical: "/taxi-conventionne" },
};

const stats = [
  { value: "100+", label: "Villes couvertes", icon: MapPin },
  { value: "0€", label: "Avance de frais", icon: CreditCard },
  { value: "103", label: "Hôpitaux référencés", icon: Building2 },
  { value: "100%", label: "Pris en charge CPAM", icon: CheckCircle },
];

const steps = [
  {
    num: "1",
    icon: Search,
    title: "Trouvez votre ville",
    description:
      "Recherchez votre ville sur la carte interactive ou dans la liste. Plus de 100 villes sont couvertes partout en France.",
  },
  {
    num: "2",
    icon: Hospital,
    title: "Consultez les hôpitaux",
    description:
      "Découvrez les établissements de santé desservis près de chez vous et les coordonnées de votre CPAM locale.",
  },
  {
    num: "3",
    icon: Car,
    title: "Réservez votre taxi",
    description:
      "Prise en charge directe avec tiers payant. Aucune avance de frais, remboursé intégralement par l'Assurance Maladie.",
  },
];

export default function TaxiConventionneHub() {
  const regions = getAllRegions();

  const hospitalCounts: Record<string, number> = {};
  citiesDB.forEach((city) => {
    hospitalCounts[city.slug] = getHospitalsByCity(city.slug).length;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-emerald-700 py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0LjVhMi41IDIuNSAwIDEgMS01IDBhMi41IDIuNSAwIDAgMSA1IDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Taxi conventionné" },
            ]}
          />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              100+ villes en France
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Taxi conventionné{" "}
              <span className="text-emerald-300">en France</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed mb-8 max-w-2xl">
              Trouvez un taxi conventionné CPAM près de chez vous.
              Remboursé par l&apos;Assurance Maladie, sans avance de frais.
            </p>

            <a
              href="#carte"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-xl font-semibold transition-colors shadow-lg shadow-black/10"
            >
              <Search className="w-5 h-5" />
              Rechercher ma ville
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Comment ça marche"
            title="Votre taxi conventionné en 3 étapes"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30">
                  {step.num}
                </div>
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carte interactive */}
      <section id="carte" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Explorez la carte"
            title="Trouvez un taxi conventionné près de chez vous"
            description="Cliquez sur une région ou recherchez votre ville pour voir les hôpitaux desservis."
          />
          <MapExplorerWrapper
            cities={citiesDB}
            hospitalCounts={hospitalCounts}
          />
        </div>
      </section>

      {/* Listing villes par région */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Annuaire complet"
            title="Toutes les villes par région"
          />

          {regions.map((region) => {
            const regionCities = citiesDB
              .filter((c) => c.region === region)
              .sort((a, b) => b.population - a.population);

            return (
              <div
                key={region}
                id={region
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "")}
                className="mb-10 scroll-mt-20"
              >
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
      </section>

      {/* Liens internes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InternalLinksSection
            groups={[
              {
                heading: "Guides CPAM",
                links: [
                  {
                    label: "Remboursement transport CPAM",
                    href: "/guides/remboursement-transport-cpam",
                  },
                  {
                    label: "Bon de transport médical",
                    href: "/guides/bon-de-transport-medical",
                  },
                  {
                    label: "Taxi conventionné : comment ça marche",
                    href: "/guides/taxi-conventionne-comment-ca-marche",
                  },
                ],
              },
              {
                heading: "Transport par pathologie",
                links: [
                  {
                    label: "Transport dialyse",
                    href: "/guides/transport-dialyse",
                  },
                  {
                    label: "Transport chimiothérapie",
                    href: "/guides/transport-chimiotherapie",
                  },
                  {
                    label: "Transport radiothérapie",
                    href: "/guides/transport-radiotherapie",
                  },
                ],
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
