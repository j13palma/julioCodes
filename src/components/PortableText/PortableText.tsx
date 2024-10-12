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
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-2xl font-medium">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-medium">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-medium">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-medium">{children}</h6>,
    normal: ({ children }) => <p className="text-base">{children}</p>,
  },
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
