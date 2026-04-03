import { citiesDB } from "../cities-db";
import type { CityData } from "../types";

export function getAllCitySlugs(): string[] {
  return citiesDB.map((c) => c.slug);
}

export function getCityBySlug(slug: string): CityData | undefined {
  return citiesDB.find((c) => c.slug === slug);
}

export function getCitiesByRegion(region: string): CityData[] {
  return citiesDB.filter((c) => c.region === region);
}

export function getAllRegions(): string[] {
  return [...new Set(citiesDB.map((c) => c.region))];
}

export function getCitiesByDepartmentCode(code: string): CityData[] {
  return citiesDB.filter((c) => c.departmentCode === code);
}

export function getNearbyCities(slug: string): CityData[] {
  const city = getCityBySlug(slug);
  if (!city) return [];
  return city.nearbyCities
    .map((s) => getCityBySlug(s))
    .filter((c): c is CityData => c !== undefined);
}

export { citiesDB };
