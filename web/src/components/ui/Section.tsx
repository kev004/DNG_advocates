import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  as?: "section" | "div";
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  as: Tag = "section",
}: Props) {
  return (
    <Tag
      id={id}
      className={`py-16 sm:py-20 lg:py-24 landscape:max-md:py-12 ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}
