import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLockup } from "./Logo";
import { NAV_LINKS } from "./Navbar";
import { SocialLinks } from "./SocialLinks";
import { WhatsAppIcon } from "./BrandIcons";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="gold-rule absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr]">
        <div className="space-y-5">
          <BrandLockup size="footer" />
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            An IT solutions and branding agency — building websites, identities, designs and
            student projects with care, from first idea to final delivery.
          </p>
          <p className="font-display text-lg italic text-gold-soft">{SITE.tagline}</p>
          <SocialLinks />
        </div>

        <div>
          <h3 className="eyebrow mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-soft"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Get in Touch</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span className="leading-relaxed">{SITE.address}</span>
            </li>
            <li>
              <a href={SITE.phoneHref} className="flex items-center gap-3 hover:text-gold-soft">
                <Phone className="size-4 text-gold" /> +91 {SITE.phone}
              </a>
            </li>
            <li>
              <a href={SITE.emailHref} className="flex items-center gap-3 break-all hover:text-gold-soft">
                <Mail className="size-4 shrink-0 text-gold" /> {SITE.email}
              </a>
            </li>
            <li>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gold-soft"
              >
                <WhatsAppIcon className="size-4 text-gold" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} INDRAPROJECTS. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">IT Solutions & Branding Agency</p>
        </div>
      </div>
    </footer>
  );
}
