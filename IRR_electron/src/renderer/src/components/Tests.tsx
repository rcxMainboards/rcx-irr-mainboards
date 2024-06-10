import { ModalGuideLines } from '../components/ui/index'
import useCloseModal from './hooks/useCloseModal'
import Test from './TestComponents/interfaces'
import useNextTest from './hooks/useNextTest'
import OutPutLog from './OutputLog'

function Tests({ tests, user, ProfileData }: { tests: Test[]; user: string, ProfileData: any }) {

  const { open, changeOpen, resetModal } = useCloseModal()
  const { nextTest, currentTestIndex, Results, showOutPutLog } = useNextTest(resetModal, tests)
  const { TestComponent, TestName, TestTimer, params, ...props } = tests[currentTestIndex]

  return (
    <>
      {!showOutPutLog ? (
        !open ? (
          <TestComponent
            TestTimer={TestTimer}
            TestName={TestName}
            TestParams={params}
            nextTest={nextTest}
            profile={ProfileData}
          />
        ) : (
          <ModalGuideLines
            TestName={TestName}
            TestTimer={TestTimer}
            onOpenChange={changeOpen}
            {...props}
          />
        )
      ) : (
        <OutPutLog Results={Results} user={user} />
      )}
    </>
  )
}

export default Tests
