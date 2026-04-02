export default function Stats() {
  const stats = [
    { value: "6,3", unit: "Mrd€", label: "Dépenses transport médical", sublabel: "France, 2023" },
    { value: "6,4", unit: "M", label: "Patients transportés", sublabel: "chaque année" },
    { value: "19→50", unit: "%", label: "Transport partagé imposé", sublabel: "objectif 2026" },
    { value: "300", unit: "M€", label: "Économies visées", sublabel: "2025-2027" },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-secondary-light text-sm font-semibold uppercase tracking-wider">Le marché</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Un marché massif, en croissance incontrôlée</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="mb-2">
                <span className="text-5xl sm:text-6xl font-bold text-white">{s.value}</span>
                <span className="text-2xl sm:text-3xl font-bold text-secondary-light ml-1">{s.unit}</span>
              </div>
              <div className="text-white/80 font-semibold text-sm">{s.label}</div>
              <div className="text-white/40 text-xs mt-1">{s.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
