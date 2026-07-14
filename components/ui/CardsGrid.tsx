import type { CardItem } from "@/data/services";
import { cardClass } from "../constants";

export function CardsGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article className={`${cardClass} p-6`} key={item.title}>
          <h3 className="mb-2 font-sans text-lg font-black leading-snug text-zinc-950">
            {item.title}
          </h3>
          <p className="leading-7 text-zinc-600">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
