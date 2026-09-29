import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/bba-logo.jpg.asset.json";
import { SCHOOL } from "@/lib/school";

type LogoProps = {
  /** Diameter of the circular frame, in px. */
  size?: number;
  className?: string;
  priority?: boolean;
};

/**
 * The school logo. It is ALWAYS rendered inside a circular frame —
 * use this component everywhere the logo appears, never a bare <img>.
 */
export function Logo({ size = 56, className = "", priority = false }: LogoProps) {
  return (
    <span
      className={`logo-frame shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={logoAsset.url}
        alt={`${SCHOOL.name} logo`}
        width={size}
        height={size}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full rounded-full object-cover"
      />
    </span>
  );
}

export function LogoLockup({
  size = 52,
  priority = false,
  stacked = false,
}: {
  size?: number;
  priority?: boolean;
  stacked?: boolean;
}) {
  return (
    <Link
      to="/"
      aria-label={`${SCHOOL.name} — home`}
      className={`group flex min-w-0 items-center gap-3 ${stacked ? "flex-col text-center" : ""}`}
    >
      <Logo size={size} priority={priority} />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="font-display truncate text-sm font-extrabold uppercase tracking-wide sm:text-base">
          Building Blocks
        </span>
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary-deep">
          Academy
        </span>
      </span>
    </Link>
  );
}
