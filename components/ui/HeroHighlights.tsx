export function HeroHighlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 grid gap-2.5">
      {items.map((item) => (
        <li className="relative pl-7 text-zinc-800 before:absolute before:left-0 before:text-[#E8177A] before:content-['✓']" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
