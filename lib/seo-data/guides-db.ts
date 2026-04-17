import type { GuideData } from "./types";

export const guidesDB: GuideData[] = [
  // ═══════════════════════════════════════════════════════════════
  // CLUSTER 1 — Remboursement & Finances (8 guides)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: "remboursement-transport-cpam",
    title: "Remboursement transport médical CPAM : guide complet 2025",
    description:
      "Comment obtenir le remboursement de votre transport médical par la CPAM ? Conditions, taux, démarches et délais expliqués simplement.",
    date: "2025-01-15",
    lastUpdated: "2025-03-10",
    readTime: "12 min",
    category: "Remboursement",
    answerBox:
      "La CPAM rembourse 65 % du tarif conventionné des transports médicaux prescrits. En ALD, le remboursement atteint 100 %. Une prescription médicale de transport (Cerfa S3138) est obligatoire avant le trajet.",
    sections: [
      {
        id: "conditions-remboursement",
        title: "Conditions de remboursement du transport médical",
        content: [
          "Le remboursement du transport médical par l'Assurance Maladie est soumis à plusieurs conditions cumulatives. Tout d'abord, le transport doit être prescrit par un médecin sur le formulaire Cerfa S3138, communément appelé « bon de transport ». Cette prescription doit être établie avant le trajet, sauf en cas d'urgence où elle peut être rédigée a posteriori dans un délai de 72 heures.",
          "Le motif du transport doit correspondre à l'une des situations prévues par l'article L.322-5 du Code de la Sécurité sociale : hospitalisation (entrée ou sortie), soins liés à une affection de longue durée (ALD), soins en rapport avec un accident du travail ou une maladie professionnelle, transport de longue distance (plus de 150 km aller), ou convocation par un service médical de l'Assurance Maladie.",
          "Le patient doit également être dans l'incapacité de se déplacer par ses propres moyens, que ce soit en raison de son état de santé, de son autonomie réduite, ou de l'absence de transport en commun adapté. Le médecin prescripteur évalue cette incapacité et la justifie sur le bon de transport.",
          "Enfin, le transporteur utilisé doit être conventionné par la CPAM : taxi conventionné, VSL (Véhicule Sanitaire Léger) ou ambulance. L'utilisation d'un véhicule personnel est remboursée sous forme d'indemnités kilométriques à un tarif inférieur."
        ],
      },
      {
        id: "taux-remboursement",
        title: "Taux de remboursement selon votre situation",
        content: [
          "Le taux de remboursement standard du transport médical est de 65 % du tarif conventionné. Le reste à charge de 35 % est généralement pris en charge par la complémentaire santé du patient. Ce taux s'applique à la majorité des transports prescrits pour des consultations spécialisées ou des examens médicaux.",
          "En revanche, le remboursement passe à 100 % du tarif conventionné dans plusieurs situations : affection de longue durée (ALD) exonérante pour les transports liés à cette ALD, accident du travail ou maladie professionnelle, maternité (à partir du 6e mois de grossesse), bénéficiaires de la CSS (Complémentaire Santé Solidaire), ou pension d'invalidité. Dans ces cas, aucun reste à charge ne subsiste sur la part conventionnée.",
          "Il est important de noter que la franchise médicale de 2 € par trajet s'applique dans tous les cas, y compris en ALD (sauf pour les bénéficiaires de la CSS). Cette franchise est plafonnée à 50 € par an et par personne. Elle n'est pas remboursable par les complémentaires santé.",
          "Pour les transports en série (au moins 4 transports de plus de 50 km sur 2 mois pour un même traitement), une demande d'entente préalable auprès de la CPAM est nécessaire. Le silence de la CPAM pendant 15 jours vaut acceptation."
        ],
      },
      {
        id: "demarches-remboursement",
        title: "Démarches pour obtenir le remboursement",
        content: [
          "La démarche la plus simple est le tiers payant : le transporteur conventionné facture directement la CPAM et vous n'avancez pas les frais. C'est le cas par défaut avec les taxis conventionnés et les VSL. Le transporteur vous remet un bon de transport à signer et transmet la facture à la CPAM par voie électronique via la télétransmission.",
          "Si vous avancez les frais (transport en véhicule personnel, remboursement a posteriori), vous devez envoyer à votre CPAM : le bon de transport original signé par le médecin, la facture du transporteur ou le justificatif kilométrique, et éventuellement un relevé d'identité bancaire. L'envoi se fait par courrier ou via votre espace Ameli en ligne.",
          "Le délai de remboursement est généralement de 5 à 7 jours ouvrés après réception du dossier complet par la CPAM. Ce délai peut s'allonger en cas de pièce manquante ou de vérification complémentaire. Vous pouvez suivre le remboursement dans la rubrique « Mes paiements » de votre compte Ameli."
        ],
      },
      {
        id: "cas-particuliers",
        title: "Cas particuliers et exceptions",
        content: [
          "Les transports d'urgence bénéficient d'un régime dérogatoire : la prescription médicale peut être établie a posteriori dans les 72 heures suivant le transport. Le remboursement est garanti même sans prescription préalable si l'urgence est médicalement justifiée. Le SAMU ou les pompiers peuvent déclencher un transport sanitaire remboursé.",
          "Pour les transports itératifs (dialyse, chimiothérapie, radiothérapie), la prescription de transport peut couvrir une série de trajets. Le médecin indique le nombre de séances et la fréquence sur le bon de transport. Cela évite au patient de demander une nouvelle prescription à chaque séance.",
          "Les transferts entre établissements hospitaliers sont prescrits par le médecin de l'établissement d'origine. Le mode de transport (ambulance, VSL ou taxi) dépend de l'état de santé du patient. Ces transports sont remboursés à 100 % lorsqu'ils s'inscrivent dans la continuité d'une hospitalisation.",
          "En cas de refus de remboursement par la CPAM, le patient dispose d'un délai de 2 mois pour contester la décision. Le recours s'effectue d'abord auprès de la commission de recours amiable (CRA) de la CPAM, puis, en cas de rejet, devant le tribunal judiciaire (pôle social)."
        ],
      },
      {
        id: "optimiser-remboursement",
        title: "Conseils pour optimiser votre remboursement",
        content: [
          "Privilégiez toujours un transporteur conventionné par la CPAM pour bénéficier du tiers payant et éviter d'avancer les frais. Vérifiez le conventionnement auprès de votre CPAM ou sur la liste disponible sur Ameli.fr. Un taxi non conventionné ne sera pas remboursé, même avec un bon de transport.",
          "Faites établir votre prescription de transport avant le jour du trajet. Une prescription a posteriori n'est acceptée qu'en cas d'urgence et peut faire l'objet d'un contrôle renforcé par la CPAM. Pour les transports en série, demandez une prescription couvrant l'ensemble des séances dès le départ.",
          "Si vous êtes en ALD, assurez-vous que le médecin coche la case ALD sur le bon de transport et que le transport est bien en rapport avec votre affection exonérante. Un transport pour une consultation sans rapport avec l'ALD sera remboursé au taux standard de 65 %, pas à 100 %."
        ],
      },
    ],
    faq: [
      {
        q: "Quel est le taux de remboursement du transport médical par la CPAM ?",
        a: "Le taux standard est de 65 % du tarif conventionné. Il passe à 100 % en ALD, accident du travail, maternité ou pour les bénéficiaires de la CSS.",
      },
      {
        q: "Faut-il une prescription pour le remboursement du transport ?",
        a: "Oui, une prescription médicale sur le Cerfa S3138 est obligatoire avant le trajet, sauf en cas d'urgence où elle peut être établie sous 72 heures.",
      },
      {
        q: "Combien de temps pour être remboursé par la CPAM ?",
        a: "Le remboursement intervient sous 5 à 7 jours ouvrés après réception du dossier complet, avec un délai pouvant s'allonger si des pièces manquent.",
      },
      {
        q: "Le transport en véhicule personnel est-il remboursé ?",
        a: "Oui, sous forme d'indemnités kilométriques, à condition d'avoir une prescription médicale. Le taux est inférieur à celui d'un transporteur conventionné.",
      },
    ],
    relatedGuides: [
      "tiers-payant-transport-medical",
      "ald-transport-medical",
      "bon-de-transport-medical",
      "franchise-medicale-transport",
      "tarifs-taxi-vsl-ambulance",
    ],
    relatedCities: ["paris", "lyon", "marseille"],
  },

  {
    slug: "tiers-payant-transport-medical",
    title: "Tiers payant transport médical : zéro avance de frais",
    description:
      "Comprendre le tiers payant pour le transport médical : fonctionnement, conditions, transporteurs éligibles et démarches pour ne rien avancer.",
    date: "2025-01-20",
    lastUpdated: "2025-03-12",
    readTime: "9 min",
    category: "Remboursement",
    answerBox:
      "Le tiers payant permet au patient de ne pas avancer les frais de transport médical. Le transporteur conventionné facture directement la CPAM. Une prescription médicale et un transporteur conventionné sont requis.",
    sections: [
      {
        id: "principe-tiers-payant",
        title: "Principe du tiers payant pour le transport médical",
        content: [
          "Le tiers payant est un mécanisme qui dispense le patient d'avancer les frais de transport médical. Concrètement, le transporteur conventionné (taxi conventionné, VSL ou ambulance) facture directement la CPAM pour la part obligatoire et, le cas échéant, la complémentaire santé pour le ticket modérateur. Le patient n'a rien à payer au moment du transport, à l'exception de la franchise médicale de 2 € par trajet.",
          "Ce dispositif s'applique automatiquement lorsque vous utilisez un transporteur conventionné par la CPAM. Le transporteur dispose des outils de télétransmission nécessaires pour facturer l'Assurance Maladie en temps réel. Il vous demandera simplement de présenter votre carte Vitale et de signer le bon de transport.",
          "Le tiers payant couvre la part de l'Assurance Maladie obligatoire (65 % en règle générale, 100 % en ALD). Pour le complément (ticket modérateur de 35 %), certains transporteurs pratiquent également le tiers payant avec les principales mutuelles et complémentaires santé."
        ],
      },
      {
        id: "conditions-beneficier",
        title: "Conditions pour bénéficier du tiers payant transport",
        content: [
          "Pour bénéficier du tiers payant, trois conditions doivent être réunies. Premièrement, vous devez disposer d'une prescription médicale de transport (Cerfa S3138) établie par votre médecin. Sans cette prescription, aucun remboursement ni tiers payant n'est possible.",
          "Deuxièmement, le transporteur doit être conventionné par la CPAM. Les taxis conventionnés, les sociétés de VSL et les ambulanciers agréés sont conventionnés par défaut. Vous pouvez vérifier le conventionnement d'un transporteur auprès de votre CPAM ou sur le site Ameli.fr.",
          "Troisièmement, vos droits à l'Assurance Maladie doivent être à jour. Le transporteur vérifie vos droits en passant votre carte Vitale dans son terminal. En cas de droits non à jour, le tiers payant peut être refusé et vous devrez avancer les frais avant de demander le remboursement.",
          "Les bénéficiaires de la CSS (Complémentaire Santé Solidaire) bénéficient automatiquement du tiers payant intégral : ni part obligatoire ni ticket modérateur ne sont facturés. La franchise médicale de 2 € ne s'applique pas non plus aux bénéficiaires de la CSS."
        ],
      },
      {
        id: "tiers-payant-complementaire",
        title: "Tiers payant et complémentaire santé",
        content: [
          "Le tiers payant pour le transport médical concerne d'abord la part obligatoire de l'Assurance Maladie. Pour la part complémentaire (le ticket modérateur de 35 %), la situation dépend des accords entre le transporteur et votre mutuelle.",
          "De nombreux transporteurs conventionnés ont signé des conventions avec les principales complémentaires santé pour pratiquer le tiers payant intégral. Dans ce cas, vous n'avancez strictement aucun frais (hors franchise). Renseignez-vous auprès du transporteur avant le trajet pour savoir s'il pratique le tiers payant avec votre mutuelle.",
          "Si le transporteur ne pratique pas le tiers payant avec votre complémentaire, vous devrez avancer le ticket modérateur (35 % du tarif conventionné) et demander le remboursement à votre mutuelle. La plupart des mutuelles remboursent sous 48 à 72 heures par virement bancaire."
        ],
      },
      {
        id: "demarches-patient",
        title: "Démarches du patient pour le tiers payant",
        content: [
          "Le patient n'a quasiment aucune démarche à effectuer pour bénéficier du tiers payant transport. Il suffit de présenter sa carte Vitale et son bon de transport au chauffeur le jour du trajet. Le transporteur se charge de la facturation et de la télétransmission à la CPAM.",
          "En pratique, lors de la réservation du transport, précisez que vous disposez d'une prescription médicale et que vous souhaitez le tiers payant. Le transporteur conventionné vérifiera vos droits en amont et vous confirmera les modalités de prise en charge.",
          "Conservez toujours une copie de votre bon de transport et le récépissé remis par le transporteur. En cas de litige ou de problème de remboursement, ces documents constituent la preuve du transport effectué et des conditions de prise en charge."
        ],
      },
    ],
    faq: [
      {
        q: "Comment fonctionne le tiers payant pour le transport médical ?",
        a: "Le transporteur conventionné facture directement la CPAM. Le patient ne paie rien sauf la franchise de 2 € par trajet, non remboursable par la mutuelle.",
      },
      {
        q: "Tous les transporteurs pratiquent-ils le tiers payant ?",
        a: "Seuls les transporteurs conventionnés CPAM (taxis conventionnés, VSL, ambulances agréées) pratiquent le tiers payant. Vérifiez le conventionnement avant le trajet.",
      },
      {
        q: "Le tiers payant couvre-t-il la part complémentaire ?",
        a: "Cela dépend des accords entre le transporteur et votre mutuelle. Beaucoup de transporteurs pratiquent le tiers payant intégral avec les principales complémentaires.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "css-transport-medical",
      "taxi-conventionne-comment-ca-marche",
      "bon-de-transport-medical",
    ],
    relatedCities: ["paris", "lyon", "marseille"],
  },

  {
    slug: "ald-transport-medical",
    title: "ALD et transport médical : remboursement à 100 % expliqué",
    description:
      "Transport médical en ALD : conditions de prise en charge à 100 %, prescription, types de transport remboursés et démarches CPAM détaillées.",
    date: "2025-01-25",
    lastUpdated: "2025-03-15",
    readTime: "11 min",
    category: "Remboursement",
    answerBox:
      "En ALD (affection de longue durée), le transport médical est remboursé à 100 % par la CPAM si le trajet est en rapport avec l'affection exonérante. La prescription doit mentionner l'ALD et le lien avec le traitement.",
    sections: [
      {
        id: "ald-definition-transport",
        title: "ALD et prise en charge du transport : les bases",
        content: [
          "L'affection de longue durée (ALD) exonérante ouvre droit à une prise en charge à 100 % des soins en rapport avec la pathologie, y compris les transports médicaux. La liste des 30 ALD comprend des pathologies comme le diabète, le cancer, l'insuffisance rénale chronique, les maladies cardio-vasculaires, ou encore les affections psychiatriques de longue durée.",
          "Pour que le transport soit remboursé à 100 %, deux conditions doivent être réunies : le patient doit être reconnu en ALD par sa CPAM (protocole de soins validé) et le transport doit être en rapport direct avec le traitement de l'ALD. Un transport pour une consultation sans rapport avec l'ALD sera remboursé au taux standard de 65 %.",
          "Le protocole de soins établi par le médecin traitant liste les traitements et soins en rapport avec l'ALD. Le médecin prescripteur du transport doit s'assurer que le trajet est bien lié à l'un de ces soins. La case « ALD » doit être cochée sur le bon de transport Cerfa S3138.",
          "La franchise médicale de 2 € par trajet reste applicable en ALD, sauf pour les bénéficiaires de la CSS. Cette franchise est plafonnée à 50 € par an toutes franchises confondues (médicaments, actes paramédicaux, transports)."
        ],
      },
      {
        id: "types-transport-ald",
        title: "Types de transport remboursés en ALD",
        content: [
          "En ALD, tous les modes de transport sanitaire sont remboursables à 100 % : taxi conventionné, VSL (Véhicule Sanitaire Léger), ambulance et véhicule personnel. Le choix du mode de transport dépend de l'état de santé du patient et est déterminé par le médecin prescripteur.",
          "Le taxi conventionné est le mode de transport le plus utilisé en ALD pour les patients autonomes en position assise. Il offre le meilleur confort et une disponibilité 24h/24. Le tarif conventionné comprend la prise en charge, le kilométrage et les éventuels péages ou frais de stationnement hospitalier.",
          "Le VSL est prescrit pour les patients nécessitant un transport assis mais pouvant voyager avec d'autres patients (transport partagé). Depuis le décret de février 2025 sur le transport partagé, le VSL est encouragé pour les trajets réguliers (dialyse, radiothérapie) afin de mutualiser les coûts.",
          "L'ambulance est réservée aux patients devant être transportés en position allongée ou semi-assise, ou nécessitant une surveillance médicale pendant le trajet. C'est le mode de transport le plus coûteux mais aussi le plus médicalisé."
        ],
      },
      {
        id: "prescription-transport-ald",
        title: "Prescription de transport en ALD",
        content: [
          "La prescription de transport en ALD est établie sur le formulaire Cerfa S3138. Le médecin doit impérativement cocher la case « Affection de longue durée » et préciser le motif du transport en lien avec l'ALD. Sans cette mention, le remboursement s'effectuera au taux standard de 65 %.",
          "Pour les soins itératifs (dialyse, chimiothérapie, radiothérapie, kinésithérapie), le médecin peut établir une prescription de transport couvrant une série de trajets. Il précise le nombre de séances, la fréquence et la durée prévisionnelle du traitement. Cela évite au patient de revenir régulièrement chercher une nouvelle prescription.",
          "La demande d'entente préalable est obligatoire pour les transports en série de plus de 50 km aller. Le médecin remplit le formulaire d'entente préalable et l'adresse au service médical de la CPAM. Le silence de la CPAM sous 15 jours vaut acceptation."
        ],
      },
      {
        id: "ald-transport-partage",
        title: "ALD et transport partagé : ce qui change en 2025",
        content: [
          "Le décret de février 2025 sur le transport partagé impacte directement les patients en ALD effectuant des trajets réguliers. Dès 2026, le transport partagé deviendra obligatoire pour les patients ALD se rendant à des soins itératifs, sauf contre-indication médicale formelle.",
          "Le transport partagé consiste à regrouper plusieurs patients dans un même véhicule (VSL ou taxi conventionné) pour optimiser les trajets vers les centres de soins. Pour les patients ALD, cela peut allonger la durée du trajet mais réduit le coût global pour l'Assurance Maladie.",
          "Les patients ALD souffrant de contre-indications au transport partagé (immunodépression sévère, troubles psychiatriques, handicap lourd) peuvent obtenir une dérogation. Le médecin prescripteur doit alors cocher la case « transport individuel médicalement justifié » sur le bon de transport."
        ],
      },
      {
        id: "demarches-ald",
        title: "Démarches pour le transport ALD",
        content: [
          "La première étape est d'obtenir la reconnaissance en ALD par votre CPAM. Votre médecin traitant établit un protocole de soins qu'il adresse au médecin-conseil de la CPAM. Une fois validé, le protocole est enregistré et vos droits à la prise en charge à 100 % sont ouverts.",
          "Pour chaque transport, assurez-vous que le médecin prescripteur coche la case ALD sur le bon de transport et que le motif est bien en rapport avec votre affection exonérante. Le transporteur conventionné facturera alors la CPAM au taux de 100 % via le tiers payant.",
          "En cas de refus de prise en charge à 100 %, vérifiez que votre protocole de soins est à jour et que le soin motivant le transport est bien inscrit dans le protocole. Si le refus persiste, contactez votre CPAM ou saisissez la commission de recours amiable."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport est-il remboursé à 100 % en ALD ?",
        a: "Oui, à condition que le transport soit en rapport avec l'ALD et que la case ALD soit cochée sur le bon de transport. La franchise de 2 € reste due.",
      },
      {
        q: "Quelles ALD donnent droit au remboursement transport ?",
        a: "Toutes les ALD exonérantes (liste des 30) ouvrent droit au transport remboursé à 100 % pour les soins en rapport avec la pathologie reconnue.",
      },
      {
        q: "Peut-on choisir son mode de transport en ALD ?",
        a: "Le mode de transport est prescrit par le médecin selon l'état de santé du patient. Le taxi conventionné est le plus courant pour les patients autonomes en position assise.",
      },
      {
        q: "La franchise médicale s'applique-t-elle en ALD ?",
        a: "Oui, la franchise de 2 € par trajet s'applique en ALD, plafonnée à 50 € par an. Seuls les bénéficiaires de la CSS en sont exonérés.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "transport-dialyse",
      "transport-chimiotherapie",
      "franchise-medicale-transport",
      "obligation-transport-partage-2026",
    ],
    relatedCities: ["paris", "lyon", "marseille"],
  },

  {
    slug: "css-transport-medical",
    title: "CSS et transport médical : prise en charge intégrale",
    description:
      "Bénéficiaires de la CSS (Complémentaire Santé Solidaire) : comment profiter de la prise en charge à 100 % de vos transports médicaux sans franchise.",
    date: "2025-02-01",
    lastUpdated: "2025-03-18",
    readTime: "8 min",
    category: "Remboursement",
    answerBox:
      "Les bénéficiaires de la CSS profitent d'une prise en charge à 100 % des transports médicaux sans franchise ni ticket modérateur. Le tiers payant intégral s'applique automatiquement avec les transporteurs conventionnés.",
    sections: [
      {
        id: "css-presentation",
        title: "La CSS et le transport médical",
        content: [
          "La Complémentaire Santé Solidaire (CSS), anciennement CMU-C et ACS, est une aide qui permet aux personnes aux revenus modestes de bénéficier d'une complémentaire santé gratuite ou à faible coût. En matière de transport médical, la CSS offre l'un des dispositifs de prise en charge les plus avantageux.",
          "Avec la CSS, le transport médical prescrit est remboursé à 100 % du tarif conventionné, sans aucun reste à charge. De plus, la franchise médicale de 2 € par trajet ne s'applique pas aux bénéficiaires de la CSS. C'est le seul dispositif qui exonère complètement de la franchise.",
          "Le tiers payant intégral est obligatoire pour les bénéficiaires de la CSS : le transporteur conventionné ne peut pas vous demander d'avancer les frais. Il facture directement la CPAM pour la totalité du montant. Vous n'avez qu'à présenter votre carte Vitale avec attestation CSS."
        ],
      },
      {
        id: "conditions-eligibilite-css",
        title: "Conditions d'éligibilité à la CSS pour le transport",
        content: [
          "Pour bénéficier de la CSS, vos ressources annuelles ne doivent pas dépasser un plafond révisé chaque année. En 2025, le plafond est d'environ 10 166 € par an pour une personne seule en métropole. Au-delà de ce seuil et jusqu'à environ 13 724 €, la CSS est accordée avec une participation financière mensuelle (de 8 à 30 € selon l'âge).",
          "La demande de CSS se fait auprès de votre CPAM via le formulaire Cerfa n° 12504 ou directement en ligne sur Ameli.fr. La décision est notifiée dans un délai de 2 mois. Les droits à la CSS sont ouverts pour un an renouvelable.",
          "Dès que vos droits CSS sont enregistrés, ils apparaissent sur votre carte Vitale. Pensez à mettre à jour votre carte Vitale dans une pharmacie ou un centre CPAM pour que les transporteurs puissent vérifier vos droits en temps réel."
        ],
      },
      {
        id: "demarches-transport-css",
        title: "Démarches pour le transport médical avec la CSS",
        content: [
          "Les démarches sont identiques à celles de tout assuré : une prescription médicale de transport est nécessaire, établie sur le Cerfa S3138. Le médecin prescrit le mode de transport adapté à votre état de santé. La seule différence est que le remboursement sera intégral et sans franchise.",
          "Lors de la réservation du transport, indiquez que vous êtes bénéficiaire de la CSS. Le transporteur conventionné vérifiera vos droits et appliquera automatiquement le tiers payant intégral. Aucun frais ne vous sera demandé, ni au moment du trajet, ni ultérieurement.",
          "En cas de difficulté (transporteur refusant le tiers payant, demande de paiement), contactez votre CPAM. Le tiers payant est un droit pour les bénéficiaires de la CSS et le transporteur conventionné a l'obligation légale de l'appliquer."
        ],
      },
      {
        id: "css-vs-autres-dispositifs",
        title: "CSS comparée aux autres dispositifs de prise en charge",
        content: [
          "La CSS offre la prise en charge la plus complète pour le transport médical. Contrairement à l'ALD qui rembourse à 100 % mais maintient la franchise de 2 €, la CSS exonère de la franchise. Contrairement au régime général (65 %), la CSS couvre l'intégralité du tarif conventionné.",
          "Les bénéficiaires de la CSS n'ont pas besoin de souscrire une complémentaire santé distincte : la CSS fait office de complémentaire pour l'ensemble des soins, y compris le transport médical. Le ticket modérateur de 35 % est pris en charge par la CSS.",
          "Pour les patients en ALD et bénéficiaires de la CSS simultanément, le cumul des deux dispositifs assure une prise en charge optimale : 100 % sans franchise ni reste à charge pour tous les transports en rapport avec l'ALD."
        ],
      },
    ],
    faq: [
      {
        q: "La CSS exonère-t-elle de la franchise transport ?",
        a: "Oui, les bénéficiaires de la CSS sont exonérés de la franchise médicale de 2 € par trajet, contrairement aux patients en ALD qui doivent la régler.",
      },
      {
        q: "Le tiers payant est-il automatique avec la CSS ?",
        a: "Oui, le tiers payant intégral est obligatoire pour les bénéficiaires de la CSS. Le transporteur conventionné ne peut pas vous demander d'avancer les frais.",
      },
      {
        q: "Comment demander la CSS ?",
        a: "La demande se fait via le Cerfa n° 12504 ou en ligne sur Ameli.fr. La CPAM répond sous 2 mois. Les droits sont ouverts pour un an renouvelable.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "tiers-payant-transport-medical",
      "franchise-medicale-transport",
      "ald-transport-medical",
    ],
    relatedCities: ["paris", "lyon", "marseille"],
  },

  {
    slug: "franchise-medicale-transport",
    title: "Franchise médicale transport : montant, plafond et exonérations",
    description:
      "Tout savoir sur la franchise médicale de 2 € sur le transport sanitaire : qui la paie, plafond annuel de 50 €, cas d'exonération et impact sur le remboursement.",
    date: "2025-02-05",
    lastUpdated: "2025-03-20",
    readTime: "7 min",
    category: "Remboursement",
    answerBox:
      "La franchise médicale transport est de 2 € par trajet, plafonnée à 50 € par an. Elle s'applique à tous les transports remboursés, y compris en ALD. Seuls les bénéficiaires de la CSS et les mineurs en sont exonérés.",
    sections: [
      {
        id: "montant-franchise",
        title: "Montant et fonctionnement de la franchise médicale transport",
        content: [
          "La franchise médicale transport est une participation forfaitaire de 2 € par trajet sanitaire remboursé par l'Assurance Maladie. Elle s'applique à chaque trajet (aller ou retour comptant chacun pour un trajet), quel que soit le mode de transport utilisé : taxi conventionné, VSL, ambulance ou véhicule personnel.",
          "Cette franchise est déduite automatiquement du remboursement effectué par la CPAM. Concrètement, si le remboursement d'un aller-retour en taxi conventionné s'élève à 60 €, la CPAM ne versera que 56 € au transporteur (60 € - 2 € aller - 2 € retour). Le transporteur peut vous demander le paiement de la franchise au moment du trajet.",
          "La franchise est plafonnée à 50 € par an et par personne, toutes franchises médicales confondues (médicaments, actes paramédicaux et transports). Une fois ce plafond atteint, aucune franchise supplémentaire n'est prélevée pour le reste de l'année civile."
        ],
      },
      {
        id: "exonerations-franchise",
        title: "Qui est exonéré de la franchise médicale transport ?",
        content: [
          "Les bénéficiaires de la CSS (Complémentaire Santé Solidaire) sont exonérés de la franchise médicale transport. C'est le principal cas d'exonération et il concerne les assurés aux revenus les plus modestes. Les mineurs de moins de 18 ans sont également exonérés.",
          "Les femmes enceintes à partir du 6e mois de grossesse et jusqu'à 12 jours après l'accouchement sont exonérées de la franchise pour tous les soins, y compris le transport médical. Les bénéficiaires de l'AME (Aide Médicale de l'État) sont également exonérés.",
          "Attention : les patients en ALD ne sont pas exonérés de la franchise médicale. Même si le transport est remboursé à 100 %, la franchise de 2 € par trajet reste due. C'est une source fréquente de confusion. Les pensionnés d'invalidité ne sont pas non plus exonérés."
        ],
      },
      {
        id: "impact-patient-dialyse",
        title: "Impact de la franchise pour les patients réguliers",
        content: [
          "Pour les patients effectuant des transports réguliers (dialyse 3 fois par semaine, radiothérapie quotidienne), la franchise peut représenter un coût significatif. Un patient dialysé effectuant 312 trajets par an (156 aller-retour × 2) atteindrait le plafond de 50 € en seulement 13 aller-retour, soit environ un mois de dialyse.",
          "Une fois le plafond de 50 € atteint, les transports suivants sont remboursés sans franchise. Vous pouvez suivre le cumul de vos franchises sur votre espace Ameli.fr, rubrique « Mes paiements ». La CPAM comptabilise automatiquement les franchises prélevées.",
          "Pour les patients en difficulté financière, il est recommandé de vérifier l'éligibilité à la CSS. Si vos ressources ne dépassent pas les plafonds, la CSS vous exonérera de toute franchise médicale, y compris sur le transport."
        ],
      },
      {
        id: "franchise-mutuelle",
        title: "Franchise médicale et complémentaire santé",
        content: [
          "La franchise médicale ne peut pas être remboursée par les complémentaires santé (mutuelles, assurances). C'est une disposition légale : le Code de la Sécurité sociale interdit expressément aux organismes complémentaires de prendre en charge les franchises médicales.",
          "Ce reste à charge définitif est assumé par le patient. Toutefois, le plafonnement à 50 € par an en limite l'impact. Pour un patient utilisant régulièrement le transport médical, le plafond est atteint en quelques semaines, après quoi les transports sont entièrement pris en charge."
        ],
      },
    ],
    faq: [
      {
        q: "Quel est le montant de la franchise médicale transport ?",
        a: "La franchise est de 2 € par trajet sanitaire remboursé, plafonnée à 50 € par an toutes franchises médicales confondues (transports, médicaments, actes paramédicaux).",
      },
      {
        q: "La franchise s'applique-t-elle en ALD ?",
        a: "Oui, la franchise de 2 € par trajet s'applique même en ALD. Seuls les bénéficiaires de la CSS et les mineurs en sont exonérés.",
      },
      {
        q: "Ma mutuelle peut-elle rembourser la franchise ?",
        a: "Non, la loi interdit aux complémentaires santé de rembourser les franchises médicales. C'est un reste à charge définitif, plafonné à 50 € par an.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "css-transport-medical",
      "ald-transport-medical",
      "cout-transport-sanitaire-france",
    ],
  },

  {
    slug: "cout-transport-sanitaire-france",
    title: "Coût du transport sanitaire en France : tarifs 2025",
    description:
      "Combien coûte un transport sanitaire en France ? Tarifs conventionnés 2025 pour taxi, VSL et ambulance, forfaits, suppléments et comparatif détaillé.",
    date: "2025-02-10",
    lastUpdated: "2025-03-22",
    readTime: "10 min",
    category: "Remboursement",
    answerBox:
      "En 2025, le coût moyen d'un transport sanitaire est de 55 à 70 € en taxi conventionné, 30 à 40 € en VSL et 80 à 120 € en ambulance. Ces tarifs sont conventionnés par la CPAM et remboursés à 65 % ou 100 % selon la situation.",
    sections: [
      {
        id: "structure-tarifs",
        title: "Structure des tarifs du transport sanitaire",
        content: [
          "Les tarifs du transport sanitaire en France sont fixés par convention entre les organisations professionnelles de transporteurs et l'Assurance Maladie. Ces tarifs conventionnés constituent la base de remboursement de la CPAM. Ils comprennent plusieurs composantes : un forfait de prise en charge, un tarif kilométrique, et d'éventuels suppléments.",
          "Le forfait de prise en charge couvre les frais fixes du transport : mise à disposition du véhicule, temps d'attente à l'aller et au retour, formalités administratives. Ce forfait varie selon le type de véhicule : environ 4,50 € pour un VSL, 6,50 € pour un taxi conventionné et 12 € pour une ambulance.",
          "Le tarif kilométrique est appliqué en fonction de la distance parcourue. Il est de l'ordre de 0,90 € par km en VSL, 0,95 € par km en taxi conventionné et 2,19 € par km en ambulance. Des majorations peuvent s'appliquer pour les trajets de nuit, de week-end ou de jour férié.",
          "Les suppléments couvrent les péages autoroutiers, les frais de stationnement hospitalier et les éventuels temps d'attente dépassant le forfait inclus. Ces suppléments sont remboursables par la CPAM dans la limite des barèmes conventionnés."
        ],
      },
      {
        id: "tarif-taxi",
        title: "Tarifs du taxi conventionné en 2025",
        content: [
          "Le tarif du taxi conventionné se compose d'un forfait de prise en charge d'environ 3,83 €, d'un tarif kilométrique d'environ 1,12 € par km en charge A (jour), et de 1,35 € en charge B (nuit et dimanche). Le prix moyen d'une course de 30 km aller est d'environ 37 €, soit un aller-retour à de 55 à 70 €.",
          "Les taxis conventionnés appliquent les tarifs préfectoraux réglementés, qui varient légèrement d'un département à l'autre. La CPAM rembourse sur la base du tarif conventionné départemental. En cas de dépassement (trajet par un itinéraire non optimal), la différence reste à la charge du patient.",
          "Le taxi conventionné offre le meilleur rapport qualité-confort pour les patients autonomes en position assise. Le véhicule est individuel (pas de transport partagé sauf accord du patient), le chauffeur est formé au transport de personnes à mobilité réduite et le service est disponible 24h/24."
        ],
      },
      {
        id: "tarif-vsl",
        title: "Tarifs du VSL en 2025",
        content: [
          "Le VSL (Véhicule Sanitaire Léger) est le mode de transport sanitaire le plus économique. Le forfait de prise en charge est d'environ 14,30 €, le tarif kilométrique d'environ 0,90 € par km. Le prix moyen d'un aller-retour de 30 km est d'de 30 à 40 €.",
          "Le VSL permet le transport partagé : jusqu'à 3 patients peuvent être transportés simultanément. En cas de transport partagé, le tarif est réparti entre les patients, ce qui réduit le coût global. Le décret de février 2025 encourage cette pratique pour les trajets réguliers.",
          "Le VSL est équipé d'un minimum d'équipement médical (oxygène, tensiomètre) et le chauffeur possède le diplôme d'auxiliaire ambulancier. Les horaires de disponibilité sont généralement limités aux heures ouvrées (7h-20h en semaine)."
        ],
      },
      {
        id: "tarif-ambulance",
        title: "Tarifs de l'ambulance en 2025",
        content: [
          "L'ambulance est le mode de transport sanitaire le plus coûteux. Le forfait de prise en charge est d'environ 64,30 €, le tarif kilométrique d'environ 2,19 € par km. Le prix moyen d'un aller-retour de 30 km est d'de 80 à 120 €, pouvant dépasser 150 € pour les trajets plus longs.",
          "L'ambulance est réservée aux patients devant être transportés en position allongée ou semi-assise, ou nécessitant une surveillance médicale durant le trajet. Elle est équipée d'un matériel médical complet (oxygène, scope, défibrillateur) et l'équipage comprend un DEA (Diplôme d'État d'Ambulancier) et un auxiliaire.",
          "Des majorations s'appliquent pour les transports de nuit (entre 20h et 8h), les dimanches et jours fériés, et les urgences. Ces majorations sont conventionnées et remboursables par la CPAM."
        ],
      },
      {
        id: "comparatif-vehicule-personnel",
        title: "Remboursement du véhicule personnel",
        content: [
          "L'utilisation du véhicule personnel pour un transport médical prescrit est remboursée sous forme d'indemnités kilométriques. Le barème est de 0,30 € par km pour un véhicule de 5 CV fiscaux, plus une indemnité de 2 € par trajet (sauf franchise). Le montant est nettement inférieur à celui d'un transporteur professionnel.",
          "Le véhicule personnel est remboursable uniquement si le médecin prescrit le transport mais pas de mode de transport spécifique. Dans ce cas, le patient peut choisir son propre véhicule. Le remboursement se fait sur présentation du bon de transport et d'un relevé kilométrique."
        ],
      },
    ],
    faq: [
      {
        q: "Combien coûte un taxi conventionné pour un transport médical ?",
        a: "Le coût moyen est de 55 à 70 € pour un aller-retour de 30 km. Le tarif comprend un forfait de prise en charge et un tarif kilométrique conventionné.",
      },
      {
        q: "Quel est le mode de transport médical le moins cher ?",
        a: "Le VSL est le moins cher (de 30 à 40 € l'aller-retour), suivi du taxi conventionné (55 à 70 €) et de l'ambulance (80 à 120 €).",
      },
      {
        q: "Les tarifs de transport sanitaire sont-ils les mêmes partout ?",
        a: "Non, les tarifs varient légèrement selon les départements. La CPAM rembourse sur la base du tarif conventionné applicable dans votre département.",
      },
    ],
    relatedGuides: [
      "tarifs-taxi-vsl-ambulance",
      "remboursement-transport-cpam",
      "taxi-conventionne-cpam-guide",
      "vsl-vehicule-sanitaire-leger",
      "ambulance-quand-comment",
    ],
    relatedCities: ["paris", "lyon", "marseille"],
  },

  {
    slug: "tarifs-taxi-vsl-ambulance",
    title: "Tarifs taxi vs VSL vs ambulance : comparatif complet 2025",
    description:
      "Comparatif détaillé des tarifs 2025 entre taxi conventionné, VSL et ambulance : prix, confort, conditions de prise en charge et aide au choix.",
    date: "2025-02-15",
    lastUpdated: "2025-03-25",
    readTime: "9 min",
    category: "Remboursement",
    answerBox:
      "En 2025, le taxi conventionné coûte en moyenne de 55 à 70 €, le VSL de 30 à 40 € et l'ambulance 80 à 120 € pour un aller-retour de 30 km. Le choix dépend de l'état de santé du patient et de la prescription médicale.",
    sections: [
      {
        id: "tableau-comparatif",
        title: "Tableau comparatif des tarifs 2025",
        content: [
          "Le tarif moyen d'un aller-retour de 30 km en taxi conventionné est de 55 à 70 €. Ce mode de transport offre un confort optimal avec un véhicule individuel, une disponibilité 24h/24 et un chauffeur formé. Le tarif comprend le forfait de prise en charge, le kilométrage et les frais annexes (péages, stationnement).",
          "Le VSL (Véhicule Sanitaire Léger) est le plus économique avec un tarif moyen de 30 à 40 € l'aller-retour. Le transport partagé permet de réduire encore ce coût. En contrepartie, le confort est moindre (véhicule partagé, horaires limités) et le temps de trajet peut être allongé.",
          "L'ambulance, à de 80 à 120 € l'aller-retour, est le transport le plus coûteux mais aussi le plus médicalisé. Elle est réservée aux patients nécessitant un transport en position allongée ou une surveillance médicale. L'équipage comprend un ambulancier diplômé d'État et un auxiliaire.",
          "L'utilisation du véhicule personnel est remboursée à environ 0,30 €/km, soit environ 18 € pour un aller-retour de 30 km. C'est l'option la moins onéreuse pour la CPAM mais elle n'est possible que si le patient est autonome et peut conduire ou être conduit par un proche."
        ],
      },
      {
        id: "criteres-choix",
        title: "Critères de choix du mode de transport",
        content: [
          "Le choix du mode de transport n'appartient pas au patient seul : c'est le médecin prescripteur qui détermine le mode de transport adapté à l'état de santé du patient. Le médecin prend en compte la capacité à s'asseoir, l'autonomie, le besoin de surveillance médicale et la distance du trajet.",
          "Le taxi conventionné est prescrit pour les patients pouvant se déplacer en position assise, autonomes à la marche (éventuellement avec aide) et ne nécessitant pas de surveillance médicale pendant le trajet. C'est le mode de transport le plus courant pour les consultations spécialisées et les soins itératifs.",
          "Le VSL convient aux mêmes profils de patients que le taxi, avec l'acceptation du transport partagé. Il est souvent prescrit pour les trajets réguliers vers un centre de soins (dialyse, radiothérapie) où le transport partagé est facilement organisable.",
          "L'ambulance est prescrite lorsque le patient doit être transporté en position allongée ou semi-assise, ou lorsque son état nécessite une surveillance médicale (oxygénothérapie, monitoring cardiaque, risque de malaise). Le médecin peut aussi prescrire une ambulance pour un patient dont la pathologie contre-indique le transport assis."
        ],
      },
      {
        id: "majorations-supplements",
        title: "Majorations et suppléments",
        content: [
          "Des majorations tarifaires s'appliquent selon les circonstances du transport. Les trajets de nuit (entre 20h et 8h) bénéficient d'une majoration de 50 % du tarif kilométrique pour les ambulances et les VSL. Pour les taxis, la majoration nocturne est fixée par arrêté préfectoral.",
          "Les transports effectués le dimanche et les jours fériés donnent lieu à une majoration de 50 % à 75 % selon le mode de transport. Ces majorations sont conventionnées et prises en charge par la CPAM dans les mêmes conditions que le tarif de base.",
          "Les frais annexes remboursables comprennent les péages autoroutiers (sur justificatif), les frais de stationnement hospitalier (dans la limite du tarif horaire de l'établissement) et le cas échéant les frais de transport maritime ou aérien pour les patients des DOM-TOM ou des îles."
        ],
      },
      {
        id: "optimiser-cout",
        title: "Comment optimiser le coût de son transport médical",
        content: [
          "Pour les patients effectuant des transports réguliers, le transport partagé en VSL ou en taxi conventionné permet de réduire significativement le coût. Depuis le décret de février 2025, les sociétés de transport sont incitées à proposer le transport partagé aux patients dont les horaires et destinations sont compatibles.",
          "Le choix du transporteur le plus proche du domicile du patient réduit les frais de course à vide, qui ne sont pas facturés au patient mais pèsent sur le système. Certaines CPAM proposent des plateformes de réservation permettant d'identifier le transporteur conventionné le plus proche.",
          "Pour les transports de longue distance (plus de 150 km), le train ou l'avion peuvent être plus économiques que le transport sanitaire routier. Le médecin peut prescrire un transport ferroviaire ou aérien si l'état du patient le permet. La CPAM rembourse le billet sur la base du tarif le plus économique."
        ],
      },
    ],
    faq: [
      {
        q: "Quel est le transport médical le moins cher ?",
        a: "Le VSL est le moins cher (de 30 à 40 € l'aller-retour de 30 km), surtout en transport partagé. Le véhicule personnel est encore moins onéreux mais moins pratique.",
      },
      {
        q: "Peut-on choisir entre taxi, VSL et ambulance ?",
        a: "Non, c'est le médecin prescripteur qui détermine le mode de transport adapté à votre état de santé. Le patient ne peut pas choisir librement.",
      },
      {
        q: "Y a-t-il des majorations pour les transports de nuit ?",
        a: "Oui, les trajets de nuit (20h-8h) sont majorés de 50 % pour les ambulances et VSL. Pour les taxis, la majoration suit le tarif préfectoral.",
      },
    ],
    relatedGuides: [
      "cout-transport-sanitaire-france",
      "taxi-conventionne-cpam-guide",
      "vsl-vehicule-sanitaire-leger",
      "ambulance-quand-comment",
      "choisir-transport-medical",
    ],
  },

  {
    slug: "depassement-transport-refus-cpam",
    title: "Dépassement et refus de remboursement transport CPAM : que faire ?",
    description:
      "Votre transport médical est refusé ou partiellement remboursé par la CPAM ? Causes de refus, dépassements, recours possibles et solutions concrètes.",
    date: "2025-02-20",
    lastUpdated: "2025-03-28",
    readTime: "10 min",
    category: "Remboursement",
    answerBox:
      "En cas de refus de remboursement transport par la CPAM, vous pouvez saisir la commission de recours amiable (CRA) sous 2 mois. Les causes courantes de refus sont l'absence de prescription, un transporteur non conventionné ou un motif non éligible.",
    sections: [
      {
        id: "causes-refus",
        title: "Causes fréquentes de refus de remboursement",
        content: [
          "Le refus de remboursement par la CPAM est souvent lié à l'absence de prescription médicale de transport. Sans le Cerfa S3138 (bon de transport) établi par un médecin, aucun remboursement n'est possible. La prescription doit être antérieure au transport, sauf en cas d'urgence avérée.",
          "L'utilisation d'un transporteur non conventionné est une autre cause fréquente. Si le taxi, le VSL ou l'ambulance n'est pas conventionné par la CPAM, le remboursement sera refusé même avec un bon de transport valide. Il est essentiel de vérifier le conventionnement du transporteur avant le trajet.",
          "Le motif du transport peut également justifier un refus : seuls les transports liés à une hospitalisation, une ALD, un accident du travail, une convocation du service médical ou un trajet de plus de 150 km sont éligibles. Un transport pour une simple consultation de médecine générale à proximité du domicile n'est pas remboursable.",
          "Enfin, le dépassement du tarif conventionné (itinéraire non optimal, arrêts non justifiés, suppléments non conventionnés) peut entraîner un remboursement partiel. La CPAM ne rembourse que sur la base du tarif conventionné ; tout dépassement reste à la charge du patient."
        ],
      },
      {
        id: "recours-amiable",
        title: "Le recours amiable auprès de la CRA",
        content: [
          "En cas de refus de remboursement, le patient dispose d'un délai de 2 mois à compter de la notification de refus pour saisir la commission de recours amiable (CRA) de sa CPAM. La saisine se fait par courrier recommandé avec accusé de réception, adressé à la CRA de la CPAM dont dépend le patient.",
          "Le courrier doit exposer les faits, les motifs de contestation et joindre les pièces justificatives : bon de transport, facture du transporteur, attestation médicale si nécessaire, et la notification de refus contestée. La CRA dispose de 2 mois pour statuer. Le silence vaut rejet implicite.",
          "Si la CRA rejette le recours, le patient peut alors saisir le tribunal judiciaire (pôle social, ex-TASS) dans un délai de 2 mois suivant la notification de la décision de la CRA. La procédure est gratuite et le patient peut se présenter seul ou assisté d'un avocat."
        ],
      },
      {
        id: "depassements-tarifaires",
        title: "Comprendre les dépassements tarifaires",
        content: [
          "Le dépassement tarifaire survient lorsque le prix facturé par le transporteur excède le tarif conventionné par la CPAM. La CPAM ne rembourse que le tarif conventionné ; la différence constitue un reste à charge pour le patient, non remboursable par la mutuelle.",
          "Les causes de dépassement incluent : l'utilisation d'un véhicule de catégorie supérieure à celle prescrite, un itinéraire plus long que l'itinéraire optimal, des temps d'attente excessifs non justifiés, ou des suppléments non conventionnés (boissons, presse, Wi-Fi).",
          "Pour éviter les dépassements, demandez au transporteur un devis avant le trajet et vérifiez que les tarifs correspondent aux barèmes conventionnés. En cas de dépassement constaté, vous pouvez signaler le transporteur à votre CPAM et au syndicat professionnel dont il dépend."
        ],
      },
      {
        id: "prevention-refus",
        title: "Prévenir les refus de remboursement",
        content: [
          "Pour éviter tout refus, assurez-vous que votre prescription de transport est correctement remplie : motif du transport, mode de transport prescrit, case ALD cochée si applicable, nombre de trajets si transport itératif. Le médecin doit signer et tamponner le bon de transport.",
          "Vérifiez que le transporteur est bien conventionné par la CPAM avant de réserver. En cas de doute, contactez votre CPAM ou consultez la liste des transporteurs conventionnés sur Ameli.fr ou auprès de l'ARS de votre département.",
          "Conservez tous les justificatifs : bon de transport original, facture du transporteur, tickets de péage et de stationnement. En cas de litige, ces documents constituent la preuve de la conformité de votre transport aux conditions de remboursement."
        ],
      },
    ],
    faq: [
      {
        q: "Que faire en cas de refus de remboursement transport par la CPAM ?",
        a: "Saisissez la commission de recours amiable (CRA) de votre CPAM sous 2 mois par courrier recommandé. Si le recours est rejeté, vous pouvez saisir le tribunal judiciaire.",
      },
      {
        q: "Pourquoi mon transport médical n'est-il pas remboursé ?",
        a: "Les causes courantes sont l'absence de prescription, un transporteur non conventionné, un motif non éligible ou un dépassement du tarif conventionné.",
      },
      {
        q: "Le dépassement tarifaire est-il remboursé par la mutuelle ?",
        a: "Non, les dépassements au-delà du tarif conventionné CPAM ne sont généralement pas remboursés par les complémentaires santé.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "recours-refus-transport-cpam",
      "bon-de-transport-medical",
      "documents-transport-medical",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CLUSTER 2 — Administratif & Procédures (7 guides)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: "bon-de-transport-medical",
    title: "Bon de transport médical (Cerfa S3138) : guide complet",
    description:
      "Comment obtenir et remplir un bon de transport médical ? Le Cerfa S3138 expliqué : qui le prescrit, quand, comment le remplir et quelles erreurs éviter.",
    date: "2025-01-10",
    lastUpdated: "2025-03-05",
    readTime: "10 min",
    category: "Administratif",
    answerBox:
      "Le bon de transport médical (Cerfa S3138) est une prescription médicale obligatoire pour le remboursement du transport sanitaire. Il est rempli par le médecin avant le trajet et précise le motif, le mode de transport et la destination.",
    sections: [
      {
        id: "quest-ce-bon-transport",
        title: "Qu'est-ce que le bon de transport médical ?",
        content: [
          "Le bon de transport médical, officiellement formulaire Cerfa S3138 (ou n° 11574*05), est le document indispensable pour obtenir le remboursement d'un transport sanitaire par l'Assurance Maladie. Sans ce document, aucun remboursement ne peut être versé, que le transport soit effectué en taxi conventionné, en VSL ou en ambulance.",
          "Ce formulaire est composé de 4 volets : un volet pour la CPAM, un volet pour le transporteur, un volet pour le patient et un volet pour le prescripteur. Il comporte les informations d'identification du patient, le motif médical du transport, le mode de transport prescrit, la destination et les dates prévisionnelles.",
          "Le bon de transport est à distinguer de la facture du transporteur et de la feuille de route. Le bon de transport est la prescription médicale qui autorise le remboursement. La facture est le document commercial émis par le transporteur. La feuille de route retrace le trajet effectué."
        ],
      },
      {
        id: "qui-prescrit",
        title: "Qui peut prescrire un bon de transport ?",
        content: [
          "Le bon de transport est prescrit par tout médecin (médecin traitant, médecin hospitalier, médecin spécialiste) qui constate la nécessité d'un transport sanitaire pour son patient. Le médecin prescripteur engage sa responsabilité en attestant que le transport est médicalement justifié.",
          "En milieu hospitalier, le bon de transport est généralement prescrit par le médecin du service dans lequel le patient est pris en charge. Pour les entrées en hospitalisation programmée, le médecin traitant ou le spécialiste adressant le patient peut établir la prescription.",
          "Le médecin du travail et le médecin-conseil de la CPAM peuvent également prescrire un transport dans le cadre de leur exercice. En cas d'urgence, le médecin régulateur du SAMU peut autoriser un transport sanitaire sans prescription écrite préalable, celle-ci étant établie a posteriori."
        ],
      },
      {
        id: "remplir-bon-transport",
        title: "Comment remplir correctement le bon de transport",
        content: [
          "Le médecin doit remplir soigneusement chaque rubrique du Cerfa S3138. Les informations du patient (nom, prénom, numéro de Sécurité sociale, adresse) doivent être exactes. Le motif du transport doit correspondre à l'un des cas prévus par la réglementation : hospitalisation, ALD, accident du travail, convocation, ou transport longue distance.",
          "Le mode de transport prescrit doit être coché : ambulance, VSL, taxi conventionné ou véhicule personnel. Le médecin détermine le mode de transport en fonction de l'état de santé du patient. Il doit également préciser si le transport est aller simple, aller-retour ou en série (trajets itératifs).",
          "La destination doit être clairement indiquée : nom de l'établissement de santé, adresse complète. Pour les transports en série, le médecin précise le nombre de séances prévues, la fréquence et la durée estimée du traitement. La case ALD doit être cochée si le transport est en rapport avec une affection de longue durée.",
          "Le bon de transport doit être signé et tamponné par le médecin prescripteur. La date de prescription doit être antérieure à la date du transport (sauf urgence). Les ratures et surcharges doivent être évitées car elles peuvent entraîner un rejet par la CPAM."
        ],
      },
      {
        id: "erreurs-frequentes",
        title: "Erreurs fréquentes à éviter",
        content: [
          "L'erreur la plus courante est l'absence de motif médical sur le bon de transport. Le médecin doit cocher la case correspondant au motif (hospitalisation, ALD, AT/MP, etc.) et non se contenter d'indiquer le nom de la consultation. Sans motif valide, la CPAM refusera le remboursement.",
          "Une autre erreur fréquente est la prescription a posteriori sans justification d'urgence. Le bon de transport doit être établi avant le trajet. Si le médecin le prescrit après, il doit justifier l'urgence ayant empêché la prescription préalable. La CPAM peut contrôler et refuser les prescriptions a posteriori abusives.",
          "Le non-respect du mode de transport prescrit est également problématique. Si le médecin prescrit un VSL et que le patient utilise un taxi conventionné sans nouvelle prescription, le remboursement peut être refusé ou limité au tarif du mode prescrit."
        ],
      },
    ],
    faq: [
      {
        q: "Où obtenir un bon de transport médical ?",
        a: "Le bon de transport (Cerfa S3138) est prescrit par votre médecin traitant ou le médecin hospitalier. Vous pouvez aussi télécharger le formulaire vierge sur Ameli.fr.",
      },
      {
        q: "Le bon de transport peut-il être établi après le trajet ?",
        a: "Uniquement en cas d'urgence médicale avérée. La prescription a posteriori doit être établie dans les 72 heures et justifier l'urgence.",
      },
      {
        q: "Un bon de transport peut-il couvrir plusieurs trajets ?",
        a: "Oui, pour les transports en série (dialyse, chimio, radiothérapie), le médecin précise le nombre de séances et la fréquence sur un seul bon.",
      },
      {
        q: "Quelle est la durée de validité d'un bon de transport ?",
        a: "Le bon de transport est valable pour la période indiquée par le médecin. Pour les transports en série, il couvre toute la durée du traitement prescrit.",
      },
    ],
    relatedGuides: [
      "prescription-medicale-transport",
      "remboursement-transport-cpam",
      "documents-transport-medical",
      "demande-entente-prealable-transport",
    ],
    relatedCities: ["paris", "lyon", "marseille"],
  },

  {
    slug: "prescription-medicale-transport",
    title: "Prescription médicale de transport : tout ce qu'il faut savoir",
    description:
      "La prescription médicale de transport est obligatoire pour le remboursement. Qui prescrit, quand, comment et dans quelles conditions ? Guide détaillé.",
    date: "2025-01-12",
    lastUpdated: "2025-03-08",
    readTime: "9 min",
    category: "Administratif",
    answerBox:
      "La prescription médicale de transport (Cerfa S3138) est obligatoire pour tout remboursement de transport sanitaire. Elle est établie par le médecin avant le trajet et détermine le mode de transport adapté à l'état du patient.",
    sections: [
      {
        id: "obligation-prescription",
        title: "L'obligation de prescription médicale",
        content: [
          "Tout transport sanitaire remboursé par l'Assurance Maladie nécessite une prescription médicale préalable. Cette obligation est inscrite dans l'article L.322-5 du Code de la Sécurité sociale. Sans prescription, même un transport effectué par un transporteur conventionné ne sera pas remboursé.",
          "La prescription est matérialisée par le formulaire Cerfa S3138, couramment appelé « bon de transport » ou « prescription médicale de transport ». Ce formulaire standardisé contient toutes les informations nécessaires à la prise en charge : identité du patient, motif du transport, mode de transport prescrit et destination.",
          "L'exception à l'obligation de prescription préalable concerne les situations d'urgence. En cas d'urgence médicale, le transport peut être effectué sans prescription, celle-ci devant être établie dans les 72 heures suivant le trajet. Le caractère urgent doit être médicalement justifiable."
        ],
      },
      {
        id: "medecin-prescripteur",
        title: "Quel médecin peut prescrire un transport ?",
        content: [
          "Tout médecin inscrit au tableau de l'Ordre des médecins peut prescrire un transport sanitaire. En pratique, les principaux prescripteurs sont le médecin traitant (pour les consultations spécialisées et les soins programmés), le médecin hospitalier (pour les entrées/sorties d'hospitalisation et les transferts) et le médecin spécialiste.",
          "Le médecin prescripteur évalue l'état de santé du patient et détermine le mode de transport adapté. Il prend en compte plusieurs critères : la capacité du patient à se déplacer seul, sa position de transport (assis ou allongé), le besoin de surveillance médicale, la distance du trajet et les éventuelles contre-indications au transport partagé.",
          "Le médecin engage sa responsabilité en prescrivant un transport sanitaire. L'Assurance Maladie effectue des contrôles réguliers sur les prescriptions de transport et peut sanctionner les prescriptions abusives ou injustifiées. Les médecins gros prescripteurs de transport font l'objet d'une vigilance particulière."
        ],
      },
      {
        id: "contenu-prescription",
        title: "Contenu de la prescription de transport",
        content: [
          "La prescription de transport doit mentionner obligatoirement : l'identité complète du patient (nom, prénom, date de naissance, numéro de Sécurité sociale), le motif du transport (hospitalisation, ALD, AT/MP, convocation, longue distance), le mode de transport prescrit (ambulance, VSL, taxi, véhicule personnel).",
          "Elle doit également indiquer la date du transport, la destination (nom et adresse de l'établissement de santé), et si le transport est aller simple, aller-retour ou en série. Pour les transports en série, le nombre de trajets et la fréquence doivent être précisés.",
          "Le médecin doit apposer sa signature, son tampon et la date de prescription. Si le patient est en ALD, la case correspondante doit être cochée et le lien entre le transport et l'ALD doit être attesté. Le médecin peut également indiquer des consignes particulières (transport individuel obligatoire, oxygénothérapie, brancardage)."
        ],
      },
      {
        id: "prescription-serie",
        title: "Prescription pour les transports en série",
        content: [
          "Les transports en série concernent les patients effectuant au moins 4 transports de plus de 50 km aller sur une période de 2 mois pour un même traitement. C'est le cas typique de la dialyse, de la chimiothérapie ou de la radiothérapie.",
          "Pour les transports en série, le médecin établit une seule prescription couvrant l'ensemble des séances. Il indique le nombre total de séances prévues (par exemple : « 30 séances de radiothérapie, 5 par semaine pendant 6 semaines ») et le mode de transport pour l'ensemble de la série.",
          "Les transports en série de plus de 50 km aller nécessitent une demande d'entente préalable adressée au service médical de la CPAM. Le médecin remplit le formulaire d'entente préalable en plus de la prescription de transport. Le silence de la CPAM sous 15 jours vaut acceptation."
        ],
      },
    ],
    faq: [
      {
        q: "La prescription de transport est-elle obligatoire ?",
        a: "Oui, la prescription médicale de transport est obligatoire pour tout remboursement. Seule l'urgence dispense de la prescription préalable (à établir sous 72h).",
      },
      {
        q: "Mon médecin traitant peut-il prescrire un transport ?",
        a: "Oui, tout médecin peut prescrire un transport. Le médecin traitant, le spécialiste et le médecin hospitalier sont les principaux prescripteurs.",
      },
      {
        q: "Combien de temps la prescription est-elle valable ?",
        a: "La prescription est valable pour la durée du traitement indiquée par le médecin. Pour un transport ponctuel, elle couvre le trajet prescrit uniquement.",
      },
    ],
    relatedGuides: [
      "bon-de-transport-medical",
      "demande-entente-prealable-transport",
      "remboursement-transport-cpam",
      "documents-transport-medical",
    ],
  },

  {
    slug: "demande-entente-prealable-transport",
    title: "Demande d'entente préalable transport médical : mode d'emploi",
    description:
      "Comment et quand demander une entente préalable pour le transport médical ? Conditions, formulaire, délais de réponse CPAM et conséquences du silence.",
    date: "2025-01-18",
    lastUpdated: "2025-03-10",
    readTime: "8 min",
    category: "Administratif",
    answerBox:
      "L'entente préalable est obligatoire pour les transports en série de plus de 50 km aller et les transports longue distance. Le médecin envoie le formulaire à la CPAM qui dispose de 15 jours pour répondre. Le silence vaut acceptation.",
    sections: [
      {
        id: "quand-entente-prealable",
        title: "Quand l'entente préalable est-elle nécessaire ?",
        content: [
          "L'entente préalable est obligatoire dans deux situations principales. Premièrement, pour les transports en série : au moins 4 transports de plus de 50 km aller sur une période de 2 mois, pour un même traitement (dialyse, chimiothérapie, radiothérapie). Deuxièmement, pour les transports longue distance : trajet de plus de 150 km aller.",
          "L'entente préalable n'est pas nécessaire pour les transports ponctuels de moins de 150 km, les transports d'urgence ou les transports entre établissements hospitaliers prescrits par le médecin de l'établissement d'origine. Les transports pour une hospitalisation (entrée ou sortie) n'en nécessitent pas non plus.",
          "En cas de doute, le médecin prescripteur peut demander l'entente préalable par précaution. La CPAM ne refusera pas un transport au motif qu'une entente préalable non nécessaire a été demandée. En revanche, l'absence d'entente préalable quand elle est obligatoire peut entraîner un refus de remboursement."
        ],
      },
      {
        id: "comment-demander",
        title: "Comment effectuer la demande d'entente préalable",
        content: [
          "La demande d'entente préalable est effectuée par le médecin prescripteur. Il remplit le formulaire Cerfa S3139 (demande d'entente préalable de transport) et l'adresse au service médical de la CPAM du patient. Le formulaire peut être envoyé par courrier ou par voie électronique selon les CPAM.",
          "Le formulaire doit préciser le motif médical du transport, la destination, le nombre de trajets prévus, la fréquence, la durée du traitement, le mode de transport et l'impossibilité de réaliser les soins à proximité du domicile du patient. Le médecin joint la prescription de transport (Cerfa S3138).",
          "La demande doit être envoyée au moins 15 jours avant le début des transports prévus. Ce délai permet au service médical de la CPAM d'examiner la demande et de répondre. En cas d'urgence médicale, la demande peut être transmise concomitamment au transport, avec justification de l'urgence."
        ],
      },
      {
        id: "delai-reponse",
        title: "Délai de réponse et silence de la CPAM",
        content: [
          "Le service médical de la CPAM dispose d'un délai de 15 jours à compter de la réception de la demande pour répondre. Si la CPAM ne répond pas dans ce délai, le silence vaut acceptation implicite. Le patient peut alors effectuer les transports prévus et bénéficier du remboursement.",
          "En cas d'accord, la CPAM notifie le médecin et le patient par courrier. L'accord précise le nombre de transports autorisés, le mode de transport et la période de validité. En cas de refus, la notification mentionne les motifs du refus et les voies de recours.",
          "Il est recommandé de conserver la preuve de la date d'envoi de la demande (accusé de réception postal ou confirmation électronique) pour faire valoir le silence vaut acceptation en cas de besoin."
        ],
      },
      {
        id: "refus-recours",
        title: "Que faire en cas de refus de l'entente préalable",
        content: [
          "Si la CPAM refuse l'entente préalable, le patient et le médecin disposent de voies de recours. Le premier niveau est le recours gracieux auprès du médecin-conseil ayant rendu la décision. Le médecin prescripteur peut apporter des éléments médicaux complémentaires justifiant le transport.",
          "En cas de maintien du refus, le patient peut saisir la commission de recours amiable (CRA) de la CPAM sous 2 mois. La CRA examine le dossier et peut infirmer la décision du service médical. En dernier recours, le tribunal judiciaire (pôle social) peut être saisi."
        ],
      },
    ],
    faq: [
      {
        q: "Quand faut-il demander une entente préalable pour le transport ?",
        a: "L'entente préalable est obligatoire pour les transports en série de plus de 50 km aller (4 trajets sur 2 mois) et les transports de plus de 150 km aller.",
      },
      {
        q: "Que se passe-t-il si la CPAM ne répond pas sous 15 jours ?",
        a: "Le silence de la CPAM vaut acceptation. Après 15 jours sans réponse, les transports sont considérés comme autorisés et seront remboursés.",
      },
      {
        q: "Qui remplit la demande d'entente préalable ?",
        a: "C'est le médecin prescripteur qui remplit le formulaire Cerfa S3139 et l'adresse au service médical de la CPAM du patient.",
      },
    ],
    relatedGuides: [
      "bon-de-transport-medical",
      "prescription-medicale-transport",
      "transport-dialyse",
      "transport-chimiotherapie",
      "transport-radiotherapie",
    ],
  },

  {
    slug: "taxi-conventionne-comment-ca-marche",
    title: "Taxi conventionné : comment ça marche ? Guide patient 2025",
    description:
      "Tout comprendre sur le taxi conventionné CPAM : fonctionnement, réservation, tiers payant, conditions de prise en charge et droits du patient expliqués.",
    date: "2025-01-22",
    lastUpdated: "2025-03-15",
    readTime: "11 min",
    category: "Administratif",
    answerBox:
      "Le taxi conventionné est un taxi agréé par la CPAM qui transporte les patients vers leurs soins sans avance de frais grâce au tiers payant. Il faut une prescription médicale et le patient choisit librement son taxi conventionné.",
    sections: [
      {
        id: "definition-taxi-conventionne",
        title: "Qu'est-ce qu'un taxi conventionné ?",
        content: [
          "Un taxi conventionné est un taxi qui a signé une convention avec la CPAM (Caisse Primaire d'Assurance Maladie) pour transporter des patients vers leurs soins médicaux. Cette convention autorise le chauffeur à pratiquer le tiers payant, c'est-à-dire à facturer directement la CPAM sans que le patient avance les frais.",
          "Le taxi conventionné est un véhicule de tourisme classique (berline, monospace) conduit par un chauffeur titulaire de la carte professionnelle de taxi et d'une habilitation spécifique au transport de personnes malades. Il ne s'agit pas d'un véhicule sanitaire : pas de signalétique médicale, pas d'équipement médical embarqué.",
          "Le taxi conventionné est le mode de transport médical qui offre le meilleur confort pour les patients autonomes en position assise. Le véhicule est individuel (sauf transport partagé accepté), le service est disponible 24h/24 et 7j/7, et le chauffeur connaît les établissements de santé du secteur."
        ],
      },
      {
        id: "reservation-trajet",
        title: "Comment réserver un taxi conventionné",
        content: [
          "La réservation d'un taxi conventionné se fait par téléphone, par application ou via une plateforme de réservation en ligne. Le patient est libre de choisir le taxi conventionné de son choix, sous réserve qu'il soit bien conventionné par la CPAM de son département.",
          "Lors de la réservation, précisez que vous disposez d'une prescription médicale de transport (bon de transport). Le chauffeur vous demandera la date et l'heure du rendez-vous, l'adresse de prise en charge, la destination (établissement de santé) et si un retour est prévu.",
          "Pour les trajets réguliers (dialyse, radiothérapie), vous pouvez établir un planning de réservation avec votre taxi conventionné. De nombreux chauffeurs proposent un service dédié aux patients réguliers avec des créneaux fixes et un suivi personnalisé.",
          "Des plateformes numériques comme Medi-Trajet facilitent la mise en relation entre patients et taxis conventionnés. Ces plateformes permettent de réserver en ligne, de suivre le trajet en temps réel et de gérer le tiers payant de manière dématérialisée."
        ],
      },
      {
        id: "jour-du-transport",
        title: "Le jour du transport : déroulement",
        content: [
          "Le jour du transport, le chauffeur de taxi conventionné se présente à l'adresse convenue. Il vous aide si nécessaire à monter dans le véhicule et sécurise votre installation. Vous devez présenter votre carte Vitale et votre bon de transport original.",
          "Le chauffeur vérifie vos droits à l'Assurance Maladie via son terminal embarqué et enregistre le trajet. À l'arrivée, il vous accompagne jusqu'à l'entrée de l'établissement si besoin. Pour le retour, il vient vous chercher à l'heure convenue.",
          "Vous signez le bon de transport en fin de trajet. Le chauffeur conserve le volet transporteur et vous remet le volet patient. Il transmet la facture à la CPAM par télétransmission. En cas de tiers payant intégral (avec votre mutuelle), vous n'avez rien à régler."
        ],
      },
      {
        id: "droits-patient",
        title: "Droits du patient avec un taxi conventionné",
        content: [
          "Le patient a le libre choix de son taxi conventionné. Aucun établissement de santé, aucun médecin ne peut imposer un transporteur particulier. Ce libre choix est un droit fondamental du patient. Vous pouvez changer de taxi conventionné à tout moment.",
          "Le taxi conventionné doit appliquer les tarifs conventionnés et ne peut pas facturer de suppléments non prévus par la convention. Le chauffeur doit vous remettre un reçu ou une facture. Tout dépassement tarifaire injustifié peut être signalé à la CPAM.",
          "En cas de retard, d'incident ou de comportement inapproprié du chauffeur, vous pouvez adresser une réclamation à la CPAM et au service des taxis de votre préfecture. La convention peut être résiliée par la CPAM en cas de manquements répétés du chauffeur."
        ],
      },
    ],
    faq: [
      {
        q: "Comment savoir si un taxi est conventionné ?",
        a: "Consultez la liste des taxis conventionnés sur Ameli.fr, auprès de votre CPAM ou via des plateformes comme Medi-Trajet qui référencent les taxis conventionnés.",
      },
      {
        q: "Peut-on choisir son taxi conventionné ?",
        a: "Oui, le libre choix du transporteur est un droit du patient. Aucun établissement ni médecin ne peut imposer un taxi conventionné particulier.",
      },
      {
        q: "Le taxi conventionné est-il disponible le week-end ?",
        a: "Oui, les taxis conventionnés sont disponibles 24h/24 et 7j/7, y compris les week-ends et jours fériés, avec des majorations tarifaires conventionnées.",
      },
      {
        q: "Faut-il avancer les frais avec un taxi conventionné ?",
        a: "Non, le tiers payant permet au taxi conventionné de facturer directement la CPAM. Seule la franchise de 2 € par trajet peut être demandée.",
      },
    ],
    relatedGuides: [
      "taxi-conventionne-cpam-guide",
      "tiers-payant-transport-medical",
      "bon-de-transport-medical",
      "choisir-transport-medical",
      "liste-taxis-conventionnes-departement",
    ],
    relatedCities: ["paris", "lyon", "marseille", "toulouse", "bordeaux"],
  },

  {
    slug: "conventionnement-taxi-cpam",
    title: "Conventionnement taxi CPAM : procédure et obligations",
    description:
      "Guide complet du conventionnement taxi CPAM : conditions, procédure, obligations du chauffeur conventionné, renouvellement et résiliation de la convention.",
    date: "2025-01-28",
    lastUpdated: "2025-03-20",
    readTime: "10 min",
    category: "Administratif",
    answerBox:
      "Le conventionnement taxi CPAM est une convention signée entre un taxi et la caisse d'Assurance Maladie qui autorise le transport de patients avec tiers payant. Le chauffeur doit remplir des conditions réglementaires strictes.",
    sections: [
      {
        id: "conditions-conventionnement",
        title: "Conditions pour obtenir le conventionnement CPAM",
        content: [
          "Pour obtenir le conventionnement CPAM, le chauffeur de taxi doit remplir plusieurs conditions réglementaires. Il doit être titulaire d'une carte professionnelle de taxi en cours de validité, délivrée par la préfecture de son département d'exercice. Il doit exercer son activité à titre principal.",
          "Le véhicule doit répondre aux normes en vigueur : contrôle technique à jour, assurance professionnelle, compteur horokilométrique homologué (taximètre) et signalétique conforme. Le véhicule doit être accessible ou, à défaut, le chauffeur doit disposer d'un équipement d'aide à la montée et à la descente des patients.",
          "Le chauffeur doit justifier d'une formation au transport de personnes malades ou à mobilité réduite. Cette formation, d'une durée minimale de 7 heures, couvre les gestes de premiers secours, l'aide à la personne, la connaissance du système de santé et les obligations liées au transport sanitaire.",
          "Aucune condamnation pénale incompatible avec l'exercice de l'activité ne doit figurer au casier judiciaire du chauffeur. La CPAM peut demander un extrait de casier judiciaire (bulletin n° 3) lors de la demande de conventionnement."
        ],
      },
      {
        id: "procedure-conventionnement",
        title: "Procédure de conventionnement",
        content: [
          "La demande de conventionnement s'adresse à la CPAM du département d'exercice du taxi. Le chauffeur dépose un dossier comprenant : la demande de convention signée, la copie de la carte professionnelle, l'attestation d'assurance, le certificat de contrôle technique, l'attestation de formation au transport de personnes malades.",
          "La CPAM examine le dossier et peut effectuer une vérification du véhicule. Si le dossier est complet et conforme, la convention est signée entre le chauffeur et la CPAM. La convention prend effet à la date de signature et est conclue pour une durée indéterminée.",
          "Le chauffeur conventionné reçoit un numéro de conventionnement qui l'identifie auprès de la CPAM. Il est inscrit dans la base des transporteurs conventionnés et peut désormais pratiquer le tiers payant avec les assurés."
        ],
      },
      {
        id: "obligations-conventionne",
        title: "Obligations du taxi conventionné",
        content: [
          "Le taxi conventionné s'engage à respecter les tarifs conventionnés et à pratiquer le tiers payant. Il ne peut pas facturer de suppléments non prévus par la convention. Il doit utiliser l'itinéraire le plus court ou le plus rapide pour le patient et facturer uniquement le trajet en charge.",
          "Le chauffeur doit assurer un service de qualité : ponctualité, courtoisie, aide au patient pour la montée et la descente du véhicule, attente raisonnable à l'arrivée et au retour. Il doit respecter le secret médical et ne pas divulguer d'informations sur l'état de santé ou la destination du patient.",
          "Le taxi conventionné doit transmettre les factures à la CPAM par voie électronique (télétransmission) dans les délais prévus par la convention. Il doit conserver les bons de transport pendant 3 ans et les présenter à la CPAM en cas de contrôle."
        ],
      },
      {
        id: "resiliation-convention",
        title: "Résiliation et sanctions",
        content: [
          "La convention peut être résiliée par le chauffeur ou par la CPAM. Le chauffeur peut résilier à tout moment par courrier recommandé avec un préavis de 2 mois. La CPAM peut résilier en cas de manquements graves : facturation abusive, fraude, non-respect des tarifs, défaut de qualité de service.",
          "Avant toute résiliation, la CPAM adresse un avertissement au chauffeur et l'invite à régulariser sa situation. En cas de manquement persistant, une mise en demeure formelle est envoyée. La résiliation n'intervient qu'en dernier recours, après épuisement des voies amiables.",
          "En cas de fraude avérée (facturation de trajets fictifs, falsification de bons de transport), la CPAM peut engager des poursuites pénales en plus de la résiliation de la convention. Les sommes indûment perçues font l'objet d'une récupération d'indu."
        ],
      },
    ],
    faq: [
      {
        q: "Quelles conditions pour devenir taxi conventionné ?",
        a: "Il faut une carte professionnelle de taxi, une formation au transport de personnes malades, un véhicule aux normes et un casier judiciaire vierge.",
      },
      {
        q: "Combien de temps dure la procédure de conventionnement ?",
        a: "La procédure dure généralement 2 à 4 semaines après dépôt du dossier complet. La convention prend effet à la date de signature.",
      },
      {
        q: "La CPAM peut-elle résilier la convention d'un taxi ?",
        a: "Oui, en cas de manquements graves : facturation abusive, fraude, non-respect des tarifs ou défaut de qualité de service, après avertissement.",
      },
    ],
    relatedGuides: [
      "devenir-taxi-conventionne-cpam",
      "taxi-conventionne-comment-ca-marche",
      "taxi-conventionne-cpam-guide",
      "liste-taxis-conventionnes-departement",
    ],
  },

  {
    slug: "recours-refus-transport-cpam",
    title: "Recours après refus de transport médical CPAM : procédure complète",
    description:
      "Votre transport médical est refusé par la CPAM ? Recours amiable (CRA), recours contentieux (tribunal) : toutes les étapes pour contester efficacement.",
    date: "2025-02-02",
    lastUpdated: "2025-03-22",
    readTime: "9 min",
    category: "Administratif",
    answerBox:
      "Après un refus de transport médical par la CPAM, le patient peut saisir la Commission de Recours Amiable (CRA) sous 2 mois. En cas de rejet, le recours devant le tribunal judiciaire est possible dans un délai de 2 mois.",
    sections: [
      {
        id: "comprendre-refus",
        title: "Comprendre la décision de refus de la CPAM",
        content: [
          "La CPAM notifie ses décisions de refus de remboursement de transport médical par courrier. La notification précise le motif du refus et les voies de recours. Les motifs les plus courants sont l'absence ou l'invalidité de la prescription, l'utilisation d'un transporteur non conventionné, un motif de transport non éligible ou un défaut d'entente préalable.",
          "Avant d'engager un recours, analysez soigneusement le motif de refus. Certains refus résultent d'une erreur administrative (bon de transport mal rempli, pièce manquante) et peuvent être résolus par une simple régularisation auprès de la CPAM, sans recours formel.",
          "Si le refus vous semble injustifié ou si la régularisation est impossible, vous disposez de deux niveaux de recours : le recours amiable auprès de la Commission de Recours Amiable (CRA) et le recours contentieux devant le tribunal judiciaire (pôle social)."
        ],
      },
      {
        id: "recours-amiable-cra",
        title: "Le recours amiable auprès de la CRA",
        content: [
          "La saisine de la Commission de Recours Amiable (CRA) est le premier recours obligatoire. Elle doit être effectuée dans un délai de 2 mois à compter de la date de notification du refus. La CRA est une commission interne à la CPAM composée de représentants des assurés et des employeurs.",
          "Le courrier de saisine doit être envoyé en recommandé avec accusé de réception à la CRA de votre CPAM. Il doit contenir : vos coordonnées et numéro de Sécurité sociale, la décision contestée avec sa date, vos arguments de contestation, et les pièces justificatives (bon de transport, facture, attestation médicale).",
          "La CRA dispose de 2 mois pour statuer. Elle peut confirmer le refus, l'annuler et accorder le remboursement, ou demander des pièces complémentaires. Le silence de la CRA au-delà de 2 mois vaut rejet implicite, ouvrant le droit au recours contentieux."
        ],
      },
      {
        id: "recours-contentieux",
        title: "Le recours contentieux devant le tribunal judiciaire",
        content: [
          "Si la CRA rejette votre recours (explicitement ou implicitement), vous pouvez saisir le tribunal judiciaire (pôle social, ancien TASS) dans un délai de 2 mois à compter de la notification de la décision de la CRA. Le recours devant le tribunal est la dernière étape.",
          "La saisine du tribunal est gratuite et ne nécessite pas obligatoirement un avocat. Vous pouvez vous défendre seul ou être assisté par un représentant syndical, un délégué d'association de patients, ou un avocat. Le formulaire Cerfa n° 15586 permet de saisir le tribunal.",
          "Le tribunal examine les pièces du dossier et entend les parties. Il peut ordonner une expertise médicale si nécessaire. Le jugement est rendu en audience publique et peut faire l'objet d'un appel devant la cour d'appel dans un délai d'un mois."
        ],
      },
      {
        id: "conseils-pratiques",
        title: "Conseils pour un recours efficace",
        content: [
          "Conservez tous les documents originaux : notification de refus, bon de transport, facture du transporteur, attestation médicale. Ces pièces sont indispensables pour constituer un dossier de recours solide. Faites des copies de tout document que vous envoyez.",
          "Si le refus porte sur un motif médical (mode de transport jugé non justifié, absence de nécessité du transport), demandez à votre médecin de rédiger un certificat médical détaillé justifiant la nécessité du transport prescrit. L'avis médical est un élément déterminant dans l'examen du recours.",
          "N'hésitez pas à vous faire accompagner par une association de patients ou un service social hospitalier. Ces structures connaissent les procédures de recours et peuvent vous aider à rédiger votre courrier et à constituer votre dossier."
        ],
      },
    ],
    faq: [
      {
        q: "Quel est le délai pour contester un refus de transport CPAM ?",
        a: "Vous disposez de 2 mois à compter de la notification du refus pour saisir la Commission de Recours Amiable (CRA) de votre CPAM.",
      },
      {
        q: "Le recours devant le tribunal est-il payant ?",
        a: "Non, la saisine du tribunal judiciaire (pôle social) est gratuite. Vous pouvez vous défendre seul, sans avocat obligatoire.",
      },
      {
        q: "Peut-on être remboursé rétroactivement après un recours ?",
        a: "Oui, si le recours aboutit, la CPAM procède au remboursement du transport initialement refusé, avec les intérêts légaux le cas échéant.",
      },
    ],
    relatedGuides: [
      "depassement-transport-refus-cpam",
      "remboursement-transport-cpam",
      "droits-patients-transport-sanitaire",
      "documents-transport-medical",
    ],
  },

  {
    slug: "documents-transport-medical",
    title: "Documents nécessaires pour le transport médical : checklist complète",
    description:
      "Liste complète des documents nécessaires pour un transport médical remboursé : bon de transport, carte Vitale, attestation mutuelle et pièces complémentaires.",
    date: "2025-02-08",
    lastUpdated: "2025-03-25",
    readTime: "7 min",
    category: "Administratif",
    answerBox:
      "Les documents indispensables pour un transport médical sont : la prescription médicale (Cerfa S3138), la carte Vitale à jour, une pièce d'identité et, le cas échéant, l'attestation de mutuelle et l'accord d'entente préalable.",
    sections: [
      {
        id: "documents-obligatoires",
        title: "Documents obligatoires pour le transport médical",
        content: [
          "Le document principal est la prescription médicale de transport, formulaire Cerfa S3138, communément appelé « bon de transport ». Ce document doit être établi par le médecin avant le trajet et comporter toutes les mentions obligatoires : identité du patient, motif, mode de transport, destination, date et signature du médecin.",
          "La carte Vitale à jour est indispensable pour bénéficier du tiers payant. Le transporteur passe la carte dans son terminal pour vérifier vos droits et facturer la CPAM. Si votre carte n'est pas à jour, mettez-la à jour dans une pharmacie ou un point Vitale avant le transport.",
          "Une pièce d'identité en cours de validité (carte nationale d'identité ou passeport) peut être demandée par le transporteur pour vérifier votre identité. C'est une précaution contre la fraude aux transports médicaux."
        ],
      },
      {
        id: "documents-complementaires",
        title: "Documents complémentaires selon la situation",
        content: [
          "Si vous disposez d'une complémentaire santé (mutuelle), votre attestation de tiers payant complémentaire permet au transporteur de facturer directement votre mutuelle pour le ticket modérateur. Sans cette attestation, vous devrez avancer les 35 % de ticket modérateur.",
          "Pour les patients en ALD, le protocole de soins validé par la CPAM atteste de votre droit au remboursement à 100 %. En général, cette information est enregistrée sur la carte Vitale, mais il peut être utile d'avoir une copie du protocole en cas de problème technique.",
          "Pour les transports nécessitant une entente préalable, l'accord de la CPAM (ou l'absence de réponse dans les 15 jours valant acceptation) doit pouvoir être justifié. Conservez la copie de la demande d'entente préalable et l'éventuel courrier d'accord de la CPAM.",
          "Pour les bénéficiaires de la CSS, l'attestation CSS ou la mise à jour de la carte Vitale avec les droits CSS permet au transporteur de facturer au taux 100 % sans franchise."
        ],
      },
      {
        id: "checklist-depart",
        title: "Checklist avant le départ",
        content: [
          "Avant chaque transport médical, vérifiez que vous avez : votre bon de transport original signé par le médecin, votre carte Vitale à jour, une pièce d'identité, votre attestation de mutuelle (si applicable), et l'accord d'entente préalable (si applicable).",
          "Pour les transports en série, conservez le bon de transport couvrant l'ensemble des séances. Le transporteur notera chaque trajet effectué sur la feuille de route. N'oubliez pas de signer la feuille de route à chaque trajet.",
          "Pensez également à emporter vos documents médicaux personnels (carnet de santé, résultats d'examens, ordonnances) nécessaires pour votre rendez-vous médical. Le transporteur n'a pas accès à ces documents mais ils sont utiles pour votre consultation."
        ],
      },
      {
        id: "conservation-documents",
        title: "Conservation et archivage des documents",
        content: [
          "Conservez tous les documents liés à vos transports médicaux pendant au moins 2 ans : bons de transport, factures, récépissés, accords d'entente préalable. Ce délai correspond au délai de prescription des actions en recouvrement de l'Assurance Maladie.",
          "En cas de litige ou de contrôle, ces documents constituent la preuve de la conformité de vos transports aux conditions de remboursement. Classez-les chronologiquement et par type de document pour faciliter leur consultation."
        ],
      },
    ],
    faq: [
      {
        q: "Quels documents faut-il pour un transport médical ?",
        a: "Les documents indispensables sont la prescription médicale (Cerfa S3138), la carte Vitale à jour et une pièce d'identité. L'attestation de mutuelle est recommandée.",
      },
      {
        q: "Que faire si ma carte Vitale n'est pas à jour ?",
        a: "Mettez-la à jour dans une pharmacie ou un point Vitale. Sans carte à jour, le tiers payant peut être refusé et vous devrez avancer les frais.",
      },
      {
        q: "Combien de temps conserver les documents de transport ?",
        a: "Conservez tous les documents au moins 2 ans. Ce délai permet de justifier vos transports en cas de contrôle ou de litige avec la CPAM.",
      },
    ],
    relatedGuides: [
      "bon-de-transport-medical",
      "prescription-medicale-transport",
      "preparer-transport-medical",
      "remboursement-transport-cpam",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CLUSTER 3 — Pathologies & Soins (10 guides)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: "transport-dialyse",
    title: "Transport pour la dialyse : remboursement et organisation",
    description:
      "Guide complet du transport pour la dialyse : prise en charge à 100 %, organisation des 3 séances hebdomadaires, transport partagé et droits des patients dialysés.",
    date: "2025-01-15",
    lastUpdated: "2025-03-10",
    readTime: "12 min",
    category: "Pathologies",
    answerBox:
      "Le transport pour la dialyse est remboursé à 100 % en ALD (insuffisance rénale). Les patients effectuent environ 156 aller-retour par an (3 séances/semaine). Le taxi conventionné et le VSL sont les modes de transport les plus utilisés.",
    sections: [
      {
        id: "dialyse-prise-en-charge",
        title: "Prise en charge du transport pour la dialyse",
        content: [
          "L'insuffisance rénale chronique terminale nécessitant la dialyse est reconnue comme ALD n° 19. À ce titre, le transport vers le centre de dialyse est remboursé à 100 % du tarif conventionné par l'Assurance Maladie. Ce remboursement intégral couvre tous les modes de transport prescrits : taxi conventionné, VSL et ambulance.",
          "Le coût annuel du transport pour la dialyse représente un enjeu majeur pour l'Assurance Maladie. Un patient dialysé effectue en moyenne 156 aller-retour par an (3 séances par semaine, 52 semaines). Le coût moyen par patient pour le transport seul est estimé entre 5 000 € et 12 000 € par an selon le mode de transport et la distance.",
          "La franchise médicale de 2 € par trajet s'applique, plafonnée à 50 € par an. Pour un patient dialysé, le plafond est atteint dès le 13e aller-retour, soit environ un mois de dialyse. Ensuite, plus aucune franchise n'est prélevée pour le reste de l'année."
        ],
      },
      {
        id: "organisation-transport-dialyse",
        title: "Organisation pratique du transport",
        content: [
          "L'organisation du transport pour la dialyse suit un schéma régulier : 3 séances par semaine (lundi-mercredi-vendredi ou mardi-jeudi-samedi), à des horaires fixes. Cette régularité permet d'établir un planning de transport récurrent avec le même transporteur.",
          "Le choix du mode de transport est prescrit par le néphrologue en fonction de l'état du patient. Le taxi conventionné est privilégié pour les patients autonomes. Le VSL est souvent prescrit en transport partagé pour les patients se rendant au même centre de dialyse. L'ambulance est réservée aux patients ne pouvant pas rester en position assise.",
          "De nombreux centres de dialyse collaborent avec des sociétés de transport pour organiser les rotations de patients. Le centre peut vous orienter vers des transporteurs conventionnés habitués à desservir l'établissement. Vous restez libre de choisir votre propre transporteur.",
          "Les horaires de dialyse (souvent tôt le matin ou en fin d'après-midi) nécessitent un transporteur fiable et ponctuel. Le retard d'un patient perturbe le planning du centre et peut décaler les séances suivantes. Choisissez un transporteur reconnu pour sa ponctualité."
        ],
      },
      {
        id: "transport-partage-dialyse",
        title: "Transport partagé pour la dialyse",
        content: [
          "Le transport partagé est particulièrement adapté à la dialyse en raison de la régularité des trajets et du nombre de patients se rendant au même centre. Le décret de février 2025 encourage fortement le transport partagé pour les soins itératifs comme la dialyse.",
          "En transport partagé, 2 à 3 patients partagent le même véhicule (VSL ou taxi conventionné). Le transporteur organise le ramassage et la dépose des patients selon un itinéraire optimisé. Le temps de trajet peut être allongé de 15 à 30 minutes par rapport à un transport individuel.",
          "Le transport partagé permet de réduire le coût global du transport pour l'Assurance Maladie. Les patients conservent une prise en charge à 100 % et ne subissent aucun surcoût. Certains patients apprécient le transport partagé pour le lien social qu'il crée avec d'autres patients dialysés.",
          "Les patients présentant une contre-indication au transport partagé (immunodépression sévère, dialyse péritonéale, troubles psychiatriques, handicap nécessitant un transport adapté) peuvent bénéficier d'une dérogation pour un transport individuel. Le néphrologue doit le mentionner sur la prescription."
        ],
      },
      {
        id: "dialyse-domicile",
        title: "Dialyse à domicile et transport",
        content: [
          "La dialyse à domicile (hémodialyse à domicile ou dialyse péritonéale) réduit considérablement le besoin de transport. Le patient réalise ses séances chez lui, ne se déplaçant que pour les consultations de suivi chez le néphrologue (environ 1 fois par mois).",
          "Le transport pour les consultations de suivi de la dialyse à domicile reste remboursé à 100 % en ALD. Le médecin prescrit le transport selon les mêmes modalités que pour la dialyse en centre. Le choix de la dialyse à domicile peut être motivé en partie par la réduction des contraintes de transport."
        ],
      },
      {
        id: "droits-patients-dialyses",
        title: "Droits spécifiques des patients dialysés",
        content: [
          "Les patients dialysés en ALD bénéficient de droits étendus en matière de transport : remboursement à 100 %, tiers payant obligatoire, libre choix du transporteur, possibilité de dérogation au transport partagé sur justification médicale.",
          "En cas de changement de centre de dialyse (déménagement, vacances), le transport vers le nouveau centre reste pris en charge à 100 %. Le médecin prescrit un nouveau transport en indiquant le nouveau centre de dialyse. La dialyse de vacances en France est intégralement remboursée, transport compris.",
          "Les patients dialysés peuvent bénéficier d'un accompagnant lors du transport si leur état de santé le justifie. Le médecin doit le préciser sur la prescription. L'accompagnant n'est pas facturé au patient ni à la CPAM dans le cadre d'un taxi conventionné."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport pour la dialyse est-il remboursé ?",
        a: "Oui, à 100 % en ALD. L'insuffisance rénale est une ALD exonérante. Le taxi conventionné et le VSL sont les modes de transport les plus courants.",
      },
      {
        q: "Combien de transports par an pour un patient dialysé ?",
        a: "En moyenne 156 aller-retour par an, soit 3 séances de dialyse par semaine pendant 52 semaines.",
      },
      {
        q: "Le transport partagé est-il obligatoire pour la dialyse ?",
        a: "Pas encore obligatoire en 2025, mais fortement encouragé. L'obligation est prévue pour 2026, sauf contre-indication médicale justifiée.",
      },
      {
        q: "Peut-on choisir son taxi pour la dialyse ?",
        a: "Oui, le libre choix du transporteur est garanti. Le patient peut choisir et changer de taxi conventionné à tout moment.",
      },
    ],
    relatedGuides: [
      "ald-transport-medical",
      "remboursement-transport-cpam",
      "obligation-transport-partage-2026",
      "taxi-conventionne-comment-ca-marche",
      "vsl-vehicule-sanitaire-leger",
    ],
    relatedCities: ["paris", "lyon", "marseille", "toulouse"],
  },

  {
    slug: "transport-chimiotherapie",
    title: "Transport pour la chimiothérapie : guide pratique patient",
    description:
      "Organisation et remboursement du transport pour la chimiothérapie : prise en charge ALD, modes de transport adaptés, fatigue post-chimio et conseils pratiques.",
    date: "2025-01-18",
    lastUpdated: "2025-03-12",
    readTime: "11 min",
    category: "Pathologies",
    answerBox:
      "Le transport pour la chimiothérapie est remboursé à 100 % en ALD cancer. Le taxi conventionné est recommandé pour le confort du patient, souvent fatigué après la séance. Une prescription de transport couvre l'ensemble du protocole.",
    sections: [
      {
        id: "chimio-prise-en-charge",
        title: "Prise en charge du transport pour la chimiothérapie",
        content: [
          "Le cancer est reconnu comme ALD n° 30 (tumeur maligne). À ce titre, le transport vers le centre de chimiothérapie est intégralement remboursé par l'Assurance Maladie. La prise en charge à 100 % couvre tous les modes de transport prescrits : taxi conventionné, VSL et ambulance.",
          "Le nombre de séances de chimiothérapie varie selon le protocole de traitement : de 4 à 8 cycles en moyenne, chaque cycle comprenant 1 à 5 jours de traitement. Les cycles sont espacés de 2 à 4 semaines. Au total, un patient peut effectuer de 8 à 40 aller-retour sur plusieurs mois.",
          "L'oncologue prescrit le transport pour l'ensemble du protocole de chimiothérapie. Une seule prescription peut couvrir tous les trajets du protocole, évitant au patient de redemander un bon de transport à chaque séance. La prescription précise le nombre de séances et la fréquence."
        ],
      },
      {
        id: "choix-transport-chimio",
        title: "Quel mode de transport pour la chimiothérapie ?",
        content: [
          "Le taxi conventionné est le mode de transport le plus recommandé pour la chimiothérapie. La séance dure souvent plusieurs heures et le patient ressort fatigué, nauséeux, voire fiévreux. Le confort d'un véhicule individuel est essentiel pour le retour à domicile après le traitement.",
          "Le VSL peut être prescrit pour l'aller, lorsque le patient est encore en bonne forme. Toutefois, le transport partagé au retour d'une chimiothérapie n'est généralement pas adapté en raison de la fatigue intense et de la vulnérabilité immunitaire du patient. Le médecin peut prescrire un transport individuel.",
          "L'ambulance est prescrite si le patient est trop affaibli pour rester en position assise pendant le trajet ou s'il nécessite une surveillance médicale (perfusion en cours, risque de malaise). C'est le cas pour certaines chimiothérapies en hospitalisation de jour.",
          "Pour les chimiothérapies orales prises à domicile, le transport n'est nécessaire que pour les consultations de suivi et les bilans sanguins, réduisant significativement le nombre de trajets."
        ],
      },
      {
        id: "conseils-pratiques-chimio",
        title: "Conseils pratiques pour le transport en chimiothérapie",
        content: [
          "Prévoyez un temps d'attente après la séance de chimiothérapie. Le traitement dure de 2 à 6 heures et un temps de repos est souvent nécessaire avant le trajet retour. Informez votre taxi conventionné de l'heure approximative de fin de séance et demandez-lui de venir vous chercher avec une marge de 30 minutes.",
          "Emportez de quoi vous couvrir (couverture, châle) car la chimiothérapie peut provoquer des frissons et une sensation de froid. Un sac en cas de nausées pendant le trajet et une bouteille d'eau sont également recommandés. Le chauffeur de taxi conventionné est habitué à transporter des patients en chimiothérapie.",
          "Pour les traitements longs (6 mois ou plus), établissez une relation de confiance avec votre taxi conventionné. Un chauffeur qui connaît votre situation adaptera sa conduite (douceur, évitement des secousses) et son attitude (discrétion, disponibilité). Certains patients préfèrent toujours le même chauffeur pour le confort psychologique."
        ],
      },
      {
        id: "chimio-hospitalisation-jour",
        title: "Transport pour la chimiothérapie en hospitalisation de jour",
        content: [
          "La chimiothérapie en hospitalisation de jour (HDJ) est le mode de traitement le plus courant. Le patient arrive le matin, reçoit son traitement pendant la journée et repart le soir. Le transport aller-retour dans la journée est prescrit et remboursé à 100 %.",
          "Le timing du transport est crucial pour l'HDJ : arrivée à l'heure pour le bilan sanguin pré-chimio (généralement 1h avant la perfusion) et départ dès que l'état du patient le permet (souvent en fin d'après-midi). Le taxi conventionné s'adapte à ces horaires variables.",
          "Certaines HDJ de chimiothérapie s'étendent sur 2 jours consécutifs. Le transport est alors prescrit pour chaque jour. Le patient peut opter pour le même taxi conventionné les deux jours, ce qui simplifie l'organisation."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport pour la chimio est-il pris en charge ?",
        a: "Oui, à 100 % en ALD cancer. Le taxi conventionné, le VSL et l'ambulance sont remboursés intégralement selon la prescription du médecin.",
      },
      {
        q: "Quel transport est le mieux adapté après une chimiothérapie ?",
        a: "Le taxi conventionné est recommandé pour le retour après la chimio. Le confort individuel est essentiel pour un patient fatigué et potentiellement nauséeux.",
      },
      {
        q: "Faut-il un bon de transport pour chaque séance de chimio ?",
        a: "Non, une seule prescription peut couvrir l'ensemble du protocole de chimiothérapie. Le médecin indique le nombre de séances et la fréquence.",
      },
    ],
    relatedGuides: [
      "transport-radiotherapie",
      "ald-transport-medical",
      "transport-hospitalisation-jour",
      "taxi-conventionne-comment-ca-marche",
      "remboursement-transport-cpam",
    ],
    relatedCities: ["paris", "lyon", "marseille", "montpellier"],
  },

  {
    slug: "transport-radiotherapie",
    title: "Transport pour la radiothérapie : organisation quotidienne",
    description:
      "Guide du transport pour la radiothérapie : prise en charge à 100 %, organisation des séances quotidiennes sur 5 à 7 semaines, transport partagé et conseils.",
    date: "2025-01-20",
    lastUpdated: "2025-03-15",
    readTime: "10 min",
    category: "Pathologies",
    answerBox:
      "Le transport pour la radiothérapie est remboursé à 100 % en ALD cancer. Les séances sont quotidiennes (5 jours/semaine) pendant 5 à 7 semaines, soit 25 à 35 aller-retour. Le transport partagé est particulièrement adapté.",
    sections: [
      {
        id: "radiotherapie-specificites",
        title: "Spécificités du transport pour la radiothérapie",
        content: [
          "La radiothérapie se caractérise par des séances quotidiennes (du lundi au vendredi) sur une période de 5 à 7 semaines. Chaque séance est courte (15 à 30 minutes de traitement effectif), mais le patient doit se rendre quotidiennement au centre de radiothérapie. Cela représente 25 à 35 aller-retour sur la durée du traitement.",
          "Le transport est remboursé à 100 % au titre de l'ALD cancer. L'oncologue-radiothérapeute prescrit le transport pour l'ensemble des séances de radiothérapie. La prescription couvre la totalité du traitement et précise le nombre de séances, la fréquence et la durée prévisionnelle.",
          "La ponctualité est essentielle en radiothérapie : les machines d'irradiation fonctionnent sur des créneaux horaires précis. Un retard de transport peut entraîner le report de la séance. Choisissez un transporteur fiable, habitué à desservir le centre de radiothérapie."
        ],
      },
      {
        id: "transport-partage-radiotherapie",
        title: "Le transport partagé pour la radiothérapie",
        content: [
          "La radiothérapie est le soin itératif pour lequel le transport partagé est le plus pertinent. Les patients ont des créneaux horaires proches, les séances sont brèves et régulières, et le nombre de patients se rendant quotidiennement au même centre facilite l'organisation de tournées.",
          "En transport partagé, le VSL ou le taxi conventionné prend en charge 2 à 3 patients du même secteur géographique et les conduit au centre de radiothérapie. Le temps de trajet est allongé de 15 à 20 minutes en moyenne. Le retour peut être organisé de la même manière.",
          "Le transport partagé pour la radiothérapie est encouragé par le décret de février 2025. Les centres de radiothérapie et les sociétés de transport collaborent souvent pour organiser les rotations de patients. Renseignez-vous auprès du service social du centre de radiothérapie."
        ],
      },
      {
        id: "fatigue-radiotherapie",
        title: "Gestion de la fatigue liée à la radiothérapie",
        content: [
          "La radiothérapie provoque une fatigue cumulative qui s'intensifie au fil des semaines de traitement. Les premières séances sont généralement bien tolérées, mais la fatigue devient importante à partir de la 3e ou 4e semaine. Le mode de transport peut nécessiter une adaptation en cours de traitement.",
          "Un patient qui débutait la radiothérapie en VSL transport partagé peut avoir besoin de passer en taxi conventionné individuel en fin de traitement en raison de la fatigue intense. Le médecin peut modifier la prescription de transport en cours de traitement si l'état du patient le justifie.",
          "Certains patients optent pour un hébergement à proximité du centre de radiothérapie pour les dernières semaines de traitement, évitant ainsi le transport quotidien. Les maisons des patients et les hôtels hospitaliers proposent un hébergement à tarif réduit pour les patients en traitement ambulatoire."
        ],
      },
      {
        id: "radiotherapie-quotidien",
        title: "Organisation au quotidien",
        content: [
          "Planifiez vos trajets à l'avance pour toute la durée du traitement. Établissez un planning de réservation récurrent avec votre taxi conventionné ou votre société de VSL. Précisez les horaires exacts (créneau de traitement + marge) et confirmez la veille pour les premiers jours.",
          "Les séances de radiothérapie ont lieu du lundi au vendredi, rarement le week-end. Prévoyez environ 1h à 1h30 pour le déplacement aller, le temps d'attente, la séance et le retour. Certains centres proposent des créneaux tôt le matin pour les patients qui souhaitent reprendre leurs activités dans la journée."
        ],
      },
    ],
    faq: [
      {
        q: "Combien de séances de radiothérapie nécessitent un transport ?",
        a: "La radiothérapie comprend généralement 25 à 35 séances quotidiennes sur 5 à 7 semaines. Chaque séance nécessite un aller-retour.",
      },
      {
        q: "Le transport partagé est-il adapté à la radiothérapie ?",
        a: "Oui, la radiothérapie est le soin le plus adapté au transport partagé grâce à la régularité des séances et au nombre de patients se rendant au même centre.",
      },
      {
        q: "Peut-on changer de mode de transport en cours de radiothérapie ?",
        a: "Oui, le médecin peut modifier la prescription si l'état du patient évolue, par exemple en passant du VSL partagé au taxi individuel en cas de fatigue.",
      },
    ],
    relatedGuides: [
      "transport-chimiotherapie",
      "ald-transport-medical",
      "obligation-transport-partage-2026",
      "transport-hospitalisation-jour",
    ],
    relatedCities: ["paris", "lyon", "toulouse", "bordeaux"],
  },

  {
    slug: "transport-kinesitherapie",
    title: "Transport pour la kinésithérapie : conditions de remboursement",
    description:
      "Le transport pour la kinésithérapie est-il remboursé ? Conditions de prise en charge, cas ALD, rééducation post-opératoire et démarches CPAM expliquées.",
    date: "2025-01-22",
    lastUpdated: "2025-03-18",
    readTime: "8 min",
    category: "Pathologies",
    answerBox:
      "Le transport pour la kinésithérapie n'est remboursé que dans des cas spécifiques : ALD en rapport avec la rééducation, rééducation post-hospitalisation, ou incapacité de déplacement autonome attestée par le médecin prescripteur.",
    sections: [
      {
        id: "conditions-remboursement-kine",
        title: "Conditions de remboursement du transport kiné",
        content: [
          "Le transport pour la kinésithérapie n'est pas remboursé automatiquement. Contrairement à la dialyse ou la chimiothérapie, la kinésithérapie en cabinet libéral ne donne pas systématiquement droit au transport remboursé. Plusieurs conditions doivent être réunies pour bénéficier du remboursement.",
          "Le remboursement est accordé si la kinésithérapie est en rapport avec une ALD exonérante (par exemple, rééducation après AVC, rééducation respiratoire pour BPCO, kinésithérapie pour maladie neuromusculaire). Dans ce cas, le transport est remboursé à 100 % comme tout soin en rapport avec l'ALD.",
          "Le transport est également remboursé si le patient est dans l'incapacité de se déplacer par ses propres moyens (handicap moteur, absence de moyen de locomotion, isolement géographique) et que cette incapacité est attestée par le médecin prescripteur sur le bon de transport."
        ],
      },
      {
        id: "kine-post-hospitalisation",
        title: "Kinésithérapie post-hospitalisation",
        content: [
          "Après une hospitalisation (chirurgie orthopédique, AVC, accident), la rééducation en kinésithérapie peut nécessiter un transport remboursé. Le médecin hospitalier prescrit le transport pour la rééducation post-opératoire, qui est considérée comme faisant partie du parcours de soins hospitalier.",
          "La rééducation en centre de soins de suite et de réadaptation (SSR) inclut le transport dans la prise en charge globale de l'hospitalisation. Les allers-retours entre le domicile et le SSR pour les séjours de jour sont remboursés à 100 %.",
          "Les séances de kinésithérapie à domicile peuvent être une alternative au transport. Le kinésithérapeute se déplace chez le patient si celui-ci est dans l'impossibilité de se rendre au cabinet. La prescription de soins à domicile est faite par le médecin traitant."
        ],
      },
      {
        id: "kine-regulier-transport",
        title: "Kinésithérapie régulière et transport itératif",
        content: [
          "Pour les patients en ALD nécessitant une kinésithérapie régulière (2 à 5 séances par semaine), le transport itératif peut faire l'objet d'une prescription de transport en série. Le médecin prescrit le nombre de séances et la fréquence, avec demande d'entente préalable si le trajet dépasse 50 km aller.",
          "Le choix du mode de transport dépend de la mobilité du patient. Un patient en fauteuil roulant nécessitera un VSL adapté ou un taxi conventionné accessible. Un patient capable de marcher avec une aide technique pourra utiliser un taxi conventionné standard."
        ],
      },
      {
        id: "alternatives-transport-kine",
        title: "Alternatives au transport pour la kinésithérapie",
        content: [
          "La kinésithérapie à domicile est une alternative intéressante lorsque le patient ne peut pas se déplacer facilement. Le kinésithérapeute se rend au domicile du patient avec son matériel portable. La prescription de soins à domicile est établie par le médecin traitant.",
          "La télékinésithérapie, autorisée depuis 2020, permet certaines séances à distance par visioconférence. Elle est adaptée pour les exercices d'auto-rééducation supervisés et les bilans de suivi. Elle ne remplace pas les soins manuels mais peut réduire le nombre de déplacements."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport pour le kiné est-il remboursé ?",
        a: "Seulement dans des cas spécifiques : ALD en rapport avec la rééducation, post-hospitalisation ou incapacité de déplacement attestée par le médecin.",
      },
      {
        q: "Combien de séances de kiné donnent droit au transport ?",
        a: "Le nombre de séances dépend de la prescription médicale. En ALD, le transport est remboursé pour toute la durée du traitement de rééducation prescrit.",
      },
      {
        q: "La kiné à domicile est-elle une alternative au transport ?",
        a: "Oui, si votre état le justifie, le médecin peut prescrire la kinésithérapie à domicile. Le kinésithérapeute se déplace chez vous sans frais de transport.",
      },
    ],
    relatedGuides: [
      "transport-reeducation",
      "ald-transport-medical",
      "remboursement-transport-cpam",
      "transport-consultation-specialiste",
    ],
  },

  {
    slug: "transport-irm-scanner",
    title: "Transport pour IRM et scanner : remboursement et organisation",
    description:
      "Comment organiser et faire rembourser le transport pour un examen IRM ou scanner ? Conditions, prescription, et conseils pratiques pour les patients.",
    date: "2025-01-25",
    lastUpdated: "2025-03-20",
    readTime: "7 min",
    category: "Pathologies",
    answerBox:
      "Le transport pour un IRM ou un scanner est remboursé s'il est prescrit par un médecin sur un bon de transport. En ALD, le remboursement est à 100 %. L'examen doit être en rapport avec un motif éligible au transport.",
    sections: [
      {
        id: "conditions-remboursement-irm",
        title: "Conditions de remboursement du transport IRM/scanner",
        content: [
          "Le transport pour un examen d'imagerie médicale (IRM, scanner, scintigraphie, TEP-scan) est remboursable sous les mêmes conditions que tout transport sanitaire. Le médecin prescripteur doit établir un bon de transport en justifiant le motif : ALD, hospitalisation, accident du travail, ou incapacité de déplacement du patient.",
          "Un simple examen d'IRM ou de scanner prescrit en ville, pour un patient autonome et mobile, ne donne pas automatiquement droit au transport remboursé. Le médecin doit constater que le patient ne peut pas se déplacer par ses propres moyens ou que le trajet est en rapport avec une ALD.",
          "En ALD, le transport pour l'IRM ou le scanner de suivi de la pathologie est remboursé à 100 %. L'examen doit être en rapport avec l'ALD (par exemple, IRM de contrôle pour un suivi de cancer, scanner de suivi pour une pathologie cardiaque)."
        ],
      },
      {
        id: "organisation-transport-irm",
        title: "Organiser son transport pour l'IRM ou le scanner",
        content: [
          "Les examens d'IRM et de scanner sont programmés à l'avance (parfois plusieurs semaines). Profitez de ce délai pour organiser votre transport : obtenez la prescription de transport du médecin, réservez votre taxi conventionné ou votre VSL et confirmez le rendez-vous.",
          "Prévoyez d'arriver 15 à 30 minutes avant l'heure de votre rendez-vous pour les formalités administratives. Informez le transporteur de la durée approximative de l'examen (30 à 60 minutes pour une IRM, 15 à 30 minutes pour un scanner) afin qu'il prévoie le retour.",
          "Pour les examens nécessitant une injection de produit de contraste, un temps d'observation post-examen peut être requis. Prévenez le transporteur d'un éventuel retard de 30 minutes à 1 heure par rapport à l'heure prévue de fin d'examen."
        ],
      },
      {
        id: "cas-particuliers-imagerie",
        title: "Cas particuliers de l'imagerie médicale",
        content: [
          "Les TEP-scan et scintigraphies sont des examens de médecine nucléaire souvent réalisés dans des centres spécialisés éloignés du domicile du patient. Le transport vers ces centres est remboursable, particulièrement en ALD cancer où le TEP-scan fait partie du bilan de suivi.",
          "Les IRM cardiaques, cérébrales et ostéo-articulaires sont de plus en plus prescrites et peuvent nécessiter un transport si le patient est adressé vers un centre d'imagerie éloigné disposant de l'équipement spécifique. Le médecin justifie la nécessité du transport vers un centre éloigné.",
          "Pour les biopsies guidées par imagerie (biopsie sous scanner ou sous échographie), le transport aller est un transport standard. Le retour peut nécessiter une ambulance si le patient a reçu une sédation ou si l'état post-biopsie le justifie."
        ],
      },
      {
        id: "conseils-patients-imagerie",
        title: "Conseils pour les patients",
        content: [
          "Vérifiez si votre examen d'imagerie entre dans le cadre d'un motif de transport remboursable. Si vous êtes en ALD et que l'examen est en rapport avec votre pathologie, le transport est remboursé. Si vous n'êtes pas en ALD, discutez avec votre médecin de la possibilité d'une prescription de transport.",
          "Si le centre d'imagerie le plus proche est à plus de 150 km, l'entente préalable est nécessaire. Votre médecin devra justifier l'impossibilité de réaliser l'examen à proximité. Les délais d'attente pour l'IRM étant parfois longs, un centre éloigné mais plus rapide peut être préféré."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport pour l'IRM est-il remboursé ?",
        a: "Oui, si un bon de transport est prescrit et que le motif est éligible (ALD, hospitalisation, incapacité de déplacement). En ALD, le remboursement est à 100 %.",
      },
      {
        q: "Faut-il une prescription pour aller faire un scanner ?",
        a: "Oui, un bon de transport (Cerfa S3138) prescrit par le médecin est nécessaire pour le remboursement du transport vers le centre d'imagerie.",
      },
      {
        q: "Le transport pour un TEP-scan est-il remboursé ?",
        a: "Oui, le TEP-scan est un examen spécialisé souvent lié à un suivi en ALD cancer. Le transport est remboursé à 100 % en ALD.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "ald-transport-medical",
      "bon-de-transport-medical",
      "transport-consultation-specialiste",
    ],
  },

  {
    slug: "transport-consultation-specialiste",
    title: "Transport pour consultation spécialiste : est-ce remboursé ?",
    description:
      "Le transport pour consulter un spécialiste est-il remboursé par la CPAM ? Conditions de prise en charge, cas ALD, longue distance et démarches à suivre.",
    date: "2025-01-28",
    lastUpdated: "2025-03-22",
    readTime: "8 min",
    category: "Pathologies",
    answerBox:
      "Le transport pour une consultation spécialisée est remboursé si le patient est en ALD pour un soin en rapport, s'il est convoqué par le service médical, ou si le trajet dépasse 150 km. Une prescription médicale est toujours nécessaire.",
    sections: [
      {
        id: "conditions-consultation-specialiste",
        title: "Quand le transport vers un spécialiste est-il remboursé ?",
        content: [
          "Le transport pour une consultation spécialisée n'est pas remboursé automatiquement. Il faut remplir au moins l'une des conditions suivantes : le patient est en ALD et la consultation est en rapport avec l'affection exonérante ; le patient est hospitalisé ou entre/sort d'hospitalisation ; le trajet dépasse 150 km aller ; le patient est convoqué par le service médical de la CPAM.",
          "Pour les patients en ALD, la consultation spécialisée en rapport avec la pathologie ouvre droit au transport remboursé à 100 %. Exemples : consultation chez le cardiologue pour un patient en ALD cardiopathie, consultation chez l'oncologue pour un patient en ALD cancer, consultation chez le rhumatologue pour un patient en ALD polyarthrite.",
          "Le patient qui ne remplit aucune de ces conditions mais est dans l'incapacité de se déplacer par ses propres moyens (handicap, grand âge, absence de moyen de locomotion) peut obtenir une prescription de transport. Le médecin doit justifier cette incapacité sur le bon de transport."
        ],
      },
      {
        id: "longue-distance-specialiste",
        title: "Transport longue distance pour un spécialiste",
        content: [
          "Lorsque le spécialiste à consulter se trouve à plus de 150 km du domicile du patient, le transport est remboursable quelle que soit la raison de la consultation. Le médecin prescrit le transport et doit justifier l'absence de spécialiste compétent à proximité.",
          "Le transport longue distance peut être effectué en train, en avion ou en transport sanitaire routier selon les cas. Pour le train et l'avion, la CPAM rembourse le billet sur la base du tarif le plus économique. Un accompagnant peut être pris en charge si le médecin le juge nécessaire.",
          "L'entente préalable est obligatoire pour les transports de plus de 150 km aller. Le médecin adresse la demande d'entente préalable au service médical de la CPAM au moins 15 jours avant le transport. Le silence de la CPAM vaut acceptation."
        ],
      },
      {
        id: "parcours-soins-coordonnes",
        title: "Transport et parcours de soins coordonnés",
        content: [
          "Le parcours de soins coordonnés implique que le patient consulte d'abord son médecin traitant avant d'être adressé à un spécialiste. Le médecin traitant établit la prescription de transport si les conditions de remboursement sont réunies.",
          "Le spécialiste peut également prescrire le transport pour les consultations de suivi si le patient est en ALD. Dans ce cas, le spécialiste coche la case ALD sur le bon de transport et précise le lien avec l'affection exonérante.",
          "Les consultations en urgence chez un spécialiste (dermatologie urgente, cardiologie en urgence) peuvent donner lieu à un transport remboursé si l'urgence est médicalement justifiée. Le bon de transport est alors établi a posteriori."
        ],
      },
      {
        id: "cas-non-rembourses",
        title: "Cas non remboursés et alternatives",
        content: [
          "Les consultations de routine chez un spécialiste (ophtalmologue, dentiste, dermatologue) ne donnent généralement pas droit au transport remboursé, sauf en ALD. Pour ces consultations, le patient utilise ses propres moyens de transport à ses frais.",
          "Certaines complémentaires santé proposent un forfait transport pour les consultations non remboursées par la CPAM. Renseignez-vous auprès de votre mutuelle sur les éventuelles prises en charge complémentaires du transport."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport chez le cardiologue est-il remboursé ?",
        a: "Oui, si vous êtes en ALD pour une pathologie cardiaque et que la consultation est en rapport avec cette ALD. Sinon, des conditions spécifiques s'appliquent.",
      },
      {
        q: "Faut-il passer par le médecin traitant pour la prescription transport ?",
        a: "Le médecin traitant ou le spécialiste peut prescrire le transport. En ALD, le spécialiste de suivi établit souvent directement la prescription.",
      },
      {
        q: "Le transport pour un 2e avis médical est-il remboursé ?",
        a: "Oui, si la consultation de 2e avis remplit les conditions de remboursement (ALD, longue distance, convocation). Le médecin traitant prescrit le transport.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "ald-transport-medical",
      "bon-de-transport-medical",
      "demande-entente-prealable-transport",
    ],
  },

  {
    slug: "transport-psychiatrie",
    title: "Transport pour soins psychiatriques : droits et prise en charge",
    description:
      "Guide du transport pour les soins psychiatriques : ALD psy, CMP, hospitalisation, soins sans consentement, droits du patient et modalités de remboursement.",
    date: "2025-02-01",
    lastUpdated: "2025-03-25",
    readTime: "9 min",
    category: "Pathologies",
    answerBox:
      "Le transport pour soins psychiatriques est remboursé à 100 % en ALD affection psychiatrique de longue durée. Le transport individuel est généralement prescrit pour les patients psychiatriques en raison de la contre-indication au transport partagé.",
    sections: [
      {
        id: "ald-psychiatrie",
        title: "ALD psychiatrique et transport",
        content: [
          "Les affections psychiatriques de longue durée sont reconnues comme ALD n° 23. Elles incluent les psychoses, les troubles bipolaires, les dépressions récurrentes sévères, les troubles du spectre autistique et les schizophrénies. Les patients en ALD psy bénéficient du remboursement à 100 % de leur transport vers les soins psychiatriques.",
          "Le transport vers le Centre Médico-Psychologique (CMP), l'hôpital de jour psychiatrique, les consultations de suivi chez le psychiatre ou les séjours d'hospitalisation en service psychiatrique est intégralement pris en charge. La prescription de transport est établie par le psychiatre ou le médecin traitant.",
          "La particularité du transport en psychiatrie est la fréquente contre-indication au transport partagé. Les patients souffrant de troubles psychiatriques peuvent présenter une anxiété sociale, des phobies, des troubles du comportement ou une instabilité émotionnelle rendant le transport partagé inadapté. Le médecin prescripteur peut cocher la case transport individuel."
        ],
      },
      {
        id: "types-soins-psy",
        title: "Types de soins psychiatriques et transport",
        content: [
          "Les consultations au CMP (Centre Médico-Psychologique) sont les soins ambulatoires les plus courants en psychiatrie. Le transport vers le CMP est remboursé en ALD. La fréquence des consultations varie d'une fois par semaine à une fois par mois selon la pathologie.",
          "L'hôpital de jour psychiatrique accueille les patients pour des programmes thérapeutiques structurés (groupes de parole, activités thérapeutiques, suivi médical). Le transport quotidien ou plurihebdomadaire est remboursé en ALD.",
          "L'hospitalisation complète en service psychiatrique nécessite un transport d'entrée et de sortie. Le transport peut être en ambulance si l'état du patient le justifie (agitation, risque de fugue, sédation).",
          "Les soins de réhabilitation psychosociale (ateliers protégés, ESAT, centres de jour) peuvent également nécessiter un transport remboursé si le patient est en ALD et que les soins sont prescrits dans le cadre du protocole de soins."
        ],
      },
      {
        id: "transport-contraint",
        title: "Transport et soins sans consentement",
        content: [
          "Les soins psychiatriques sans consentement (SDRE ou SDT) impliquent des contraintes spécifiques en matière de transport. Le transport d'un patient hospitalisé sous contrainte est généralement effectué en ambulance avec un accompagnement adapté (infirmier, forces de l'ordre si nécessaire).",
          "Le coût du transport pour les soins sans consentement est pris en charge par l'établissement hospitalier. Le patient n'a aucune démarche à effectuer ni aucun frais à avancer.",
          "Les programmes de soins ambulatoires contraints prévoient que le patient se rende de lui-même à ses consultations. Si le patient ne se présente pas, l'établissement peut organiser un transport pour assurer la continuité des soins. Ce transport est pris en charge par l'hôpital."
        ],
      },
      {
        id: "conseils-transport-psy",
        title: "Conseils pour le transport en psychiatrie",
        content: [
          "Choisissez un taxi conventionné avec lequel vous vous sentez en confiance. La régularité du même chauffeur est rassurante pour les patients souffrant de troubles anxieux ou de phobies. De nombreux chauffeurs de taxi conventionnés sont sensibilisés à la prise en charge des patients psychiatriques.",
          "Si vous ressentez de l'anxiété pendant le trajet, n'hésitez pas à en informer le chauffeur. Un trajet calme, sans musique forte ni conversation excessive, peut contribuer à votre bien-être. Le chauffeur conventionné est tenu au respect du patient et de ses besoins."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport au CMP est-il remboursé ?",
        a: "Oui, si le patient est en ALD pour une affection psychiatrique. Le transport vers le CMP est remboursé à 100 % au titre de l'ALD n° 23.",
      },
      {
        q: "Le transport partagé est-il obligatoire en psychiatrie ?",
        a: "Non, les patients psychiatriques bénéficient souvent d'une dérogation au transport partagé en raison de contre-indications liées à leur pathologie.",
      },
      {
        q: "Qui paie le transport en cas d'hospitalisation sous contrainte ?",
        a: "Le transport pour les soins psychiatriques sans consentement est pris en charge par l'établissement hospitalier. Le patient n'a rien à payer.",
      },
    ],
    relatedGuides: [
      "ald-transport-medical",
      "transport-hospitalisation-jour",
      "remboursement-transport-cpam",
      "droits-patients-transport-sanitaire",
    ],
  },

  {
    slug: "transport-reeducation",
    title: "Transport pour la rééducation : SSR, MPR et soins de suite",
    description:
      "Guide du transport pour la rééducation en SSR et MPR : prise en charge, modes de transport, rééducation post-AVC, post-chirurgie et retour à domicile.",
    date: "2025-02-05",
    lastUpdated: "2025-03-28",
    readTime: "9 min",
    category: "Pathologies",
    answerBox:
      "Le transport pour la rééducation en SSR est remboursé à 100 % dans le cadre d'une hospitalisation. Les allers-retours domicile-SSR pour les séjours de jour sont pris en charge. Le mode de transport dépend de l'autonomie du patient.",
    sections: [
      {
        id: "ssr-transport",
        title: "Transport vers les centres de SSR",
        content: [
          "Les centres de Soins de Suite et de Réadaptation (SSR) accueillent les patients après une hospitalisation aiguë pour une phase de rééducation. Le transport entre l'hôpital et le SSR est prescrit par le médecin hospitalier et remboursé à 100 % dans le cadre de la continuité des soins.",
          "Le mode de transport vers le SSR dépend de l'état du patient : ambulance pour les patients nécessitant un transport allongé ou sous surveillance, VSL pour les patients pouvant rester assis, taxi conventionné pour les patients les plus autonomes.",
          "Pour les SSR de jour (hospitalisation de jour de rééducation), le patient effectue des allers-retours quotidiens entre son domicile et le centre. Ces transports sont remboursés à 100 % car ils s'inscrivent dans le cadre de l'hospitalisation."
        ],
      },
      {
        id: "reeducation-specifique",
        title: "Rééducation par type de pathologie",
        content: [
          "Après un AVC, la rééducation en MPR (Médecine Physique et de Réadaptation) est intensive et peut durer plusieurs semaines à plusieurs mois. Le transport est remboursé à 100 % au titre de l'ALD AVC. Le patient peut passer d'une ambulance (phase aiguë) à un VSL puis un taxi conventionné au fil de sa récupération.",
          "La rééducation post-chirurgie orthopédique (prothèse de hanche, de genou, fracture) nécessite un transport vers le SSR puis vers le cabinet de kinésithérapie. Le transport est remboursé dans le cadre de la continuité des soins post-hospitalisation.",
          "La rééducation cardiaque après infarctus ou chirurgie cardiaque se déroule souvent en SSR spécialisé. Le transport est remboursé à 100 % en ALD cardiopathie. Les séances de réadaptation cardiaque ambulatoire (2 à 3 fois par semaine pendant 4 à 6 semaines) sont également couvertes.",
          "La rééducation respiratoire pour les patients BPCO, insuffisants respiratoires ou post-COVID est prise en charge de la même manière. Le transport vers le centre de réhabilitation respiratoire est remboursé en ALD."
        ],
      },
      {
        id: "retour-domicile-reeducation",
        title: "Transport de retour à domicile après rééducation",
        content: [
          "Le transport de retour à domicile après un séjour en SSR est prescrit par le médecin du centre et remboursé à 100 %. Le mode de transport est adapté à l'état du patient à la sortie : si le patient a retrouvé une autonomie suffisante, un taxi conventionné est prescrit.",
          "Le médecin du SSR peut également prescrire le transport pour les consultations de suivi post-rééducation chez le spécialiste ou le kinésithérapeute libéral. Ces transports sont remboursés si le patient est toujours dans les conditions d'éligibilité."
        ],
      },
      {
        id: "evolution-transport-reeducation",
        title: "Évolution du mode de transport pendant la rééducation",
        content: [
          "Le mode de transport évolue souvent au cours de la rééducation, reflétant l'amélioration de l'état du patient. En début de rééducation, l'ambulance ou le VSL sont fréquemment prescrits. Au fil des semaines, le patient gagne en autonomie et peut passer au taxi conventionné.",
          "Cette évolution est positive pour le patient (signe de récupération) et pour l'Assurance Maladie (réduction du coût). Le médecin réévalue régulièrement le mode de transport et modifie la prescription en conséquence."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport vers le SSR est-il remboursé ?",
        a: "Oui, à 100 % dans le cadre de la continuité des soins post-hospitalisation. Le médecin hospitalier prescrit le mode de transport adapté.",
      },
      {
        q: "Le transport change-t-il pendant la rééducation ?",
        a: "Oui, le mode de transport évolue souvent avec l'amélioration du patient : ambulance en début, puis VSL, puis taxi conventionné en fin de rééducation.",
      },
      {
        q: "La rééducation en SSR de jour inclut-elle le transport ?",
        a: "Oui, les allers-retours quotidiens domicile-SSR pour l'hospitalisation de jour de rééducation sont remboursés à 100 %.",
      },
    ],
    relatedGuides: [
      "transport-kinesitherapie",
      "ald-transport-medical",
      "ambulance-quand-comment",
      "transport-hospitalisation-jour",
    ],
  },

  {
    slug: "transport-soins-palliatifs",
    title: "Transport pour les soins palliatifs : droits et accompagnement",
    description:
      "Guide du transport pour les soins palliatifs : prise en charge à 100 %, HAD, unités de soins palliatifs, accompagnement du patient et de la famille.",
    date: "2025-02-08",
    lastUpdated: "2025-04-01",
    readTime: "8 min",
    category: "Pathologies",
    answerBox:
      "Le transport pour les soins palliatifs est remboursé à 100 % en ALD. Le confort du patient est prioritaire : taxi conventionné ou ambulance selon l'état. Le transport de l'accompagnant peut également être pris en charge.",
    sections: [
      {
        id: "soins-palliatifs-transport",
        title: "Transport et soins palliatifs : principes",
        content: [
          "Les soins palliatifs s'adressent aux patients atteints de maladies graves, évolutives ou terminales. Le transport vers les structures de soins palliatifs (unités de soins palliatifs, équipes mobiles, hôpital de jour) est remboursé à 100 % au titre de l'ALD dont relève le patient.",
          "Le confort du patient est la priorité absolue dans le transport pour soins palliatifs. Le médecin prescrit le mode de transport le plus confortable : taxi conventionné pour les patients pouvant rester assis, ambulance pour les patients nécessitant une position allongée ou une surveillance médicale.",
          "Le transport partagé n'est jamais imposé aux patients en soins palliatifs. Le médecin prescrit systématiquement un transport individuel en raison de la fragilité du patient et de la nécessité d'un trajet dans les meilleures conditions possibles."
        ],
      },
      {
        id: "types-structures-palliatifs",
        title: "Structures de soins palliatifs et transport",
        content: [
          "Les Unités de Soins Palliatifs (USP) sont des services hospitaliers spécialisés dans l'accompagnement de fin de vie. Le transport vers l'USP est prescrit par le médecin traitant ou le médecin hospitalier. L'ambulance est le mode de transport le plus fréquent pour les admissions en USP.",
          "Les Équipes Mobiles de Soins Palliatifs (EMSP) se déplacent auprès du patient, réduisant le besoin de transport. Elles interviennent à domicile ou dans les établissements de santé. Toutefois, des consultations au centre de soins palliatifs peuvent nécessiter un transport.",
          "L'Hospitalisation À Domicile (HAD) en soins palliatifs évite les transports en permettant au patient de recevoir les soins chez lui. Seuls les transports vers l'hôpital pour des examens ou des ajustements de traitement sont nécessaires."
        ],
      },
      {
        id: "accompagnant-palliatifs",
        title: "Transport de l'accompagnant",
        content: [
          "Le transport de l'accompagnant familial peut être pris en charge dans le cadre des soins palliatifs. Le médecin prescrit la présence d'un accompagnant si l'état du patient le justifie (soutien psychologique, aide aux actes de la vie quotidienne, communication avec l'équipe soignante).",
          "L'accompagnant voyage dans le même véhicule que le patient sans surcoût en taxi conventionné. Pour les transports longue distance, le billet de l'accompagnant peut être remboursé par la CPAM sur prescription médicale justifiant la nécessité de sa présence."
        ],
      },
      {
        id: "dignite-fin-de-vie",
        title: "Dignité et qualité du transport en fin de vie",
        content: [
          "Le transport d'un patient en soins palliatifs requiert une attention particulière à la dignité et au bien-être du patient. Les transporteurs conventionnés sensibilisés aux soins palliatifs adaptent leur prise en charge : conduite douce, communication bienveillante, respect du rythme du patient.",
          "En cas de transport difficile (douleur, nausées, détresse respiratoire), le médecin peut prescrire un accompagnement infirmier pendant le transport. L'ambulance équipée et le personnel formé aux soins palliatifs offrent les meilleures conditions pour ces transports sensibles."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport pour les soins palliatifs est-il remboursé ?",
        a: "Oui, à 100 % en ALD. Le confort du patient est prioritaire et le transport individuel est systématiquement prescrit.",
      },
      {
        q: "L'accompagnant peut-il être transporté avec le patient ?",
        a: "Oui, l'accompagnant peut voyager avec le patient sans surcoût en taxi conventionné. Pour les longs trajets, son billet peut être remboursé sur prescription.",
      },
      {
        q: "Le transport partagé est-il imposé en soins palliatifs ?",
        a: "Non, le transport partagé n'est jamais imposé aux patients en soins palliatifs. Le transport individuel est systématiquement prescrit.",
      },
    ],
    relatedGuides: [
      "ald-transport-medical",
      "ambulance-quand-comment",
      "transport-hospitalisation-jour",
      "droits-patients-transport-sanitaire",
    ],
  },

  {
    slug: "transport-hospitalisation-jour",
    title: "Transport pour l'hospitalisation de jour (HDJ) : guide complet",
    description:
      "Transport pour l'hospitalisation de jour : remboursement, organisation aller-retour dans la journée, modes de transport et conseils pratiques pour les patients.",
    date: "2025-02-10",
    lastUpdated: "2025-04-02",
    readTime: "8 min",
    category: "Pathologies",
    answerBox:
      "Le transport pour l'hospitalisation de jour (HDJ) est remboursé à 100 % comme tout transport lié à une hospitalisation. Le patient arrive le matin et repart le soir. Le taxi conventionné est le mode de transport le plus courant.",
    sections: [
      {
        id: "hdj-definition",
        title: "L'hospitalisation de jour et le transport",
        content: [
          "L'hospitalisation de jour (HDJ) est un mode de prise en charge où le patient est accueilli dans un établissement hospitalier pour une durée inférieure à 12 heures, sans hébergement de nuit. Les soins pratiqués en HDJ incluent la chimiothérapie, les transfusions, les bilans diagnostiques, les actes chirurgicaux ambulatoires et la rééducation.",
          "Le transport pour l'HDJ est remboursé à 100 % du tarif conventionné car il s'inscrit dans le cadre d'une hospitalisation. Cette prise en charge intégrale s'applique quel que soit le motif de l'HDJ, même en dehors d'une ALD. Le tiers payant est automatique avec les transporteurs conventionnés.",
          "Le transport aller-retour dans la même journée est la norme pour l'HDJ. Le patient est pris en charge à domicile le matin, conduit à l'hôpital, et ramené chez lui en fin de journée. L'heure de retour dépend de la durée des soins et peut varier d'un jour à l'autre."
        ],
      },
      {
        id: "organisation-hdj",
        title: "Organisation du transport en HDJ",
        content: [
          "Réservez votre transport dès réception de la convocation d'HDJ. Précisez l'heure d'arrivée demandée par l'hôpital et la durée prévisionnelle du séjour. Le transporteur pourra ainsi organiser l'aller et prévoir le retour à l'heure appropriée.",
          "Pour le retour, deux options : soit vous convenez d'une heure fixe de retour avec le transporteur, soit vous l'appelez quand vous êtes prêt à partir. La seconde option est plus flexible mais peut impliquer un temps d'attente de 15 à 45 minutes selon la disponibilité du transporteur.",
          "Pour les HDJ régulières (chimiothérapie, transfusions récurrentes), établissez un planning de transport récurrent avec le même transporteur. La régularité facilite l'organisation pour le patient comme pour le chauffeur."
        ],
      },
      {
        id: "prescription-hdj",
        title: "Prescription de transport pour l'HDJ",
        content: [
          "La prescription de transport pour l'HDJ est établie par le médecin hospitalier. Pour les HDJ programmées, le médecin prescrit le transport en avance, permettant au patient d'organiser son trajet. Pour les HDJ itératives, une prescription unique peut couvrir l'ensemble des séances.",
          "Le mode de transport est déterminé par le médecin en fonction de l'état du patient et du type de soins pratiqués en HDJ. Pour une chimiothérapie (fatigue au retour), le taxi conventionné individuel est privilégié. Pour un bilan diagnostique (patient en bonne forme), le VSL peut être prescrit."
        ],
      },
      {
        id: "conseils-hdj",
        title: "Conseils pratiques pour le transport en HDJ",
        content: [
          "Prévoyez une marge de 30 minutes pour l'aller afin de gérer les imprévus (embouteillages, formalités d'entrée). L'HDJ fonctionne souvent sur des créneaux horaires stricts et un retard peut entraîner le report de votre séance.",
          "Emportez de quoi patienter (lecture, musique, téléphone chargé) pour les temps d'attente avant et après les soins. Pensez à emporter un en-cas léger et de l'eau, surtout si votre HDJ dure toute la journée.",
          "Si votre état après les soins est incertain (chimiothérapie, sédation), demandez au service d'HDJ d'évaluer votre aptitude au transport avant de rappeler le taxi. Le médecin peut modifier le mode de transport de retour si votre état le justifie."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport en hospitalisation de jour est-il remboursé ?",
        a: "Oui, à 100 % car l'HDJ est une hospitalisation. Le transport aller-retour est intégralement pris en charge par la CPAM.",
      },
      {
        q: "Qui prescrit le transport pour l'HDJ ?",
        a: "Le médecin hospitalier prescrit le transport pour l'HDJ. Pour les séances itératives, une seule prescription peut couvrir toutes les séances.",
      },
      {
        q: "Peut-on utiliser un taxi conventionné pour l'HDJ ?",
        a: "Oui, le taxi conventionné est le mode de transport le plus courant pour l'HDJ, offrant confort et flexibilité pour le retour.",
      },
    ],
    relatedGuides: [
      "transport-chimiotherapie",
      "remboursement-transport-cpam",
      "taxi-conventionne-comment-ca-marche",
      "preparer-transport-medical",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CLUSTER 4 — Publics spécifiques (6 guides)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: "transport-medical-personne-agee",
    title: "Transport médical pour les personnes âgées : droits et solutions",
    description:
      "Guide du transport médical pour les seniors : droits spécifiques, aide à la personne, APA, EHPAD, accompagnement et solutions adaptées aux personnes âgées.",
    date: "2025-02-15",
    lastUpdated: "2025-04-01",
    readTime: "10 min",
    category: "Publics",
    answerBox:
      "Les personnes âgées bénéficient des mêmes droits au transport médical remboursé que tout assuré. Le taxi conventionné est le mode de transport privilégié pour le confort et l'aide à la montée/descente du véhicule.",
    sections: [
      {
        id: "droits-personnes-agees",
        title: "Droits des personnes âgées en matière de transport médical",
        content: [
          "Les personnes âgées bénéficient des mêmes conditions de remboursement du transport médical que tout assuré : prescription médicale obligatoire, transporteur conventionné, motif éligible (ALD, hospitalisation, etc.). Aucune condition d'âge spécifique ne s'applique pour le remboursement.",
          "Les personnes âgées sont souvent en ALD (diabète, pathologies cardiaques, cancer) et bénéficient à ce titre d'un remboursement à 100 %. De plus, leur fréquente incapacité à se déplacer seules (troubles de la marche, démence, perte d'autonomie) justifie la prescription de transport même pour des soins qui n'ouvriraient pas droit au transport pour un patient autonome.",
          "Le médecin prescripteur évalue l'autonomie de la personne âgée pour déterminer le mode de transport adapté. Le taxi conventionné est le plus courant pour les patients pouvant se déplacer en position assise avec aide. Le VSL est prescrit si le transport partagé est accepté. L'ambulance est réservée aux patients devant être brancardés."
        ],
      },
      {
        id: "accompagnement-senior",
        title: "Aide et accompagnement pendant le transport",
        content: [
          "Le taxi conventionné offre un service d'accompagnement adapté aux personnes âgées : aide à la montée et à la descente du véhicule, portage des effets personnels, accompagnement jusqu'à l'accueil de l'établissement de santé. Ce service est inclus dans le tarif conventionné.",
          "Pour les personnes âgées désorientées ou souffrant de troubles cognitifs (maladie d'Alzheimer), le médecin peut prescrire la présence d'un accompagnant pendant le transport. L'accompagnant (aidant familial, auxiliaire de vie) voyage dans le même véhicule sans surcoût en taxi conventionné.",
          "Certains taxis conventionnés sont spécialisés dans le transport des personnes âgées et disposent d'équipements adaptés : marche-pied, poignée de maintien, ceinture de sécurité adaptée. Renseignez-vous auprès de votre CPAM ou de plateformes comme Medi-Trajet pour trouver un transporteur spécialisé."
        ],
      },
      {
        id: "ehpad-transport",
        title: "Transport médical et EHPAD",
        content: [
          "Les résidents d'EHPAD conservent leurs droits au transport médical remboursé pour les soins non dispensés dans l'établissement. Les consultations spécialisées, les examens d'imagerie, les hospitalisations et les soins itératifs (dialyse, chimiothérapie) donnent lieu à un transport remboursé.",
          "La prescription de transport est établie par le médecin coordonnateur de l'EHPAD ou par le médecin traitant du résident. L'EHPAD organise souvent le transport en collaboration avec un ou plusieurs transporteurs conventionnés habituels. Le résident reste libre de choisir son propre transporteur.",
          "L'APA (Allocation Personnalisée d'Autonomie) ne couvre pas le transport médical, qui relève de l'Assurance Maladie. En revanche, l'APA peut financer les déplacements non médicaux (courses, activités sociales) des personnes âgées dépendantes."
        ],
      },
      {
        id: "solutions-adaptees",
        title: "Solutions de transport adaptées aux seniors",
        content: [
          "Le taxi conventionné reste la solution la plus adaptée pour les personnes âgées : véhicule individuel, aide du chauffeur, confort, disponibilité. Pour les transports réguliers, établissez une relation de confiance avec le même chauffeur qui connaîtra les habitudes et les besoins du patient.",
          "Pour les personnes âgées à mobilité très réduite nécessitant un fauteuil roulant, des taxis conventionnés avec rampe d'accès ou plateau élévateur sont disponibles. Ces véhicules sont signalés comme « accessibles PMR » dans les annuaires de transporteurs conventionnés."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport médical pour les personnes âgées est-il gratuit ?",
        a: "Il est remboursé à 65 % ou 100 % selon la situation (ALD, CSS). Avec le tiers payant, la personne âgée n'avance pas les frais chez un transporteur conventionné.",
      },
      {
        q: "Un accompagnant peut-il voyager avec la personne âgée ?",
        a: "Oui, si le médecin prescrit la présence d'un accompagnant. L'accompagnant voyage dans le même véhicule sans surcoût en taxi conventionné.",
      },
      {
        q: "Les résidents d'EHPAD ont-ils droit au transport médical ?",
        a: "Oui, les résidents d'EHPAD conservent leurs droits au transport médical remboursé pour les soins non dispensés dans l'établissement.",
      },
    ],
    relatedGuides: [
      "guide-aidant-familial-transport",
      "remboursement-transport-cpam",
      "taxi-conventionne-comment-ca-marche",
      "ald-transport-medical",
      "choisir-transport-medical",
    ],
    relatedCities: ["paris", "lyon", "marseille"],
  },

  {
    slug: "transport-medical-enfant",
    title: "Transport médical pour les enfants : guide parents",
    description:
      "Transport médical pour les enfants : droits spécifiques, accompagnement parental, exonérations, néonatalogie, soins pédiatriques et conseils pratiques.",
    date: "2025-02-18",
    lastUpdated: "2025-04-02",
    readTime: "9 min",
    category: "Publics",
    answerBox:
      "Les enfants mineurs sont exonérés de la franchise médicale de 2 € sur le transport. Un accompagnant parental voyage sans surcoût. Le transport pour les soins pédiatriques est remboursé aux mêmes conditions que pour les adultes.",
    sections: [
      {
        id: "droits-enfants-transport",
        title: "Droits spécifiques des enfants pour le transport médical",
        content: [
          "Les enfants mineurs (moins de 18 ans) bénéficient d'une exonération totale de la franchise médicale de 2 € par trajet. Cette exonération est automatique et ne nécessite aucune démarche. C'est l'un des avantages spécifiques du transport médical pédiatrique.",
          "Le remboursement du transport pour les enfants suit les mêmes conditions que pour les adultes : prescription médicale, transporteur conventionné, motif éligible. Les enfants en ALD (mucoviscidose, diabète de type 1, cancer pédiatrique) bénéficient du remboursement à 100 %.",
          "Un parent ou un représentant légal peut accompagner l'enfant pendant le transport sans surcoût en taxi conventionné ou en VSL. Pour les ambulances, la présence d'un accompagnant est généralement autorisée et ne modifie pas la facturation."
        ],
      },
      {
        id: "transport-neonatologie",
        title: "Transport néonatal et pédiatrique spécialisé",
        content: [
          "Le transport néonatal concerne les nouveau-nés nécessitant un transfert vers un service de néonatalogie ou de réanimation néonatale. Ce transport est effectué en ambulance médicalisée (SMUR pédiatrique) avec un équipement spécifique : couveuse de transport, moniteur cardio-respiratoire, matériel de réanimation pédiatrique.",
          "Le coût du transport néonatal est intégralement pris en charge par l'Assurance Maladie dans le cadre de l'hospitalisation. Les parents n'ont aucune démarche à effectuer. Le transport est organisé par l'équipe médicale en coordination avec le SAMU.",
          "Pour les enfants hospitalisés en néonatalogie ou en pédiatrie, le transport des parents pour les visites n'est pas pris en charge par l'Assurance Maladie, sauf si le parent est lui-même en situation de soins (post-partum pour la mère)."
        ],
      },
      {
        id: "soins-pediatriques-reguliers",
        title: "Transport pour les soins pédiatriques réguliers",
        content: [
          "Les enfants atteints de maladies chroniques (mucoviscidose, diabète, épilepsie, asthme sévère) nécessitent des consultations régulières en centre spécialisé. Le transport est remboursé en ALD pour les soins en rapport avec la pathologie.",
          "Les enfants en situation de handicap (polyhandicap, troubles du spectre autistique, handicap moteur) bénéficient du transport vers les centres de soins spécialisés (CAMSP, SESSAD, IME). Le transport est prescrit par le médecin et remboursé selon les conditions habituelles.",
          "Pour les traitements itératifs pédiatriques (chimiothérapie, dialyse, rééducation), la prescription de transport couvre l'ensemble des séances. L'accompagnant parental est prévu sur la prescription."
        ],
      },
      {
        id: "conseils-parents",
        title: "Conseils pratiques pour les parents",
        content: [
          "Préparez un sac avec le nécessaire pour l'enfant : doudou, jeux, collation, change, carnet de santé, ordonnances, carte Vitale du parent assuré. Le trajet peut être stressant pour un enfant, surtout s'il est petit ou anxieux.",
          "Choisissez un taxi conventionné disposant d'un siège auto adapté à l'âge de votre enfant. La loi impose un dispositif de retenue pour les enfants de moins de 10 ans. Si le transporteur n'en dispose pas, apportez le vôtre.",
          "Pour les enfants anxieux face au transport médical, expliquez le déroulement du trajet et de la consultation de manière rassurante. La présence d'un parent dans le véhicule est essentielle pour le bien-être de l'enfant."
        ],
      },
    ],
    faq: [
      {
        q: "Les enfants paient-ils la franchise transport ?",
        a: "Non, les mineurs de moins de 18 ans sont exonérés de la franchise médicale de 2 € par trajet. L'exonération est automatique.",
      },
      {
        q: "Un parent peut-il accompagner son enfant dans le transport ?",
        a: "Oui, un parent ou représentant légal peut accompagner l'enfant sans surcoût en taxi conventionné, VSL ou ambulance.",
      },
      {
        q: "Le siège auto est-il fourni par le taxi conventionné ?",
        a: "Certains taxis conventionnés en disposent. Vérifiez lors de la réservation ou apportez votre propre siège auto adapté à l'âge de l'enfant.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "franchise-medicale-transport",
      "taxi-conventionne-comment-ca-marche",
      "ald-transport-medical",
    ],
  },

  {
    slug: "transport-medical-handicap",
    title: "Transport médical et handicap : droits et véhicules adaptés",
    description:
      "Transport médical pour les personnes en situation de handicap : véhicules adaptés PMR, droits renforcés, MDPH, dérogation transport partagé et prise en charge.",
    date: "2025-02-20",
    lastUpdated: "2025-04-03",
    readTime: "10 min",
    category: "Publics",
    answerBox:
      "Les personnes en situation de handicap bénéficient de transports médicaux adaptés (PMR) remboursés par la CPAM. Le fauteuil roulant est transporté sans surcoût. Une dérogation au transport partagé est possible sur prescription médicale.",
    sections: [
      {
        id: "droits-handicap-transport",
        title: "Droits des personnes handicapées au transport médical",
        content: [
          "Les personnes en situation de handicap bénéficient des mêmes droits au transport médical que tout assuré, avec des garanties supplémentaires liées à l'accessibilité. Le transport doit être adapté au type de handicap : véhicule accessible en fauteuil roulant, aide humaine pour la montée et la descente, espace suffisant pour les aides techniques.",
          "De nombreuses personnes handicapées sont en ALD (ALD n° 9 pour les paraparésies et parapégies, ALD n° 17 pour les maladies métaboliques héréditaires, etc.) et bénéficient à ce titre du remboursement à 100 %. Le transport est remboursé pour tous les soins en rapport avec l'ALD.",
          "La MDPH (Maison Départementale des Personnes Handicapées) ne finance pas directement le transport médical, qui relève de l'Assurance Maladie. En revanche, la PCH (Prestation de Compensation du Handicap) peut couvrir les surcoûts liés au transport non médical."
        ],
      },
      {
        id: "vehicules-adaptes",
        title: "Véhicules adaptés aux personnes handicapées",
        content: [
          "Les véhicules adaptés PMR (Personnes à Mobilité Réduite) sont des taxis conventionnés ou VSL équipés de rampes d'accès, plateaux élévateurs ou plancher surbaissé permettant l'accès en fauteuil roulant. Ces véhicules sont identifiés dans les annuaires de transporteurs conventionnés.",
          "Le fauteuil roulant est transporté sans surcoût pour le patient. Le transporteur doit disposer de l'espace et de l'arrimage nécessaires pour sécuriser le fauteuil pendant le trajet. Les fauteuils roulants électriques, plus lourds, nécessitent des véhicules spécifiquement adaptés.",
          "Pour les patients en fauteuil roulant, la prescription médicale doit mentionner le transport en fauteuil roulant afin que le transporteur prépare le véhicule adapté. Le médecin peut également prescrire un mode de transport spécifique (VSL PMR, taxi PMR, ambulance)."
        ],
      },
      {
        id: "derogation-partage-handicap",
        title: "Dérogation au transport partagé pour le handicap",
        content: [
          "Les personnes en situation de handicap peuvent bénéficier d'une dérogation au transport partagé si leur handicap le justifie. Les contre-indications incluent : l'encombrement du fauteuil roulant rendant le partage impossible, les troubles du comportement, l'hypersensibilité sensorielle, ou le besoin d'un accompagnement personnalisé pendant le trajet.",
          "Le médecin prescripteur coche la case « transport individuel médicalement justifié » sur le bon de transport et justifie la dérogation. La CPAM ne peut pas imposer le transport partagé à un patient dont le médecin a prescrit un transport individuel pour raison médicale.",
          "Depuis le décret de février 2025, le transport partagé est encouragé mais les dérogations pour raisons médicales restent possibles. Les patients en situation de handicap sont explicitement mentionnés parmi les publics pouvant bénéficier de la dérogation."
        ],
      },
      {
        id: "accessibilite-etablissements",
        title: "Accessibilité et continuité de la prise en charge",
        content: [
          "Le transport adapté ne s'arrête pas à la porte de l'établissement de santé. Le chauffeur de taxi conventionné ou l'ambulancier doit accompagner le patient handicapé jusqu'à l'accueil de l'établissement et, si nécessaire, l'aider dans les formalités d'enregistrement.",
          "En cas de difficultés d'accessibilité de l'établissement (absence d'ascenseur, portes trop étroites), le patient ou le transporteur peut signaler le problème à l'ARS (Agence Régionale de Santé) qui est chargée de veiller à l'accessibilité des établissements de santé."
        ],
      },
    ],
    faq: [
      {
        q: "Le fauteuil roulant est-il transporté sans surcoût ?",
        a: "Oui, le transport du fauteuil roulant est inclus dans le tarif conventionné. Le transporteur doit disposer de l'équipement pour l'arrimer en sécurité.",
      },
      {
        q: "Peut-on refuser le transport partagé en cas de handicap ?",
        a: "Oui, le médecin peut prescrire un transport individuel si le handicap le justifie. La CPAM ne peut pas imposer le transport partagé dans ce cas.",
      },
      {
        q: "Comment trouver un taxi conventionné adapté PMR ?",
        a: "Contactez votre CPAM, l'ARS ou des plateformes comme Medi-Trajet qui référencent les taxis conventionnés disposant de véhicules accessibles PMR.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "taxi-conventionne-comment-ca-marche",
      "obligation-transport-partage-2026",
      "droits-patients-transport-sanitaire",
      "choisir-transport-medical",
    ],
  },

  {
    slug: "transport-medical-grossesse",
    title: "Transport médical pendant la grossesse : droits et remboursement",
    description:
      "Transport médical pour les femmes enceintes : exonération franchise dès le 6e mois, remboursement des consultations, urgences obstétricales et maternité.",
    date: "2025-02-22",
    lastUpdated: "2025-04-03",
    readTime: "8 min",
    category: "Publics",
    answerBox:
      "Les femmes enceintes bénéficient de l'exonération de la franchise médicale à partir du 6e mois de grossesse. Le transport pour les consultations prénatales, l'accouchement et le suivi post-natal est remboursé à 100 % dès le 6e mois.",
    sections: [
      {
        id: "droits-grossesse-transport",
        title: "Droits des femmes enceintes au transport médical",
        content: [
          "À partir du 6e mois de grossesse (début du 6e mois), toutes les dépenses de santé sont prises en charge à 100 % par l'Assurance Maladie, y compris le transport médical. Cette prise en charge intégrale se poursuit jusqu'au 12e jour après l'accouchement.",
          "La franchise médicale de 2 € par trajet ne s'applique pas aux femmes enceintes à partir du 6e mois. Cette exonération est automatique dès que la déclaration de grossesse a été enregistrée par la CPAM. Pensez à déclarer votre grossesse à la CPAM avant la fin du 3e mois.",
          "Avant le 6e mois, le transport médical est remboursé aux conditions standard (65 % du tarif conventionné avec franchise). Le transport pour une consultation prénatale n'est pas remboursé sauf si la patiente remplit l'un des motifs d'éligibilité au transport (ALD, hospitalisation, etc.)."
        ],
      },
      {
        id: "grossesse-pathologique",
        title: "Transport et grossesse pathologique",
        content: [
          "En cas de grossesse pathologique (diabète gestationnel, pré-éclampsie, menace d'accouchement prématuré), le transport est remboursé à 100 % même avant le 6e mois si la pathologie est reconnue. Le médecin prescrit le transport en indiquant la grossesse pathologique comme motif.",
          "Les consultations chez les spécialistes (échographiste, cardiologue, endocrinologue) dans le cadre d'une grossesse pathologique donnent droit au transport remboursé. Le suivi renforcé peut impliquer des consultations hebdomadaires nécessitant un transport régulier.",
          "Le repos allongé prescrit lors d'une menace d'accouchement prématuré peut nécessiter un transport en ambulance pour les consultations de suivi. Le médecin prescrit alors le mode de transport adapté à la situation obstétricale."
        ],
      },
      {
        id: "accouchement-transport",
        title: "Transport pour l'accouchement",
        content: [
          "Le transport vers la maternité pour l'accouchement est remboursé à 100 %. En cas d'urgence, le SAMU organise le transport en ambulance médicalisée. Pour un accouchement programmé (déclenchement, césarienne), le transport est prescrit par le gynécologue-obstétricien.",
          "Le retour à domicile après l'accouchement est également pris en charge. Le mode de transport dépend de l'état de la mère : taxi conventionné pour un retour normal, ambulance en cas de césarienne récente ou de complications.",
          "Le transport du nouveau-né est inclus dans le transport de la mère. En cas de transfert du nouveau-né vers un autre établissement (néonatalogie, réanimation néonatale), un transport spécialisé est organisé par l'équipe médicale."
        ],
      },
      {
        id: "suivi-postnatal",
        title: "Transport pour le suivi postnatal",
        content: [
          "Le suivi postnatal (consultation post-natale, rééducation périnéale, suivi du nouveau-né) bénéficie de la prise en charge à 100 % jusqu'au 12e jour après l'accouchement. Au-delà, le remboursement revient au taux standard sauf si la patiente remplit d'autres conditions (ALD, CSS).",
          "La rééducation périnéale, prescrite après l'accouchement, peut nécessiter un transport si la patiente ne peut pas se déplacer seule. Le médecin évalue la nécessité du transport au cas par cas."
        ],
      },
    ],
    faq: [
      {
        q: "La franchise transport s'applique-t-elle pendant la grossesse ?",
        a: "Non, à partir du 6e mois de grossesse et jusqu'au 12e jour après l'accouchement, la franchise médicale de 2 € ne s'applique pas.",
      },
      {
        q: "Le transport est-il remboursé à 100 % pendant la grossesse ?",
        a: "Oui, à partir du 6e mois. Avant le 6e mois, le remboursement est au taux standard sauf en cas de grossesse pathologique reconnue.",
      },
      {
        q: "Le transport pour l'accouchement est-il pris en charge ?",
        a: "Oui, le transport vers la maternité est remboursé à 100 %. En urgence, le SAMU organise le transport en ambulance médicalisée.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "franchise-medicale-transport",
      "ambulance-quand-comment",
      "taxi-conventionne-comment-ca-marche",
    ],
  },

  {
    slug: "guide-aidant-familial-transport",
    title: "Guide de l'aidant familial pour le transport médical",
    description:
      "Tout ce que l'aidant familial doit savoir sur le transport médical de son proche : organisation, droits, accompagnement, aides financières et soutien.",
    date: "2025-02-25",
    lastUpdated: "2025-04-03",
    readTime: "10 min",
    category: "Publics",
    answerBox:
      "L'aidant familial joue un rôle clé dans l'organisation du transport médical de son proche. Il peut accompagner le patient sans surcoût, organiser les réservations et gérer les démarches administratives avec la CPAM.",
    sections: [
      {
        id: "role-aidant-transport",
        title: "Le rôle de l'aidant dans le transport médical",
        content: [
          "L'aidant familial (conjoint, enfant, parent, proche) est souvent le pivot de l'organisation du transport médical de la personne aidée. Il coordonne les rendez-vous médicaux, réserve les transports, prépare les documents et accompagne le patient le jour du trajet.",
          "L'aidant peut servir d'interlocuteur entre le patient, le médecin prescripteur, le transporteur et la CPAM. Cette coordination est essentielle pour les patients âgés, handicapés ou souffrant de troubles cognitifs qui ne peuvent pas gérer seuls les démarches administratives.",
          "Le statut d'aidant familial n'ouvre pas de droits spécifiques en matière de transport médical. Toutefois, l'aidant peut accompagner le patient pendant le transport si le médecin le prescrit, et il bénéficie du droit de représenter le patient dans les démarches administratives."
        ],
      },
      {
        id: "organiser-transport-aidant",
        title: "Organiser le transport en tant qu'aidant",
        content: [
          "Établissez un calendrier des rendez-vous médicaux de votre proche et planifiez les transports en avance. Pour les soins réguliers (dialyse, chimiothérapie), mettez en place un planning de transport récurrent avec le même transporteur conventionné.",
          "Préparez un dossier de transport comprenant les bons de transport, la carte Vitale, l'attestation de mutuelle, une copie du protocole ALD et une pièce d'identité. Gardez ce dossier prêt et à portée de main pour chaque transport.",
          "Identifiez les meilleurs transporteurs conventionnés de votre secteur. Testez-en plusieurs et retenez ceux qui offrent le meilleur service : ponctualité, aide au patient, conduite douce, patience. Le bouche-à-oreille entre aidants est une bonne source d'information.",
          "Utilisez des plateformes numériques comme Medi-Trajet pour simplifier la réservation et le suivi des transports. Ces outils permettent de réserver en quelques clics, de suivre le véhicule en temps réel et de gérer l'historique des transports."
        ],
      },
      {
        id: "accompagnement-aidant",
        title: "Accompagner son proche pendant le transport",
        content: [
          "L'accompagnement par un aidant pendant le transport médical peut être prescrit par le médecin si l'état du patient le justifie : désorientation, troubles du comportement, angoisse, besoin d'aide aux actes de la vie quotidienne. L'accompagnant voyage sans surcoût en taxi conventionné.",
          "Si vous accompagnez votre proche, profitez du trajet pour le rassurer et le préparer à la consultation. Notez les questions à poser au médecin, préparez la liste des médicaments en cours et les résultats d'examens récents.",
          "L'aidant qui utilise son propre véhicule pour transporter son proche peut obtenir le remboursement des indemnités kilométriques si une prescription de transport en véhicule personnel est établie par le médecin. Le tarif est d'environ 0,30 € par km."
        ],
      },
      {
        id: "soutien-aidant",
        title: "Soutien et droits de l'aidant familial",
        content: [
          "Le droit au répit permet à l'aidant de confier temporairement son proche à un tiers (accueil de jour, hébergement temporaire) pour se reposer. Le transport vers ces structures de répit est remboursé si une prescription médicale est établie.",
          "Les associations d'aidants (France Alzheimer, APF France handicap, UNAF) proposent des groupes de parole, des formations et des conseils pratiques, y compris sur l'organisation du transport médical. N'hésitez pas à les solliciter.",
          "L'aidant salarié bénéficie du congé de proche aidant (jusqu'à 3 mois, renouvelable), qui lui permet de se consacrer à l'accompagnement de son proche, notamment pour les transports médicaux fréquents."
        ],
      },
    ],
    faq: [
      {
        q: "L'aidant peut-il accompagner le patient dans le transport ?",
        a: "Oui, si le médecin le prescrit. L'aidant voyage sans surcoût en taxi conventionné. Le médecin justifie la nécessité de la présence d'un accompagnant.",
      },
      {
        q: "L'aidant peut-il gérer les démarches CPAM pour son proche ?",
        a: "Oui, l'aidant peut représenter le patient auprès de la CPAM, réserver les transports et gérer les documents administratifs.",
      },
      {
        q: "L'aidant est-il indemnisé pour le transport en véhicule personnel ?",
        a: "Si le médecin prescrit un transport en véhicule personnel, les indemnités kilométriques (environ 0,30 €/km) sont remboursées par la CPAM.",
      },
    ],
    relatedGuides: [
      "transport-medical-personne-agee",
      "transport-medical-handicap",
      "preparer-transport-medical",
      "documents-transport-medical",
      "taxi-conventionne-comment-ca-marche",
    ],
  },

  {
    slug: "transport-medical-etranger-france",
    title: "Transport médical pour les étrangers en France : droits et accès",
    description:
      "Transport médical pour les étrangers en France : droits selon le statut (AME, CEAM, touriste), remboursement, urgences et démarches administratives.",
    date: "2025-02-28",
    lastUpdated: "2025-04-03",
    readTime: "9 min",
    category: "Publics",
    answerBox:
      "Les étrangers en France ont droit au transport médical d'urgence. Les bénéficiaires de l'AME et les titulaires de la CEAM bénéficient du transport remboursé. Les touristes sans couverture avancent les frais et demandent le remboursement à leur pays d'origine.",
    sections: [
      {
        id: "droits-selon-statut",
        title: "Droits au transport médical selon le statut",
        content: [
          "Les droits au transport médical en France dépendent du statut de séjour de la personne étrangère. Les résidents étrangers en situation régulière affiliés à l'Assurance Maladie française bénéficient des mêmes droits que tout assuré : remboursement, tiers payant, ALD, etc.",
          "Les bénéficiaires de l'AME (Aide Médicale de l'État), destinée aux étrangers en situation irrégulière résidant en France depuis plus de 3 mois, bénéficient du transport médical remboursé à 100 % sans franchise. Le tiers payant est obligatoire pour les bénéficiaires de l'AME.",
          "Les ressortissants européens titulaires de la CEAM (Carte Européenne d'Assurance Maladie) bénéficient du transport médical dans les mêmes conditions que les assurés français. La CEAM couvre les soins médicalement nécessaires, y compris le transport d'urgence.",
          "Les touristes et visiteurs étrangers sans couverture sociale française ni CEAM doivent avancer les frais de transport médical. Ils peuvent demander le remboursement à leur organisme d'assurance ou d'assurance voyage dans leur pays d'origine."
        ],
      },
      {
        id: "urgences-etrangers",
        title: "Transport d'urgence pour les étrangers",
        content: [
          "Le transport d'urgence est garanti pour toute personne présente sur le territoire français, quel que soit son statut administratif. Le SAMU (15) prend en charge tout patient en situation d'urgence vitale, sans condition de nationalité ni de couverture sociale.",
          "Le coût du transport d'urgence pour un étranger sans couverture sociale est facturé à l'intéressé. En cas d'impossibilité de paiement, l'hôpital peut faire appel au dispositif de soins urgents et vitaux (DSUV) qui permet la prise en charge des soins inopinés des personnes sans droits ouverts.",
          "Les étudiants étrangers affiliés à la Sécurité sociale étudiante bénéficient du transport médical remboursé aux conditions standard. Ils doivent présenter leur carte Vitale ou une attestation de droits lors du transport."
        ],
      },
      {
        id: "ame-transport",
        title: "Transport médical et AME",
        content: [
          "Les bénéficiaires de l'AME ont droit au transport médical prescrit par un médecin, remboursé à 100 % sans franchise. Le tiers payant est automatique avec les transporteurs conventionnés. L'AME couvre le taxi conventionné, le VSL et l'ambulance.",
          "La demande d'AME se fait auprès de la CPAM sur le formulaire Cerfa n° 11573. L'AME est accordée pour un an renouvelable. En attendant l'ouverture des droits AME, le dispositif de soins urgents et vitaux prend en charge les soins et transports urgents.",
          "Les bénéficiaires de l'AME qui souhaitent utiliser un transport médical doivent, comme tout assuré, disposer d'une prescription médicale et utiliser un transporteur conventionné. La seule différence est la prise en charge à 100 % sans franchise."
        ],
      },
      {
        id: "ceam-transport",
        title: "CEAM et transport médical en France",
        content: [
          "La CEAM permet aux ressortissants de l'EEE (Espace Économique Européen) et de la Suisse de bénéficier des soins médicalement nécessaires en France, y compris le transport sanitaire. Le patient présente sa CEAM au transporteur et à l'établissement de santé.",
          "Le remboursement s'effectue selon les tarifs français. Le patient peut avancer les frais puis demander le remboursement à sa caisse d'assurance maladie d'origine, ou bénéficier du tiers payant si le transporteur accepte la CEAM."
        ],
      },
    ],
    faq: [
      {
        q: "Un étranger sans papiers a-t-il droit au transport médical ?",
        a: "En urgence, oui. Pour les soins programmés, les bénéficiaires de l'AME (résidant en France depuis 3 mois) ont droit au transport remboursé à 100 %.",
      },
      {
        q: "La CEAM couvre-t-elle le transport médical en France ?",
        a: "Oui, la CEAM couvre le transport médicalement nécessaire en France pour les ressortissants européens, dans les mêmes conditions que les assurés français.",
      },
      {
        q: "Comment obtenir l'AME pour le transport médical ?",
        a: "La demande d'AME se fait auprès de la CPAM sur le Cerfa n° 11573. L'AME est accordée pour un an et donne droit au transport remboursé à 100 %.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "css-transport-medical",
      "droits-patients-transport-sanitaire",
      "ambulance-quand-comment",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CLUSTER 5 — Réglementation (5 guides)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: "decret-fevrier-2025-transport-partage",
    title: "Décret février 2025 sur le transport partagé : décryptage complet",
    description:
      "Analyse du décret de février 2025 sur le transport sanitaire partagé : nouvelles obligations, calendrier, impact patients et transporteurs, dérogations médicales.",
    date: "2025-03-01",
    lastUpdated: "2025-04-01",
    readTime: "12 min",
    category: "Réglementation",
    answerBox:
      "Le décret de février 2025 instaure le transport partagé obligatoire pour les soins itératifs à partir de 2026. Les patients pourront partager un VSL ou un taxi conventionné, sauf contre-indication médicale. Des dérogations sont prévues.",
    sections: [
      {
        id: "contenu-decret",
        title: "Contenu du décret de février 2025",
        content: [
          "Le décret relatif au transport sanitaire partagé publié en février 2025 modifie l'article R.322-10 du Code de la Sécurité sociale. Il introduit l'obligation du transport partagé pour les soins itératifs à compter du 1er janvier 2026, avec une phase de mise en œuvre progressive en 2025.",
          "Le transport partagé consiste à regrouper plusieurs patients dans un même véhicule sanitaire (VSL ou taxi conventionné) pour des trajets vers le même établissement de santé ou des établissements proches géographiquement. L'objectif est de réduire le nombre de trajets à vide et de diminuer le coût global du transport sanitaire pour l'Assurance Maladie.",
          "Le décret définit les soins itératifs concernés : dialyse, chimiothérapie, radiothérapie, rééducation fonctionnelle, et tout traitement nécessitant au moins 4 transports sur 2 mois. Les transports ponctuels (consultations isolées, hospitalisations) ne sont pas concernés.",
          "Le texte prévoit un mécanisme d'incitation financière pour les transporteurs : une prime de coordination est versée aux sociétés de transport qui organisent effectivement le transport partagé. Cette prime compense le temps supplémentaire de coordination et d'organisation."
        ],
      },
      {
        id: "calendrier-mise-en-oeuvre",
        title: "Calendrier de mise en œuvre",
        content: [
          "La mise en œuvre du décret suit un calendrier progressif. En 2025, le transport partagé est encouragé mais non obligatoire. Les ARS et les CPAM mettent en place les plateformes de coordination nécessaires. Les transporteurs s'équipent des outils de planification.",
          "À partir du 1er janvier 2026, le transport partagé devient la règle pour les soins itératifs. Les prescriptions de transport pour soins itératifs devront mentionner si le transport partagé est possible ou si une dérogation est médicalement justifiée.",
          "Une évaluation du dispositif est prévue au 30 juin 2026 pour mesurer l'impact sur la qualité de service, la satisfaction des patients et les économies réalisées. Des ajustements réglementaires pourront être apportés en fonction des résultats."
        ],
      },
      {
        id: "derogations-prevues",
        title: "Dérogations au transport partagé",
        content: [
          "Le décret prévoit des dérogations au transport partagé pour les patients dont l'état de santé est incompatible avec le partage du véhicule. Les contre-indications reconnues incluent : l'immunodépression sévère (risque infectieux), les troubles psychiatriques (anxiété sociale, phobies), le handicap lourd nécessitant un véhicule adapté, et la douleur chronique rendant le trajet prolongé insupportable.",
          "Le médecin prescripteur évalue la compatibilité du patient avec le transport partagé et coche la case appropriée sur le bon de transport. La mention « transport individuel médicalement justifié » doit être accompagnée d'une justification médicale. La CPAM peut demander des précisions au médecin.",
          "Les patients de moins de 16 ans accompagnés d'un parent et les patients en soins palliatifs bénéficient d'une dérogation automatique au transport partagé. Aucune justification médicale supplémentaire n'est nécessaire pour ces publics."
        ],
      },
      {
        id: "impact-patients",
        title: "Impact pour les patients",
        content: [
          "Pour les patients en transport partagé, le temps de trajet sera allongé de 15 à 30 minutes en moyenne en raison du ramassage et de la dépose de plusieurs patients. Le trajet reste gratuit (tiers payant) et la qualité du transport doit être maintenue.",
          "Les patients conservent la prise en charge à 100 % en ALD et ne subissent aucun surcoût lié au transport partagé. Le tarif est identique que le transport soit partagé ou individuel. Seule l'organisation du trajet change.",
          "Le libre choix du transporteur est maintenu. Toutefois, le transporteur choisi doit être en mesure d'organiser le transport partagé. Certains transporteurs pourront se spécialiser dans le transport individuel (avec dérogation médicale) et d'autres dans le transport partagé."
        ],
      },
      {
        id: "impact-transporteurs",
        title: "Impact pour les transporteurs",
        content: [
          "Les transporteurs doivent adapter leur organisation pour gérer le transport partagé : logiciels de planification, coordination avec les établissements de santé, gestion des plannings multi-patients. La prime de coordination prévue par le décret vise à compenser ces coûts d'adaptation.",
          "Les sociétés de VSL sont les mieux positionnées pour le transport partagé, leurs véhicules étant déjà conçus pour accueillir plusieurs patients. Les taxis conventionnés devront éventuellement adapter leur offre pour proposer des véhicules plus spacieux (monospaces, berlines familiales)."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport partagé est-il déjà obligatoire ?",
        a: "Non, en 2025 il est encouragé mais pas obligatoire. L'obligation entre en vigueur le 1er janvier 2026 pour les soins itératifs.",
      },
      {
        q: "Peut-on refuser le transport partagé ?",
        a: "Oui, avec une dérogation médicale. Le médecin justifie la contre-indication (immunodépression, handicap, troubles psy). Les soins palliatifs sont exemptés automatiquement.",
      },
      {
        q: "Le transport partagé coûte-t-il moins cher au patient ?",
        a: "Non, le tarif est identique pour le patient. Le transport partagé vise à réduire les coûts pour l'Assurance Maladie, pas le reste à charge du patient.",
      },
      {
        q: "Quels soins sont concernés par le transport partagé ?",
        a: "La dialyse, la chimiothérapie, la radiothérapie, la rééducation et tout traitement nécessitant au moins 4 transports sur 2 mois.",
      },
    ],
    relatedGuides: [
      "obligation-transport-partage-2026",
      "reforme-transport-sanitaire-2025",
      "transport-dialyse",
      "transport-radiotherapie",
      "droits-patients-transport-sanitaire",
    ],
  },

  {
    slug: "reforme-transport-sanitaire-2025",
    title: "Réforme du transport sanitaire 2025 : tout ce qui change",
    description:
      "Panorama complet de la réforme du transport sanitaire 2025 : transport partagé, plateformes de réservation, nouvelles obligations et impact sur les patients.",
    date: "2025-03-05",
    lastUpdated: "2025-04-02",
    readTime: "11 min",
    category: "Réglementation",
    answerBox:
      "La réforme 2025 du transport sanitaire introduit le transport partagé obligatoire, les plateformes numériques de réservation et de nouvelles règles de conventionnement. Elle vise à réduire les coûts tout en maintenant la qualité de service.",
    sections: [
      {
        id: "contexte-reforme",
        title: "Contexte de la réforme du transport sanitaire",
        content: [
          "Le transport sanitaire représente un poste de dépenses croissant pour l'Assurance Maladie : plus de 5 milliards d'euros en 2024, en hausse de 4 % par an. La réforme de 2025 vise à maîtriser cette progression tout en garantissant l'accès aux soins des patients les plus fragiles.",
          "Les principales problématiques identifiées sont les trajets à vide (un transporteur sur deux revient à vide après avoir déposé un patient), le manque de coordination entre prescripteurs, transporteurs et établissements de santé, et l'absence de plateforme centralisée de réservation dans la plupart des départements.",
          "La réforme s'inscrit dans la continuité des travaux de l'IGAS (Inspection Générale des Affaires Sociales) et de la Cour des comptes, qui ont recommandé une restructuration du secteur pour gagner en efficience sans réduire la qualité de prise en charge des patients."
        ],
      },
      {
        id: "axes-reforme",
        title: "Les axes majeurs de la réforme",
        content: [
          "Le premier axe est le transport partagé, rendu obligatoire pour les soins itératifs à partir de 2026. Ce dispositif vise à optimiser le taux de remplissage des véhicules et à réduire le nombre de trajets. Le décret de février 2025 en fixe les modalités.",
          "Le deuxième axe est la mise en place de plateformes numériques de réservation et de coordination du transport sanitaire. Ces plateformes, déployées par les ARS en lien avec les CPAM, permettront de centraliser les demandes de transport et d'optimiser l'affectation des véhicules.",
          "Le troisième axe concerne le renforcement du conventionnement : critères de qualité renforcés, formation obligatoire des chauffeurs, contrôles de conformité plus fréquents et sanctions en cas de manquement. L'objectif est de professionnaliser le secteur.",
          "Le quatrième axe porte sur la dématérialisation des documents : bon de transport électronique, facturation 100 % dématérialisée, suivi en temps réel des transports. Cette digitalisation vise à simplifier les démarches et à réduire les délais de remboursement."
        ],
      },
      {
        id: "plateformes-numeriques",
        title: "Les plateformes numériques de transport sanitaire",
        content: [
          "Les plateformes numériques de transport sanitaire permettront aux patients, aux professionnels de santé et aux établissements de réserver un transport en ligne, de suivre le véhicule en temps réel et de gérer la facturation de manière dématérialisée.",
          "Ces plateformes intégreront un algorithme d'optimisation qui proposera automatiquement le transport partagé lorsque des patients se rendant au même endroit à des horaires proches sont identifiés. Le patient pourra accepter ou refuser le transport partagé (sauf obligation réglementaire).",
          "Des plateformes privées comme Medi-Trajet anticipent cette évolution en proposant déjà des services de réservation en ligne, de géolocalisation et de tiers payant dématérialisé. Ces acteurs contribuent à la modernisation du secteur."
        ],
      },
      {
        id: "impact-reforme",
        title: "Impact de la réforme sur les acteurs",
        content: [
          "Pour les patients, la réforme promet une simplification des démarches (réservation en ligne, bon de transport dématérialisé) et une meilleure coordination des transports. Le transport partagé peut allonger le temps de trajet mais maintient la gratuité et la qualité.",
          "Pour les transporteurs, la réforme implique des investissements en outils numériques (logiciel de planification, GPS, terminal de facturation) et une adaptation de l'organisation pour gérer le transport partagé. La prime de coordination vise à accompagner cette transition.",
          "Pour les établissements de santé, la réforme encourage la mise en place de bureaux de coordination des transports ou le recours à des plateformes dédiées pour optimiser les flux de patients transportés."
        ],
      },
    ],
    faq: [
      {
        q: "Quand la réforme du transport sanitaire entre-t-elle en vigueur ?",
        a: "Les mesures sont mises en place progressivement en 2025, avec l'obligation du transport partagé au 1er janvier 2026.",
      },
      {
        q: "Le bon de transport va-t-il devenir numérique ?",
        a: "Oui, la dématérialisation du bon de transport est prévue dans la réforme. Le format papier restera possible pendant la période de transition.",
      },
      {
        q: "La réforme réduit-elle les droits des patients ?",
        a: "Non, la réforme maintient tous les droits existants (remboursement, tiers payant, libre choix). Elle impose le transport partagé avec des dérogations médicales.",
      },
    ],
    relatedGuides: [
      "decret-fevrier-2025-transport-partage",
      "obligation-transport-partage-2026",
      "plateforme-transport-etablissements-sante",
      "droits-patients-transport-sanitaire",
    ],
  },

  {
    slug: "droits-patients-transport-sanitaire",
    title: "Droits des patients en transport sanitaire : guide juridique",
    description:
      "Vos droits en tant que patient transporté : libre choix du transporteur, qualité de service, confidentialité, recours et obligations du transporteur conventionné.",
    date: "2025-03-08",
    lastUpdated: "2025-04-03",
    readTime: "10 min",
    category: "Réglementation",
    answerBox:
      "Les patients en transport sanitaire ont droit au libre choix du transporteur, au tiers payant, à la confidentialité médicale, à la qualité de service et à la possibilité de recours en cas de manquement du transporteur.",
    sections: [
      {
        id: "libre-choix-transporteur",
        title: "Le droit au libre choix du transporteur",
        content: [
          "Le patient a le droit de choisir librement son transporteur conventionné. Aucun établissement de santé, aucun médecin, aucune CPAM ne peut imposer un transporteur particulier. Ce principe de libre choix est garanti par l'article L.162-4-1 du Code de la Sécurité sociale.",
          "En pratique, les établissements de santé disposent souvent de listes de transporteurs conventionnés qu'ils recommandent. Ces recommandations ne sont pas contraignantes : le patient peut faire appel à tout transporteur conventionné de son département, voire d'un département voisin.",
          "Le libre choix implique également le droit de changer de transporteur à tout moment, même en cours de traitement itératif. Si le service d'un transporteur ne vous satisfait pas, vous êtes libre d'en choisir un autre sans justification."
        ],
      },
      {
        id: "qualite-service",
        title: "Le droit à la qualité de service",
        content: [
          "Le transporteur conventionné est tenu à une obligation de qualité de service définie par la convention CPAM. Cette obligation couvre la ponctualité (arrivée à l'heure convenue, marge de 15 minutes maximum), le confort du véhicule (propreté, température, suspension), et le comportement du chauffeur (courtoisie, aide au patient, discrétion).",
          "Le chauffeur doit aider le patient à monter et descendre du véhicule, porter ses effets personnels si nécessaire, et l'accompagner jusqu'à l'accueil de l'établissement de santé. Pour les patients en fauteuil roulant, le chauffeur assure la manipulation et l'arrimage du fauteuil.",
          "La conduite doit être adaptée à l'état du patient : vitesse modérée, accélérations et freinages doux, évitement des routes dégradées. Le chauffeur doit s'adapter aux éventuelles consignes médicales (position assise inclinée, arrêts fréquents, etc.)."
        ],
      },
      {
        id: "confidentialite-transport",
        title: "Le droit à la confidentialité",
        content: [
          "Le transporteur est soumis au secret professionnel concernant l'état de santé du patient, sa destination et la nature de ses soins. Il ne peut divulguer aucune information médicale à des tiers, même à des membres de la famille du patient sans son accord.",
          "Les documents de transport (bon de transport, facture) contiennent des données personnelles de santé et sont soumis au RGPD. Le transporteur doit les conserver de manière sécurisée et les détruire après le délai légal de conservation (3 ans).",
          "En cas de transport partagé, la confidentialité doit être particulièrement respectée. Les patients partageant le véhicule ne doivent pas avoir accès aux informations médicales des autres patients. Le chauffeur ne doit pas évoquer l'état de santé d'un patient devant les autres."
        ],
      },
      {
        id: "recours-patient",
        title: "Les voies de recours du patient",
        content: [
          "En cas de manquement du transporteur (retard excessif, comportement inapproprié, surfacturation), le patient peut adresser une réclamation à la CPAM qui a conventionné le transporteur. La CPAM peut adresser un avertissement au transporteur, voire résilier sa convention en cas de manquements graves.",
          "Le patient peut également saisir le médiateur de l'Assurance Maladie pour tenter une résolution amiable du litige. Le médiateur est un interlocuteur neutre qui peut faciliter le dialogue entre le patient et la CPAM.",
          "Pour les litiges graves (accident, préjudice corporel, atteinte à la dignité), le patient peut saisir le tribunal judiciaire pour obtenir réparation. L'assurance professionnelle du transporteur couvre les dommages causés au patient pendant le transport."
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on imposer un transporteur au patient ?",
        a: "Non, le libre choix du transporteur est un droit garanti. Aucun établissement ni médecin ne peut imposer un transporteur particulier au patient.",
      },
      {
        q: "Le transporteur peut-il parler de mon état de santé ?",
        a: "Non, le transporteur est soumis au secret professionnel. Il ne peut divulguer aucune information sur votre état de santé ou la nature de vos soins.",
      },
      {
        q: "Comment signaler un problème avec un transporteur ?",
        a: "Adressez une réclamation écrite à votre CPAM. Elle peut sanctionner le transporteur. Vous pouvez aussi saisir le médiateur de l'Assurance Maladie.",
      },
    ],
    relatedGuides: [
      "recours-refus-transport-cpam",
      "depassement-transport-refus-cpam",
      "taxi-conventionne-comment-ca-marche",
      "guide-ultime-transport-medical-france",
    ],
  },

  {
    slug: "obligation-transport-partage-2026",
    title: "Transport partagé obligatoire 2026 : ce qui vous attend",
    description:
      "Tout savoir sur l'obligation du transport partagé en 2026 : soins concernés, dérogations, impact sur les patients dialysés et cancéreux, calendrier précis.",
    date: "2025-03-10",
    lastUpdated: "2025-04-03",
    readTime: "9 min",
    category: "Réglementation",
    answerBox:
      "À partir du 1er janvier 2026, le transport partagé devient obligatoire pour les soins itératifs (dialyse, chimio, radiothérapie). Les patients partagent un VSL ou un taxi avec d'autres patients, sauf dérogation médicale.",
    sections: [
      {
        id: "obligation-2026",
        title: "L'obligation de transport partagé au 1er janvier 2026",
        content: [
          "Le décret de février 2025 fixe au 1er janvier 2026 l'entrée en vigueur de l'obligation du transport partagé pour les soins itératifs. Les patients effectuant au moins 4 transports de plus de 50 km aller sur 2 mois pour un même traitement devront partager leur véhicule de transport avec d'autres patients.",
          "Cette obligation concerne les transports en VSL et en taxi conventionné. Les ambulances ne sont pas concernées car elles transportent des patients nécessitant un transport allongé, incompatible avec le partage. Le véhicule personnel n'est pas non plus concerné.",
          "Les prescriptions de transport établies à partir du 1er janvier 2026 devront mentionner explicitement si le transport partagé est prescrit ou si une dérogation médicale est accordée. Les prescriptions antérieures à cette date ne sont pas concernées."
        ],
      },
      {
        id: "soins-concernes",
        title: "Quels soins sont concernés ?",
        content: [
          "Les soins principalement concernés sont la dialyse (3 séances/semaine), la radiothérapie (séances quotidiennes sur plusieurs semaines), la chimiothérapie (séances régulières sur plusieurs mois), et la rééducation fonctionnelle intensive (séances plurihebdomadaires).",
          "Plus largement, tout traitement itératif nécessitant au moins 4 transports de plus de 50 km aller sur 2 mois est concerné. Cela peut inclure la kinésithérapie en centre, les soins de suite ambulatoires, ou les traitements psychiatriques en hôpital de jour.",
          "Les transports ponctuels (consultation unique, hospitalisation, urgence) ne sont pas concernés par l'obligation. Les transports de moins de 50 km aller ne sont pas non plus concernés, même s'ils sont itératifs."
        ],
      },
      {
        id: "derogations-2026",
        title: "Les dérogations en 2026",
        content: [
          "Le médecin prescripteur peut accorder une dérogation au transport partagé pour les patients dont l'état de santé est incompatible avec le partage du véhicule. La dérogation est individuelle et médicalement justifiée. Elle est valable pour la durée du traitement prescrit.",
          "Les motifs de dérogation reconnus incluent : l'immunodépression sévère (chimiothérapie, greffe), les troubles psychiatriques (anxiété sociale, agoraphobie), le handicap lourd (fauteuil roulant encombrant, appareillage), la douleur chronique, et les soins palliatifs.",
          "Les enfants de moins de 16 ans accompagnés d'un parent bénéficient d'une dérogation automatique. Les patients en soins palliatifs sont également exemptés automatiquement. Aucune justification médicale supplémentaire n'est requise pour ces deux catégories."
        ],
      },
      {
        id: "preparation-patients",
        title: "Comment se préparer en tant que patient",
        content: [
          "Si vous effectuez des transports itératifs, renseignez-vous dès maintenant auprès de votre transporteur conventionné sur sa capacité à organiser le transport partagé. Certains transporteurs mettent déjà en place des tournées de transport partagé pour anticiper l'obligation.",
          "Discutez avec votre médecin de votre éligibilité à une dérogation si vous pensez que le transport partagé n'est pas adapté à votre situation. Le médecin évaluera votre état de santé et vos besoins spécifiques pour décider de la dérogation.",
          "Le transport partagé peut être une expérience positive : de nombreux patients apprécient le lien social avec d'autres patients partageant une situation similaire. Gardez l'esprit ouvert et testez le transport partagé si vous n'avez pas de contre-indication."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport partagé est-il obligatoire en 2025 ?",
        a: "Non, en 2025 le transport partagé est encouragé mais pas obligatoire. L'obligation entre en vigueur le 1er janvier 2026 pour les soins itératifs.",
      },
      {
        q: "Les patients dialysés sont-ils concernés par l'obligation ?",
        a: "Oui, la dialyse est un soin itératif concerné. Toutefois, des dérogations sont possibles si l'état de santé du patient le justifie.",
      },
      {
        q: "Combien de patients partagent le véhicule ?",
        a: "En général 2 à 3 patients par véhicule. Le nombre dépend de la capacité du véhicule, des itinéraires et des horaires de chaque patient.",
      },
    ],
    relatedGuides: [
      "decret-fevrier-2025-transport-partage",
      "transport-dialyse",
      "transport-radiotherapie",
      "transport-chimiotherapie",
      "droits-patients-transport-sanitaire",
    ],
  },

  {
    slug: "guide-ultime-transport-medical-france",
    title: "Le guide ultime du transport médical en France (2025)",
    description:
      "Le guide le plus complet sur le transport médical en France : réglementation, remboursement, types de véhicules, démarches, droits des patients et réforme 2025.",
    date: "2025-01-01",
    lastUpdated: "2025-04-03",
    readTime: "20 min",
    category: "Réglementation",
    answerBox:
      "Le transport médical en France est un droit pour les patients nécessitant un déplacement vers un lieu de soins. Il est remboursé par la CPAM sur prescription médicale, à 65 % ou 100 % selon la situation du patient.",
    sections: [
      {
        id: "definition-transport-medical",
        title: "Qu'est-ce que le transport médical ?",
        content: [
          "Le transport médical désigne le déplacement d'un patient entre son domicile et un lieu de soins (hôpital, clinique, centre de dialyse, cabinet spécialisé) dans le cadre d'une prise en charge sanitaire. En France, ce transport est organisé et régulé par l'Assurance Maladie, qui en assure le remboursement sous conditions.",
          "Le cadre juridique du transport médical repose sur l'article L.322-5 du Code de la Sécurité sociale, qui définit les conditions de prise en charge. Plusieurs arrêtés et décrets précisent les tarifs, les modalités de conventionnement des transporteurs et les obligations de chaque acteur.",
          "Le transport médical concerne environ 6 millions de patients en France, pour un coût total de plus de 5 milliards d'euros par an. C'est le 4e poste de dépenses de l'Assurance Maladie, après l'hospitalisation, les médicaments et les soins de ville."
        ],
      },
      {
        id: "modes-transport-vue-ensemble",
        title: "Les modes de transport médical",
        content: [
          "L'ambulance est le mode de transport le plus médicalisé. Elle est prescrite pour les patients nécessitant un transport allongé ou une surveillance médicale. L'équipage comprend un ambulancier DEA et un auxiliaire. Le tarif moyen est de 80 à 120 € l'aller-retour.",
          "Le VSL (Véhicule Sanitaire Léger) transporte les patients assis, avec possibilité de transport partagé. Le chauffeur est auxiliaire ambulancier. Le tarif moyen est de 30 à 40 € l'aller-retour. C'est le mode le plus économique.",
          "Le taxi conventionné transporte les patients assis dans un véhicule de tourisme. Il offre le meilleur confort et une disponibilité 24h/24. Le tarif moyen est de 55 à 70 € l'aller-retour. C'est le mode le plus utilisé pour les patients autonomes.",
          "Le véhicule personnel peut être utilisé pour le transport médical. Le remboursement se fait sous forme d'indemnités kilométriques (0,30 €/km environ). C'est l'option la moins coûteuse pour l'Assurance Maladie."
        ],
      },
      {
        id: "conditions-remboursement-vue-ensemble",
        title: "Conditions de remboursement",
        content: [
          "Le remboursement du transport médical est soumis à une prescription médicale (Cerfa S3138) établie par un médecin. Le motif du transport doit correspondre à l'un des cas prévus par la réglementation : ALD, hospitalisation, accident du travail, convocation CPAM, ou transport de plus de 150 km.",
          "Le taux de remboursement est de 65 % pour le régime général, 100 % en ALD, accident du travail, maternité (6e mois), CSS et invalidité. La franchise médicale de 2 € par trajet s'applique sauf pour les bénéficiaires de la CSS et les mineurs.",
          "Le tiers payant dispense le patient d'avancer les frais. Le transporteur conventionné facture directement la CPAM. Le patient n'a qu'à présenter sa carte Vitale et son bon de transport."
        ],
      },
      {
        id: "reforme-2025-resume",
        title: "La réforme de 2025 en bref",
        content: [
          "La réforme 2025 du transport sanitaire introduit quatre changements majeurs : le transport partagé obligatoire pour les soins itératifs (2026), les plateformes numériques de réservation, le renforcement du conventionnement et la dématérialisation des documents.",
          "Le transport partagé vise à réduire le nombre de trajets et le coût global. Des dérogations médicales sont prévues pour les patients dont l'état de santé est incompatible avec le partage. Les soins palliatifs et les enfants accompagnés sont exemptés automatiquement.",
          "La dématérialisation du bon de transport simplifiera les démarches pour les patients et les transporteurs. La facturation 100 % électronique réduira les délais de remboursement."
        ],
      },
      {
        id: "conseils-generaux",
        title: "Conseils pratiques pour les patients",
        content: [
          "Faites établir votre prescription de transport avant le jour du trajet. Vérifiez que le transporteur est conventionné. Présentez votre carte Vitale à jour. Conservez tous les documents pendant 2 ans. Signalez tout problème à votre CPAM.",
          "Pour les transports réguliers, établissez une relation de confiance avec un taxi conventionné fiable. Utilisez les plateformes de réservation en ligne pour simplifier vos démarches. N'hésitez pas à tester plusieurs transporteurs avant de vous fixer.",
          "Si vous êtes en difficulté financière, vérifiez votre éligibilité à la CSS (Complémentaire Santé Solidaire) qui vous exonère de la franchise et du ticket modérateur. Les services sociaux hospitaliers peuvent vous accompagner dans ces démarches."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport médical est-il un droit en France ?",
        a: "Oui, le transport médical est un droit inscrit dans le Code de la Sécurité sociale. Il est remboursé sur prescription médicale pour les motifs éligibles.",
      },
      {
        q: "Combien coûte le transport médical en France ?",
        a: "Le coût moyen est de 30 à 40 € en VSL, 55 à 70 € en taxi conventionné et 80 à 120 € en ambulance pour un aller-retour de 30 km. Il est remboursé à 65 % ou 100 %.",
      },
      {
        q: "Quelles sont les nouveautés 2025 pour le transport médical ?",
        a: "La réforme 2025 introduit le transport partagé obligatoire (2026), les plateformes numériques et la dématérialisation du bon de transport.",
      },
      {
        q: "Faut-il toujours un bon de transport ?",
        a: "Oui, la prescription médicale (Cerfa S3138) est obligatoire pour le remboursement. Seule l'urgence dispense de la prescription préalable.",
      },
      {
        q: "Comment choisir entre taxi, VSL et ambulance ?",
        a: "C'est le médecin qui prescrit le mode de transport adapté à votre état. Le taxi convient aux patients assis autonomes, l'ambulance aux patients allongés.",
      },
    ],
    relatedGuides: [
      "remboursement-transport-cpam",
      "bon-de-transport-medical",
      "tarifs-taxi-vsl-ambulance",
      "reforme-transport-sanitaire-2025",
      "droits-patients-transport-sanitaire",
    ],
    relatedCities: ["paris", "lyon", "marseille", "toulouse", "bordeaux"],
  },

  // ═══════════════════════════════════════════════════════════════
  // CLUSTER 6 — Types de véhicules (5 guides)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: "taxi-conventionne-cpam-guide",
    title: "Taxi conventionné CPAM : le guide définitif pour les patients",
    description:
      "Guide complet du taxi conventionné CPAM : définition, avantages, tarifs, réservation, tiers payant, confort et comparatif avec VSL et ambulance.",
    date: "2025-01-05",
    lastUpdated: "2025-03-30",
    readTime: "13 min",
    category: "Véhicules",
    answerBox:
      "Le taxi conventionné CPAM est un taxi agréé par l'Assurance Maladie pour transporter les patients vers leurs soins. Il pratique le tiers payant, offre un confort optimal et est disponible 24h/24. Le tarif moyen est de 55 à 70 € l'aller-retour.",
    sections: [
      {
        id: "definition-avantages",
        title: "Le taxi conventionné : définition et avantages",
        content: [
          "Le taxi conventionné CPAM est un taxi dont le chauffeur a signé une convention avec la Caisse Primaire d'Assurance Maladie. Cette convention l'autorise à transporter des patients vers leurs soins médicaux et à facturer directement la CPAM, évitant ainsi au patient d'avancer les frais de transport.",
          "Les avantages du taxi conventionné sont nombreux : véhicule individuel (pas de transport partagé sauf accord), disponibilité 24h/24 et 7j/7, confort d'un véhicule de tourisme (berline, monospace), chauffeur formé au transport de personnes fragiles, et tiers payant automatique.",
          "Le taxi conventionné est le mode de transport médical préféré des patients pour sa discrétion (pas de signalétique médicale visible), son confort et la relation de confiance qui s'établit avec le chauffeur, particulièrement pour les transports réguliers."
        ],
      },
      {
        id: "tarification-taxi-conventionne",
        title: "Tarification du taxi conventionné",
        content: [
          "Le tarif du taxi conventionné est encadré par la convention CPAM et les arrêtés préfectoraux. Il comprend un forfait de prise en charge (environ 3,83 €), un tarif kilométrique en charge (environ 1,12 €/km de jour, 1,35 €/km de nuit) et un tarif d'attente (environ 38 €/heure).",
          "Le tarif varie d'un département à l'autre car il est fixé par arrêté préfectoral. Les départements urbains (Paris, Lyon, Marseille) ont des tarifs légèrement supérieurs aux départements ruraux. La CPAM rembourse sur la base du tarif conventionné départemental.",
          "Les suppléments remboursables comprennent les péages autoroutiers, les frais de stationnement hospitalier et les éventuels frais de montagne (chaînes, conditions météo). Ces suppléments sont facturés en plus du tarif kilométrique et remboursés par la CPAM.",
          "Le tarif moyen d'un aller-retour de 30 km en taxi conventionné est de 55 à 70 €. Ce tarif est plus élevé que le VSL (30 à 40 €) mais inférieur à l'ambulance (80 à 120 €). Le confort supérieur du taxi justifie cet écart pour de nombreux patients."
        ],
      },
      {
        id: "reservation-tiers-payant",
        title: "Réservation et tiers payant",
        content: [
          "La réservation d'un taxi conventionné se fait par téléphone, par application mobile ou via une plateforme en ligne comme Medi-Trajet. Le patient indique la date, l'heure, l'adresse de départ, la destination et précise qu'il dispose d'un bon de transport.",
          "Le tiers payant est automatique avec un taxi conventionné : le chauffeur facture directement la CPAM et le patient ne paie rien (hors franchise de 2 € et éventuel ticket modérateur si la mutuelle ne pratique pas le tiers payant). Le patient présente sa carte Vitale et signe le bon de transport.",
          "Pour les transports réguliers, un planning de réservation récurrent peut être établi avec le même chauffeur. De nombreux patients dialysés ou en radiothérapie conservent le même taxi conventionné pour toute la durée de leur traitement."
        ],
      },
      {
        id: "taxi-vs-vsl-ambulance",
        title: "Taxi conventionné vs VSL vs ambulance",
        content: [
          "Par rapport au VSL, le taxi conventionné offre un confort supérieur (véhicule individuel, pas de transport partagé imposé) et une disponibilité 24h/24 (vs horaires ouvrés pour le VSL). Le tarif est plus élevé mais le rapport confort/prix est meilleur pour les patients autonomes.",
          "Par rapport à l'ambulance, le taxi conventionné est nettement moins coûteux et convient parfaitement aux patients pouvant rester en position assise. L'ambulance est réservée aux patients nécessitant une position allongée ou une surveillance médicale, ce qui n'est pas le cas de la majorité des patients transportés.",
          "Le choix entre taxi, VSL et ambulance est fait par le médecin prescripteur en fonction de l'état du patient. Le taxi conventionné est prescrit pour environ 55 % des transports médicaux en France, ce qui en fait le mode de transport le plus utilisé."
        ],
      },
      {
        id: "trouver-taxi-conventionne",
        title: "Comment trouver un taxi conventionné",
        content: [
          "Plusieurs moyens pour trouver un taxi conventionné : le site Ameli.fr de l'Assurance Maladie publie des listes départementales, votre CPAM peut vous orienter par téléphone (3646), les établissements de santé disposent de listes de taxis conventionnés habituels, et les plateformes en ligne comme Medi-Trajet référencent les taxis conventionnés par zone géographique.",
          "Lors de votre recherche, vérifiez que le taxi est bien conventionné par la CPAM de votre département. Un taxi conventionné dans un département voisin peut vous transporter mais le remboursement se fera sur la base du tarif conventionné de votre département.",
          "Le bouche-à-oreille entre patients est une excellente source d'information. Les patients en traitement régulier (dialyse, radiothérapie) connaissent souvent les meilleurs taxis conventionnés de leur secteur."
        ],
      },
    ],
    faq: [
      {
        q: "Qu'est-ce qu'un taxi conventionné CPAM ?",
        a: "C'est un taxi agréé par la CPAM pour transporter des patients vers leurs soins. Il pratique le tiers payant et respecte les tarifs conventionnés.",
      },
      {
        q: "Le taxi conventionné est-il remboursé ?",
        a: "Oui, à 65 % ou 100 % selon votre situation (ALD, CSS, etc.). Le tiers payant vous dispense d'avancer les frais. La franchise de 2 € par trajet s'applique.",
      },
      {
        q: "Combien coûte un taxi conventionné ?",
        a: "En moyenne 55 à 70 € pour un aller-retour de 30 km. Le tarif varie selon le département et la distance. Il est fixé par arrêté préfectoral.",
      },
      {
        q: "Le taxi conventionné est-il disponible le dimanche ?",
        a: "Oui, 24h/24 et 7j/7, y compris les dimanches et jours fériés. Des majorations tarifaires conventionnées s'appliquent les nuits et week-ends.",
      },
    ],
    relatedGuides: [
      "taxi-conventionne-comment-ca-marche",
      "tarifs-taxi-vsl-ambulance",
      "tiers-payant-transport-medical",
      "liste-taxis-conventionnes-departement",
      "choisir-transport-medical",
    ],
    relatedCities: ["paris", "lyon", "marseille", "toulouse", "bordeaux"],
  },

  {
    slug: "vsl-vehicule-sanitaire-leger",
    title: "VSL (Véhicule Sanitaire Léger) : fonctionnement et tarifs 2025",
    description:
      "Tout savoir sur le VSL : définition, conditions d'utilisation, tarifs 2025, transport partagé, différences avec le taxi et l'ambulance, et prescription.",
    date: "2025-01-08",
    lastUpdated: "2025-03-28",
    readTime: "9 min",
    category: "Véhicules",
    answerBox:
      "Le VSL (Véhicule Sanitaire Léger) est un véhicule sanitaire destiné au transport assis de patients. C'est le mode de transport le moins cher (30 à 40 € en moyenne) et il permet le transport partagé de 2 à 3 patients.",
    sections: [
      {
        id: "definition-vsl",
        title: "Qu'est-ce qu'un VSL ?",
        content: [
          "Le VSL (Véhicule Sanitaire Léger) est un véhicule sanitaire agréé par l'ARS (Agence Régionale de Santé) et destiné au transport de patients en position assise. Il se distingue du taxi par sa signalétique sanitaire (croix bleue), son équipement médical de base et son conducteur titulaire du diplôme d'auxiliaire ambulancier.",
          "Le VSL est exploité par une entreprise de transport sanitaire agréée par l'ARS. La même entreprise peut exploiter des ambulances et des VSL. Le VSL est identifiable par sa carrosserie blanche et sa croix de vie bleue sur fond blanc.",
          "Le VSL dispose d'un équipement médical minimal : oxygène, tensiomètre, matériel de premiers secours. Il est équipé pour accueillir 1 à 3 patients assis simultanément, ce qui en fait le véhicule idéal pour le transport partagé."
        ],
      },
      {
        id: "tarifs-vsl-2025",
        title: "Tarifs du VSL en 2025",
        content: [
          "Le tarif du VSL est le plus bas de tous les modes de transport sanitaire. Le forfait de prise en charge est d'environ 14,30 €, le tarif kilométrique d'environ 0,90 € par km. Pour un aller-retour de 30 km, le coût moyen est d'de 30 à 40 €.",
          "En cas de transport partagé, le tarif est réparti entre les patients transportés. Chaque patient est facturé à hauteur de sa part du trajet. Le coût individuel est donc encore inférieur au tarif d'un transport VSL individuel.",
          "Les majorations de nuit (50 % entre 20h et 8h) et de week-end/jours fériés (75 %) s'ajoutent au tarif de base. Ces majorations sont conventionnées et remboursées par la CPAM. Le VSL est principalement disponible aux heures ouvrées (7h-20h en semaine)."
        ],
      },
      {
        id: "transport-partage-vsl",
        title: "Transport partagé en VSL",
        content: [
          "Le transport partagé est la vocation première du VSL. Le véhicule peut accueillir simultanément 2 à 3 patients se rendant au même établissement de santé ou à des établissements proches. Le chauffeur organise un itinéraire optimisé pour desservir les différents patients.",
          "Le transport partagé en VSL est particulièrement adapté aux soins itératifs (dialyse, radiothérapie, rééducation) où plusieurs patients du même secteur se rendent au même centre à des horaires similaires. Le décret de février 2025 encourage cette pratique.",
          "Le temps de trajet en transport partagé est allongé de 15 à 30 minutes en moyenne par rapport à un transport individuel. Cette durée supplémentaire correspond au ramassage et à la dépose des autres patients sur l'itinéraire."
        ],
      },
      {
        id: "vsl-vs-taxi",
        title: "VSL vs taxi conventionné : les différences",
        content: [
          "Le VSL est moins cher que le taxi conventionné (30 à 40 € vs 55 à 70 € en moyenne) mais offre un confort moindre (transport partagé, véhicule utilitaire). Le VSL est principalement disponible aux heures ouvrées tandis que le taxi est disponible 24h/24.",
          "Le VSL dispose d'un équipement médical de base que le taxi n'a pas. Le conducteur de VSL est auxiliaire ambulancier, ce qui le qualifie pour les gestes de premiers secours. Le chauffeur de taxi a une formation au transport de personnes malades mais pas de diplôme paramédical.",
          "Le choix entre VSL et taxi est fait par le médecin prescripteur. Le VSL est prescrit lorsque le transport partagé est acceptable et que l'état du patient ne justifie pas le confort supérieur du taxi. Le patient ne peut pas changer de mode de transport sans nouvelle prescription."
        ],
      },
    ],
    faq: [
      {
        q: "Qu'est-ce qu'un VSL ?",
        a: "Le VSL (Véhicule Sanitaire Léger) est un véhicule sanitaire pour le transport assis de patients, moins cher que le taxi mais avec transport partagé possible.",
      },
      {
        q: "Combien coûte un trajet en VSL ?",
        a: "De 30 à 40 € pour un aller-retour de 30 km. C'est le mode de transport sanitaire le moins cher, encore réduit en transport partagé.",
      },
      {
        q: "Le VSL est-il disponible la nuit ?",
        a: "Le VSL est principalement disponible aux heures ouvrées (7h-20h). Pour les transports de nuit, le taxi conventionné ou l'ambulance sont plus adaptés.",
      },
    ],
    relatedGuides: [
      "tarifs-taxi-vsl-ambulance",
      "taxi-conventionne-cpam-guide",
      "ambulance-quand-comment",
      "transport-partage-guide-secretariats",
      "choisir-transport-medical",
    ],
  },

  {
    slug: "ambulance-quand-comment",
    title: "Ambulance : quand et comment en bénéficier ?",
    description:
      "Quand prescrire une ambulance ? Conditions médicales, urgence vs programmé, tarifs 2025, équipement, équipage et remboursement de l'ambulance expliqués.",
    date: "2025-01-10",
    lastUpdated: "2025-03-25",
    readTime: "10 min",
    category: "Véhicules",
    answerBox:
      "L'ambulance est prescrite pour les patients nécessitant un transport allongé ou une surveillance médicale. Elle coûte en moyenne 80 à 120 € l'aller-retour et est remboursée par la CPAM à 65 % ou 100 % en ALD.",
    sections: [
      {
        id: "quand-ambulance",
        title: "Quand l'ambulance est-elle prescrite ?",
        content: [
          "L'ambulance est prescrite par le médecin lorsque l'état du patient nécessite un transport en position allongée ou semi-assise, ou lorsqu'une surveillance médicale est requise pendant le trajet. Les indications principales sont : incapacité de maintenir la position assise, oxygénothérapie, perfusion en cours, risque de malaise ou de chute.",
          "Les situations typiques nécessitant une ambulance sont : les transferts inter-hospitaliers de patients instables, les sorties d'hospitalisation de patients non autonomes, les transports post-chirurgicaux (chirurgie lourde, anesthésie générale récente), et les urgences médicales.",
          "Le médecin prescripteur évalue l'état du patient et prescrit l'ambulance sur le bon de transport (Cerfa S3138). La prescription doit mentionner la nécessité du transport allongé ou de la surveillance médicale. L'ambulance ne peut pas être prescrite par convenance.",
          "En cas d'urgence vitale, le SAMU (15) envoie une ambulance médicalisée (SMUR) sans prescription préalable. Le bon de transport est établi a posteriori par le médecin urgentiste."
        ],
      },
      {
        id: "equipement-equipage",
        title: "Équipement et équipage de l'ambulance",
        content: [
          "L'ambulance est équipée d'un matériel médical complet : brancard, oxygénothérapie, scope cardiaque, défibrillateur semi-automatique, matériel de perfusion, aspirateur de mucosités, attelles et matériel de contention. Cet équipement permet de gérer les situations d'urgence pendant le transport.",
          "L'équipage d'une ambulance comprend au minimum un ambulancier titulaire du DEA (Diplôme d'État d'Ambulancier) et un auxiliaire ambulancier. Pour les ambulances SMUR, un médecin urgentiste et un infirmier sont également présents.",
          "L'ambulancier DEA est formé aux gestes d'urgence (réanimation cardio-pulmonaire, défibrillation, ventilation), à la manipulation du brancard et des patients, et au protocole de prise en charge des différentes pathologies (cardiaque, traumatique, neurologique)."
        ],
      },
      {
        id: "tarifs-ambulance",
        title: "Tarifs de l'ambulance en 2025",
        content: [
          "Le tarif de l'ambulance est le plus élevé des transports sanitaires. Le forfait de prise en charge est d'environ 64,30 €, comprenant la mise à disposition du véhicule et de l'équipage. Le tarif kilométrique est d'environ 2,19 € par km. Le coût moyen d'un aller-retour de 30 km est d'de 80 à 120 €.",
          "Les majorations tarifaires s'appliquent pour les transports de nuit (50 % entre 20h et 8h), les dimanches et jours fériés (75 %), et les urgences. Un transport en ambulance le dimanche nuit peut coûter plus de 150 € pour un aller de 30 km.",
          "Le remboursement de l'ambulance suit les mêmes règles que les autres modes de transport : 65 % au régime général, 100 % en ALD, accident du travail, maternité (6e mois) et CSS. Le tiers payant est automatique avec les ambulanciers conventionnés."
        ],
      },
      {
        id: "urgence-vs-programme",
        title: "Ambulance d'urgence vs programmée",
        content: [
          "L'ambulance d'urgence est déclenchée par le SAMU (15) ou les pompiers en cas de détresse vitale. Le transport est réalisé en ambulance SMUR (Service Mobile d'Urgence et de Réanimation) avec un médecin et un infirmier à bord. Aucune prescription préalable n'est nécessaire.",
          "L'ambulance programmée est prescrite par le médecin pour un transport planifié : sortie d'hospitalisation, transfert inter-hospitalier, transport vers un examen. Le patient ou l'établissement réserve l'ambulance auprès d'une société d'ambulance conventionnée.",
          "Dans les deux cas, le remboursement est assuré par la CPAM. L'urgence bénéficie d'un régime dérogatoire pour la prescription (a posteriori sous 72h). Le transport programmé suit la procédure standard de prescription préalable."
        ],
      },
    ],
    faq: [
      {
        q: "Quand a-t-on droit à une ambulance ?",
        a: "L'ambulance est prescrite si le patient doit être transporté allongé ou sous surveillance médicale. Le médecin évalue la nécessité sur le bon de transport.",
      },
      {
        q: "Combien coûte un transport en ambulance ?",
        a: "En moyenne 80 à 120 € pour un aller-retour de 30 km. Le tarif comprend le forfait de prise en charge (64 €) et le kilométrage (2,19 €/km).",
      },
      {
        q: "L'ambulance est-elle remboursée ?",
        a: "Oui, à 65 % au régime général ou 100 % en ALD. Le tiers payant est automatique avec les ambulanciers conventionnés.",
      },
      {
        q: "Peut-on choisir son ambulance ?",
        a: "Oui, le patient a le libre choix de la société d'ambulance conventionnée, sauf en situation d'urgence où c'est le SAMU qui décide.",
      },
    ],
    relatedGuides: [
      "tarifs-taxi-vsl-ambulance",
      "taxi-conventionne-cpam-guide",
      "transport-medical-urgence-vs-programme",
      "choisir-transport-medical",
    ],
  },

  {
    slug: "transport-assis-professionnalise",
    title: "Transport assis professionnalisé (TAP) : tout comprendre",
    description:
      "Le transport assis professionnalisé (TAP) englobe le taxi conventionné et le VSL. Définition, différences, conditions de prescription et avantages du TAP.",
    date: "2025-01-15",
    lastUpdated: "2025-03-30",
    readTime: "8 min",
    category: "Véhicules",
    answerBox:
      "Le transport assis professionnalisé (TAP) regroupe le taxi conventionné et le VSL. Il est prescrit pour les patients pouvant se déplacer en position assise. Le TAP représente 75 % des transports médicaux en France.",
    sections: [
      {
        id: "definition-tap",
        title: "Qu'est-ce que le transport assis professionnalisé ?",
        content: [
          "Le transport assis professionnalisé (TAP) est un mode de transport sanitaire destiné aux patients capables de se déplacer en position assise, avec ou sans aide. Il regroupe deux types de véhicules : le taxi conventionné CPAM et le VSL (Véhicule Sanitaire Léger).",
          "Le TAP représente environ 75 % des transports médicaux remboursés en France, devant l'ambulance (25 %). C'est le mode de transport prescrit par défaut pour les patients autonomes ou semi-autonomes se rendant à des consultations, des examens ou des soins itératifs.",
          "Le médecin prescrit le TAP lorsque le patient peut s'asseoir normalement, ne nécessite pas de surveillance médicale pendant le trajet et ne risque pas de chute ou de malaise grave. Le choix entre taxi conventionné et VSL dépend du confort souhaité, des horaires et de la possibilité de transport partagé."
        ],
      },
      {
        id: "taxi-vs-vsl-tap",
        title: "Taxi conventionné ou VSL : lequel choisir ?",
        content: [
          "Le taxi conventionné offre un véhicule individuel, un confort de berline, une disponibilité 24h/24 et un chauffeur formé au transport de personnes fragiles. Il coûte en moyenne 55 à 70 € l'aller-retour. Il est idéal pour les patients souhaitant un transport confortable et discret.",
          "Le VSL propose un transport plus économique (30 à 40 € en moyenne) avec la possibilité de transport partagé. Le véhicule est équipé de matériel médical de base. Il est principalement disponible aux heures ouvrées. Il est adapté aux patients acceptant le transport partagé.",
          "Le médecin prescripteur détermine le mode de transport le plus adapté. Le patient ne peut pas modifier unilatéralement le mode de transport prescrit. Pour passer du VSL au taxi (ou inversement), une nouvelle prescription est nécessaire."
        ],
      },
      {
        id: "conditions-prescription-tap",
        title: "Conditions de prescription du TAP",
        content: [
          "Le TAP est prescrit lorsque le patient remplit les conditions de remboursement du transport médical (ALD, hospitalisation, accident du travail, etc.) et que son état de santé permet le transport en position assise. Le médecin coche la case « transport assis » sur le bon de transport.",
          "Le TAP ne nécessite pas de condition médicale aussi stricte que l'ambulance. La majorité des patients se rendant à des soins programmés relèvent du TAP. Seuls les patients devant être transportés allongés ou sous surveillance relèvent de l'ambulance.",
          "La prescription de TAP précise le mode de transport (taxi ou VSL) et peut mentionner des contraintes particulières : transport individuel (contre-indication au partage), véhicule PMR (fauteuil roulant), accompagnant nécessaire."
        ],
      },
      {
        id: "evolution-tap",
        title: "Évolution du TAP avec la réforme 2025",
        content: [
          "La réforme 2025 impacte principalement le TAP via l'obligation du transport partagé pour les soins itératifs. Le VSL est naturellement adapté au transport partagé avec ses 3 places patient. Le taxi conventionné devra éventuellement proposer des véhicules plus spacieux pour accueillir 2 patients.",
          "Les plateformes numériques de réservation mises en place par les ARS ciblent principalement le TAP, qui représente les trois quarts des transports. L'optimisation du TAP (transport partagé, réservation en ligne, planification automatisée) est au cœur de la réforme."
        ],
      },
    ],
    faq: [
      {
        q: "Qu'est-ce que le TAP ?",
        a: "Le Transport Assis Professionnalisé regroupe le taxi conventionné et le VSL. Il est prescrit pour les patients pouvant se déplacer en position assise.",
      },
      {
        q: "Le TAP est-il remboursé ?",
        a: "Oui, le TAP est remboursé à 65 % ou 100 % selon la situation du patient (ALD, CSS, etc.). Le tiers payant est automatique avec les transporteurs conventionnés.",
      },
      {
        q: "Le médecin choisit-il entre taxi et VSL ?",
        a: "Oui, le médecin prescrit le mode de transport adapté. Le patient ne peut pas modifier le choix sans nouvelle prescription.",
      },
    ],
    relatedGuides: [
      "taxi-conventionne-cpam-guide",
      "vsl-vehicule-sanitaire-leger",
      "tarifs-taxi-vsl-ambulance",
      "choisir-transport-medical",
    ],
  },

  {
    slug: "transport-medical-urgence-vs-programme",
    title: "Transport médical : urgence vs programmé, quelles différences ?",
    description:
      "Différences entre le transport médical d'urgence et le transport programmé : déclenchement, prescription, modes de transport, remboursement et procédures.",
    date: "2025-01-20",
    lastUpdated: "2025-04-01",
    readTime: "8 min",
    category: "Véhicules",
    answerBox:
      "Le transport d'urgence est déclenché par le SAMU (15) sans prescription préalable, en ambulance médicalisée. Le transport programmé est prescrit par le médecin en avance, en taxi conventionné, VSL ou ambulance selon l'état du patient.",
    sections: [
      {
        id: "transport-urgence",
        title: "Le transport médical d'urgence",
        content: [
          "Le transport médical d'urgence est déclenché en cas de détresse vitale ou de risque vital immédiat. L'appel au SAMU (15) active la régulation médicale : un médecin régulateur évalue la gravité de la situation et envoie le moyen de transport adapté (SMUR, ambulance privée, pompiers).",
          "En urgence, aucune prescription préalable n'est nécessaire. Le médecin régulateur du SAMU autorise le transport et le bon de transport est établi a posteriori par le médecin urgentiste dans les 72 heures. Le patient n'a aucune démarche à effectuer sur le moment.",
          "Le transport d'urgence est remboursé à 100 % lorsqu'il est déclenché par le SAMU ou les pompiers. La franchise médicale de 2 € ne s'applique pas aux transports d'urgence déclenchés par le centre 15."
        ],
      },
      {
        id: "transport-programme",
        title: "Le transport médical programmé",
        content: [
          "Le transport programmé est planifié à l'avance pour une consultation, un examen, une hospitalisation ou un soin itératif. Le médecin prescrit le transport sur le bon de transport (Cerfa S3138) en amont du trajet. Le patient réserve ensuite son transport auprès d'un transporteur conventionné.",
          "Le mode de transport est déterminé par le médecin en fonction de l'état du patient : taxi conventionné pour les patients autonomes assis, VSL pour le transport partagé, ambulance pour les patients allongés. Le patient ne peut pas modifier le mode de transport sans nouvelle prescription.",
          "Le transport programmé est remboursé à 65 % ou 100 % selon la situation du patient (ALD, CSS, etc.). Le tiers payant est automatique avec les transporteurs conventionnés. Le patient présente sa carte Vitale et son bon de transport le jour du trajet."
        ],
      },
      {
        id: "differences-cles",
        title: "Différences clés entre urgence et programmé",
        content: [
          "La prescription : en urgence, pas de prescription préalable (bon de transport a posteriori sous 72h). En programmé, prescription obligatoire avant le trajet. Cette différence est fondamentale pour le remboursement.",
          "Le mode de transport : en urgence, c'est le SAMU qui décide (ambulance SMUR, ambulance privée, pompiers). En programmé, c'est le médecin prescripteur qui choisit (taxi, VSL, ambulance). Le patient a le libre choix du transporteur uniquement en programmé.",
          "Le remboursement : l'urgence déclenchée par le SAMU est remboursée à 100 % sans franchise. Le transport programmé est remboursé à 65 % ou 100 % selon la situation, avec franchise de 2 € (sauf CSS et mineurs).",
          "L'organisation : l'urgence ne requiert aucune organisation du patient. Le transport programmé nécessite une anticipation : obtenir la prescription, réserver le transporteur, préparer les documents."
        ],
      },
      {
        id: "cas-intermediaires",
        title: "Les cas intermédiaires",
        content: [
          "Certaines situations se situent entre l'urgence pure et le transport programmé. Les consultations en urgence chez un spécialiste (douleur thoracique chez le cardiologue, crise d'asthme chez le pneumologue) peuvent justifier un transport rapide sans être des urgences vitales.",
          "Dans ces cas, le médecin peut établir une prescription de transport en urgence et le patient fait appel à un transporteur conventionné disponible immédiatement. Le remboursement suit les règles du transport programmé (65 % ou 100 % selon la situation)."
        ],
      },
    ],
    faq: [
      {
        q: "Le transport d'urgence est-il toujours gratuit ?",
        a: "Le transport d'urgence déclenché par le SAMU (15) est remboursé à 100 % sans franchise. Les autres urgences suivent les règles de remboursement standard.",
      },
      {
        q: "Faut-il une prescription pour un transport d'urgence ?",
        a: "Non, en urgence le bon de transport est établi a posteriori sous 72 heures par le médecin urgentiste. Le transport est déclenché par le SAMU.",
      },
      {
        q: "Peut-on choisir son ambulance en cas d'urgence ?",
        a: "Non, en urgence c'est le SAMU qui détermine le moyen de transport. Le libre choix du transporteur ne s'applique qu'au transport programmé.",
      },
    ],
    relatedGuides: [
      "ambulance-quand-comment",
      "taxi-conventionne-cpam-guide",
      "remboursement-transport-cpam",
      "bon-de-transport-medical",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CLUSTER 7 — Professionnels (5 guides)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: "plateforme-transport-etablissements-sante",
    title: "Plateformes de transport pour les établissements de santé",
    description:
      "Comment les établissements de santé optimisent le transport patient avec des plateformes numériques : coordination, réservation, suivi et réduction des coûts.",
    date: "2025-03-01",
    lastUpdated: "2025-04-01",
    readTime: "10 min",
    category: "Professionnels",
    answerBox:
      "Les plateformes de transport pour établissements de santé centralisent la réservation, la coordination et le suivi des transports patients. Elles réduisent les coûts de 15 à 25 % et améliorent la ponctualité des transports.",
    sections: [
      {
        id: "enjeux-etablissements",
        title: "Enjeux du transport pour les établissements de santé",
        content: [
          "Le transport patient représente un enjeu logistique majeur pour les établissements de santé. Un CHU de taille moyenne génère 200 à 500 transports par jour (entrées, sorties, consultations externes, transferts, examens). La coordination de ces flux nécessite des ressources humaines et des outils dédiés.",
          "Les principaux problèmes rencontrés par les établissements sont : les retards de transport perturbant le planning des consultations et des blocs opératoires, les transports à vide (un véhicule sur deux revient sans patient), l'absence de visibilité sur la disponibilité des transporteurs, et la gestion administrative des bons de transport.",
          "Le coût du transport patient est supporté par l'Assurance Maladie, mais les dysfonctionnements impactent directement l'établissement : annulations de rendez-vous, rallongement des durées de séjour, sous-utilisation des équipements médicaux coûteux (IRM, scanner, bloc opératoire)."
        ],
      },
      {
        id: "fonctionnalites-plateformes",
        title: "Fonctionnalités des plateformes de transport",
        content: [
          "Les plateformes numériques de transport sanitaire offrent plusieurs fonctionnalités clés : réservation centralisée des transports (VSL, taxi, ambulance), affectation automatique au transporteur disponible le plus proche, suivi en temps réel des véhicules (géolocalisation GPS), et gestion dématérialisée des bons de transport.",
          "L'algorithme d'optimisation de la plateforme regroupe automatiquement les patients ayant des trajets compatibles (même secteur, même horaire) pour proposer le transport partagé. Cette optimisation réduit le nombre de véhicules nécessaires et le coût global.",
          "L'interface permet aux services de soins (secrétariats médicaux, services sociaux, bureaux des entrées) de réserver un transport en quelques clics, de suivre l'arrivée du véhicule et de gérer les modifications (changement d'horaire, annulation). Les alertes automatiques préviennent les retards.",
          "Des plateformes comme Medi-Trajet proposent une solution intégrée permettant la mise en relation directe entre les établissements de santé, les patients et les transporteurs conventionnés, avec tiers payant dématérialisé et traçabilité complète des transports."
        ],
      },
      {
        id: "benefices-mesurables",
        title: "Bénéfices mesurables pour les établissements",
        content: [
          "Les établissements ayant déployé des plateformes de transport rapportent une réduction des coûts de transport de 15 à 25 % grâce à l'optimisation des trajets et au transport partagé. Le taux de transport partagé passe de 10 % à 40-50 % avec une plateforme d'optimisation.",
          "La ponctualité des transports s'améliore significativement : le taux de retard supérieur à 15 minutes passe de 25 % à moins de 10 %. Cette amélioration réduit les annulations de rendez-vous et optimise l'utilisation des équipements médicaux.",
          "Le temps de gestion administrative du transport est réduit de 50 à 70 % grâce à la dématérialisation des bons de transport et à la facturation automatique. Le personnel administratif peut se recentrer sur des tâches à plus forte valeur ajoutée."
        ],
      },
      {
        id: "mise-en-place",
        title: "Mise en place d'une plateforme de transport",
        content: [
          "Le déploiement d'une plateforme de transport dans un établissement de santé nécessite une phase de cadrage (3 à 6 mois) comprenant l'analyse des flux de transport existants, le choix de la solution technique, la formation des utilisateurs et l'intégration avec le système d'information hospitalier.",
          "L'adhésion des équipes est un facteur clé de succès. Les secrétariats médicaux, les services sociaux et les bureaux des entrées doivent être formés et accompagnés dans le changement de pratiques. Un référent transport doit être désigné pour piloter le déploiement.",
          "Le retour sur investissement est généralement atteint en 6 à 12 mois grâce aux économies réalisées sur le transport et à l'amélioration de la productivité des consultations et des examens."
        ],
      },
    ],
    faq: [
      {
        q: "Qu'est-ce qu'une plateforme de transport pour les hôpitaux ?",
        a: "C'est un outil numérique centralisant la réservation, la coordination et le suivi des transports patients, optimisant les coûts et la ponctualité.",
      },
      {
        q: "Combien coûte une plateforme de transport hospitalier ?",
        a: "Le coût varie selon la taille de l'établissement. Le retour sur investissement est atteint en 6 à 12 mois grâce aux économies sur le transport.",
      },
      {
        q: "La plateforme remplace-t-elle le bon de transport ?",
        a: "La plateforme dématérialise le bon de transport mais ne le supprime pas. Le bon reste obligatoire légalement, sous forme numérique ou papier.",
      },
    ],
    relatedGuides: [
      "optimiser-transport-medical-roi",
      "partenariat-hopital-transport",
      "transport-partage-guide-secretariats",
      "reforme-transport-sanitaire-2025",
    ],
  },

  {
    slug: "optimiser-transport-medical-roi",
    title: "Optimiser le transport médical : ROI pour les professionnels",
    description:
      "Comment les professionnels de santé peuvent optimiser le transport médical : réduction des coûts, amélioration de la qualité, indicateurs de performance et ROI.",
    date: "2025-03-05",
    lastUpdated: "2025-04-02",
    readTime: "11 min",
    category: "Professionnels",
    answerBox:
      "L'optimisation du transport médical permet aux établissements de réduire les coûts de 15 à 25 %, d'améliorer la ponctualité et de libérer du temps administratif. Le transport partagé et la digitalisation sont les leviers principaux.",
    sections: [
      {
        id: "couts-transport-etablissement",
        title: "Comprendre les coûts du transport pour l'établissement",
        content: [
          "Bien que le transport médical soit financé par l'Assurance Maladie, les dysfonctionnements génèrent des coûts cachés pour les établissements de santé. Un rendez-vous annulé pour cause de transport défaillant représente une perte de chiffre d'affaires (consultation non facturée, créneau de bloc non utilisé) et un rallongement de la file d'attente.",
          "Le temps passé par le personnel administratif à organiser les transports (appels téléphoniques, gestion des bons de transport, coordination avec les transporteurs) représente un coût de main-d'œuvre significatif. Un secrétariat médical consacre en moyenne 30 à 45 minutes par jour à la gestion des transports.",
          "Les transports mal organisés génèrent également des surcoûts pour l'Assurance Maladie : véhicules surdimensionnés (ambulance alors qu'un taxi suffirait), trajets à vide, absence de transport partagé. L'optimisation bénéficie à l'ensemble du système de santé."
        ],
      },
      {
        id: "leviers-optimisation",
        title: "Les leviers d'optimisation du transport",
        content: [
          "Le transport partagé est le levier d'économie le plus important. En regroupant 2 à 3 patients dans un même véhicule, le coût par patient est réduit de 30 à 50 %. La réforme 2025 encourage cette pratique et l'obligation de 2026 la généralisera pour les soins itératifs.",
          "La prescription adaptée du mode de transport est un levier médical. Prescrire un taxi ou un VSL quand l'état du patient le permet (plutôt qu'une ambulance par défaut) réduit le coût unitaire de 30 à 60 %. La sensibilisation des prescripteurs est essentielle.",
          "La digitalisation des processus (réservation en ligne, bon de transport électronique, facturation dématérialisée) réduit le temps de gestion administrative et les erreurs. Les plateformes de réservation optimisent l'affectation des véhicules et réduisent les trajets à vide.",
          "La coordination avec les transporteurs conventionnés locaux permet de négocier des engagements de qualité (ponctualité, disponibilité) et de volumes (plannings récurrents, tournées optimisées). Les partenariats établissements-transporteurs sont un facteur d'efficience."
        ],
      },
      {
        id: "indicateurs-performance",
        title: "Indicateurs de performance du transport",
        content: [
          "Les indicateurs clés de performance (KPI) du transport médical incluent : le taux de ponctualité (% de transports arrivés dans les 15 minutes du créneau prévu), le taux de transport partagé (% de transports avec 2+ patients), le coût moyen par transport, et le taux d'annulation lié au transport.",
          "Le suivi de ces indicateurs permet d'identifier les points d'amélioration et de mesurer l'impact des actions d'optimisation. Un tableau de bord mensuel du transport est recommandé, partagé avec la direction, les services de soins et les transporteurs.",
          "Les benchmarks sectoriels indiquent les objectifs suivants : taux de ponctualité supérieur à 90 %, taux de transport partagé supérieur à 40 % pour les soins itératifs, coût moyen par transport inférieur à 50 €, et taux d'annulation lié au transport inférieur à 5 %."
        ],
      },
      {
        id: "roi-optimisation",
        title: "Retour sur investissement de l'optimisation",
        content: [
          "Le ROI de l'optimisation du transport médical se mesure à plusieurs niveaux. Pour l'Assurance Maladie, la réduction des coûts de transport direct (15 à 25 %) représente des économies de plusieurs millions d'euros pour un CHU de taille moyenne.",
          "Pour l'établissement, l'amélioration de la ponctualité réduit les annulations de rendez-vous et améliore le taux d'occupation des plateaux techniques. Un point de ponctualité gagné peut représenter plusieurs dizaines de milliers d'euros de chiffre d'affaires supplémentaire.",
          "Pour les patients, l'optimisation se traduit par une meilleure qualité de service : moins d'attente, plus de ponctualité, réservation simplifiée. La satisfaction patient est un indicateur de qualité suivi par la HAS (Haute Autorité de Santé) dans le cadre de la certification hospitalière."
        ],
      },
    ],
    faq: [
      {
        q: "Combien peut-on économiser en optimisant le transport ?",
        a: "Les établissements rapportent des économies de 15 à 25 % sur les coûts de transport grâce au transport partagé, la prescription adaptée et la digitalisation.",
      },
      {
        q: "Quel est le taux de transport partagé cible ?",
        a: "L'objectif est d'atteindre 40 % de transport partagé pour les soins itératifs, contre 10 % en moyenne actuellement sans optimisation.",
      },
      {
        q: "Comment mesurer le ROI du transport optimisé ?",
        a: "Les KPI clés sont le coût moyen par transport, le taux de ponctualité, le taux de transport partagé et le taux d'annulation lié au transport.",
      },
    ],
    relatedGuides: [
      "plateforme-transport-etablissements-sante",
      "partenariat-hopital-transport",
      "reforme-transport-sanitaire-2025",
      "transport-partage-guide-secretariats",
    ],
  },

  {
    slug: "devenir-taxi-conventionne-cpam",
    title: "Devenir taxi conventionné CPAM : le guide complet du chauffeur",
    description:
      "Comment devenir taxi conventionné CPAM ? Conditions, procédure, formation, obligations, tarifs, revenus potentiels et conseils pour réussir dans le transport médical.",
    date: "2025-03-08",
    lastUpdated: "2025-04-03",
    readTime: "12 min",
    category: "Professionnels",
    answerBox:
      "Pour devenir taxi conventionné CPAM, il faut une carte professionnelle de taxi, une formation au transport de personnes malades (7h minimum), un véhicule aux normes et déposer un dossier de conventionnement auprès de la CPAM.",
    sections: [
      {
        id: "prerequis-chauffeur",
        title: "Prérequis pour devenir taxi conventionné",
        content: [
          "Le premier prérequis est d'être titulaire d'une carte professionnelle de taxi délivrée par la préfecture. Cette carte s'obtient après réussite de l'examen du certificat de capacité professionnelle de conducteur de taxi. L'examen comprend des épreuves de réglementation, de sécurité routière, de gestion et de conduite.",
          "Le candidat doit justifier d'un casier judiciaire vierge (bulletin n° 3) et d'un permis de conduire en cours de validité (catégorie B depuis au moins 3 ans, ou 2 ans si formation en conduite accompagnée). Un contrôle médical d'aptitude à la conduite est également requis.",
          "Le véhicule doit être conforme aux normes en vigueur : contrôle technique à jour, assurance professionnelle couvrant le transport de personnes malades, taximètre homologué, et signalétique conforme (lumineux « TAXI » sur le toit). Le véhicule doit être en bon état général et offrir un confort adapté aux patients."
        ],
      },
      {
        id: "formation-transport-malades",
        title: "Formation au transport de personnes malades",
        content: [
          "La formation au transport de personnes malades ou à mobilité réduite est obligatoire pour obtenir le conventionnement CPAM. Cette formation d'une durée minimale de 7 heures couvre les thèmes suivants : gestes de premiers secours, aide à la personne (montée/descente du véhicule, manipulation de fauteuil roulant), hygiène et prévention des infections.",
          "La formation aborde également la connaissance du système de santé (rôles de la CPAM, fonctionnement du tiers payant, réglementation du transport sanitaire), la gestion administrative (bon de transport, facturation, télétransmission) et la relation avec le patient (communication adaptée, respect de la dignité, secret professionnel).",
          "Des organismes de formation agréés proposent cette formation dans la plupart des départements. Le coût est d'environ 200 à 400 €. La formation est éligible au financement par le CPF (Compte Personnel de Formation) ou par les fonds de formation des travailleurs indépendants."
        ],
      },
      {
        id: "procedure-conventionnement-detail",
        title: "Procédure de conventionnement détaillée",
        content: [
          "Le dossier de conventionnement est déposé auprès de la CPAM du département d'exercice. Il comprend : la demande de convention signée, la copie de la carte professionnelle de taxi, l'attestation d'assurance professionnelle, le certificat de contrôle technique, l'attestation de formation au transport de personnes malades et l'extrait de casier judiciaire (bulletin n° 3).",
          "La CPAM instruit le dossier dans un délai de 2 à 4 semaines. Elle peut demander des pièces complémentaires ou effectuer une vérification du véhicule. La convention est signée en deux exemplaires : un pour le chauffeur, un pour la CPAM.",
          "Une fois conventionné, le chauffeur reçoit un numéro de conventionnement, un identifiant de facturation et l'accès aux outils de télétransmission. Il est inscrit dans la base des transporteurs conventionnés et peut commencer à transporter des patients avec tiers payant."
        ],
      },
      {
        id: "revenus-activite",
        title: "Revenus et potentiel de l'activité",
        content: [
          "Le chiffre d'affaires d'un taxi conventionné varie selon le département, la zone d'activité et le nombre de transports quotidiens. En moyenne, un taxi conventionné réalise 4 à 8 transports médicaux par jour, générant un chiffre d'affaires quotidien de 250 à 500 €.",
          "Le revenu net dépend des charges d'exploitation : carburant, entretien du véhicule, assurance, redevance de la licence, charges sociales. En moyenne, le revenu net mensuel d'un taxi conventionné à temps plein se situe entre 2 500 € et 4 000 €, selon le volume d'activité.",
          "Le transport médical représente une source de revenus stable et récurrente pour les taxis. Les patients réguliers (dialyse, radiothérapie) assurent un flux de transports prévisible. Le développement de cette activité nécessite un investissement en qualité de service et en fidélisation des patients."
        ],
      },
      {
        id: "conseils-reussir",
        title: "Conseils pour réussir en tant que taxi conventionné",
        content: [
          "La qualité de service est le facteur de différenciation le plus important : ponctualité irréprochable, aide attentionnée au patient, conduite douce et sécurisante, véhicule propre et confortable. Les patients partagent leurs expériences et recommandent les bons chauffeurs.",
          "Développez votre réseau auprès des établissements de santé, des médecins traitants et des pharmacies de votre secteur. Distribuez vos cartes de visite et présentez-vous comme taxi conventionné spécialisé dans le transport médical. Les recommandations sont le meilleur vecteur de croissance.",
          "Inscrivez-vous sur les plateformes de réservation en ligne comme Medi-Trajet pour capter une clientèle nouvelle. La visibilité numérique est de plus en plus importante dans le choix du transporteur par les patients et les établissements de santé."
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps pour devenir taxi conventionné ?",
        a: "La procédure complète (formation + conventionnement) prend 4 à 8 semaines si vous êtes déjà titulaire de la carte professionnelle de taxi.",
      },
      {
        q: "Quel est le revenu moyen d'un taxi conventionné ?",
        a: "Le revenu net mensuel se situe entre 2 500 € et 4 000 € en moyenne, selon le volume d'activité et les charges d'exploitation.",
      },
      {
        q: "Faut-il un véhicule spécifique pour le taxi conventionné ?",
        a: "Un taxi standard (berline, monospace) suffit. Le véhicule doit être conforme aux normes : contrôle technique, assurance, taximètre et bon état général.",
      },
      {
        q: "Le conventionnement est-il définitif ?",
        a: "La convention est à durée indéterminée mais peut être résiliée par la CPAM en cas de manquement ou par le chauffeur avec un préavis de 2 mois.",
      },
    ],
    relatedGuides: [
      "conventionnement-taxi-cpam",
      "taxi-conventionne-cpam-guide",
      "taxi-conventionne-comment-ca-marche",
      "liste-taxis-conventionnes-departement",
    ],
  },

  {
    slug: "partenariat-hopital-transport",
    title: "Partenariat hôpital-transport : bonnes pratiques et mise en place",
    description:
      "Comment établir un partenariat efficace entre établissements de santé et sociétés de transport : convention, coordination, indicateurs et retour d'expérience.",
    date: "2025-03-10",
    lastUpdated: "2025-04-02",
    readTime: "9 min",
    category: "Professionnels",
    answerBox:
      "Un partenariat hôpital-transport formalise la collaboration entre un établissement de santé et des transporteurs conventionnés. Il améliore la ponctualité de 20 %, réduit les annulations et optimise les flux de patients.",
    sections: [
      {
        id: "enjeux-partenariat",
        title: "Pourquoi un partenariat hôpital-transport ?",
        content: [
          "Le partenariat entre un établissement de santé et des sociétés de transport conventionnées permet de structurer et d'optimiser les flux de patients transportés. Sans partenariat formalisé, la relation est ponctuelle et désorganisée : chaque service appelle le transporteur de son choix sans coordination globale.",
          "Le partenariat permet de mutualiser les transports (transport partagé), de garantir la disponibilité des véhicules aux heures de pointe (sorties d'hospitalisation, consultations), de standardiser la qualité de service et de mettre en place un suivi par indicateurs.",
          "Les établissements ayant formalisé des partenariats avec leurs transporteurs rapportent une amélioration de la ponctualité de 15 à 25 %, une réduction des annulations de rendez-vous de 10 à 15 % et une diminution du temps administratif consacré au transport de 30 à 50 %."
        ],
      },
      {
        id: "contenu-partenariat",
        title: "Contenu du partenariat",
        content: [
          "Le partenariat prend généralement la forme d'une convention de prestation de services entre l'établissement et un ou plusieurs transporteurs conventionnés. Cette convention définit les engagements réciproques : volumes prévisionnels, délais de prise en charge, qualité de service, tarification et modalités de facturation.",
          "Les engagements du transporteur incluent : ponctualité (arrivée dans les 15 minutes du créneau), disponibilité (nombre de véhicules garantis aux heures de pointe), formation des chauffeurs (accueil des patients, connaissance de l'établissement), et reporting mensuel (indicateurs de performance).",
          "Les engagements de l'établissement incluent : centralisation des demandes de transport (un point de contact unique), anticipation des transports (réservation 24h à l'avance pour les transports programmés), et mise à disposition d'un espace d'attente pour les chauffeurs."
        ],
      },
      {
        id: "mise-en-place-partenariat",
        title: "Mise en place du partenariat",
        content: [
          "La première étape est le diagnostic : analyser les flux de transport existants (volumes, horaires, destinations, modes de transport), identifier les dysfonctionnements (retards, annulations, surcoûts) et évaluer le potentiel d'optimisation (transport partagé, ajustement des modes).",
          "La deuxième étape est la consultation des transporteurs locaux. L'établissement lance un appel à candidatures auprès des sociétés de transport conventionnées du département et sélectionne un ou plusieurs partenaires sur des critères de qualité, de disponibilité et de capacité d'innovation.",
          "La troisième étape est la formalisation de la convention et le déploiement opérationnel. Un comité de pilotage mixte (établissement + transporteurs) se réunit mensuellement pour suivre les indicateurs de performance et ajuster l'organisation."
        ],
      },
      {
        id: "retour-experience",
        title: "Retours d'expérience",
        content: [
          "Les CHU ayant mis en place des partenariats de transport rapportent des résultats significatifs : réduction de 20 % du nombre de véhicules nécessaires grâce au transport partagé, amélioration de 25 points du taux de ponctualité, et réduction de 40 % du temps administratif.",
          "Les facteurs clés de succès identifiés sont : l'engagement de la direction de l'établissement, la désignation d'un référent transport dédié, l'utilisation d'une plateforme numérique de coordination, et la régularité des réunions de pilotage avec les transporteurs."
        ],
      },
    ],
    faq: [
      {
        q: "Qu'est-ce qu'un partenariat hôpital-transport ?",
        a: "C'est une convention formalisant la collaboration entre un établissement de santé et des transporteurs conventionnés pour optimiser les flux de patients.",
      },
      {
        q: "Quels sont les bénéfices d'un partenariat transport ?",
        a: "Amélioration de la ponctualité (20 %), réduction des annulations, diminution du temps administratif (30 à 50 %) et optimisation des coûts.",
      },
      {
        q: "Combien de transporteurs associer au partenariat ?",
        a: "Idéalement 2 à 4 transporteurs pour garantir la disponibilité et la concurrence, tout en maintenant une coordination efficace.",
      },
    ],
    relatedGuides: [
      "plateforme-transport-etablissements-sante",
      "optimiser-transport-medical-roi",
      "transport-partage-guide-secretariats",
      "reforme-transport-sanitaire-2025",
    ],
  },

  {
    slug: "transport-partage-guide-secretariats",
    title: "Transport partagé : guide pratique pour les secrétariats médicaux",
    description:
      "Guide opérationnel du transport partagé pour les secrétariats médicaux : identifier les patients éligibles, organiser les tournées et gérer les dérogations.",
    date: "2025-03-12",
    lastUpdated: "2025-04-03",
    readTime: "9 min",
    category: "Professionnels",
    answerBox:
      "Les secrétariats médicaux jouent un rôle clé dans l'organisation du transport partagé. Ils identifient les patients éligibles, regroupent les demandes par horaire et destination, et gèrent les dérogations médicales.",
    sections: [
      {
        id: "role-secretariat",
        title: "Le rôle du secrétariat dans le transport partagé",
        content: [
          "Le secrétariat médical est souvent le premier point de contact entre le patient et l'organisation du transport. C'est au secrétariat que le patient communique son besoin de transport, que les rendez-vous sont planifiés et que les bons de transport sont gérés. Le secrétariat est donc naturellement au cœur de l'organisation du transport partagé.",
          "Avec le décret de février 2025 et l'obligation du transport partagé en 2026, le rôle du secrétariat évolue : il ne s'agit plus seulement de commander un transport individuel pour chaque patient, mais d'identifier les opportunités de regroupement et de coordonner les tournées de transport partagé.",
          "Cette évolution nécessite de nouveaux outils (logiciel de planification, accès à une plateforme de transport) et de nouvelles compétences (coordination multi-patients, gestion des plannings de transport, communication avec les transporteurs)."
        ],
      },
      {
        id: "identifier-patients-eligibles",
        title: "Identifier les patients éligibles au transport partagé",
        content: [
          "Les patients éligibles au transport partagé sont ceux effectuant des soins itératifs au même établissement : dialyse (3 fois/semaine), radiothérapie (quotidienne), chimiothérapie (régulière), rééducation (plurihebdomadaire). Ces patients ont des créneaux réguliers facilitant le regroupement.",
          "Pour chaque patient éligible, le secrétariat note l'adresse du domicile, les horaires de traitement, le mode de transport prescrit et d'éventuelles contre-indications au transport partagé. Ces informations permettent de constituer des groupes de patients compatibles.",
          "Les patients sont regroupés par zone géographique (même quartier, même commune) et par créneau horaire (arrivée à +/- 30 minutes). Un tableau de regroupement ou un outil numérique facilite cette coordination."
        ],
      },
      {
        id: "organiser-tournees",
        title: "Organiser les tournées de transport partagé",
        content: [
          "Une tournée de transport partagé regroupe 2 à 3 patients sur un même véhicule (VSL ou taxi conventionné). Le secrétariat communique au transporteur les adresses de prise en charge, les horaires souhaités et les éventuelles contraintes (fauteuil roulant, accompagnant).",
          "Le transporteur établit l'itinéraire optimal et confirme les horaires de prise en charge de chaque patient. Le secrétariat transmet ces horaires aux patients concernés. En cas de changement (annulation d'un patient, modification d'horaire), le secrétariat prévient le transporteur pour réorganiser la tournée.",
          "Pour les soins itératifs, les tournées sont récurrentes (même patients, mêmes horaires, même transporteur). Après la mise en place initiale, la gestion devient routinière. Seuls les changements (nouveaux patients, arrêts de traitement, modifications d'horaires) nécessitent une réorganisation."
        ],
      },
      {
        id: "gerer-derogations",
        title: "Gérer les dérogations au transport partagé",
        content: [
          "Certains patients bénéficient d'une dérogation au transport partagé pour raisons médicales. Le médecin prescripteur inscrit la dérogation sur le bon de transport (case « transport individuel médicalement justifié »). Le secrétariat vérifie la présence de cette mention et organise un transport individuel pour ces patients.",
          "Les motifs de dérogation les plus fréquents sont : l'immunodépression sévère (chimiothérapie), les troubles psychiatriques, le handicap lourd, et les soins palliatifs. Le secrétariat ne juge pas le motif médical mais s'assure que la dérogation est prescrite.",
          "Le secrétariat tient un registre des dérogations accordées pour le suivi et le reporting. Ce registre permet d'évaluer le taux de dérogation et d'identifier les patients qui pourraient éventuellement passer en transport partagé si leur état s'améliore."
        ],
      },
    ],
    faq: [
      {
        q: "Qui organise le transport partagé dans un hôpital ?",
        a: "Le secrétariat médical ou le bureau des transports identifie les patients éligibles, constitue les groupes et coordonne avec les transporteurs.",
      },
      {
        q: "Comment regrouper les patients pour le transport partagé ?",
        a: "Par zone géographique (même secteur) et par créneau horaire (arrivée à +/- 30 min). Un tableau ou un outil numérique facilite le regroupement.",
      },
      {
        q: "Que faire si un patient refuse le transport partagé ?",
        a: "Vérifiez s'il a une dérogation médicale. Si oui, transport individuel. Sinon, expliquez les avantages et vérifiez avec le médecin la possibilité de dérogation.",
      },
    ],
    relatedGuides: [
      "decret-fevrier-2025-transport-partage",
      "obligation-transport-partage-2026",
      "plateforme-transport-etablissements-sante",
      "partenariat-hopital-transport",
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CLUSTER 8 — Pratique & Outils (4 guides)
  // ═══════════════════════════════════════════════════════════════

  {
    slug: "liste-taxis-conventionnes-departement",
    title: "Liste des taxis conventionnés par département : annuaire 2025",
    description:
      "Comment trouver un taxi conventionné dans votre département ? Annuaire, sources officielles, plateformes en ligne et critères de choix du bon transporteur.",
    date: "2025-01-01",
    lastUpdated: "2025-04-01",
    readTime: "8 min",
    category: "Pratique",
    answerBox:
      "Pour trouver un taxi conventionné dans votre département, consultez Ameli.fr, contactez votre CPAM au 3646, ou utilisez des plateformes comme Medi-Trajet qui référencent les taxis conventionnés par zone géographique.",
    sections: [
      {
        id: "ou-trouver-liste",
        title: "Où trouver la liste des taxis conventionnés ?",
        content: [
          "La liste officielle des taxis conventionnés est disponible auprès de votre CPAM. Vous pouvez l'obtenir par téléphone (3646, service gratuit + coût de l'appel), en agence CPAM ou sur le site Ameli.fr. La liste est mise à jour régulièrement et classée par commune ou par code postal.",
          "Les plateformes en ligne comme Medi-Trajet proposent un annuaire interactif des taxis conventionnés avec géolocalisation. Vous pouvez rechercher les taxis conventionnés proches de votre domicile, consulter leurs disponibilités et réserver en ligne. Ces plateformes ajoutent souvent des avis patients et des critères de choix supplémentaires.",
          "Les établissements de santé (hôpitaux, cliniques, centres de dialyse) disposent généralement d'une liste de taxis conventionnés habituels. Le service social ou le bureau des entrées peut vous orienter vers des transporteurs fiables et expérimentés.",
          "Les associations de patients (France Rein, Ligue contre le cancer, APF France handicap) partagent souvent des recommandations de taxis conventionnés testés et approuvés par leurs adhérents. Le bouche-à-oreille entre patients est une source d'information précieuse."
        ],
      },
      {
        id: "criteres-choix",
        title: "Critères de choix d'un taxi conventionné",
        content: [
          "La ponctualité est le critère le plus important pour les patients. Un taxi régulièrement en retard perturbe le planning médical et génère du stress. Testez un taxi conventionné sur quelques trajets avant de vous engager pour des transports réguliers.",
          "La qualité du service humain fait la différence : aide à la montée/descente, portage des affaires, accompagnement jusqu'à l'accueil, conduite douce et adaptée. Certains chauffeurs sont particulièrement attentionnés envers les patients âgés, handicapés ou anxieux.",
          "La disponibilité du taxi (horaires étendus, week-end, jours fériés) est importante pour les patients ayant des rendez-vous tôt le matin ou en fin de journée. Vérifiez la plage horaire de disponibilité avant de réserver.",
          "Le véhicule doit être propre, confortable et adapté à votre situation. Si vous avez un fauteuil roulant, vérifiez que le taxi dispose d'un véhicule PMR. Si vous voyagez avec un accompagnant, assurez-vous que le véhicule a suffisamment de places."
        ],
      },
      {
        id: "verifier-conventionnement",
        title: "Vérifier le conventionnement d'un taxi",
        content: [
          "Pour vérifier qu'un taxi est bien conventionné par la CPAM, vous pouvez contacter votre CPAM au 3646 en fournissant le nom ou le numéro de licence du chauffeur. La CPAM vous confirmera s'il est conventionné et si sa convention est en cours de validité.",
          "Le taxi conventionné dispose d'un numéro de conventionnement CPAM qui figure sur ses documents de facturation. Vous pouvez lui demander ce numéro et le vérifier auprès de la CPAM. En cas de doute, n'hésitez pas à demander confirmation avant le trajet.",
          "Attention aux taxis qui se disent conventionnés sans l'être réellement. Un taxi non conventionné ne peut pas pratiquer le tiers payant et vous devrez avancer la totalité des frais sans garantie de remboursement. Vérifiez systématiquement le conventionnement."
        ],
      },
      {
        id: "changer-taxi",
        title: "Changer de taxi conventionné",
        content: [
          "Vous êtes libre de changer de taxi conventionné à tout moment, même en cours de traitement. Le libre choix du transporteur est un droit garanti. Aucune justification n'est nécessaire et aucune pénalité ne s'applique.",
          "Si vous changez de taxi en cours de traitement itératif, informez le nouveau taxi de votre planning de soins et de vos besoins spécifiques. Transmettez-lui une copie de votre prescription de transport en cours. Le nouveau taxi prend le relais du précédent sans interruption."
        ],
      },
    ],
    faq: [
      {
        q: "Comment trouver un taxi conventionné près de chez moi ?",
        a: "Appelez votre CPAM au 3646, consultez Ameli.fr ou utilisez des plateformes comme Medi-Trajet. Les hôpitaux ont aussi des listes de taxis habituels.",
      },
      {
        q: "Comment vérifier qu'un taxi est conventionné ?",
        a: "Contactez votre CPAM au 3646 avec le nom ou la licence du chauffeur. La CPAM confirmera le conventionnement et sa validité.",
      },
      {
        q: "Peut-on changer de taxi conventionné en cours de traitement ?",
        a: "Oui, le libre choix du transporteur permet de changer à tout moment, sans justification ni pénalité. Informez le nouveau taxi de votre planning.",
      },
    ],
    relatedGuides: [
      "taxi-conventionne-cpam-guide",
      "taxi-conventionne-comment-ca-marche",
      "choisir-transport-medical",
      "devenir-taxi-conventionne-cpam",
    ],
    relatedCities: ["paris", "lyon", "marseille", "toulouse", "bordeaux", "nantes", "lille"],
  },

  {
    slug: "choisir-transport-medical",
    title: "Comment choisir son transport médical ? Guide de décision",
    description:
      "Taxi, VSL ou ambulance : comment choisir le bon mode de transport médical ? Critères de choix, rôle du médecin, comparatif et aide à la décision pratique.",
    date: "2025-01-05",
    lastUpdated: "2025-04-02",
    readTime: "9 min",
    category: "Pratique",
    answerBox:
      "Le choix du transport médical dépend de l'état de santé du patient : taxi conventionné pour les patients assis autonomes, VSL pour le transport partagé économique, ambulance pour les patients allongés ou sous surveillance. C'est le médecin qui prescrit.",
    sections: [
      {
        id: "role-medecin-choix",
        title: "Le rôle du médecin dans le choix du transport",
        content: [
          "Le choix du mode de transport médical n'appartient pas au patient seul : c'est le médecin prescripteur qui détermine le mode de transport adapté à l'état de santé du patient. Ce choix est inscrit sur le bon de transport (Cerfa S3138) et conditionne le remboursement.",
          "Le médecin évalue plusieurs critères : la capacité du patient à rester en position assise pendant la durée du trajet, son autonomie à la marche (avec ou sans aide), le besoin éventuel de surveillance médicale, la distance du trajet et l'existence de contre-indications au transport partagé.",
          "Si vous estimez que le mode de transport prescrit n'est pas adapté à votre situation, discutez-en avec votre médecin. Il peut modifier la prescription s'il juge que vos arguments sont médicalement justifiés. Le patient ne peut pas modifier unilatéralement le mode de transport."
        ],
      },
      {
        id: "quand-taxi",
        title: "Quand choisir le taxi conventionné ?",
        content: [
          "Le taxi conventionné est le mode de transport le plus adapté pour les patients autonomes en position assise, qui souhaitent un transport confortable, individuel et discret. Il est idéal pour les consultations, les examens, les soins itératifs et les hospitalisations de jour.",
          "Le taxi convient particulièrement aux patients fatigués après un traitement (chimiothérapie, dialyse) qui ont besoin du confort d'un véhicule individuel pour le retour. La disponibilité 24h/24 en fait aussi le choix logique pour les rendez-vous tôt le matin ou tard le soir.",
          "Le taxi conventionné est recommandé pour les patients qui refusent le transport partagé (sans contre-indication médicale). Le tarif est plus élevé que le VSL mais le confort supérieur peut justifier ce surcoût pour le patient. Le médecin peut prescrire le taxi si l'état du patient le justifie."
        ],
      },
      {
        id: "quand-vsl",
        title: "Quand choisir le VSL ?",
        content: [
          "Le VSL est adapté aux patients acceptant le transport partagé et souhaitant le mode le plus économique. Il convient aux soins itératifs réguliers (dialyse, radiothérapie, rééducation) où le transport partagé est facilement organisable.",
          "Le VSL est équipé d'un matériel médical de base (oxygène, tensiomètre) que le taxi n'a pas. Pour les patients nécessitant un minimum d'équipement médical sans avoir besoin d'une ambulance, le VSL est un bon compromis.",
          "La limitation horaire du VSL (principalement heures ouvrées) restreint son utilisation pour les rendez-vous de nuit ou de week-end. Pour ces créneaux, le taxi conventionné ou l'ambulance sont plus adaptés."
        ],
      },
      {
        id: "quand-ambulance",
        title: "Quand l'ambulance est-elle nécessaire ?",
        content: [
          "L'ambulance est prescrite lorsque le patient doit être transporté en position allongée ou semi-assise, ou lorsqu'une surveillance médicale est nécessaire pendant le trajet. C'est le mode le plus coûteux mais aussi le plus sécurisé.",
          "Les situations typiques nécessitant une ambulance : sortie d'hospitalisation après chirurgie lourde, patient sous oxygénothérapie continue, transfert inter-hospitalier avec monitoring, patient présentant un risque de malaise ou de chute.",
          "L'ambulance ne doit pas être prescrite « par précaution » ou par convenance. La CPAM contrôle les prescriptions d'ambulance et peut refuser le remboursement si le mode de transport n'est pas médicalement justifié."
        ],
      },
      {
        id: "arbre-decision",
        title: "Arbre de décision simplifié",
        content: [
          "Si le patient ne peut pas rester assis, c'est l'ambulance. S'il peut rester assis mais a besoin d'une surveillance médicale, c'est aussi l'ambulance.",
          "Si le patient est autonome et accepte de partager le véhicule avec d'autres patients, le VSL est le plus économique. Sinon, le taxi conventionné offre plus de confort et de flexibilité.",
          "Pour les trajets en dehors des horaires de bureau (tôt le matin, le soir, le week-end), le taxi conventionné est souvent la seule option disponible. Le VSL a des horaires plus limités."
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on choisir entre taxi, VSL et ambulance ?",
        a: "C'est le médecin qui prescrit le mode de transport. Le patient peut discuter du choix avec son médecin mais ne peut pas le modifier unilatéralement.",
      },
      {
        q: "Le taxi conventionné est-il meilleur que le VSL ?",
        a: "Le taxi offre plus de confort (véhicule individuel) mais coûte plus cher. Le VSL est plus économique et permet le transport partagé. Le choix dépend de l'état du patient.",
      },
      {
        q: "Quand l'ambulance est-elle indispensable ?",
        a: "Quand le patient doit être allongé ou sous surveillance médicale. L'ambulance est le seul véhicule avec équipement médical complet et personnel DEA.",
      },
    ],
    relatedGuides: [
      "taxi-conventionne-cpam-guide",
      "vsl-vehicule-sanitaire-leger",
      "ambulance-quand-comment",
      "tarifs-taxi-vsl-ambulance",
      "transport-assis-professionnalise",
    ],
  },

  {
    slug: "preparer-transport-medical",
    title: "Préparer son transport médical : checklist complète",
    description:
      "Comment bien préparer votre transport médical : documents, bagages, timing, accompagnant, conseils selon le type de soin et checklist téléchargeable.",
    date: "2025-01-08",
    lastUpdated: "2025-04-03",
    readTime: "8 min",
    category: "Pratique",
    answerBox:
      "Pour préparer votre transport médical, rassemblez vos documents (bon de transport, carte Vitale, pièce d'identité), réservez votre transporteur en avance, prévoyez une marge horaire et emportez le nécessaire pour votre confort.",
    sections: [
      {
        id: "documents-preparer",
        title: "Documents à préparer",
        content: [
          "Rassemblez les documents indispensables la veille du transport : le bon de transport (Cerfa S3138) signé par le médecin, votre carte Vitale à jour, une pièce d'identité en cours de validité et votre attestation de mutuelle (si tiers payant complémentaire).",
          "Si vous êtes en ALD, vérifiez que la case ALD est cochée sur le bon de transport. Si vous bénéficiez de la CSS, assurez-vous que vos droits sont enregistrés sur la carte Vitale. Pour les transports avec entente préalable, gardez l'accord de la CPAM (ou la preuve de la demande si le délai de 15 jours n'est pas écoulé).",
          "Préparez également les documents nécessaires pour votre rendez-vous médical : ordonnances en cours, résultats d'examens récents, carnet de santé (pour les enfants), courrier du médecin adressant (si consultation spécialisée). Rangez tout dans une pochette facilement accessible."
        ],
      },
      {
        id: "reservation-transport",
        title: "Réserver son transport",
        content: [
          "Réservez votre transport le plus tôt possible après réception de votre convocation médicale. Pour les rendez-vous programmés, une réservation 48 à 72 heures à l'avance est recommandée. Pour les transports réguliers, établissez un planning récurrent avec le transporteur.",
          "Lors de la réservation, précisez : la date et l'heure de prise en charge, l'adresse de départ, l'adresse de destination (nom de l'établissement), si un retour est prévu (et à quelle heure approximative), et d'éventuels besoins particuliers (fauteuil roulant, accompagnant, véhicule PMR).",
          "Confirmez la réservation la veille du transport, surtout pour un premier trajet avec un nouveau transporteur. Notez le numéro de téléphone du chauffeur ou de la société de transport pour pouvoir les joindre le jour J en cas d'imprévu."
        ],
      },
      {
        id: "jour-du-transport",
        title: "Le jour du transport",
        content: [
          "Soyez prêt 10 minutes avant l'heure de prise en charge convenue. Habillez-vous confortablement avec des vêtements faciles à enfiler et à retirer (pour les examens). Portez des chaussures fermées et stables.",
          "Prévoyez une marge horaire pour les imprévus : embouteillages, difficulté à trouver le service dans l'hôpital, formalités d'accueil. Arriver 15 à 30 minutes avant le rendez-vous est une bonne pratique.",
          "Emportez de quoi patienter (livre, magazine, téléphone chargé) et de quoi vous hydrater (bouteille d'eau). Pour les traitements longs (chimiothérapie, dialyse), prévoyez un en-cas, une couverture et des écouteurs.",
          "Si vous avez un accompagnant, confirmez-lui l'heure et le lieu de rendez-vous. Si l'accompagnant voyage dans le transport, il doit être présent au moment de la prise en charge."
        ],
      },
      {
        id: "apres-le-soin",
        title: "Après le soin : préparer le retour",
        content: [
          "Pour le trajet retour, prévenez le transporteur de l'heure approximative de fin de votre rendez-vous. Si l'heure est incertaine (traitement de durée variable), convenez d'appeler le transporteur quand vous êtes prêt à partir. Prévoyez un délai de 15 à 45 minutes avant l'arrivée du véhicule.",
          "Si votre état après le soin est différent de votre état à l'aller (fatigue après chimiothérapie, sédation après examen), informez le chauffeur pour qu'il adapte sa conduite. N'hésitez pas à demander un arrêt si vous vous sentez mal pendant le trajet.",
          "Conservez le récépissé de transport remis par le chauffeur. Ce document est la preuve du trajet effectué et peut être utile en cas de litige ou de vérification par la CPAM."
        ],
      },
    ],
    faq: [
      {
        q: "Quand réserver son transport médical ?",
        a: "Réservez 48 à 72 heures à l'avance pour les rendez-vous programmés. Pour les transports réguliers, établissez un planning récurrent avec le transporteur.",
      },
      {
        q: "Que faut-il emporter pour un transport médical ?",
        a: "Documents (bon de transport, carte Vitale, pièce d'identité), de quoi s'hydrater, un en-cas pour les traitements longs, et de quoi patienter (lecture, téléphone).",
      },
      {
        q: "Combien de temps avant le rendez-vous faut-il arriver ?",
        a: "Prévoyez 15 à 30 minutes d'avance pour les formalités d'accueil et les imprévus. Les premières consultations peuvent nécessiter plus de temps.",
      },
    ],
    relatedGuides: [
      "documents-transport-medical",
      "taxi-conventionne-comment-ca-marche",
      "bon-de-transport-medical",
      "choisir-transport-medical",
    ],
  },

  {
    slug: "faq-nationale-transport-medical",
    title: "FAQ nationale du transport médical en France",
    description:
      "Les 50 questions les plus fréquentes sur le transport médical en France : remboursement, prescription, modes de transport, droits des patients et démarches CPAM.",
    date: "2025-01-01",
    lastUpdated: "2025-04-03",
    readTime: "15 min",
    category: "Pratique",
    answerBox:
      "Le transport médical en France est remboursé par la CPAM sur prescription médicale. Le taux est de 65 % ou 100 % selon la situation (ALD, CSS). Les modes de transport sont le taxi conventionné, le VSL et l'ambulance.",
    sections: [
      {
        id: "faq-remboursement",
        title: "Questions sur le remboursement",
        content: [
          "Le remboursement du transport médical par la CPAM est un sujet complexe qui suscite de nombreuses interrogations. Le taux standard est de 65 % du tarif conventionné, mais il passe à 100 % dans plusieurs situations : ALD exonérante (pour les soins en rapport avec la pathologie), accident du travail, maladie professionnelle, maternité à partir du 6e mois, CSS et invalidité.",
          "La franchise médicale de 2 € par trajet s'applique dans tous les cas sauf pour les bénéficiaires de la CSS, les mineurs de moins de 18 ans et les femmes enceintes à partir du 6e mois. Cette franchise est plafonnée à 50 € par an. Elle ne peut pas être remboursée par les complémentaires santé.",
          "Le tiers payant dispense le patient d'avancer les frais. Il est automatique avec les transporteurs conventionnés pour la part obligatoire. Certains transporteurs pratiquent aussi le tiers payant avec les principales mutuelles pour le ticket modérateur de 35 %.",
          "Le délai de remboursement est de 5 à 7 jours ouvrés après réception du dossier complet par la CPAM. En tiers payant, le patient ne perçoit pas directement le remboursement : il est versé au transporteur."
        ],
      },
      {
        id: "faq-prescription",
        title: "Questions sur la prescription",
        content: [
          "La prescription médicale de transport (Cerfa S3138, dit « bon de transport ») est obligatoire pour tout remboursement. Elle est établie par le médecin traitant, le médecin hospitalier ou tout médecin constatant la nécessité du transport. La prescription doit être antérieure au trajet, sauf en cas d'urgence.",
          "Le bon de transport précise le motif (ALD, hospitalisation, AT/MP, convocation, longue distance), le mode de transport (taxi, VSL, ambulance, véhicule personnel), la destination et les dates. Pour les transports en série, le nombre de séances et la fréquence sont indiqués.",
          "La demande d'entente préalable est obligatoire pour les transports en série de plus de 50 km aller (4 trajets sur 2 mois) et les transports de plus de 150 km aller. Le silence de la CPAM sous 15 jours vaut acceptation.",
          "La prescription peut couvrir plusieurs trajets (transports en série). Le médecin indique le nombre total de séances et la fréquence. Une seule prescription suffit pour l'ensemble du traitement, évitant au patient de redemander un bon à chaque séance."
        ],
      },
      {
        id: "faq-modes-transport",
        title: "Questions sur les modes de transport",
        content: [
          "Le taxi conventionné est le mode le plus utilisé (55 % des transports). Il offre un véhicule individuel, un confort de berline et une disponibilité 24h/24. Le tarif moyen est de 55 à 70 € l'aller-retour. Le tiers payant est automatique.",
          "Le VSL (Véhicule Sanitaire Léger) est le mode le moins cher (30 à 40 € en moyenne). Il permet le transport partagé de 2 à 3 patients. Le conducteur est auxiliaire ambulancier. Les horaires sont limités aux heures ouvrées.",
          "L'ambulance est le mode le plus coûteux (80 à 120 € en moyenne) et le plus médicalisé. Elle est réservée aux patients devant être transportés allongés ou sous surveillance. L'équipage comprend un ambulancier DEA et un auxiliaire.",
          "Le véhicule personnel est remboursé à environ 0,30 €/km. C'est l'option la moins coûteuse pour la CPAM mais elle nécessite que le patient puisse conduire ou être conduit par un proche."
        ],
      },
      {
        id: "faq-droits-patients",
        title: "Questions sur les droits des patients",
        content: [
          "Le libre choix du transporteur est un droit garanti. Aucun établissement, médecin ou CPAM ne peut imposer un transporteur particulier. Le patient peut changer de transporteur à tout moment sans justification.",
          "Le transporteur est soumis au secret professionnel sur l'état de santé du patient, sa destination et la nature de ses soins. Il ne peut divulguer aucune information à des tiers sans l'accord du patient.",
          "En cas de litige, le patient peut saisir la commission de recours amiable (CRA) de la CPAM sous 2 mois. Le recours est gratuit et peut être mené sans avocat. Le tribunal judiciaire peut être saisi en dernier recours.",
          "L'accompagnement par un proche peut être prescrit par le médecin si l'état du patient le justifie. L'accompagnant voyage sans surcoût en taxi conventionné. Pour les longs trajets, le billet de l'accompagnant peut être remboursé."
        ],
      },
      {
        id: "faq-reforme-2025",
        title: "Questions sur la réforme 2025",
        content: [
          "La réforme 2025 introduit le transport partagé obligatoire pour les soins itératifs à partir du 1er janvier 2026. Les patients effectuant des soins réguliers (dialyse, chimio, radiothérapie) devront partager leur véhicule avec d'autres patients, sauf dérogation médicale.",
          "Des dérogations sont prévues pour les patients immunodéprimés, handicapés, souffrant de troubles psychiatriques, en soins palliatifs ou âgés de moins de 16 ans. Le médecin prescripteur décide de la dérogation sur le bon de transport.",
          "Les plateformes numériques de réservation et la dématérialisation du bon de transport sont également prévues par la réforme. Le format papier restera possible pendant la période de transition.",
          "Le libre choix du transporteur est maintenu par la réforme. Le patient choisit librement son transporteur conventionné, qui doit être en mesure d'organiser le transport partagé si prescrit."
        ],
      },
    ],
    faq: [
      {
        q: "Qu'est-ce qu'un transport médical remboursé ?",
        a: "C'est un transport vers un lieu de soins, prescrit par un médecin sur un bon de transport, effectué par un transporteur conventionné et remboursé par la CPAM.",
      },
      {
        q: "Le transport médical est-il gratuit ?",
        a: "Avec le tiers payant, le patient n'avance pas les frais. Il reste la franchise de 2 €/trajet (sauf CSS et mineurs) et le ticket modérateur de 35 % (sauf ALD).",
      },
      {
        q: "Comment obtenir un bon de transport ?",
        a: "Demandez à votre médecin (traitant, hospitalier ou spécialiste) de remplir le formulaire Cerfa S3138 avant votre trajet.",
      },
      {
        q: "Peut-on utiliser son véhicule personnel ?",
        a: "Oui, avec une prescription médicale. Le remboursement se fait sous forme d'indemnités kilométriques (environ 0,30 €/km).",
      },
      {
        q: "Quel numéro appeler pour un transport médical ?",
        a: "Pour réserver : votre taxi conventionné ou votre société de VSL. Pour une urgence : le 15 (SAMU). Pour des informations : le 3646 (CPAM).",
      },
    ],
    relatedGuides: [
      "guide-ultime-transport-medical-france",
      "remboursement-transport-cpam",
      "bon-de-transport-medical",
      "choisir-transport-medical",
      "tarifs-taxi-vsl-ambulance",
    ],
    relatedCities: ["paris", "lyon", "marseille", "toulouse", "bordeaux"],
  },
];
