import { useEffect, useRef, useState } from 'react'
import {
  handleDeviceChange,
  formatDeviceLabels,
  checkDefaultAudioDevice,
  restartVideo
} from './helperFunctions'
import { useMediaDevices } from 'react-media-devices'

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

  const { devices, loading } = useMediaDevices({
    constraints: { audio: true },
    onError: (error) => {
      console.error(error)
    }
  })

  useEffect(() => {
    if (!loading) {
      const deviceLabels = formatDeviceLabels(devices)
      if (!checkDefaultAudioDevice(deviceLabels)) {
        showModalAndLoseTry()
      }
    }
  }, [loading])

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

  const handleErrorDuringTest = async () => {
    const newDevices = await handleDeviceChange()
    const deviceLabels = formatDeviceLabels(newDevices)
    if (checkDefaultAudioDevice(deviceLabels)) {
      resetTest()
    } else {
      showModalAndLoseTry()
    }
  }

  const handleDeviceChangeDuringTestRef = useRef(handleErrorDuringTest)

  useEffect(() => {
    handleDeviceChangeDuringTestRef.current = handleErrorDuringTest
  }, [])

  return {
    handleDeviceChangeDuringTestRef,
    tries
  }
}

export default useAudioEvents
