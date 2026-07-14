import type { CardItem } from "@/data/services";
import { cardClass } from "../constants";

export function ProcessSteps({ steps }: { steps: CardItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <article className={`${cardClass} p-6`} key={step.title}>
          <span className="mb-4 inline-flex font-sans text-sm font-black text-[#E8177A]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mb-2 font-sans text-lg font-black leading-snug text-zinc-950">
            {step.title}
          </h3>
          <p className="leading-7 text-zinc-600">{step.text}</p>
        </article>
      ))}
    </div>
  );
}
