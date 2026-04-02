import Link from "next/link";
import { Plus, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
              Plateforme de mise en relation entre patients et transporteurs
              médicaux conventionnés CPAM.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-primary-light transition-colors">Accueil</Link></li>
              <li><Link href="/patients" className="hover:text-primary-light transition-colors">Espace Patients</Link></li>
              <li><Link href="/transporteurs" className="hover:text-primary-light transition-colors">Espace Transporteurs</Link></li>
              <li><Link href="/a-propos" className="hover:text-primary-light transition-colors">À propos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-3 text-sm">
              <li><span className="hover:text-primary-light transition-colors cursor-pointer">Mentions légales</span></li>
              <li><span className="hover:text-primary-light transition-colors cursor-pointer">Politique de confidentialité</span></li>
              <li><span className="hover:text-primary-light transition-colors cursor-pointer">CGU</span></li>
              <li><span className="hover:text-primary-light transition-colors cursor-pointer">Protection des données</span></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary-light" />
                contact@meditrajet.fr
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-light" />
                01 23 45 67 89
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary-light" />
                Paris, France
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MediTrajet. Tous droits réservés.</p>
          <p>Données hébergées en France — Conforme RGPD & HDS</p>
        </div>
      </div>
    </footer>
  );
}
