import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
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
            top: 3,
            left: 8,
            width: 16,
            height: 16,
            borderRadius: 999,
            background: "rgba(185,166,224,0.9)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 3,
            width: 16,
            height: 16,
            borderRadius: 999,
            background: "rgba(240,160,140,0.88)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 13,
            width: 16,
            height: 16,
            borderRadius: 999,
            background: "rgba(126,200,232,0.88)",
          }}
        />
      </div>
    ),
    size,
  );
}
