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
  stopSpeaker,
  onOpen,
  nextTest,
  TestName
}) {
  const [tries, setTries] = useState(3)

  const showModalAndLoseTry = () => {
    stop()
    stopSpeaker()
    setTries((oldtries) => oldtries - 1)
    onOpen()
  }

  const resetTest = () => {
    start(15)
    restartVideo(videoRef)
    onClose()
  }

  const handleErrorDuringTest = async () => {
    const newDevices = await handleDeviceChange()
    const deviceLabels = formatDeviceLabels(newDevices)
    if (!checkDefaultAudioDevice(deviceLabels)) {
      showModalAndLoseTry()
    } else {
      resetTest()
    }
  }

  const { devices, loading } = useMediaDevices({
    constraints: { audio: true },
    onError: (error) => {
      console.error(error)
    }
  })

  useEffect(() => {
    // Este efecto al montarse se consigue los dispositivos iniciales.
    if (!loading && devices) {
      const deviceLabels = formatDeviceLabels(devices)
      if (!checkDefaultAudioDevice(deviceLabels)) {
        showModalAndLoseTry()
        stop()
      } else {
        start(15)
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

  const handleDeviceChangeDuringTestRef = useRef(handleErrorDuringTest)

  return {
    handleDeviceChangeDuringTestRef,
    loading,
    tries
  }
}

export default useAudioEvents
