import { Modal, ModalContent, ModalBody, Button } from '@nextui-org/react'
import tests from '../../data/paramsTests'
import motionV1 from '../../utils/motionVariants'

function ModalWelcome({ onOpenChange }) {
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
                <div className="grid max-w-[50rem] grid-cols-2 gap-4 rounded-lg bg-white p-10 px-12 shadow-lg">
                  <main className="flex flex-col justify-center gap-3">
                    <h1 className="text-3xl font-bold">Pruebas Actuales</h1>
                    <p>
                      Bienvenido a IRR MB pruebas, cuando este listo puede
                      presionar el boton para comenzar con las pruebas.
                    </p>
                    <Button
                      color="primary"
                      className="font-semibold"
                      variant="bordered"
                      onPress={() => {
                        onClose()
                      }}
                    >
                      Iniciar con las pruebas
                    </Button>
                  </main>
                  <section className="pl-4">
                    <section className="flex flex-row-reverse flex-wrap gap-1">
                      {tests.map(({ TestIconName, TestName }, index) => (
                        <div
                          className="flex flex-col items-center bg-primary-200 p-2 text-[10px] shadow-md"
                          key={index}
                        >
                          <TestIconName size={32} />
                          <p>{TestName}</p>
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
