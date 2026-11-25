import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Smooth from "@/components/fx/Smooth";
import CaseStudy from "@/components/project/CaseStudy";
import { neighbours, PROJECT_DETAILS, projectDetail } from "@/data/projectDetails";
import { PROJECTS } from "@/data/projects";

// Every slug is generated at build time, so the page never waits on request data.
export const instant = false;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECT_DETAILS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = projectDetail((await params).slug);
  return project ? { title: project.seoTitle, description: project.seoDescription } : {};
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projectDetail(slug);
  if (!project) notFound();
  const { previous, next } = neighbours(slug, PROJECTS);
  return (
    <main className="page-main" style={{ paddingTop: 100 }} data-framer-name="Main">
      <Smooth />
      <CaseStudy project={project} previous={previous} next={next} />
    </main>
  );
}
