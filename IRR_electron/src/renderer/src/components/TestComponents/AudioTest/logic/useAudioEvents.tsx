import { useEffect, useRef, useState } from 'react'
import {
  handleDeviceChange,
  isHeadPhoneDefault,
  restartVideo
} from './helperFunctions'
import { useMediaDevices } from 'react-media-devices'

function useAudioEvents({
  videoRef,
  onClose,
  start,
  stop,
  stopSpeaker,
  startSpeaker,
  onOpen,
  onOpenConnect,
  nextTest,
  TestName,
  oncloseConnect,
  // micTestOpen,
}) {
  const [tries, setTries] = useState(5)

  const showModalAndLoseTry = () => {
    stop()
    stopSpeaker()
    setTries((oldtries) => oldtries - 1)
    onOpen()
  }

  useEffect(() => console.log(tries), [tries])

  const showModalConnectAndLoseTry = () => {
    stop()
    stopSpeaker()
    videoRef.current.pause()
    setTries((oldtries) => oldtries - 1)
    onOpenConnect()
  }

  const resetTest = () => {
    start(15)
    restartVideo(videoRef)
    onClose()
  }

  const handleErrorDuringTest = async () => {
    const newDevices = await handleDeviceChange()
    if (isHeadPhoneDefault(newDevices)) {
      showModalAndLoseTry()
    } else {
      resetTest()
    }
  }

  const handleConnectHeadPhones = async () => {
    const newDevices = await handleDeviceChange()
    if (isHeadPhoneDefault(newDevices)) {
      oncloseConnect()
      videoRef.current.play()
      startSpeaker(15)
    } else {
      showModalConnectAndLoseTry()
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
      if (isHeadPhoneDefault(devices)) {
        showModalAndLoseTry()
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
  const handleConnectHeadPhonesRef = useRef(handleConnectHeadPhones)

  return {
    handleDeviceChangeDuringTestRef,
    handleConnectHeadPhonesRef,
    loading,
    tries
  }
}

export default useAudioEvents
