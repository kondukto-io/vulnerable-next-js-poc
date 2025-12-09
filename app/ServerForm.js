'use client'

import { useState } from 'react'
import { processData } from './actions'

export default function ServerForm() {
  const [result, setResult] = useState('')

  async function handleSubmit(formData) {
    const data = formData.get('data')
    const response = await processData(data)
    setResult(response)
  }

  return (
    <div style={{ marginTop: '2rem' }}>
      <form action={handleSubmit}>
        <label>
          Enter data:
          <br />
          <textarea
            name="data"
            rows={5}
            cols={50}
            style={{ marginTop: '0.5rem' }}
            placeholder="Enter any data..."
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Process Data
        </button>
      </form>
      {result && (
        <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0f0f0' }}>
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  )
}
