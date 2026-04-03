import Link from "next/link";
import { Building2, Stethoscope } from "lucide-react";
import type { HospitalType } from "@/lib/seo-data/types";

const typeLabels: Record<HospitalType, string> = {
  chu: "CHU",
  ch: "Centre hospitalier",
  clinique: "Clinique",
  dialyse: "Centre de dialyse",
  cancerologie: "Centre anticancéreux",
  ssr: "SSR / Rééducation",
  hopital: "Hôpital",
};

interface HospitalCardProps {
  name: string;
  slug: string;
  type: HospitalType;
  specialties: string[];
  address?: string;
}

export default function HospitalCard({
  name,
  slug,
  type,
  specialties,
  address,
}: HospitalCardProps) {
  return (
    <Link
      href={`/taxi-hopital-${slug}`}
      className="group block border border-gray-100 rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
          <Building2 className="w-4.5 h-4.5 text-secondary" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-dark text-sm group-hover:text-primary transition-colors truncate">
            {name}
          </h3>
          <p className="text-xs text-primary/70 font-medium mt-0.5">
            {typeLabels[type]}
          </p>
          {address && (
            <p className="text-xs text-gray-400 mt-0.5 truncate">{address}</p>
          )}
          {specialties.length > 0 && (
            <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
              <Stethoscope className="w-3 h-3 shrink-0" />
              <span className="truncate">
                {specialties.slice(0, 3).join(", ")}
                {specialties.length > 3 && ` +${specialties.length - 3}`}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
