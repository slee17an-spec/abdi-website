export const metadata = {
  title: "Platform Status · ABDI Core",
  description: "Public health status of ABDI Core Platform",
};

async function getHealth() {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const res = await fetch("https://api.abdisyaif.com/health", {
      method: "GET",
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return { ok: false };
    }

    return { ok: true, data: await res.json() };
  } catch {
    clearTimeout(timeout);
    return { ok: false };
  }
}

export default async function StatusPage() {
  const health = await getHealth();
  const now = new Date().toUTCString();

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

        {health.ok ? (
          <>
            <p style={{ color: "#065f46", fontWeight: 600 }}>
              🟢 Operational
            </p>
            <p style={{ marginTop: 8, fontSize: 14, opacity: 0.75 }}>
              Last checked: {now}
            </p>
          </>
        ) : (
          <>
            <p style={{ color: "#991b1b", fontWeight: 600 }}>
              🔴 Unavailable
            </p>
            <p style={{ marginTop: 8, fontSize: 14, opacity: 0.75 }}>
              Unable to reach Core API
            </p>
          </>
        )}
      </section>

      <footer style={{ marginTop: 48, fontSize: 13, opacity: 0.7 }}>
        This page does not access databases, private APIs, or credentials.
      </footer>
    </main>
  );
}
