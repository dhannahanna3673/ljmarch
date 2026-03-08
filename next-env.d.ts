import Link from "next/link";
import { ArrowRight } from "lucide-react";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function LinkButton({ href, children, variant = "primary" }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={variant === "primary" ? "btn-primary gap-2" : "btn-secondary gap-2"}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
