import { projects } from "@/lib/data";
import { ogSize, renderOgCard } from "@/lib/og-card";

export const alt = "Case study by Travis Frye";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return renderOgCard({
    eyebrow: project ? `Case study · ${project.tag}` : "Case study",
    title: project?.title ?? "Travis Frye",
    body: project?.shareSummary ?? "",
  });
}
