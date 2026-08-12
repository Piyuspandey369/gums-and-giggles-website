import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../ui/ButtonLink";
import { clinic, container } from "../constants";

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
          className="flex items-center gap-3 text-sm font-black text-zinc-800 sm:gap-5"
          aria-label="Main navigation"
        >
          <Link className="hover:text-[#E8177A]" href="/">
            Home
          </Link>
          <Link className="hidden hover:text-[#E8177A] sm:inline" href="/about-us">
            About
          </Link>
          <Link className="hover:text-[#E8177A]" href="/services">
            Services
          </Link>
          <a className="hover:text-[#E8177A]" href={clinic.phoneHref}>
            Call
          </a>
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href={clinic.appointmentHref}>Book Appointments</ButtonLink>
        </div>
      </div>
    </header>
  );
}
