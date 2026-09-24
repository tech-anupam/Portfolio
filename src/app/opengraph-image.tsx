import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Anupam Jha - Software Engineer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #090A0E 0%, #111319 50%, #161922 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#10B981",
            }}
          />
          <span style={{ color: "#5EEAA0", fontSize: 20, letterSpacing: "0.05em", fontFamily: "monospace" }}>
            anupambuilds.store
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1 style={{ color: "#F0F3F8", fontSize: 76, fontWeight: 700, margin: 0, letterSpacing: "-0.03em" }}>
            Anupam Jha
          </h1>
          <p style={{ color: "#10B981", fontSize: 32, margin: 0, fontWeight: 600 }}>
            Software Engineer · Builder · Problem Solver
          </p>
          <p style={{ color: "#8B95A5", fontSize: 22, margin: 0 }}>
            Modern Web Platforms, Android Apps &amp; Scalable Backend Systems
          </p>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          {["Kotlin", "Next.js", "Java", "AI Systems", "Android", "Supabase"].map((tech) => (
            <span
              key={tech}
              style={{
                color: "#E2E8F0",
                backgroundColor: "#161922",
                fontSize: 18,
                padding: "8px 22px",
                border: "1px solid #1E232F",
                borderRadius: "20px",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
