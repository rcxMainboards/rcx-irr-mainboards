import { IconType } from 'react-icons'
import { ComponentType } from 'react'

interface Test {
  TestComponent: ComponentType<any>
  TestName: string
  TestDescription: string
  TestSuccessCondition: string
  TestFailCondition: string
  TestIconName: IconType
  TestNotes: string[]
  TestTimer?: number
}

export default Test
