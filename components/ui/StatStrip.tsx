import { container } from "../constants";

export function StatStrip({
  stats,
}: {
  stats: {
    value: string;
    label: string;
  }[];
}) {
  return (
    <section className="bg-[#E8177A] text-white" aria-label="Clinic highlights">
      <div className={`${container} grid gap-5 py-7 text-center sm:grid-cols-2 lg:grid-cols-4`}>
        {stats.map((stat) => (
          <div key={`${stat.value}-${stat.label}`}>
            <strong className="block font-sans text-3xl font-black leading-none md:text-4xl">
              {stat.value}
            </strong>
            <span className="mt-1 block text-sm text-white/85">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
