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

const checkDefaultAudioDevice = (deviceLabels: any) => {
  return deviceLabels.find(
    (label: string) =>
      (label.includes('headphones') && label.includes('default')) ||
      (label.includes('headphone') && label.includes('default'))
  )
}

function findAudioDeviceSpeaker(devices) {
  return devices.find(
    (device) =>
      (device.label.toLowerCase().includes('speaker') && device.kind === 'audiooutput') ||
      (device.label.toLowerCase().includes('speakers') && device.kind === 'audiooutput')
  )
}

const formatDeviceLabels = (deviceLabels: any) => {
  return deviceLabels.map((device: any) => device.label.toLowerCase())
}

const restartVideo = (videoRef) => {
  if (videoRef.current) {
    videoRef.current.load() // Cargar el video
    videoRef.current.play() // Reproducir el video
  }
}

export {
  changeAudioOutput,
  handleDeviceChange,
  formatDeviceLabels,
  checkDefaultAudioDevice,
  findAudioDeviceSpeaker,
  restartVideo
}
