import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button
} from '@nextui-org/react'
import motionV1 from '../../utils/motionVariants'
import { IoReload } from 'react-icons/io5'
import { MdOutlineDangerous } from 'react-icons/md'

export default function ModalTimeOut({
  isOpen,
  onOpenChange,
  reset,
  nextTest,
  TestName,
  disableAnimation = false // Agrega disableAnimation como una prop opcional con un valor predeterminado de false
}) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={motionV1}
        disableAnimation={disableAnimation}
        hideCloseButton
        isDismissable={false}
        className="text-text-700"
      >
        <ModalContent className="p-4 text-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-2 text-3xl font-semibold">
                Se acabó el tiempo
              </ModalHeader>
              <ModalBody>
                <p>
                  se acabó el tiempo para realizar el test, por favor eliga una
                  opción sobre como proceder.
                </p>
                <Button
                  startContent={<IoReload size={20} />}
                  className="bg-accent-800 text-white"
                  onPress={() => {
                    onClose()
                    reset()
                  }}
                >
                  Repetir el test
                </Button>
                <Button
                  color="danger"
                  startContent={<MdOutlineDangerous size={20} />}
                  onPress={() => {
                    onClose()
                    nextTest(TestName, {
                      result: false,
                      message:
                        'El usuario decidio que no paso el test, y decidio pasar al siguiente test'
                    })
                  }}
                >
                  Ir al siguiente test (fallido)
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
