export default function FailureModesPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1>Failure Modes (Public)</h1>

      <p>
        This document describes how the ABDI Core Platform is expected to fail,
        how those failures are surfaced, and what guarantees are maintained when
        failures occur.
      </p>

      <section>
        <h2>Design Assumption</h2>
        <p>
          Failure is not treated as an exception. It is a normal operational
          condition that must be predictable, bounded, and observable.
        </p>
      </section>

      <section>
        <h2>Expected Failure Modes</h2>

        <h3>1. Partial Service Unavailability</h3>
        <p>
          Individual components or external dependencies may become unavailable
          without affecting the integrity of the platform as a whole.
        </p>
        <ul>
          <li>No cascading failures into unrelated systems</li>
          <li>Clear separation between core runtime and external services</li>
        </ul>

        <h3>2. Degraded Performance</h3>
        <p>
          Under load, the platform may respond more slowly but will prioritize
          correctness and stability over throughput.
        </p>
        <ul>
          <li>No silent data corruption</li>
          <li>No undefined behavior</li>
        </ul>

        <h3>3. External Dependency Failure</h3>
        <p>
          Third-party services may fail, change behavior, or become unreachable.
          Such failures are isolated and do not compromise the core platform.
        </p>
      </section>

      <section>
        <h2>Public Surface Behavior</h2>
        <p>
          When failures occur, the public interface is intentionally minimal and
          conservative.
        </p>
        <ul>
          <li>Explicit error responses</li>
          <li>No internal stack traces or diagnostics</li>
          <li>No leakage of internal topology or state</li>
        </ul>
      </section>

      <section>
        <h2>Health Signal Semantics</h2>
        <p>
          The public <code>/health</code> endpoint reflects the availability of
          the core runtime only.
        </p>
        <ul>
          <li>
            <strong>Healthy</strong> — core runtime is responsive
          </li>
          <li>
            <strong>Unhealthy</strong> — core runtime is unavailable or degraded
          </li>
        </ul>
        <p>
          The health signal does not attempt to describe root cause, severity,
          or recovery timelines.
        </p>
      </section>

      <section>
        <h2>What the Platform Does Not Do</h2>
        <ul>
          <li>No automatic failover guarantees are advertised publicly</li>
          <li>No promises of zero downtime</li>
          <li>No speculative recovery estimates</li>
          <li>No user-visible retries that mask failure conditions</li>
        </ul>
      </section>

      <section>
        <h2>Failure Containment</h2>
        <p>
          Failures are contained through strict boundaries, minimal shared
          state, and explicit contracts between components.
        </p>
      </section>

      <section>
        <h2>Philosophy</h2>
        <p>
          A system that fails clearly is safer than one that fails silently.
          Transparency is preferred over optimism.
        </p>
      </section>

      <section>
        <h2>Versioning</h2>
        <p>
          This public failure model reflects platform behavior as of
          <strong> Version 1.0</strong>.
        </p>
      </section>

      <hr style={{ margin: "3rem 0" }} />

      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <a
          href="/docs/threat-model"
          style={{ color: "inherit", opacity: 0.85, textDecoration: "underline" }}
        >
          Threat Model
        </a>
        <a
          href="/docs/operational-guarantees"
          style={{ color: "inherit", opacity: 0.85, textDecoration: "underline" }}
        >
          Operational Guarantees
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
