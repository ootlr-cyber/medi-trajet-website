/**
 * Downloads images from Wikimedia Commons for cities and hospitals.
 * Uses the Wikipedia REST API for more reliable image fetching.
 * Run: node scripts/download-images.mjs
 */

import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

const CITIES_DIR = "public/images/cities";
const HOSPITALS_DIR = "public/images/hospitals";

// All 103 city slugs → Wikipedia article names
const cityWikiTitles = {
  "paris": "Paris", "lyon": "Lyon", "marseille": "Marseille",
  "toulouse": "Toulouse", "bordeaux": "Bordeaux", "nantes": "Nantes",
  "lille": "Lille", "strasbourg": "Strasbourg", "montpellier": "Montpellier",
  "nice": "Nice", "rennes": "Rennes", "rouen": "Rouen",
  "grenoble": "Grenoble", "dijon": "Dijon", "clermont-ferrand": "Clermont-Ferrand",
  "reims": "Reims", "amiens": "Amiens", "caen": "Caen",
  "tours": "Tours", "poitiers": "Poitiers", "beauvais": "Beauvais",
  "nanterre": "Nanterre", "bobigny": "Bobigny", "creteil": "Créteil",
  "evry-courcouronnes": "Évry-Courcouronnes", "versailles": "Versailles",
  "pontoise": "Pontoise", "melun": "Melun", "arras": "Arras",
  "laon": "Laon", "colmar": "Colmar", "metz": "Metz",
  "nancy": "Nancy", "epinal": "Épinal", "bar-le-duc": "Bar-le-Duc",
  "chalons-en-champagne": "Châlons-en-Champagne", "troyes": "Troyes",
  "charleville-mezieres": "Charleville-Mézières", "chaumont": "Chaumont (Haute-Marne)",
  "saint-etienne": "Saint-Étienne", "chambery": "Chambéry", "annecy": "Annecy",
  "bourg-en-bresse": "Bourg-en-Bresse", "valence": "Valence (Drôme)",
  "privas": "Privas", "moulins": "Moulins (Allier)",
  "le-puy-en-velay": "Le Puy-en-Velay", "aurillac": "Aurillac",
  "limoges": "Limoges", "niort": "Niort", "la-rochelle": "La Rochelle",
  "angouleme": "Angoulême", "perigueux": "Périgueux", "agen": "Agen",
  "mont-de-marsan": "Mont-de-Marsan", "pau": "Pau",
  "tulle": "Tulle", "gueret": "Guéret",
  "nimes": "Nîmes", "perpignan": "Perpignan", "carcassonne": "Carcassonne",
  "foix": "Foix", "tarbes": "Tarbes", "auch": "Auch",
  "montauban": "Montauban", "albi": "Albi", "rodez": "Rodez",
  "cahors": "Cahors", "mende": "Mende (Lozère)",
  "toulon": "Toulon", "avignon": "Avignon",
  "digne-les-bains": "Digne-les-Bains", "gap": "Gap (Hautes-Alpes)",
  "saint-brieuc": "Saint-Brieuc", "brest": "Brest (France)",
  "quimper": "Quimper", "vannes": "Vannes",
  "angers": "Angers", "le-mans": "Le Mans",
  "laval": "Laval (Mayenne)", "la-roche-sur-yon": "La Roche-sur-Yon",
  "evreux": "Évreux", "alencon": "Alençon", "saint-lo": "Saint-Lô",
  "orleans": "Orléans", "chartres": "Chartres", "blois": "Blois",
  "bourges": "Bourges", "chateauroux": "Châteauroux",
  "besancon": "Besançon", "auxerre": "Auxerre", "nevers": "Nevers",
  "macon": "Mâcon", "lons-le-saunier": "Lons-le-Saunier",
  "vesoul": "Vesoul", "belfort": "Belfort",
  "ajaccio": "Ajaccio", "bastia": "Bastia",
  "fort-de-france": "Fort-de-France", "pointe-a-pitre": "Pointe-à-Pitre",
  "cayenne": "Cayenne", "saint-denis-reunion": "Saint-Denis (La Réunion)",
  "mamoudzou": "Mamoudzou",
};

