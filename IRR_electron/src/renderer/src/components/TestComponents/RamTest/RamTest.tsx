import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Spinner } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { executeRamTest } from './services/ram'
import { errorData } from '../../../utils/functions'
import { useEffect } from 'react'

function RamTest({ TestName, nextTest, profile }) {
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ['RamTest'],
    queryFn: executeRamTest,
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !profile.integrated
  })

  useEffect(() => {
    if (!isLoading && data) {
      const memory = data.memory
      if (profile.ram_amount === memory) {
        nextTest(TestName, {
          result: true,
          message: 'Prueba de Ram exitosa'
        })
      } else {
        nextTest(TestName, {
          result: false,
          message: `La Ram instalada en la mainboard NO conincide con el del perfil del SSID | Memoria Instalada: ${memory}, Memoria del perfil ${profile.ram_amount}`
        })
      }
    } else if (!isFetching) {
      nextTest(TestName, {
        result: true,
        message:
          'El Perfil del Mainboard tiene partes integradas por lo que se omite Comparación de Ram'
      })
    }
  }, [isLoading])

  return (
    <BaseLayout>
      <Card className="p-10">
        <CardBody>
          {isLoading ? (
            <div className='flex gap-4 items-center'>
              <p>Ejecutando Prueba de RAM</p>
              <Spinner color="primary"/>
            </div>
          ) : error ? (
            errorData(error)
          ) : (
            'Termino la prueba de RAM'
          )}
        </CardBody>
      </Card>
    </BaseLayout>
  )
}

export default RamTest
