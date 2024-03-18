import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react'
import motionV1 from '../../utils/motionVariants'
import { IoIosWarning } from 'react-icons/io'
import { GiUsbKey } from 'react-icons/gi'
import { FaSdCard, FaHeadphones } from 'react-icons/fa'
import { CgEthernet } from 'react-icons/cg'

function WarningStartingApp({ onOpenChange }) {
  return (
    <>
      <Modal
        className="bg-gradient-l"
        defaultOpen
        size="full"
        hideCloseButton
        onOpenChange={onOpenChange}
        motionProps={motionV1}
      >
        <ModalContent className="text-text-700">
          {(onClose) => (
            <div className="flex flex-col items-center justify-center">
              <ModalBody className="flex min-h-screen flex-col items-center justify-center">
                <div className="grid max-w-[50rem] grid-cols-[1.5fr_1fr] place-items-center gap-7 rounded-lg bg-white p-10 px-12 shadow-lg">
                  <main className="flex flex-col justify-center gap-3">
                    <div className="flex items-center gap-2">
                      <h1 className="text-3xl font-bold text-warning-500">
                        Atención
                      </h1>
                      <IoIosWarning size={37} />
                    </div>
                    <p>
                      Antes de iniciar esta aplicación, asegúrese de que esta{' '}
                      <strong>conectado por Ethernet al Servidor</strong>, {''}
                      de otra forma la aplicación no funcionará.
                    </p>
                    <p>
                      Se recomienda que desde este momento conecte los
                      siguientes dispositivos:
                    </p>
                    <ul className=" list-disc">
                      <li>La cantidad de USB en la base a los puertos.</li>
                      <li>
                        Insertar una tarjeta SD si la Mainboard tiene lector.
                      </li>
                      <li>
                        <strong>
                          Solo se debe conectar el cable de Ethernet por USB si
                          este no tiene un puerto físico.
                        </strong>
                      </li>
                    </ul>
                    <Button
                      color="warning"
                      className="mt-2 font-semibold"
                      variant="bordered"
                      onPress={() => {
                        onClose()
                      }}
                    >
                      Iniciar con la Aplicación
                    </Button>
                  </main>
                  <section className="flex-cold flex gap-3">
                    <CgEthernet size={70} />
                    <GiUsbKey size={70} />
                    <FaSdCard size={70} />
                    <FaHeadphones size={70} />
                  </section>
                </div>
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default WarningStartingApp
