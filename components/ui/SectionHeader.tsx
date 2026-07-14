import { eyebrowClass, h2Class, leadClass } from "../constants";

export function SectionHeader({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-9 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className={eyebrowClass}>{eyebrow}</p> : null}
      <h2 className={h2Class}>{title}</h2>
      {lead ? <p className={leadClass}>{lead}</p> : null}
    </div>
  );
}
