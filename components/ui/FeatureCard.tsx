import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "primary" | "secondary" | "accent";
}

const colorMap = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent: "bg-amber-50 text-accent",
};

export default function FeatureCard({ icon: Icon, title, description, color = "primary" }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group">
      <div className={`w-12 h-12 rounded-xl ${colorMap[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
