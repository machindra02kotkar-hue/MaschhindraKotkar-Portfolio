import { ImageResponse } from "next/og";

export const alt = "Maschhindra — The Story of a Problem Solver";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  const stars = Array.from({ length: 90 }, (_, i) => ({
    left: `${(i * 47) % 100}%`,
    top: `${(i * 71) % 100}%`,
    opacity: 0.25 + ((i * 13) % 60) / 100,
    size: i % 7 === 0 ? 3 : 2,
  }));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: "#071742",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              borderRadius: "999px",
              background: "#ffffff",
              opacity: star.opacity,
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 760,
            height: 300,
            borderRadius: "50%",
            background: "rgba(45, 105, 220, 0.12)",
            boxShadow:
              "0 0 120px 80px rgba(45, 105, 220, 0.16), 0 0 220px 120px rgba(45, 105, 220, 0.08)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 82,
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#8da4c8",
          }}
        >
          A personal journey / 2026
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 500,
            letterSpacing: "0.19em",
            lineHeight: 1,
            marginLeft: "0.19em",
            zIndex: 1,
          }}
        >
          MASCHHINDRA
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            letterSpacing: "0.08em",
            color: "#dce6f5",
            zIndex: 1,
          }}
        >
          The Story of a Problem Solver
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 760,
            marginTop: 26,
            textAlign: "center",
            fontSize: 20,
            lineHeight: 1.55,
            color: "#9eb0ca",
            zIndex: 1,
          }}
        >
          Every journey starts with a single decision. Mine started by choosing to solve a problem instead of ignoring it.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 48,
            display: "flex",
            fontSize: 16,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#7187a9",
          }}
        >
          Scroll to begin
        </div>
      </div>
    ),
    size,
  );
}
