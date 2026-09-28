"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ButtonLink } from "../ui/ButtonLink";
import { clinic } from "../constants";
import { navItems } from "./nav";

export function MobileNav() {
  const pathname = usePathname();
  // Storing the route the menu was opened on closes it on navigation without
  // an effect: a new pathname no longer matches.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        id="mobile-nav-toggle"
        className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-pink-200 text-[#E8177A] transition hover:border-[#E8177A]"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpenedOn(open ? null : pathname)}
      >
        <span aria-hidden="true" className="grid gap-1.5">
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </span>
      </button>

      <div
        id="mobile-nav-panel"
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[75vh] overflow-y-auto border-b border-pink-100 bg-white px-4 pb-7 pt-5 shadow-[0_24px_50px_rgba(17,17,17,0.12)] sm:px-5"
      >
        <nav aria-label="Mobile navigation" className="grid gap-5">
          <Link
            className="font-sans font-black text-zinc-950 hover:text-[#E8177A]"
            href="/"
          >
            Home
          </Link>
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                className="font-sans font-black text-zinc-950 hover:text-[#E8177A]"
                href={item.href}
              >
                {item.label}
              </Link>
              {item.children?.length ? (
                <ul className="mt-2 grid gap-2 border-l-2 border-pink-100 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        className="text-sm text-zinc-600 hover:text-[#E8177A]"
                        href={child.href}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <div className="grid gap-3 pt-1">
            <ButtonLink href={clinic.appointmentHref}>
              Book an Appointment
            </ButtonLink>
            <ButtonLink href={clinic.phoneHref} variant="secondary">
              Call {clinic.phone}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </div>
  );
}
