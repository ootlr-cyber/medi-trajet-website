import StatCard from "@/components/ui/StatCard";

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard value="6,3 Mrd€" label="Dépenses transport médical" sublabel="France, 2023 (Cnam)" />
          <StatCard value="6,4M" label="Patients transportés" sublabel="chaque année" />
          <StatCard value="19→50%" label="Transport partagé imposé" sublabel="objectif 2026 (décret 2025)" />
          <StatCard value="300M€" label="Économies visées" sublabel="2025-2027 (protocole)" />
        </div>
      </div>
    </section>
  );
}
