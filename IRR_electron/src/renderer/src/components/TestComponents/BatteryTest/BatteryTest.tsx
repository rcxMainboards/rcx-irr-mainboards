import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Spinner } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { getHpResults } from '@renderer/services/internalServices'
import { useEffect } from 'react'
import useCountDown from '../hooks/useCountDown'

function BatteryTest({ TestName, nextTest }) {



    const { data: hpResultData } = useQuery({
        queryKey: ['hpTests'],
        queryFn: getHpResults,
        retry: false,
        refetchOnWindowFocus: false
    })


    const checkHpTestResults = hpResultData => {

        if (hpResultData) {
            const BatteryCheck = hpResultData?.hpResults?.BatteryCheck
            if (BatteryCheck === undefined) {
                nextTest(TestName, {
                    result: false,
                    message: "Prueba de Bateria fallo"
                })
            } else {
                const testHpPassResult = BatteryCheck.Result === "ExecutionPassed"
                if (testHpPassResult) {
                    nextTest(TestName, {
                        result: true,
                        message: "Prueba de Bateria exitosa"
                    })

                } else {
                    nextTest(TestName, {
                        result: false,
                        message: "Prueba de Bateria fallo"
                    })
                }
            }
        }

    }

    const { start } = useCountDown(() => checkHpTestResults(hpResultData))

    useEffect(() => {
        start(180)
    }, [])

    return (
        <BaseLayout>
            <Card>
                <CardBody className="p-10">
                    <div className='flex gap-4 items-center'>
                        <p>Ejecutando Prueba de Bateria</p>
                        <Spinner color="primary" />
                    </div>
                </CardBody>
            </Card>
        </BaseLayout>
    )
}


export default BatteryTest