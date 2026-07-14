import { ButtonLink } from "../ui/ButtonLink";
import { clinic, container } from "../constants";

export function CTASection({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="bg-[#E8177A] py-16 text-white md:py-20">
      <div className={`${container} text-center`}>
        <h2 className="font-sans text-3xl font-black leading-tight text-white md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
          {text}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <ButtonLink href={clinic.appointmentHref} variant="light">
            Book an Appointment
          </ButtonLink>
          <ButtonLink href={clinic.phoneHref} variant="secondary">
            Call {clinic.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
