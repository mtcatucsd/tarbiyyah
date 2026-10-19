import { describe, expect, it } from "vitest";
import { TICKER, tickerLean, tickerSpeed } from "@/lib/ticker-motion";

describe("tickerSpeed", () => {
  it("drifts at its own pace when the page is still", () => {
    expect(tickerSpeed(0)).toBe(1);
  });

  it("speeds up with the scroll and follows its direction", () => {
    expect(tickerSpeed(TICKER.velocityPerStep)).toBe(2);
    expect(tickerSpeed(-TICKER.velocityPerStep)).toBe(-2);
  });

  it("never passes its top speed, however fast the fling", () => {
    expect(tickerSpeed(1e6)).toBe(1 + TICKER.maxBoost);
    expect(tickerSpeed(-1e6)).toBe(-(1 + TICKER.maxBoost));
  });
});

describe("tickerLean", () => {
  it("stands upright when the page is still", () => {
    expect(tickerLean(0)).toBe(0);
  });

  it("leans into the scroll, up to the limit", () => {
    expect(tickerLean(TICKER.velocityForFullLean / 2)).toBeCloseTo(TICKER.maxLean / 2, 10);
    expect(tickerLean(1e6)).toBe(TICKER.maxLean);
    expect(tickerLean(-1e6)).toBe(-TICKER.maxLean);
  });
});
