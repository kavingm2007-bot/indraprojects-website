import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { ServiceDialog } from "@/components/site/ServiceDialog";
import { SERVICES, type Service } from "@/data/services";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — INDRAPROJECTS" },
      {
        name: "description",
        content:
          "Career guidance, logo & branding, certification courses, final year projects, websites, portfolios, internships, UI/UX and hosting.",
      },
      { property: "og:title", content: "Our Services — INDRAPROJECTS" },
      {
        property: "og:description",
        content: "Nine services across branding, web development, design and student programs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [active, setActive] = useState<Service | null>(null);
  const [open, setOpen] = useState(false);
  useReveal();

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={
          <>
            Everything you need to <em className="text-gold-gradient not-italic">build</em>,{" "}
            <em className="text-gold-gradient not-italic">brand</em> and{" "}
            <em className="text-gold-gradient not-italic">grow</em>.
          </>
        }
        intro="Select any service to see what we do, the key features and the tools we work with."
      />

      <section className="py-20">
        <ul className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <li key={s.slug} data-reveal style={{ "--reveal-i": i % 3 } as React.CSSProperties}>
              <button
                type="button"
                onClick={() => {
                  setActive(s);
                  setOpen(true);
                }}
                className="panel service-card group flex h-full w-full flex-col rounded-2xl p-7 text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <div className="flex items-start justify-between">
                  <span className="service-card-icon grid size-14 place-items-center rounded-xl border border-line-gold bg-gold/5 text-gold">
                    <s.icon className="size-6" strokeWidth={1.4} />
                  </span>
                  <span className="service-card-number font-display text-lg text-muted-foreground">
                    {s.number}
                  </span>
                </div>
                <h2 className="mt-8 font-display text-2xl leading-snug font-medium text-foreground">
                  {s.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
                <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-gold-soft">
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <ServiceDialog service={active} open={open} onOpenChange={setOpen} />
    </>
  );
}
