import Image from "next/image";
import type { Service } from "@/data/services";
import { cardClass } from "../constants";

export function ImageShowcase({
  images,
}: {
  images: NonNullable<Service["extraImages"]>;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {images.map((image) => (
        <figure className={`${cardClass} overflow-hidden`} key={image.src}>
          <div className="relative min-h-64 bg-pink-50 md:min-h-96">
            <Image
              className="object-cover"
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <figcaption className="p-5 font-semibold leading-7 text-zinc-600">
            {image.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
