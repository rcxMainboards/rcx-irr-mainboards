import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Divider, Button } from '@nextui-org/react'
import { useEffect } from 'react'
import { getBatteryValues } from '@renderer/services/internalServices'
import { MdOutlineDangerous } from 'react-icons/md'
import { CiBatteryFull } from "react-icons/ci";
import { FaCheckCircle } from 'react-icons/fa'


function BatteryTest({ TestName, nextTest }) {

    const checkHpTestResults = () => {

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
        })

        getBatteryValues().then((response) => {
                    
            const batteryValues = response
            const d_c = batteryValues["DESIGN CAPACITY"]
            const f_d_c = batteryValues["FULL CHARGE CAPACITY"]
            const D_C = d_c.replace(/[^\d]/g, "");
            const F_D_C = f_d_c.replace(/[^\d]/g, "");
            const dc = Number(D_C)
            const fdc = Number(F_D_C)
            const lifeb = (fdc/dc) * 100 
            if (!(lifeb >= 91)) {
                nextTest(TestName, {
                    result: false,
                    message: "Prueba de Bateria fallo, no cumple con el valor requerido de una bateria funcional: " + lifeb.toFixed(2)
                })
            }
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
                    <div className="flex flex-col gap-2 justify-center items-center mb-6">
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
                    </section>
                </Card>
            </>
        </BaseLayout >
        )
    )
}


export default BatteryTest