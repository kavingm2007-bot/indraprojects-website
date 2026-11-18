import { describe, expect, it } from "vitest";
import { FIELD, GLOW_STEP } from "./MirrorField";

// Glows turn visible at 42% of their cycle (see shard-glint / spark-glint keyframes).
function glowStartTimes() {
  const glows = [
    ...FIELD.shards.flatMap((s) => (s.glint ? [s.glint] : [])),
    ...FIELD.sparks,
  ];
  return glows
    .map((g) => {
      const t = (0.42 * g.dur + g.delay) % g.dur;
      return Number(((t + g.dur) % g.dur).toFixed(2));
    })
    .sort((a, b) => a - b);
}

describe("home hero glows", () => {
  it("starts a new glow somewhere every 1.5 seconds", () => {
    expect(GLOW_STEP).toBe(1.5);
    const starts = glowStartTimes();
    expect(starts.length).toBeGreaterThanOrEqual(8);
    const cycle = starts.length * 1.5;
    starts.forEach((t, i) => {
      const next = i === starts.length - 1 ? starts[0]! + cycle : starts[i + 1]!;
      expect(next - t).toBeCloseTo(1.5, 1);
    });
  });
});
