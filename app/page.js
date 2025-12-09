import ServerForm from './ServerForm'

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>CVE-2025-55182 POC - Vulnerable Next.js App</h1>
      <p>This app demonstrates the React Server Components deserialization vulnerability.</p>
      <ServerForm />
    </main>
  )
}
