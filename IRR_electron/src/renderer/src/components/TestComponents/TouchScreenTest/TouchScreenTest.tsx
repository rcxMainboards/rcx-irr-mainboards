import { ModalGuideLines } from '../../ui/index'

function TouchScreenTest({
  TestName,
  TestDescription,
  TestIconName,
  TestSuccessCondition,
  TestFailCondition,
  TestNotes,
  TestTimer,
  open,
  endGuide
}) {
  return (
    <>
      <ModalGuideLines
        TestName={TestName}
        TestDescription={TestDescription}
        TestIconName={TestIconName}
        TestSuccessCondition={TestSuccessCondition}
        TestFailCondition={TestFailCondition}
        TestNotes={TestNotes}
        open={open}
        TestTimer={TestTimer}
        endGuide={endGuide}
      />
    </>
  )
}

export default TouchScreenTest
