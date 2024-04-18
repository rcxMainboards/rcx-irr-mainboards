import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Spinner } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { executeUSBTest } from './services/usb'
import { errorData } from '../../../utils/functions'

function USBTest({ TestName, nextTest, profile }) {
  const { isLoading, error } = useQuery({
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
            <div className='flex gap-4 items-center'>
              <p>Ejecutando Prueba de USB</p>
              <Spinner color="primary"/>
            </div>
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
