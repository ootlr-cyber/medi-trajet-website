import SectionHeader from "@/components/ui/SectionHeader";
import { ClipboardList, Users, Navigation, BarChart3 } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  illustration: React.ReactNode;
}

function CalendarIllustration() {
  return (
    <svg viewBox="0 0 80 60" className="w-20 h-15 mx-auto mb-3">
      <rect x="10" y="8" width="60" height="48" rx="6" fill="#E0E7FF" stroke="#1E40AF" strokeWidth="1.5" />
      <rect x="10" y="8" width="60" height="14" rx="6" fill="#1E40AF" />
      <rect x="10" y="16" width="60" height="6" fill="#1E40AF" />
      <circle cx="24" cy="15" r="2" fill="white" />
      <circle cx="56" cy="15" r="2" fill="white" />
      <rect x="18" y="30" width="10" height="8" rx="2" fill="#3B82F6" opacity="0.3" />
      <rect x="35" y="30" width="10" height="8" rx="2" fill="#10B981" opacity="0.5" />
      <rect x="52" y="30" width="10" height="8" rx="2" fill="#3B82F6" opacity="0.3" />
      <rect x="18" y="43" width="10" height="8" rx="2" fill="#10B981" opacity="0.5" />
      <rect x="35" y="43" width="10" height="8" rx="2" fill="#3B82F6" opacity="0.3" />
      <rect x="52" y="43" width="10" height="8" rx="2" fill="#10B981" opacity="0.5" />
    </svg>
  );
}

function MatchingIllustration() {
  return (
    <svg viewBox="0 0 80 60" className="w-20 h-15 mx-auto mb-3">
      <circle cx="20" cy="20" r="10" fill="#E0E7FF" stroke="#1E40AF" strokeWidth="1.5" />
      <circle cx="20" cy="17" r="4" fill="#1E40AF" />
      <path d="M12,26 Q20,30 28,26" fill="#1E40AF" />
      <circle cx="60" cy="20" r="10" fill="#D1FAE5" stroke="#10B981" strokeWidth="1.5" />
      <circle cx="60" cy="17" r="4" fill="#10B981" />
      <path d="M52,26 Q60,30 68,26" fill="#10B981" />
      <path d="M32,20 L48,20" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3 2" />
      <polygon points="48,17 54,20 48,23" fill="#3B82F6" />
      <rect x="25" y="38" width="30" height="18" rx="4" fill="#F0FDF4" stroke="#10B981" strokeWidth="1" />
      <circle cx="35" cy="47" r="3" fill="#1E40AF" opacity="0.6" />
      <circle cx="45" cy="47" r="3" fill="#10B981" opacity="0.6" />
    </svg>
  );
}

function GpsIllustration() {
  return (
    <svg viewBox="0 0 80 60" className="w-20 h-15 mx-auto mb-3">
      <path d="M10,50 Q25,35 40,40 Q55,45 70,30" fill="none" stroke="#CBD5E1" strokeWidth="2" />
      <path d="M10,50 Q25,35 40,40 Q55,45 70,30" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="10" cy="50" r="4" fill="#10B981" />
      <circle cx="10" cy="50" r="7" fill="#10B981" opacity="0.2" />
      <g transform="translate(65,22)">
        <path d="M5,0 C8,0 10,2 10,5 C10,9 5,14 5,14 C5,14 0,9 0,5 C0,2 2,0 5,0Z" fill="#EF4444" />
        <circle cx="5" cy="5" r="2" fill="white" />
      </g>
      <rect x="30" y="10" width="22" height="16" rx="3" fill="white" stroke="#E2E8F0" strokeWidth="1" />
      <text x="41" y="20" textAnchor="middle" className="text-[7px] font-bold fill-primary">8 min</text>
    </svg>
  );
}

function ChartIllustration() {
  return (
    <svg viewBox="0 0 80 60" className="w-20 h-15 mx-auto mb-3">
      <rect x="5" y="5" width="70" height="50" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="14" y="35" width="8" height="14" rx="2" fill="#CBD5E1" />
      <rect x="26" y="28" width="8" height="21" rx="2" fill="#3B82F6" opacity="0.5" />
      <rect x="38" y="22" width="8" height="27" rx="2" fill="#3B82F6" opacity="0.7" />
      <rect x="50" y="16" width="8" height="33" rx="2" fill="#10B981" />
      <rect x="62" y="12" width="8" height="37" rx="2" fill="#10B981" opacity="0.8" />
      <path d="M14,32 L26,25 L38,19 L50,13 L62,9" fill="none" stroke="#1E40AF" strokeWidth="1.5" />
      <circle cx="50" cy="13" r="2.5" fill="#1E40AF" />
    </svg>
  );
}

const steps: Step[] = [
  {
    icon: ClipboardList,
    title: "Programmation",
    description: "Le secrétariat programme les transports du jour depuis le portail web MediTrajet.",
    illustration: <CalendarIllustration />,
  },
  {
    icon: Users,
    title: "Matching partagé",
    description: "L’algorithme regroupe automatiquement les patients compatibles dans un même véhicule.",
    illustration: <MatchingIllustration />,
  },
  {
    icon: Navigation,
    title: "Suivi temps réel",
    description: "Patient, aidants et établissement suivent le transporteur sur la carte avec ETA dynamique.",
    illustration: <GpsIllustration />,
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Dashboard avec taux de partage en temps réel et rapports exportés pour l’ARS et la CPAM.",
    illustration: <ChartIllustration />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Comment ça marche"
          title="Du secrétariat au reporting, tout est automatisé"
          description="MediTrajet coordonne l’établissement, le patient et le transporteur en une seule plateforme."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Illustration */}
              {step.illustration}
              {/* Icone + badge */}
              <div className="relative mb-4">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 group-hover:scale-105 transition-all">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              {/* Connecteur */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-[75px] left-[calc(50%+48px)] w-[calc(100%-96px)] items-center">
                  <div className="flex-1 border-t-2 border-dashed border-primary/20" />
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-primary/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
