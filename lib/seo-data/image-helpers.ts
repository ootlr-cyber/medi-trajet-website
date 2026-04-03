/**
 * Image helpers with cascade fallback: city → region → null
 * Static manifest — update when new images are added.
 */

const cityImages = new Set([
  "amiens", "arras", "aurillac", "avignon", "bar-le-duc", "beauvais",
  "bobigny", "bordeaux", "caen", "chalons-en-champagne", "chambery",
  "charleville-mezieres", "chartres", "clermont-ferrand", "colmar",
  "creteil", "dijon", "epinal", "evry-courcouronnes", "grenoble",
  "gueret", "laon", "le-mans", "lille", "lyon", "macon", "marseille",
  "melun", "metz", "mont-de-marsan", "montpellier", "nancy", "nanterre",
  "nantes", "nice", "paris", "pointe-a-pitre", "poitiers", "pontoise",
  "reims", "rennes", "rouen", "saint-etienne", "strasbourg", "tarbes",
  "toulouse", "tours", "troyes", "versailles",
]);

const hospitalImages = new Set([
  "chu-nice", "cochin", "hcl-lyon", "institut-paoli-calmettes",
  "lariboisiere", "necker", "pitie-salpetriere", "saint-louis",
]);

const regionImages = new Set([
  "auvergne-rhone-alpes", "bourgogne-franche-comte", "bretagne",
  "centre-val-de-loire", "corse", "grand-est", "guadeloupe", "guyane",
  "hauts-de-france", "ile-de-france", "la-reunion", "mayotte",
  "normandie", "nouvelle-aquitaine", "occitanie", "pays-de-la-loire",
  "provence-alpes-cote-d-azur",
]);

/** Map region names to image slugs */
const regionSlugMap: Record<string, string> = {
  "Île-de-France": "ile-de-france",
  "Hauts-de-France": "hauts-de-france",
  "Grand Est": "grand-est",
  "Auvergne-Rhône-Alpes": "auvergne-rhone-alpes",
  "Nouvelle-Aquitaine": "nouvelle-aquitaine",
  "Occitanie": "occitanie",
  "Provence-Alpes-Côte d'Azur": "provence-alpes-cote-d-azur",
  "Bretagne": "bretagne",
  "Pays de la Loire": "pays-de-la-loire",
  "Normandie": "normandie",
  "Centre-Val de Loire": "centre-val-de-loire",
  "Bourgogne-Franche-Comté": "bourgogne-franche-comte",
  "Corse": "corse",
  "Martinique": "martinique",
  "Guadeloupe": "guadeloupe",
  "Guyane": "guyane",
  "La Réunion": "la-reunion",
  "Mayotte": "mayotte",
};

/**
 * Returns an image path for a region.
 */
export function getRegionImagePath(regionName: string): string | null {
  const slug = regionSlugMap[regionName];
  if (slug && regionImages.has(slug)) {
    return `/images/regions/${slug}.jpg`;
  }
  return null;
}

/**
 * Returns the best available image for a city.
 * Cascade: city image → region image → null
 */
export function getCityImagePath(slug: string, regionName?: string): string | null {
  if (cityImages.has(slug)) {
    return `/images/cities/${slug}.jpg`;
  }
  if (regionName) {
    return getRegionImagePath(regionName);
  }
  return null;
}

/**
 * Returns the best available image for a hospital.
 * Cascade: hospital image → city image → region image → null
 */
export function getHospitalImagePath(slug: string, citySlug?: string, regionName?: string): string | null {
  if (hospitalImages.has(slug)) {
    return `/images/hospitals/${slug}.jpg`;
  }
  if (citySlug) {
    return getCityImagePath(citySlug, regionName);
  }
  if (regionName) {
    return getRegionImagePath(regionName);
  }
  return null;
}
