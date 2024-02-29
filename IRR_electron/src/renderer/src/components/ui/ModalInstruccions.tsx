import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Divider,
  Accordion,
  AccordionItem
} from '@nextui-org/react'
import { CgFileDocument } from 'react-icons/cg'
import { LuServerCog } from 'react-icons/lu'
import { CgScreen } from 'react-icons/cg'
import { GrFormNextLink } from 'react-icons/gr'
import motionV1 from '../../utils/motionVariants'

function ModalInstruccions() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <article>
      <Button
        className="border bg-primary-500 font-semibold text-white"
        endContent={<CgFileDocument size={20} />}
        onPress={onOpen}
      >
        Manual de Usuario
      </Button>
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange} motionProps={motionV1}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold">
                <h1>Manual de Usuario</h1>
              </ModalHeader>
              <ModalBody>
                <section>
                  <p>
                    ¡Hola! Aquí tienes los lineamientos necesarios para ejecutar la aplicación y sus
                    pruebas integradas sin problemas.
                  </p>
                  <p>
                    La aplicación está diseñada para realizar pruebas de diagnóstico en Mainboards,
                    y se diseñó con la intención de ser lo más amigable posible para el usuario.
                  </p>
                </section>
                <Divider />
                <section>
                  <Accordion variant="bordered" isCompact>
                    <AccordionItem
                      startContent={<LuServerCog />}
                      title="Inicia con las credenciales correctas"
                    >
                      <p>
                        Para poder iniciar las pruebas, es necesario que ingreses el{' '}
                        <strong>CT correspondiente de la unidad</strong> , así como tu{' '}
                        <strong>Numero de Emepleado</strong>. Estos dos valores son requeridos, y no
                        podrás continuar sin ellos.
                      </p>
                    </AccordionItem>
                    <AccordionItem
                      startContent={<GrFormNextLink />}
                      title="Ir a la siguiente prueba"
                    >
                      <p>
                        Siempre que se termine una prueba, habrá una ventana en la que se dará una
                        descripción general de la prueba y sus parámetros. La prueba no comenzará
                        hasta que el usuario decida presionar el botón.
                      </p>
                    </AccordionItem>
                    <AccordionItem startContent={<CgScreen />} title="Prueba de pantalla táctil">
                      <p>
                        En esta prueba probamos la funcionalidad de la pantalla táctil. Para ello,
                        se le solicitará al usuario que toque la pantalla en diferentes puntos. Una
                        vez que todos los puntos hayan sido tocados, las prueba se dará por
                        terminada. Si después de un tiempo no se completa la prueba, se le
                        preguntará al usuario si desea repetir la prueba o darla por fallida. Si
                        esto último sucede, se pasará a la siguiente prueba.
                      </p>
                    </AccordionItem>
                  </Accordion>
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </article>
  )
}

export default ModalInstruccions
