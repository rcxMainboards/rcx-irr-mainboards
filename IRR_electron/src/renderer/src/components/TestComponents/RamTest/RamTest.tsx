import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { executeRamTest } from './services/ram'
import { useEffect } from 'react'
import { errorData } from '../../../utils/functions'

function RamTest({ TestName, nextTest, profile }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['RamTest'],
    queryFn: executeRamTest,
    retry: false,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (!isLoading && !error) {
      const memory = data.memory
      if (profile.ram_amount === memory) {
        nextTest(TestName, {
          result: true,
          message: 'Prueba de Ram exitosa'
        })
      } else {
        nextTest(TestName, {
          result: false,
          message: `La Ram instalada en la mainboard conincide con el del perfil del SSID | Memoria Instalada: ${memory}, Memoria del perfil ${profile.ram_amount}`
        })
      }
    }
  }, [isLoading])

  return (
    <BaseLayout>
      <Card className="p-10">
        <CardBody>
          {isLoading ? (
            <p>Ejecutando de Ram...</p>
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
