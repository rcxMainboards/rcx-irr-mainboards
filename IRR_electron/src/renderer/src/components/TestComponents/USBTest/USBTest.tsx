import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { executeUSBTest } from './services/usb'
import { errorData } from '../../../utils/functions'

function USBTest({ TestName, nextTest, profile }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['usbTest'],
    queryFn: () => executeUSBTest(profile.usb),
    retry: false,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (!isLoading && !error) {
      nextTest(TestName, {
        result: true,
        message: 'Prueba de USB exitosa'
      })
    } else if (!isLoading && error) {
      nextTest(TestName, {
        result: false,
        message: errorData(error)
      })
    }
  }, [isLoading])

  return (
    <BaseLayout>
      <Card className="p-10">
        <CardBody>
          {isLoading ? (
            <p>Ejecutando Prueba de USB...</p>
          ) : error ? (
            errorData(error)
          ) : (
            'Termino la prueba de USB'
          )}
        </CardBody>
      </Card>
    </BaseLayout>
  )
}

export default USBTest
