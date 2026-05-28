import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn("rounded-md bg-ink px-4 py-2 text-sm font-semibold text-white", className)}
      {...props}
    />
  );
}
