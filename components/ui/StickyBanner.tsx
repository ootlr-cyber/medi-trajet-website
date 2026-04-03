"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

export default function StickyBanner() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setVisible(scrollPercent > 0.3);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300">
      <div className="bg-gradient-to-r from-blue-800 to-emerald-700 shadow-2xl shadow-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <p className="text-white text-sm sm:text-base font-medium hidden sm:block">
            Simplifiez vos transports médicaux dès aujourd&apos;hui
          </p>
          <p className="text-white text-sm font-medium sm:hidden">
            Simplifiez vos transports
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/etablissements#demo"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-blue-800 px-5 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              Demander une démo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="text-white/60 hover:text-white p-1 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
