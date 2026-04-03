/**
 * Retries downloading missing city images using English Wikipedia + direct Wikimedia search.
 * Run: node scripts/download-missing-cities.mjs
 */

import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

const CITIES_DIR = "public/images/cities";

// Cities that failed on first try — use English Wikipedia titles
const missingCities = {
  "evry-courcouronnes": "Évry, Essonne",
  "pontoise": "Pontoise",
  "melun": "Melun",
  "arras": "Arras",
  "laon": "Laon",
  "colmar": "Colmar",
  "metz": "Metz",
  "epinal": "Épinal",
  "bar-le-duc": "Bar-le-Duc",
  "chalons-en-champagne": "Châlons-en-Champagne",
  "troyes": "Troyes",
  "charleville-mezieres": "Charleville-Mézières",
  "chaumont": "Chaumont, Haute-Marne",
  "annecy": "Annecy",
  "bourg-en-bresse": "Bourg-en-Bresse",
  "valence": "Valence, Drôme",
  "privas": "Privas",
  "moulins": "Moulins, Allier",
  "le-puy-en-velay": "Le Puy-en-Velay",
  "limoges": "Limoges",
  "niort": "Niort",
  "la-rochelle": "La Rochelle",
  "angouleme": "Angoulême",
  "perigueux": "Périgueux",
  "agen": "Agen",
  "pau": "Pau, Pyrénées-Atlantiques",
  "tulle": "Tulle, France",
  "nimes": "Nîmes",
  "perpignan": "Perpignan",
  "carcassonne": "Carcassonne",
  "foix": "Foix",
  "auch": "Auch",
  "montauban": "Montauban",
  "albi": "Albi",
  "rodez": "Rodez",
  "cahors": "Cahors",
  "mende": "Mende, Lozère",
  "toulon": "Toulon",
  "digne-les-bains": "Digne-les-Bains",
  "gap": "Gap, Hautes-Alpes",
  "saint-brieuc": "Saint-Brieuc",
  "brest": "Brest, France",
  "quimper": "Quimper",
  "vannes": "Vannes",
  "angers": "Angers",
  "laval": "Laval, Mayenne",
  "la-roche-sur-yon": "La Roche-sur-Yon",
  "evreux": "Évreux",
  "alencon": "Alençon",
  "saint-lo": "Saint-Lô",
  "orleans": "Orléans",
  "blois": "Blois",
  "bourges": "Bourges",
  "chateauroux": "Châteauroux",
  "besancon": "Besançon",
  "auxerre": "Auxerre",
  "nevers": "Nevers",
  "lons-le-saunier": "Lons-le-Saunier",
  "vesoul": "Vesoul",
  "belfort": "Belfort",
  "ajaccio": "Ajaccio",
  "bastia": "Bastia",
  "fort-de-france": "Fort-de-France",
  "cayenne": "Cayenne",
  "saint-denis-reunion": "Saint-Denis, Réunion",
  "mamoudzou": "Mamoudzou",
};

async function getImageUrl(title, lang = "en") {
  const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "MediTrajet-ImageDownloader/1.0 (contact@meditrajet.fr)" },
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data.thumbnail?.source) {
      return data.thumbnail.source.replace(/\/\d+px-/, "/800px-");
    }
    return data.originalimage?.source || null;
  } catch { return null; }
}

async function downloadImage(imageUrl, destPath) {
  try {
    const res = await fetch(imageUrl, {
      headers: { "User-Agent": "MediTrajet-ImageDownloader/1.0 (contact@meditrajet.fr)" },
      redirect: "follow",
    });
    if (!res.ok) {
      // Try 400px fallback
      if (imageUrl.includes("/800px-")) {
        const res2 = await fetch(imageUrl.replace("/800px-", "/400px-"), {
          headers: { "User-Agent": "MediTrajet-ImageDownloader/1.0 (contact@meditrajet.fr)" },
        });
        if (!res2.ok) return false;
        const buf = Buffer.from(await res2.arrayBuffer());
        if (buf.length < 3000) return false;
        await writeFile(destPath, buf);
        return true;
      }
      return false;
    }
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("svg")) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 3000) return false;
    await writeFile(destPath, buf);
    return true;
  } catch { return false; }
}

async function main() {
  await mkdir(CITIES_DIR, { recursive: true });
  console.log("Retrying missing city images (English + French Wikipedia)...\n");

  let ok = 0, fail = 0;
  const slugs = Object.keys(missingCities).filter(
    slug => !existsSync(join(CITIES_DIR, `${slug}.jpg`))
  );

  console.log(`${slugs.length} cities to download\n`);

  for (const slug of slugs) {
    const title = missingCities[slug];

    // Try English Wikipedia
    let url = await getImageUrl(title, "en");
    if (url && await downloadImage(url, join(CITIES_DIR, `${slug}.jpg`))) {
      ok++;
      process.stdout.write(`\r  ${ok} ok / ${fail} skip / ${slugs.length} total`);
      await new Promise(r => setTimeout(r, 150));
      continue;
    }

    // Try French Wikipedia with simple name
    const simpleName = title.split(",")[0].trim();
    url = await getImageUrl(simpleName, "fr");
    if (url && await downloadImage(url, join(CITIES_DIR, `${slug}.jpg`))) {
      ok++;
      process.stdout.write(`\r  ${ok} ok / ${fail} skip / ${slugs.length} total`);
      await new Promise(r => setTimeout(r, 150));
      continue;
    }

    fail++;
    process.stdout.write(`\r  ${ok} ok / ${fail} skip / ${slugs.length} total`);
    await new Promise(r => setTimeout(r, 150));
  }

  console.log(`\n\nDone: ${ok} new images, ${fail} still missing`);
}

main();
