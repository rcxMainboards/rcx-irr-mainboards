import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Spinner, Progress } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { executeUSBTest, deleteUSBtestFile } from './services/usb'
import { errorData } from '../../../utils/functions'
import { IRR_MB_API } from '@renderer/utils/serviceEndPoints'
import { ModalUSB } from '@renderer/components/ui'
import { useDisclosure } from '@nextui-org/react'

function USBTest({ TestName, nextTest, profile }) {
  const [progressValue, setProgressValue] = useState(0)
  const [downLoadComplete, setDownLoadComplete] = useState(false)
  const [downloadError, setDownloadError] = useState(false)


  const { isOpen, onOpenChange } = useDisclosure()

  const { isLoading, isSuccess, error } = useQuery({
    queryKey: ['usbTest'],
    queryFn: () => executeUSBTest(profile.usb),
    retry: false,
    enabled: downLoadComplete && !downloadError, // solo ejecutcar si se ha descargado y no hubo ningun error
    refetchOnWindowFocus: false
  })


  const getTestFile = () => {
    window.api.send('downLoadFile', { payload: { url: `${IRR_MB_API}/downloadTestFile/` } })
    // @ts-ignore
    window.api.on('update-download-progress', (event, progress) => {
      setProgressValue(progress.progress)
    })
    // @ts-ignore
    window.api.on('download-end', (event, value) => {
      if (value) {
        setDownLoadComplete(true)
      }
    })
    // @ts-ignore
    window.api.on('download-error', (event, error) => {
      if (error) {
        setDownloadError(true)
        nextTest(TestName, { result: false, message: "Hubo un fallo al tratar de descargar el archivo de prueba" })
      }
    })
  }

  useEffect(() => {
    getTestFile()
  }, [])

  const makeTestAgain = () => {
    executeUSBTest(profile.usb).then((response) => {
      deleteUSBtestFile()
      nextTest(TestName, {
        result: true,
        message: "Prueba de USB exitosa"
      })
    }).catch((error) => {
      deleteUSBtestFile()
      nextTest(TestName, {
        result: false,
        message: errorData(error)
      })
    })
  }

  useEffect(() => {
    if (isSuccess) {
      onOpenChange()
    } else if (!isLoading && error) {
      deleteUSBtestFile()
      nextTest(TestName, {
        result: false,
        message: errorData(error)
      })
    }
  }, [isLoading])

  return (
    <BaseLayout>
      <>
        <Card className="p-10">
          <CardBody>
            {!downLoadComplete ? <div className="flex flex-col items-center gap-4">
              <p>Iniciando descarga de archivo de pruebas</p>
              <Progress
                aria-label="Cargando..."
                showValueLabel={true}
                value={progressValue}
                className="max-w-md"
              />
            </div> : <div className='flex items-center gap-4'>
              <p>Ejecutando prueba de USB</p>
              <Spinner color='primary' />
            </div>}
          </CardBody>
        </Card>
        <ModalUSB isOpen={isOpen} onOpenChange={onOpenChange} action={makeTestAgain} />
      </>
    </BaseLayout>
  )
}

export default USBTest