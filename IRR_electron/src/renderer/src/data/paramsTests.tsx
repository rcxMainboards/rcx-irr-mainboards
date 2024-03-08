import { MdScreenshotMonitor, MdGrid4X4 } from 'react-icons/md'
import { TouchScreenTest, PixelesTest } from '../components/TestComponents/index'
import Test from '../components/TestComponents/interfaces'

const tests: Test[] = [
  {
    TestComponent: TouchScreenTest,
    TestName: 'Prueba de pantalla táctil',
    TestDescription:
      'La prueba consiste en presionar los bloques mediante la pantalla táctil, cuando se presiona un bloque y este es detectado por la pantalla, el bloque cambiara de color cambiara de color.',
    TestSuccessCondition:
      'Un vez todos los bloques sean presionados antes de que acabe el tiempo y tengan el mismo color, la prueba se dara por terminada y se considerara exitosa.',
    TestFailCondition:
      'La prueba solo se considerara fallida si el servicio táctil no se encuentra activo, o si al comenzar la prueba no se presiona cada bloque en el tiempo establecido, la prueba se dara por fallida a menos de que el usuario decida no repetirla.',
    TestIconName: MdScreenshotMonitor,
    TestNotes: [
      'Si se acaba el tiempo, aparecera una ventana al usuario preguntando si desea repetir la prueba o no.',
      'Puede ocurrir que el servicio táctil este funcionando, pero no detecte el toque del usuario, en este caso cuando surja la ventana preguntando si desea repetir la prueba, el usuario puede decidir sin problema no repetirla.'
    ],
    TestTimer: 50
  },
  {
    TestComponent: PixelesTest,
    TestName: 'Prueba de Pixeles',
    TestDescription:
      'La prueba consiste en verificar si hay pixeles muertos en la pantalla, para ello cuando comienze la prueba la pantalla mostrara un color, si se presiona la pantalla o se hace click se pasara al siguiente color.',
    TestSuccessCondition:
      'Una vez que se hayan mostrado todos los colores se mostrara una ventana con la que el usuario podra decidir si paso la prueba.',
    TestFailCondition:
      'La prueba se dara por fallida solo si al mostrar todos los colores el usuario decide presionar el boton de "No Paso La Prueba".',
    TestIconName: MdGrid4X4,
    TestNotes: [
      'Siempre y cuando se visualizen todos los colores presionando la pantalla o haciendo click, aparecera una ventana que le preguntara al usuario que accion tomar, si paso la prueba, repetirla, o decidir que no paso lo prueba.'
    ],
    TestTimer: 0
  }
]

export default tests
