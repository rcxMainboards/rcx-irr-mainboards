import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Divider, Button } from '@nextui-org/react'
import { useEffect } from 'react'
import { MdOutlineDangerous } from 'react-icons/md'
import { CiBatteryFull } from "react-icons/ci";
import { FaCheckCircle } from 'react-icons/fa'
import { useState } from 'react'
import { Spinner } from '@nextui-org/react'


function BatteryTest({ TestName, nextTest }) {
    const [loading, setLoading] = useState(false)

    const checkHpTestResults = () => {
        setLoading(true)
        //@ts-ignore
        navigator.getBattery().then((battery) => {
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
        }).finally(() => {
            setLoading(false)
        })

    }

    useEffect(() => {
        checkHpTestResults()
    }, [])


    return (
        (
            <BaseLayout>
            <>
                <Card className="max-w-[500px] p-10">
                    {loading ? <CardBody>
            <div className='flex gap-4 items-center'>
              <p>Ejecutando prueba de bateria</p>
              <Spinner color="primary" />
            </div>
          </CardBody> : <><div className="flex flex-col gap-2 justify-center items-center mb-6">
                        <p className="text-4xl font-bold text-text-700">Bateria</p>
                        <CiBatteryFull size={100}/>
                    </div>
                    <Divider />
                    <CardBody>
                        <p className="text-center text-text-700">Eliga la opcion que corresponda al resultado de la bateria de UEFI</p>
                    </CardBody>
                    <Divider />
                    <section className="flex items-center justify-center gap-7 mt-4">
                        <Button startContent={<FaCheckCircle size={22} />} className="bg-primary-700 text-white" onClick={() => nextTest(TestName, { result: true, message: "Prueba de Bateria exitosa" })}>Paso UEFI</Button>
                        <Button startContent={<MdOutlineDangerous size={25} />}  className="bg-danger text-white" onClick={() => nextTest(TestName, { result: false, message: "Prueba de Bateria fallida" })}>Fallo UEFI</Button>
                    </section></> }
                </Card>
            </>
        </BaseLayout >
        )
    )
}


export default BatteryTest