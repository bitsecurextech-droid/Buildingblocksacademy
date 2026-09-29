import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  Brain,
  Calculator,
  FlaskConical,
  Globe2,
  Palette,
  BookOpen,
} from "lucide-react";
import approachImg from "@/assets/academic-approach.jpg";
import { FeatureCard, FinalCTA, PageHero } from "@/components/Sections";

const TITLE = "Academics | Advanced Learning at Building Blocks Academy";
const DESC =
  "Explore the academic program at Building Blocks Academy: early childhood learning, elementary education and advanced academic development in Indianapolis.";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: Academics,
});

const progression = [
  "Foundation",
  "Skill Development",
  "Academic Challenge",
  "Advanced Learning",
  "Future Readiness",
];

function Academics() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Advanced Learning. Strong Foundations."
        intro="Students at Building Blocks Academy build essential skills first, then move into learning experiences that challenge them beyond traditional grade-level expectations."
      />

      <section className="section-pad">
        <div className="shell grid items-center gap-8 lg:grid-cols-2">
          <img
            src={approachImg}
            alt="Elementary students working through an advanced math problem"
            loading="lazy"
            width={1408}
            height={1056}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
          />
          <div className="space-y-6">
            <article>
              <h2 className="text-2xl">Early Childhood Learning</h2>
              <p className="mt-2 text-muted-foreground">
                Preschool and Kindergarten learners build foundational academic, social and
                developmental skills through engaging, hands-on learning experiences.
              </p>
            </article>
            <article>
              <h2 className="text-2xl">Elementary Education</h2>
              <p className="mt-2 text-muted-foreground">
                From 1st through 5th Grade, students strengthen reading, writing and mathematics
                while learning to explain their thinking and work independently.
              </p>
            </article>
            <article>
              <h2 className="text-2xl">Advanced Academic Development</h2>
              <p className="mt-2 text-muted-foreground">
                Students are exposed to academic concepts and learning experiences that can place
                them approximately one to two grade levels ahead, depending on readiness and
                program level.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-pad bg-secondary">
        <div className="shell">
          <h2>Core Learning Areas</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={BookOpen}
              title="Literacy"
              body="Reading, writing, vocabulary and comprehension developed through daily practice."
            />
            <FeatureCard
              icon={Calculator}
              title="Mathematics"
              body="Number sense, problem solving and reasoning taught with appropriate challenge."
            />
            <FeatureCard
              icon={FlaskConical}
              title="Science"
              body="Observation, questioning and hands-on investigation of the world around us."
            />
            <FeatureCard
              icon={Globe2}
              title="Social Studies"
              body="Community, geography and history that broaden how students see the world."
            />
            <FeatureCard
              icon={Brain}
              title="Critical Thinking"
              body="Students learn to analyze, explain their reasoning and approach new problems."
            />
            <FeatureCard
              icon={Palette}
              title="Creative Learning"
              body="Creative activities support expression, collaboration and confidence."
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <h2>A Clear Learning Progression</h2>
          <ol className="mt-8 grid gap-3 sm:gap-4 lg:grid-cols-5 lg:items-stretch">
            {progression.map((step, i) => (
              <li key={step} className="lg:contents">
                <div className="flex items-center gap-4 lg:block">
                  <div className="flex-1 rounded-3xl border border-border bg-card p-5 text-center shadow-card">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft font-display text-base font-extrabold text-primary-deep mx-auto">
                      {i + 1}
                    </span>
                    <p className="mt-3 font-display text-lg font-extrabold">{step}</p>
                  </div>
                </div>
                {i < progression.length - 1 && (
                  <div className="flex justify-center py-1 lg:hidden">
                    <ArrowDown className="h-5 w-5 text-primary-deep" aria-hidden="true" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
