import { MdScreenshotMonitor, MdGrid4X4 } from 'react-icons/md'
import { CgTouchpad } from 'react-icons/cg'
import { FaCamera, FaHeadphones, FaKeyboard } from 'react-icons/fa'

import {
  TouchScreenTest,
  PixelesTest,
  TouchPadTest,
  WebCamTest,
  AudioTest,
  KeyBoardTest
} from '../components/TestComponents/index'
import Test from '../components/TestComponents/interfaces'

const tests: Test[] = [
  // {
  //   TestComponent: TouchScreenTest,
  //   TestName: 'Prueba de pantalla táctil',
  //   TestDescription:
  //     'La prueba consiste en presionar los bloques mediante la pantalla táctil, cuando se presiona un bloque y este es detectado por la pantalla, el bloque cambiara de color cambiara de color.',
  //   TestSuccessCondition:
  //     'Un vez todos los bloques sean presionados antes de que acabe el tiempo y tengan el mismo color, la prueba se dara por terminada y se considerara exitosa.',
  //   TestFailCondition:
  //     'La prueba solo se considerara fallida si el servicio táctil no se encuentra activo, o si al comenzar la prueba no se presiona cada bloque en el tiempo establecido, la prueba se dara por fallida a menos de que el usuario decida no repetirla.',
  //   TestIconName: MdScreenshotMonitor,
  //   TestNotes: [
  //     'Si se acaba el tiempo, aparecera una ventana al usuario preguntando si desea repetir la prueba o no.',
  //     'Puede ocurrir que el servicio táctil este funcionando, pero no detecte el toque del usuario, en este caso cuando surja la ventana preguntando si desea repetir la prueba, el usuario puede decidir sin problema no repetirla.'
  //   ],
  //   TestTimer: 3
  // },
  // {
  //   TestComponent: PixelesTest,
  //   TestName: 'Prueba de Pixeles',
  //   TestDescription:
  //     'La prueba consiste en verificar si hay pixeles muertos en la pantalla, para ello cuando comienze la prueba la pantalla mostrara un color, si se presiona la pantalla o se hace click se pasara al siguiente color.',
  //   TestSuccessCondition:
  //     'Una vez que se hayan mostrado todos los colores se mostrara una ventana con la que el usuario podra decidir si paso la prueba.',
  //   TestFailCondition:
  //     'La prueba se dara por fallida solo si al mostrar todos los colores el usuario decide que no paso la prueba.',
  //   TestIconName: MdGrid4X4,
  //   TestNotes: [
  //     'Siempre y cuando se visualizen todos los colores presionando la pantalla o haciendo click, aparecera una ventana que le preguntara al usuario que accion tomar, si paso la prueba, repetirla, o decidir que no paso lo prueba.',
  //     'Este modal siempre aparecera en medio de la pantalla, por lo que se recomienda hacer click en una esquina de la pantalla o tocar la pantalla en una esquina, esto con el proposito de evitar de tocar una de las opciones del modal por accidente cuando este aparezca.'
  //   ],
  //   TestTimer: 0
  // },
  // {
  //   TestComponent: TouchPadTest,
  //   TestName: 'Prueba de TouchPad',
  //   TestDescription:
  //     'La prueba consiste en dos partes, el usuario debera presionar los bloques con los botones correspondientes del touchPad una cierta cantidad de veces, y una vez termine esto, debera hace otra prueba donde tendra que arrastrar bloques a una zona especifica de la pantalla.',
  //   TestSuccessCondition:
  //     'Un vez que el usuario haya presionado los bloques la cantidad de veces necesaria y haya arrastrado los bloques a la zona correcta, la prueba se dara por terminada y se considerara exitosa.',
  //   TestFailCondition:
  //     'La prueba solo se considerara fallida si el servicio del touchpad no se encuentra activo, o si al comenzar la prueba no se presiona cada bloque en el tiempo establecido, la prueba se dara por fallida a menos de que el usuario decida no repetirla.',
  //   TestIconName: CgTouchpad,
  //   TestNotes: [
  //     'Si se acaba el tiempo, aparecera una ventana al usuario preguntando si desea repetir la prueba o no.',
  //     'Puede ocurrir que el servicio del touchpad este funcionando, pero no detecte el toque del usuario de forma correcta, en este caso cuando surja la ventana preguntando si desea repetir la prueba, el usuario puede decidir sin problema no repetirla.'
  //   ],
  //   TestTimer: 2
  // },
  // {
  //   TestComponent: WebCamTest,
  //   TestName: 'Prueba de Cámara',
  //   TestDescription:
  //     'La prueba consiste en verificar si la cámara esta funcionando correctamente, para ello se intentara activar la camara por default del dispositivo.',
  //   TestSuccessCondition:
  //     'Si la camara muestra video en pantalla, entonces el usuario debera escoger pasar la prueba.',
  //   TestFailCondition:
  //     'La prueba solo se considerara fallida si el servicio de la cámara no se encuentra activo, o si el usuario decide que no paso la prueba.',
  //   TestIconName: FaCamera,
  //   TestNotes: [
  //     'Puede ocurrir que el servicio de la cámara este funcionando, pero el video que de la camara no sea completamente funcional.'
  //   ],
  //   TestTimer: 0
  // },
  {
    TestComponent: AudioTest,
    TestName: 'Prueba de Audio',
    TestDescription:
      'La prueba consiste en verificar si la salida de audio esta funcionando correctamente, para ello se intentara reproducir un audio durante un tiempo determinado; primero se empezara con los audifonos conectados durante 15 segundos y deforma automatica se cambiara a los speakers, el usuario no debe deconectar nada en esta prueba.',
    TestSuccessCondition:
      'Si los audifonos reproducen el audio correctamente y estos no sufren de desconexiones durante el proceso, se le preguntara al usuario si paso la prueba o no',
    TestFailCondition:
      'Esta prueba esta condicionada a intentos, si mientras se reproduce el audio los audifonos sufren desconexiones, la prueba se reiniciara y se perdera un intento, si se pierden todos los intentos, la prueba se dara por fallida.',
    TestIconName: FaHeadphones,
    TestNotes: [
      'Si los audifonos sufren desconexiones durante la prueba, se le pedira al usuario que vuelva conectar los audifoos y se reiniciara la prueba.',
      'Si se pierden todos los intentos, la prueba se dara por fallida'
    ],
    TestTimer: 0,
    TestTries: 3
  },
  {
    TestComponent: KeyBoardTest,
    TestName: 'Prueba de Teclado',
    TestDescription:
      'La prueba consiste en verificar si la salida de audio esta funcionando correctamente, para ello se intentara reproducir un audio durante un tiempo determinado; primero se empezara con los audifonos conectados durante 15 segundos y deforma automatica se cambiara a los speakers, el usuario no debe deconectar nada en esta prueba.',
    TestSuccessCondition:
      'Si los audifonos reproducen el audio correctamente y estos no sufren de desconexiones durante el proceso, se le preguntara al usuario si paso la prueba o no',
    TestFailCondition:
      'Esta prueba esta condicionada a intentos, si mientras se reproduce el audio los audifonos sufren desconexiones, la prueba se reiniciara y se perdera un intento, si se pierden todos los intentos, la prueba se dara por fallida.',
    TestIconName: FaKeyboard,
    TestNotes: [
      'Si los audifonos sufren desconexiones durante la prueba, se le pedira al usuario que vuelva conectar los audifoos y se reiniciara la prueba.',
      'Si se pierden todos los intentos, la prueba se dara por fallida'
    ],
    TestTimer: 120
  }
]

export default tests
