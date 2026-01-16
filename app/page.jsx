async function getHealth() {
  try {
    const res = await fetch("https://api.abdisyaif.com/health", {
      cache: "no-store"
    });
    return await res.json();
  } catch {
    return { status: "unknown" };
  }
}

export default async function HomePage() {
  const health = await getHealth();

  return (
    <main style={{ padding: "64px", maxWidth: 900, margin: "0 auto" }}>
      {/* HERO */}
      <section>
        <h1 style={{ fontSize: 42 }}>ABDI Core Platform</h1>
        <p style={{ fontSize: 18, color: "#444" }}>
          A secure, auditable, cost-controlled AI core infrastructure.
        </p>
      </section>

      {/* WHAT */}
      <section style={{ marginTop: 48 }}>
        <h2>What is ABDI Core?</h2>
        <p>
          ABDI Core is a minimal, disciplined backend core designed to control
          access, cost, and governance of AI vendors. It is not an app — it is
          the system behind apps.
        </p>
      </section>

      {/* HOW */}
      <section style={{ marginTop: 48 }}>
        <h2>How it works</h2>
        <pre style={{ background: "#f5f5f5", padding: 16 }}>
{`Browser
  → Website Backend
    → ABDI Core
      → AI Vendor`}
        </pre>
      </section>

      {/* STATUS */}
      <section style={{ marginTop: 48 }}>
        <h2>System Status</h2>
        <p>
          Status:{" "}
          <strong
            style={{
              color: health.status === "alive" ? "green" : "red"
            }}
          >
            {health.status}
          </strong>
        </p>
      </section>

      {/* CTA */}
      <section style={{ marginTop: 64 }}>
        <h2>Access & Collaboration</h2>
        <p>
          ABDI Core Platform is currently in controlled internal use.
          For collaboration or access requests, please contact the maintainer.
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 80, fontSize: 14, color: "#777" }}>
        © {new Date().getFullYear()} ABDI Core Platform
      </footer>
    </main>
  );
}
