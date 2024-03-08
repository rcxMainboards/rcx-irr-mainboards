import { useEffect, useState } from 'react'
import { COLORS } from './constants'

function usePixelTest(onOpenChange: () => void) {
  const [currentColor, setCurrentColor] = useState(0)
  useEffect(() => {
    if (currentColor === COLORS.length) {
      onOpenChange()
    }
  }, [currentColor])

  const handlePress = () => {
    setCurrentColor(currentColor + 1)
  }

  const handleRestTest = () => {
    setCurrentColor(0)
  }

  return { handlePress, handleRestTest, currentColor, COLORS }
}

export default usePixelTest
