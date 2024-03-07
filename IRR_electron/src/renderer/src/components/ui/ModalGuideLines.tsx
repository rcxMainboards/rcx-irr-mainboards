import { Modal, ModalContent, ModalBody } from '@nextui-org/react'
import { Card, CardBody } from '@nextui-org/react'
import { MdError } from 'react-icons/md'
import { FaCheckCircle } from 'react-icons/fa'
import { IoMdWarning } from 'react-icons/io'
import motionV1 from '../../utils/motionVariants'

function ModalGuideLines({
  TestName,
  TestDescription,
  TestIconName,
  TestSuccessCondition,
  TestFailCondition,
  TestNotes,
  TestTimer,
  onOpenChange
}) {
  return (
    <>
      <Modal
        className="bg-gradient-l"
        backdrop="blur"
        size="full"
        defaultOpen
        hideCloseButton
        onOpenChange={onOpenChange}
        motionProps={motionV1}
      >
        <ModalContent>
          {(onClose) => (
            <div className="flex flex-col items-center justify-center">
              <ModalBody className="flex min-h-screen flex-col items-center justify-center">
                <section className="grid max-w-[75rem] grid-cols-[1fr_2fr] gap-12 rounded-lg bg-white p-6 px-10 shadow-lg">
                  <Card
                    isPressable
                    onPress={() => {
                      onClose()
                    }}
                    className="rounded-md bg-primary-300 py-4 shadow-lg hover:bg-accent-400"
                  >
                    <CardBody className="flex flex-col items-center justify-center gap-2 ">
                      <TestIconName size={250} color={'white'} />
                      <h1 className="text-2xl font-bold text-white">{TestName}</h1>
                      <p className="w-5/6 text-center font-semibold text-white">Comenzar Prueba</p>
                    </CardBody>
                  </Card>
                  <section className="grid grid-cols-2 place-content-center gap-7 text-sm text-text-700">
                    <section className="grid gap-5">
                      <div>
                        <h2 className="text-lg font-semibold">Descripción</h2>
                        <p>{TestDescription}</p>
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold">Tomar en cuenta</h2>
                        <ul className="flex flex-col gap-2">
                          {TestNotes.map((note: string, index: number) => (
                            <li className=" list-disc" key={index}>
                              {note}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                    <section className="grid gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <FaCheckCircle size={21} color={'green'} />
                          <h2 className="text-lg font-semibold ">Condición de exito</h2>
                        </div>
                        <p>{TestSuccessCondition}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <MdError size={23} color={'red'} />
                          <h2 className="flex items-center justify-center gap-2 text-lg font-semibold">
                            Condición de fallo
                          </h2>
                        </div>
                        <p>{TestFailCondition}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                          <IoMdWarning size={20} />
                          <h2 className="text-lg font-semibold ">Tiempo:</h2>
                        </div>
                        <p>{TestTimer} segundos</p>
                      </div>
                    </section>
                  </section>
                </section>
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalGuideLines
