import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { executeSDTest } from './services/sd'
import { errorData, errorStatus } from '../../../utils/functions'
import { ModalSDProtected } from '../../ui/index'
import { useDisclosure, Spinner } from '@nextui-org/react'

function SDTest({ TestName, nextTest, profile }) {
  const { isLoading, error, refetch, isSuccess, isFetching } = useQuery({
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
    } else if (!isFetching) {
      nextTest(TestName, {
        result: true,
        message: 'Este Mainboard no cuenta con lector SD segun el perfil'
      })
    }
  }, [isLoading])

  return (
    <BaseLayout>
      <>
        <Card className="p-10">
          <CardBody>
            {isLoading ? (
              <div className="flex items-center gap-4">
                <p>Ejecutando Prueba de SD</p>
                <Spinner color="primary" />
              </div>
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
