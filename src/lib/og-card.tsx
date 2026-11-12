import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { profile } from "@/lib/data";

export const ogSize = { width: 1200, height: 630 };

const colors = {
  background: "#fafaf9",
  foreground: "#14181a",
  muted: "#5c6669",
  accent: "#0f766e",
  accentSoft: "#ecf5f3",
};

// Shared social preview card for LinkedIn, Slack, and other link unfurls.
export async function renderOgCard({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  const headshot = await readFile(join(process.cwd(), "public/images/headshot.png"));
  const headshotSrc = `data:image/png;base64,${headshot.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: colors.background,
          borderTop: `16px solid ${colors.accent}`,
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, paddingRight: 48 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: colors.accentSoft,
              color: colors.accent,
              fontSize: 26,
              fontWeight: 600,
              padding: "8px 22px",
              borderRadius: 999,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              fontSize: title.length > 28 ? 62 : 76,
              fontWeight: 700,
              color: colors.foreground,
              lineHeight: 1.05,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 30, color: colors.muted, lineHeight: 1.35 }}>
            {body}
          </div>
          <div style={{ display: "flex", marginTop: "auto", fontSize: 26, color: colors.accent, fontWeight: 600 }}>
            {profile.name} · travisfrye.dev
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
          <img
            src={headshotSrc}
            alt=""
            width={300}
            height={300}
            style={{ borderRadius: 999, objectFit: "cover", border: `10px solid ${colors.accentSoft}` }}
          />
        </div>
      </div>
    ),
    ogSize,
  );
}

