export function CheckGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <li className="relative pl-7 text-zinc-800 before:absolute before:left-0 before:text-[#E8177A] before:content-['✓']" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
