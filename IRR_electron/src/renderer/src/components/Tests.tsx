import { ModalGuideLines } from '../components/ui/index'
import useCloseModal from './hooks/useCloseModal'
import Test from './TestComponents/interfaces'
import useNextTest from './hooks/useNextTest'

function Tests({ tests }: { tests: Test[] }) {
  const { open, changeOpen, resetModal } = useCloseModal()
  const { nextTest, currentTestIndex } = useNextTest(resetModal, tests)

  const { TestComponent, TestName, TestTimer, ...props } = tests[currentTestIndex]

  return (
    <>
      {!open ? (
        <TestComponent TestTimer={TestTimer} TestName={TestName} nextTest={nextTest} />
      ) : (
        <ModalGuideLines
          TestName={TestName}
          TestTimer={TestTimer}
          onOpenChange={changeOpen}
          {...props}
        />
      )}
    </>
  )
}

export default Tests
