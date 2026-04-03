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
    <div className="relative flex flex-col items-center text-center group">
      {/* Numero */}
      <div className="relative mb-4">
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 group-hover:scale-105 transition-all">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 bg-secondary rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md">
          {number}
        </div>
      </div>
      <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      {/* Connecteur fleche */}
      {!isLast && (
        <div className="hidden lg:flex absolute top-8 left-[calc(50%+48px)] w-[calc(100%-96px)] items-center">
          <div className="flex-1 border-t-2 border-dashed border-primary/30" />
          <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-primary/30" />
        </div>
      )}
    </div>
  );
}
