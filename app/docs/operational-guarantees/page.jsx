export default function OperationalGuaranteesPage() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "4rem 1.5rem" }}>
      <h1>Operational Guarantees</h1>

      <p>
        This document defines the operational guarantees of the ABDI Core
        Platform. These guarantees describe what the platform explicitly
        commits to — and what it deliberately avoids.
      </p>

      <section>
        <h2>Purpose</h2>
        <p>
          ABDI Core Platform exists to provide a stable, long-living foundation
          for systems that require predictability, control, and operational
          clarity over time.
        </p>
      </section>

      <section>
        <h2>Guaranteed Properties</h2>
        <ul>
          <li>
            <strong>Stability over novelty</strong> — changes are intentional,
            reviewed, and slow.
          </li>
          <li>
            <strong>Clear system boundaries</strong> — public, internal, and
            external responsibilities are explicitly separated.
          </li>
          <li>
            <strong>Minimal public surface</strong> — only essential endpoints
            are exposed.
          </li>
          <li>
            <strong>Explicit behavior</strong> — no hidden side effects or
            implicit magic.
          </li>
          <li>
            <strong>Operational longevity</strong> — measured in decades, not
            release cycles.
          </li>
        </ul>
      </section>

      <section>
        <h2>Public Health Signal</h2>
        <p>
          The platform exposes a single public health endpoint used to
          communicate operational availability.
        </p>
        <ul>
          <li>Read-only</li>
          <li>No database access</li>
          <li>No credentials required</li>
          <li>No mutation or side effects</li>
        </ul>
      </section>

      <section>
        <h2>What Is Explicitly Not Guaranteed</h2>
        <ul>
          <li>Rapid feature delivery</li>
          <li>Trend alignment or framework churn</li>
          <li>Unlimited backward compatibility</li>
          <li>Support for experimental workloads</li>
        </ul>
      </section>

      <section>
        <h2>Change Policy</h2>
        <p>
          Any change that affects public behavior, guarantees, or system
          boundaries must be deliberate, documented, and versioned.
        </p>
      </section>

      <section>
        <h2>Versioning</h2>
        <p>
          This document reflects the guarantees of the platform as of
          <strong> Version 1.0</strong>.
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
