import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Navigation, CalendarCheck } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ADDRESS_ONE_LINE, DIRECTIONS_URL, NAV_LINKS, SCHOOL } from "@/lib/school";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-ink-foreground">
      <div className="shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={64} />
            <div>
              <p className="font-display text-lg font-extrabold uppercase leading-tight">
                {SCHOOL.name}
              </p>
              <p className="text-sm text-primary">{SCHOOL.tagline}</p>
            </div>
          </div>
          <address className="mt-6 space-y-1 text-sm not-italic text-ink-foreground/80">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 hover:text-primary"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {SCHOOL.street}
                <br />
                {SCHOOL.city}, {SCHOOL.state} {SCHOOL.zip}
                <br />
                {SCHOOL.country}
              </span>
            </a>
            <a
              href={SCHOOL.phoneHref}
              className="flex items-center gap-2 pt-2 font-bold text-ink-foreground hover:text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SCHOOL.phoneDisplay}
            </a>
          </address>
        </div>

        <div>
          <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-primary">
            Quick Links
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-1">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="flex min-h-11 items-center text-sm font-semibold text-ink-foreground/85 hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-extrabold uppercase tracking-[0.2em] text-primary">
            Visit Us
          </h2>
          <div className="mt-4 space-y-3">
            <Link
              to="/admissions"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Schedule a Visit
            </Link>
            <a
              href={SCHOOL.phoneHref}
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink-foreground/30 px-4 text-sm font-bold"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call the School
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink-foreground/30 px-4 text-sm font-bold"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Get Directions
            </a>
          </div>
          <p className="mt-4 text-xs text-ink-foreground/60">{ADDRESS_ONE_LINE}</p>
        </div>
      </div>

      <div className="border-t border-ink-foreground/15 py-5 text-center text-xs text-ink-foreground/65">
        © 2026 {SCHOOL.name}. All rights reserved.
      </div>
    </footer>
  );
}
