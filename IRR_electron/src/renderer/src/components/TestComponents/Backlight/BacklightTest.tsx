import BaseLayout from "@renderer/components/ui/baseLayout"
import { Card, CardBody, Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { PiKeyboardFill } from "react-icons/pi";
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineDangerous } from 'react-icons/md'
function BacklightTest({ TestName, nextTest }) {
    return (
        <BaseLayout>
            <>
                <Card className="max-w-[500px] p-10">
                    <div className="flex flex-col gap-2 justify-center items-center mb-6">
                        <p className="text-4xl font-bold text-text-700">Backlight</p>
                        <PiKeyboardFill size={60} />
                    </div>
                    <Divider />
                    <CardBody>
                        <p className="text-center text-text-700">Presione el boton de "Backlight" y verifique que la tecla funcione y la luces detras del teclado se enciendan con la instensidad adecuada.</p>
                    </CardBody>
                    <Divider />
                    <section className="flex items-center justify-center gap-7 mt-4">
                        <Button startContent={<FaCheckCircle />} size="lg" className="bg-primary-700 text-white" onClick={() => nextTest(TestName, { result: true, message: "Prueba de Backlight exitosa" })}>Paso la prueba</Button>
                        <Button startContent={<MdOutlineDangerous size={25} />} size="lg" className="bg-danger text-white" onClick={() => nextTest(TestName, { result: false, message: "Prueba de Backlight fallida" })}>Fallo la prueba</Button>
                    </section>
                </Card>
            </>
        </BaseLayout >
    )
}

export default BacklightTest