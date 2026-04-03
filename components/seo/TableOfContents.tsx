"use client";

import { useState } from "react";
import { List, ChevronDown } from "lucide-react";
import type { GuideSection } from "@/lib/seo-data/types";

export default function TableOfContents({
  sections,
}: {
  sections: GuideSection[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-50 rounded-2xl border border-gray-100 p-5 mb-10">
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full sm:hidden"
      >
        <span className="flex items-center gap-2 text-sm font-bold text-dark">
          <List className="w-4 h-4" />
          Sommaire
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Desktop always visible */}
      <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-dark mb-3">
        <List className="w-4 h-4" />
        Sommaire
      </div>

      <ol
        className={`space-y-1.5 ${
          isOpen ? "mt-3" : "hidden sm:block"
        }`}
      >
        {sections.map((section, i) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm text-gray-500 hover:text-primary transition-colors block py-0.5"
            >
              {i + 1}. {section.title}
            </a>
            {section.subsections && section.subsections.length > 0 && (
              <ol className="ml-4 space-y-1">
                {section.subsections.map((sub) => (
                  <li key={sub.id}>
                    <a
                      href={`#${sub.id}`}
                      className="text-xs text-gray-400 hover:text-primary transition-colors block py-0.5"
                    >
                      {sub.title}
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
