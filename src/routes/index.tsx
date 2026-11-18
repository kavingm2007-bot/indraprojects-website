import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { MirrorField } from "@/components/site/MirrorField";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INDRAPROJECTS — IT Solutions & Branding Agency" },
      {
        name: "description",
        content:
          "INDRAPROJECTS is an IT solutions and branding agency for websites, logos, UI/UX, final year projects, courses and internships.",
      },
      { property: "og:title", content: "INDRAPROJECTS — Dream. Design. Develop. Deliver." },
      {
        property: "og:description",
        content: "IT solutions and branding agency crafting websites, brands, designs and student projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const STEPS = [
  { word: "Dream", text: "We listen closely and shape your idea into a clear direction." },
  { word: "Design", text: "Identities and interfaces crafted with precision and taste." },
  { word: "Develop", text: "Clean, reliable builds — websites, apps and projects that work." },
  { word: "Deliver", text: "On time, fully explained, and supported after launch." },
];

function Index() {
  useReveal();
  return (
    <>
      {/* Hero — the only place the mirror-fragment background appears */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink">
        <MirrorField />
        <div className="relative mx-auto w-full max-w-5xl px-5 pt-24 pb-16 text-center sm:px-8">
          <p className="eyebrow mb-8">IT Solutions & Branding Agency</p>
          <h1 className="font-display text-[clamp(2.5rem,8.6vw,7.25rem)] leading-[0.95] font-medium tracking-[0.02em] text-foreground">
            INDRA<span className="text-gold-gradient">PROJECTS</span>
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-gold/60" />
          <p className="mt-8 font-display text-2xl text-gold-soft italic sm:text-3xl">
            Dream. Design. Develop. Deliver.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We bring ideas to life through thoughtful branding, professional websites, refined
            UI/UX and practical technology — and we guide students with projects, courses and
            internships that build real careers.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="gold" size="xl" asChild>
              <Link to="/services">
                Explore Services <ArrowRight />
              </Link>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-t border-line py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow mb-4">How we work</p>
              <h2 className="max-w-xl font-display text-4xl leading-tight font-medium sm:text-5xl">
                Four words that guide every project.
              </h2>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-soft hover:text-gold"
            >
              About INDRAPROJECTS <ArrowRight className="size-4" />
            </Link>
          </div>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li
                key={s.word}
                data-reveal
                style={{ "--reveal-i": i } as React.CSSProperties}
                className="bg-background p-8"
              >
                <span className="font-display text-sm text-gold">0{i + 1}</span>
                <h3 className="mt-6 font-display text-3xl font-medium">{s.word}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services teaser */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div data-reveal className="panel rounded-3xl p-8 sm:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
              <div>
                <p className="eyebrow mb-4">What we offer</p>
                <h2 className="font-display text-4xl leading-tight font-medium sm:text-5xl">
                  Nine services, one trusted partner.
                </h2>
                <p className="mt-5 text-muted-foreground">
                  From your first logo to your final year project — explore everything we do.
                </p>
                <Button variant="gold" size="xl" className="mt-8" asChild>
                  <Link to="/services">
                    View all services <ArrowRight />
                  </Link>
                </Button>
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {SERVICES.map((s) => (
                  <li
                    key={s.slug}
                    className="flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-foreground/90"
                  >
                    <s.icon className="size-4 text-gold" strokeWidth={1.5} />
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
