import Test from './TestComponents/interfaces'
import { ModalGuideLines } from '../components/ui/index'
import useCloseModal from './hooks/useCloseModal'

function Tests({ tests }: { tests: Test[] }) {
  const {
    TestComponent,
    TestName,
    TestDescription,
    TestIconName,
    TestSuccessCondition,
    TestFailCondition,
    TestNotes,
    TestTimer
  } = tests[0]

  const { open, changeOpen } = useCloseModal()

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
