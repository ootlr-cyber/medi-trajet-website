// ─── Shared types ───────────────────────────────────────────────

export interface FAQ {
  q: string;
  a: string;
}

export interface InternalLink {
  label: string;
  href: string;
}

export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
}

export interface GuideSection {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    id: string;
    title: string;
    content: string[];
  }[];
}

// ─── City (Silo 1) ─────────────────────────────────────────────

export interface CPAMInfo {
  name: string;
  phone?: string;
  address?: string;
}

export interface CityData {
  slug: string;
  name: string;
  department: string;
  departmentCode: string;
  region: string;
  population: number;
  postalCode: string;
  cpam: CPAMInfo;
  /** Hospital slugs present in this city */
  hospitals: string[];
  /** Neighboring city slugs for internal linking */
  nearbyCities: string[];
}

// ─── Hospital (Silo 3) ─────────────────────────────────────────

export type HospitalType =
  | "chu"
  | "ch"
  | "clinique"
  | "dialyse"
  | "cancerologie"
  | "ssr"
  | "hopital";

export interface HospitalData {
  slug: string;
  name: string;
  finess?: string;
  type: HospitalType;
  address: string;
  city: string; // city slug
  department: string;
  departmentCode: string;
  specialties: string[];
  beds?: number;
}

// ─── Guide (Silo 2 — pages fortes) ─────────────────────────────

export interface GuideData {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  readTime: string;
  category: string;
  /** First 50 words answering the main question — targets featured snippets */
  answerBox: string;
  sections: GuideSection[];
  faq: FAQ[];
  relatedGuides: string[];
  relatedCities?: string[];
}

// ─── Pathology (Silo 4) ─────────────────────────────────────────

export interface PathologyData {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  /** e.g. "3 fois par semaine" */
  frequency: string;
  /** e.g. 156 */
  annualTrips: number;
  /** e.g. "100%" */
  coverageRate: string;
  answerBox: string;
  sections: GuideSection[];
  tips: string[];
  faq: FAQ[];
  relatedPathologies: string[];
  relatedCities?: string[];
}

// ─── Transport comparison ───────────────────────────────────────

export interface TransportMode {
  name: string;
  averagePrice: string;
  comfort: number; // 1-5
  availability: string;
  patientPosition: string;
  prescriptionRequired: boolean;
  pros: string[];
  cons: string[];
}

export const transportComparison: TransportMode[] = [
  {
    name: "Taxi conventionné",
    averagePrice: "55 à 70 €",
    comfort: 5,
    availability: "24h/24",
    patientPosition: "Assis",
    prescriptionRequired: true,
    pros: [
      "Confort optimal, véhicule individuel",
      "Disponible 24h/24, 7j/7",
      "Tiers payant possible",
      "Chauffeur formé au transport de personnes fragiles",
    ],
    cons: [
      "Coût plus élevé que le VSL",
      "Pas adapté aux patients allongés",
    ],
  },
  {
    name: "VSL",
    averagePrice: "30 à 40 €",
    comfort: 3,
    availability: "Horaires ouvrés",
    patientPosition: "Assis",
    prescriptionRequired: true,
    pros: [
      "Tarif le plus économique",
      "Transport partagé possible",
      "Équipement médical de base",
    ],
    cons: [
      "Horaires limités",
      "Confort moindre",
      "Attente possible (transport partagé)",
    ],
  },
  {
    name: "Ambulance",
    averagePrice: "80 à 120 €",
    comfort: 4,
    availability: "24h/24",
    patientPosition: "Allongé possible",
    prescriptionRequired: true,
    pros: [
      "Adapté aux patients allongés",
      "Équipement médical complet",
      "Personnel formé aux urgences",
      "Disponible 24h/24",
    ],
    cons: [
      "Coût le plus élevé",
      "Réservé aux cas médicalement justifiés",
    ],
  },
];
