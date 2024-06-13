import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Spinner } from '@nextui-org/react'
import { getHpResults } from '@renderer/services/internalServices'
import { useEffect } from 'react'
import useCountDown from '../hooks/useCountDown'
import { errorData } from '@renderer/utils/functions'

function BatteryTest({ TestName, nextTest }) {

    const checkHpTestResults = hpResultData => {

        //@ts-ignore
        navigator.getBattery().then((battery) => {
            console.log(battery.charging)
            if (!battery.charging) {
                nextTest(TestName, {
                    result: false,
                    message: "No se detecto un cargador conectado"
                })
            }
        }).catch((err) => {
            console.log(err)
            nextTest(TestName, {
                result: false,
                message: "No se pudo obtener el estado de carga de la bateria: " + err
            })
        })


        if (hpResultData) {
            const BatteryCheck = hpResultData?.hpResults?.BatteryCheck
            if (BatteryCheck === undefined) {
                nextTest(TestName, {
                    result: false,
                    message: "No se encontro el resultado de Prueba de Bateria"
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
                        message: "Prueba de Bateria fallo "
                    })
                }
            }
        }

    }

    const { start } = useCountDown(() => getHpResults().then((hpResultData) => checkHpTestResults(hpResultData)).catch(err => {
        nextTest(TestName, {
            result: false,
            message: "Prueba de Bateria fallo " + errorData(err)
        })
    }))

    useEffect(() => {
        start(240)
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