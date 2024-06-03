import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Spinner } from '@nextui-org/react'
import { getHpResults, getBatteryValues } from '@renderer/services/internalServices'
import { useEffect } from 'react'
import useCountDown from '../hooks/useCountDown'
import { errorData } from '@renderer/utils/functions'

function BatteryTest({ TestName, nextTest }) {

    const checkHpTestResults = hpResultData => {
        if (hpResultData) {
            const BatteryCheck = hpResultData?.hpResults?.BatteryCheck
            if (BatteryCheck === undefined) {
                nextTest(TestName, {
                    result: false,
                    message: "No se encontro el resultado de Prueba de Bateria"
                })
            } else {
                const testHpPassResult = BatteryCheck.Result === "ExecutionPassed"
                console.log(testHpPassResult)
                if (testHpPassResult) {
                    getBatteryValues().then((response) => {
                    
                        const batteryValues = response
                        const d_c = batteryValues["DESIGN CAPACITY"]
                        const f_d_c = batteryValues["FULL CHARGE CAPACITY"]
                        const D_C = d_c.replace(/[^\d]/g, "");
                        const F_D_C = f_d_c.replace(/[^\d]/g, "");
                        const dc = Number(D_C)
                        const fdc = Number(F_D_C)
                        const lifeb = (fdc/dc) * 100 
                        if (lifeb >= 91) {
                            nextTest(TestName, {
                                result: true,
                                message: "Prueba de Bateria paso"
                            })
                        } else {
                            nextTest(TestName, {
                                result: false,
                                message: "Prueba de Bateria fallo, no cumple con el valor requerido de una bateria funcional: " + lifeb.toFixed(2)
                            })
                        }
                      
                        
                    }).catch((error) => {
                        nextTest(TestName, {
                            result: false,
                            message: "Prueba de Bateria fallo " + errorData(error)
                        })
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