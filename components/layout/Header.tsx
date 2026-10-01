import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../ui/ButtonLink";
import { clinic, container } from "../constants";
import { MobileNav } from "./MobileNav";
import { navItems } from "./nav";

function Brand() {
  return (
    <Link
      className="inline-flex min-w-0 items-center gap-3"
      href="/"
      aria-label="Gums and Giggles home"
    >
      <Image
        className="h-11 w-11 rounded-2xl bg-white object-contain shadow-[0_10px_26px_rgba(232,23,122,0.16)]"
        src="/logo_.png"
        alt=""
        width={44}
        height={44}
        priority
      />
      <span>
        <strong className="block font-sans text-lg font-black leading-tight text-zinc-950">
          Gums &amp; Giggles
        </strong>
        <small className="mt-0.5 block text-xs leading-tight text-zinc-500 max-sm:hidden">
          Dental Clinic Kathmandu
        </small>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-pink-100/80 bg-white/90 shadow-[0_10px_30px_rgba(17,17,17,0.04)] backdrop-blur-xl">
      <div className="hidden bg-zinc-950 text-sm text-white/75 md:block">
        <div className={`${container} flex min-h-9 items-center justify-between gap-5`}>
          <div className="flex items-center gap-3">
            <a className="font-bold text-white hover:text-pink-200" href={clinic.phoneHref}>
              {clinic.phone}
            </a>
            <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
            <span>{clinic.hours}</span>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <span>{clinic.address}</span>
            <a className="font-bold text-white hover:text-pink-200" href={clinic.emailHref}>
              {clinic.email}
            </a>
          </div>
        </div>
      </div>
      <div className={`${container} flex min-h-[4.75rem] items-center justify-between gap-4`}>
        <Brand />
        <nav
          className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50/80 p-1 text-sm font-black text-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] lg:flex"
          aria-label="Main navigation"
        >
          <Link
            className="rounded-full px-4 py-2 hover:bg-white hover:text-[#E8177A] hover:shadow-sm"
            href="/"
          >
            Home
          </Link>
          {navItems.map((item) =>
            item.children?.length ? (
              <div className="group relative" key={item.href}>
                <Link
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 hover:bg-white hover:text-[#E8177A] hover:shadow-sm group-focus-within:bg-white group-focus-within:text-[#E8177A] group-hover:bg-white group-hover:text-[#E8177A] group-hover:shadow-sm"
                  href={item.href}
                >
                  {item.label}
                  <span aria-hidden="true" className="text-[0.6rem] text-[#E8177A]">
                    &#9660;
                  </span>
                </Link>
                <div className="invisible absolute left-0 top-full z-30 mt-3 w-72 rounded-[1.25rem] border border-pink-100 bg-white p-3 opacity-0 shadow-[0_18px_44px_rgba(17,17,17,0.12)] transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="grid gap-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          className="block rounded-xl px-3 py-2 text-sm font-bold text-zinc-700 hover:bg-pink-50 hover:text-[#E8177A]"
                          href={child.href}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                className="rounded-full px-4 py-2 hover:bg-white hover:text-[#E8177A] hover:shadow-sm"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a
            className="hidden min-h-11 items-center justify-center rounded-full border border-pink-200 bg-white px-4 text-sm font-black text-[#E8177A] hover:border-[#E8177A] hover:bg-pink-50 sm:inline-flex"
            href={clinic.phoneHref}
          >
            Call
          </a>
          <div className="hidden lg:block">
            <ButtonLink href={clinic.appointmentHref}>Book Appointments</ButtonLink>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
