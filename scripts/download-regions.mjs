/**
 * Downloads region images from Wikimedia Commons.
 * Run: node scripts/download-regions.mjs
 */

import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join } from "path";

const REGIONS_DIR = "public/images/regions";

const regionWikiTitles = {
  "ile-de-france": "Île-de-France",
  "hauts-de-france": "Hauts-de-France",
  "grand-est": "Grand Est",
  "auvergne-rhone-alpes": "Auvergne-Rhône-Alpes",
  "nouvelle-aquitaine": "Nouvelle-Aquitaine",
  "occitanie": "Occitanie (région administrative)",
  "provence-alpes-cote-d-azur": "Provence-Alpes-Côte d'Azur",
  "bretagne": "Bretagne (région administrative)",
  "pays-de-la-loire": "Pays de la Loire",
  "normandie": "Normandie (région administrative)",
  "centre-val-de-loire": "Centre-Val de Loire",
  "bourgogne-franche-comte": "Bourgogne-Franche-Comté",
  "corse": "Corse",
  "martinique": "Martinique",
  "guadeloupe": "Guadeloupe",
  "guyane": "Guyane",
  "la-reunion": "La Réunion",
  "mayotte": "Mayotte",
};

async function getWikipediaImageUrl(title) {
  const url = `https://fr.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`;
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
    });
    if (!res.ok) return false;
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("svg")) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 5000) return false;
    await writeFile(destPath, buf);
    return true;
  } catch { return false; }
}

async function main() {
  await mkdir(REGIONS_DIR, { recursive: true });
  console.log("Downloading region images...\n");

  let ok = 0, fail = 0;
  for (const [slug, title] of Object.entries(regionWikiTitles)) {
    const dest = join(REGIONS_DIR, `${slug}.jpg`);
    if (existsSync(dest)) { ok++; continue; }

    const url = await getWikipediaImageUrl(title);
    if (url && await downloadImage(url, dest)) {
      ok++;
      console.log(`  ✓ ${slug}`);
    } else {
      // Try without parenthetical disambiguation
      const simpleTitle = title.replace(/ \(.*\)/, "");
      const url2 = simpleTitle !== title ? await getWikipediaImageUrl(simpleTitle) : null;
      if (url2 && await downloadImage(url2, dest)) {
        ok++;
        console.log(`  ✓ ${slug} (fallback)`);
      } else {
        fail++;
        console.log(`  ✗ ${slug}`);
      }
    }
    await new Promise(r => setTimeout(r, 200));
  }

  console.log(`\nDone: ${ok} images, ${fail} failed`);
}

main();
