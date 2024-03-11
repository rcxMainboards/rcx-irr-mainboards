import { ModalGuideLines } from '../components/ui/index'
import useCloseModal from './hooks/useCloseModal'
import Test from './TestComponents/interfaces'
import useNextTest from './hooks/useNextTest'
import { useQuery } from '@tanstack/react-query'
import { getMainboardProduct, getMainboardProfile } from '../services/mainboard'

function Tests({ tests }: { tests: Test[] }) {
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
  const { nextTest, currentTestIndex } = useNextTest(resetModal, tests)

  const { TestComponent, TestName, TestTimer, ...props } =
    tests[currentTestIndex]

  return (
    <>
      {!open ? (
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
      )}
    </>
  )
}

export default Tests
