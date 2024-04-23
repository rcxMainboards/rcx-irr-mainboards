import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Spinner } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { executeDiskTest } from './services/disc'
import { errorData } from '../../../utils/functions'
import NumberPartForm from './NumberPartForm'

function DiscsTest({ TestName, nextTest, profile }) {
  const { isLoading, error, isSuccess } = useQuery({
    queryKey: ['DiscsTest'],
    queryFn: () => executeDiskTest(profile),
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !profile.integrated // la consulta se ejecutará si profile.integrated es false
  })

  useEffect(() => {
    if (!isLoading && isSuccess) {
      nextTest(TestName, {
        result: true,
        message: 'Prueba discos exitosa'
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
      {!profile.integrated ? (
        <Card className="p-10">
          <CardBody>
            <div className='flex gap-4 items-center'>
              <p>Ejecutando Prueba de Discos</p>
              <Spinner color="primary"/>
            </div>
          </CardBody>
        </Card>
      ) : (
        <NumberPartForm
          TestName={TestName}
          nextTest={nextTest}
          profile={profile}
        />
      )}
    </BaseLayout>
  )
}

export default DiscsTest
