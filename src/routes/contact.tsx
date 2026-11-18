import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ExternalLink, Info, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { SocialLinks } from "@/components/site/SocialLinks";
import { WhatsAppIcon } from "@/components/site/BrandIcons";
import { Button } from "@/components/ui/button";
import { buildContactMailto, contactSchema, type ContactInput } from "@/lib/contact";
import { mapEmbedUrl, mapLinkUrl, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    const service = search["service"];
    return typeof service === "string" && service.length <= 100 ? { service } : {};
  },
  head: () => ({
    meta: [
      { title: "Contact — INDRAPROJECTS" },
      {
        name: "description",
        content:
          "Contact INDRAPROJECTS in Suriyampalayam, Erode. Call or WhatsApp +91 9524165106 or email kavingm2007@gmail.com.",
      },
      { property: "og:title", content: "Contact INDRAPROJECTS" },
      {
        property: "og:description",
        content: "Call, WhatsApp, email or visit INDRAPROJECTS in Erode, Tamil Nadu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-xl border border-input bg-ink/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-[color,background-color,border-color,box-shadow] duration-300 ease-out focus:border-gold focus:bg-ink/80 focus:outline-none focus:ring-1 focus:ring-ring";

function ContactPage() {
  useReveal();
  const { service } = Route.useSearch();
  const [opened, setOpened] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: service ? `Enquiry: ${service}` : "",
      message: "",
    },
  });

  const onSubmit = (data: ContactInput) => {
    window.location.href = buildContactMailto(data);
    setOpened(true);
  };

  const details = [
    { icon: MapPin, label: "Office", value: SITE.address, href: mapLinkUrl, external: true },
    { icon: Phone, label: "Phone", value: `+91 ${SITE.phone}`, href: SITE.phoneHref },
    { icon: Mail, label: "Email", value: SITE.email, href: SITE.emailHref },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's start something <span className="text-gold-gradient italic">great</span>.
          </>
        }
        intro="Tell us about your idea, project or learning goal. Reach us directly or send a message below."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1.35fr]">
          {/* Details */}
          <aside data-reveal className="panel flex flex-col rounded-3xl p-8 sm:p-10">
            <h2 className="font-display text-3xl font-medium">Contact details</h2>
            <ul className="mt-8 space-y-6">
              {details.map((d) => (
                <li key={d.label}>
                  <a
                    href={d.href}
                    {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex gap-4"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line-gold text-gold transition-[background-color,border-color,transform] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-gold group-hover:bg-gold/10 group-focus-visible:border-gold group-focus-visible:bg-gold/10 motion-reduce:transform-none">
                      <d.icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <span>
                      <span className="block text-xs tracking-[0.2em] text-muted-foreground uppercase">
                        {d.label}
                      </span>
                      <span className="mt-1 block leading-relaxed break-all text-foreground transition-colors duration-300 group-hover:text-gold-soft sm:break-normal">
                        {d.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <Button variant="gold" size="xl" className="mt-10 w-full" asChild>
              <a href={SITE.whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" /> Chat on WhatsApp
              </a>
            </Button>

            <div className="mt-auto pt-10">
              <div className="gold-rule mb-6" />
              <p className="mb-4 text-xs tracking-[0.2em] text-muted-foreground uppercase">Follow us</p>
              <SocialLinks className="[&_a]:transition-[color,border-color,transform] [&_a]:duration-300 [&_a:hover]:-translate-y-0.5 motion-reduce:[&_a:hover]:translate-y-0" />
            </div>
          </aside>

          {/* Form */}
          <div data-reveal style={{ "--reveal-i": 1 } as React.CSSProperties} className="panel rounded-3xl p-8 sm:p-10">
            <h2 className="font-display text-3xl font-medium">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">All fields are required.</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name?.message} htmlFor="name">
                <input id="name" autoComplete="name" placeholder="Your full name" maxLength={100} className={fieldClass} {...register("name")} />
              </Field>
              <Field label="Email Address" error={errors.email?.message} htmlFor="email">
                <input id="email" type="email" autoComplete="email" placeholder="you@example.com" maxLength={255} className={fieldClass} {...register("email")} />
              </Field>
              <Field label="Subject" error={errors.subject?.message} htmlFor="subject" className="sm:col-span-2">
                <input id="subject" placeholder="What is this about?" maxLength={150} className={fieldClass} {...register("subject")} />
              </Field>
              <Field label="Message" error={errors.message?.message} htmlFor="message" className="sm:col-span-2">
                <textarea id="message" rows={6} placeholder="Tell us a little about your project or question…" maxLength={2000} className={cn(fieldClass, "resize-y")} {...register("message")} />
              </Field>

              <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                  <Info className="mt-0.5 size-3.5 shrink-0 text-gold" />
                  Sending opens your email app with this message ready to send to {SITE.email}.
                </p>
                <Button type="submit" variant="gold" size="xl" className="shrink-0">
                  Submit <Send />
                </Button>
              </div>
              {opened && (
                <p role="status" className="rounded-xl border border-line-gold bg-gold/5 px-4 py-3 text-sm text-gold-soft sm:col-span-2">
                  Your email app should now be open with the message filled in — press send there to
                  deliver it. If nothing opened, email us at {SITE.email} or use WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mx-auto mt-8 max-w-7xl px-5 sm:px-8">
          <div data-reveal className="panel overflow-hidden rounded-3xl">
            <div className="flex flex-col gap-3 border-b border-line p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
                <p className="text-sm text-foreground">{SITE.address}</p>
              </div>
              <a
                href={mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-gold-soft transition-colors duration-300 hover:text-gold"
              >
                Open in Google Maps <ExternalLink className="size-4" />
              </a>
            </div>
            <iframe
              title="INDRAPROJECTS office location on Google Maps"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[360px] w-full border-0 sm:h-[440px]"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  htmlFor,
  className,
  children,
}: {
  label: string;
  error?: string | undefined;
  htmlFor: string;
  className?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
