import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, var(--color-dark), var(--color-purple-deeper))",
      textAlign: "center",
      padding: "2rem",
    }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(100px, 20vw, 180px)",
        color: "rgba(249,115,22,0.15)",
        lineHeight: 1,
        userSelect: "none",
      }}>404</div>

      <h1 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(32px, 5vw, 56px)",
        color: "var(--color-white)",
        marginTop: "-1rem",
        marginBottom: "1rem",
      }}>PAGE NOT FOUND</h1>

      <p style={{
        color: "rgba(255,255,255,0.5)",
        fontSize: 16,
        maxWidth: 400,
        lineHeight: 1.7,
        fontFamily: "var(--font-body)",
        marginBottom: "2rem",
      }}>
        Looks like this page is still under construction. Let's get you back on solid ground.
      </p>

      <button
        onClick={() => navigate("/")}
        style={{
          background: "linear-gradient(135deg, var(--color-orange), var(--color-amber))",
          border: "none",
          color: "var(--color-white)",
          padding: "14px 36px",
          borderRadius: "var(--radius-sm)",
          fontFamily: "var(--font-heading)",
          fontWeight: 700,
          fontSize: 14,
          letterSpacing: 1,
          textTransform: "uppercase",
          cursor: "pointer",
          boxShadow: "var(--shadow-orange)",
        }}
      >
        ← Back to Home
      </button>
    </div>
  );
}
