interface Result {
  result: boolean
  message: string
}

interface TestResult {
  Testname: string
  details: Result
}

export type { Result, TestResult }
