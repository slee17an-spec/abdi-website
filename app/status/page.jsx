export default async function Status() {
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
      <h1>System Status</h1>

      <p>
        This page reflects real-time reachability
        of the ABDI Core API.
      </p>

      <section>
        <h2>Core API</h2>
        {health ? (
          <p>
            🟢 Online · Last checked{" "}
            {new Date(health.time).toLocaleString()}
          </p>
        ) : (
          <p>🟡 Unreachable · No response from /health</p>
        )}
      </section>

      <section>
        <h2>Website</h2>
        <p>🟢 Online · Static export via Vercel</p>
      </section>

      <footer style={{ marginTop: 64, fontSize: 14, opacity: 0.7 }}>
        Data source: /health endpoint
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
