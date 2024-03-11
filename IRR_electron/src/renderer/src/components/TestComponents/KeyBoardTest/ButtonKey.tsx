import { useEffect, useState } from 'react'
import { Kbd } from '@nextui-org/react'

export default function ButtonKey({ label, code, handleKeyDown }) {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const handleKeyCode = (event) => {
      if (event.code === code) {
        setPressed(true)
      }
    }

    const handleKeyUp = (event) => {
      if (event.code === 'PrintScreen' && label === 'PrintScreen') {
        setPressed(true)
      }
    }

    window.addEventListener('keydown', handleKeyCode)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyCode)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  useEffect(() => {
    if (pressed) {
      handleKeyDown()
    }
  }, [pressed])

  return (
    <Kbd
      style={{
        backgroundColor: !pressed ? 'white' : '#09AACD'
      }}
      className={`flex h-full w-full items-center justify-center rounded-sm border`}
    >
      {label}
    </Kbd>
  )
}
