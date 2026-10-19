import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Scene } from "@/components/motion/scenes";
import { tickerLean, tickerSpeed } from "@/lib/ticker-motion";

const DRIFT_SECONDS = 38; // one copy of the set crossing the screen at rest
const SETTLE = 0.9; // seconds to ease back to the resting drift once the scroll stops

// The sponsor ticker (after Framer's scroll-velocity ticker): the track drifts left on its own; scrolling speeds it up
// in the scroll's direction and leans the row into it, then it eases back. Hovering (or pressing on a phone) glides it
// to a stop so a logo can be read. It is one transform tween on one element, paused while the section is off screen.
export const sponsors: Scene = () => {
  const ticker = document.querySelector<HTMLElement>("[data-scene='sponsors']");
  const track = ticker?.querySelector<HTMLElement>(".ticker-track");
  if (!ticker || !track) return;

  const drift = gsap.fromTo(track, { xPercent: 0 }, { xPercent: -50, duration: DRIFT_SECONDS, ease: "none", repeat: -1 });
  drift.totalTime(DRIFT_SECONDS * 1000); // start deep in the loop, so scrolling up can run it backwards freely
  const lean = gsap.quickTo(track, "skewX", { duration: 0.5, ease: "power3.out" });
  let held = false;

  const settle = () => {
    lean(0);
    gsap.to(drift, { timeScale: held ? 0 : 1, duration: SETTLE, ease: "power2.out", overwrite: true });
  };
  // Scroll-velocity response: jump toward the scroll's speed, then settle once updates stop arriving.
  const pending = gsap.delayedCall(0.12, settle).pause();
  const onScroll = (velocity: number) => {
    if (held) return;
    lean(tickerLean(velocity));
    gsap.to(drift, { timeScale: tickerSpeed(velocity), duration: 0.25, ease: "power2.out", overwrite: true });
    pending.restart(true);
  };

  const live = (on: boolean) => (on ? drift.resume() : drift.pause());
  ScrollTrigger.create({
    trigger: ticker,
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => onScroll(self.getVelocity()),
    onToggle: (self) => live(self.isActive),
    onRefresh: (self) => live(self.isActive), // onToggle only fires on a change: start paused when off screen
  });

  // A mouse holds it by hovering; a finger by pressing (a touch that turns into a page scroll lets go).
  const hold = () => { held = true; settle(); };
  const release = () => { held = false; settle(); };
  const onEnter = (e: PointerEvent) => { if (e.pointerType === "mouse") hold(); };
  const onLeave = (e: PointerEvent) => { if (e.pointerType === "mouse") release(); };
  const onDown = (e: PointerEvent) => { if (e.pointerType !== "mouse") hold(); };
  const onUp = (e: PointerEvent) => { if (e.pointerType !== "mouse") release(); };
  const listeners = [["pointerenter", onEnter], ["pointerleave", onLeave], ["pointerdown", onDown], ["pointerup", onUp], ["pointercancel", onUp]] as const;
  listeners.forEach(([type, fn]) => ticker.addEventListener(type, fn));
  return () => listeners.forEach(([type, fn]) => ticker.removeEventListener(type, fn));
};
