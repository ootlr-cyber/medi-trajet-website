import type { HospitalData } from "./types";

/**
 * Database of 200+ French hospitals, clinics, and dialysis centers.
 * Each hospital is referenced by its slug from cities-db.ts.
 */
export const hospitalsDB: HospitalData[] = [
  // ═══════════════════════════════════════════════════════════════
  // ─── Île-de-France ─────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Paris
  {
    slug: "pitie-salpetriere",
    name: "Hôpital Pitié-Salpêtrière (AP-HP)",
    finess: "750100018",
    type: "chu",
    address: "47-83 boulevard de l'Hôpital, 75013 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Neurologie", "Cardiologie", "Urgences", "Chirurgie", "Pneumologie", "Oncologie", "Rhumatologie", "Gastro-entérologie"],
    beds: 1600,
  },
  {
    slug: "hegp",
    name: "Hôpital Européen Georges-Pompidou (AP-HP)",
    finess: "750150013",
    type: "chu",
    address: "20 rue Leblanc, 75015 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Cardiologie", "Chirurgie", "Oncologie", "Urgences", "Néphrologie", "Dermatologie"],
    beds: 795,
  },
  {
    slug: "saint-louis",
    name: "Hôpital Saint-Louis (AP-HP)",
    finess: "750100075",
    type: "chu",
    address: "1 avenue Claude Vellefaux, 75010 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Oncologie", "Dermatologie", "Chirurgie", "Rhumatologie", "Radiothérapie"],
    beds: 620,
  },
  {
    slug: "lariboisiere",
    name: "Hôpital Lariboisière (AP-HP)",
    finess: "750100109",
    type: "chu",
    address: "2 rue Ambroise Paré, 75010 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "ORL", "Ophtalmologie"],
    beds: 660,
  },
  {
    slug: "cochin",
    name: "Hôpital Cochin (AP-HP)",
    finess: "750100125",
    type: "chu",
    address: "27 rue du Faubourg Saint-Jacques, 75014 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Maternité", "Chirurgie", "Rhumatologie", "Gastro-entérologie", "Urgences", "Dermatologie"],
    beds: 1050,
  },
  {
    slug: "necker",
    name: "Hôpital Necker - Enfants malades (AP-HP)",
    finess: "750100141",
    type: "chu",
    address: "149 rue de Sèvres, 75015 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Pédiatrie", "Chirurgie", "Néphrologie", "Urgences", "Neurologie"],
    beds: 550,
  },
  {
    slug: "tenon",
    name: "Hôpital Tenon (AP-HP)",
    finess: "750100158",
    type: "chu",
    address: "4 rue de la Chine, 75020 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Oncologie", "Néphrologie", "Chirurgie", "Pneumologie", "Urologie"],
    beds: 530,
  },
  {
    slug: "bichat",
    name: "Hôpital Bichat - Claude-Bernard (AP-HP)",
    finess: "750100166",
    type: "chu",
    address: "46 rue Henri Huchard, 75018 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Cardiologie", "Chirurgie", "Urgences", "Pneumologie", "Gastro-entérologie"],
    beds: 780,
  },
  {
    slug: "beaujon",
    name: "Hôpital Beaujon (AP-HP)",
    finess: "750100182",
    type: "chu",
    address: "100 boulevard du Général Leclerc, 92110 Clichy",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Chirurgie", "Gastro-entérologie", "Urgences", "Oncologie"],
    beds: 460,
  },
  {
    slug: "saint-antoine",
    name: "Hôpital Saint-Antoine (AP-HP)",
    finess: "750100190",
    type: "chu",
    address: "184 rue du Faubourg Saint-Antoine, 75012 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Gastro-entérologie", "Chirurgie", "Oncologie", "Urgences", "Rhumatologie"],
    beds: 680,
  },
  {
    slug: "robert-debre",
    name: "Hôpital Robert-Debré (AP-HP)",
    finess: "750100208",
    type: "chu",
    address: "48 boulevard Sérurier, 75019 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Pédiatrie", "Chirurgie", "Urgences", "Neurologie", "Psychiatrie"],
    beds: 460,
  },
  {
    slug: "armand-trousseau",
    name: "Hôpital Armand-Trousseau (AP-HP)",
    finess: "750100216",
    type: "chu",
    address: "26 avenue du Docteur Arnold Netter, 75012 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Pédiatrie", "Chirurgie", "Urgences", "ORL", "Ophtalmologie"],
    beds: 380,
  },
  {
    slug: "institut-curie-paris",
    name: "Institut Curie - Paris",
    finess: "750100232",
    type: "cancerologie",
    address: "26 rue d'Ulm, 75005 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 180,
  },
  {
    slug: "gustave-roussy",
    name: "Institut Gustave Roussy",
    finess: "940100027",
    type: "cancerologie",
    address: "114 rue Édouard Vaillant, 94805 Villejuif",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs", "Dermatologie"],
    beds: 420,
  },

  // Nanterre (Hauts-de-Seine)
  {
    slug: "hopital-max-fourestier",
    name: "Hôpital Max Fourestier",
    finess: "920100013",
    type: "ch",
    address: "403 avenue de la République, 92000 Nanterre",
    city: "nanterre",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Pédiatrie", "Gériatrie"],
    beds: 420,
  },
  {
    slug: "hopital-louis-mourier",
    name: "Hôpital Louis-Mourier (AP-HP)",
    finess: "920100021",
    type: "chu",
    address: "178 rue des Renouillers, 92700 Colombes",
    city: "nanterre",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gastro-entérologie", "Pneumologie"],
    beds: 380,
  },

  // Bobigny (Seine-Saint-Denis)
  {
    slug: "hopital-avicenne",
    name: "Hôpital Avicenne (AP-HP)",
    finess: "930100011",
    type: "chu",
    address: "125 rue de Stalingrad, 93000 Bobigny",
    city: "bobigny",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    specialties: ["Urgences", "Chirurgie", "Cardiologie", "Neurologie", "Pneumologie", "Oncologie"],
    beds: 540,
  },
  {
    slug: "hopital-jean-verdier",
    name: "Hôpital Jean Verdier (AP-HP)",
    finess: "930100029",
    type: "chu",
    address: "Avenue du 14 Juillet, 93140 Bondy",
    city: "bobigny",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gastro-entérologie"],
    beds: 320,
  },

  // Créteil (Val-de-Marne)
  {
    slug: "chu-henri-mondor",
    name: "CHU Henri Mondor (AP-HP)",
    finess: "940100035",
    type: "chu",
    address: "51 avenue du Maréchal de Lattre de Tassigny, 94010 Créteil",
    city: "creteil",
    department: "Val-de-Marne",
    departmentCode: "94",
    specialties: ["Urgences", "Chirurgie", "Cardiologie", "Neurologie", "Néphrologie", "Dermatologie"],
    beds: 900,
  },
  {
    slug: "hopital-intercommunal-creteil",
    name: "Centre Hospitalier Intercommunal de Créteil",
    finess: "940100043",
    type: "ch",
    address: "40 avenue de Verdun, 94010 Créteil",
    city: "creteil",
    department: "Val-de-Marne",
    departmentCode: "94",
    specialties: ["Urgences", "Maternité", "Pédiatrie", "Chirurgie", "Ophtalmologie"],
    beds: 530,
  },

  // Évry-Courcouronnes (Essonne)
  {
    slug: "ch-sud-francilien",
    name: "Centre Hospitalier Sud Francilien",
    finess: "910100015",
    type: "ch",
    address: "40 avenue Serge Dassault, 91100 Corbeil-Essonnes",
    city: "evry-courcouronnes",
    department: "Essonne",
    departmentCode: "91",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Pédiatrie", "Oncologie"],
    beds: 1000,
  },

  // Versailles (Yvelines)
  {
    slug: "ch-versailles",
    name: "Centre Hospitalier de Versailles",
    finess: "780100016",
    type: "ch",
    address: "177 rue de Versailles, 78150 Le Chesnay-Rocquencourt",
    city: "versailles",
    department: "Yvelines",
    departmentCode: "78",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Pédiatrie"],
    beds: 850,
  },

  // Pontoise (Val-d'Oise)
  {
    slug: "ch-rene-dubos",
    name: "Centre Hospitalier René-Dubos",
    finess: "950100016",
    type: "ch",
    address: "6 avenue de l'Île-de-France, 95300 Pontoise",
    city: "pontoise",
    department: "Val-d'Oise",
    departmentCode: "95",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 580,
  },

  // Melun (Seine-et-Marne)
  {
    slug: "ch-melun",
    name: "Centre Hospitalier de Melun",
    finess: "770100013",
    type: "ch",
    address: "2 rue Fréteau de Pény, 77000 Melun",
    city: "melun",
    department: "Seine-et-Marne",
    departmentCode: "77",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 470,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Hauts-de-France ───────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Lille
  {
    slug: "chru-lille",
    name: "CHRU de Lille",
    finess: "590780193",
    type: "chu",
    address: "2 avenue Oscar Lambret, 59000 Lille",
    city: "lille",
    department: "Nord",
    departmentCode: "59",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Néphrologie", "Pneumologie"],
    beds: 3200,
  },
  {
    slug: "centre-oscar-lambret",
    name: "Centre Oscar Lambret",
    finess: "590780201",
    type: "cancerologie",
    address: "3 rue Frédéric Combemale, 59020 Lille",
    city: "lille",
    department: "Nord",
    departmentCode: "59",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 180,
  },
  {
    slug: "hopital-saint-vincent",
    name: "Hôpital Saint-Vincent de Paul",
    finess: "590780219",
    type: "hopital",
    address: "Boulevard de Belfort, 59000 Lille",
    city: "lille",
    department: "Nord",
    departmentCode: "59",
    specialties: ["Chirurgie", "Cardiologie", "Maternité", "Pédiatrie", "Urgences"],
    beds: 450,
  },

  // Arras
  {
    slug: "ch-arras",
    name: "Centre Hospitalier d'Arras",
    finess: "620100016",
    type: "ch",
    address: "57 avenue Winston Churchill, 62000 Arras",
    city: "arras",
    department: "Pas-de-Calais",
    departmentCode: "62",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 550,
  },

  // Amiens
  {
    slug: "chu-amiens-picardie",
    name: "CHU Amiens-Picardie",
    finess: "800100012",
    type: "chu",
    address: "Place Victor Pauchet, 80000 Amiens",
    city: "amiens",
    department: "Somme",
    departmentCode: "80",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Pneumologie"],
    beds: 1400,
  },

  // Beauvais
  {
    slug: "ch-simone-veil-beauvais",
    name: "Centre Hospitalier Simone Veil - Beauvais",
    finess: "600100013",
    type: "ch",
    address: "102 rue de la Mie au Roy, 60000 Beauvais",
    city: "beauvais",
    department: "Oise",
    departmentCode: "60",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 480,
  },
  {
    slug: "centre-dialyse-beauvais",
    name: "Centre de Dialyse de Beauvais",
    finess: "600100021",
    type: "dialyse",
    address: "14 rue de la Convention, 60000 Beauvais",
    city: "beauvais",
    department: "Oise",
    departmentCode: "60",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 30,
  },

  // Laon
  {
    slug: "ch-laon",
    name: "Centre Hospitalier de Laon",
    finess: "020100013",
    type: "ch",
    address: "33 rue Marcellin Berthelot, 02000 Laon",
    city: "laon",
    department: "Aisne",
    departmentCode: "02",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 350,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Grand Est ─────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Strasbourg
  {
    slug: "chru-strasbourg",
    name: "CHRU de Strasbourg - Hôpitaux Universitaires",
    finess: "670780055",
    type: "chu",
    address: "1 place de l'Hôpital, 67000 Strasbourg",
    city: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie", "Rhumatologie"],
    beds: 2500,
  },
  {
    slug: "centre-paul-strauss",
    name: "Centre Paul Strauss",
    finess: "670780063",
    type: "cancerologie",
    address: "3 rue de la Porte de l'Hôpital, 67000 Strasbourg",
    city: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 140,
  },

  // Colmar
  {
    slug: "ch-colmar",
    name: "Hôpitaux Civils de Colmar",
    finess: "680100016",
    type: "ch",
    address: "39 avenue de la Liberté, 68000 Colmar",
    city: "colmar",
    department: "Haut-Rhin",
    departmentCode: "68",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 680,
  },

  // Metz
  {
    slug: "chr-metz-thionville",
    name: "CHR Metz-Thionville",
    finess: "570100015",
    type: "ch",
    address: "1 allée du Château, 57530 Ars-Laquenexy",
    city: "metz",
    department: "Moselle",
    departmentCode: "57",
    specialties: ["Urgences", "Cardiologie", "Chirurgie", "Maternité", "Oncologie", "Neurologie", "Pédiatrie"],
    beds: 1900,
  },

  // Nancy
  {
    slug: "chru-nancy",
    name: "CHRU de Nancy",
    finess: "540100013",
    type: "chu",
    address: "29 avenue du Maréchal de Lattre de Tassigny, 54000 Nancy",
    city: "nancy",
    department: "Meurthe-et-Moselle",
    departmentCode: "54",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Néphrologie"],
    beds: 1700,
  },
  {
    slug: "centre-alexis-vautrin",
    name: "Institut de Cancérologie de Lorraine - Alexis Vautrin",
    finess: "540100021",
    type: "cancerologie",
    address: "6 avenue de Bourgogne, 54500 Vandoeuvre-lès-Nancy",
    city: "nancy",
    department: "Meurthe-et-Moselle",
    departmentCode: "54",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 150,
  },

  // Épinal
  {
    slug: "ch-epinal",
    name: "Centre Hospitalier Émile Durkheim - Épinal",
    finess: "880100011",
    type: "ch",
    address: "3 avenue Robert Schuman, 88000 Épinal",
    city: "epinal",
    department: "Vosges",
    departmentCode: "88",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie", "Cardiologie"],
    beds: 400,
  },

  // Bar-le-Duc
  {
    slug: "ch-bar-le-duc",
    name: "Centre Hospitalier de Bar-le-Duc",
    finess: "550100017",
    type: "ch",
    address: "1 boulevard d'Argonne, 55000 Bar-le-Duc",
    city: "bar-le-duc",
    department: "Meuse",
    departmentCode: "55",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 280,
  },

  // Châlons-en-Champagne
  {
    slug: "ch-chalons-en-champagne",
    name: "Centre Hospitalier de Châlons-en-Champagne",
    finess: "510100015",
    type: "ch",
    address: "51 rue du Commandant Derrien, 51000 Châlons-en-Champagne",
    city: "chalons-en-champagne",
    department: "Marne",
    departmentCode: "51",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie", "Cardiologie"],
    beds: 400,
  },

  // Reims
  {
    slug: "chu-reims",
    name: "CHU de Reims",
    finess: "510100023",
    type: "chu",
    address: "45 rue Cognacq-Jay, 51092 Reims",
    city: "reims",
    department: "Marne",
    departmentCode: "51",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Pneumologie"],
    beds: 1800,
  },
  {
    slug: "institut-jean-godinot",
    name: "Institut Jean Godinot",
    finess: "510100031",
    type: "cancerologie",
    address: "1 rue du Général Koenig, 51100 Reims",
    city: "reims",
    department: "Marne",
    departmentCode: "51",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 120,
  },

  // Troyes
  {
    slug: "ch-troyes",
    name: "Centre Hospitalier de Troyes",
    finess: "100100013",
    type: "ch",
    address: "101 avenue Anatole France, 10000 Troyes",
    city: "troyes",
    department: "Aube",
    departmentCode: "10",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 500,
  },

  // Charleville-Mézières
  {
    slug: "ch-charleville-mezieres",
    name: "Centre Hospitalier de Charleville-Mézières",
    finess: "080100016",
    type: "ch",
    address: "45 avenue de Manchester, 08000 Charleville-Mézières",
    city: "charleville-mezieres",
    department: "Ardennes",
    departmentCode: "08",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie", "Cardiologie"],
    beds: 370,
  },

  // Chaumont
  {
    slug: "ch-chaumont",
    name: "Centre Hospitalier de Chaumont",
    finess: "520100013",
    type: "ch",
    address: "2 rue Jeanne d'Arc, 52000 Chaumont",
    city: "chaumont",
    department: "Haute-Marne",
    departmentCode: "52",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 250,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Auvergne-Rhône-Alpes ──────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Lyon
  {
    slug: "hcl-lyon",
    name: "Hospices Civils de Lyon (HCL)",
    finess: "690780481",
    type: "chu",
    address: "3 quai des Célestins, 69002 Lyon",
    city: "lyon",
    department: "Rhône",
    departmentCode: "69",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie", "Rhumatologie", "Néphrologie"],
    beds: 5400,
  },
  {
    slug: "centre-leon-berard",
    name: "Centre Léon Bérard",
    finess: "690780499",
    type: "cancerologie",
    address: "28 rue Laënnec, 69373 Lyon",
    city: "lyon",
    department: "Rhône",
    departmentCode: "69",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 280,
  },
  {
    slug: "hopital-edouard-herriot",
    name: "Hôpital Édouard Herriot (HCL)",
    finess: "690780507",
    type: "chu",
    address: "5 place d'Arsonval, 69003 Lyon",
    city: "lyon",
    department: "Rhône",
    departmentCode: "69",
    specialties: ["Urgences", "Chirurgie", "Cardiologie", "Néphrologie", "Gastro-entérologie", "Dermatologie"],
    beds: 900,
  },
  {
    slug: "hopital-femme-mere-enfant",
    name: "Hôpital Femme Mère Enfant (HCL)",
    finess: "690780515",
    type: "chu",
    address: "59 boulevard Pinel, 69500 Bron",
    city: "lyon",
    department: "Rhône",
    departmentCode: "69",
    specialties: ["Pédiatrie", "Maternité", "Chirurgie", "Neurologie", "Urgences"],
    beds: 550,
  },

  // Saint-Étienne
  {
    slug: "chu-saint-etienne",
    name: "CHU de Saint-Étienne",
    finess: "420780049",
    type: "chu",
    address: "Avenue Albert Raimond, 42270 Saint-Priest-en-Jarez",
    city: "saint-etienne",
    department: "Loire",
    departmentCode: "42",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Pneumologie"],
    beds: 1800,
  },

  // Grenoble
  {
    slug: "chu-grenoble-alpes",
    name: "CHU Grenoble Alpes",
    finess: "380780080",
    type: "chu",
    address: "Boulevard de la Chantourne, 38700 La Tronche",
    city: "grenoble",
    department: "Isère",
    departmentCode: "38",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Pneumologie"],
    beds: 2100,
  },

  // Chambéry
  {
    slug: "ch-chambery",
    name: "Centre Hospitalier Métropole Savoie",
    finess: "730100013",
    type: "ch",
    address: "Place Lucien Biset, 73011 Chambéry",
    city: "chambery",
    department: "Savoie",
    departmentCode: "73",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 700,
  },

  // Annecy
  {
    slug: "ch-annecy-genevois",
    name: "Centre Hospitalier Annecy Genevois",
    finess: "740100012",
    type: "ch",
    address: "1 avenue de l'Hôpital, 74370 Metz-Tessy",
    city: "annecy",
    department: "Haute-Savoie",
    departmentCode: "74",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Pédiatrie"],
    beds: 800,
  },

  // Bourg-en-Bresse
  {
    slug: "ch-bourg-en-bresse",
    name: "Centre Hospitalier de Bourg-en-Bresse",
    finess: "010100015",
    type: "ch",
    address: "900 route de Paris, 01012 Bourg-en-Bresse",
    city: "bourg-en-bresse",
    department: "Ain",
    departmentCode: "01",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 550,
  },

  // Valence
  {
    slug: "ch-valence",
    name: "Centre Hospitalier de Valence",
    finess: "260100013",
    type: "ch",
    address: "179 boulevard Maréchal Juin, 26000 Valence",
    city: "valence",
    department: "Drôme",
    departmentCode: "26",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 600,
  },

  // Privas
  {
    slug: "ch-privas",
    name: "Centre Hospitalier de Privas",
    finess: "070100011",
    type: "ch",
    address: "2 avenue Pasteur, 07000 Privas",
    city: "privas",
    department: "Ardèche",
    departmentCode: "07",
    specialties: ["Urgences", "Chirurgie", "Gériatrie"],
    beds: 180,
  },

  // Clermont-Ferrand
  {
    slug: "chu-clermont-ferrand",
    name: "CHU de Clermont-Ferrand",
    finess: "630780195",
    type: "chu",
    address: "58 rue Montalembert, 63003 Clermont-Ferrand",
    city: "clermont-ferrand",
    department: "Puy-de-Dôme",
    departmentCode: "63",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Pneumologie", "Gastro-entérologie"],
    beds: 2000,
  },
  {
    slug: "centre-jean-perrin",
    name: "Centre Jean Perrin",
    finess: "630780203",
    type: "cancerologie",
    address: "58 rue Montalembert, 63011 Clermont-Ferrand",
    city: "clermont-ferrand",
    department: "Puy-de-Dôme",
    departmentCode: "63",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 120,
  },

  // Moulins
  {
    slug: "ch-moulins-yzeure",
    name: "Centre Hospitalier Moulins-Yzeure",
    finess: "030100011",
    type: "ch",
    address: "10 avenue du Général de Gaulle, 03006 Moulins",
    city: "moulins",
    department: "Allier",
    departmentCode: "03",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 350,
  },

  // Le Puy-en-Velay
  {
    slug: "ch-le-puy",
    name: "Centre Hospitalier Émile Roux - Le Puy-en-Velay",
    finess: "430100013",
    type: "ch",
    address: "12 boulevard du Docteur Chantemesse, 43012 Le Puy-en-Velay",
    city: "le-puy-en-velay",
    department: "Haute-Loire",
    departmentCode: "43",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 320,
  },

  // Aurillac
  {
    slug: "ch-aurillac",
    name: "Centre Hospitalier Henri Mondor - Aurillac",
    finess: "150100014",
    type: "ch",
    address: "50 avenue de la République, 15000 Aurillac",
    city: "aurillac",
    department: "Cantal",
    departmentCode: "15",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie", "Cardiologie"],
    beds: 340,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Nouvelle-Aquitaine ────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Bordeaux
  {
    slug: "chu-bordeaux",
    name: "CHU de Bordeaux",
    finess: "330781196",
    type: "chu",
    address: "12 rue Dubernat, 33404 Talence",
    city: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie", "Néphrologie"],
    beds: 3300,
  },
  {
    slug: "institut-bergonie",
    name: "Institut Bergonié",
    finess: "330781204",
    type: "cancerologie",
    address: "229 cours de l'Argonne, 33076 Bordeaux",
    city: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 180,
  },

  // Limoges
  {
    slug: "chu-limoges",
    name: "CHU de Limoges",
    finess: "870100013",
    type: "chu",
    address: "2 avenue Martin Luther King, 87042 Limoges",
    city: "limoges",
    department: "Haute-Vienne",
    departmentCode: "87",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Néphrologie"],
    beds: 1700,
  },

  // Poitiers
  {
    slug: "chu-poitiers",
    name: "CHU de Poitiers",
    finess: "860100013",
    type: "chu",
    address: "2 rue de la Milétrie, 86021 Poitiers",
    city: "poitiers",
    department: "Vienne",
    departmentCode: "86",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Pneumologie"],
    beds: 1700,
  },

  // Niort
  {
    slug: "ch-niort",
    name: "Centre Hospitalier de Niort",
    finess: "790100013",
    type: "ch",
    address: "40 avenue Charles de Gaulle, 79021 Niort",
    city: "niort",
    department: "Deux-Sèvres",
    departmentCode: "79",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 520,
  },

  // La Rochelle
  {
    slug: "ch-la-rochelle",
    name: "Groupe Hospitalier de La Rochelle - Ré - Aunis",
    finess: "170100012",
    type: "ch",
    address: "Rue du Docteur Schweitzer, 17019 La Rochelle",
    city: "la-rochelle",
    department: "Charente-Maritime",
    departmentCode: "17",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 700,
  },

  // Angoulême
  {
    slug: "ch-angouleme",
    name: "Centre Hospitalier d'Angoulême",
    finess: "160100015",
    type: "ch",
    address: "16 rue de Bordeaux, 16959 Angoulême",
    city: "angouleme",
    department: "Charente",
    departmentCode: "16",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 480,
  },

  // Périgueux
  {
    slug: "ch-perigueux",
    name: "Centre Hospitalier de Périgueux",
    finess: "240100014",
    type: "ch",
    address: "80 avenue Georges Pompidou, 24019 Périgueux",
    city: "perigueux",
    department: "Dordogne",
    departmentCode: "24",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 450,
  },

  // Agen
  {
    slug: "ch-agen",
    name: "Centre Hospitalier d'Agen-Nérac",
    finess: "470100015",
    type: "ch",
    address: "Route de Villeneuve, 47923 Agen",
    city: "agen",
    department: "Lot-et-Garonne",
    departmentCode: "47",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 430,
  },

  // Mont-de-Marsan
  {
    slug: "ch-mont-de-marsan",
    name: "Centre Hospitalier de Mont-de-Marsan",
    finess: "400100012",
    type: "ch",
    address: "Avenue Pierre de Coubertin, 40024 Mont-de-Marsan",
    city: "mont-de-marsan",
    department: "Landes",
    departmentCode: "40",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 380,
  },

  // Pau
  {
    slug: "ch-pau",
    name: "Centre Hospitalier de Pau",
    finess: "640100016",
    type: "ch",
    address: "4 boulevard Hauterive, 64000 Pau",
    city: "pau",
    department: "Pyrénées-Atlantiques",
    departmentCode: "64",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 680,
  },

  // Tulle
  {
    slug: "ch-tulle",
    name: "Centre Hospitalier de Tulle",
    finess: "190100012",
    type: "ch",
    address: "3 place Maschat, 19012 Tulle",
    city: "tulle",
    department: "Corrèze",
    departmentCode: "19",
    specialties: ["Urgences", "Chirurgie", "Gériatrie"],
    beds: 250,
  },

  // Guéret
  {
    slug: "ch-gueret",
    name: "Centre Hospitalier de Guéret",
    finess: "230100016",
    type: "ch",
    address: "39 avenue de la Sénatorerie, 23000 Guéret",
    city: "gueret",
    department: "Creuse",
    departmentCode: "23",
    specialties: ["Urgences", "Chirurgie", "Gériatrie"],
    beds: 230,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Occitanie ─────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Toulouse
  {
    slug: "chu-toulouse",
    name: "CHU de Toulouse",
    finess: "310781406",
    type: "chu",
    address: "2 rue Viguerie, 31052 Toulouse",
    city: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie", "Néphrologie", "Pneumologie"],
    beds: 2900,
  },
  {
    slug: "institut-claudius-regaud",
    name: "Institut Claudius Regaud - IUCT Oncopole",
    finess: "310781414",
    type: "cancerologie",
    address: "1 avenue Irène Joliot-Curie, 31059 Toulouse",
    city: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 220,
  },
  {
    slug: "clinique-pasteur-toulouse",
    name: "Clinique Pasteur Toulouse",
    finess: "310781422",
    type: "clinique",
    address: "45 avenue de Lombez, 31076 Toulouse",
    city: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    specialties: ["Cardiologie", "Chirurgie", "Neurologie", "Gastro-entérologie", "Pneumologie"],
    beds: 350,
  },

  // Montpellier
  {
    slug: "chu-montpellier",
    name: "CHU de Montpellier",
    finess: "340780477",
    type: "chu",
    address: "191 avenue du Doyen Gaston Giraud, 34090 Montpellier",
    city: "montpellier",
    department: "Hérault",
    departmentCode: "34",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie", "Rhumatologie"],
    beds: 2400,
  },
  {
    slug: "icm-montpellier",
    name: "Institut du Cancer de Montpellier (ICM)",
    finess: "340780485",
    type: "cancerologie",
    address: "208 avenue des Apothicaires, 34298 Montpellier",
    city: "montpellier",
    department: "Hérault",
    departmentCode: "34",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 200,
  },

  // Nîmes
  {
    slug: "chu-nimes",
    name: "CHU de Nîmes",
    finess: "300780061",
    type: "chu",
    address: "Place du Professeur Robert Debré, 30029 Nîmes",
    city: "nimes",
    department: "Gard",
    departmentCode: "30",
    specialties: ["Urgences", "Cardiologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie"],
    beds: 1500,
  },

  // Perpignan
  {
    slug: "ch-perpignan",
    name: "Centre Hospitalier de Perpignan",
    finess: "660100017",
    type: "ch",
    address: "20 avenue du Languedoc, 66046 Perpignan",
    city: "perpignan",
    department: "Pyrénées-Orientales",
    departmentCode: "66",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 700,
  },

  // Carcassonne
  {
    slug: "ch-carcassonne",
    name: "Centre Hospitalier de Carcassonne",
    finess: "110100018",
    type: "ch",
    address: "1060 chemin de la Madeleine, 11010 Carcassonne",
    city: "carcassonne",
    department: "Aude",
    departmentCode: "11",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 400,
  },

  // Foix
  {
    slug: "ch-ariege-couserans",
    name: "Centre Hospitalier Ariège-Couserans",
    finess: "090100014",
    type: "ch",
    address: "Chemin de Cagire, 09000 Foix",
    city: "foix",
    department: "Ariège",
    departmentCode: "09",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 250,
  },

  // Tarbes
  {
    slug: "ch-tarbes",
    name: "Centre Hospitalier de Bigorre - Tarbes",
    finess: "650100011",
    type: "ch",
    address: "Boulevard de Lattre de Tassigny, 65013 Tarbes",
    city: "tarbes",
    department: "Hautes-Pyrénées",
    departmentCode: "65",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 450,
  },

  // Auch
  {
    slug: "ch-auch",
    name: "Centre Hospitalier d'Auch",
    finess: "320100015",
    type: "ch",
    address: "Allée Marie Clarac, 32008 Auch",
    city: "auch",
    department: "Gers",
    departmentCode: "32",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 280,
  },

  // Montauban
  {
    slug: "ch-montauban",
    name: "Centre Hospitalier de Montauban",
    finess: "820100017",
    type: "ch",
    address: "100 rue Léon Cladel, 82013 Montauban",
    city: "montauban",
    department: "Tarn-et-Garonne",
    departmentCode: "82",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 450,
  },

  // Albi
  {
    slug: "ch-albi",
    name: "Centre Hospitalier d'Albi",
    finess: "810100011",
    type: "ch",
    address: "22 boulevard du Général Sibué, 81013 Albi",
    city: "albi",
    department: "Tarn",
    departmentCode: "81",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 420,
  },

  // Rodez
  {
    slug: "ch-rodez",
    name: "Centre Hospitalier Jacques Puel - Rodez",
    finess: "120100012",
    type: "ch",
    address: "Avenue de l'Hôpital, 12027 Rodez",
    city: "rodez",
    department: "Aveyron",
    departmentCode: "12",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 400,
  },

  // Cahors
  {
    slug: "ch-cahors",
    name: "Centre Hospitalier de Cahors",
    finess: "460100013",
    type: "ch",
    address: "335 rue du Président Wilson, 46005 Cahors",
    city: "cahors",
    department: "Lot",
    departmentCode: "46",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 300,
  },

  // Mende
  {
    slug: "ch-mende",
    name: "Centre Hospitalier de Mende",
    finess: "480100012",
    type: "ch",
    address: "Avenue du 8 Mai 1945, 48001 Mende",
    city: "mende",
    department: "Lozère",
    departmentCode: "48",
    specialties: ["Urgences", "Chirurgie", "Gériatrie"],
    beds: 180,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Provence-Alpes-Côte d'Azur ────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Marseille
  {
    slug: "ap-hm",
    name: "Assistance Publique - Hôpitaux de Marseille (AP-HM)",
    finess: "130780521",
    type: "chu",
    address: "80 rue Brochier, 13005 Marseille",
    city: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie", "Néphrologie", "Pneumologie"],
    beds: 3400,
  },
  {
    slug: "institut-paoli-calmettes",
    name: "Institut Paoli-Calmettes",
    finess: "130780539",
    type: "cancerologie",
    address: "232 boulevard Sainte-Marguerite, 13009 Marseille",
    city: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 250,
  },
  {
    slug: "hopital-nord-marseille",
    name: "Hôpital Nord (AP-HM)",
    finess: "130780547",
    type: "chu",
    address: "Chemin des Bourrely, 13015 Marseille",
    city: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    specialties: ["Urgences", "Chirurgie", "Cardiologie", "Pneumologie", "Pédiatrie"],
    beds: 700,
  },
  {
    slug: "hopital-timone",
    name: "Hôpital de la Timone (AP-HM)",
    finess: "130780554",
    type: "chu",
    address: "264 rue Saint-Pierre, 13005 Marseille",
    city: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    specialties: ["Urgences", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Cardiologie"],
    beds: 800,
  },

  // Nice
  {
    slug: "chu-nice",
    name: "CHU de Nice",
    finess: "060780491",
    type: "chu",
    address: "4 avenue Reine Victoria, 06003 Nice",
    city: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie"],
    beds: 1600,
  },
  {
    slug: "centre-antoine-lacassagne",
    name: "Centre Antoine Lacassagne",
    finess: "060780509",
    type: "cancerologie",
    address: "33 avenue de Valombrose, 06189 Nice",
    city: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 160,
  },

  // Toulon
  {
    slug: "ch-toulon",
    name: "Centre Hospitalier Intercommunal Toulon - La Seyne",
    finess: "830100012",
    type: "ch",
    address: "Avenue du 1er Bataillon d'Infanterie de Marine, 83000 Toulon",
    city: "toulon",
    department: "Var",
    departmentCode: "83",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 900,
  },

  // Avignon
  {
    slug: "ch-avignon",
    name: "Centre Hospitalier Henri Duffaut - Avignon",
    finess: "840100016",
    type: "ch",
    address: "305 rue Raoul Follereau, 84902 Avignon",
    city: "avignon",
    department: "Vaucluse",
    departmentCode: "84",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 650,
  },

  // Digne-les-Bains
  {
    slug: "ch-digne",
    name: "Centre Hospitalier de Digne-les-Bains",
    finess: "040100015",
    type: "ch",
    address: "Quartier Saint-Christophe, 04003 Digne-les-Bains",
    city: "digne-les-bains",
    department: "Alpes-de-Haute-Provence",
    departmentCode: "04",
    specialties: ["Urgences", "Chirurgie", "Gériatrie"],
    beds: 220,
  },

  // Gap
  {
    slug: "ch-gap",
    name: "Centre Hospitalier Intercommunal des Alpes du Sud - Gap",
    finess: "050100011",
    type: "ch",
    address: "1 place Auguste Muret, 05007 Gap",
    city: "gap",
    department: "Hautes-Alpes",
    departmentCode: "05",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 350,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Bretagne ──────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Rennes
  {
    slug: "chu-rennes",
    name: "CHU de Rennes",
    finess: "350000022",
    type: "chu",
    address: "2 rue Henri Le Guilloux, 35033 Rennes",
    city: "rennes",
    department: "Ille-et-Vilaine",
    departmentCode: "35",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie"],
    beds: 1800,
  },
  {
    slug: "centre-eugene-marquis",
    name: "Centre Eugène Marquis",
    finess: "350000030",
    type: "cancerologie",
    address: "Rue de la Bataille Flandres-Dunkerque, 35042 Rennes",
    city: "rennes",
    department: "Ille-et-Vilaine",
    departmentCode: "35",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 130,
  },

  // Saint-Brieuc
  {
    slug: "ch-saint-brieuc",
    name: "Centre Hospitalier de Saint-Brieuc",
    finess: "220000012",
    type: "ch",
    address: "10 rue Marcel Proust, 22027 Saint-Brieuc",
    city: "saint-brieuc",
    department: "Côtes-d'Armor",
    departmentCode: "22",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 600,
  },

  // Brest
  {
    slug: "chru-brest",
    name: "CHRU de Brest",
    finess: "290000017",
    type: "chu",
    address: "2 avenue Foch, 29609 Brest",
    city: "brest",
    department: "Finistère",
    departmentCode: "29",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Pneumologie"],
    beds: 1500,
  },

  // Quimper
  {
    slug: "ch-quimper",
    name: "Centre Hospitalier de Cornouaille - Quimper",
    finess: "290000025",
    type: "ch",
    address: "14 bis avenue Yves Thépot, 29107 Quimper",
    city: "quimper",
    department: "Finistère",
    departmentCode: "29",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 550,
  },

  // Vannes
  {
    slug: "ch-bretagne-atlantique",
    name: "Centre Hospitalier Bretagne Atlantique - Vannes",
    finess: "560000011",
    type: "ch",
    address: "20 boulevard Général Maurice Guillaudot, 56017 Vannes",
    city: "vannes",
    department: "Morbihan",
    departmentCode: "56",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 700,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Pays de la Loire ──────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Nantes
  {
    slug: "chu-nantes",
    name: "CHU de Nantes",
    finess: "440000289",
    type: "chu",
    address: "5 allée de l'Île Gloriette, 44093 Nantes",
    city: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie", "Néphrologie"],
    beds: 2800,
  },
  {
    slug: "icm-nantes",
    name: "Institut de Cancérologie de l'Ouest - René Gauducheau",
    finess: "440000297",
    type: "cancerologie",
    address: "Boulevard Jacques Monod, 44805 Saint-Herblain",
    city: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 200,
  },

  // Angers
  {
    slug: "chu-angers",
    name: "CHU d'Angers",
    finess: "490000031",
    type: "chu",
    address: "4 rue Larrey, 49933 Angers",
    city: "angers",
    department: "Maine-et-Loire",
    departmentCode: "49",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Pneumologie"],
    beds: 1500,
  },
  {
    slug: "icm-angers",
    name: "Institut de Cancérologie de l'Ouest - Paul Papin",
    finess: "490000049",
    type: "cancerologie",
    address: "2 rue Moll, 49933 Angers",
    city: "angers",
    department: "Maine-et-Loire",
    departmentCode: "49",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 120,
  },

  // Le Mans
  {
    slug: "ch-le-mans",
    name: "Centre Hospitalier du Mans",
    finess: "720000013",
    type: "ch",
    address: "194 avenue Rubillard, 72037 Le Mans",
    city: "le-mans",
    department: "Sarthe",
    departmentCode: "72",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 800,
  },

  // Laval
  {
    slug: "ch-laval",
    name: "Centre Hospitalier de Laval",
    finess: "530000018",
    type: "ch",
    address: "33 rue du Haut-Rocher, 53015 Laval",
    city: "laval",
    department: "Mayenne",
    departmentCode: "53",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 380,
  },

  // La Roche-sur-Yon
  {
    slug: "ch-la-roche-sur-yon",
    name: "Centre Hospitalier Départemental de Vendée",
    finess: "850000012",
    type: "ch",
    address: "Boulevard Stéphane Moreau, 85925 La Roche-sur-Yon",
    city: "la-roche-sur-yon",
    department: "Vendée",
    departmentCode: "85",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Oncologie", "Gériatrie"],
    beds: 600,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Normandie ─────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Rouen
  {
    slug: "chu-rouen",
    name: "CHU de Rouen",
    finess: "760780239",
    type: "chu",
    address: "1 rue de Germont, 76031 Rouen",
    city: "rouen",
    department: "Seine-Maritime",
    departmentCode: "76",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie", "Pneumologie"],
    beds: 2300,
  },
  {
    slug: "centre-henri-becquerel",
    name: "Centre Henri Becquerel",
    finess: "760780247",
    type: "cancerologie",
    address: "Rue d'Amiens, 76038 Rouen",
    city: "rouen",
    department: "Seine-Maritime",
    departmentCode: "76",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 150,
  },

  // Caen
  {
    slug: "chu-caen",
    name: "CHU de Caen Normandie",
    finess: "140000100",
    type: "chu",
    address: "Avenue de la Côte de Nacre, 14033 Caen",
    city: "caen",
    department: "Calvados",
    departmentCode: "14",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Pneumologie"],
    beds: 1700,
  },
  {
    slug: "centre-francois-baclesse",
    name: "Centre François Baclesse",
    finess: "140000118",
    type: "cancerologie",
    address: "3 avenue du Général Harris, 14076 Caen",
    city: "caen",
    department: "Calvados",
    departmentCode: "14",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 130,
  },

  // Évreux
  {
    slug: "ch-evreux",
    name: "Centre Hospitalier Eure-Seine - Évreux",
    finess: "270000016",
    type: "ch",
    address: "17 rue Saint-Louis, 27023 Évreux",
    city: "evreux",
    department: "Eure",
    departmentCode: "27",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 400,
  },

  // Alençon
  {
    slug: "ch-alencon",
    name: "Centre Hospitalier Intercommunal Alençon-Mamers",
    finess: "610100015",
    type: "ch",
    address: "25 rue de Fresnay, 61014 Alençon",
    city: "alencon",
    department: "Orne",
    departmentCode: "61",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 350,
  },

  // Saint-Lô
  {
    slug: "ch-saint-lo",
    name: "Centre Hospitalier Mémorial France - États-Unis - Saint-Lô",
    finess: "500100013",
    type: "ch",
    address: "715 rue Dunant, 50009 Saint-Lô",
    city: "saint-lo",
    department: "Manche",
    departmentCode: "50",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 400,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Centre-Val de Loire ───────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Orléans
  {
    slug: "chr-orleans",
    name: "CHR d'Orléans",
    finess: "450000088",
    type: "ch",
    address: "14 avenue de l'Hôpital, 45067 Orléans",
    city: "orleans",
    department: "Loiret",
    departmentCode: "45",
    specialties: ["Urgences", "Cardiologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gériatrie"],
    beds: 1700,
  },

  // Tours
  {
    slug: "chru-tours",
    name: "CHRU de Tours",
    finess: "370000481",
    type: "chu",
    address: "2 boulevard Tonnellé, 37044 Tours",
    city: "tours",
    department: "Indre-et-Loire",
    departmentCode: "37",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie", "Pneumologie"],
    beds: 2000,
  },

  // Chartres
  {
    slug: "ch-chartres",
    name: "Centre Hospitalier de Chartres - Hôpital Louis Pasteur",
    finess: "280000019",
    type: "ch",
    address: "4 rue Claude Bernard, 28630 Le Coudray",
    city: "chartres",
    department: "Eure-et-Loir",
    departmentCode: "28",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 500,
  },

  // Blois
  {
    slug: "ch-blois",
    name: "Centre Hospitalier de Blois",
    finess: "410000012",
    type: "ch",
    address: "Mail Pierre Charlot, 41016 Blois",
    city: "blois",
    department: "Loir-et-Cher",
    departmentCode: "41",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 450,
  },

  // Bourges
  {
    slug: "ch-bourges",
    name: "Centre Hospitalier Jacques Coeur - Bourges",
    finess: "180000015",
    type: "ch",
    address: "145 avenue François Mitterrand, 18020 Bourges",
    city: "bourges",
    department: "Cher",
    departmentCode: "18",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 500,
  },

  // Châteauroux
  {
    slug: "ch-chateauroux",
    name: "Centre Hospitalier de Châteauroux",
    finess: "360000012",
    type: "ch",
    address: "216 avenue de Verdun, 36019 Châteauroux",
    city: "chateauroux",
    department: "Indre",
    departmentCode: "36",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 380,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Bourgogne-Franche-Comté ───────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Dijon
  {
    slug: "chu-dijon",
    name: "CHU Dijon Bourgogne",
    finess: "210780581",
    type: "chu",
    address: "14 rue Paul Gaffarel, 21079 Dijon",
    city: "dijon",
    department: "Côte-d'Or",
    departmentCode: "21",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Gastro-entérologie", "Pneumologie"],
    beds: 1700,
  },
  {
    slug: "centre-gf-leclerc",
    name: "Centre Georges-François Leclerc",
    finess: "210780599",
    type: "cancerologie",
    address: "1 rue du Professeur Marion, 21079 Dijon",
    city: "dijon",
    department: "Côte-d'Or",
    departmentCode: "21",
    specialties: ["Oncologie", "Radiothérapie", "Chirurgie", "Soins palliatifs"],
    beds: 130,
  },

  // Besançon
  {
    slug: "chru-besancon",
    name: "CHRU de Besançon - Jean Minjoz",
    finess: "250000015",
    type: "chu",
    address: "3 boulevard Alexander Fleming, 25030 Besançon",
    city: "besancon",
    department: "Doubs",
    departmentCode: "25",
    specialties: ["Urgences", "Cardiologie", "Neurologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Néphrologie"],
    beds: 1300,
  },

  // Auxerre
  {
    slug: "ch-auxerre",
    name: "Centre Hospitalier d'Auxerre",
    finess: "890000012",
    type: "ch",
    address: "2 boulevard de Verdun, 89011 Auxerre",
    city: "auxerre",
    department: "Yonne",
    departmentCode: "89",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 400,
  },

  // Nevers
  {
    slug: "ch-nevers",
    name: "Centre Hospitalier de l'Agglomération de Nevers",
    finess: "580000017",
    type: "ch",
    address: "1 boulevard de l'Hôpital, 58033 Nevers",
    city: "nevers",
    department: "Nièvre",
    departmentCode: "58",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 350,
  },

  // Mâcon
  {
    slug: "ch-macon",
    name: "Centre Hospitalier de Mâcon",
    finess: "710100016",
    type: "ch",
    address: "Boulevard Louis Escande, 71018 Mâcon",
    city: "macon",
    department: "Saône-et-Loire",
    departmentCode: "71",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 450,
  },

  // Lons-le-Saunier
  {
    slug: "ch-lons-le-saunier",
    name: "Centre Hospitalier de Lons-le-Saunier",
    finess: "390000017",
    type: "ch",
    address: "55 rue du Docteur Jean Michel, 39016 Lons-le-Saunier",
    city: "lons-le-saunier",
    department: "Jura",
    departmentCode: "39",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 320,
  },

  // Vesoul
  {
    slug: "ch-vesoul",
    name: "Centre Hospitalier Intercommunal de Vesoul",
    finess: "700100015",
    type: "ch",
    address: "Rue du Docteur Flamand, 70014 Vesoul",
    city: "vesoul",
    department: "Haute-Saône",
    departmentCode: "70",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Gériatrie"],
    beds: 280,
  },

  // Belfort
  {
    slug: "ch-belfort-montbeliard",
    name: "Hôpital Nord Franche-Comté - Belfort-Montbéliard",
    finess: "900100014",
    type: "ch",
    address: "100 route de Moval, 90400 Trévenans",
    city: "belfort",
    department: "Territoire de Belfort",
    departmentCode: "90",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 600,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Corse ─────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Ajaccio
  {
    slug: "ch-ajaccio",
    name: "Centre Hospitalier d'Ajaccio - Hôpital de la Miséricorde",
    finess: "2A0100013",
    type: "ch",
    address: "27 avenue Impératrice Eugénie, 20303 Ajaccio",
    city: "ajaccio",
    department: "Corse-du-Sud",
    departmentCode: "2A",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 380,
  },

  // Bastia
  {
    slug: "ch-bastia",
    name: "Centre Hospitalier de Bastia",
    finess: "2B0100011",
    type: "ch",
    address: "Boulevard Benoîte Danesi, 20604 Bastia",
    city: "bastia",
    department: "Haute-Corse",
    departmentCode: "2B",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Cardiologie", "Gériatrie"],
    beds: 350,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Outre-Mer ─────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════

  // Martinique
  {
    slug: "chu-martinique",
    name: "CHU de Martinique",
    finess: "972100013",
    type: "chu",
    address: "Route de Chateauboeuf, 97200 Fort-de-France",
    city: "fort-de-france",
    department: "Martinique",
    departmentCode: "972",
    specialties: ["Urgences", "Cardiologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Dialyse"],
    beds: 1200,
  },

  // Guadeloupe
  {
    slug: "chu-guadeloupe",
    name: "CHU de Guadeloupe",
    finess: "971100017",
    type: "chu",
    address: "Route de Chauvel, 97159 Pointe-à-Pitre",
    city: "pointe-a-pitre",
    department: "Guadeloupe",
    departmentCode: "971",
    specialties: ["Urgences", "Cardiologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Dialyse"],
    beds: 900,
  },

  // Guyane
  {
    slug: "ch-cayenne",
    name: "Centre Hospitalier Andrée Rosemon - Cayenne",
    finess: "973100016",
    type: "ch",
    address: "Rue des Flamboyants, 97306 Cayenne",
    city: "cayenne",
    department: "Guyane",
    departmentCode: "973",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Pédiatrie", "Dialyse"],
    beds: 500,
  },

  // La Réunion
  {
    slug: "chu-reunion",
    name: "CHU de La Réunion",
    finess: "974100011",
    type: "chu",
    address: "Allée des Topazes, 97400 Saint-Denis",
    city: "saint-denis-reunion",
    department: "La Réunion",
    departmentCode: "974",
    specialties: ["Urgences", "Cardiologie", "Chirurgie", "Oncologie", "Pédiatrie", "Maternité", "Dialyse", "Néphrologie"],
    beds: 1600,
  },

  // Mayotte
  {
    slug: "ch-mayotte",
    name: "Centre Hospitalier de Mayotte",
    finess: "976100014",
    type: "ch",
    address: "Rue de l'Hôpital, 97600 Mamoudzou",
    city: "mamoudzou",
    department: "Mayotte",
    departmentCode: "976",
    specialties: ["Urgences", "Chirurgie", "Maternité", "Pédiatrie"],
    beds: 350,
  },

  // ═══════════════════════════════════════════════════════════════
  // ─── Additional dialysis centers & hospitals (major cities) ────
  // ═══════════════════════════════════════════════════════════════

  // Paris — additional
  {
    slug: "centre-dialyse-ile-de-france",
    name: "Centre de Dialyse Île-de-France",
    type: "dialyse",
    address: "5 rue Santerre, 75012 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 60,
  },
  {
    slug: "centre-dialyse-paris-nord",
    name: "Centre de Dialyse Paris Nord",
    type: "dialyse",
    address: "96 rue Didot, 75014 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 45,
  },

  // Lyon — additional
  {
    slug: "centre-dialyse-lyon-part-dieu",
    name: "Centre de Dialyse Lyon Part-Dieu",
    type: "dialyse",
    address: "115 boulevard Vivier Merle, 69003 Lyon",
    city: "lyon",
    department: "Rhône",
    departmentCode: "69",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 50,
  },
  {
    slug: "clinique-du-tonkin-lyon",
    name: "Clinique du Tonkin",
    type: "clinique",
    address: "26 rue du Tonkin, 69100 Villeurbanne",
    city: "lyon",
    department: "Rhône",
    departmentCode: "69",
    specialties: ["Chirurgie", "Cardiologie", "Ophtalmologie", "ORL"],
    beds: 200,
  },

  // Marseille — additional
  {
    slug: "centre-dialyse-marseille-valentine",
    name: "Centre de Dialyse La Valentine - Marseille",
    type: "dialyse",
    address: "20 avenue de la Millière, 13011 Marseille",
    city: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 55,
  },
  {
    slug: "hopital-saint-joseph-marseille",
    name: "Hôpital Saint-Joseph de Marseille",
    type: "hopital",
    address: "26 boulevard de Louvain, 13008 Marseille",
    city: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    specialties: ["Chirurgie", "Cardiologie", "Urgences", "Maternité", "Gériatrie"],
    beds: 550,
  },

  // Toulouse — additional
  {
    slug: "centre-dialyse-toulouse-rangueil",
    name: "Centre de Dialyse Toulouse Rangueil",
    type: "dialyse",
    address: "1 avenue du Professeur Jean Poulhès, 31059 Toulouse",
    city: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 50,
  },
  {
    slug: "clinique-ssr-toulouse",
    name: "Clinique de Rééducation des Music-Halls",
    type: "ssr",
    address: "12 rue de la Chaîne, 31400 Toulouse",
    city: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    specialties: ["Rééducation", "Gériatrie", "Rhumatologie"],
    beds: 120,
  },

  // Bordeaux — additional
  {
    slug: "centre-dialyse-bordeaux-centre",
    name: "Centre de Dialyse de Bordeaux Centre",
    type: "dialyse",
    address: "8 rue Jean Burguet, 33000 Bordeaux",
    city: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 45,
  },
  {
    slug: "clinique-saint-augustin-bordeaux",
    name: "Clinique Saint-Augustin",
    type: "clinique",
    address: "114 rue d'Ares, 33074 Bordeaux",
    city: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    specialties: ["Cardiologie", "Chirurgie", "Ophtalmologie", "ORL"],
    beds: 180,
  },

  // Nantes — additional
  {
    slug: "centre-dialyse-nantes-atlantique",
    name: "Centre de Dialyse Nantes Atlantique",
    type: "dialyse",
    address: "3 rue Marcel Sembat, 44200 Nantes",
    city: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 50,
  },
  {
    slug: "clinique-jules-verne-nantes",
    name: "Clinique Jules Verne",
    type: "clinique",
    address: "2-4 route de Paris, 44300 Nantes",
    city: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    specialties: ["Chirurgie", "Maternité", "Cardiologie", "Gastro-entérologie"],
    beds: 250,
  },

  // Strasbourg — additional
  {
    slug: "centre-dialyse-strasbourg-hautepierre",
    name: "Centre de Dialyse Strasbourg Hautepierre",
    type: "dialyse",
    address: "1 avenue Molière, 67200 Strasbourg",
    city: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 50,
  },
  {
    slug: "clinique-rhena-strasbourg",
    name: "Clinique Rhéna",
    type: "clinique",
    address: "10 rue François Élie, 67000 Strasbourg",
    city: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    specialties: ["Chirurgie", "Maternité", "Cardiologie", "Ophtalmologie"],
    beds: 300,
  },

  // Lille — additional
  {
    slug: "centre-dialyse-lille-metropole",
    name: "Centre de Dialyse Lille Métropole",
    type: "dialyse",
    address: "57 rue Salvador Allende, 59120 Loos",
    city: "lille",
    department: "Nord",
    departmentCode: "59",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 55,
  },
  {
    slug: "hopital-prive-la-louviere-lille",
    name: "Hôpital Privé La Louvière",
    type: "clinique",
    address: "69 rue de la Louvière, 59000 Lille",
    city: "lille",
    department: "Nord",
    departmentCode: "59",
    specialties: ["Chirurgie", "Cardiologie", "Neurologie", "Gastro-entérologie"],
    beds: 300,
  },

  // Montpellier — additional
  {
    slug: "centre-dialyse-montpellier-antigone",
    name: "Centre de Dialyse Montpellier Antigone",
    type: "dialyse",
    address: "120 allée du 12e Régiment de Dragons, 34000 Montpellier",
    city: "montpellier",
    department: "Hérault",
    departmentCode: "34",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 45,
  },
  {
    slug: "clinique-saint-roch-montpellier",
    name: "Clinique Saint-Roch",
    type: "clinique",
    address: "560 avenue du Colonel Pavelet, 34000 Montpellier",
    city: "montpellier",
    department: "Hérault",
    departmentCode: "34",
    specialties: ["Chirurgie", "Cardiologie", "Ophtalmologie", "Maternité"],
    beds: 220,
  },

  // Rennes — additional
  {
    slug: "centre-dialyse-rennes-cleunay",
    name: "Centre de Dialyse Rennes Cleunay",
    type: "dialyse",
    address: "4 rue du Bois Labbé, 35000 Rennes",
    city: "rennes",
    department: "Ille-et-Vilaine",
    departmentCode: "35",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 40,
  },
  {
    slug: "clinique-saint-laurent-rennes",
    name: "Clinique Saint-Laurent",
    type: "clinique",
    address: "67 rue de la Tour d'Auvergne, 35000 Rennes",
    city: "rennes",
    department: "Ille-et-Vilaine",
    departmentCode: "35",
    specialties: ["Chirurgie", "Ophtalmologie", "ORL", "Gastro-entérologie"],
    beds: 160,
  },

  // Nice — additional
  {
    slug: "centre-dialyse-nice-pasteur",
    name: "Centre de Dialyse Nice Pasteur",
    type: "dialyse",
    address: "30 voie Romaine, 06000 Nice",
    city: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 50,
  },
  {
    slug: "clinique-saint-george-nice",
    name: "Clinique Saint-George",
    type: "clinique",
    address: "2 avenue de Rimiez, 06105 Nice",
    city: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    specialties: ["Chirurgie", "Cardiologie", "Neurologie", "Ophtalmologie"],
    beds: 200,
  },

  // Rouen — additional
  {
    slug: "centre-dialyse-rouen-bois-guillaume",
    name: "Centre de Dialyse Rouen Bois-Guillaume",
    type: "dialyse",
    address: "147 avenue du Maréchal Juin, 76230 Bois-Guillaume",
    city: "rouen",
    department: "Seine-Maritime",
    departmentCode: "76",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 40,
  },
  {
    slug: "clinique-mathilde-rouen",
    name: "Clinique Mathilde",
    type: "clinique",
    address: "7 boulevard de l'Europe, 76100 Rouen",
    city: "rouen",
    department: "Seine-Maritime",
    departmentCode: "76",
    specialties: ["Chirurgie", "Cardiologie", "Ophtalmologie", "Maternité"],
    beds: 220,
  },

  // Grenoble — additional
  {
    slug: "centre-dialyse-grenoble-sud",
    name: "Centre de Dialyse Grenoble Sud",
    type: "dialyse",
    address: "18 avenue des Maquis du Grésivaudan, 38700 La Tronche",
    city: "grenoble",
    department: "Isère",
    departmentCode: "38",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 45,
  },
  {
    slug: "clinique-belledonne-grenoble",
    name: "Clinique Belledonne",
    type: "clinique",
    address: "75 avenue Gabriel Péri, 38400 Saint-Martin-d'Hères",
    city: "grenoble",
    department: "Isère",
    departmentCode: "38",
    specialties: ["Chirurgie", "Cardiologie", "Ophtalmologie", "Rhumatologie"],
    beds: 180,
  },

  // Dijon — additional
  {
    slug: "centre-dialyse-dijon-valmy",
    name: "Centre de Dialyse Dijon Valmy",
    type: "dialyse",
    address: "2 rue Hoche, 21000 Dijon",
    city: "dijon",
    department: "Côte-d'Or",
    departmentCode: "21",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 40,
  },
  {
    slug: "clinique-fontaine-dijon",
    name: "Clinique de Fontaine",
    type: "clinique",
    address: "1 rue des Moutons, 21121 Fontaine-lès-Dijon",
    city: "dijon",
    department: "Côte-d'Or",
    departmentCode: "21",
    specialties: ["Chirurgie", "ORL", "Ophtalmologie", "Gastro-entérologie"],
    beds: 150,
  },

  // Clermont-Ferrand — additional
  {
    slug: "centre-dialyse-clermont-ferrand",
    name: "Centre de Dialyse de Clermont-Ferrand",
    type: "dialyse",
    address: "30 place Henri Dunant, 63000 Clermont-Ferrand",
    city: "clermont-ferrand",
    department: "Puy-de-Dôme",
    departmentCode: "63",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 40,
  },
  {
    slug: "clinique-la-chataigneraie-clermont",
    name: "Clinique de la Châtaigneraie",
    type: "clinique",
    address: "59 rue de la Châtaigneraie, 63110 Beaumont",
    city: "clermont-ferrand",
    department: "Puy-de-Dôme",
    departmentCode: "63",
    specialties: ["Chirurgie", "Cardiologie", "Ophtalmologie", "Maternité"],
    beds: 200,
  },

  // Reims — additional
  {
    slug: "centre-dialyse-reims-tinqueux",
    name: "Centre de Dialyse Reims Tinqueux",
    type: "dialyse",
    address: "16 rue Denis Papin, 51430 Tinqueux",
    city: "reims",
    department: "Marne",
    departmentCode: "51",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 35,
  },
  {
    slug: "clinique-courlancy-reims",
    name: "Polyclinique de Courlancy",
    type: "clinique",
    address: "38 rue de Courlancy, 51100 Reims",
    city: "reims",
    department: "Marne",
    departmentCode: "51",
    specialties: ["Chirurgie", "Cardiologie", "Ophtalmologie", "ORL"],
    beds: 250,
  },

  // Amiens — additional
  {
    slug: "centre-dialyse-amiens-sud",
    name: "Centre de Dialyse Amiens Sud",
    type: "dialyse",
    address: "5 rue Fernel, 80000 Amiens",
    city: "amiens",
    department: "Somme",
    departmentCode: "80",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 40,
  },
  {
    slug: "clinique-victor-pauchet-amiens",
    name: "Clinique Victor Pauchet",
    type: "clinique",
    address: "2 avenue d'Irlande, 80090 Amiens",
    city: "amiens",
    department: "Somme",
    departmentCode: "80",
    specialties: ["Chirurgie", "Cardiologie", "Ophtalmologie", "Gastro-entérologie"],
    beds: 180,
  },

  // Caen — additional
  {
    slug: "centre-dialyse-caen-citis",
    name: "Centre de Dialyse CITIS Caen",
    type: "dialyse",
    address: "15 rue du Professeur Joseph Rousselot, 14000 Caen",
    city: "caen",
    department: "Calvados",
    departmentCode: "14",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 35,
  },
  {
    slug: "clinique-saint-martin-caen",
    name: "Clinique Saint-Martin",
    type: "clinique",
    address: "18 rue des Rocquemonts, 14000 Caen",
    city: "caen",
    department: "Calvados",
    departmentCode: "14",
    specialties: ["Chirurgie", "Ophtalmologie", "ORL", "Gastro-entérologie"],
    beds: 160,
  },

  // Tours — additional
  {
    slug: "centre-dialyse-tours-grammont",
    name: "Centre de Dialyse Tours Grammont",
    type: "dialyse",
    address: "2 allée des Compagnons, 37100 Tours",
    city: "tours",
    department: "Indre-et-Loire",
    departmentCode: "37",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 40,
  },
  {
    slug: "clinique-alliance-tours",
    name: "Clinique de l'Alliance",
    type: "clinique",
    address: "Rue des Granges Galand, 37550 Saint-Avertin",
    city: "tours",
    department: "Indre-et-Loire",
    departmentCode: "37",
    specialties: ["Chirurgie", "Cardiologie", "Ophtalmologie", "Maternité"],
    beds: 200,
  },

  // Poitiers — additional
  {
    slug: "centre-dialyse-poitiers-centre",
    name: "Centre de Dialyse de Poitiers",
    type: "dialyse",
    address: "10 rue de la Milétrie, 86000 Poitiers",
    city: "poitiers",
    department: "Vienne",
    departmentCode: "86",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 35,
  },
  {
    slug: "clinique-saint-charles-poitiers",
    name: "Clinique Saint-Charles",
    type: "clinique",
    address: "20 rue de la Providence, 86000 Poitiers",
    city: "poitiers",
    department: "Vienne",
    departmentCode: "86",
    specialties: ["Chirurgie", "Cardiologie", "ORL", "Gastro-entérologie"],
    beds: 150,
  },

  // Additional SSR and specialty centers

  // Paris — SSR
  {
    slug: "hopital-rothschild-paris",
    name: "Hôpital Rothschild (AP-HP)",
    type: "ssr",
    address: "5 rue Santerre, 75012 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Rééducation", "Gériatrie", "Ophtalmologie"],
    beds: 320,
  },
  {
    slug: "hopital-bretonneau-paris",
    name: "Hôpital Bretonneau (AP-HP)",
    type: "chu",
    address: "23 rue Joseph de Maistre, 75018 Paris",
    city: "paris",
    department: "Paris",
    departmentCode: "75",
    specialties: ["Gériatrie", "Dermatologie", "Psychiatrie", "ORL"],
    beds: 280,
  },

  // Lyon — SSR
  {
    slug: "centre-ssr-lyon-croix-rousse",
    name: "Centre SSR Croix-Rousse (HCL)",
    type: "ssr",
    address: "103 Grande Rue de la Croix-Rousse, 69004 Lyon",
    city: "lyon",
    department: "Rhône",
    departmentCode: "69",
    specialties: ["Rééducation", "Pneumologie", "Gériatrie"],
    beds: 180,
  },

  // Marseille — SSR
  {
    slug: "centre-ssr-marseille-valmante",
    name: "Centre SSR La Valmante",
    type: "ssr",
    address: "220 boulevard Sainte-Marguerite, 13009 Marseille",
    city: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    specialties: ["Rééducation", "Gériatrie", "Rhumatologie"],
    beds: 150,
  },

  // Toulouse — dialyse supplémentaire
  {
    slug: "centre-dialyse-toulouse-purpan",
    name: "Centre de Dialyse Toulouse Purpan",
    type: "dialyse",
    address: "330 avenue de Grande-Bretagne, 31059 Toulouse",
    city: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 45,
  },

  // Bordeaux — SSR
  {
    slug: "centre-ssr-bordeaux-cauderes",
    name: "Centre de Rééducation Les Caudères",
    type: "ssr",
    address: "15 rue du Doyenné, 33000 Bordeaux",
    city: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    specialties: ["Rééducation", "Neurologie", "Rhumatologie"],
    beds: 100,
  },

  // Nantes — SSR
  {
    slug: "centre-ssr-nantes-confluent",
    name: "Centre de Rééducation du Confluent",
    type: "ssr",
    address: "4 rue Éric Tabarly, 44277 Nantes",
    city: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    specialties: ["Rééducation", "Cardiologie", "Pneumologie"],
    beds: 90,
  },

  // Strasbourg — SSR
  {
    slug: "centre-ssr-strasbourg-robertsau",
    name: "Centre de Rééducation de la Robertsau",
    type: "ssr",
    address: "10 rue de l'Industrie, 67000 Strasbourg",
    city: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    specialties: ["Rééducation", "Neurologie", "Rhumatologie"],
    beds: 80,
  },

  // Lille — dialyse
  {
    slug: "centre-dialyse-lille-sud",
    name: "Centre de Dialyse Lille Sud",
    type: "dialyse",
    address: "10 rue du Professeur Laguesse, 59000 Lille",
    city: "lille",
    department: "Nord",
    departmentCode: "59",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 40,
  },

  // Montpellier — SSR
  {
    slug: "centre-ssr-montpellier-lapeyronie",
    name: "Centre de Rééducation Lapeyronie",
    type: "ssr",
    address: "371 avenue du Doyen Gaston Giraud, 34090 Montpellier",
    city: "montpellier",
    department: "Hérault",
    departmentCode: "34",
    specialties: ["Rééducation", "Neurologie", "Rhumatologie"],
    beds: 100,
  },

  // Nice — SSR
  {
    slug: "centre-ssr-nice-saint-roch",
    name: "Centre de Rééducation Saint-Roch",
    type: "ssr",
    address: "5 rue Pierre Dévoluy, 06000 Nice",
    city: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    specialties: ["Rééducation", "Gériatrie", "Cardiologie"],
    beds: 80,
  },

  // Grenoble — dialyse
  {
    slug: "centre-dialyse-grenoble-nord",
    name: "Centre de Dialyse Grenoble Nord",
    type: "dialyse",
    address: "9 chemin de Gordes, 38100 Grenoble",
    city: "grenoble",
    department: "Isère",
    departmentCode: "38",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 35,
  },

  // Dijon — SSR
  {
    slug: "centre-ssr-dijon-champmaillot",
    name: "Centre de Rééducation Champmaillot (CHU Dijon)",
    type: "ssr",
    address: "2 rue Jules Guérin, 21000 Dijon",
    city: "dijon",
    department: "Côte-d'Or",
    departmentCode: "21",
    specialties: ["Rééducation", "Gériatrie", "Rhumatologie"],
    beds: 120,
  },

  // Rouen — dialyse
  {
    slug: "centre-dialyse-rouen-saint-hilaire",
    name: "Centre de Dialyse Rouen Saint-Hilaire",
    type: "dialyse",
    address: "43 rue Saint-Hilaire, 76000 Rouen",
    city: "rouen",
    department: "Seine-Maritime",
    departmentCode: "76",
    specialties: ["Dialyse", "Néphrologie"],
    beds: 30,
  },

  // Clermont-Ferrand — SSR
  {
    slug: "centre-ssr-clermont-ceyrat",
    name: "Centre de Rééducation de Ceyrat",
    type: "ssr",
    address: "24 avenue Jean Moulin, 63122 Ceyrat",
    city: "clermont-ferrand",
    department: "Puy-de-Dôme",
    departmentCode: "63",
    specialties: ["Rééducation", "Cardiologie", "Pneumologie"],
    beds: 80,
  },

  // Caen — SSR
  {
    slug: "centre-ssr-caen-normandie",
    name: "Centre de Rééducation de Normandie",
    type: "ssr",
    address: "Route de Trouville, 14000 Caen",
    city: "caen",
    department: "Calvados",
    departmentCode: "14",
    specialties: ["Rééducation", "Neurologie", "Rhumatologie"],
    beds: 75,
  },

  // Tours — SSR
  {
    slug: "centre-ssr-tours-bel-air",
    name: "Centre de Rééducation Bel Air",
    type: "ssr",
    address: "11 rue du Colombier, 37170 Chambray-lès-Tours",
    city: "tours",
    department: "Indre-et-Loire",
    departmentCode: "37",
    specialties: ["Rééducation", "Gériatrie", "Rhumatologie"],
    beds: 85,
  },

  // Amiens — SSR
  {
    slug: "centre-ssr-amiens-picardie",
    name: "Centre de Rééducation Picardie",
    type: "ssr",
    address: "26 rue des Augustins, 80000 Amiens",
    city: "amiens",
    department: "Somme",
    departmentCode: "80",
    specialties: ["Rééducation", "Neurologie", "Cardiologie"],
    beds: 70,
  },

  // Reims — SSR
  {
    slug: "centre-ssr-reims-sebastopol",
    name: "Centre de Rééducation Sébastopol (CHU Reims)",
    type: "ssr",
    address: "48 rue de Sébastopol, 51100 Reims",
    city: "reims",
    department: "Marne",
    departmentCode: "51",
    specialties: ["Rééducation", "Gériatrie", "Neurologie"],
    beds: 90,
  },

  // Poitiers — SSR
  {
    slug: "centre-ssr-poitiers-grand-large",
    name: "Centre de Rééducation du Grand Large",
    type: "ssr",
    address: "Route de Limoges, 86000 Poitiers",
    city: "poitiers",
    department: "Vienne",
    departmentCode: "86",
    specialties: ["Rééducation", "Cardiologie", "Pneumologie"],
    beds: 60,
  },
];
