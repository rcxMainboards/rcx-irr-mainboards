import { useEffect, useState } from 'react'
function useCountDown(action: () => void) {
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!isActive) return

    const timeout = setTimeout(() => {
      if (secondsLeft > 0) setSecondsLeft(secondsLeft - 1)
    }, 1000)

    if (secondsLeft === 0) {
      action()
      return
    }

    return () => clearTimeout(timeout)
  }, [secondsLeft, isActive])

  const start = (seconds: number) => {
    setSecondsLeft(seconds)
    setIsActive(true)
  }

  const stop = () => {
    setIsActive(false)
  }

  return { secondsLeft, start, stop }
}

export default useCountDown
