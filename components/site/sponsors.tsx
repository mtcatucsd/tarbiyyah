import Image from "next/image";
import { sponsors } from "@/data/sponsors";
import { cn } from "@/lib/utils";

// Sponsors as a line of thanks, then a ticker of tilted logo prints (after Framer's scroll-velocity ticker). The
// sponsors scene (components/motion/scenes/sponsors.ts) drifts the track and speeds it up with the scroll. The set is
// repeated so one copy is wider than any screen, then doubled so the loop (-50%) is seamless; only the first
// sponsors.length cards are real, the repeats are hidden from assistive tech. Without motion (reduced motion or no
// JS) the stylesheet shows just the real cards, still, in a centred row.
const SET_REPEATS = 2;
const cards = Array.from({ length: SET_REPEATS * 2 }, () => sponsors).flat();

export function Sponsors() {
  return (
    <section id="sponsors" className="qe-section grid justify-items-center gap-8">
      <p data-anim="lines" className="qe-lead-sm">With thanks to the sponsors who make the day possible.</p>
      <div data-scene="sponsors" className="ticker">
        <ul className="ticker-track" aria-label="Sponsors">
          {cards.map((s, i) => {
            const repeat = i >= sponsors.length;
            return (
              <li key={i} className={cn("ticker-card", s.logo?.onDark && "ticker-card-dark")} aria-hidden={repeat || undefined} data-repeat={repeat || undefined}>
                {s.logo ? (
                  <Image src={s.logo.src} alt={repeat ? "" : s.name} width={s.logo.width} height={s.logo.height} sizes="180px" draggable={false} className="ticker-logo" />
                ) : (
                  <span className="mono-label">{s.name}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
