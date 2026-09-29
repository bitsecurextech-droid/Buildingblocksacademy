import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-classroom.jpg";
import approachImg from "@/assets/academic-approach.jpg";
import earlyImg from "@/assets/early-learners.jpg";
import stemImg from "@/assets/school-life-stem.jpg";
import { FinalCTA, PageHero } from "@/components/Sections";
import { SCHOOL } from "@/lib/school";

const TITLE = "School Life | Learning Beyond the Classroom";
const DESC =
  "See school life at Building Blocks Academy in Indianapolis: learning, creativity, collaboration and discovery from Preschool through 5th Grade.";

export const Route = createFileRoute("/school-life")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: SchoolLife,
});

const areas = [
  {
    title: "Learning",
    body: "Daily instruction is focused and engaging, with teachers guiding students through core academic skills.",
    img: heroImg,
    alt: "Teacher reading with students in a bright classroom",
  },
  {
    title: "Creativity",
    body: "Students express ideas through creative activities that build confidence and imagination.",
    img: earlyImg,
    alt: "Young children building with colorful blocks on a classroom rug",
  },
  {
    title: "Collaboration",
    body: "Children work together, share their thinking and learn from one another.",
    img: approachImg,
    alt: "Students solving a problem together at the classroom whiteboard",
  },
  {
    title: "Discovery",
    body: "Hands-on investigation invites students to observe, question and explore.",
    img: stemImg,
    alt: "Children examining plants with magnifying glasses during a science activity",
  },
];

function SchoolLife() {
  return (
    <>
      <PageHero
        eyebrow="School Life"
        title="Learning Beyond the Classroom"
        intro={`Every day at ${SCHOOL.name} blends focused academics with curiosity, collaboration and discovery.`}
      />

      <section className="section-pad">
        <div className="shell space-y-8">
          {areas.map((a, i) => (
            <article
              key={a.title}
              className={`grid items-center gap-6 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>img]:order-2" : ""
              }`}
            >
              <img
                src={a.img}
                alt={a.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
              />
              <div>
                <h2>{a.title}</h2>
                <p className="mt-3 text-muted-foreground">{a.body}</p>
              </div>
            </article>
          ))}
          <p className="text-sm text-muted-foreground">
            Contact {SCHOOL.name} for more information about the school day.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
