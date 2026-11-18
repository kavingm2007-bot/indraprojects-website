import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "./BrandIcons";

const LINKS = [
  { label: "Instagram", href: SITE.social.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: SITE.social.facebook, Icon: FacebookIcon },
  { label: "LinkedIn", href: SITE.social.linkedin, Icon: LinkedInIcon },
  { label: "X (Twitter)", href: SITE.social.x, Icon: XIcon },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {LINKS.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="grid size-10 place-items-center rounded-full border border-line text-muted-foreground transition-colors hover:border-gold hover:text-gold"
          >
            <Icon className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
