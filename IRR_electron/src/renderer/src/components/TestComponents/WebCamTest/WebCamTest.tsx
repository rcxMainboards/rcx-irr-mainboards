import { Button } from '@nextui-org/react'
import { Card, CardBody, Spinner } from '@nextui-org/react'
import BaseLayout from '../../ui/baseLayout'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineDangerous } from 'react-icons/md'
import Webcam from 'react-webcam'

function WebCamTest({ TestName, nextTest }) {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center ">
        <Webcam
          style={{ borderRadius: '12px', border: '2px solid white' }}
          audio={false}
          height={720}
          width={500}
          onUserMediaError={() => {
            nextTest(TestName, {
              result: false,
              message: 'La camara no esta disponible'
            })
          }}
          videoConstraints={{ facingMode: 'user' }}
        />
        <Card className="mt-8">
          <CardBody className="grid grid-cols-2 gap-6">
            <Button
              startContent={<FaCheckCircle />}
              className="bg-accent-700 text-white"
              size="lg"
              onPress={() => {
                nextTest(TestName, {
                  result: true,
                  message: 'Prueba de camara exitosa'
                })
              }}
            >
              Paso la Prueba
            </Button>
            <Button
              startContent={<MdOutlineDangerous size={20} />}
              color="danger"
              size="lg"
              onPress={() => {
                nextTest(TestName, {
                  result: false,
                  message: 'El usuario decidio que paso la prueba, y decidio pasar a la siguiente'
                })
              }}
            >
              No Paso la Prueba
            </Button>
          </CardBody>
        </Card>
      </div>
    </BaseLayout>
  )
}

export default WebCamTest
