interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ tag, title, description, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      {tag && (
        <span className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${light ? "text-primary-light" : "text-primary"}`}>
          {tag}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${light ? "text-white" : "text-dark"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed ${light ? "text-gray-300" : "text-gray-500"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
