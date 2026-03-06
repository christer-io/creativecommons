interface SectionHeaderProps {
  title: string;
  subTitle: string;
}

export function SectionHeader({ title, subTitle }: SectionHeaderProps) {
  return (
    <div className="p-4">
      <div className="text-3xl text-center font-sans text-blue-900">
        <h2>{title}</h2>
        <h3 className="text-base">{subTitle}</h3>
      </div>
    </div>
  );
}
