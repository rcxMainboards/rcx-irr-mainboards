import { useState, useEffect, TouchEvent } from 'react'
import useCountDown from '../hooks/useCountDown'

function useTouchTest(
  onOpen: () => void,
  TestTimer: number,
  TestName: string,
  nextTest: (TestName: string, detailsResult: { result: boolean; message: string }) => void
) {
  const [boxes, setBoxes] = useState(Array(256).fill('bg-accent-500'))

  const { start, secondsLeft } = useCountDown(onOpen)

  useEffect(() => {
    start(TestTimer)
  }, [])

  useEffect(() => {
    if (boxes.every((box) => box === 'bg-transparent')) {
      nextTest(TestName, { result: true, message: 'Test completado con éxito' })
    }
  }, [boxes])

  const handleRestTest = () => {
    setBoxes(Array(256).fill('bg-accent-500'))
    start(TestTimer)
  }

  const onTouchBox = (index: number) => {
    const newTouchBoxes = [...boxes]
    newTouchBoxes[index] = 'bg-transparent'
    setBoxes(newTouchBoxes)
  }

  const handleTouch = (e: TouchEvent<HTMLDivElement>) => {
    const touches = e.changedTouches
    if (touches && touches.length > 0) {
      const touchX = touches[0].clientX
      const touchY = touches[0].clientY

      // Obtener el elemento en el que se encuentra el toque
      const element = document.elementFromPoint(touchX, touchY)

      // Obtener el índice del elemento si es una caja
      const index = Array.from(e.currentTarget.children).indexOf(element as Element)

      if (boxes.every((box) => box === 'bg-white')) {
        return
      }
      if (index !== -1) {
        onTouchBox(index)
      }
    }
  }

  return { boxes, handleTouch, handleRestTest, secondsLeft }
}

export default useTouchTest
