import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X, CalendarCheck } from "lucide-react";
import { Logo, LogoLockup } from "@/components/Logo";
import { NAV_LINKS, SCHOOL } from "@/lib/school";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <div className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2.5 lg:flex lg:justify-between">
        <LogoLockup size={48} priority />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground data-[status=active]:bg-accent data-[status=active]:text-accent-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SCHOOL.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary-deep"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SCHOOL.phoneDisplay}
          </a>
          <Link
            to="/admissions"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-card transition-transform hover:scale-[1.02]"
          >
            Schedule a Visit
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden">
          <div className="shell flex items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Logo size={44} priority />
              <span className="font-display text-base font-extrabold uppercase">Menu</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav
            className="shell flex flex-1 flex-col gap-1 overflow-y-auto pb-6"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="flex min-h-14 items-center rounded-2xl px-4 text-lg font-bold text-foreground transition-colors data-[status=active]:bg-accent data-[status=active]:text-accent-foreground"
              >
                {l.label}
              </Link>
            ))}

            <div className="mt-4 space-y-3">
              <Link
                to="/admissions"
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-4 text-base font-bold text-primary-foreground shadow-card"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Schedule a Visit
              </Link>
              <a
                href={SCHOOL.phoneHref}
                className="flex min-h-14 flex-col items-center justify-center rounded-2xl border-2 border-primary px-4 font-bold text-foreground"
              >
                <span className="text-sm uppercase tracking-wide text-muted-foreground">
                  Call the School
                </span>
                <span className="text-lg">{SCHOOL.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
