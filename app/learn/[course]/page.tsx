import { notFound, redirect } from "next/navigation";
import { getLearningPath, getLearningPathCourses } from "@/lib/learningPath";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const courses = await getLearningPathCourses();
  return courses.map((course) => ({ course }));
}

type Props = {
  params: Promise<{
    course: string;
  }>;
};

export default async function LearningPathStartPage({ params }: Props) {
  const { course } = await params;
  let pathData;

  try {
    pathData = await getLearningPath(course);
  } catch {
    notFound();
  }

  if (!pathData.steps.length) {
    notFound();
  }

  redirect(`/learn/${course}/${pathData.steps[0].slug}`);
}
