import { Card, CardBody } from '@nextui-org/react'
import BaseLayout from '../../ui/baseLayout'
import { useDisclosure } from '@nextui-org/react'
import useAudioTest from './useAudioTest'
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
  const { secondsLeft, loading } = useAudioTest(
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
        <p>Cargango..</p>
      ) : (
        <>
          {!isOpen ? (
            <Card className=" w-2/4 p-3">
              <CardBody className="grid grid-cols-2 place-items-center">
                <video
                  ref={videoRef}
                  src={`local:///${window.api.getVideoPath()}`}
                  autoPlay
                />
                <p>Tiempo restante: {secondsLeft}</p>
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
