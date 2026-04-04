import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez la mission MediTrajet : simplifier le transport médical partagé pour les établissements, patients et transporteurs. Équipe, valeurs et vision.",
  alternates: { canonical: "/a-propos" },
};

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return children;
}
