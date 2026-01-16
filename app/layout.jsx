export const metadata = {
  title: "ABDI Core Platform",
  description: "Secure AI Core Infrastructure"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
