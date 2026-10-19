// The sponsor ticker's response to scrolling (after Framer's scroll-velocity ticker). Velocities are the page's scroll
// speed in px/s, as ScrollTrigger reports it: positive scrolling down, negative scrolling up.
export const TICKER = {
  velocityPerStep: 400, // each 400 px/s of scroll adds one more times the resting drift speed
  maxBoost: 5, // so the row tops out at 6x its resting speed
  velocityForFullLean: 2000,
  maxLean: 6, // degrees of skew
};

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/** The drift's time scale: 1 at rest, faster with the scroll, and reversed while scrolling up. */
export function tickerSpeed(velocity: number) {
  const boost = Math.min(Math.abs(velocity) / TICKER.velocityPerStep, TICKER.maxBoost);
  return velocity < 0 ? -(1 + boost) : 1 + boost;
}

/** How far the row leans (skewX, degrees) into the scroll. */
export const tickerLean = (velocity: number) => clamp(velocity / TICKER.velocityForFullLean, -1, 1) * TICKER.maxLean;
