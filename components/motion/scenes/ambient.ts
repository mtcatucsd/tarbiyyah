import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Scene } from "@/components/motion/scenes";

// The hero's reel and clouds and the lanterns' sway are CSS loops; pause them while their section is off screen.
// onToggle only fires on a change, so onRefresh sets the starting state: without it the lanterns, which start far
// below the fold, would loop unseen from the first frame (costing a phone ~10% of its main thread).
export const ambient: Scene = () => {
  const els = [document.getElementById("top"), document.querySelector<HTMLElement>("[data-scene='lanterns']")].filter((e): e is HTMLElement => !!e);
  const mark = (el: HTMLElement, active: boolean) => el.toggleAttribute("data-offscreen", !active);
  els.forEach((el) => ScrollTrigger.create({ trigger: el, start: "top bottom", end: "bottom top", onToggle: (self) => mark(el, self.isActive), onRefresh: (self) => mark(el, self.isActive) }));
  return () => els.forEach((el) => el.removeAttribute("data-offscreen"));
};
