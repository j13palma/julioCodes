import {
  PortableText as PortableTextBlock,
  PortableTextProps as Props,
  PortableTextReactComponents,
} from "@portabletext/react";
import { cn } from "@/utils/cn";
import Link from "next/link";

export interface PortableTextProps extends Props {
  alignment?: "mx-auto" | "mr-auto" | "ml-auto" | null;
  className?: React.ComponentProps<"div">["className"];
}

const PortableTextComponents: Partial<PortableTextReactComponents> = {
  list: {
    bullet: ({ children }) => (
      <ul className="list-inside list-[disc] space-y-2 pb-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-inside list-decimal space-y-2 pb-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="ml-4 [&>ul]:list-[circle]">{children}</li>
    ),
    number: ({ children }) => (
      <li className="ml-4 [&>ol]:list-[lower-alpha]">{children}</li>
    ),
  },
  marks: {
    link: ({ children, value }) => <Link href={value?.href}>{children}</Link>,
  },
};

export const PortableText = ({
  alignment,
  className,
  value,
}: PortableTextProps) => {
  const horizontalMargin = alignment ?? "mx-auto";
  return (
    <div
      className={cn("w-full max-w-3xl space-y-4", horizontalMargin, className)}
    >
      <PortableTextBlock components={PortableTextComponents} value={value} />
    </div>
  );
};
