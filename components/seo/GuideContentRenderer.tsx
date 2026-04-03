import type { GuideSection } from "@/lib/seo-data/types";
import { CheckCircle, AlertCircle, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

function detectHighlight(text: string): "tip" | "warning" | "step" | null {
  const lower = text.toLowerCase();
  if (lower.startsWith("attention") || lower.startsWith("important") || lower.includes("obligatoire")) return "warning";
  if (lower.startsWith("conseil") || lower.startsWith("astuce") || lower.startsWith("bon à savoir")) return "tip";
  if (/^(étape|step|\d+[\.\)]\s)/i.test(text)) return "step";
  return null;
}

function ParagraphBlock({ text, index }: { text: string; index: number }) {
  const highlight = detectHighlight(text);

  if (highlight === "warning") {
    return (
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4 mb-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
          <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    );
  }

  if (highlight === "tip") {
    return (
      <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-5 py-4 mb-4">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    );
  }

  // Alternate paragraph styling for visual rhythm
  if (index > 0 && index % 3 === 0) {
    return (
      <div className="bg-gray-50 rounded-xl px-5 py-4 mb-4 border border-gray-100">
        <p className="text-gray-600 leading-relaxed">{text}</p>
      </div>
    );
  }

  return (
    <p className="text-gray-600 leading-relaxed mb-4">{text}</p>
  );
}

export default function GuideContentRenderer({
  sections,
}: {
  sections: GuideSection[];
}) {
  return (
    <div className="space-y-12">
      {sections.map((section, si) => (
        <section key={section.id} id={section.id}>
          {/* Section header with colored accent */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <span className="text-primary font-bold text-sm">{si + 1}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-dark">
              {section.title}
            </h2>
          </div>

          {/* Content paragraphs with visual variety */}
          {section.content.map((paragraph, i) => (
            <ParagraphBlock key={i} text={paragraph} index={i} />
          ))}

          {/* Subsections */}
          {section.subsections?.map((sub) => (
            <div key={sub.id} id={sub.id} className="mt-8 pl-4 border-l-2 border-primary/15">
              <h3 className="text-lg font-semibold text-dark mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-secondary" />
                {sub.title}
              </h3>
              {sub.content.map((paragraph, i) => (
                <ParagraphBlock key={i} text={paragraph} index={i} />
              ))}
            </div>
          ))}

          {/* Separator between sections */}
          {si < sections.length - 1 && (
            <div className="pt-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            </div>
          )}
        </section>
      ))}

      {/* CTA in-content */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
        <p className="font-semibold text-dark mb-2">Besoin d&apos;organiser vos transports médicaux ?</p>
        <p className="text-sm text-gray-500 mb-4">MediTrajet simplifie la réservation et le suivi pour les patients, établissements et transporteurs.</p>
        <Link
          href="/etablissements"
          className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-primary-dark transition-colors"
        >
          Découvrir MediTrajet
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
