import { ImageResponse } from "next/og";

export const alt =
  "BetterWebStack — websites that bring you customers in Chandigarh, Mohali and Panchkula";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f6f5f0",
          padding: "48px 64px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -200,
            top: -170,
            width: 640,
            height: 640,
            borderRadius: 640,
            background:
              "radial-gradient(circle at 38% 32%, #ffffff 0%, #deded7 20%, #85867f 36%, #f4f4ee 50%, #55564f 64%, #c3c3bb 78%, #1b1c18 100%)",
            opacity: 0.92,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(12,13,11,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,13,11,0.055) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse at 10% 0%, black 0%, transparent 68%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 13,
              background: "#0c0d0b",
              color: "#d9f65b",
              fontSize: 25,
              fontWeight: 700,
            }}
          >
            B
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 25,
              fontWeight: 600,
              color: "#0c0d0b",
              letterSpacing: "-0.02em",
            }}
          >
            betterwebstack.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 26,
            padding: "8px 15px",
            borderRadius: 999,
            border: "1px solid rgba(12,13,11,0.16)",
            background: "rgba(255,255,255,0.9)",
            color: "#55584e",
            fontSize: 17,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            alignSelf: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 8,
              height: 8,
              borderRadius: 8,
              background: "#c4ec2f",
            }}
          />
          Chandigarh · Mohali · Panchkula
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 22,
            fontSize: 70,
            lineHeight: 1.04,
            fontWeight: 700,
            letterSpacing: "-0.045em",
            color: "#0c0d0b",
          }}
        >
          <span style={{ display: "flex" }}>Websites that</span>
          <span style={{ display: "flex", alignItems: "center" }}>
            bring you&nbsp;
            <span
              style={{
                display: "flex",
                background: "#d9f65b",
                padding: "0 10px",
                borderRadius: 8,
              }}
            >
              customers.
            </span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 22,
            fontSize: 25,
            lineHeight: 1.38,
            color: "#55584e",
            maxWidth: 600,
          }}
        >
          A lead system, not just a website — built to capture enquiries, book
          appointments and follow up on WhatsApp.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {["Fixed quotes", "10–21 day launch", "Free site audit"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    padding: "10px 17px",
                    borderRadius: 999,
                    border: "1px solid rgba(12,13,11,0.16)",
                    background: "rgba(255,255,255,0.92)",
                    fontSize: 19,
                    color: "#0c0d0b",
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 19,
              color: "#0c0d0b",
              opacity: 0.45,
              letterSpacing: "0.02em",
            }}
          >
            betterwebstack.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
