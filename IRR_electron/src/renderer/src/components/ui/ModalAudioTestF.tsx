import { Modal, ModalContent, ModalHeader, ModalBody, Button } from '@nextui-org/react'
import motionV1 from '../../utils/motionVariants'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineDangerous } from 'react-icons/md'

function ModalAudioTestF({ isOpen, onOpenChange, nextTest, TestName }) {
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
                  Se ha terminado todo el proceso de la prueba. Si el Audio de Bocinas, Audifonos y tambien la grabación se escucho correctamente presione el boton de Paso.
                </p>
                <Button
                  className="bg-primary-500 text-white"
                  startContent={<FaCheckCircle size={20} />}
                  onPress={() => {
                    onClose()
                    nextTest(TestName, {
                      result: true,
                      message: 'Prueba Audio exitosa'
                    })
                  }}
                >
                  Paso la prueba
                </Button>
                <Button
                  color="danger"
                  startContent={<MdOutlineDangerous size={20} />}
                  onPress={() => {
                    nextTest(TestName, {
                      result: false,
                      message:
                        'El usuario decidio que no paso la prueba, y decidio pasar a la siguiente prueba'
                    })
                  }}
                >
                  No paso la prueba
                </Button>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalAudioTestF
