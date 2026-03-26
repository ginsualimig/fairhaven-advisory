import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const baseClass =
  "inline-flex items-center gap-2 rounded-sm border border-gold/40 px-6 py-3 text-sm font-medium text-gold hover:border-gold hover:bg-gold/10 transition-colors duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-gold/50";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost";
}

export function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function ButtonLink({ href, className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${baseClass} ${className}`} {...props}>
      {children}
    </Link>
  );
}
