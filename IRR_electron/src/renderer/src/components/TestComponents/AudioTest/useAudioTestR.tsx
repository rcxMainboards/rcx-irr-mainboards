import { useEffect, useState } from 'react'
import useCountDown from '../hooks/useCountDown'
import useAudioEvents from './logic/useAudioEvents'
import { AddAudioEventLisener } from './logic/eventFunctions'

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

  const { secondsLeft, start, stop } = useCountDown(() => startSpeaker(15))

  const { handleDeviceChangeDuringTestRef, tries } = useAudioEvents({
    videoRef,
    onClose,
    start,
    onOpen,
    stop,
    nextTest,
    TestName
  })

  const AddErrorCatcher = () => {
    AddAudioEventLisener(handleDeviceChangeDuringTestRef) // Add event listener to check if the default audio device changes
  }

  useEffect(() => {
    AddErrorCatcher()
  }, [])

  return { secondsLeft, speakerLeft, tries }
}

export default useAudioTestR
