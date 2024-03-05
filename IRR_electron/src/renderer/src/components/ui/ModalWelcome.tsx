import { Modal, ModalContent, ModalBody, Button, useDisclosure } from '@nextui-org/react'
import tests from '../../data/paramsTests'

function ModalWelcome() {
  const { onOpenChange } = useDisclosure()

  return (
    <>
      <Modal
        className="bg-gradient-l"
        defaultOpen
        backdrop="blur"
        size="full"
        hideCloseButton
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <div className="flex flex-col items-center justify-center">
              <ModalBody className="flex min-h-screen flex-col items-center justify-center">
                <div className="grid max-w-[50rem] grid-cols-2 gap-4 rounded-lg bg-white p-10 px-16 shadow-lg">
                  <main className="grid gap-5">
                    <h1 className="text-3xl font-bold">Pruebas Actuales</h1>
                    <p>
                      Bienvenido a IRR MB pruebas, cuando este listo puede presionar el boton para
                      comenzar con las pruebas.
                    </p>
                    <Button
                      color="primary"
                      className="font-semibold"
                      variant="bordered"
                      onPress={onClose}
                    >
                      Iniciar con las pruebas
                    </Button>
                  </main>
                  <section>
                    <section className="flex flex-wrap items-center justify-center gap-1">
                      {tests.map(({ TestIconName }) => (
                        <div className=" bg-primary-200 p-5 shadow-lg">
                          <TestIconName size={32} />
                        </div>
                      ))}
                    </section>
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

export default ModalWelcome
