import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { FinalCTA, PageHero } from "@/components/Sections";
import { SchoolContact } from "@/components/SchoolContact";
import { SCHOOL } from "@/lib/school";

const TITLE = "Admissions | Building Blocks Academy Indianapolis";
const DESC =
  "Start your child's journey at Building Blocks Academy. Contact the school to learn about availability, admissions and the educational experience.";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Admissions,
});

const steps = [
  { title: "Contact Us", body: "Call the school to introduce your family and ask questions." },
  { title: "Schedule a Visit", body: "See the classrooms and learning environment in person." },
  {
    title: "Learn About Our Program",
    body: "Understand how advanced learning works at each grade level.",
  },
  { title: "Discuss Enrollment", body: "Review current availability and next steps together." },
  { title: "Begin the School Journey", body: "Your child joins a supportive learning community." },
];

function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Start Your Child's Journey"
        intro="Interested in Building Blocks Academy? Contact the school to learn more about availability, admissions and the educational experience."
      />

      <section className="section-pad">
        <div className="shell grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="flex gap-4 rounded-3xl border border-border bg-card p-5 shadow-card"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary-soft font-display text-lg font-extrabold text-primary-deep">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl">{s.title}</h2>
                  <p className="mt-1 text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="space-y-6">
            <SchoolContact />
            <div className="rounded-3xl border border-border bg-primary-soft p-6">
              <h2 className="text-xl">Admissions Information</h2>
              <p className="mt-2 text-muted-foreground">
                Contact the school for current admissions information.
              </p>
              <a
                href={SCHOOL.phoneHref}
                className="mt-4 inline-flex min-h-13 items-center gap-2 rounded-full bg-primary px-6 text-base font-bold text-primary-foreground"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Contact the School
              </a>
              <p className="mt-4 text-sm">
                Prefer to write?{" "}
                <Link to="/contact" className="font-bold underline">
                  Send an inquiry
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
