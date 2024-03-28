const AddAudioEventLisener = (handleDevice) => {
  navigator.mediaDevices.addEventListener('devicechange', handleDevice.current)
}

const RemoveAudioEventLisener = (handleDevice) => {
  navigator.mediaDevices.removeEventListener(
    'devicechange',
    handleDevice.current
  )
}

export { AddAudioEventLisener, RemoveAudioEventLisener }
