import { useEffect, useState } from 'react'
import { useMediaDevices } from 'react-media-devices'
import useCountDown from '../hooks/useCountDown'
import useAudioEvents from './logic/useAudioEvents'
import {
  formatDeviceLabels,
  checkDefaultAudioDevice
} from './logic/helperFunctions'
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

  const {
    handleDeviceChangeAtStartRef,
    handleDeviceChangeDuringTestRef,
    showModalAndLoseTry,
    tries
  } = useAudioEvents({
    videoRef,
    onClose,
    start,
    onOpen,
    stop,
    nextTest,
    TestName
  })

  const { devices, loading } = useMediaDevices({
    constraints: { audio: true },
    onError: (error) => {
      console.error(error)
    }
  })

  const errorAtStart = () => {
    showModalAndLoseTry()
    AddAudioEventLisener(handleDeviceChangeAtStartRef) // Add event listener to check if the default audio device changes
  }

  const AddErrorCatcher = () => {
    AddAudioEventLisener(handleDeviceChangeDuringTestRef) // Add event listener to check if the default audio device changes
  }

  useEffect(() => {
    if (!loading) {
      const deviceLabels = formatDeviceLabels(devices)
      const defaultAudioDevice = checkDefaultAudioDevice(deviceLabels)
      if (!defaultAudioDevice) {
        errorAtStart()
      } else {
        AddErrorCatcher()
      }
    }
  }, [loading])

  return { secondsLeft, speakerLeft, loading, devices, tries }
}

export default useAudioTestR
