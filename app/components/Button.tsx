import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  as?: "button" | "a";
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  as = "button",
  href,
  variant = "primary",
  className = "",
  children,
  onClick,
  type = "button",
  ...props
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors";
  
  const variantClasses = {
    primary: "bg-ink text-cream hover:bg-black",
    outline: "border border-ink/30 text-ink hover:bg-ink/5"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (as === "a" && href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
