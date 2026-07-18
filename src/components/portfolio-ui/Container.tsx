import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  width?: "page" | "reading" | "full";
};

const widthClasses: Record<NonNullable<ContainerProps["width"]>, string> = {
  page: "mx-auto w-[var(--page)]",
  reading: "mx-auto w-[var(--page)] max-w-4xl",
  full: "w-full"
};

export function Container({ className, width = "page", ...props }: ContainerProps) {
  return <div className={cn(widthClasses[width], className)} {...props} />;
}
