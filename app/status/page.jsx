"use client";

export const dynamic = "force-static";

import { useEffect, useState } from "react";

export default function StatusPage() {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.abdisyaif.com/health", {
      method: "GET",
      signal: controller.signal,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(() => setStatus("ok"))
      .catch(() => setStatus("error"));

    return () => controller.abort();
  }, []);

  return (
    <main style={{ maxWidth: 720, margin: "80px auto", padding: "0 24px" }}>
      <h1>Platform Status</h1>

      <p style={{ marginTop: 8, opacity: 0.8 }}>
        Public, read-only health signal for ABDI Core Platform.
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
        <h2 style={{ marginBottom: 12 }}>Core API</h2>

        {status === "checking" && (
          <p style={{ opacity: 0.7 }}>Checking status…</p>
        )}

        {status === "ok" && (
          <p style={{ color: "#065f46", fontWeight: 600 }}>
            🟢 Operational
          </p>
        )}

        {status === "error" && (
          <p style={{ color: "#991b1b", fontWeight: 600 }}>
            🔴 Unavailable
          </p>
        )}
      </section>

      <footer style={{ marginTop: 48, fontSize: 13, opacity: 0.7 }}>
        This page does not access databases, private APIs, or credentials.
      </footer>
    </main>
  );
}
