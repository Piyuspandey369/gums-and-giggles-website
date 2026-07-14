import Link from "next/link";
import type { ReactNode } from "react";

function externalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:")
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const className = [
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-black leading-none transition hover:-translate-y-0.5",
    variant === "primary"
      ? "bg-[#E8177A] text-white shadow-[0_12px_28px_rgba(232,23,122,0.22)] hover:bg-[#c4115f]"
      : variant === "light"
        ? "bg-white text-[#E8177A] hover:bg-pink-50"
        : "border-2 border-pink-200 bg-white text-[#E8177A] hover:border-[#E8177A]",
  ].join(" ");

  if (externalHref(href)) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
