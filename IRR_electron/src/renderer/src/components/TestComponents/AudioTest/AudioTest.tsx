import { Card, CardBody } from '@nextui-org/react'
import BaseLayout from '../../ui/baseLayout'
import { useDisclosure } from '@nextui-org/react'
import useAudioTestR from './useAudioTestR'
import { ModalNoHeadPhonesWarning, ModalAudioTestF } from '../../ui/index'
import { useRef } from 'react'

function AudioTest({ TestName, nextTest }) {
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

  const { secondsLeft, loading, speakerLeft } = useAudioTestR(
    onOpen,
    onClose,
    videoRef,
    nextTest,
    TestName,
    onOpenAnother,
    onOpenChangeConect,
    oncloseConnect
  )

  return (
    <BaseLayout>
      {loading ? (
        <Card className="p-10">
          <CardBody>
            <p>Cargando Prueba de Audio...</p>
          </CardBody>
        </Card>
      ) : (
        <>
          {!isOpen ? (
            <Card className=" w-2/4 p-3">
              <CardBody className="grid grid-cols-2 place-items-center">
                <video ref={videoRef} src={`local:///${window.api.getVideoPath()}`} autoPlay />
                <div className="flex flex-col gap-1">
                  <p>Probando Bocinas: {secondsLeft}</p>
                  {secondsLeft === 0 ? <p>Probando Audifonos: {speakerLeft}</p> : null}
                </div>
              </CardBody>
            </Card>
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
