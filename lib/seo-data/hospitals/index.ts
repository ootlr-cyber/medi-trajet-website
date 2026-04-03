import { hospitalsDB } from "../hospitals-db";
import type { HospitalData } from "../types";

export function getAllHospitalSlugs(): string[] {
  return hospitalsDB.map((h) => h.slug);
}

export function getHospitalBySlug(slug: string): HospitalData | undefined {
  return hospitalsDB.find((h) => h.slug === slug);
}

export function getHospitalsByCity(citySlug: string): HospitalData[] {
  return hospitalsDB.filter((h) => h.city === citySlug);
}

export function getHospitalsByType(type: HospitalData["type"]): HospitalData[] {
  return hospitalsDB.filter((h) => h.type === type);
}

export function getHospitalsBySpecialty(specialty: string): HospitalData[] {
  return hospitalsDB.filter((h) =>
    h.specialties.some((s) => s.toLowerCase().includes(specialty.toLowerCase()))
  );
}

export { hospitalsDB };
