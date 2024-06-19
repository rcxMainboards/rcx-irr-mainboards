import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react'
import motionV1 from '../../utils/motionVariants'
import { IoIosWarning } from 'react-icons/io'
import { GiUsbKey } from 'react-icons/gi'
import { FaSdCard } from 'react-icons/fa'
import { CgEthernet } from 'react-icons/cg'
import { useState, useEffect } from 'react'

function WarningStartingApp({ onOpenChange }) {
  const [appVersion, setAppVersion] = useState('')

  useEffect(() => {
    window.api.getAppVersion().then((version) => {
      setAppVersion(version)
    })
  }, [])

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
                <div className="grid max-w-[60rem] grid-cols-[1.5fr_1fr] place-items-center gap-7 rounded-lg bg-white p-10 px-12 shadow-lg">
                  <main className="flex flex-col justify-center gap-3">
                    <h1 className="text-2xl font-semibold text-warning-600">
                      Versión de la Aplicación: {appVersion} | PCaas
                    </h1>
                    <div className="flex items-center gap-2">
                      <h2 className="text-3xl font-bold text-warning-500">Atención</h2>
                      <IoIosWarning size={37} />
                    </div>
                    <p className="font-bold">
                      Antes de iniciar esta aplicación, asegúrese de que esta conectado por Ethernet
                      al Servidor, {''}
                      de otra forma.
                    </p>
                    <p><strong className='text-danger'><span className='text-blue-600'>Es importante haber ejecutado antes la prueba de bateria de UEFI</span> y que termine la pruebas sin importar si alguna de estas falla.</strong></p>  
                    <p>Se recomienda que desde este momento conecte los siguientes dispositivos:</p>
                    <ul className=" list-disc">
                      <li>La cantidad de USB en la base a los puertos.</li>
                      <li>Insertar una tarjeta SD si la Mainboard tiene lector.</li>
                      <li>
                        Es posible conectar los los dispositivos anteriormente mencionados antes de
                        que inice la prueba en especifico, pero se recomienda hacerlo antes de
                        iniciar la aplicación dado que{' '}
                        <strong>
                          la conexión de estos dispositivos es un proceso asíncrono y no instantaneo
                        </strong>
                        , por lo que si inicia la prueba y el sistema operativos no los ha detectado
                        aun <strong>estas pruebas fallaran</strong>.
                      </li>
                      <li>
                        <strong>
                          Solo se debe conectar el cable de Ethernet por Adaptador USB si este no
                          tiene un puerto nativo disponible.
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
