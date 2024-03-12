import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button
} from '@nextui-org/react'
import motionV1 from '../../utils/motionVariants'
import { MdOutlineDangerous } from 'react-icons/md'
import { FaHeadphones } from 'react-icons/fa'

export default function ModalNoHeadPhonesWarning({
  isOpen,
  onOpenChange,
  nextTest,
  TestName
}) {
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
              <ModalHeader className="flex flex-col items-center gap-3 text-3xl font-semibold">
                No se detectaron audífonos
                <FaHeadphones size={44} />
              </ModalHeader>
              <ModalBody>
                <p>
                  No se detectaron audífonos conectados, por favor conecta unos
                  audífonos para continuar con el test. Una vez conectados la
                  prueba se va a reiniciar. si esto no sucede, de el test por
                  fallido.
                </p>
                <Button
                  color="danger"
                  startContent={<MdOutlineDangerous size={20} />}
                  onPress={() => {
                    onClose()
                    nextTest(TestName, {
                      result: false,
                      message:
                        'El usuario decidio que no paso el test, y decidio pasar a la siguiente test'
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
