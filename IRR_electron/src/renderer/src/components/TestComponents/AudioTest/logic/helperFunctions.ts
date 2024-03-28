async function changeAudioOutput(videoElement: any, deviceId: any) {
  try {
    await videoElement.setSinkId(deviceId)
  } catch (error) {
    console.error('Error changing audio output:', error)
  }
}

const handleDeviceChange = async () => {
  const newDevices = await navigator.mediaDevices.enumerateDevices()
  return newDevices
}

const checkDefaultAudioDevice = (deviceLabels: any) => {
  return deviceLabels.find(
    (label: string) =>
      (label.includes('headphones') && label.includes('default')) ||
      (label.includes('headphone') && label.includes('default'))
  )
}

const findAudioDeviceSpeaker = (deviceLabels: any) => {
  return deviceLabels.find(
    (label: string) => label.includes('speaker') || label.includes('speakers')
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
