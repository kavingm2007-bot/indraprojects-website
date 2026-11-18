import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/data/projects";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — INDRAPROJECTS" },
      {
        name: "description",
        content: "A look at INDRAPROJECTS work across websites, branding, UI/UX design and engineering projects.",
      },
      { property: "og:title", content: "Our Projects — INDRAPROJECTS" },
      {
        property: "og:description",
        content: "Websites, brand identities, interfaces and engineering projects by INDRAPROJECTS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  useReveal();
  return (
    <>
      <PageHeader
        eyebrow="Our Projects"
        title={
          <>
            Selected <span className="text-gold-gradient italic">work</span>.
          </>
        }
        intro="A showcase of what we design and build. Sample entries are shown below and will be replaced with real project case studies."
      />

      <section className="py-20">
        <ul className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <li key={p.title} data-reveal style={{ "--reveal-i": i % 2 } as React.CSSProperties}>
              <article className="panel panel-hover group flex h-full flex-col overflow-hidden rounded-3xl">
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.category} preview`}
                    width={1536}
                    height={1024}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <span className="absolute top-4 left-4 rounded-full border border-line-gold bg-ink/80 px-3 py-1 text-xs font-medium text-gold-soft backdrop-blur">
                    {p.category}
                  </span>
                  {!p.link && (
                    <span className="absolute top-4 right-4 rounded-full bg-ink/80 px-3 py-1 text-[0.65rem] tracking-widest text-muted-foreground uppercase backdrop-blur">
                      Sample
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="font-display text-2xl font-medium">{p.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <ul className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-muted-foreground">
                          {t}
                        </li>
                      ))}
                    </ul>
                    {p.link && (
                      <Button variant="goldOutline" size="sm" asChild>
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          View Project <ArrowUpRight />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-16 max-w-7xl px-5 text-center sm:px-8">
          <p className="text-muted-foreground">Want your project here next?</p>
          <Button variant="gold" size="xl" className="mt-5" asChild>
            <Link to="/contact">
              Start your project <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
