export default function Architecture() {
  return (
    <main style={{ padding: 48, maxWidth: 960, margin: "0 auto", fontFamily: "system-ui" }}>
      <h1>Architecture</h1>
      <p><strong>ABDI Core Platform — High-level system design</strong></p>

      <section>
        <h2>Overview</h2>
        <p>
          ABDI Core Platform is designed as a hardened API core that sits between
          clients and upstream vendors (AI, data, external services).
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
| Request ID          |
| API Key Guard       |
| Cost / Quota Guard  |
| Kill Switch         |
+---------------------+
        |
        v
+---------------------+
|   Vendor Adapter    |
| (OpenAI, etc)       |
+---------------------+
        |
        v
   External Provider
`}
        </pre>
      </section>

      <section>
        <h2>Key Properties</h2>
        <ul>
          <li>Every request has a unique identity</li>
          <li>Cost is checked <em>before</em> vendor execution</li>
          <li>Vendors can be disabled without breaking clients</li>
          <li>Audit logs are append-only and reviewable</li>
        </ul>
      </section>

      <section>
        <h2>Design Philosophy</h2>
        <p>
          The core is intentionally small. Business logic lives outside.
          This allows the platform to survive technology shifts for decades.
        </p>
      </section>
    </main>
  );
}
