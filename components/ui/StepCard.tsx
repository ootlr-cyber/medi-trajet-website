import { type LucideIcon } from "lucide-react";

interface StepCardProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function StepCard({ number, icon: Icon, title, description, isLast = false }: StepCardProps) {
  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/25">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <span className="text-xs font-bold text-primary mb-2">ÉTAPE {number}</span>
      <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      {!isLast && (
        <div className="hidden lg:block absolute top-8 left-[calc(50%+48px)] w-[calc(100%-96px)] border-t-2 border-dashed border-primary/30" />
      )}
    </div>
  );
}
