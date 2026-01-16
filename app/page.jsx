export default function Home() {
  return (
    <main style={{ padding: 48, maxWidth: 960, margin: "0 auto", fontFamily: "system-ui" }}>
      <h1>ABDI Core Platform</h1>
      <p><strong>Secure. Governed. Long-living API Core.</strong></p>

      <section>
        <h2>What is ABDI?</h2>
        <p>
          ABDI Core Platform is a hardened API foundation designed for
          long-term sustainability, governance, and cost control.
        </p>
      </section>

      <section>
        <h2>Core Principles</h2>
        <ul>
          <li>Request identity & audit trail</li>
          <li>API key & cost governance</li>
          <li>Kill-switch & vendor isolation</li>
          <li>Designed to last decades</li>
        </ul>
      </section>

      <section>
        <h2>Status</h2>
        <p>🟢 Platform online · Landing page live</p>
      </section>

      <footer style={{ marginTop: 64, fontSize: 14, opacity: 0.7 }}>
        © {new Date().getFullYear()} ABDI Core Platform
      </footer>
    </main>
  );
}
