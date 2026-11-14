import { profile } from "@/lib/data";
import { ogSize, renderOgCard } from "@/lib/og-card";

export const alt = `${profile.name}, Product & Program Manager`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    eyebrow: profile.eyebrow,
    title: profile.name,
    body: "Product manager with 10+ years shipping software. I turn messy problems into products customers actually use.",
  });
}
