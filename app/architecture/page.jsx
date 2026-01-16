export default function Architecture() {
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
      <h1>Architecture</h1>
      <p>
        <strong>ABDI Core Platform — High-level system design</strong>
      </p>

      <section>
        <h2>Overview</h2>
        <p>
          ABDI Core Platform is designed as a hardened API core
          positioned between client applications and upstream vendors.
        </p>
        <p>
          Its responsibility is not business logic —
          but control, governance, and survivability.
        </p>
      </section>

      <section>
        <h2>Positioning</h2>
        <p>
          ABDI is not a feature platform.
        </p>
        <p>
          It acts as a control plane for APIs —
          stable by design, even as vendors and frameworks change.
        </p>
      </section>

      <section>
        <h2>Logical Flow</h2>
        <pre style={{ background: "#f5f5f5", padding: 16 }}>
{`
Client / Application
        |
        v
+---------------------+
|  API Gateway Layer  |
|---------------------|
| Request Identity    |
| API Key Guard       |
| Cost / Quota Guard  |
| Kill Switch         |
+---------------------+
        |
        v
+---------------------+
|   Vendor Adapter    |
| (AI, Data, etc)     |
+---------------------+
        |
        v
   External Provider
`}
        </pre>
      </section>

      <section>
        <h2>Why This Shape</h2>
        <p>
          The core intentionally contains no business logic.
        </p>
        <p>
          This allows vendor replacement, cost control before execution,
          and gradual evolution without systemic rewrites.
        </p>
      </section>

      <section>
        <h2>What It Is Not</h2>
        <ul>
          <li>Not a framework</li>
          <li>Not a backend-for-frontend</li>
          <li>Not a feature marketplace</li>
        </ul>
        <p>
          ABDI exists as a long-term infrastructure boundary.
        </p>
      </section>
    </main>
  );
}
