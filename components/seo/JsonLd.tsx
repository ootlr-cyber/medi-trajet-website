export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MediTrajet",
    url: "https://meditrajet.fr",
    logo: "https://meditrajet.fr/images/logo-bpi.png",
    description:
      "Plateforme de transport médical partagé conventionné CPAM. Matching intelligent, suivi GPS temps réel, reporting ARS.",
    legalName: "Outlier Distribution",
    email: "contact@meditrajet.fr",
    telephone: "+33-1-00-00-00-00",
    foundingDate: "2024",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bessancourt",
      postalCode: "95550",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MediTrajet",
    url: "https://meditrajet.fr",
    description:
      "Plateforme de transport médical partagé conventionné CPAM.",
    publisher: {
      "@type": "Organization",
      name: "MediTrajet",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "MediTrajet - Plateforme de transport médical partagé",
    description:
      "Plateforme SaaS de gestion du transport médical partagé pour les établissements de santé. Matching automatique des patients, suivi GPS, reporting ARS/CPAM. Conforme au décret février 2025.",
    provider: {
      "@type": "Organization",
      name: "MediTrajet",
      url: "https://meditrajet.fr",
    },
    serviceType: "Transport médical partagé",
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Établissements de santé, patients ALD, transporteurs conventionnés",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Démo gratuite, pilote gratuit pour les 10 premiers établissements",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MediTrajet",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    description:
      "Application web de gestion du transport médical partagé. Portail établissement, matching patients, suivi GPS, facturation CPAM.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "Essai gratuit",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface FaqItem {
  q: string;
  a: string;
}

export function FAQJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}

export function ArticleJsonLd({ title, description, url, datePublished, dateModified }: ArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "MediTrajet",
      url: "https://meditrajet.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "MediTrajet",
      url: "https://meditrajet.fr",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface HowToStep {
  name: string;
  text: string;
}

export function HowToJsonLd({ name, description, steps }: { name: string; description: string; steps: HowToStep[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
