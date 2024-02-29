export const FAQ_ITEMS = [
  {
    key: '1',
    title: '¿Por qué se solicita el CT?',
    content:
      'El CT es el identificador de una Mainboard, por lo tanto, es necesario para realizar las pruebas y garantizar que estemos evaluando la Mainboard correcta',
    iconName: 'IoHardwareChipOutline'
  },
  {
    key: '2',
    title: '¿Usualmente cuánto tiempo toma terminar todas las pruebas?',
    content:
      'El tiempo estimado es de 1 hora y 15 minutos; la prueba de estrés es la que tiene la mayor duración.',
    iconName: 'RxLapTimer'
  },
  {
    key: '3',
    title:
      '¿Si se apaga la computadora o de alguna forma se cierra el programa mientras estoy en una prueba, esto enviaria un resultado?',
    content:
      'Cada prueba en el programa genera un resultado, sin embargo, el conjunto total de resultados solo se guarda y envía una vez que se completan todas las pruebas. Por lo tanto, si el proceso no se completa, los resultados no se guardarán de ninguna manera.',
    iconName: 'SiOpenbugbounty'
  }
  // Agrega más elementos aquí si es necesario
]

export default FAQ_ITEMS
