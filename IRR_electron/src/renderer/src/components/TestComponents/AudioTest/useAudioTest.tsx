import { useEffect, useState } from 'react'
import { useMediaDevices } from 'react-media-devices'
import useCountDown from '../hooks/useCountDown'

function useAudioTest(
  onOpen: any,
  onClose: any,
  videoRef: any,
  nextTest: any,
  TestName: any
) {
  const [tries, setTries] = useState(3)

  async function changeAudioOutput(videoElement, deviceId) {
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
      console.log(speakerId)
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
      handleDeviceChangeAtStart
    )
  }

  const ErrorDuringTest = () => {
    navigator.mediaDevices.addEventListener(
      'devicechange',
      handleDeviceChangeDuringTest
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

  const handleDeviceChangeAtStart = () => {
    restartVideo()
    start(15)
    onClose()
    navigator.mediaDevices.removeEventListener(
      'devicechange',
      handleDeviceChangeAtStart
    )
    navigator.mediaDevices.addEventListener(
      'devicechange',
      handleDeviceChangeDuringTest
    )
  }

  const handleDeviceChangeDuringTest = async () => {
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
