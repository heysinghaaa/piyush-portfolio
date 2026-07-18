import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type ResponsiveGridProps = ComponentPropsWithoutRef<"div"> & {
  columns?: 1 | 2 | 3 | 4;
};

const columnClasses: Record<NonNullable<ResponsiveGridProps["columns"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 lg:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
};

export function ResponsiveGrid({ className, columns = 2, ...props }: ResponsiveGridProps) {
  return <div className={cn("grid", columnClasses[columns], className)} {...props} />;
}
