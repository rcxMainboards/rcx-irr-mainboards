import { LuHdmiPort } from 'react-icons/lu'
import BaseLayout from '../../ui/baseLayout'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineDangerous } from 'react-icons/md'
import { Card, CardBody, Button } from '@nextui-org/react'
import { useEffect } from 'react'

import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 0.9,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

function HdmiTest({ TestName, nextTest, profile }) {
  useEffect(() => {
    if (!profile.hdmi) {
      nextTest(TestName, {
        result: true,
        message: 'Este Mainboard no cuenta con puerto HDMI, por que lo que omite la prueba'
      })
    }
  }, [])

  return (
    <BaseLayout>
      <Card className="border">
        <CardBody className=" max-w-[60rem]">
          <motion.ul
            className="flex flex-col items-center justify-center gap-6 p-4 px-12"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.li variants={item}>
              <div className="border-[7px] border-black p-2 px-3">
                <LuHdmiPort size={150} />
              </div>
            </motion.li>
            <h1 className="text-center text-xl font-bold text-text-700 underline">
              Por favor, conecte el cable HDMI al puerto correspondiente y elija la opción según si
              se muestra vídeo.
            </h1>
            <div className="flex justify-center gap-4 rounded-md bg-secondary-200 p-2">
              <Button
                className="bg-primary-500 text-lg text-white"
                startContent={<FaCheckCircle size={20} />}
                onPress={() => {
                  nextTest(TestName, {
                    result: true,
                    message: 'El usuario decidio que pasó la prueba'
                  })
                }}
              >
                Paso la Prueba
              </Button>
              <Button
                color="danger"
                className="text-lg"
                startContent={<MdOutlineDangerous size={24} />}
                onPress={() => {
                  nextTest(TestName, {
                    result: false,
                    message:
                      'El usuario decidio que no pasó la prueba, y decidio pasar a la siguiente prueba'
                  })
                }}
              >
                No paso la Prueba
              </Button>
            </div>
          </motion.ul>
        </CardBody>
      </Card>
    </BaseLayout>
  )
}

export default HdmiTest
