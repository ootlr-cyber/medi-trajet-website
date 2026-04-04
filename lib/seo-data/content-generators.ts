import type { CityData, HospitalData, FAQ, SEOMeta } from "./types";

// Variations pour éviter la répétition
const intros = [
  (name: string, dep: string, code: string, region: string, pop: number, count: number) =>
    `Située dans le ${dep} (${code}), ${name} compte ${pop.toLocaleString("fr-FR")} habitants et ${count} établissement${count > 1 ? "s" : ""} de santé. La ville est rattachée à la région ${region}.`,
  (name: string, dep: string, code: string, region: string, pop: number, count: number) =>
    `${name}, préfecture de ${dep} (${code}), fait partie de la région ${region}. Ses ${pop.toLocaleString("fr-FR")} habitants ont accès à ${count} établissement${count > 1 ? "s" : ""} de santé sur place.`,
  (name: string, dep: string, code: string, region: string, pop: number, count: number) =>
    `Avec ${pop.toLocaleString("fr-FR")} habitants, ${name} est le chef-lieu du département ${dep} (${code}) en ${region}. On y trouve ${count} établissement${count > 1 ? "s" : ""} de santé.`,
];

const chuVariants = [
  (names: string) => `On y trouve notamment ${names}, qui accueille des patients bien au-delà du département pour des soins spécialisés.`,
  (names: string) => `Le ${names} est l'un des principaux pôles de soins du secteur et reçoit des patients de plusieurs départements voisins.`,
  (names: string) => `Parmi les établissements majeurs : ${names}. Des patients de toute la région s'y rendent régulièrement.`,
];

const dialyseVariants = [
  (name: string) => `Pour les patients dialysés autour de ${name}, le taxi conventionné est souvent le moyen de transport le plus adapté. Trois séances par semaine, 156 trajets dans l'année : il faut pouvoir compter sur un chauffeur fiable. La CPAM prend en charge ces déplacements à 100 % dans le cadre de l'ALD.`,
  (name: string) => `La dialyse, c'est trois rendez-vous par semaine. Pour les patients de ${name}, ça représente plus de 150 trajets par an. Le taxi conventionné permet d'assurer ces allers-retours en toute tranquillité, avec une prise en charge complète par l'Assurance Maladie.`,
];

const canceroVariants = [
  (name: string) => `Les patients en traitement oncologique à ${name} peuvent se rendre à leurs séances de chimio ou de radiothérapie en taxi conventionné. La CPAM prend en charge le transport sur prescription médicale.`,
  (name: string) => `Chimiothérapie, radiothérapie, consultations de suivi : les patients traités pour un cancer à ${name} ont droit au transport conventionné, remboursé par la CPAM sur ordonnance.`,
];

const genericVariants = [
  (name: string, dep: string) => `Consultation chez un spécialiste, examen médical, traitement régulier : les habitants de ${name} et du ${dep} peuvent se déplacer en taxi conventionné. Il suffit d'une prescription de votre médecin pour que la CPAM prenne en charge le trajet.`,
  (name: string, dep: string) => `Besoin de vous rendre à un rendez-vous médical à ${name} ? Le taxi conventionné CPAM est une option accessible à tous les patients du ${dep} qui disposent d'une prescription de transport.`,
];

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

