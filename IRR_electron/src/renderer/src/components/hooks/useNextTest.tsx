import { useState, useEffect } from 'react'
import Test from '../TestComponents/interfaces'
import { Result, TestResult } from '../TestComponents/objectInterfaces'

function useNextTest(resetModal: () => void, tests: Test[]) {
  const [currentTestIndex, setCurrentTestIndex] = useState(0)
  const [Results, setResults] = useState<TestResult[]>([]) // Specify the type of Results as an array of Result objects

  useEffect(() => {
    console.log(Results)
  }, [Results])

  const nextTest = (TestName: string, detailsResult: Result) => {
    // Provide a type for the Result parameter
    if (currentTestIndex < tests.length - 1) {
      resetModal()
      setCurrentTestIndex(currentTestIndex + 1)
      setResults([...Results, { Testname: TestName, details: detailsResult } as TestResult])
    }
  }

  return { nextTest, currentTestIndex }
}

export default useNextTest
