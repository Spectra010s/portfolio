import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Spectra010s - Full Stack Developer Portfolio"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0c",
        backgroundImage:
          "radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.05) 2%, transparent 0%)",
        backgroundSize: "100px 100px",
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
            fontWeight: 900,
            background: "linear-gradient(to right, #60a5fa, #a78bfa, #c084fc)",
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
            color: "#e5e7eb",
            fontWeight: 600,
          }}
        >
          Spectra010s | Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Creative technologist exploring Web3 and hardware
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
