import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
import { executeFingerPrintTest } from './services/fingerprint'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { errorData } from '../../../utils/functions'

function FingerPrintTest({ TestName, nextTest, profile }) {
  const { isLoading, data, error, isFetching } = useQuery({
    queryKey: ['fingerPrintTest'],
    queryFn: executeFingerPrintTest,
    retry: false,
    refetchOnWindowFocus: false,
    enabled: profile.fingerPrint
  })

  useEffect(() => {
    if (!isLoading && data) {
      nextTest(TestName, {
        result: true,
        message: 'Prueba de FingerPrint exitosa'
      })
    } else if (!isLoading && error) {
      nextTest(TestName, {
        result: false,
        message: errorData(error)
      })
    } else if (!isFetching) {
      nextTest(TestName, {
        result: true,
        message: 'El Perfil del Mainboard no tiene FingerPrint, por lo que se omite la prueba'
      })
    }
  }, [isLoading])

  return (
    <BaseLayout>
      <Card className="p-10">
        <CardBody>Ejecutando FingerPrint...</CardBody>
      </Card>
    </BaseLayout>
  )
}

export default FingerPrintTest
