export default function Home() {
  return (
    <main
      style={{
        padding: 48,
        maxWidth: 960,
        margin: "0 auto",
        fontFamily: "system-ui",
        lineHeight: 1.6,
      }}
    >
      <h1>ABDI Core Platform</h1>

      <p>
        <strong>A long-living, governed API foundation.</strong>
      </p>

      <p>
        Designed for systems that must remain reliable, auditable,
        and controllable for decades.
      </p>

      <p>
        <a
          href="/architecture/"
          style={{ color: "inherit", opacity: 0.85, textDecoration: "underline" }}
        >
          View Architecture
        </a>{" "}
        ·{" "}
        <a
          href="/status/"
          style={{ color: "inherit", opacity: 0.85, textDecoration: "underline" }}
        >
          Check Platform Status
        </a>
      </p>

      <section>
        <h2>What is ABDI</h2>
        <p>
          ABDI Core Platform is a hardened API core that sits between
          applications and external service providers.
        </p>
      </section>

      <section>
        <h2>Why It Exists</h2>
        <p>
          Modern systems fail not because of missing features,
          but because they lose control over cost and change.
        </p>
      </section>

      <section>
        <h2>Core Guarantees</h2>
        <ul>
          <li>Every request is identifiable</li>
          <li>Costs are evaluated before execution</li>
          <li>Vendors can be isolated instantly</li>
          <li>Audit trails are immutable</li>
        </ul>
      </section>

      <footer style={{ marginTop: 64, fontSize: 14, opacity: 0.7 }}>
        © {new Date().getFullYear()} ABDI Core Platform
      </footer>
    </main>
  );
}
