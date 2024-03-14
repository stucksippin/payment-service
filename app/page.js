'use client'
import React from 'react'

export default function MainPage() {

  async function handleSend(e) {
    const formData = new FormData(e.target)
    const resp = fetch('/api/test', {
      method: "POST",
      body: JSON.stringify({
        test: formData.get("test")
      })

    })

  }
  return (
    <form onSubmit={handleSend}>
      <input className='p-3 border' name="test" type='text'></input>
      <button>SEND</button>
    </form>
  )
}
