import { ImageResponse } from "next/og";

export const alt = "Naralimon — Todo puede ser un juego";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 82px",
        background: "#fffdf8",
        color: "#191919",
        border: "28px solid #191919",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", fontSize: 76, fontWeight: 800, letterSpacing: -4 }}>
        <span style={{ color: "#ffa800" }}>nara</span><span style={{ color: "#74b800" }}>limon</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ fontSize: 74, lineHeight: 1, fontWeight: 900, maxWidth: 920 }}>TODO PUEDE SER UN JUEGO.</div>
        <div style={{ fontSize: 32, fontWeight: 600 }}>EVERYTHING CAN BE A GAME.</div>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        <div style={{ width: 56, height: 56, borderRadius: 28, background: "#ffa800", border: "3px solid #191919" }} />
        <div style={{ width: 56, height: 56, borderRadius: 28, background: "#adff29", border: "3px solid #191919" }} />
      </div>
    </div>,
    size,
  );
}
