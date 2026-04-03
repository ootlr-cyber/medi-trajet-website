import Link from "next/link";
import { Plus, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Plus className="w-5 h-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-xl font-bold text-white">
                Medi<span className="text-primary-light">Trajet</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Plateforme de transport médical partagé pour les établissements
              de santé, patients et transporteurs conventionnés CPAM.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/etablissements" className="hover:text-primary-light transition-colors">Établissements de santé</Link></li>
              <li><Link href="/patients" className="hover:text-primary-light transition-colors">Espace Patients</Link></li>
              <li><Link href="/transporteurs" className="hover:text-primary-light transition-colors">Espace Transporteurs</Link></li>
              <li><Link href="/blog" className="hover:text-primary-light transition-colors">Blog &amp; Ressources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Ressources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/taxi-conventionne" className="hover:text-primary-light transition-colors">Taxi conventionné par ville</Link></li>
              <li><Link href="/guides" className="hover:text-primary-light transition-colors">Guides transport médical</Link></li>
              <li><Link href="/guides/remboursement-transport-cpam" className="hover:text-primary-light transition-colors">Remboursement CPAM</Link></li>
              <li><Link href="/a-propos" className="hover:text-primary-light transition-colors">À propos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/mentions-legales" className="hover:text-primary-light transition-colors">Mentions légales</Link></li>
              <li><Link href="/politique-de-confidentialite" className="hover:text-primary-light transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/cgu" className="hover:text-primary-light transition-colors">CGU</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <a href="mailto:contact@meditrajet.fr" className="hover:text-primary-light transition-colors">
                  contact@meditrajet.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-light shrink-0" />
                Bessancourt, France
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-4">
              Outlier Distribution, Bessancourt (95550)
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MediTrajet · Outlier Distribution. Tous droits réservés.</p>
          <p>Données hébergées en France · Conforme RGPD &amp; HDS</p>
        </div>
      </div>
    </footer>
  );
}
