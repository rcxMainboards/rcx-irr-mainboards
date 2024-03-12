import { ModalGuideLines } from '../components/ui/index'
import useCloseModal from './hooks/useCloseModal'
import Test from './TestComponents/interfaces'
import useNextTest from './hooks/useNextTest'
import { useQuery } from '@tanstack/react-query'
import { getMainboardProduct, getMainboardProfile } from '../services/mainboard'
import { OutputTable } from '../components/ui/index'
import BaseLayout from './ui/baseLayout'
import { Card, CardHeader } from '@nextui-org/react'
import { TbReportSearch } from 'react-icons/tb'

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
  const { nextTest, currentTestIndex, Results, showOutPutLog } = useNextTest(
    resetModal,
    tests
  )

  const { TestComponent, TestName, TestTimer, ...props } =
    tests[currentTestIndex]

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
        <BaseLayout>
          <Card className="m-4 grid grid-cols-2 px-10 pb-5 text-text-700">
            <main className="mt-10 w-[40rem]">
              <CardHeader className=" flex items-center">
                <h1 className="text-4xl font-bold">Resultados</h1>
                <TbReportSearch size={40} />
              </CardHeader>
              <OutputTable Results={Results} user={user} />
            </main>
            <CardHeader className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold">Resultados</h1>
              <TbReportSearch size={100} />
            </CardHeader>
          </Card>
        </BaseLayout>
      )}
    </>
  )
}

export default Tests
