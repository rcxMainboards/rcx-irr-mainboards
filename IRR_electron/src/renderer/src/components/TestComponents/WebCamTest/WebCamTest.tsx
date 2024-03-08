import { Button } from '@nextui-org/react'
import { useRef, useState, useEffect } from 'react'
import { Card, CardBody } from '@nextui-org/react'
import BaseLayout from '../../ui/baseLayout'
import { FaCheckCircle } from 'react-icons/fa'
import { MdOutlineDangerous } from 'react-icons/md'

function WebCamTest({ TestName, nextTest }) {
  const [isLoading, setIsLoading] = useState(false)
  const [stream, setStream] = useState<any>()
  const videoRef = useRef<HTMLVideoElement | null>(null)

  function startCamera() {
    setIsLoading(true)
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        setStream(stream)
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          videoRef.current.play()
          setIsLoading(false)
        }
      })
      .catch(function () {
        nextTest(TestName, {
          result: false,
          message: 'No se pudo acceder a la camara'
        })
        setIsLoading(false)
      })
  }

  useEffect(() => {
    startCamera()
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [stream])

  return (
    <BaseLayout>
      <div className="flex flex-col items-center ">
        <video
          className={`block h-2/4 w-3/4 rounded-lg border-5 ${isLoading ? 'hidden' : ''}`}
          ref={videoRef}
          autoPlay
          playsInline
        ></video>
        {isLoading && (
          <p className="text-2xl font-semibold text-white">Cargando...</p>
        )}
        <Card className="mt-8">
          <CardBody className="grid grid-cols-2 gap-6">
            <Button
              startContent={<FaCheckCircle />}
              className="bg-accent-700 text-white"
              size="lg"
              onPress={() => {
                nextTest(TestName, {
                  result: true,
                  message: 'Paso la Prueba'
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
                  message:
                    'El usuario decidio que paso la prueba, y decidio pasar a la siguiente prueba.'
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
