import Image from "next/image";
import { sponsors } from "@/data/sponsors";
import { cn } from "@/lib/utils";

// Sponsors as a single line of thanks, then logo tiles. Sponsors without a logo yet show as empty slots.
export function Sponsors() {
  return (
    <section id="sponsors" className="qe-section grid justify-items-center gap-8">
      <p data-anim="lines" className="qe-lead-sm">With thanks to the sponsors who make the day possible.</p>
      <ul data-anim="stagger" className="flex w-full max-w-[880px] flex-wrap justify-center gap-5">
        {sponsors.map((s) => (
          <li
            key={s.id}
            className={cn(
              "grid aspect-[3/2] w-[calc(50%-0.625rem)] place-items-center md:w-[calc(25%-0.9375rem)] rounded-[3px] p-5",
              s.logo ? (s.logo.onDark ? "bg-ink-deep" : "border border-ink/20 bg-[#fbf8f0]") : "border border-dashed border-ink/35 bg-[#fbf8f0]",
            )}
          >
            {s.logo ? (
              <Image src={s.logo.src} alt={s.name} width={s.logo.width} height={s.logo.height} sizes="(max-width: 768px) 40vw, 200px" className="h-auto w-full max-w-[190px]" />
            ) : (
              <span className="mono-label">{s.name}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
