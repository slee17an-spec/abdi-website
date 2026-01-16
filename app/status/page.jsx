export default function Status() {
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
        This page provides operational references
        for the ABDI Core Platform.
      </p>

      <section>
        <h2>Core API</h2>
        <p>
          Status information is available via the health endpoint:
        </p>
        <p>
          <a
            href="https://api.abdisyaif.com/health"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", opacity: 0.85, textDecoration: "underline" }}
          >
            https://api.abdisyaif.com/health
          </a>
        </p>
      </section>

      <section>
        <h2>Website</h2>
        <p>🟢 Online · Static export via Vercel</p>
      </section>

      <footer style={{ marginTop: 64, fontSize: 14, opacity: 0.7 }}>
        © {new Date().getFullYear()} ABDI Core Platform
      </footer>
    </main>
  );
}
