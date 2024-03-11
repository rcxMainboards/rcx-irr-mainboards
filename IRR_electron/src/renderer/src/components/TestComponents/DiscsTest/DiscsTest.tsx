import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { executeDiskTest } from './services/disc'
import { errorData } from '../../../utils/functions'

function DiscsTest({ TestName, nextTest, profile }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['DiscsTest'],
    queryFn: executeDiskTest,
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !profile.integrated
  })

  return (
    <BaseLayout>
      <Card className="p-10">
        <CardBody>
          <p>Ejecutando la prueba de discos...</p>
        </CardBody>
      </Card>
    </BaseLayout>
  )
}

export default DiscsTest
