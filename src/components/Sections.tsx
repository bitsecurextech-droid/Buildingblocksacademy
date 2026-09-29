import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Navigation, Phone, CalendarCheck } from "lucide-react";
import { Logo } from "@/components/Logo";
import { DIRECTIONS_URL, SCHOOL } from "@/lib/school";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-primary-soft">
      <div className="shell py-12 sm:py-16">
        <div className="flex items-center gap-3">
          <Logo size={52} priority />
          {eyebrow && (
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-deep">
              {eyebrow}
            </p>
          )}
        </div>
        <h1 className="mt-5 max-w-3xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-3xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary-deep">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="mt-4">{title}</h3>
      <p className="mt-2 text-muted-foreground">{body}</p>
    </article>
  );
}

export function GradeCard({
  title,
  blurb,
  image,
  alt,
}: {
  title: string;
  blurb: string;
  image: string;
  alt: string;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-shadow hover:shadow-lift">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        width={1200}
        height={900}
        className="h-44 w-full object-cover sm:h-48"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3>{title}</h3>
        <p className="mt-2 flex-1 text-muted-foreground">{blurb}</p>
        <Link
          to="/grade-levels"
          className="mt-4 inline-flex min-h-11 w-fit items-center rounded-full border-2 border-primary px-4 text-sm font-bold"
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}

export function FinalCTA() {
  return (
    <section className="section-pad bg-ink text-ink-foreground">
      <div className="shell text-center">
        <Logo size={88} className="mx-auto" />
        <h2 className="mx-auto mt-6 max-w-3xl">
          Give Your Child a Stronger Foundation for the Future
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-ink-foreground/80">
          Discover an educational environment designed to challenge, encourage and support your
          child's growth.
        </p>
        <div className="mx-auto mt-8 grid max-w-md gap-3 sm:max-w-none sm:grid-flow-col sm:justify-center">
          <Link
            to="/admissions"
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-primary-foreground"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Schedule a Visit
          </Link>
          <a
            href={SCHOOL.phoneHref}
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-ink-foreground/35 px-6 text-base font-bold"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call the School
          </a>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-ink-foreground/35 px-6 text-base font-bold"
          >
            <Navigation className="h-5 w-5" aria-hidden="true" />
            Get Directions
          </a>
        </div>
        <a
          href={SCHOOL.phoneHref}
          className="mt-6 inline-block text-lg font-extrabold text-primary"
        >
          {SCHOOL.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
