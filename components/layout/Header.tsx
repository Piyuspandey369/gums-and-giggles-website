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
        className="h-11 w-11 rounded-2xl bg-white object-contain shadow-[0_10px_26px_rgba(232,23,122,0.18)]"
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
    <header className="sticky top-0 z-20 border-b border-pink-100 bg-white/90 backdrop-blur-xl">
      <div className="hidden bg-zinc-950 text-sm text-white/75 sm:block">
        <div className={`${container} flex min-h-8 items-center justify-between gap-5`}>
          <div>
            <a className="hover:text-[#E8177A]" href={clinic.phoneHref}>
              {clinic.phone}
            </a>
            <span className="mx-2.5 opacity-40">/</span>
            <span>{clinic.hours}</span>
          </div>
          <div className="hidden gap-5 lg:flex">
            <span>{clinic.address}</span>
            <a className="hover:text-[#E8177A]" href={clinic.emailHref}>
              {clinic.email}
            </a>
          </div>
        </div>
      </div>
      <div className={`${container} flex min-h-[4.5rem] items-center justify-between gap-5`}>
        <Brand />
        <nav
          className="hidden items-center gap-5 text-sm font-black text-zinc-800 lg:flex xl:gap-6"
          aria-label="Main navigation"
        >
          <Link className="hover:text-[#E8177A]" href="/">
            Home
          </Link>
          {navItems.map((item) =>
            item.children?.length ? (
              <div className="group relative" key={item.href}>
                <Link
                  className="inline-flex items-center gap-1.5 py-6 hover:text-[#E8177A] group-focus-within:text-[#E8177A] group-hover:text-[#E8177A]"
                  href={item.href}
                >
                  {item.label}
                  <span aria-hidden="true" className="text-[0.6rem] text-[#E8177A]">
                    &#9660;
                  </span>
                </Link>
                <div className="invisible absolute left-0 top-full z-30 w-72 rounded-[1.25rem] border border-pink-100 bg-white p-3 opacity-0 shadow-[0_18px_44px_rgba(17,17,17,0.12)] transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
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
              <Link className="hover:text-[#E8177A]" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ButtonLink href={clinic.appointmentHref}>Book Appointments</ButtonLink>
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
