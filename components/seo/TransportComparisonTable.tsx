import { transportComparison } from "@/lib/seo-data/types";
import { Check, X, Star } from "lucide-react";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < rating ? "fill-accent text-accent" : "text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TransportComparisonTable() {
  return (
    <section className="mt-10">
      <h2 className="text-xl sm:text-2xl font-bold text-dark mb-6">
        Taxi conventionné, VSL ou ambulance ?
      </h2>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-100 rounded-xl overflow-hidden text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left font-semibold text-dark">Critère</th>
              {transportComparison.map((mode) => (
                <th key={mode.name} className="p-4 text-left font-semibold text-dark">
                  {mode.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-50">
              <td className="p-4 text-gray-500 font-medium">Prix moyen</td>
              {transportComparison.map((mode) => (
                <td key={mode.name} className="p-4 font-semibold text-dark">{mode.averagePrice}</td>
              ))}
            </tr>
            <tr className="border-t border-gray-50 bg-gray-50/50">
              <td className="p-4 text-gray-500 font-medium">Confort</td>
              {transportComparison.map((mode) => (
                <td key={mode.name} className="p-4"><StarRating rating={mode.comfort} /></td>
              ))}
            </tr>
            <tr className="border-t border-gray-50">
              <td className="p-4 text-gray-500 font-medium">Disponibilité</td>
              {transportComparison.map((mode) => (
                <td key={mode.name} className="p-4 text-dark">{mode.availability}</td>
              ))}
            </tr>
            <tr className="border-t border-gray-50 bg-gray-50/50">
              <td className="p-4 text-gray-500 font-medium">Position patient</td>
              {transportComparison.map((mode) => (
                <td key={mode.name} className="p-4 text-dark">{mode.patientPosition}</td>
              ))}
            </tr>
            <tr className="border-t border-gray-50">
              <td className="p-4 text-gray-500 font-medium">Prescription</td>
              {transportComparison.map((mode) => (
                <td key={mode.name} className="p-4">
                  {mode.prescriptionRequired ? (
                    <Check className="w-4 h-4 text-secondary" />
                  ) : (
                    <X className="w-4 h-4 text-gray-300" />
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {transportComparison.map((mode) => (
          <div key={mode.name} className="border border-gray-100 rounded-xl p-4">
            <h3 className="font-bold text-dark mb-3">{mode.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Prix moyen</span>
                <span className="font-semibold text-dark">{mode.averagePrice}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Confort</span>
                <StarRating rating={mode.comfort} />
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Disponibilité</span>
                <span className="text-dark">{mode.availability}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Position</span>
                <span className="text-dark">{mode.patientPosition}</span>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-50">
              <p className="text-xs font-semibold text-secondary mb-1">Avantages</p>
              <ul className="text-xs text-gray-500 space-y-0.5">
                {mode.pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
