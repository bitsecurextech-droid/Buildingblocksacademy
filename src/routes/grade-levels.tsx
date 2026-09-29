import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-classroom.jpg";
import approachImg from "@/assets/academic-approach.jpg";
import earlyImg from "@/assets/early-learners.jpg";
import stemImg from "@/assets/school-life-stem.jpg";
import { FinalCTA, PageHero } from "@/components/Sections";
import { GRADES, SCHOOL } from "@/lib/school";
import { Link } from "@tanstack/react-router";

const TITLE = "Grade Levels | Preschool Through 5th Grade in Indianapolis";
const DESC =
  "Explore grade levels at Building Blocks Academy, from Preschool through 5th Grade, in Indianapolis, Indiana.";

export const Route = createFileRoute("/grade-levels")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: GradeLevels,
});

const images = [earlyImg, earlyImg, heroImg, approachImg, stemImg, approachImg, heroImg];

function GradeLevels() {
  return (
    <>
      <PageHero
        eyebrow="Grade Levels"
        title="Explore Our Grade Levels"
        intro={`${SCHOOL.name} serves ${SCHOOL.grades}, with learning that grows more challenging at every stage.`}
      />

      <section className="section-pad">
        <div className="shell space-y-6">
          {GRADES.map((g, i) => (
            <article
              key={g.slug}
              className="grid gap-5 overflow-hidden rounded-3xl border border-border bg-card shadow-card sm:grid-cols-[1fr_1.2fr] sm:gap-0"
            >
              <img
                src={images[i] ?? heroImg}
                alt={`${g.title} students learning at ${SCHOOL.name}`}
                loading="lazy"
                width={1200}
                height={900}
                className="h-48 w-full object-cover sm:h-full"
              />
              <div className="p-6">
                <h2 className="text-2xl">{g.title}</h2>
                <p className="mt-3 text-muted-foreground">{g.blurb}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex min-h-12 items-center rounded-full border-2 border-primary px-5 text-sm font-bold"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
          <p className="text-sm text-muted-foreground">
            Contact {SCHOOL.name} for more information about placement and program levels.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
