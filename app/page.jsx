export const metadata = {
  title: "ABDI Core Platform",
  description:
    "A long-living core platform designed for stability, clarity, and controlled growth.",
};

export default function HomePage() {
  return (
    <main style={{ maxWidth: 760, margin: "96px auto", padding: "0 24px" }}>
      {/* HERO */}
      <section>
        <h1>ABDI Core Platform</h1>

        <p style={{ marginTop: 16, fontSize: 18, lineHeight: 1.6, opacity: 0.9 }}>
          A long-living core platform designed to remain stable, understandable,
          and dependable over time.
        </p>

        <p style={{ marginTop: 16, opacity: 0.75 }}>
          Built to support systems that value clarity, separation of concerns,
          and deliberate growth.
        </p>
      </section>

      {/* WHY */}
      <section style={{ marginTop: 64 }}>
        <h2>Why It Exists</h2>

        <p style={{ marginTop: 12 }}>
          Modern systems often grow faster than they mature. ABDI Core Platform
          exists to provide a calm, stable foundation that does not chase trends
          or collapse under its own complexity.
        </p>

        <p style={{ marginTop: 12 }}>
          It focuses on what should change slowly: structure, boundaries, and
          responsibility.
        </p>
      </section>

      {/* PRINCIPLES */}
      <section style={{ marginTop: 64 }}>
        <h2>Core Principles</h2>

        <ul style={{ marginTop: 16, lineHeight: 1.8 }}>
          <li>Stability over novelty</li>
          <li>Clear boundaries between systems</li>
          <li>Minimal public surface area</li>
          <li>Explicit behavior over implicit magic</li>
          <li>Longevity measured in decades, not releases</li>
        </ul>
      </section>

      {/* WHAT IT IS */}
      <section style={{ marginTop: 64 }}>
        <h2>What It Is</h2>

        <p style={{ marginTop: 12 }}>
          ABDI Core Platform is not a product framework, a UI toolkit, or a
          feature marketplace. It is an infrastructure layer that quietly
          handles routing, health signaling, and platform integrity.
        </p>

        <p style={{ marginTop: 12 }}>
          It is designed to be boring in the best sense of the word.
        </p>
      </section>

      {/* WHAT IT IS NOT */}
      <section style={{ marginTop: 64 }}>
        <h2>What It Is Not</h2>

        <ul style={{ marginTop: 16, lineHeight: 1.8 }}>
          <li>Not a rapid-experiment playground</li>
          <li>Not coupled to vendor services</li>
          <li>Not dependent on short-lived trends</li>
          <li>Not a place for business logic sprawl</li>
        </ul>
      </section>

      {/* TRANSPARENCY */}
      <section style={{ marginTop: 64 }}>
        <h2>Transparency</h2>

        <p style={{ marginTop: 12 }}>
          The platform exposes a minimal public status signal to communicate its
          operational state. This signal is read-only and does not access private
          systems or data.
        </p>

        <p style={{ marginTop: 12 }}>
          Transparency is treated as a responsibility, not a marketing feature.
        </p>
      </section>

      {/* FOOTER LINKS */}
      <section style={{ marginTop: 72, fontSize: 14 }}>

<section style={{ marginTop: 72, fontSize: 14 }}>
  <a
    href="/architecture/"
    style={{
      marginRight: 24,
      color: "inherit",
      opacity: 0.85,
      textDecoration: "underline",
    }}
  >
    Architecture
  </a>

  <a
    href="/status/"
    style={{
      color: "inherit",
      opacity: 0.85,
      textDecoration: "underline",
    }}
  >
    Platform Status
  </a>
</section>

      </section>
    </main>
  );
}
