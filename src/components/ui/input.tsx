// // import { cn } from "@/lib/utils";
// // import { InputHTMLAttributes } from "react";

// // interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
// //   icon?: React.ReactNode;
// //   bgcolor?: string;
// //   border?: string;
// //   focus?: string;
// // }

// // export function Input({ className, icon, bgcolor, border, focus, ...props }: InputProps) {
// //   const focusClasses = focus === 'none' 
// //   ? 'focus:outline-none focus:ring-0 focus:shadow-none' 
// //   : `focus:border-[${focus || '#0154AA'}] focus:shadow-[0_0_0_3px_rgba(1,84,170,0.10)]`;
// //   return (
// //     <div className="relative w-full">
// //       {icon && (
// //         <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#8a97a8]">
// //           {icon}
// //         </span>
// //       )}
// //       <input
// //         className={cn(
// //           `w-full pr-[14px] py-[10px] text-[13px] border border-${border || '#e3e9f0'} rounded-xl bg-${bgcolor || '#f0f4f9'} text-[#0f1c2e] outline-none transition-all font-medium  `,
// //           `${focusClasses}`,
// //           icon ? "pl-[34px]" : "pl-[20px]",
// //           className
// //         )}
// //         {...props}
// //       />
// //     </div>
// //   );
// // }


// // src/components/ui/input.tsx

// import { cn } from "@/lib/utils";

// interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   icon?: React.ReactNode;
//   bgcolor?: string;
//   border?: string;
//   focus?: string;
// }

// export function Input({ className, icon, bgcolor, border, focus, ...props }: InputProps) {
//   const focusClasses =
//     focus === "none"
//       ? "focus:outline-none focus:ring-0 focus:shadow-none"
//       : `focus:border-[${focus || "#0154AA"}] focus:shadow-[0_0_0_3px_rgba(1,84,170,0.10)]`;

//   return (
//     <div className="relative w-full">
//       {icon && (
//         <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#8a97a8]">
//           {icon}
//         </span>
//       )}
//       <input
//         className={cn(
//           "w-full pr-[14px] py-[10px] text-[13px] rounded-xl text-[#0f1c2e] outline-none transition-all font-medium",
//           `bg-[${bgcolor || "#f0f4f9"}]`,
//           border === "none" ? "border-0" : `border border-[${border || "#e3e9f0"}]`,
//           focusClasses,
//           icon ? "pl-[34px]" : "pl-[20px]",
//           className
//         )}
//         {...props}
//       />
//     </div>
//   );
// }

// src/components/ui/input.tsx
import { cn } from "@/lib/utils";

interface InputProps {
  icon?: React.ReactNode;
  bgcolor?: string;
  border?: string;
  focus?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

export function Input({
  className,
  icon,
  bgcolor,
  border,
  focus,
  ...props
}: InputProps) {
  const focusClasses =
    focus === "none"
      ? "focus:outline-none focus:ring-0 focus:shadow-none"
      : `focus:border-[${focus || "#0154AA"}] focus:shadow-[0_0_0_3px_rgba(1,84,170,0.10)]`;

  return (
    <div className="relative w-full">
      {icon && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#8a97a8]">
          {icon}
        </span>
      )}
      <input
        className={cn(
          "w-full pr-[14px] py-[10px] text-[13px] rounded-xl text-[#0f1c2e] outline-none transition-all font-medium",
          `bg-[${bgcolor || "#f0f4f9"}]`,
          border === "none" ? "border-0" : `border border-[${border || "#e3e9f0"}]`,
          focusClasses,
          icon ? "pl-[34px]" : "pl-[20px]",
          className
        )}
        {...props}
      />
    </div>
  );
}