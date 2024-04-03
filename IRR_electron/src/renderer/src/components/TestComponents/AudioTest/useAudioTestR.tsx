import { useEffect } from 'react'
import useCountDown from '../hooks/useCountDown'
import useAudioEvents from './logic/useAudioEvents'
import { AddAudioEventLisener, RemoveAudioEventLisener } from './logic/eventFunctions'

function useAudioTestR(
  onOpen: any,
  onClose: any,
  videoRef: any,
  nextTest: any,
  TestName: any,
  onOpenAnother: any,
  onOpenConnect: any,
  oncloseConnect: any
) {
  const {
    secondsLeft: speakerLeft,
    start: startSpeaker,
    stop: stopSpeaker
  } = useCountDown(() => {
    onOpenAnother()
    RemoveAudioEventLisener(handleConnectHeadPhonesRef)
  })

  const { secondsLeft, start, stop } = useCountDown(() => onHeadPhonesTestEnd())

  const onHeadPhonesTestEnd = () => {
    videoRef.current.pause()
    onOpenConnect()
    RemoveAudioEventLisener(handleDeviceChangeDuringTestRef)
    AddAudioEventLisener(handleConnectHeadPhonesRef)
  }

  const { handleDeviceChangeDuringTestRef, tries, loading, handleConnectHeadPhonesRef } =
    useAudioEvents({
      videoRef,
      onClose,
      start,
      onOpen,
      stop,
      stopSpeaker,
      startSpeaker,
      nextTest,
      TestName,
      oncloseConnect,
      onOpenConnect
    })

  const AddErrorCatcher = () => {
    AddAudioEventLisener(handleDeviceChangeDuringTestRef) // Add event listener to check if the default audio device changes
  }

  useEffect(() => {
    AddErrorCatcher()
  }, [])

  return { secondsLeft, speakerLeft, tries, loading }
}

export default useAudioTestR
