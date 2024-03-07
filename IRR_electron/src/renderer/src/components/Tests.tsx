import React, { useState } from 'react'
import Test from './TestComponents/interfaces'
import { ModalGuideLines } from '../components/ui/index'
import useCloseModal from './hooks/useCloseModal'

function Tests({ tests }: { tests: Test[] }) {
  const [currentTestIndex, setCurrentTestIndex] = useState(0)
  const {
    TestComponent,
    TestName,
    TestDescription,
    TestIconName,
    TestSuccessCondition,
    TestFailCondition,
    TestNotes,
    TestTimer
  } = tests[currentTestIndex]

  const { open, changeOpen, resetModal } = useCloseModal()

  const nextTest = () => {
    if (currentTestIndex < tests.length - 1) {
      resetModal()
      setCurrentTestIndex(currentTestIndex + 1)
    }
  }

  return (
    <>
      {!open ? (
        <TestComponent
          TestName={TestName}
          TestDescription={TestDescription}
          TestIconName={TestIconName}
          TestSuccessCondition={TestSuccessCondition}
          TestFailCondition={TestFailCondition}
          TestNotes={TestNotes}
          TestTimer={TestTimer}
          nextTest={nextTest}
        />
      ) : (
        <ModalGuideLines
          TestName={TestName}
          TestDescription={TestDescription}
          TestIconName={TestIconName}
          TestSuccessCondition={TestSuccessCondition}
          TestFailCondition={TestFailCondition}
          TestNotes={TestNotes}
          TestTimer={TestTimer}
          onOpenChange={changeOpen}
        />
      )}
    </>
  )
}

export default Tests
