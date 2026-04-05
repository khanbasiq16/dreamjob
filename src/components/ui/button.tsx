"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-[10px] transition-all duration-150 cursor-pointer border-none font-sans",
        {
          "bg-[#0154AA] text-white hover:bg-[#013d7c] hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(1,84,170,0.25)]":
            variant === "primary",
          "border border-[#e3e9f0] bg-transparent text-[#4b5a6e] hover:text-[#0154AA] hover:border-[#0154AA] hover:bg-[#e6f0fb]":
            variant === "outline",
          "bg-transparent text-[#4b5a6e] hover:text-[#0154AA] hover:bg-[#e6f0fb]":
            variant === "ghost",
        },
        {
          "text-[11.5px] py-[7px] px-[10px]": size === "sm",
          "text-[13px] py-[10px] px-5": size === "md",
          "text-sm py-3 px-6": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
