import { useEffect, useRef, useState } from 'react'
import { useMediaDevices } from 'react-media-devices'
import useCountDown from '../hooks/useCountDown'

function useAudioTest(
  onOpen: any,
  onClose: any,
  videoRef: any,
  nextTest: any,
  TestName: any,
  onOpenAnother: any
) {
  const [tries, setTries] = useState(3)
  const [sinkId, setSinkId] = useState<any>('')

  async function changeAudioOutput(videoElement: any, deviceId: any) {
    try {
      await videoElement.setSinkId(deviceId)
    } catch (error) {
      console.error('Error changing audio output:', error)
    }
  }

  const OnHeadphonesEnd = async () => {
    const devices = await handleDeviceChange()
    const deviceLabels = devices?.map((device) => device.label.toLowerCase())
    const speakers = findDefaultAudioDeviceSpeaker(deviceLabels)
    if (speakers) {
      const speakerId = devices.find(
        (device) =>
          device.label.toLowerCase().includes('speaker') ||
          device.label.toLowerCase().includes('speakers')
      )?.deviceId
      setSinkId(speakerId) // esto es para que cuando se termine el siguiente timer, se termine la prueba si no hubo problemas
      if (sinkId) {
        stop()
        onOpenAnother()
        navigator.mediaDevices.removeEventListener(
          'devicechange',
          handleDeviceChangeAtStartRef.current
        )
        navigator.mediaDevices.removeEventListener(
          'devicechange',
          handleDeviceChangeDuringTestRef.current
        )
        return
      }
      await changeAudioOutput(videoRef.current, speakerId)
      start(15)
    } else {
      nextTest(TestName, {
        result: false,
        message: 'No se detectaron los speakers'
      })
    }
  }

  const { secondsLeft, start, stop } = useCountDown(OnHeadphonesEnd)
  const { devices, loading } = useMediaDevices({
    constraints: { audio: true },
    onError: (error) => {
      console.error(error)
    }
  })

  useEffect(() => {
    console.log(tries)

    if (tries === 0) {
      console.log(tries)
      onClose()
      nextTest(TestName, {
        result: false,
        message: 'Se acabaron los intentos para realizar la prueba'
      })
    }
  }, [tries])

  const ErrorAtStart = () => {
    setTries((oldtries) => oldtries - 1)
    onOpen()
    stop()
    navigator.mediaDevices.addEventListener(
      'devicechange',
      handleDeviceChangeAtStartRef.current
    )
  }

  const ErrorDuringTest = () => {
    navigator.mediaDevices.addEventListener(
      'devicechange',
      handleDeviceChangeDuringTestRef.current
    )
  }

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.load() // Cargar el video
      videoRef.current.play() // Reproducir el video
    }
  }

  const handleDeviceChange = async () => {
    const newDevices = await navigator.mediaDevices.enumerateDevices()
    return newDevices
  }

  // Función para buscar el dispositivo de audio por defecto
  const findDefaultAudioDevice = (deviceLabels: any) => {
    return deviceLabels.find(
      (label: string) =>
        (label.includes('headphone') && label.includes('default')) ||
        (label.includes('headphones') && label.includes('default'))
    )
  }

  // Función para buscar el dispositivo de audio por defecto
  const findDefaultAudioDeviceSpeaker = (deviceLabels: any) => {
    return deviceLabels.find(
      (label: string) => label.includes('speaker') || label.includes('speakers')
    )
  }

  const handleDeviceChangeAtStart = async () => {
    const newDevices = await handleDeviceChange()
    const deviceLabels = newDevices?.map((device) => device.label.toLowerCase())
    if (findDefaultAudioDevice(deviceLabels)) {
      restartVideo()
      onClose()
      start(15)
      navigator.mediaDevices.removeEventListener(
        'devicechange',
        handleDeviceChangeAtStartRef.current
      )
      navigator.mediaDevices.addEventListener(
        'devicechange',
        handleDeviceChangeDuringTestRef.current
      )
    }
  }

  const handleDeviceChangeDuringTest = async () => {
    setSinkId('')
    const newDevices = await handleDeviceChange()
    const deviceLabels = newDevices?.map((device) => device.label.toLowerCase())
    if (findDefaultAudioDevice(deviceLabels)) {
      restartVideo()
      onClose()
      start(15)
    } else {
      setTries((oldtries) => oldtries - 1)
      onOpen()
      stop()
    }
  }
  const handleDeviceChangeAtStartRef = useRef(handleDeviceChangeAtStart)
  const handleDeviceChangeDuringTestRef = useRef(handleDeviceChangeDuringTest)

  useEffect(() => {
    handleDeviceChangeAtStartRef.current = handleDeviceChangeAtStart
    handleDeviceChangeDuringTestRef.current = handleDeviceChangeDuringTest
  }, [])

  useEffect(() => {
    // Buscar el dispositivo de audio por defecto cuando los dispositivos estén cargados
    if (!loading) {
      const deviceLabels = devices?.map((device) => device.label.toLowerCase())
      if (deviceLabels) {
        start(15) // Iniciar la cuenta atrás cuando se monta el componente
        const defaultAudioDevice = findDefaultAudioDevice(deviceLabels)
        if (defaultAudioDevice) {
          ErrorDuringTest()
        } else {
          ErrorAtStart()
        }
      }
    }
  }, [loading, devices])

  return { secondsLeft, loading, devices }
}

export default useAudioTest
