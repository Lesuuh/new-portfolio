import { ReactNode, HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "", ...props }: CardProps) => (
  <div
    className={`rounded-xl border border-neutral-700/40 bg-neutral-800 ${className}`}
    {...props}
  >
    {children}
  </div>
);
