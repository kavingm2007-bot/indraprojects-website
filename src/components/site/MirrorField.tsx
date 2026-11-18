/**
 * Home hero background: scattered irregular mirror / glass fragments in a dark space.
 * Geometry is generated from a fixed seed so server and client render identical markup.
 * Only a handful of fragments carry a glint or a soft corner glow, each on its own slow, offset cycle,
 * so at most one or two catch a faint gold reflection at any moment.
 */

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Shard = {
  points: string;
  opacity: number;
  rotate: number;
  cx: number;
  cy: number;
  glint?: { dur: number; delay: number; peak: number };
  edge?: { dur: number; delay: number };
};

type Spark = { x: number; y: number; s: number; dur: number; delay: number; peak: number };

const W = 1600;
/** Seconds between one glow starting and the next one starting somewhere else. */
export const GLOW_STEP = 1.5;
const GLOW_COUNT = 14;
const H = 900;
const f = (n: number) => Number(n.toFixed(1));

function buildField() {
  const rand = mulberry32(20261118);
  const shards: Shard[] = [];
  const cols = 12;
  const rows = 7;
  const cw = W / cols;
  const ch = H / rows;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (rand() < 0.28) continue;
      const cx = c * cw + cw * (0.15 + rand() * 0.7);
      const cy = r * ch + ch * (0.15 + rand() * 0.7);
      // keep the very centre (behind the headline) sparser
      const dx = (cx - W / 2) / (W / 2);
      const dy = (cy - H / 2) / (H / 2);
      const centre = dx * dx + dy * dy < 0.18;
      if (centre && rand() < 0.6) continue;

      const big = rand() < 0.14;
      const radius = big ? 46 + rand() * 40 : 10 + rand() * 30;
      const n = 3 + Math.floor(rand() * 3);
      const angles = Array.from({ length: n }, () => rand() * Math.PI * 2).sort((a, b) => a - b);
      const pts = angles
        .map((a) => {
          const rr = radius * (0.5 + rand() * 0.6);
          // stretch shards a little so they read as slivers, not polygons
          return `${f(cx + Math.cos(a) * rr * 1.25)},${f(cy + Math.sin(a) * rr * 0.8)}`;
        })
        .join(" ");
      shards.push({
        points: pts,
        opacity: f(0.35 + rand() * 0.5),
        rotate: f(rand() * 360),
        cx: f(cx),
        cy: f(cy),
      });
    }
  }

  // Glow carriers spread over the whole field: some fragments glint across their face,
  // others catch a tiny reflection on one corner.
  const byX = [...shards].sort((a, b) => a.cx - b.cx);
  const pickEvery = Math.max(1, Math.floor(byX.length / GLOW_COUNT));
  const carriers = Array.from({ length: GLOW_COUNT }, (_, i) =>
    byX[Math.min(byX.length - 1, i * pickEvery + Math.floor(rand() * pickEvery))],
  ).filter((s, i, arr): s is Shard => !!s && arr.indexOf(s) === i);

  const sparks: Spark[] = [];
  carriers.forEach((sh, i) => {
    if (i % 2 === 0) {
      sh.glint = { dur: 0, delay: 0, peak: f(0.42 + rand() * 0.2) };
      return;
    }
    const verts = sh.points.split(" ");
    const [vx, vy] = (verts[Math.floor(rand() * verts.length)] ?? `${sh.cx},${sh.cy}`)
      .split(",")
      .map(Number);
    // rotate the vertex the same way the fragment is rotated
    const a = (sh.rotate * Math.PI) / 180;
    const ox = (vx ?? sh.cx) - sh.cx;
    const oy = (vy ?? sh.cy) - sh.cy;
    sparks.push({
      x: f(sh.cx + ox * Math.cos(a) - oy * Math.sin(a)),
      y: f(sh.cy + ox * Math.sin(a) + oy * Math.cos(a)),
      s: f(14 + rand() * 10),
      dur: 0,
      delay: 0,
      peak: f(0.6 + rand() * 0.2),
    });
  });

  // A few reflective edges that slowly brighten.
  for (let i = 0; i < 7; i++) {
    const s = shards[Math.floor(rand() * shards.length)];
    if (s && !s.glint) s.edge = { dur: f(24 + rand() * 20), delay: f(-rand() * 40) };
  }

  // One shared rhythm: a new glow begins every GLOW_STEP seconds, each in a different,
  // far-apart spot (stepping through the left-to-right list by a stride), so somewhere on
  // the hero a dim glow is always starting while older ones fade out.
  const glows: { dur: number; delay: number }[] = [
    ...shards.flatMap((sh) => (sh.glint ? [sh.glint] : [])),
    ...sparks,
  ];
  const n = glows.length;
  const cycle = n * GLOW_STEP;
  const stride = n % 5 === 0 ? 3 : 5;
  glows.forEach((g, k) => {
    const slot = (k * stride) % n;
    g.dur = cycle;
    // glows become visible at 42% of their cycle; line those moments up GLOW_STEP apart
    g.delay = f(slot * GLOW_STEP - cycle * 0.42 - cycle);
  });

  return { shards, sparks };
}

