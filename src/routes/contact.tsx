import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Info } from "lucide-react";
import { FinalCTA, PageHero } from "@/components/Sections";
import { MapSection, SchoolContact } from "@/components/SchoolContact";
import { GRADES, SCHOOL } from "@/lib/school";

const TITLE = "Contact Building Blocks Academy | Indianapolis";
const DESC =
  "Contact Building Blocks Academy in Indianapolis. Call +1 317-498-1731, get directions to 3515 N Washington Blvd or send an inquiry.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "mt-1 w-full rounded-2xl border border-input bg-background px-4 py-3 text-base outline-none focus:border-primary";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Connect"
        intro={`Call ${SCHOOL.phoneDisplay} or send an inquiry and a member of the school team will follow up.`}
      />

      <section className="section-pad">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <SchoolContact />

          <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
            <h2 className="text-2xl">Send an Inquiry</h2>
            {sent ? (
              <div className="mt-5 rounded-2xl bg-primary-soft p-5">
                <p className="font-bold">Thank you — your details are ready to send.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  This form is not yet connected to a mail service, so nothing has been delivered
                  to the school. For an immediate response, please call {SCHOOL.phoneDisplay}.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-4 inline-flex min-h-12 items-center rounded-full border-2 border-primary px-5 text-sm font-bold"
                >
                  Edit my inquiry
                </button>
              </div>
            ) : (
              <form
                className="mt-5 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label htmlFor="name" className="text-sm font-bold">
                    Parent/Guardian Name
                  </label>
                  <input id="name" name="name" required className={fieldClass} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-sm font-bold">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required className={fieldClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-bold">
                      Phone
                    </label>
                    <input id="phone" name="phone" type="tel" className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="grade" className="text-sm font-bold">
                    Student Grade
                  </label>
                  <select id="grade" name="grade" className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select a grade
                    </option>
                    {GRADES.map((g) => (
                      <option key={g.slug} value={g.title}>
                        {g.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-bold">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} className={fieldClass} />
                </div>
                <p className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  This form is frontend only for now; message delivery still needs to be connected.
                </p>
                <button
                  type="submit"
                  className="min-h-13 w-full rounded-full bg-primary px-6 text-base font-bold text-primary-foreground"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <MapSection title="Find Us in Indianapolis" />
      <FinalCTA />
    </>
  );
}
