export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  content: string[];
  faq: { q: string; a: string }[];
  cta: { text: string; href: string };
}

export const articles: BlogArticle[] = [
  {
    slug: "transport-medical-partage-guide",
    title: "Transport médical partagé : le guide complet 2025-2026",
    description: "Tout savoir sur le transport médical partagé : règles, conditions, avantages, obligation réglementaire et mise en œuvre.",
    date: "2026-04-01",
    category: "Réglementation",
    readTime: "8 min",
    content: [
      "Le transport médical partagé consiste à transporter deux patients ou plus dans un même véhicule, depuis leur domicile jusqu’à leur lieu de soins. Depuis le décret du 28 février 2025, il est devenu la norme pour les soins répétitifs programmés.",
      "Les soins concernés incluent la dialyse rénale, la chimiothérapie, la radiothérapie, la réadaptation médicale et les hospitalisations de jour. Le médecin peut exclure un patient du transport partagé si son état de santé l’exige.",
      "Les conditions sont strictes : le détour ne doit pas dépasser 10 km par patient et l’attente totale à l’établissement ne doit pas excéder 45 minutes. Seuls les patients avec une prescription de transport assis professionnel (VSL ou taxi conventionné) sont concernés.",
      "Le tiers payant (zéro avance de frais) est désormais conditionné à l’acceptation du transport partagé. Un patient qui refuse le partage alors qu’il est éligible devra avancer les frais et attendre le remboursement.",
      "L’objectif national est d’atteindre 50% de transport partagé d’ici fin 2026, contre 19% fin 2023. L’État vise 300 millions d’euros d’économies sur la période 2025-2027.",
      "Pour les établissements de santé, la mise en place du transport partagé nécessite un outil de coordination : planification des rendez-vous, regroupement automatique des patients compatibles, suivi en temps réel et reporting pour l’ARS.",
    ],
    faq: [
      { q: "Le transport partagé est-il obligatoire ?", a: "Oui, depuis le décret de février 2025, le transport partagé est la norme pour les soins répétitifs programmés. Refuser entraîne la perte du tiers payant." },
      { q: "Quels patients sont concernés ?", a: "Les patients avec une prescription de transport assis (VSL ou taxi conventionné) pour des soins récurrents : dialyse, chimio, radio, réadaptation, hospitalisation de jour." },
      { q: "Quel est le détour maximum autorisé ?", a: "Le détour est limité à 10 km par patient supplémentaire, plafonné à 30 km au total. L’attente ne doit pas dépasser 45 minutes." },
    ],
    cta: { text: "Découvrir MediTrajet pour votre établissement", href: "/etablissements" },
  },
  {
    slug: "remboursement-transport-cpam",
    title: "Remboursement transport médical CPAM : tout comprendre",
    description: "Comment fonctionne le remboursement du transport médical par l’Assurance Maladie. ALD, tiers payant, taux de prise en charge.",
    date: "2026-03-25",
    category: "Patients",
    readTime: "6 min",
    content: [
      "L’Assurance Maladie prend en charge le transport médical sous certaines conditions. Le transport doit être prescrit par un médecin et relié à des soins remboursés. Le patient doit avoir une prescription médicale de transport (PMT).",
      "Le taux de remboursement dépend de votre situation. Pour les patients en ALD (Affection Longue Durée), la prise en charge est de 100% si le transport est lié à l’ALD. Pour les bénéficiaires de la CSS (Complémentaire Santé Solidaire), la prise en charge est également de 100%.",
      "Trois types de véhicules sont pris en charge : le taxi conventionné CPAM (coût moyen 61€/trajet), le VSL — Véhicule Sanitaire Léger (coût moyen 35€/trajet), et l’ambulance (coût moyen 115€/trajet). Le choix dépend de l’état de santé du patient.",
      "Depuis mars 2025, le tiers payant (zéro avance de frais) est conditionné à l’acceptation du transport partagé pour les soins récurrents. Cela signifie que vous ne payez rien si vous acceptez d’être transporté avec un autre patient.",
      "Pour bénéficier du remboursement, vous devez présenter au transporteur votre prescription médicale de transport et votre attestation de droits de l’organisme dont vous dépendez.",
    ],
    faq: [
      { q: "Mon transport médical est-il remboursé à 100% ?", a: "Si vous êtes en ALD et que le transport est lié à votre ALD, oui. Si vous bénéficiez de la CSS, également. Sinon, le taux de base est de 65%." },
      { q: "Dois-je avancer les frais ?", a: "Non, si vous acceptez le transport partagé. Depuis mars 2025, le tiers payant est conditionné à l’acceptation du partage pour les soins récurrents." },
    ],
    cta: { text: "Réserver un transport médical", href: "/patients" },
  },
  {
    slug: "decret-transport-partage-2025",
    title: "Décret février 2025 sur le transport partagé : ce qui change",
    description: "Le décret n°2025-202 du 28 février 2025 généralise le transport médical partagé. Décryptage complet pour les établissements.",
    date: "2026-03-20",
    category: "Réglementation",
    readTime: "7 min",
    content: [
      "Le décret n°2025-202 du 28 février 2025 établit le transport partagé comme l’option par défaut pour les patients dont l’état de santé le permet. C’est un changement majeur dans l’organisation du transport médical en France.",
      "Concrètement, le système permet le transport assis de plusieurs patients dans un même véhicule, depuis leur domicile jusqu’à leur lieu de soins. Il s’applique uniquement aux soins répétitifs programmés.",
      "Le protocole d’accord de septembre 2025 va plus loin : il fixe un objectif de 300 millions d’euros d’économies sur 2025-2027 et impose que les 32 CHU disposent d’une plateforme de transport opérationnelle d’ici fin 2026.",
      "L’ANAP (Agence Nationale d’Appui à la Performance) accompagne les établissements volontaires dans le déploiement de ces plateformes. L’objectif de taux de partage est progressif : 30% fin 2024, 45% fin 2025, 50%+ fin 2026.",
      "Pour les établissements, cela signifie qu’il faut s’équiper d’un outil capable de regrouper automatiquement les patients, de respecter les contraintes réglementaires (détour, attente), et de produire des rapports pour l’ARS.",
    ],
    faq: [
      { q: "Mon établissement est-il concerné ?", a: "Oui, si vous organisez des transports pour des soins récurrents (dialyse, chimio, radio, réadaptation). Les 32 CHU doivent impérativement s’équiper d’ici fin 2026." },
      { q: "Quelles sanctions en cas de non-respect ?", a: "Le non-respect des objectifs de taux de partage sera suivi par l’ARS. Les établissements sans plateforme risquent des difficultés lors des négociations budgétaires." },
    ],
    cta: { text: "Découvrir notre plateforme pour établissements", href: "/etablissements" },
  },
  {
    slug: "transport-dialyse",
    title: "Transport pour la dialyse : organisation et prise en charge",
    description: "Guide complet du transport médical pour les patients dialysés. Fréquence, remboursement, transport partagé, conseils pratiques.",
    date: "2026-03-15",
    category: "Patients",
    readTime: "5 min",
    content: [
      "La dialyse rénale nécessite généralement 3 séances par semaine, soit environ 156 trajets par an. C’est le cas d’usage le plus fréquent du transport médical conventionné en France.",
      "En tant que patient ALD, votre transport est pris en charge à 100% par l’Assurance Maladie. Avec le tiers payant, vous ne faites aucune avance de frais si vous acceptez le transport partagé.",
      "Le transport partagé est particulièrement adapté à la dialyse : les horaires sont réguliers, les destinations identiques (le centre de dialyse), et les patients ont souvent des créneaux proches. C’est la spécialité de MediTrajet.",
      "Votre centre de dialyse peut organiser vos transports via la plateforme MediTrajet. Le secrétariat programme vos trajets pour le mois, l’algorithme vous regroupe avec d’autres patients du centre, et vous recevez une notification quand votre transporteur arrive.",
      "Les équipements PMR (fauteuil roulant, déambulateur, oxygène) sont pris en compte dans le matching. Vous êtes toujours transporté dans un véhicule adapté à vos besoins.",
    ],
    faq: [
      { q: "Combien coûte le transport pour la dialyse ?", a: "Rien si vous êtes en ALD et acceptez le transport partagé. La prise en charge est de 100% avec tiers payant." },
      { q: "Puis-je choisir mon transporteur ?", a: "MediTrajet attribue automatiquement le transporteur le plus adapté, mais vous pouvez demander un transporteur favori." },
    ],
    cta: { text: "Découvrir MediTrajet pour les patients", href: "/patients" },
  },
  {
    slug: "taxi-conventionne-vs-vsl-ambulance",
    title: "Taxi conventionné, VSL ou ambulance : comment choisir ?",
    description: "Différences entre taxi conventionné CPAM, VSL et ambulance. Coûts, conditions, quand utiliser chaque mode de transport médical.",
    date: "2026-03-10",
    category: "Guide",
    readTime: "5 min",
    content: [
      "Le choix du mode de transport médical dépend de votre état de santé et de votre prescription médicale. Trois options existent : le taxi conventionné CPAM, le VSL (Véhicule Sanitaire Léger) et l’ambulance.",
      "Le taxi conventionné est le mode le plus utilisé (45,8% des dépenses). Il convient aux patients autonomes, capables de se déplacer seuls ou avec une aide minimale. Coût moyen : 61€ par trajet. Il est idéal pour la dialyse et les consultations régulières.",
      "Le VSL (Véhicule Sanitaire Léger) est 3 fois moins cher (coût moyen 35€/trajet) et convient aux patients nécessitant un accompagnement léger. Il représente 14,8% des dépenses. L’État encourage son utilisation pour réduire les coûts.",
      "L’ambulance (37,2% des dépenses, coût moyen 115€/trajet) est réservée aux patients qui doivent être transportés en position allongée ou sous surveillance médicale. Elle est 3 fois plus chère qu’un VSL.",
      "MediTrajet est la seule plateforme qui regroupe les trois modes de transport dans une seule application. L’algorithme recommande automatiquement le mode le plus adapté selon la prescription et l’état du patient.",
    ],
    faq: [
      { q: "Qui décide du mode de transport ?", a: "Le médecin prescripteur choisit le mode de transport adapté à votre état de santé sur la prescription médicale de transport." },
      { q: "Le taxi conventionné est-il vraiment remboursé ?", a: "Oui, le taxi conventionné CPAM est remboursé par l’Assurance Maladie sur prescription médicale, comme le VSL et l’ambulance." },
    ],
    cta: { text: "Trouver un transport médical", href: "/patients" },
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
