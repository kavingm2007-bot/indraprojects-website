import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, X } from "lucide-react";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/button";

export function ServiceDialog({
  service,
  open,
  onOpenChange,
}: {
  service: Service | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const Icon = service?.icon;
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="glass-overlay glass-overlay-motion fixed inset-0 z-50" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          className="glass-green fixed top-1/2 left-1/2 z-50 max-h-[88vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl p-6 glass-pop-motion outline-none sm:p-10"
        >
          {service && Icon && (
            <>
              <DialogPrimitive.Close
                aria-label="Close"
                className="absolute top-5 right-5 z-10 grid size-10 place-items-center rounded-full border border-glass-line text-glass-foreground transition-colors hover:bg-glass-chip"
              >
                <X className="size-4" />
              </DialogPrimitive.Close>

              <div className="glass-rise flex items-center gap-4 pr-12">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-glass-line bg-glass-chip text-glass-accent">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-glass-accent uppercase">
                    What We Do
                  </p>
                  <DialogPrimitive.Title className="mt-1 font-display text-3xl leading-tight font-medium sm:text-4xl">
                    {service.title}
                  </DialogPrimitive.Title>
                </div>
              </div>

              <p className="glass-rise mt-6 leading-relaxed text-glass-muted" style={{ "--rise-i": 1 } as React.CSSProperties}>{service.whatWeDo}</p>

              <div className="glass-rise mt-8" style={{ "--rise-i": 2 } as React.CSSProperties}>
                <h3 className="text-sm font-semibold tracking-wide text-glass-foreground">
                  Key features
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex gap-3 text-sm text-glass-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-glass-accent" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.technologies && (
                <div className="glass-rise mt-8" style={{ "--rise-i": 3 } as React.CSSProperties}>
                  <h3 className="text-sm font-semibold tracking-wide text-glass-foreground">
                    Technologies & tools
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.technologies.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-glass-line bg-glass-chip px-3 py-1 text-xs text-glass-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="glass-rise mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end" style={{ "--rise-i": 4 } as React.CSSProperties}>
                <DialogPrimitive.Close asChild>
                  <Button variant="glassGhost" size="xl">
                    Close
                  </Button>
                </DialogPrimitive.Close>
                <Button variant="glass" size="xl" asChild>
                  <Link to="/contact" search={{ service: service.title }}>
                    Get Started <ArrowRight />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
