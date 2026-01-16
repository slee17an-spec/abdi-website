export default async function Home() {
  const health = await getHealth();

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
      {/* HERO */}
      <section>
        <h1>ABDI Core Platform</h1>
        <p>
          <strong>A long-living, governed API foundation.</strong>
        </p>
        <p>
          Designed for systems that must remain reliable, auditable,
          and controllable for decades.
        </p>
        <p>
          <a href="/architecture/">View Architecture</a> ·{" "}
          <a href="/status/">Check Platform Status</a>
        </p>
      </section>

      {/* WHAT IS ABDI */}
      <section>
        <h2>What is ABDI</h2>
        <p>
          ABDI Core Platform is a hardened API core that sits between
          applications and external service providers.
        </p>
        <p>
          It provides identity, governance, and cost control at the
          infrastructure boundary — before complexity grows.
        </p>
      </section>

      {/* WHY IT EXISTS */}
      <section>
        <h2>Why It Exists</h2>
        <p>
          Modern systems rarely fail because of missing features.
          They fail because control is lost over access, cost, and change.
        </p>
        <p>
          ABDI was built to prevent that.
        </p>
      </section>

      {/* CORE GUARANTEES */}
      <section>
        <h2>Core Guarantees</h2>
        <ul>
          <li>Every request is identifiable</li>
          <li>Costs are evaluated before execution</li>
          <li>Vendors can be isolated or disabled instantly</li>
          <li>Audit trails are immutable</li>
          <li>No dependency lock-in</li>
        </ul>
      </section>

      {/* ARCHITECTURE TEASER */}
      <section>
        <h2>Architecture</h2>
        <p>
          ABDI is intentionally small at the core.
        </p>
        <p>
          Business logic evolves. Infrastructure governance must not.
        </p>
        <p>
          <a href="/architecture/">View High-Level Architecture</a>
        </p>
      </section>

      {/* STATUS */}
      <section>
        <h2>Status</h2>
        {health ? (
          <p>
            🟢 Core online ·{" "}
            {new Date(health.time).toLocaleString()}
          </p>
        ) : (
          <p>🟡 Core unreachable · Website remains operational</p>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: 64, fontSize: 14, opacity: 0.7 }}>
        © {new Date().getFullYear()} ABDI Core Platform · Built to outlive frameworks
      </footer>
    </main>
  );
}

async function getHealth() {
  try {
    const res = await fetch("https://api.abdisyaif.com/health", {
      cache: "no-store",
    });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}
