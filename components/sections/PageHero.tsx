import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "../ui/ButtonLink";
import { actionRowClass, clinic, container, eyebrowClass } from "../constants";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
  backgroundClassName,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
  backgroundClassName?: string;
}) {
  const backgroundClass =
    backgroundClassName ??
    "bg-[linear-gradient(115deg,rgba(255,255,255,0.94),rgba(255,240,247,0.84)),url('/clinic_photos/clinics_building_image_from_outside.webp')]";

  return (
    <section
      className={`overflow-hidden ${backgroundClass} bg-cover bg-center py-9 md:py-16`}
    >
      <div className={`${container} grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.9fr)]`}>
        <div className="rounded-[1.875rem] border border-white/70 bg-white/90 p-6 shadow-[0_28px_70px_rgba(96,30,56,0.12)] backdrop-blur-xl md:p-9">
          <p className={eyebrowClass}>{eyebrow}</p>
          <h1 className="max-w-3xl font-sans text-4xl font-black leading-tight text-zinc-950 md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-8 text-zinc-600 md:text-lg">
            {lead}
          </p>
          <div className={actionRowClass}>
            <ButtonLink href={clinic.appointmentHref}>Book a Consultation</ButtonLink>
            <ButtonLink href={clinic.phoneHref} variant="secondary">
              Call {clinic.phone}
            </ButtonLink>
          </div>
          {children}
        </div>
        <div className="relative min-h-80 overflow-hidden rounded-[2rem] border-8 border-white/90 bg-pink-50 shadow-[0_18px_50px_rgba(17,17,17,0.09)] md:min-h-[520px]">
          <Image
            className="object-cover"
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
          />
        </div>
      </div>
    </section>
  );
}
