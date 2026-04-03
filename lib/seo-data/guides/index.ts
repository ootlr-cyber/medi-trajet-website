import { guidesDB } from "../guides-db";
import type { GuideData } from "../types";

export function getAllGuideSlugs(): string[] {
  return guidesDB.map((g) => g.slug);
}

export function getGuideBySlug(slug: string): GuideData | undefined {
  return guidesDB.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: string): GuideData[] {
  return guidesDB.filter((g) => g.category === category);
}

export function getAllGuideCategories(): string[] {
  return Array.from(new Set(guidesDB.map((g) => g.category)));
}

export { guidesDB };
