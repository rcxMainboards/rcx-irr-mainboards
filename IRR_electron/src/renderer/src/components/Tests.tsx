import { ModalGuideLines } from '../components/ui/index'
import useCloseModal from './hooks/useCloseModal'
import Test from './TestComponents/interfaces'
import useNextTest from './hooks/useNextTest'
import { useQuery } from '@tanstack/react-query'
import { getMainboardProduct, getMainboardProfile } from '../services/mainboard'
import OutPutLog from './OutputLog'

function Tests({ tests, user }: { tests: Test[]; user: string }) {
  const { data } = useQuery({
    queryKey: ['SSID'],
    queryFn: getMainboardProduct,
    refetchOnWindowFocus: false
  })

  const ssid = data?.product

  const { data: ProfileData } = useQuery({
    queryKey: ['profile', ssid],
    queryFn: () => getMainboardProfile(ssid),
    refetchOnWindowFocus: false,
    enabled: !!ssid,
    retry: false
  })

  const { open, changeOpen, resetModal } = useCloseModal()
  const { nextTest, currentTestIndex, Results, showOutPutLog } = useNextTest(resetModal, tests)
  const { TestComponent, TestName, TestTimer, ...props } = tests[currentTestIndex]

  return (
    <>
      {!showOutPutLog ? (
        !open ? (
          <TestComponent
            TestTimer={TestTimer}
            TestName={TestName}
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
