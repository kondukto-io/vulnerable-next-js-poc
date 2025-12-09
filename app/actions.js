'use server'

export async function processData(data) {
  // Vulnerable: This processes untrusted data from Server Actions
  // The vulnerability is in how React Server Components deserialize the payload
  console.log('Processing data:', data)

  return `Data processed: ${data}`
}
