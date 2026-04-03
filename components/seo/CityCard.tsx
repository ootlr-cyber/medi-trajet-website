import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";

interface CityCardProps {
  name: string;
  department: string;
  departmentCode: string;
  hospitalCount: number;
  slug: string;
}

export default function CityCard({
  name,
  department,
  departmentCode,
  hospitalCount,
  slug,
}: CityCardProps) {
  return (
    <Link
      href={`/taxi-conventionne-${slug}`}
      className="group block border border-gray-100 rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
          <MapPin className="w-4.5 h-4.5 text-primary" />
        </div>
        <div className="min-w-0">
          <h3 className="font-semibold text-dark text-sm group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            {department} ({departmentCode})
          </p>
          {hospitalCount > 0 && (
            <div className="flex items-center gap-1 mt-1.5 text-xs text-gray-400">
              <Building2 className="w-3 h-3" />
              {hospitalCount} établissement{hospitalCount > 1 ? "s" : ""}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
