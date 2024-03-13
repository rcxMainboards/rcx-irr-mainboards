import { useEffect, useState } from 'react'
import useCountDown from '../hooks/useCountDown'

const TIME_SPARE = 120

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

  useEffect(() => {
    console.log(keysPresed)
    if (keysAmount) {
      if (keysPresed === keysAmount) {
        nextTest(TestName, {
          result: true,
          message: 'Prueba de Teclado Exitosa'
        })
      }
    }
  }, [keysPresed])

  const handleKeyDown = () => {
    setKeysPressed((oldKeys) => oldKeys + 1)
  }

  const handleResetTest = () => {
    start(TIME_SPARE)
    setKeysPressed(0)
  }

  return { handleKeyDown, handleResetTest, secondsLeft }
}

export default useKeyboardTest
