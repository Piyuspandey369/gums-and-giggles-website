import { ButtonLink } from "../ui/ButtonLink";
import { cardClass, clinic, container, sectionAlt } from "../constants";
import { SectionHeader } from "../ui/SectionHeader";

export function LocationSection() {
  return (
    <section className={sectionAlt}>
      <div className={container}>
        <SectionHeader
          eyebrow="Find us"
          title="Visit our clinic in Kathmandu"
          lead="Conveniently located on Dhobidhara Marg, minutes from Lazimpat, Maharajgunj, Naxal, Baluwatar, and Thamel."
          center
        />
        <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)]">
          <div className={`${cardClass} p-7`}>
            <h3 className="font-sans text-xl font-black text-zinc-950">
              Clinic information
            </h3>
            <dl className="my-5 grid gap-4">
              {[
                ["Address", clinic.address],
                ["Phone", clinic.phone],
                ["Email", clinic.email],
                ["Hours", clinic.hours],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="font-sans font-black text-zinc-950">{label}</dt>
                  <dd className="mt-1 text-zinc-600">
                    {label === "Phone" ? (
                      <a className="hover:text-[#E8177A]" href={clinic.phoneHref}>
                        {value}
                      </a>
                    ) : label === "Email" ? (
                      <a className="hover:text-[#E8177A]" href={clinic.emailHref}>
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <ButtonLink href={clinic.mapsHref} variant="secondary">
              Open Google Maps
            </ButtonLink>
          </div>
          <div className="overflow-hidden rounded-[1.25rem] bg-pink-50 shadow-[0_8px_24px_rgba(17,17,17,0.06)]">
            <iframe
              className="block min-h-[430px] w-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2698574990654!2d85.32186351100181!3d27.708953125321475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f184587513%3A0x2906ce17aa1ffb54!2sGums%20%26%20Giggles%20Dental%20Clinic!5e0!3m2!1sen!2snp!4v1774260384407!5m2!1sen!2snp"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gums and Giggles Dental Clinic location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
