import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { executeBurning } from './Services/burning'
import { errorData } from '../../../utils/functions'
function BurningTest({ TestName, nextTest }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['burningTest'],
    queryFn: executeBurning,
    retry: false,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (!isLoading && !error && data) {
      if (typeof data === 'object' && data !== null && 'message' in data) {
        let messageTests = data.message
          .map((test) => `${test['Test Name']}: ${test['Result Errors']}`)
          .join(', ')

        nextTest(TestName, {
          result: true,
          message: messageTests
        })
      }
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
            <p>Ejecutando Burning...</p>
          ) : error ? (
            errorData(error)
          ) : (
            'Prueba de Burning finalizada'
          )}
        </CardBody>
      </Card>
    </BaseLayout>
  )
}

export default BurningTest
