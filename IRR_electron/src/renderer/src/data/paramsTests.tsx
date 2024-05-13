import { MdScreenshotMonitor, MdGrid4X4 } from 'react-icons/md'
import { CgTouchpad } from 'react-icons/cg'
import {
  FaCamera,
  FaKeyboard,
  FaFingerprint,
  FaWifi,
  FaMemory,
  FaSdCard,
  FaBluetooth
} from 'react-icons/fa'
import { LuHdmiPort } from 'react-icons/lu'
import { BsSoundwave } from 'react-icons/bs'
import { GiBurningEmbers, GiUsbKey } from 'react-icons/gi'
import { RiHardDrive3Fill } from 'react-icons/ri'
import {
  TouchScreenTest,
  PixelesTest,
  TouchPadTest,
  WebCamTest,
  AudioTest,
  KeyBoardTest,
  BurningTest,
  USBTest,
  WifiTest,
  FingerPrintTest,
  RamTest,
  SDTest,
  DiscsTest,
  BlueToothTest,
  HdmiTest
} from '../components/TestComponents/index'
import Test from '../components/TestComponents/interfaces'

const tests: Test[] = [
  {
    TestComponent: HdmiTest,
    TestName: 'Prueba de HDMI',
    TestDescription:
      'La prueba consiste en conectar un cable HDMI al puerto y verificar que este puerto sea funcional asegurándose de que dé video. Mainboard no tiene puerto HDMI esta prueba se saltara de forma automática ',
    TestSuccessCondition: 'El usuario decidirá si la prueba se pasó con éxito.',
    TestFailCondition: 'El usuario decidirá si la prueba falló.',
    TestIconName: LuHdmiPort,
    TestNotes: [
      'Asegúrese de conectar un cable HDMI al puerto disponible y verificar que al conectar dé video.',
      'Si este Mainboard no tiene puerto HDMI, la prueba no se realizara'
    ],
    TestTimer: 0
  },
  {
    TestComponent: WebCamTest,
    TestName: 'Prueba de Cámara',
    TestDescription:
      'La prueba consiste en verificar si la cámara esta funcionando correctamente, para ello se intentara activar la camara predeterminada del dispositivo, tambien debera verificar la captura de audio.',
    TestSuccessCondition:
      'Si la camara muestra video en pantalla, y se escucha que la camara capta sonido, entonces el usuario debera escoger pasar la prueba.',
    TestFailCondition:
      'La prueba solo se considerara fallida si el servicio de la cámara no se encuentra activo (algunos teclados tienen una tecla para desactivar la camara, si esta tecla esta encendida la prueba fallara) y si la camara no esta captando el audio, o si el usuario decide que no pasó la prueba.',
    TestIconName: FaCamera,
    TestNotes: [
      'Puede ocurrir que el servicio de la cámara este funcionando, pero el video que de la camara no sea completamente funcional.',
      'Esta prueba puede fallar inmediatamente si es que el servicio de la camara no esta funcionando'
    ],
    TestTimer: 0
  },
  {
    TestComponent: USBTest,
    TestName: 'Prueba de USB',
    TestDescription:
      'La prueba consiste conectar dispotivios USB en todos los puertos disponibles del Mainboard, incluyendo los puertos tipos A y C, usted tendra adaptadores disponibles para ello, una vez conectados, iniciara un proceso automatico de lectura y escritura de archivos en los dispositivos conectados.',
    TestSuccessCondition:
      'Para que la prueba pase, es completamente necesario que se conecten todos los USB posibles. No hay problema si se está utilizando un puerto USB para conectar el Ethernet, ya que este se descarta. No obstante, si se está usando un puerto como punto de carga de batería, desconéctelo y conecte un USB en ese puerto antes de iniciar la prueba.',
    TestFailCondition: 'Esta prueba puede fallar si durante el proceso ocurre algún error.',
    TestIconName: GiUsbKey,
    TestNotes: [
      'Cuando termine esta prueba recuerde volver a conectar el cable que provee carga a la computadora.',
      'Esta prueba es automática, por lo que una vez el proceso termine, se pasara la siguiente prueba de forma automática.',
      'Asegurese de conectar la cantidad de USB correcta antes de iniciar la prueba, de no ser asi la prueba fallara instantaneamente.',
      'Si esta usando un puerto USB C para carga la computadora, desconectelo y conecte un USB en ese puerto, cuando termine la prueba, puede volver a conectar el cargador sin problema.'
    ],
    TestTimer: 0
  },
  {
    TestComponent: SDTest,
    TestName: 'Prueba de SD',
    TestDescription:
      'La prueba consiste en verificar el estado del puerto SD, para ello se hara una prueba de lectura y escritura sobre la tarjeta SD que se debe de insertar en el puerto',
    TestSuccessCondition:
      'Una vez el proceso interno se pasara a la siguiente prueba con el mensaje de exito si no hubo ningun problema durante el proceso.',
    TestFailCondition: 'Esta prueba puede fallar si durante el proceso ocurre algún error.',
    TestIconName: FaSdCard,
    TestNotes: [
      'Esta prueba es automática, por lo que una vez el proceso termine, se pasara la siguiente prueba de forma automática.',
      'Asegurese de conectar la tarjeta SD antes de iniciar la prueba, de no ser asi la prueba fallara instantaneamente.',
      'Si se conecta el SD en modo de solo lectura, aparecera una ventana pidiendole al usuario que vuelva a insertar la SD cambiando el switch fisico del SD y reiniciando la prueba.'
    ],
    TestTimer: 0
  },
  {
    TestComponent: BlueToothTest,
    TestName: 'Prueba de Bluetooth',
    TestDescription:
      'La prueba consiste en tratar de utilizar el servicio de bluetooth del Mainboard, este proceso sera automatico.',
    TestSuccessCondition:
      'Si se logra establecer comunicacion con un dispositivo bluetooth, la prueba se dara por exitosa de forma automática.',
    TestFailCondition:
      'Esta prueba se dara por fallida si el servicio de bluetooth del Mainboard no esta disponible o si al dispositivo que se desea conectar no esta en funcionamiento.',
    TestIconName: FaBluetooth,
    TestNotes: [
      'Esta prueba es automática, por lo que una vez el proceso termine, se pasara la siguiente prueba de forma automática.'
    ],
    TestTimer: 0
  },
  {
    TestComponent: WifiTest,
    TestName: 'Prueba de Wifi',
    TestDescription:
      'La prueba consiste revisar si el servicio de Wifi funciona correctamente en el Mainboard. Para ello se intentara conectarse a una red wifi disponible.',
    TestSuccessCondition:
      'Una vez termine el proceso se pasara a la siguiente prueba con el mensaje de exito si no hubo ningun problema durante el proceso.',
    TestFailCondition:
      'Esta prueba se dara por fallida si el servicio de bluetooth del Mainboard no esta disponible o si al dispositivo que se desea conectar no esta en funcionamiento.',
    TestIconName: FaWifi,
    TestNotes: [
      'Esta prueba es automática, por lo que una vez el proceso termine, se pasara la siguiente prueba de forma automática.'
    ],
    TestTimer: 0
  },
  {
    TestComponent: AudioTest,
    TestName: 'Prueba de Audio',
    TestDescription:
      'La prueba consiste en verificar si la salida de audio esta funcionando correctamente, para ello se intentara reproducir un audio durante un tiempo determinado; primero se reproducira por las bocinas del dispositivo, despues se le pedira al usuario que conecte los audifonos para que se reproduzca el audio por estos en determinado momento.',
    TestSuccessCondition:
      'Si el audio se reproduce correctamente por las bocinas del dispositivo y por los audifonos, el usuario debera escoger pasar la prueba.',
    TestFailCondition:
      'Esta prueba esta condicionada a intentos, si mientras se reproduce el audio los audifonos sufren desconexiones, o no se encuentran disponibles los speakers la prueba fallara.',
    TestIconName: BsSoundwave,
    TestNotes: [
      'Si los audifonos sufren desconexiones durante la prueba, se le pedira al usuario que vuelva conectar los audifonos y se reiniciara la prueba.',
      'Si se pierden todos los intentos, la prueba se dara por fallida',
      'Al final del tiempo establecido, aparecera una ventana para que el usuario determine si pasó la prueba o no'
    ],
    TestTimer: 0,
    TestTries: 3
  },
  {
    TestComponent: KeyBoardTest,
    TestName: 'Prueba de teclado',
    TestDescription:
      'La prueba consiste presiona cada tecla del teclado y que esta reaccione cambiando de color antes del tiempo establecido.',
    TestSuccessCondition:
      'Una vez que todas las teclas del teclado hayan sido presionadas y estas hayan reaccionado cambiando de color, la prueba se dara por terminada y se considerara exitosa.',
    TestFailCondition:
      'Esta fallara si trascurre el tiempo y el usuario determine que no pasó la prueba',
    TestIconName: FaKeyboard,
    TestNotes: [
      'Si se acaba el tiempo, aparecera una ventana al usuario preguntando si desea repetir la prueba o no.',
      'Las teclas de F1, F2, F3... deben presionarse junto con la tecla "Fn", para que sean detectadas corrrectamente.',
      'La tecla Fn no cambiara de color cuando sea presionada, esto es normal, y no cuenta para que la prueba termine.',
      'La tecla de Windows si cuenta para que la prueba termine, pero esta al presionarla mostrara una ventana, por lo que se perdera el foco de la prueba, por lo que se recomienda, volver a presionar la ventana de la app cuanto esto suceda.'
    ],
    TestTimer: 120
  },
  {
    TestComponent: TouchScreenTest,
    TestName: 'Prueba de pantalla táctil',
    TestDescription:
      'La prueba consiste en presionar los bloques mediante la pantalla táctil, cuando se presiona un bloque y este es detectado por la pantalla, el bloque cambiara de color.',
    TestSuccessCondition:
      'Un vez todos los bloques sean presionados antes de que acabe el tiempo y tengan el mismo color, la prueba se dara por terminada y se considerara exitosa.',
    TestFailCondition:
      'La prueba solo se considerara fallida si si acaba el tiempo y el usuario determina que no pasó la prueba',
    TestIconName: MdScreenshotMonitor,
    TestNotes: [
      'Si se acaba el tiempo, aparecera una ventana al usuario preguntando si desea repetir la prueba o no.',
      'Puede ocurrir que el servicio táctil este funcionando, pero no detecte el toque del usuario, en este caso cuando surja la ventana preguntando si desea repetir la prueba, el usuario puede decidir sin problema no repetirla.'
    ],
    TestTimer: 100
  },
  {
    TestComponent: PixelesTest,
    TestName: 'Prueba de Pixeles',
    TestDescription:
      'La prueba consiste en verificar si hay pixeles muertos en la pantalla, para ello cuando comienze la prueba la pantalla mostrara un color, si se presiona la pantalla o se hace click se pasara al siguiente color.',
    TestSuccessCondition:
      'Una vez que se hayan mostrado todos los colores se mostrara una ventana con la que el usuario podra decidir si pasó la prueba.',
    TestFailCondition:
      'La prueba solo se dara por fallida si al mostrarse la ventana emergente el usuario determina que no pasó la prueba',
    TestIconName: MdGrid4X4,
    TestNotes: [
      'Siempre y cuando se visualizen todos los colores presionando la pantalla o haciendo click, aparecera una ventana que le preguntara al usuario que accion tomar, si pasó la prueba, repetirla, o decidir que no pasó lo prueba.',
      'Esta ventana siempre aparecera en medio de la pantalla, por lo que se recomienda hacer click en una esquina de la pantalla o tocar la pantalla en una esquina mientras se pasa por todos los colores, esto con el proposito de evitar de tocar una de las opciones de la ventana por accidente cuando este aparezca.'
    ],
    TestTimer: 0
  },
  {
    TestComponent: TouchPadTest,
    TestName: 'Prueba de Pad táctil',
    TestDescription:
      'La prueba consiste en dos partes, el usuario debera presionar los bloques con los botones correspondientes del Pad táctil una cierta cantidad de veces, y una vez termine esto, debera hace otra prueba donde tendra que arrastrar bloques a zonas especificas de la pantalla.',
    TestSuccessCondition:
      'Un vez que el usuario haya presionado los bloques la cantidad de veces necesarias y haya arrastrado los bloques a las zonas disponibles, la prueba se dara por terminada y se considerara exitosa.',
    TestFailCondition:
      'La prueba solo se considerara fallida si no se completan las dos fases de la prueba en el tiempo establecido y si al salir la ventana el usuario determina que no pasó la prueba.',
    TestIconName: CgTouchpad,
    TestNotes: [
      'Si se acaba el tiempo, aparecera una ventana al usuario preguntando si desea repetir la prueba o no.',
      'Puede ocurrir que el servicio del Pad táctil este funcionando, pero no detecte el toque del usuario de forma correcta, en este caso cuando surja la ventana preguntando si desea repetir la prueba, el usuario puede decidir sin problema no repetirla.'
    ],
    TestTimer: 100
  },
  {
    TestComponent: DiscsTest,
    TestName: 'Prueba de Discos',
    TestDescription:
      'La prueba consiste revisar si el numero de discos en el sistema es el correcto; si el perfil del Mainboard tiene marcado que tiene partes integradas, se le pedira al usuario ingresar el numero de parte.',
    TestSuccessCondition:
      'Una vez el proceso termine se parasa a la siguiente prueba con el mensaje de exito si no hubo ningun problema durante el proceso.',
    TestFailCondition:
      'Esta prueba puede fallar si durante el proceso ocurre algún error; esta prueba contara con intentos si es que se le pide ingresar el numero de parte, la prueba puede fallar si el numero de parte dado es incorrecto, o si no es encontrado en la base de datos',
    TestIconName: RiHardDrive3Fill,
    TestNotes: [
      'Esta prueba es automática, por lo que una vez el proceso termine, se pasara la siguiente prueba de forma automática.',
      'Si el Mainboard tiene partes integradas marcadas, se le pedira al usuario ingresar el numero de parte.'
    ],
    TestTimer: 0,
    TestTries: 3
  },
  {
    TestComponent: RamTest,
    TestName: 'Prueba de Ram',
    TestDescription:
      'La prueba consiste revisar si la ram instala es igual a la del perfil obtenido del Mainboard; (Esta prueba puede saltarse si en el perfil del Mainboard tiene marcado que tiene partes integradas)',
    TestSuccessCondition:
      'Una vez termine el proceso se pasara a la siguiente prueba con el mensaje de exito si no hubo ningun problema durante el proceso.',
    TestFailCondition: 'Esta prueba puede fallar si durante el proceso ocurre algún error.',
    TestIconName: FaMemory,
    TestNotes: [
      'Esta prueba es automática, por lo que una vez el proceso termine, se pasara la siguiente prueba de forma automática.'
    ],
    TestTimer: 0
  },
  {
    TestComponent: FingerPrintTest,
    TestName: 'Prueba de FingerPrint',
    TestDescription:
      'La prueba consiste revisar si el Mainboard tiene activo el servicio de FingerPrint. (Si este Mainboard no cuenta con el servicio, la prueba se dara por exitosa de forma automática y se pasara a la siguiente instantaneamente.)',
    TestSuccessCondition:
      'Si el servicio de FingerPrint esta activo, la prueba se dara por exitosa de forma automática.',
    TestFailCondition:
      'Si el servicio de FingerPrint no esta activo, la prueba se dara por fallida.',
    TestIconName: FaFingerprint,
    TestNotes: [
      'Esta prueba es automática, por lo que se pasara a la siguiente prueba en cuanto se obtenga el resultado de la prueba.'
    ],
    TestTimer: 0
  },
  {
    TestComponent: BurningTest,
    TestName: 'Prueba de Estres',
    TestDescription:
      'La prueba consiste en invocar la prueba de estres de burninInTest, una vez se presione "Comenzar Prueba", de forma automática el programa de "BurninTest" iniciara un proceso de estres de RAM, CPU Y GPU. Una vez termine este proceso, el programa se cerrara solo de forma automática y se pasar a la siguiente prueba.',
    TestSuccessCondition:
      'La prueba debe realizarce con un determinado tiempo, una vez transcurra el tiempo acordado, y el resultado de las pruebas no haya arrojado ningun error, la prueba se dara por exitosa.',
    TestFailCondition:
      'Esta prueba puede fallar si el programa Burnin es cerrado de forma manual, o si el resultado de las pruebas arroja algún error, en este caso la prueba se dara por fallida.',
    TestIconName: GiBurningEmbers,
    TestNotes: [
      'Esta prueba es automática, por lo que una vez el proceso de BurniIn termine, se pasara la siguiente prueba de forma automática.',
      'Es necesario que el programa se ejecute por el tiempo que fue determinado, por lo que si se cierra el programa de burning de forma manual, la prueba se dara por fallida.'
    ],
    TestTimer: 0
  }
]

export default tests
