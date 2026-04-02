import StatCard from "@/components/ui/StatCard";

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard value="7 Mrd€" label="Marché du transport médical" sublabel="en France" />
          <StatCard value="4,6M" label="Patients transportés" sublabel="chaque année" />
          <StatCard value="+5%" label="Croissance annuelle" sublabel="du secteur" />
          <StatCard value="<30s" label="Matching transporteur" sublabel="temps moyen" />
        </div>
      </div>
    </section>
  );
}
