export type SectionTitleProps = {
  title: string;
};
export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h3 className="relative mr-[-20px] text-center text-2xl uppercase tracking-[20px] text-[#023047] ">
      {title}
    </h3>
  );
}
