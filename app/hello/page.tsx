import Link from "next/link";

export default function HelloPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0a0a0a",
        color: "#eaeaea",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Hello from the Hello Page 👋
        </h1>
        <p style={{ marginBottom: "1.5rem" }}>
          This is a sample page inside your Next.js app.
        </p>
        <Link
          href="/"
          style={{
            fontSize: "1.25rem",
            color: "#3b82f6",
            textDecoration: "none",
          }}
        >
          Go Home →
        </Link>
      </div>
    </main>
  );
}
