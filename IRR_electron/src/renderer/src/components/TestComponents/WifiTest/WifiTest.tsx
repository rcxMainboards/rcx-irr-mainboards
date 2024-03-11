import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { executeWifiTest } from './services/wifi'
import { errorData } from '../../../utils/functions'

function WifiTest({ TestName, nextTest }) {
  const { isLoading, error } = useQuery({
    queryKey: ['WifiTest'],
    queryFn: executeWifiTest,
    retry: false,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (!isLoading && !error) {
      nextTest(TestName, {
        result: true,
        message: 'Prueba de Wifi exitosa'
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
            <p>Ejecutando Prueba de Wifi...</p>
          ) : error ? (
            errorData(error)
          ) : (
            'Termino la prueba de Wifi'
          )}
        </CardBody>
      </Card>
    </BaseLayout>
  )
}

export default WifiTest
