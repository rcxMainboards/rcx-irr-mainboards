import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Image
} from '@nextui-org/react'
import motionV1 from '../../utils/motionVariants'
import { IoReload } from 'react-icons/io5'
import { errorData } from '../../utils/functions'
import SDicon from '../../assets/unlock-memory-card.png'

function ModalSDProtected({ isOpen, onOpenChange, reset, error }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={motionV1}
        hideCloseButton
        isDismissable={false}
        className="text-text-700"
      >
        <ModalContent className="p-4 text-center">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col  gap-2 text-3xl font-semibold">
                El SD que se inserto tiene la proteccion de escritura activada
              </ModalHeader>
              <ModalBody className="flex flex-col items-center">
                <Image src={SDicon} width={140} height={140} />
                <p>{errorData(error)}</p>
                <p>
                  Mientras esta ventana este abierta puede remover el SD,
                  cambiar el switch y posteriormente repetir el proceso de la
                  prueba mediante el boton.
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
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalSDProtected
