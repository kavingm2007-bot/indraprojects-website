import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="page-glow relative overflow-hidden border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow header-rise mb-5">{eyebrow}</p>
        <h1
          style={{ "--rise-i": 1 } as React.CSSProperties}
          className="page-header-title header-rise max-w-4xl font-display text-5xl leading-[1.02] font-medium text-foreground sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro && (
          <p
            style={{ "--rise-i": 2 } as React.CSSProperties}
            className="header-rise mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
