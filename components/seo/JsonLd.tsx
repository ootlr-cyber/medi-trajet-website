export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MediTrajet",
    url: "https://meditrajet.fr",
    description:
      "Plateforme de transport médical partagé conventionné CPAM. Matching intelligent, suivi GPS temps réel, reporting ARS.",
    legalName: "Outlier Distribution",
    email: "contact@meditrajet.fr",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bessancourt",
      postalCode: "95550",
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
}

export function ArticleJsonLd({ title, description, url, datePublished }: ArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    author: {
      "@type": "Organization",
      name: "MediTrajet",
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
