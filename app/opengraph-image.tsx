import { ImageResponse } from "next/og";

export const alt = "Naralimon — Commercial Brokerage & Market Development";
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
        background: "#f7f7f2",
        color: "#252525",
        borderTop: "18px solid #adff29",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", fontSize: 72, fontWeight: 800, letterSpacing: -3 }}>
        <span style={{ color: "#ffa800" }}>nara</span><span style={{ color: "#6fae00" }}>limon</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 980 }}>
        <div style={{ fontSize: 64, lineHeight: 1.04, fontWeight: 850 }}>Brokerage Comercial y Desarrollo de Mercados</div>
        <div style={{ fontSize: 30, lineHeight: 1.25, fontWeight: 600 }}>Commercial Brokerage & Market Development</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 650 }}>
        <span>Mijas Costa · Málaga · España</span>
        <span>naralimon.com</span>
      </div>
    </div>,
    size,
  );
}
