import { useState, useEffect } from 'react'
import { CLICK_AMOUT, TOTAL_CLICKS } from './constatns'
import useCountDown from '../hooks/useCountDown'

function useTouchPad(TestTimer: number, onOpen: () => void) {
  const [leftClick, setLeftClick] = useState(0)
  const [rightClick, setRightClick] = useState(0)
  const [isLvl1Done, setIsLvl1Done] = useState(false)

  const { start, secondsLeft } = useCountDown(onOpen)

  useEffect(() => {
    start(TestTimer)
    if (leftClick + rightClick === TOTAL_CLICKS) {
      setIsLvl1Done(true)
    }
  }, [leftClick, rightClick])

  function handleRigthClick(event: any) {
    event.preventDefault()
    if (rightClick < CLICK_AMOUT) setRightClick(rightClick + 1)
  }

  function handleLeftClick(event: any) {
    if (event.pointerType === 'mouse') {
      if (leftClick < CLICK_AMOUT) setLeftClick(leftClick + 1)
    }
  }

  const handleResetTest = () => {
    setLeftClick(0)
    setRightClick(0)
    setIsLvl1Done(false)
    start(TestTimer)
  }

  return { leftClick, rightClick, handleLeftClick, handleRigthClick, isLvl1Done, secondsLeft, handleResetTest }
}

export default useTouchPad
