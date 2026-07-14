import Image from "next/image";

export function ClinicGallery() {
  const images = [
    {
      src: "/clinic_photos/clinics_building_image_from_outside.webp",
      alt: "Exterior of Gums and Giggles Dental Clinic in Kathmandu",
      caption: "Dhobidhara Marg location",
    },
    {
      src: "/clinic_photos/clinics_counter_image.webp",
      alt: "Reception area at Gums and Giggles Dental Clinic",
      caption: "Welcoming reception",
    },
    {
      src: "/clinic_photos/doctor_photo_with_a_child_patient.webp",
      alt: "Doctor with child patient at Gums and Giggles",
      caption: "Gentle family care",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {images.map((image) => (
        <figure
          className="relative min-h-72 overflow-hidden rounded-[1.25rem] bg-pink-50 shadow-[0_8px_24px_rgba(17,17,17,0.06)]"
          key={image.src}
        >
          <Image
            className="object-cover transition duration-500 hover:scale-105"
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/75 to-transparent px-5 pb-4 pt-12 font-sans font-black text-white">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
