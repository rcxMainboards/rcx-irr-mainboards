import Test from './TestComponents/interfaces'

function Tests({ tests, open, endGuide }: { tests: Test[]; open: boolean; endGuide: () => void }) {
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

  return (
    <TestComponent
      TestName={TestName}
      TestDescription={TestDescription}
      TestIconName={TestIconName}
      TestSuccessCondition={TestSuccessCondition}
      TestFailCondition={TestFailCondition}
      TestNotes={TestNotes}
      TestTimer={TestTimer}
      endGuide={endGuide}
      open={open}
    />
  )
}

export default Tests
