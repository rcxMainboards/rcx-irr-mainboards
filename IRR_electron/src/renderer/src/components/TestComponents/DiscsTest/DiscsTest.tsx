import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Spinner } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { executeDiskTest } from './services/disc'
import { errorData } from '../../../utils/functions'
import NumberPartForm from './NumberPartForm'
import { runHPDisk, getHpResults } from '@renderer/services/internalServices'
import useCountDown from '../hooks/useCountDown'

function DiscsTest({ TestName, nextTest, profile, TestParams }) {

  const { error, isSuccess: isDiskTestSucces, data: diskTestData } = useQuery({
    queryKey: ['DiscsTest'],
    queryFn: () => executeDiskTest(profile,TestParams),
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !profile.integrated // la consulta se ejecutará si profile.integrated es false
  })

  const { start } = useCountDown(() => getHpResults().then((data) => {
    checkTestDiskResult(data)
  }).catch((err) => console.log(err)))

  
  useEffect(() => {
    const disktest =async () => {
      await runHPDisk()
      start(80)
    }
    disktest()
  }, [])


  const checkTestDiskResult = (hpResultData) => {
    if (hpResultData && diskTestData) {
      const { hpResults: { DiskReadVerify } } = hpResultData
      const testHpPassResult = DiskReadVerify.every((disk) => disk.Result === "ExecutionPassed")
      const generalTestResult = testHpPassResult && isDiskTestSucces

      if (DiskReadVerify === undefined) {
        nextTest(TestName, {
          result: false,
          message: "No se obtuvo resultado de la prueba de HP"
        })
      } else if (generalTestResult) {
        nextTest(TestName, {
          result: generalTestResult,
          message: "Prueba discos exitosa"
        })
      } else {
        nextTest(TestName, {
          result: generalTestResult,
          message: `${error ? errorData(error) : ''} ${!testHpPassResult ? 'La verificación de disco de HP Fallo' : ''}`
        })
      }
    }
  }

  return (
    <BaseLayout>
      {!profile.integrated ? (
        <Card className="p-10">
          <CardBody>
            <div className='flex gap-4 items-center'>
              <p>Ejecutando Prueba de Discos</p>
              <Spinner color="primary" />
            </div>
          </CardBody>
        </Card>
      ) : (
        <NumberPartForm
          TestName={TestName}
          nextTest={nextTest}
          profile={profile}
        />
      )}
    </BaseLayout>
  )
}

export default DiscsTest
