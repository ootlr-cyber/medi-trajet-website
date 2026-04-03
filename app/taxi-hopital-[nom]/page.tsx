import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Stethoscope, BedDouble } from "lucide-react";
import { getAllHospitalSlugs, getHospitalBySlug, getHospitalsByCity } from "@/lib/seo-data/hospitals/index";
import { getCityBySlug } from "@/lib/seo-data/cities/index";
import {
  generateHospitalAnswerBox,
  generateHospitalIntro,
  generateHospitalFAQ,
  generateHospitalMeta,
} from "@/lib/seo-data/content-generators";
import Breadcrumb from "@/components/seo/Breadcrumb";
import AnswerBox from "@/components/seo/AnswerBox";
import FAQSection from "@/components/seo/FAQSection";
import InternalLinksSection from "@/components/seo/InternalLinksSection";
import HospitalCard from "@/components/seo/HospitalCard";

const typeLabels: Record<string, string> = {
  chu: "CHU", ch: "Centre hospitalier", clinique: "Clinique",
  dialyse: "Centre de dialyse", cancerologie: "Centre anticancéreux",
  ssr: "SSR / Rééducation", hopital: "Hôpital",
};

export function generateStaticParams() {
  return getAllHospitalSlugs().map((nom) => ({ nom }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ nom: string }>;
}): Promise<Metadata> {
  const { nom } = await params;
  const hospital = getHospitalBySlug(nom);
  if (!hospital) return {};
  const city = getCityBySlug(hospital.city);
  const cityName = city?.name || hospital.department;
  const meta = generateHospitalMeta(hospital, cityName);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: meta.canonical },
  };
}

export default async function HospitalPage({
  params,
}: {
  params: Promise<{ nom: string }>;
}) {
  const { nom } = await params;
  const hospital = getHospitalBySlug(nom);
  if (!hospital) notFound();

  const city = getCityBySlug(hospital.city);
  const cityName = city?.name || hospital.department;
  const intro = generateHospitalIntro(hospital, cityName);
  const faq = generateHospitalFAQ(hospital, cityName);
  const answerBox = generateHospitalAnswerBox(hospital, cityName);

  // Other hospitals in the same city
  const siblingHospitals = getHospitalsByCity(hospital.city)
    .filter((h) => h.slug !== hospital.slug)
    .slice(0, 4);

  const cityLink = city ? `/taxi-conventionne-${city.slug}` : "/taxi-conventionne";

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Taxi conventionné", href: "/taxi-conventionne" },
            ...(city ? [{ label: city.name, href: cityLink }] : []),
            { label: hospital.name },
          ]}
        />

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
            {typeLabels[hospital.type] || hospital.type}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-dark mb-6">
          Taxi conventionné | {hospital.name}
        </h1>

        <AnswerBox answer={answerBox} source="Données FINESS, MediTrajet" />

        {/* Hospital info card */}
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-dark">Adresse</p>
                <p className="text-gray-500">{hospital.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Stethoscope className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-dark">Spécialités</p>
                <p className="text-gray-500">{hospital.specialties.join(", ")}</p>
              </div>
            </div>
            {hospital.beds && (
              <div className="flex items-start gap-2">
                <BedDouble className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-dark">Capacité</p>
                  <p className="text-gray-500">{hospital.beds} lits</p>
                </div>
              </div>
            )}
            {hospital.finess && (
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-primary/10 rounded text-[8px] font-bold text-primary flex items-center justify-center mt-0.5 shrink-0">F</div>
                <div>
                  <p className="font-semibold text-dark">N° FINESS</p>
                  <p className="text-gray-500">{hospital.finess}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Intro content */}
        <div className="space-y-4 mb-10">
          {intro.map((p, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
          ))}
        </div>

        {/* Comment s'y rendre */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-dark mb-4">
            Comment se rendre à {hospital.name} en taxi conventionné
          </h2>
          <ol className="space-y-3">
            {[
              `Demandez une prescription de transport (bon de transport) à votre médecin traitant ou au médecin de ${hospital.name}.`,
              `Réservez votre taxi conventionné via MediTrajet en indiquant ${hospital.name} comme destination.`,
              `Le jour du rendez-vous, le chauffeur conventionné vient vous chercher à domicile et vous dépose à l'entrée patients.`,
              `Présentez votre bon de transport et votre carte Vitale. Avec le tiers payant, vous ne payez rien.`,
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <p className="text-gray-600 text-sm">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        <FAQSection items={faq} />

        {/* Sibling hospitals */}
        {siblingHospitals.length > 0 && (
          <div className="mt-10">
            <h2 className="text-lg font-bold text-dark mb-4">
              Autres établissements à {cityName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {siblingHospitals.map((h) => (
                <HospitalCard
                  key={h.slug}
                  name={h.name}
                  slug={h.slug}
                  type={h.type}
                  specialties={h.specialties}
                />
              ))}
            </div>
          </div>
        )}

        {/* Internal links */}
        <InternalLinksSection
          groups={[
            {
              heading: "Votre ville",
              links: city
                ? [{ label: `Taxi conventionné ${city.name}`, href: cityLink }]
                : [],
            },
            {
              heading: "Guides utiles",
              links: [
                { label: "Remboursement transport CPAM", href: "/guides/remboursement-transport-cpam" },
                { label: "Bon de transport médical", href: "/guides/bon-de-transport-medical" },
              ],
            },
          ]}
        />

        {/* CTA */}
        <div className="mt-10 bg-primary/5 rounded-2xl p-6 text-center">
          <h2 className="text-lg font-bold text-dark mb-2">
            Réservez votre transport pour {hospital.name}
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Sans avance de frais · Tiers payant · CPAM
          </p>
          <Link
            href="/a-propos#contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Réserver
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
