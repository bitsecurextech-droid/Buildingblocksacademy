import { Navigation, Phone } from "lucide-react";
import { DIRECTIONS_URL, SCHOOL } from "@/lib/school";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-2 backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a
          href={SCHOOL.phoneHref}
          className="flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-primary px-3 py-3 text-sm font-bold text-primary-foreground"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call School
        </a>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-13 items-center justify-center gap-2 rounded-2xl border-2 border-primary px-3 py-3 text-sm font-bold text-foreground"
        >
          <Navigation className="h-5 w-5" aria-hidden="true" />
          Directions
        </a>
      </div>
    </div>
  );
}
