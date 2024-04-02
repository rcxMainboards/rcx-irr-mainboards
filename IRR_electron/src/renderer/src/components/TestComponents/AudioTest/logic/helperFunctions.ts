async function changeAudioOutput(videoElement: any, deviceId: any) {
  try {
    await videoElement.setSinkId(deviceId)
  } catch (error) {
    console.error('Error changing audio output:', error)
  }
}

const handleDeviceChange = async () => {
  const newDevices = await navigator.mediaDevices.enumerateDevices()
  console.log('deviceLabels', newDevices)

  return newDevices
}

const findSpeakers = (devices: any) => {
  return devices.find(
    (device: any) =>
      device.label.toLowerCase().includes('speaker') ||
      device.label.toLowerCase().includes('speakers')
  )
}

function isHeadPhoneDefault(devices) {
  return devices.find(
    (device) =>
      (device.label.toLowerCase().includes('headphones') &&
        device.label.toLowerCase().includes('default')) ||
      (device.label.toLowerCase().includes('headphone') &&
        device.label.toLowerCase().includes('default'))
  )
}

const restartVideo = (videoRef) => {
  if (videoRef.current) {
    videoRef.current.load() // Cargar el video
    videoRef.current.play() // Reproducir el video
  }
}

export { changeAudioOutput, handleDeviceChange, findSpeakers, isHeadPhoneDefault, restartVideo }
