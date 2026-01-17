export default function PublicDocsIndex() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1>Public Documentation</h1>

      <p>
        This section contains intentionally limited public documentation for the
        ABDI Core Platform. These documents describe guarantees, boundaries, and
        expected behavior — not internal implementation details.
      </p>

      <section>
        <h2>Purpose</h2>
        <p>
          The goal of this documentation is transparency without exposure.
          Everything here is safe to read publicly and does not provide
          operational leverage, credentials, or internal topology.
        </p>
      </section>

      <section>
        <h2>Available Documents</h2>
        <ul>
          <li>
            <a
              href="/docs/operational-guarantees"
              style={{
                color: "inherit",
                opacity: 0.85,
                textDecoration: "underline",
              }}
            >
              Operational Guarantees
            </a>
            <p style={{ marginTop: "0.25rem", opacity: 0.85 }}>
              What the platform explicitly guarantees — and what it does not.
            </p>
          </li>

          <li style={{ marginTop: "1.5rem" }}>
            <a
              href="/docs/threat-model"
              style={{
                color: "inherit",
                opacity: 0.85,
                textDecoration: "underline",
              }}
            >
              Threat Model (Public)
            </a>
            <p style={{ marginTop: "0.25rem", opacity: 0.85 }}>
              Classes of threats considered and how boundaries are enforced.
            </p>
          </li>

          <li style={{ marginTop: "1.5rem" }}>
            <a
              href="/docs/failure-modes"
              style={{
                color: "inherit",
                opacity: 0.85,
                textDecoration: "underline",
              }}
            >
              Failure Modes (Public)
            </a>
            <p style={{ marginTop: "0.25rem", opacity: 0.85 }}>
              How the platform is expected to fail, and how failures are surfaced.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>What Is Intentionally Absent</h2>
        <ul>
          <li>Internal architecture diagrams</li>
          <li>Port numbers, credentials, or secrets</li>
          <li>Incident response procedures</li>
          <li>Vendor or infrastructure-specific details</li>
        </ul>
      </section>

      <section>
        <h2>Relationship to the Public Website</h2>
        <p>
          These documents complement the public architecture overview and status
          page. They do not replace operational monitoring or internal runbooks.
        </p>
      </section>

      <hr style={{ margin: "3rem 0" }} />

      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <a
          href="/architecture"
          style={{ color: "inherit", opacity: 0.85, textDecoration: "underline" }}
        >
          Architecture
        </a>
        <a
          href="/status"
          style={{ color: "inherit", opacity: 0.85, textDecoration: "underline" }}
        >
          Platform Status
        </a>
      </nav>
    </main>
  );
}
