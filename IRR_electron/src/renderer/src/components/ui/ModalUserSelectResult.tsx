import { Modal, ModalContent, ModalHeader, ModalBody, Button } from '@nextui-org/react'
import motionV1 from '../../utils/motionVariants'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineDangerous } from 'react-icons/md'
import { IoReload } from 'react-icons/io5'

function ModalUserSelectResult({ isOpen, onOpenChange, reset, nextTest, TestName }) {
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
              <ModalHeader className="flex flex-col gap-2 text-3xl font-semibold">
                La prueba terminó
              </ModalHeader>
              <ModalBody>
                <p>
                  Se ha terminado todo el proceso de la prueba, por favor seleccione una de las
                  opciones disponibles.
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
                  className="bg-primary-500 text-white"
                  startContent={<FaCheckCircle size={20} />}
                  onPress={() => {
                    onClose()
                    nextTest(TestName, {
                      result: true,
                      message: 'El usuario decidio que pasó la prueba'
                    })
                  }}
                >
                  Paso la Prueba
                </Button>
                <Button
                  color="danger"
                  startContent={<MdOutlineDangerous size={20} />}
                  onPress={() => {
                    nextTest(TestName, {
                      result: false,
                      message:
                        'El usuario decidio que no pasó la prueba, y decidio pasar a la siguiente prueba'
                    })
                  }}
                >
                  No paso la Prueba
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalUserSelectResult
