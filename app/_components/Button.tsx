import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "white" | "link";
  className?: string;
};

export const Button = ({
  children,
  className = "",
  size = "sm",
  variant = "primary",
  ...props
}: ButtonProps) => {
  // Map sizes to Tailwind classes
  const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // Variant styles
  const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-[#bfa76f] text-neutral-950 hover:bg-[#d8bf80] shadow-lg hover:shadow-xl hover:scale-105",
    secondary:
      "border border-[#bfa76f] bg-transparent hover:bg-[#d8bf80] hover:border-[#bfa76f] hover:scale-105",
    white:
      "bg-white text-neutral-950 hover:bg-neutral-100 shadow hover:shadow-md hover:scale-105",
    link: "bg-transparent text-[#bfa76f] hover:text-[#d8bf80] underline-offset-2 hover:underline shadow-none hover:shadow-none hover:scale-100 px-0 py-0",
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
