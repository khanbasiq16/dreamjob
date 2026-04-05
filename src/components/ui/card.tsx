import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "md" | "none";
}

export function Card({ className, padding = "md", children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-[10px] shadow-[0_1px_4px_rgba(1,84,170,0.07)]",
        {
          "p-[14px]": padding === "sm",
          "p-4": padding === "md",
          "": padding === "none",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
