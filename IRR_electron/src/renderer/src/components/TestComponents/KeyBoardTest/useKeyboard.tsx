import { useEffect, useState } from 'react'
import useCountDown from '../hooks/useCountDown'

const TIME_SPARE = 120

const KeyboardLayout = {
  '60%Keyboardv1': 77,
  '65%Keyboardv1': 82,
  '65%Keyboardv2': 83,
  '65%Keyboardv3': 81,
  '95%Keyboardv1': 99,
  '95%Keyboardv2': 100,
  '95%KeyboardCopilotv3': 98

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
    if (keysAmount) {
      if (keysPresed === keysAmount) {
        nextTest(TestName, {
          result: true,
          message: 'Prueba de Teclado Exitosa'
        })
      } else if (!keysAmount) {
        nextTest(TestName, {
          result: false,
          message: 'No se encontró un teclado válido para la prueba'
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
