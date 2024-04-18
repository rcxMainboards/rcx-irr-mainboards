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
import { MdGrid4X4 } from 'react-icons/md'
import { CgTouchpad } from 'react-icons/cg'
import { LuHdmiPort } from "react-icons/lu";
import {
  FaCamera,
  FaKeyboard,
  FaFingerprint,
  FaWifi,
  FaMemory,
  FaSdCard,
  FaBluetooth
} from 'react-icons/fa'
import { GiBurningEmbers, GiUsbKey } from 'react-icons/gi'
import { RiHardDrive3Fill } from 'react-icons/ri'
import motionV1 from '../../utils/motionVariants'
import { BsSoundwave } from 'react-icons/bs'

function ModalInstruccions() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <article>
      <Button
        className="w-full border bg-primary-500 font-semibold text-white"
        endContent={<CgFileDocument size={20} />}
        onPress={onOpen}
      >
        Manual de Usuario
      </Button>
      <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange} motionProps={motionV1}>
        <ModalContent className="text-text-700">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col text-4xl font-bold">
                <h1>Manual de Usuario</h1>
              </ModalHeader>
              <ModalBody>
                <section className="text-justify text-lg">
                  <p>
                    ¡Hola! Aquí tienes los lineamientos necesarios para ejecutar la aplicación y sus
                    pruebas integradas sin problemas. La aplicación está diseñada para la
                    automatización de pruebas de diagnóstico en Mainboards, y se diseñó con la
                    intención de ser lo más amigable posible para el usuario.
                  </p>
                </section>
                <Divider />
                <div className="grid grid-cols-2 gap-2">
                  <section>
                    <Accordion variant="bordered" isCompact>
                      <AccordionItem
                        startContent={<LuServerCog />}
                        title="Inicia con las credenciales correctas"
                      >
                        <p>
                          Para poder iniciar las pruebas, es necesario que ingreses el{' '}
                          <strong>CT correspondiente de la unidad</strong> , así como tu{' '}
                          <strong>Numero de Emepleado</strong>. Estos dos valores son requeridos, y
                          no podrás continuar sin ellos.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        startContent={<GrFormNextLink />}
                        title="Ir a la siguiente prueba"
                      >
                        <p>
                          Siempre que se inice una prueba, habrá una ventana en la que se dará una
                          descripción general de la prueba y sus parámetros. La prueba no comenzará
                          hasta que el usuario decida presionar el botón de{' '}
                          <strong>"Comenzar prueba"</strong> despues de que esta termine su proceso,
                          se avanzara a la siguiente dependiendo de la{' '}
                          <strong>condicion de exito y falla.</strong>
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<CgScreen />} title="Prueba de pantalla táctil">
                        <p>
                          En esta prueba probamos la funcionalidad de la pantalla táctil. Para ello,
                          se le solicitará al usuario que{' '}
                          <strong>
                            toque la pantalla en diferentes puntos. cuando se toca un punto o bloque
                            este cambiara de color, una vez todos los puntos tengan el mismo color
                            las prueba se dará por terminada
                          </strong>
                          . Si después de un tiempo no se completa la prueba, se le preguntará al
                          usuario si desea repetir la prueba o darla por fallida. Si esto último
                          sucede, se pasará a la siguiente prueba.
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<LuHdmiPort />} title="Prueba de HDMI">
                        <p>
                          En esta prueba probamos la funcionalidad del puerto HDMI, 
                          si el Mainboard cuenta con uno, se le pedira al usuaurio que se le conecte un cable a este puerto
                          , y se le preguntara si funciona o no.
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<MdGrid4X4 />} title="Prueba de Pixeles">
                        <p>
                          En esta prueba veificamos el estado de la <strong>pantalla LCD</strong>,
                          pasando por varios colores y verificando que no haya pixeles muestros, se
                          pasa por los colores atraves de clicks a la pantalla; una vez que se pase
                          por todos los colores se preguntara al usuario si paso la prueba o no.
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<CgTouchpad />} title="Prueba de Pad táctil">
                        <p>
                          En esta prueba veificamos el estado del Pad táctil haciendole diferentes{' '}
                          <strong>pruebas manuales</strong> estas tienen que realizarse antes de un
                          tiempo determinado.
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<FaCamera />} title="Prueba de Camara">
                        <p>
                          En esta prueba veificamos el estado de la Camara, esta se activara de
                          forma automática, y el usuario determinara{' '}
                          <strong>si paso o no paso la prueba</strong> la prueba puede acabar
                          instantaneamente si el servicio del la camara no funciona o esta
                          desactivado en absoluto.
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<BsSoundwave />} title="Prueba de Audio">
                        <p>
                          En esta prueba verificamos el estado de la entrada de Audio y Bocinas,
                          antes de iniciar la prueba{' '}
                          <strong>
                            Primero se inicia la prueba con las Bocinas, y posteriormente se le
                            pedira al usuario que conecte los Audifonos.
                          </strong>{' '}
                          {''}
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<FaBluetooth />} title="Prueba de Bluetooth">
                        <p>
                          En esta prueba verificamos el estado del servicio de Bluetooth, esta
                          prueba ejecuta un proceso automático en el cual intentara conectar con un
                          servidor Bluetooth. Una vez que el proceso termine, se pasara a la
                          siguiente prueba.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </section>
                  <section>
                    <Accordion variant="bordered" isCompact>
                      <AccordionItem startContent={<GiBurningEmbers />} title="Prueba de Estres">
                        <p>
                          Una vez comience esta prueba se ejecutara el proceso de{' '}
                          <strong>BurninTest</strong> el cual aplicara una carga de estres{' '}
                          <strong>al CPU, GPU, Y RAM</strong> una vez se ejecute por el tiempo
                          determinado <strong>(45 minutos)</strong> el programa se cerrara de forma
                          automática y se pasara a la siguiente prueba.
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<FaKeyboard />} title="Prueba de teclado">
                        <p>
                          Una vez comience esta prueba el usuario debe presionar cada tecla del
                          teclado y cada vez que se presione una tecla esta cambiara de color en la
                          pantalla, cuando las todas las teclas <strong>(menos la tecla FN)</strong>{' '}
                          cambien de color la prueba terminara. si la prueba no se termina antes de
                          tiempo se le preguntara al usuario si desea repetir la prueba.
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<GiUsbKey />} title="Prueba de USB">
                        <p>
                          Antes de comenzar esta prueba es necesario que{' '}
                          <strong>todos los USB necesarios esten conectados</strong>, una vez que se
                          inicie la prueba se ejecutara un proceso automático en el cual se
                          verificara el estado de los puertos USB, si al iniciar la prueba no se
                          detectan la cantidad de USB necesarios la prueba se dara por fallida de
                          forma instantanea.
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<FaFingerprint />} title="Prueba de FingerPrint">
                        <p>
                          Cuando esta prueba inicie, se ejecutara un proceso automático donde
                          verificara el estado del servicio de "FingerPrint", esta prueba{' '}
                          <strong>
                            solo se aplicara si el perfil del Mainboard marca que debe de tener
                            servicio disponible.
                          </strong>
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<FaWifi />} title="Prueba de Wifi">
                        <p>
                          Cuando esta prueba inicie, se ejecutara un proceso automático donde
                          verificara el estado del servicio del wifi, e intentara conectase a una
                          red específica.
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<FaMemory />} title="Prueba de Ram">
                        <p>
                          Cuando esta prueba inicie, se ejecutara un proceso automático donde
                          revisara la cantidad de RAM instalada en el sistema y si esta es acorde
                          con la cantidad en el perfil del Mainboard,{' '}
                          <strong>
                            si en el perfil de este marca que tiene partes integradas no se hara
                            esta prueba no se realizara y se pasara a la siguiente.
                          </strong>
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<RiHardDrive3Fill />} title="Prueba de Discos">
                        <p>
                          Cuando esta prueba inicie, se ejecutara un proceso automático donde
                          verificara la cantidad de discos que debe de haber montados en el sistema;
                          en el dado caso que el perfil del Mainboard marque que tiene{' '}
                          <strong>partes integradas</strong> la prueba le pedira al usuario el{' '}
                          <strong>numero de parte del Mainboard</strong>
                        </p>
                      </AccordionItem>
                      <AccordionItem startContent={<FaSdCard />} title="Prueba de SD">
                        <p>
                          Antes de iniciar esta prueba debe haber conectado la tarjeta SD; cuando
                          esta prueba inicie, se ejecutara un proceso automático donde hara lectura
                          y escritura sobre la tarjeta SD, cuando este proceso termine se pasara a
                          la siguiente prueba{' '}
                          <strong>Si ningun SD es detectado la prueba fallara</strong> y se pasara a
                          la siguiente.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </section>
                </div>
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
