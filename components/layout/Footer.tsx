import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { clinic, container } from "../constants";

function FooterBrand() {
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
      />
      <span>
        <strong className="block font-sans text-lg font-black leading-tight text-white">
          Gums &amp; Giggles
        </strong>
        <small className="mt-0.5 block text-xs leading-tight text-white/65 max-sm:hidden">
          Khulera Hasau, Majja Ley Hassau
        </small>
      </span>
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 py-14 text-white/75">
      <div className={`${container} grid gap-9 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]`}>
        <div>
          <FooterBrand />
          <p className="mt-5 max-w-md">
            Specialist-led dental care in Kathmandu, built around clear
            communication, comfort, and long-term oral health.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-sans font-black text-white">Services</h3>
          <ul className="grid gap-2">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  className="hover:text-[#E8177A]"
                  href={`/services/${service.slug}`}
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-sans font-black text-white">Visit</h3>
          <ul className="grid gap-2">
            <li>{clinic.address}</li>
            <li>
              <a className="hover:text-[#E8177A]" href={clinic.phoneHref}>
                {clinic.phone}
              </a>
            </li>
            <li>
              <a className="hover:text-[#E8177A]" href={clinic.emailHref}>
                {clinic.email}
              </a>
            </li>
            <li>{clinic.hours}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
