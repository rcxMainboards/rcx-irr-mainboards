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

  const videoRef = useRef(null)

  const { secondsLeft, loading, speakerLeft } = useAudioTestR(
    onOpen,
    onClose,
    videoRef,
    nextTest,
    TestName,
    onOpenAnother
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
                  <p>Audifonos: {secondsLeft === 0 ? 'Probando Bocinas' : secondsLeft}</p>
                  <p>Bocinas: {secondsLeft > 0 ? 'Probando Audifonos' : speakerLeft}</p>
                </div>
              </CardBody>
            </Card>
          ) : null}
          <ModalNoHeadPhonesWarning
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            nextTest={nextTest}
            TestName={TestName}
          />
          <ModalAudioTestF
            isOpen={isOpenAnother}
            onOpenChange={onOpenChangeAnother}
            nextTest={nextTest}
            TestName={TestName}
          />
        </>
      )}
    </BaseLayout>
  )
}

export default AudioTest
