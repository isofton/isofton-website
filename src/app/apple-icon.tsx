import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fbf8fc",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 50,
            width: 80,
            height: 80,
            borderRadius: 999,
            background: "rgba(185,166,224,0.9)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 28,
            width: 80,
            height: 80,
            borderRadius: 999,
            background: "rgba(240,160,140,0.88)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 72,
            left: 72,
            width: 80,
            height: 80,
            borderRadius: 999,
            background: "rgba(126,200,232,0.88)",
          }}
        />
      </div>
    ),
    size,
  );
}
