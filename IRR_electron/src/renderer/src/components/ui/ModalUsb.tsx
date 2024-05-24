import { Modal, ModalContent, ModalHeader, ModalBody, Button } from '@nextui-org/react'
import motionV1 from '../../utils/motionVariants'
import { FaCheckCircle } from 'react-icons/fa'
import { CiUsb } from "react-icons/ci";
import { FaArrowRotateLeft } from "react-icons/fa6";

function ModalAudioTestF({ isOpen, onOpenChange, action }) {
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
                                Se requiere segunda prueba
                            </ModalHeader>
                            <div className='flex gap-2 items-center justify-center'>
                                <CiUsb size={40} />
                                <FaArrowRotateLeft size={25} />
                            </div>
                            <ModalBody>
                                <p>
                                    Para terminar la prueba, es necesario que desconecte todos los USB tipo C, los gire y los vuelva a conectar.
                                    despues de conectarlos espere unos segundos, y presione el boton de repetir prueba.
                                </p>
                                <Button
                                    className="bg-primary-500 text-white"
                                    startContent={<FaCheckCircle size={20} />}
                                    onPress={() => {
                                        action()
                                        onClose()
                                    }}
                                >
                                    Repetir Prueba
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