// Major hospital slugs → Wikipedia search terms
const hospitalWikiTitles = {
  "pitie-salpetriere": "Hôpital de la Pitié-Salpêtrière",
  "hegp": "Hôpital européen Georges-Pompidou",
  "saint-louis": "Hôpital Saint-Louis (Paris)",
  "lariboisiere": "Hôpital Lariboisière",
  "cochin": "Hôpital Cochin",
  "necker": "Hôpital Necker-Enfants malades",
  "bichat": "Hôpital Bichat-Claude-Bernard",
  "beaujon": "Hôpital Beaujon",
  "robert-debre": "Hôpital Robert-Debré",
  "institut-curie-paris": "Institut Curie",
  "gustave-roussy": "Institut Gustave-Roussy",
  "chru-lille": "Centre hospitalier régional universitaire de Lille",
  "chu-amiens-picardie": "CHU Amiens-Picardie",
  "chru-strasbourg": "Hôpitaux universitaires de Strasbourg",
  "chru-nancy": "CHU de Nancy",
  "chu-reims": "CHU de Reims",
  "hcl-lyon": "Hospices civils de Lyon",
  "centre-leon-berard": "Centre Léon-Bérard",
  "chu-grenoble-alpes": "CHU Grenoble-Alpes",
  "chu-bordeaux": "CHU de Bordeaux",
  "institut-bergonie": "Institut Bergonié",
  "chu-toulouse": "CHU de Toulouse",
  "chu-montpellier": "CHU de Montpellier",
  "ap-hm": "Assistance publique - Hôpitaux de Marseille",
  "institut-paoli-calmettes": "Institut Paoli-Calmettes",
  "chu-nice": "CHU de Nice",
  "chu-rennes": "CHU de Rennes",
  "chru-brest": "CHU de Brest",
  "chu-nantes": "CHU de Nantes",
  "chu-angers": "CHU d'Angers",
  "chu-rouen": "CHU de Rouen",
  "centre-henri-becquerel": "Centre Henri-Becquerel",
  "chu-caen": "CHU de Caen",
  "chru-tours": "CHU de Tours",
  "chu-dijon": "CHU Dijon Bourgogne",
  "chru-besancon": "CHU de Besançon",
};

/**
 * Uses the Wikipedia REST API (more reliable for images)
 */
async function getWikipediaImageUrl(title) {
  // Try the REST API first (returns main image reliably)
  const restUrl = `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  try {
    const res = await fetch(restUrl, {
      headers: { "User-Agent": "MediTrajet-ImageDownloader/1.0 (contact@meditrajet.fr)" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    // Prefer thumbnail at reasonable size
    if (data.thumbnail?.source) {
      // Replace width in URL to get 800px version
      return data.thumbnail.source.replace(/\/\d+px-/, "/800px-");
    }
    if (data.originalimage?.source) {
      return data.originalimage.source;
    }
    return null;
  } catch {
    return null;
  }
}

async function downloadImage(imageUrl, destPath) {
  try {
    const res = await fetch(imageUrl, {
      headers: { "User-Agent": "MediTrajet-ImageDownloader/1.0 (contact@meditrajet.fr)" },
    });
    if (!res.ok) {
      // If 800px fails, try original URL without size modification
      return false;
    }
    const contentType = res.headers.get("content-type") || "";
    // Skip SVG files - they're not photos
    if (contentType.includes("svg")) return false;
    const buffer = Buffer.from(await res.arrayBuffer());
    // Skip tiny files (likely broken)
    if (buffer.length < 5000) return false;
    await writeFile(destPath, buffer);
    return true;
  } catch {
    return false;
  }
}

async function processEntries(entries, dir, label) {
  let success = 0;
  let failed = 0;
  const slugs = Object.keys(entries);
  const total = slugs.length;

  for (const slug of slugs) {
    const destPath = join(dir, `${slug}.jpg`);
    if (existsSync(destPath)) {
      success++;
      continue;
    }

    const wikiTitle = entries[slug];
    const imageUrl = await getWikipediaImageUrl(wikiTitle);

    if (!imageUrl) {
      failed++;
      continue;
    }

    let ok = await downloadImage(imageUrl, destPath);

    // If 800px failed, try the original thumbnail URL
    if (!ok && imageUrl.includes("/800px-")) {
      const fallbackUrl = imageUrl.replace("/800px-", "/400px-");
      ok = await downloadImage(fallbackUrl, destPath);
    }

    if (ok) {
      success++;
    } else {
      failed++;
    }

    process.stdout.write(`\r  ${label}: ${success} ok / ${failed} skip / ${total} total`);
    // Rate limit
    await new Promise((r) => setTimeout(r, 150));
  }

  console.log(`\n  ${label} DONE: ${success} images, ${failed} skipped`);
  return { success, failed };
}

async function main() {
  console.log("Downloading images from Wikimedia Commons...\n");

  await mkdir(CITIES_DIR, { recursive: true });
  await mkdir(HOSPITALS_DIR, { recursive: true });

  console.log("=== CITIES ===");
  const citiesResult = await processEntries(cityWikiTitles, CITIES_DIR, "Cities");

  console.log("\n=== HOSPITALS ===");
  const hospitalsResult = await processEntries(hospitalWikiTitles, HOSPITALS_DIR, "Hospitals");

  console.log(`\n=== SUMMARY ===`);
  console.log(`Cities: ${citiesResult.success} images`);
  console.log(`Hospitals: ${hospitalsResult.success} images`);
  console.log(`Total: ${citiesResult.success + hospitalsResult.success} images downloaded`);
}

main();
