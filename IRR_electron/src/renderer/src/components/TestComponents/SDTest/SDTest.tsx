import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { executeSDTest } from './services/sd'
import { errorData, errorStatus } from '../../../utils/functions'
import { ModalSDProtected } from '../../ui/index'
import { useDisclosure } from '@nextui-org/react'

function SDTest({ TestName, nextTest, profile }) {
  const { isLoading, error, refetch, isSuccess } = useQuery({
    queryKey: ['SDTest'],
    queryFn: executeSDTest,
    enabled: profile.sd_reader,
    retry: false,
    refetchOnWindowFocus: false
  })

  const { onOpen, isOpen, onOpenChange } = useDisclosure()

  const handleResetTest = () => {
    refetch()
  }

  useEffect(() => {
    if (!profile.sd_reader) {
      nextTest(TestName, {
        result: true,
        message: 'Este Mainboard no cuenta con lector SD segun el perfil'
      })
    }
    if (isSuccess) {
      nextTest(TestName, {
        result: true,
        message: 'Prueba de SD exitosa'
      })
    } else if (!isLoading && error) {
      const statusError = errorStatus(error)
      if (statusError === 422) {
        onOpen()
      } else {
        nextTest(TestName, {
          result: false,
          message: errorData(error)
        })
      }
    }
  }, [isLoading])

  return (
    <BaseLayout>
      <>
        <Card className="p-10">
          <CardBody>
            {isLoading ? (
              <p>Ejecutando Prueba de SD...</p>
            ) : error ? (
              errorData(error)
            ) : (
              'Termino la prueba de SD'
            )}
          </CardBody>
        </Card>
        <ModalSDProtected
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          reset={handleResetTest}
          error={error}
        />
      </>
    </BaseLayout>
  )
}

export default SDTest
