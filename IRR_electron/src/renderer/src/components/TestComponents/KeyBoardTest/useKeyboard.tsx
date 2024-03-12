import { useEffect, useState } from 'react'
import useCountDown from '../hooks/useCountDown'

const TIME_SPARE = 10

const KeyboardLayout = {
  Base: 82,
  NumPad: 99,
  BaseV1: 83
}

function useKeyboardTest(TestName, nextTest, onOpen, profile) {
  const [keysAmount] = useState(KeyboardLayout[profile.keyboard])
  const [keysPresed, setKeysPressed] = useState(0)

  const { start, secondsLeft } = useCountDown(() => {
    onOpen()
  })

  useEffect(() => {
    start(TIME_SPARE)
  }, [])

  const handleKeyDown = () => {
    setKeysPressed(keysPresed + 1)
  }

  const handleResetTest = () => {
    start(TIME_SPARE)
    setKeysPressed(0)
  }

  useEffect(() => {
    if (keysPresed === keysAmount) {
      nextTest(TestName, { result: true, message: 'Prueba de Teclado Exitosa' })
    }
  }, [keysPresed])

  return { handleKeyDown, handleResetTest, secondsLeft }
}

export default useKeyboardTest
