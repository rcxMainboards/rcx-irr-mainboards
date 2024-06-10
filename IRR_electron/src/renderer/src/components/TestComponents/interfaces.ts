import { IconType } from 'react-icons'
import { ComponentType } from 'react'

interface Test {
  TestComponent: ComponentType<any>
  name: string
  TestName: string
  TestDescription: string
  TestSuccessCondition: string
  TestFailCondition: string
  TestIconName: IconType
  params?: any
  TestNotes: string[]
  TestTimer?: number
  TestTries?: number
}

export default Test
