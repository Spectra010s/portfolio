import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Spectra010s - Full Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d0d0f",
          backgroundImage:
            "radial-gradient(circle at 18% 16%, rgba(255, 255, 255, 0.09), transparent 22%), radial-gradient(circle at 82% 78%, rgba(255, 255, 255, 0.05), transparent 20%), radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.025) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.025) 2%, transparent 0%)",
          backgroundSize: "100px 100px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              background:
                "linear-gradient(to right, #fafafa, #d4d4d8, #71717a)",
              backgroundClip: "text",
              color: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Adeloye Adetayo
          </div>
          <div
            style={{
              fontSize: 36,
              color: "#f4f4f5",
              fontWeight: 600,
            }}
          >
            Spectra010s | Developer
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#a1a1aa",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            Building software, tools, and strange ideas from a phone
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
