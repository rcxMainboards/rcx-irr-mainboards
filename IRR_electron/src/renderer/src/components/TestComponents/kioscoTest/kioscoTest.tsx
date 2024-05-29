import { Card, CardBody, Divider } from "@nextui-org/react";
import BaseLayout from "@renderer/components/ui/baseLayout";
import { useEffect, useState } from "react";
import { FaLaptop } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import clsx from "clsx";
import { useDisclosure } from "@nextui-org/react";
import { ModalTimeOut } from "@renderer/components/ui";
import useCountDown from "../hooks/useCountDown";

const TIMER = 35

export default function KioskoTest({ TestName, nextTest }) {

    const [acceleration, setAcceleration] = useState({ x: 0 });
    const [circles, setCircles] = useState({ r: false, l: false })

    const { onOpenChange, isOpen } = useDisclosure()

    const { start } = useCountDown(() => { onOpenChange() })


    useEffect(() => {
        start(TIMER)

        let accelerometer = null;

        if ('Accelerometer' in window) {
            try {
                const accelerometer = new window.Accelerometer({ frequency: 60 });
                accelerometer.addEventListener('reading', () => {
                    setAcceleration({
                        //@ts-ignore
                        x: Number(accelerometer.x) ? Number(accelerometer.x.toFixed(2)) : 0,
                    });
                });
                //@ts-ignore
                accelerometer.start();
            } catch (error) {
                nextTest(TestName, {
                    result: false,
                    message: 'Ocurrio un error al tratar de acceder al Acelerometro'
                })
            }
        } else {
            // Handle the case where Accelerometer API is not supported
            // For example, you can set some default values or show a message
            setAcceleration({ x: 0 });
        }
        return () => {
            if (accelerometer) {
                //@ts-ignore
                accelerometer.removeEventListener('reading');
            }
        };
        // Clean up the event listener when component unmounts

    }, []);

    useEffect(() => {
        if (acceleration.x >= 8.4) {
            window.api.runPswTablet().then(res => {
                if (res.trim() === "0") {
                    setCircles((prev) => ({ ...prev, l: true }))
                }
            }).catch((err) => {
                console.error(err)
                nextTest(TestName, {
                    result: false,
                    message: 'Ocurrio un error al tratar de saber el estatus de modo Tablet'
                })
            })
        } else if (acceleration.x <= -8.4) {
            window.api.runPswTablet().then(res => {
                if (res.trim() === "0") {
                    setCircles((prev) => ({ ...prev, r: true }))
                }
            }).catch((err) => {
                console.error(err)
                nextTest(TestName, {
                    result: false,
                    message: 'Ocurrio un error al tratar de saber el estatus de modo Tablet'
                })
            })
        }
    }, [acceleration])


    useEffect(() => {
        const c = circles
        if (c.l && c.r) {
            nextTest(TestName, {
                result: true,
                message: 'Prueba de tableta exitosa'
            })
        }
    }, [circles])

    const handleResetTest = () => {
        setAcceleration({ x: 0 })
        setCircles({ r: false, l: false })
        start(TIMER)
    }

    return (
        <BaseLayout>
            <Card className="max-w-[500px] p-10">
                <div className="flex flex-col gap-2 justify-center items-center mb-6">
                    <p className="text-3xl font-bold">Modo Tableta</p>
                    <div className="flex gap-2">
                        <FaArrowsRotate size={30} />
                        <FaLaptop size={30} />
                        <FaArrowsRotate size={30} />
                    </div>
                    <p>Aceleracion en x:{acceleration.x}</p>
                </div>
                <Divider />
                <CardBody>
                    <p className="text-center">Gire la computadora cuidadosamente en ambas direcciones para probar el modo tableta</p>
                </CardBody>
                <Divider />
                <div className="grid place-items-center grid-cols-2 p-2">
                    <section className={clsx(" w-24 h-24 bg-gray-200 rounded-full", { 'bg-green-400': circles.l === true })}></section>
                    <section className={clsx(" w-24 h-24 bg-gray-200 rounded-full", { 'bg-green-400': circles.r === true })}></section>
                </div>
                <ModalTimeOut reset={handleResetTest} onOpenChange={onOpenChange} isOpen={isOpen} nextTest={nextTest} TestName={TestName} />
            </Card>
        </BaseLayout>
    );
}
