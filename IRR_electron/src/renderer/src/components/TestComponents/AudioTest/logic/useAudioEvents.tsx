import { useEffect, useRef, useState } from 'react'
import {
  handleDeviceChange,
  formatDeviceLabels,
  checkDefaultAudioDevice,
  restartVideo
} from './helperFunctions'
import { RemoveAudioEventLisener, AddAudioEventLisener } from './eventFunctions'

function useAudioEvents({
  videoRef,
  onClose,
  start,
  stop,
  onOpen,
  nextTest,
  TestName
}) {
  const [sinkId, setSinkId] = useState<any>()
  const [tries, setTries] = useState(3)

  useEffect(() => {
    if (tries === 0) {
      onClose()
      nextTest(TestName, {
        result: false,
        message: 'Se acabaron los intentos para realizar la prueba'
      })
    }
  }, [tries])

  const showModalAndLoseTry = () => {
    setTries((oldtries) => oldtries - 1)
    onOpen()
    stop()
  }

  const resetTest = () => {
    restartVideo(videoRef)
    onClose()
    start(15)
  }

  const handleDeviceChangeAtStart = async () => {
    const newDevices = await handleDeviceChange()
    const deviceLabels = formatDeviceLabels(newDevices)
    if (checkDefaultAudioDevice(deviceLabels)) {
      resetTest()
      RemoveAudioEventLisener(handleDeviceChangeAtStartRef)
      AddAudioEventLisener(handleDeviceChangeDuringTestRef)
    }
  }

  const handleDeviceChangeDuringTest = async () => {
    const newDevices = await handleDeviceChange()
    const deviceLabels = formatDeviceLabels(newDevices)
    if (checkDefaultAudioDevice(deviceLabels)) {
      resetTest()
    } else {
      showModalAndLoseTry()
    }
  }

  const handleDeviceChangeAtStartRef = useRef(handleDeviceChangeAtStart)
  const handleDeviceChangeDuringTestRef = useRef(handleDeviceChangeDuringTest)

  useEffect(() => {
    handleDeviceChangeAtStartRef.current = handleDeviceChangeAtStart
    handleDeviceChangeDuringTestRef.current = handleDeviceChangeDuringTest
  }, [])

  return {
    handleDeviceChangeAtStartRef,
    handleDeviceChangeDuringTestRef,
    showModalAndLoseTry,
    tries
  }
}

export default useAudioEvents
