import type { FAQItem } from "@/data/services";
import { cardClass } from "../constants";

export function FAQList({ items }: { items: FAQItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          key={item.question}
          className={`${cardClass} overflow-hidden open:border-pink-200`}
        >
          <summary className="cursor-pointer px-5 py-4 font-sans font-black text-zinc-950">
            {item.question}
          </summary>
          <p className="px-5 pb-5 leading-7 text-zinc-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
