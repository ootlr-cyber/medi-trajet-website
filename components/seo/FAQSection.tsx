"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/lib/seo-data/types";

function FAQJsonLdScript({ items }: { items: FAQ[] }) {
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

export default function FAQSection({
  items,
  title = "Questions fréquentes",
}: {
  items: FAQ[];
  title?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!items || items.length === 0) return null;

  return (
    <section className="mt-12">
      <FAQJsonLdScript items={items} />
      <h2 className="text-2xl font-bold text-dark mb-6">{title}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-dark pr-4">{item.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-4 sm:px-5 text-gray-600 leading-relaxed transition-all duration-200 ${
                openIndex === i ? "pb-4 sm:pb-5 max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
