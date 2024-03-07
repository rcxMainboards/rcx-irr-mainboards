import { Modal, ModalContent, ModalHeader, ModalBody, Button } from '@nextui-org/react'
import motionV1 from '../../utils/motionVariants'

export default function ModalTimeOut({ isOpen, onOpenChange, reset }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={motionV1}
        hideCloseButton
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
                  se acabó el tiempo para realizar el test, por favor eliga una opción sobre como
                  proceder.
                </p>
                <Button
                  className="bg-primary-500 text-white"
                  onPress={() => {
                    onClose()
                    reset()
                  }}
                >
                  Repetir el test
                </Button>
                <Button color="danger" onPress={onClose}>
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
