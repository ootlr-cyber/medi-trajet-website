import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { InternalLink } from "@/lib/seo-data/types";

interface LinkGroup {
  heading: string;
  links: InternalLink[];
}

export default function InternalLinksSection({
  title = "À lire aussi",
  groups,
}: {
  title?: string;
  groups: LinkGroup[];
}) {
  const nonEmptyGroups = groups.filter((g) => g.links.length > 0);
  if (nonEmptyGroups.length === 0) return null;

  return (
    <section className="mt-12 bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
      <h2 className="text-lg font-bold text-dark mb-5">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {nonEmptyGroups.map((group) => (
          <div key={group.heading}>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              {group.heading}
            </h3>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
