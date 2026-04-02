interface StatCardProps {
  value: string;
  label: string;
  sublabel?: string;
}

export default function StatCard({ value, label, sublabel }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">{value}</div>
      <div className="text-gray-700 font-semibold">{label}</div>
      {sublabel && <div className="text-gray-400 text-sm mt-1">{sublabel}</div>}
    </div>
  );
}
