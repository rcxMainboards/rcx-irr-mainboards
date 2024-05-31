import { Card, CardBody } from '@nextui-org/react'
import BaseLayout from '../../ui/baseLayout'
import { useDisclosure, Spinner } from '@nextui-org/react'
import useAudioTestR from './useAudioTestR'
import { ModalNoHeadPhonesWarning, ModalAudioTestF } from '../../ui/index'
import { useEffect, useRef, useState } from 'react'
import MicTest from './MicTest'
import clsx from 'clsx'
import { RemoveAudioEventLisener } from './logic/eventFunctions'
function AudioTest({ TestName, nextTest }) {
  const [micTestOpen, setMicTestOpen] = useState(false);
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure()
  const {
    onOpen: onOpenAnother,
    isOpen: isOpenAnother,
    onOpenChange: onOpenChangeAnother
  } = useDisclosure()
  const {
    onOpen: onOpenConnect,
    isOpen: isOpenConnect,
    onOpenChange: onOpenChangeConect,
    onClose: oncloseConnect
  } = useDisclosure()

  const videoRef = useRef(null)

  const startMicTest = () => {
    setMicTestOpen(true)
    //@ts-ignore
    videoRef.current.pause()
  }

  const { secondsLeft, loading, speakerLeft, handleConnectHeadPhonesRef } = useAudioTestR(
    onOpen,
    onClose,
    videoRef,
    nextTest,
    TestName,
    onOpenChangeConect,
    oncloseConnect,
    startMicTest,
    micTestOpen
  )

  const openFinalModal = () => {
    RemoveAudioEventLisener(handleConnectHeadPhonesRef)
    onOpenAnother()
  }

  useEffect(() => {
    if (videoRef.current) {
      //@ts-ignore
      videoRef.current.muted = true
    }
  }, [micTestOpen])


  return (
    <BaseLayout>
      {loading ? (
        <Card className="p-10">
          <CardBody>
            <div className='flex gap-4 items-center'>
              <p>Cargando Prueba de Audio</p>
              <Spinner color="primary" />
            </div>
          </CardBody>
        </Card>
      ) : (
        <>
          {!isOpen ? (
            <>
              <Card className=" w-2/4 p-3">
                <CardBody className={clsx("grid grid-cols-2 place-items-center", { 'hidden': micTestOpen === true })}>
                  <video ref={videoRef} src={`local:///${window.api.getVideoPath()}`} autoPlay />
                  <div className="flex flex-col gap-1">
                    <p>Probando Bocinas: {secondsLeft}</p>
                    {secondsLeft === 0 ? <p>Probando Audifonos: {speakerLeft}</p> : null}
                  </div>
                </CardBody>
                {micTestOpen && <MicTest onOpenAnother={openFinalModal} />}
              </Card>
            </>
          ) : null}
          <ModalNoHeadPhonesWarning
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            nextTest={nextTest}
            TestName={TestName}
            title={'No se deben conectar los Audifonos mientras se prueban las bocinas'}
            message={
              'No debe conectar los Audifonos mientras se prueban las bocinas, desconectelos para que se reinicie la prueba'
            }
          />
          <ModalAudioTestF
            isOpen={isOpenAnother}
            onOpenChange={onOpenChangeAnother}
            nextTest={nextTest}
            TestName={TestName}
          />
          <ModalNoHeadPhonesWarning
            isOpen={isOpenConnect}
            onOpenChange={onOpenConnect}
            nextTest={nextTest}
            TestName={TestName}
            title={'Conecte los Audifonos para continuar con la prueba'}
            message={
              'Para que avance la prueba debe de conectar los audifonos, esta ventana se quitara de forma automática, si la ventana no se quita despues de conectarlos, presione el boton para ir a la siguiente prueba'
            }
          />
        </>
      )}
    </BaseLayout>
  )
}

export default AudioTest
