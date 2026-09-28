import Link from "next/link";
import type { Service } from "@/data/services";
import { cardClass } from "../constants";

export function ServiceCard({
  service,
  basePath = "/services",
}: {
  service: Service;
  basePath?: string;
}) {
  return (
    <article className={`${cardClass} grid grid-cols-[3.375rem_minmax(0,1fr)] gap-4 p-5 md:p-6`}>
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-pink-50 font-sans text-2xl font-black text-[#E8177A]">
        {service.navTitle.slice(0, 1)}
      </div>
      <div>
        <h3 className="mb-2 font-sans text-lg font-black leading-snug text-zinc-950">
          {service.shortTitle}
        </h3>
        <p className="text-sm leading-6 text-zinc-600">{service.summary}</p>
        <p className="mt-2.5 text-sm font-black text-[#c69214]">
          {service.price}
        </p>
        <Link
          href={`${basePath}/${service.slug}`}
          className="mt-3 inline-flex font-sans text-sm font-black text-[#E8177A] hover:text-[#c4115f]"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}