export const FIELD = buildField();

/** A tilted band of light, ~420 units wide, that travels left to right across the field. */
const FLOW_BAND = "-420,0 0,0 -260,900 -680,900";
const FLOWS = [
  { dur: 16, delay: -4, opacity: 0.85 },
  { dur: 23, delay: -15, opacity: 0.6 },
];

export function MirrorField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="mf-glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="oklch(0.42 0.03 262)" />
            <stop offset="0.55" stopColor="oklch(0.18 0.015 262)" />
            <stop offset="1" stopColor="oklch(0.3 0.025 262)" />
          </linearGradient>
          <linearGradient id="mf-glint" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--gold-soft)" stopOpacity="0" />
            <stop offset="0.45" stopColor="var(--gold)" stopOpacity="0.9" />
            <stop offset="0.6" stopColor="var(--amber)" stopOpacity="0.5" />
            <stop offset="1" stopColor="var(--amber)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="mf-glow">
            <stop offset="0" stopColor="var(--gold-soft)" stopOpacity="0.9" />
            <stop offset="0.35" stopColor="var(--gold)" stopOpacity="0.35" />
            <stop offset="1" stopColor="var(--amber)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="mf-flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--amber)" stopOpacity="0" />
            <stop offset="0.4" stopColor="var(--gold)" stopOpacity="0.35" />
            <stop offset="0.5" stopColor="var(--gold-soft)" stopOpacity="0.6" />
            <stop offset="0.6" stopColor="var(--gold)" stopOpacity="0.35" />
            <stop offset="1" stopColor="var(--amber)" stopOpacity="0" />
          </linearGradient>
          <clipPath id="mf-shards">
            {FIELD.shards.map((s, i) => (
              <polygon key={i} points={s.points} transform={`rotate(${s.rotate} ${s.cx} ${s.cy})`} />
            ))}
          </clipPath>
          <radialGradient id="mf-vignette" cx="50%" cy="48%" r="60%">
            <stop offset="0" stopColor="var(--background)" stopOpacity="0.85" />
            <stop offset="0.55" stopColor="var(--background)" stopOpacity="0.55" />
            <stop offset="1" stopColor="var(--background)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {FIELD.shards.map((s, i) => (
          <g key={i} transform={`rotate(${s.rotate} ${s.cx} ${s.cy})`}>
            <polygon
              points={s.points}
              fill="url(#mf-glass)"
              fillOpacity={s.opacity}
              stroke={s.edge ? "var(--gold)" : "oklch(1 0 0)"}
              strokeOpacity={s.edge ? undefined : 0.1}
              strokeWidth={s.edge ? 0.9 : 0.6}
              className={s.edge ? "edge-glint" : undefined}
              style={
                s.edge
                  ? ({
                      "--glint-dur": `${s.edge.dur}s`,
                      "--glint-delay": `${s.edge.delay}s`,
                    } as React.CSSProperties)
                  : undefined
              }
            />
            {s.glint && (
              <polygon
                points={s.points}
                fill="url(#mf-glint)"
                className="shard-glint"
                style={
                  {
                    "--glint-dur": `${s.glint.dur}s`,
                    "--glint-delay": `${s.glint.delay}s`,
                    "--glint-peak": s.glint.peak,
                  } as React.CSSProperties
                }
              />
            )}
          </g>
        ))}

        {/* Slow golden light flowing across the glass: a faint haze in the air, brighter
            only where it passes over a fragment. */}
        {FLOWS.map((fl, i) => (
          <g key={`f${i}`} opacity={fl.opacity}>
            <polygon
              points={FLOW_BAND}
              fill="url(#mf-flow)"
              opacity={0.22}
              className="light-flow"
              style={
                { "--flow-dur": `${fl.dur}s`, "--flow-delay": `${fl.delay}s` } as React.CSSProperties
              }
            />
            <g clipPath="url(#mf-shards)">
              <polygon
                points={FLOW_BAND}
                fill="url(#mf-flow)"
                className="light-flow"
                style={
                  { "--flow-dur": `${fl.dur}s`, "--flow-delay": `${fl.delay}s` } as React.CSSProperties
                }
              />
            </g>
          </g>
        ))}

        {FIELD.sparks.map((p, i) => (
          <circle
            key={`s${i}`}
            cx={p.x}
            cy={p.y}
            r={p.s}
            fill="url(#mf-glow)"
            className="spark-glint"
            style={
              {
                "--glint-dur": `${p.dur}s`,
                "--glint-delay": `${p.delay}s`,
                "--glint-peak": p.peak,
              } as React.CSSProperties
            }
          />
        ))}

        <rect width={W} height={H} fill="url(#mf-vignette)" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
