export default function ThreatModelPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1>Threat Model (Public)</h1>

      <p>
        This document describes the public-facing threat model of the ABDI Core
        Platform. It defines the classes of threats considered, the boundaries
        enforced, and the responsibilities explicitly assumed or rejected.
      </p>

      <section>
        <h2>Scope</h2>
        <p>
          This threat model applies only to the <strong>public interface</strong>{" "}
          of the platform. It intentionally excludes internal implementation
          details, private systems, credentials, and operational procedures.
        </p>
      </section>

      <section>
        <h2>Assumed Threat Environment</h2>
        <ul>
          <li>Untrusted public internet traffic</li>
          <li>Automated scanning and probing</li>
          <li>Malformed or abusive requests</li>
          <li>Credential stuffing and brute-force attempts</li>
          <li>Dependency and infrastructure failures</li>
        </ul>
      </section>

      <section>
        <h2>Primary Threat Classes</h2>

        <h3>1. Unauthorized Access</h3>
        <p>
          Attempts to access protected systems, data, or functionality beyond
          what is publicly exposed.
        </p>

        <h3>2. Data Exfiltration</h3>
        <p>
          Attempts to extract sensitive data through public endpoints or side
          channels.
        </p>

        <h3>3. Abuse & Resource Exhaustion</h3>
        <p>
          Attempts to overload or degrade service availability through excessive
          or malicious traffic.
        </p>

        <h3>4. Supply Chain Risk</h3>
        <p>
          Risks introduced through external dependencies or third-party
          services.
        </p>
      </section>

      <section>
        <h2>Explicit Mitigations</h2>
        <ul>
          <li>
            <strong>Minimal public surface area</strong> — only essential
            endpoints are exposed.
          </li>
          <li>
            <strong>Read-only public endpoints</strong> — no state mutation from
            public access.
          </li>
          <li>
            <strong>Strict separation of concerns</strong> — public interfaces
            do not directly touch internal systems.
          </li>
          <li>
            <strong>Rate limiting and boundary controls</strong> — enforced at
            infrastructure level.
          </li>
          <li>
            <strong>No implicit trust</strong> — all external input is treated
            as hostile by default.
          </li>
        </ul>
      </section>

      <section>
        <h2>What Is Explicitly Out of Scope</h2>
        <ul>
          <li>Internal authentication mechanisms</li>
          <li>Credential storage or handling</li>
          <li>Private network topology</li>
          <li>Incident response procedures</li>
          <li>Vendor-specific security configurations</li>
        </ul>
      </section>

      <section>
        <h2>Public Health Endpoint</h2>
        <p>
          The public <code>/health</code> endpoint exists solely to communicate
          platform availability.
        </p>
        <ul>
          <li>No authentication</li>
          <li>No database access</li>
          <li>No write operations</li>
          <li>No sensitive metadata exposure</li>
        </ul>
      </section>

      <section>
        <h2>Philosophy</h2>
        <p>
          Security is achieved through <strong>clear boundaries</strong>, not
          obscurity. The platform favors boring, predictable behavior over
          cleverness or hidden complexity.
        </p>
      </section>

      <section>
        <h2>Versioning</h2>
        <p>
          This public threat model reflects the platform guarantees as of
          <strong> Version 1.0</strong>.
        </p>
      </section>

      <hr style={{ margin: "3rem 0" }} />

      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <a
          href="/docs/operational-guarantees"
          style={{ color: "inherit", opacity: 0.85, textDecoration: "underline" }}
        >
          Operational Guarantees
        </a>
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
