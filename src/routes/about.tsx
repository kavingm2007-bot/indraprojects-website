import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Eye, Gem, Handshake, Lightbulb, Target, Users } from "lucide-react";
import studioImg from "@/assets/about-studio.jpg";
import glassImg from "@/assets/about-glass.jpg";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — INDRAPROJECTS" },
      {
        name: "description",
        content:
          "Meet INDRAPROJECTS, an IT solutions and branding agency combining design, technology and student mentorship.",
      },
      { property: "og:title", content: "About INDRAPROJECTS" },
      {
        property: "og:description",
        content: "An IT solutions and branding agency where ideas are dreamed, designed, developed and delivered.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Gem, title: "Quality in every detail", text: "We care about the small things — spacing, wording, performance — because they add up." },
  { icon: Handshake, title: "Honest partnership", text: "Clear communication, realistic timelines and transparent pricing from day one." },
  { icon: Lightbulb, title: "Creative thinking", text: "Every brief gets fresh ideas, not recycled templates." },
  { icon: Users, title: "Growth for learners", text: "We share knowledge openly so students leave with real, usable skills." },
];

function AboutPage() {
  useReveal();
  return (
    <>
      {/* Intro */}
      <section className="page-glow relative overflow-hidden pt-36 pb-20 sm:pt-44">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
          <div data-reveal>
            <p className="eyebrow mb-5">About Us</p>
            <h1 className="font-display text-5xl leading-[1.02] font-medium sm:text-6xl lg:text-7xl">
              Where ideas become <span className="text-gold-gradient italic">identity</span> and
              technology.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              INDRAPROJECTS is an IT solutions and branding agency. We help businesses look and
              work better online — and we help students turn their learning into real projects
              and careers.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="gold" size="xl" asChild>
                <Link to="/services">
                  Our Services <ArrowRight />
                </Link>
              </Button>
              <Button variant="goldOutline" size="xl" asChild>
                <Link to="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-line-gold" />
            <img
              data-reveal
              style={{ "--reveal-i": 2 } as React.CSSProperties}
              src={studioImg}
              alt="A dark studio desk with logo sketches and a laptop showing brand designs"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="border-y border-line py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-reveal className="relative hidden lg:block">
            <img
              src={glassImg}
              alt=""
              width={1024}
              height={1536}
              loading="lazy"
              className="h-full max-h-[620px] w-full rounded-3xl object-cover"
            />
          </div>
          <div data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties} className="flex flex-col justify-center">
            <p className="eyebrow mb-4">Who we are</p>
            <h2 className="font-display text-4xl leading-tight font-medium sm:text-5xl">
              One studio for design, development and direction.
            </h2>
            <div className="mt-7 space-y-5 leading-relaxed text-muted-foreground">
              <p>
                We bring branding and technology together under one roof. That means your logo,
                your website and your digital presence are designed to work as one — consistent,
                professional and memorable.
              </p>
              <p>
                Alongside client work, we run career guidance, certification courses, internships
                and final year project support for engineering students across all departments.
              </p>
            </div>

            {/* Editable placeholder for real company information */}
            <div className="mt-10 rounded-2xl border border-dashed border-line-gold bg-gold/[0.03] p-6">
              <p className="eyebrow mb-3">Our Story</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                [Add the INDRAPROJECTS founding story here — when and why the company started, the
                founder's background, and the team behind the work.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          <article data-reveal className="panel rounded-3xl p-10">
            <Target className="size-8 text-gold" strokeWidth={1.3} />
            <h3 className="mt-8 font-display text-3xl font-medium">Our Mission</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To deliver dependable IT solutions and distinctive branding that help businesses
              grow, while guiding students to build practical skills for the industry.
            </p>
          </article>
          <article data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties} className="panel rounded-3xl p-10">
            <Eye className="size-8 text-gold" strokeWidth={1.3} />
            <h3 className="mt-8 font-display text-3xl font-medium">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              To be a trusted creative technology partner known for work that is thoughtful,
              well-crafted and genuinely useful to the people it serves.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div data-reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">What we value</p>
            <h2 className="font-display text-4xl leading-tight font-medium sm:text-5xl">
              The principles behind our work.
            </h2>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <li key={v.title} data-reveal style={{ "--reveal-i": i } as React.CSSProperties} className="bg-background p-8">
                <v.icon className="size-6 text-gold" strokeWidth={1.4} />
                <h3 className="mt-6 text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div data-reveal className="panel flex flex-col items-start justify-between gap-8 rounded-3xl p-10 sm:p-14 md:flex-row md:items-center">
            <div>
              <p className="font-display text-2xl text-gold-soft italic">Dream. Design. Develop. Deliver.</p>
              <h2 className="mt-3 font-display text-4xl font-medium">Have an idea? Let's shape it together.</h2>
            </div>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Start a conversation <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
