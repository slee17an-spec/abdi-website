/**
 * =====================================================
 * STATUS PAGE — INTENTIONALLY STATIC (LOCKED)
 *
 * This file is NOT a monitoring tool.
 * - No fetch
 * - No health checks
 * - No environment probing
 *
 * This page is designed to remain unchanged
 * for decades (50+ years).
 *
 * DO NOT MODIFY unless a constitutional
 * architecture decision is made.
 * =====================================================
 */

export const dynamic = "force-static";

export default function StatusPage() {
  return (
    <main style={{ maxWidth: 720, margin: "80px auto", padding: "0 24px" }}>
      <h1>Platform Status</h1>

      <p style={{ marginTop: 8, opacity: 0.8 }}>
        Public, read-only status declaration for ABDI Core Platform.
      </p>

      <section
        style={{
          marginTop: 32,
          padding: 24,
          borderRadius: 8,
          border: "1px solid #e5e7eb",
          background: "#fafafa",
        }}
      >
        <h2 style={{ marginBottom: 12 }}>Platform Design State</h2>

        <p style={{ color: "#065f46", fontWeight: 600 }}>
          🟢 Operational by Design
        </p>

        <p style={{ marginTop: 12, fontSize: 14, opacity: 0.75 }}>
          Core services are designed to operate behind dynamic guards and
          gateways. Runtime availability may vary independently of this page.
        </p>
      </section>

      <footer style={{ marginTop: 48, fontSize: 13, opacity: 0.7 }}>
        This page is intentionally static and does not perform
        live health checks, API calls, or system probing.
      </footer>
    </main>
  );
}
