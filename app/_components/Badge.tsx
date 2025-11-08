import { ReactNode, HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  variant?: "outline" | "default";
  className?: string;
};

export const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}: BadgeProps) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
      variant === "outline"
        ? "border border-neutral-700 text-neutral-300"
        : "bg-neutral-800 text-neutral-300"
    } ${className}`}
    {...props}
  >
    {children}
  </span>
);
