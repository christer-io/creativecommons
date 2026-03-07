import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import LearningPathStepper from "@/components/LearningPathStepper";
import { getAllLearningStepParams, getLearningStep } from "@/lib/learningPath";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllLearningStepParams();
}

type Props = {
  params: Promise<{
    course: string;
    step: string;
  }>;
};

export default async function LearningStepPage({ params }: Props) {
  const { course, step: stepSlug } = await params;
  let result;

  try {
    result = await getLearningStep(course, stepSlug);
  } catch {
    notFound();
  }

  const { pathData, step } = result;
  if (!step) notFound();

  const prevStep = pathData.steps[step.index - 1] || null;
  const nextStep = pathData.steps[step.index + 1] || null;

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <section className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
          Learning Path
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          {pathData.title}
        </h1>
        {pathData.description ? (
          <p className="mt-2 text-slate-600">{pathData.description}</p>
        ) : null}

        <div className="mt-8">
          <LearningPathStepper
            course={pathData.course}
            activeSlug={step.slug}
            steps={pathData.steps.map((item, index) => ({
              slug: item.slug,
              title: `Step ${index + 1}`,
            }))}
          />
        </div>

        <article className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-medium text-slate-500">
            Step {step.index + 1} of {pathData.steps.length}
            {step.duration ? ` • ${step.duration}` : ""}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            {step.title}
          </h2>
          {step.summary ? (
            <p className="mt-3 text-slate-700">{step.summary}</p>
          ) : null}
          <div className="mt-6 text-slate-800">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children }) => (
                  <h2 className="mt-7 text-xl font-semibold text-slate-900">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mt-4 leading-7 text-slate-800">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="mt-4 list-disc space-y-2 pl-6">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="mt-4 list-decimal space-y-2 pl-6">{children}</ol>
                ),
                li: ({ children }) => <li>{children}</li>,
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-blue-700 underline underline-offset-2 hover:text-blue-800"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-slate-900">
                    {children}
                  </strong>
                ),
              }}
            >
              {step.body}
            </ReactMarkdown>
          </div>
        </article>

        <div className="mt-6 flex items-center justify-between gap-3">
          {prevStep ? (
            <Link
              href={`/learn/${course}/${prevStep.slug}`}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Previous
            </Link>
          ) : (
            <div />
          )}

          {nextStep ? (
            <Link
              href={`/learn/${course}/${nextStep.slug}`}
              className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Next
            </Link>
          ) : (
            <Link
              href="/"
              className="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Finish
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
