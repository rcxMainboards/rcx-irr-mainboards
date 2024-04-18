import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { executeWifiTest } from './services/wifi'
import { errorData } from '../../../utils/functions'
import {Spinner} from "@nextui-org/react";


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
            <div className='flex gap-4 items-center'>
              <p>Ejecutando Prueba de Wifi</p>
              <Spinner color="primary"/>
            </div>
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
