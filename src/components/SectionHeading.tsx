interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-headline mb-3">{title}</h2>
      {subtitle && <p className="text-body-lg max-w-2xl">{subtitle}</p>}
    </div>
  );
}
