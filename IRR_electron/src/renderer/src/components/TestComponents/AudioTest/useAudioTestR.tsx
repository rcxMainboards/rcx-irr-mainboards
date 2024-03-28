// import { useEffect, useRef, useState } from 'react'
// import { useMediaDevices } from 'react-media-devices'
// import useCountDown from '../hooks/useCountDown'
// import {
//   changeAudioOutput,
//   handleDeviceChange,
//   formatDeviceLabels,
//   checkDefaultAudioDevice,
//   findAudioDeviceSpeaker
// } from './logic/helperFunctions'

// function useAudioTestR(
//   onOpen: any,
//   onClose: any,
//   videoRef: any,
//   nextTest: any,
//   TestName: any,
//   onOpenAnother: any
// ) {
//   const [tries, setTries] = useState(3)
//   const [sinkId, setSinkId] = useState<any>('')
//   const { secondsLeft, start, stop } = useCountDown(() => console.log('hola'))
//   const { devices, loading } = useMediaDevices({
//     constraints: { audio: true },
//     onError: (error) => {
//       console.error(error)
//     }
//   })

//   const handleDeviceChangeAtStart = async () => {
//     const newDevices = await handleDeviceChange()
//     const deviceLabels = formatDeviceLabels(newDevices)
//     if (checkDefaultAudioDevice(deviceLabels)) {
//       restartVideo()
//       onClose()
//       start(15)
//       navigator.mediaDevices.removeEventListener(
//         'devicechange',
//         handleDeviceChangeAtStartRef.current
//       )
//       navigator.mediaDevices.addEventListener(
//         'devicechange',
//         handleDeviceChangeDuringTestRef.current
//       )
//     }
//   }

//   const handleDeviceChangeDuringTest = async () => {
//     setSinkId('')
//     const newDevices = await handleDeviceChange()
//     const deviceLabels = formatDeviceLabels(newDevices)
//     if (checkDefaultAudioDevice(deviceLabels)) {
//       restartVideo()
//       onClose()
//       start(15)
//     } else {
//       setTries((oldtries) => oldtries - 1)
//       onOpen()
//       stop()
//     }
//   }

//   const restartVideo = () => {
//     if (videoRef.current) {
//       videoRef.current.load() // Cargar el video
//       videoRef.current.play() // Reproducir el video
//     }
//   }

//   const handleDeviceChangeAtStartRef = useRef(handleDeviceChangeAtStart)
//   const handleDeviceChangeDuringTestRef = useRef(handleDeviceChangeDuringTest)

//   useEffect(() => {
//     handleDeviceChangeAtStartRef.current = handleDeviceChangeAtStart
//     handleDeviceChangeDuringTestRef.current = handleDeviceChangeDuringTest
//   }, [])

//   useEffect(() => {
//     if (!loading) {
//       const deviceLabels = formatDeviceLabels(devices)
//       const defaultAudioDevice = checkDefaultAudioDevice(deviceLabels)
//       if (defaultAudioDevice) {
//         //   ErrorDuringTest()
//       } else {
//         //   ErrorAtStart()
//       }
//     }
//   }, [loading, devices])

//   return { secondsLeft, loading, devices }
// }

// export default useAudioTestR
