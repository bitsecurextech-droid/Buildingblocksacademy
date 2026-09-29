import { MapPin, Navigation, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ADDRESS_ONE_LINE, DIRECTIONS_URL, MAP_EMBED_URL, SCHOOL } from "@/lib/school";

export function SchoolContact({ showLogo = true }: { showLogo?: boolean }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        {showLogo && <Logo size={72} />}
        <div className="min-w-0">
          <p className="font-display text-lg font-extrabold uppercase leading-tight">
            {SCHOOL.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {SCHOOL.type} · {SCHOOL.grades}
          </p>
        </div>
      </div>

      <address className="mt-5 space-y-3 not-italic">
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-start gap-3 text-sm font-semibold hover:text-primary-deep"
        >
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-deep" aria-hidden="true" />
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
          className="flex items-center gap-3 text-base font-bold hover:text-primary-deep"
        >
          <Phone className="h-5 w-5 shrink-0 text-primary-deep" aria-hidden="true" />
          {SCHOOL.phoneDisplay}
        </a>
      </address>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <a
          href={SCHOOL.phoneHref}
          className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-bold text-primary-foreground"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call the School
        </a>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-primary px-4 text-sm font-bold"
        >
          <Navigation className="h-4 w-4" aria-hidden="true" />
          Get Directions
        </a>
      </div>
    </div>
  );
}

export function MapSection({ title = "Visit Building Blocks Academy" }: { title?: string }) {
  return (
    <section className="section-pad bg-primary-soft">
      <div className="shell">
        <h2>{title}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          We are located on N Washington Blvd in Indianapolis. Tap below for directions or call
          the school to arrange a visit.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <SchoolContact />
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title={`Map of ${SCHOOL.name} at ${ADDRESS_ONE_LINE}`}
              src={MAP_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 sm:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
