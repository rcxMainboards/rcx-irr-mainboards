import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Spinner } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { getHpResults } from '@renderer/services/internalServices'
import { useEffect } from 'react'

function BatteryTest({TestName, nextTest}) {

    const { data:hpResultData } = useQuery({
    queryKey: ['burningTest'],
    queryFn: getHpResults,
    retry: false,
    refetchOnWindowFocus: false
    })

    useEffect(() => {
        if(hpResultData) {
            const { hpResults: { BatteryCheck } } = hpResultData
            const testHpPassResult = BatteryCheck.Result === "ExecutionPassed" 
            if (testHpPassResult){
                setTimeout(() => {nextTest(TestName, {
                result: true,
                message: "Prueba de Bateria exitosa"
                })}, 3000)
            } else { 
                setTimeout(() => {
                    nextTest(TestName, {
                    result: false,
                    message: "Prueba de Bateria fallo"
                    })
                }, 3000)
            }
        }
    })

  return (
    <BaseLayout>
    <Card>
        <CardBody className="p-10">
           <div className='flex gap-4 items-center'>
              <p>Ejecutando Prueba de Bateria</p>
              <Spinner color="primary"/>
            </div>
        </CardBody>
    </Card>
    </BaseLayout>
  )
}


export default BatteryTest