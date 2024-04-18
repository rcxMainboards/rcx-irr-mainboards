import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Spinner } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { executeBurning } from './Services/burning'
import { errorData } from '../../../utils/functions'
import { useEffect } from 'react'
function BurningTest({ TestName, nextTest }) {
  const { data, isSuccess, error } = useQuery({
    queryKey: ['burninTest'],
    queryFn: executeBurning,
    retry: false,
    refetchOnWindowFocus: false
  })

  useEffect(() => {
    if (isSuccess) {
      if (typeof data === 'object' && data !== null && 'message' in data) {
        let messageTests = data.message
          .map((test) => `${test['Test']}: ${test['Result']}`)
          .join(', ')
        nextTest(TestName, {
          result: true,
          message: messageTests
        })
      }
    }
    if (error) {
      nextTest(TestName, {
        result: false,
        message: errorData(error)
      })
    }
  }, [isSuccess, data, error])

  return (
    <BaseLayout>
      <Card className="p-10">
        <CardBody>
          <div className='flex gap-4 items-center'>
              <p>Ejecutando Burning</p>
              <Spinner color="primary"/>
          </div>
          {error ? errorData(error) : null}
        </CardBody>
      </Card>
    </BaseLayout>
  )
}

export default BurningTest
