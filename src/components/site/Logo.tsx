import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/indraprojects-logo.jpeg";
import { cn } from "@/lib/utils";

/**
 * INDRAPROJECTS logo, bundled locally so it loads on any host.
 * To use the original high-res logo, replace src/assets/indraprojects-logo.jpeg with a larger copy if needed.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="INDRAPROJECTS logo"
      width={178}
      height={183}
      decoding="async"
      className={cn(
        "h-full w-auto object-contain rounded-md ring-1 ring-line-gold shadow-[var(--shadow-gold)]",
        className,
      )}
    />
  );
}

export function BrandLockup({ size = "nav" }: { size?: "nav" | "footer" }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="INDRAPROJECTS home">
      <span className={cn("block", size === "nav" ? "h-11 sm:h-12" : "h-16")}>
        <LogoMark />
      </span>
      <span
        className={cn(
          "font-display font-semibold tracking-[0.06em] text-foreground transition-colors group-hover:text-gold-soft",
          size === "nav" ? "text-lg min-[400px]:text-xl sm:text-[1.65rem]" : "text-2xl",
        )}
      >
        INDRA<span className="text-gold">PROJECTS</span>
      </span>
    </Link>
  );
}
