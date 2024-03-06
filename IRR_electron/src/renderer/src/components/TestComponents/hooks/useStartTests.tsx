import { useState } from 'react'

function useStartTests() {
  const [open, setOpen] = useState(false)

  const start = () => {
    setOpen(true)
  }

  const endGuide = () => {
    setOpen(false)
  }

  return { open, start, endGuide }
}

export default useStartTests
