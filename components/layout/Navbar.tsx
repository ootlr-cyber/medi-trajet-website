"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Plus, ChevronDown } from "lucide-react";

const resourcesLinks = [
  { href: "/taxi-conventionne", label: "Taxi conventionné par ville" },
  { href: "/guides", label: "Guides transport médical" },
  { href: "/guides/remboursement-transport-cpam", label: "Remboursement CPAM" },
  { href: "/guides/taxi-conventionne-comment-ca-marche", label: "Comment ça marche" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainLinks = [
    { href: "/etablissements", label: "Établissements" },
    { href: "/patients", label: "Patients" },
    { href: "/transporteurs", label: "Transporteurs" },
    { href: "/a-propos", label: "À propos" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <Plus className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <span className="text-xl font-bold text-dark">
              Medi<span className="text-primary">Trajet</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdown Ressources */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 text-gray-600 hover:text-primary font-medium transition-colors text-sm"
              >
                Ressources
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={() => setResourcesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/etablissements#demo"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold transition-colors text-sm"
            >
              Demander une démo
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100">
            <div className="flex flex-col gap-1 pt-4">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2 pb-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ressources</p>
              </div>
              {resourcesLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/etablissements#demo"
                className="mx-4 mt-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-semibold text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Demander une démo
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
