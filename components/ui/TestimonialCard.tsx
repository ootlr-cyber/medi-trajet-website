import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export default function TestimonialCard({ name, role, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <Quote className="w-8 h-8 text-primary/20 mb-4" />
      <p className="text-gray-600 italic leading-relaxed mb-6">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-dark">{name}</div>
          <div className="text-sm text-gray-400">{role}</div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
