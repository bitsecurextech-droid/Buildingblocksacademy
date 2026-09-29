import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Compass, GraduationCap, HeartHandshake, Sparkles, Users } from "lucide-react";
import heroImg from "@/assets/hero-classroom.jpg";
import approachImg from "@/assets/academic-approach.jpg";
import earlyImg from "@/assets/early-learners.jpg";
import stemImg from "@/assets/school-life-stem.jpg";
import { Logo } from "@/components/Logo";
import { FeatureCard, FinalCTA, GradeCard } from "@/components/Sections";
import { MapSection } from "@/components/SchoolContact";
import { GRADES, SCHOOL } from "@/lib/school";

const TITLE = "Building Blocks Academy | Private Elementary School in Indianapolis";
const DESC =
  "Building Blocks Academy is a private elementary school in Indianapolis serving Preschool through 5th Grade with an advanced approach to education.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Home,
});

const gradeImages = [earlyImg, earlyImg, heroImg, approachImg, stemImg, approachImg, heroImg];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Teacher reading with elementary students in a bright classroom"
          width={1600}
          height={1104}
          className="h-[68vh] min-h-[420px] w-full object-cover sm:h-[72vh]"
        />
        <div className="absolute inset-0 bg-ink/65" />
        <div className="shell absolute inset-0 flex flex-col justify-center py-10 text-ink-foreground">
          <div className="flex items-center gap-3">
            <Logo size={58} priority />
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary">
              Indianapolis, Indiana
            </p>
          </div>
          <h1 className="mt-5 max-w-2xl">Building Bright Minds for a Brighter Future</h1>
          <p className="mt-4 max-w-xl text-ink-foreground/90">
            Advanced education for Preschool through 5th Grade in Indianapolis.
          </p>
          <div className="mt-7 grid max-w-sm gap-3 sm:max-w-none sm:grid-flow-col sm:justify-start">
            <Link
              to="/admissions"
              className="inline-flex min-h-13 items-center justify-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground"
            >
              Schedule a Visit
            </Link>
            <Link
              to="/academics"
              className="inline-flex min-h-13 items-center justify-center rounded-full border-2 border-ink-foreground/50 px-6 text-base font-bold"
            >
              Explore Our Academics
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <h2 className="max-w-2xl">Where Learning Goes Beyond the Expected</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Building Blocks Academy provides an engaging, academically challenging environment
            where students are encouraged to develop strong foundations and progress beyond
            traditional grade-level expectations.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Sparkles}
              title="Advanced Learning"
              body="Students are challenged with learning experiences designed to go beyond standard grade-level expectations."
            />
            <FeatureCard
              icon={Compass}
              title="Personalized Growth"
              body="Learning experiences are designed to support each child's development and academic progress."
            />
            <FeatureCard
              icon={BookOpen}
              title="Strong Foundations"
              body="Students build essential skills in literacy, mathematics, science and other core areas."
            />
            <FeatureCard
              icon={HeartHandshake}
              title="Supportive Environment"
              body="Children learn in a welcoming environment designed to encourage curiosity, confidence and collaboration."
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="shell grid items-center gap-8 lg:grid-cols-2">
          <img
            src={approachImg}
            alt="Students solving an advanced math problem with their teacher"
            loading="lazy"
            width={1408}
            height={1056}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
          />
          <div>
            <h2>Learning One Step Ahead</h2>
            <p className="mt-4 text-muted-foreground">
              At Building Blocks Academy, students are introduced to challenging academic concepts
              and learning experiences that can place them approximately one to two grade levels
              ahead, depending on the student's readiness and program level.
            </p>
            <ul className="mt-6 grid gap-2 text-sm font-semibold sm:grid-cols-2">
              {["Challenge", "Growth", "Readiness", "Strong foundations"].map((v) => (
                <li
                  key={v}
                  className="flex min-h-11 items-center gap-2 rounded-2xl bg-card px-4 shadow-card"
                >
                  <GraduationCap className="h-4 w-4 text-primary-deep" aria-hidden="true" />
                  {v}
                </li>
              ))}
            </ul>
            <Link
              to="/academics"
              className="mt-7 inline-flex min-h-13 items-center rounded-full bg-primary px-6 text-base font-bold text-primary-foreground"
            >
              Explore Our Academic Program
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <h2>From Preschool Through 5th Grade</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Each level builds on the last, with appropriately challenging learning at every step.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GRADES.map((g, i) => (
              <GradeCard
                key={g.slug}
                title={g.title}
                blurb={g.blurb}
                image={gradeImages[i] ?? heroImg}
                alt={`${g.title} learning at ${SCHOOL.name}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary-soft">
        <div className="shell">
          <h2>Learning. Growing. Exploring.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Learn",
                body: "Daily instruction in core academic areas with room to move ahead.",
                img: heroImg,
              },
              {
                title: "Grow",
                body: "Confidence and independence develop alongside academic skills.",
                img: earlyImg,
              },
              {
                title: "Explore",
                body: "Hands-on activities invite students to observe, question and discover.",
                img: stemImg,
              },
              {
                title: "Achieve",
                body: "Students work toward goals that stretch their thinking and readiness.",
                img: approachImg,
              },
            ].map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-card"
              >
                <img
                  src={item.img}
                  alt={`Children ${item.title.toLowerCase()}ing at ${SCHOOL.name}`}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <h3>{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 rounded-3xl border border-border bg-card p-5 shadow-card">
            <Users className="h-6 w-6 shrink-0 text-primary-deep" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">
              Contact {SCHOOL.name} for more information about daily school life.
            </p>
          </div>
        </div>
      </section>

      <MapSection />
      <FinalCTA />
    </>
  );
}
