import { createFileRoute } from "@tanstack/react-router";
import earlyImg from "@/assets/early-learners.jpg";
import { FinalCTA, PageHero } from "@/components/Sections";
import { SCHOOL } from "@/lib/school";

const TITLE = "About Building Blocks Academy | Indianapolis Private Elementary School";
const DESC =
  "Learn about Building Blocks Academy, a private elementary school in Indianapolis serving Preschool through 5th Grade with an advanced approach to learning.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: About,
});

const sections = [
  {
    title: "Our Approach",
    body: "Building Blocks Academy is built around advanced education. Students are introduced to concepts and learning experiences that stretch beyond traditional grade-level expectations, at a pace matched to their readiness.",
  },
  {
    title: "Our Learning Philosophy",
    body: "Strong foundations come first. Literacy, mathematics, science and critical thinking are taught with care, then extended so students are consistently challenged and supported.",
  },
  {
    title: "Our Students",
    body: "We serve children from Preschool through 5th Grade. Every learner develops at their own pace, and instruction is shaped to encourage curiosity, confidence and independence.",
  },
  {
    title: "Our Environment",
    body: "Classrooms are welcoming, organized and calm, designed so children feel comfortable asking questions, collaborating with classmates and taking on new academic challenges.",
  },
  {
    title: "Why Families Choose Building Blocks Academy",
    body: "Families are looking for a private elementary school that takes academics seriously while keeping learning joyful. Contact Building Blocks Academy for more information.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow={`${SCHOOL.type} · Indianapolis`}
        title="About Building Blocks Academy"
        intro={`Building Blocks Academy is a private elementary school serving ${SCHOOL.grades} in Indianapolis, Indiana, with a focus on advanced education.`}
      />

      <section className="section-pad">
        <div className="shell grid gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-6">
            {sections.map((s) => (
              <article
                key={s.title}
                className="rounded-3xl border border-border bg-card p-6 shadow-card"
              >
                <h2 className="text-2xl">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
          <img
            src={earlyImg}
            alt="Preschool children building with blocks alongside their teacher"
            loading="lazy"
            width={1200}
            height={912}
            className="h-full max-h-[560px] w-full rounded-3xl object-cover shadow-card lg:sticky lg:top-24"
          />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
