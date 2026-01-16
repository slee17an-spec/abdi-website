export const metadata = {
  title: "Architecture · ABDI Core",
  description: "Public overview of ABDI Core Platform architecture",
};

export default function ArchitecturePage() {
  return (
    <main style={{ maxWidth: 760, margin: "80px auto", padding: "0 24px" }}>
      <h1>Architecture</h1>

      <p style={{ marginTop: 12, opacity: 0.85 }}>
        ABDI Core Platform is designed as a long-living infrastructure layer.
        It prioritizes stability, clarity, and separation of concerns over
        rapid feature expansion.
      </p>

      <section style={{ marginTop: 40 }}>
        <h2>Design Principles</h2>
        <ul style={{ marginTop: 12, lineHeight: 1.7 }}>
          <li>Clear separation between core infrastructure and external services</li>
          <li>Public interfaces are minimal, read-only, and intentional</li>
          <li>No direct coupling between the website and internal systems</li>
          <li>Security through boundaries, not obscurity</li>
        </ul>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>System Overview</h2>
        <p style={{ marginTop: 12 }}>
          The platform consists of three primary layers:
        </p>

        <ol style={{ marginTop: 12, lineHeight: 1.7 }}>
          <li>
            <strong>Public Website</strong> — static, cacheable, and independent.
          </li>
          <li>
            <strong>Core API</strong> — internal runtime responsible for health,
            routing, and platform integrity.
          </li>
          <li>
            <strong>External Services</strong> — optional, isolated, and replaceable.
          </li>
        </ol>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Health & Status</h2>
        <p style={{ marginTop: 12 }}>
          A public health endpoint is exposed to allow transparent monitoring of
          the platform. This endpoint is read-only and does not interact with
          databases or private services.
        </p>
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Longevity</h2>
        <p style={{ marginTop: 12 }}>
          ABDI Core is built to remain understandable and operable over decades.
          The architecture avoids trend-driven dependencies and favors explicit,
          documented behavior.
        </p>
      </section>
    </main>
  );
}