function nameHash(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = ((h << 5) - h + name.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function generateCityAnswerBox(city: CityData, hospitalCount: number): string {
  const h = nameHash(city.name);
  const variants = [
    `Taxi conventionné à ${city.name} : ${hospitalCount} établissements desservis dans le ${city.department} (${city.departmentCode}). Transport remboursé par la CPAM, pas d'avance de frais pour les patients en ALD.`,
    `À ${city.name}, ${hospitalCount} hôpitaux et centres de soins sont accessibles en taxi conventionné CPAM. Remboursement Assurance Maladie, tiers payant possible.`,
    `${hospitalCount} établissements de santé à ${city.name} (${city.departmentCode}). Transport en taxi conventionné remboursé par la CPAM. Appelez le ${city.cpam.phone || "36 46"} pour toute question.`,
  ];
  return pick(variants, h);
}

export function generateCityIntro(city: CityData, hospitals: HospitalData[]): string[] {
  const h = nameHash(city.name);
  const hasDialyse = hospitals.some((ho) => ho.specialties.some((s) => s.toLowerCase().includes("dialyse") || s.toLowerCase().includes("néphrologie")));
  const hasCancero = hospitals.some((ho) => ho.type === "cancerologie" || ho.specialties.some((s) => s.toLowerCase().includes("oncologie")));
  const hasCHU = hospitals.some((ho) => ho.type === "chu");

  const paragraphs: string[] = [];

  paragraphs.push(pick(intros, h)(city.name, city.department, city.departmentCode, city.region, city.population, hospitals.length));

  if (hasCHU) {
    const chuNames = hospitals.filter((ho) => ho.type === "chu").map((ho) => ho.name).join(", ");
    paragraphs.push(pick(chuVariants, h)(chuNames));
  }

  if (hasDialyse) {
    paragraphs.push(pick(dialyseVariants, h)(city.name));
  } else if (hasCancero) {
    paragraphs.push(pick(canceroVariants, h)(city.name));
  } else {
    paragraphs.push(pick(genericVariants, h)(city.name, city.department));
  }

  return paragraphs;
}

export function generateCityFAQ(city: CityData, hospitals: HospitalData[]): FAQ[] {
  const hospitalNames = hospitals.slice(0, 3).map((ho) => ho.name).join(", ");
  return [
    {
      q: `Comment prendre un taxi conventionné à ${city.name} ?`,
      a: `Votre médecin vous prescrit un bon de transport. Vous réservez le taxi, il vient vous chercher, et c'est la CPAM qui paie directement le transporteur. Vous n'avancez rien.`,
    },
    {
      q: `Est-ce que le taxi médical est remboursé à ${city.name} ?`,
      a: `Oui. La CPAM rembourse 65 % du tarif conventionné. Pour les patients en ALD ou en CSS, c'est 100 %. La ${city.cpam.name} traite les remboursements du ${city.department}.`,
    },
    {
      q: `Quels hôpitaux sont desservis à ${city.name} ?`,
      a: `Tous les établissements de ${city.name} sont accessibles en taxi conventionné : ${hospitalNames}${hospitals.length > 3 ? ` et ${hospitals.length - 3} autre${hospitals.length - 3 > 1 ? "s" : ""}` : ""}.`,
    },
    {
      q: `C'est quoi le tiers payant pour le taxi médical ?`,
      a: `Le tiers payant, c'est simple : vous ne payez rien. La CPAM règle le transporteur directement. Il faut juste montrer votre bon de transport et votre carte Vitale au chauffeur.`,
    },
    {
      q: `La dialyse, c'est remboursé en taxi à ${city.name} ?`,
      a: `Oui, à 100 %. Les patients dialysés sont en ALD. Trois séances par semaine, tout est pris en charge. Vous pouvez garder le même chauffeur à chaque trajet.`,
    },
  ];
}

export function generateCityMeta(city: CityData, hospitalCount: number): SEOMeta {
  return {
    title: `Taxi conventionné ${city.name} (${city.departmentCode}) | Transport médical CPAM`,
    description: `Taxi conventionné CPAM à ${city.name}. ${hospitalCount} établissements desservis, remboursé par l'Assurance Maladie. Tiers payant, pas d'avance de frais.`,
    canonical: `/taxi-conventionne-${city.slug}`,
  };
}

// Hôpitaux

const typeLabelsLong: Record<string, string> = {
  chu: "centre hospitalier universitaire",
  ch: "centre hospitalier",
  clinique: "clinique",
  dialyse: "centre de dialyse",
  cancerologie: "centre anticancéreux",
  ssr: "centre de rééducation",
  hopital: "hôpital",
};

export function generateHospitalAnswerBox(hospital: HospitalData, cityName: string): string {
  const h = nameHash(hospital.name);
  const variants = [
    `${hospital.name} se trouve au ${hospital.address} à ${cityName}. Spécialités : ${hospital.specialties.slice(0, 3).join(", ")}. Accessible en taxi conventionné, remboursé par la CPAM.`,
    `Pour vous rendre à ${hospital.name} (${cityName}), le taxi conventionné est remboursé par la CPAM. L'établissement propose des soins en ${hospital.specialties.slice(0, 3).join(", ")}.`,
  ];
  return pick(variants, h);
}

export function generateHospitalIntro(hospital: HospitalData, cityName: string): string[] {
  const h = nameHash(hospital.name);
  const typeLabel = typeLabelsLong[hospital.type] || "établissement de santé";
  const paragraphs: string[] = [];

  const introVariants = [
    `${hospital.name} est un ${typeLabel} à ${cityName}, au ${hospital.address}. L'établissement est spécialisé en ${hospital.specialties.slice(0, 4).join(", ")}${hospital.specialties.length > 4 ? ` (et ${hospital.specialties.length - 4} autres spécialités)` : ""}.${hospital.beds ? ` Il dispose de ${hospital.beds} lits.` : ""}`,
    `Situé au ${hospital.address} à ${cityName}, ${hospital.name} est un ${typeLabel} qui propose des soins en ${hospital.specialties.slice(0, 4).join(", ")}.${hospital.beds ? ` L'établissement compte ${hospital.beds} lits et accueille des patients de tout le département.` : ""}`,
  ];
  paragraphs.push(pick(introVariants, h));

  const transportVariants = [
    `Si vous avez un rendez-vous à ${hospital.name}, votre médecin peut vous prescrire un bon de transport. Le trajet en taxi conventionné est alors remboursé par la CPAM. En ALD, le remboursement est total et vous n'avez rien à avancer.`,
    `Le trajet vers ${hospital.name} peut être pris en charge par l'Assurance Maladie. Il vous faut une ordonnance de transport de votre médecin. Les patients en ALD ne paient rien grâce au tiers payant.`,
  ];
  paragraphs.push(pick(transportVariants, h));

  if (hospital.type === "dialyse" || hospital.specialties.some((s) => s.toLowerCase().includes("dialyse"))) {
    paragraphs.push(
      `Les patients dialysés viennent ici trois fois par semaine. C'est un rythme soutenu, et il est important d'avoir un transport fiable. Le taxi conventionné permet de garder le même chauffeur d'un trajet à l'autre.`
    );
  }

  return paragraphs;
}

export function generateHospitalFAQ(hospital: HospitalData, cityName: string): FAQ[] {
  return [
    {
      q: `Comment aller à ${hospital.name} en taxi conventionné ?`,
      a: `Demandez un bon de transport à votre médecin, puis réservez un taxi conventionné. Le chauffeur vous dépose à l'entrée patients. Pensez à prendre votre carte Vitale.`,
    },
    {
      q: `Le trajet vers ${hospital.name} est-il remboursé ?`,
      a: `Oui, si vous avez une prescription de transport. La CPAM rembourse 65 % du trajet (100 % en ALD ou CSS).`,
    },
    {
      q: `Combien coûte un taxi conventionné pour ${hospital.name} ?`,
      a: `Ça dépend de la distance. En moyenne, un trajet coûte autour de 63 euros, mais c'est la CPAM qui paie. Avec le tiers payant, vous ne sortez pas votre portefeuille.`,
    },
  ];
}

export function generateHospitalMeta(hospital: HospitalData, cityName: string): SEOMeta {
  return {
    title: `Taxi conventionné ${hospital.name}, ${cityName} | Transport médical`,
    description: `Taxi conventionné pour ${hospital.name} à ${cityName}. ${hospital.specialties.slice(0, 3).join(", ")}. Remboursé par la CPAM, tiers payant disponible.`,
    canonical: `/taxi-hopital-${hospital.slug}`,
  };
}
