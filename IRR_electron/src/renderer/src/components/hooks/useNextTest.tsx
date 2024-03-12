import { useState, useEffect } from 'react'
import Test from '../TestComponents/interfaces'
import { Result, TestResult } from '../TestComponents/objectInterfaces'

function useNextTest(resetModal: () => void, tests: Test[]) {
  const [currentTestIndex, setCurrentTestIndex] = useState(0)
  const [Results, setResults] = useState<TestResult[]>([]) // Specify the type of Results as an array of Result objects
  const [showOutPutLog, setShowOutPutLog] = useState(false)

  const nextTest = (TestName: string, detailsResult: Result) => {
    // Siempre que se ejecute esta funcion guardamos los resultados
    setResults([
      ...Results,
      { Testname: TestName, details: detailsResult } as TestResult
    ])
    // Mientras todavia haya pruebas por avanzar, aumentamos el indice
    if (currentTestIndex < tests.length - 1) {
      resetModal()
      setCurrentTestIndex(currentTestIndex + 1)
    } else {
      // Si ya no hay pruebas por avanzar, mostramos los resultados
      setShowOutPutLog(true)
    }
  }

  return { nextTest, currentTestIndex, showOutPutLog, Results }
}

export default useNextTest
