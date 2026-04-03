"use client";

import { useCallback } from "react";
import MapExplorer from "@/components/seo/MapExplorer";
import type { CityData } from "@/lib/seo-data/types";

interface Props {
  cities: CityData[];
  hospitalCounts: Record<string, number>;
}

export default function MapExplorerWrapper({ cities, hospitalCounts }: Props) {
  const getHospitalCount = useCallback(
    (slug: string) => hospitalCounts[slug] || 0,
    [hospitalCounts]
  );

  return <MapExplorer cities={cities} getHospitalCount={getHospitalCount} />;
}
