import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { errorData } from '../../../utils/functions'
import { executeBluetooth } from './services/bluetooth'
import { useEffect } from 'react'

function BlueToothTest({ TestName, nextTest }) {
  const { isLoading, error } = useQuery({
    queryKey: ['burningTest'],
    queryFn: () => executeBluetooth('Hola Server'),
    retry: false,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (!isLoading && !error) {
      nextTest(TestName, {
        result: true,
        message: 'Prueba de Bluetooth exitosa'
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
            <p>Ejecutando Bluetooth...</p>
          ) : error ? (
            errorData(error)
          ) : (
            'Prueba de Bluetooth finalizada'
          )}
        </CardBody>
      </Card>
    </BaseLayout>
  )
}

export default BlueToothTest
