export type SectionTitleProps = {
  title: string;
};
export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h3 className="absolute top-24 mr-[-20px] text-center text-2xl uppercase tracking-[20px] text-gray-500">
      {title}
    </h3>
  );
}
