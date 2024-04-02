import { useEffect } from 'react'
import useCountDown from '../hooks/useCountDown'
import useAudioEvents from './logic/useAudioEvents'
import { AddAudioEventLisener } from './logic/eventFunctions'
import {
  handleDeviceChange,
  findAudioDeviceSpeaker,
  changeAudioOutput
} from './logic/helperFunctions'

function useAudioTestR(
  onOpen: any,
  onClose: any,
  videoRef: any,
  nextTest: any,
  TestName: any,
  onOpenAnother: any
) {
  const {
    secondsLeft: speakerLeft,
    start: startSpeaker,
    stop: stopSpeaker
  } = useCountDown(() => onOpenAnother())

  const getSpeaker = async () => {
    const newDevices = await handleDeviceChange()
    const speakers = findAudioDeviceSpeaker(newDevices)
    return speakers.deviceId
  }

  const { secondsLeft, start, stop } = useCountDown(() => onHeadPhonesTestEnd())

  const onHeadPhonesTestEnd = async () => {
    videoRef.current.pause()
  }

  const { handleDeviceChangeDuringTestRef, tries, loading } = useAudioEvents({
    videoRef,
    onClose,
    start,
    onOpen,
    stop,
    stopSpeaker,
    nextTest,
    TestName
  })

  const AddErrorCatcher = () => {
    AddAudioEventLisener(handleDeviceChangeDuringTestRef) // Add event listener to check if the default audio device changes
  }

  useEffect(() => {
    AddErrorCatcher()
  }, [])

  return { secondsLeft, speakerLeft, tries, loading, getSpeaker, startSpeaker }
}

export default useAudioTestR
