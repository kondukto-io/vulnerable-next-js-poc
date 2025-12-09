export const metadata = {
  title: 'CVE-2025-55182 POC',
  description: 'Vulnerable Next.js application for security research',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
