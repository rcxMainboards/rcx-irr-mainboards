import BaseLayout from './baseLayout'
import ExitButton from './ExitButton'
import { Card, CardBody } from '@nextui-org/react'
function NetworkError() {
  return (
    <>
      <BaseLayout>
        <Card>
          <CardBody className="flex max-w-[50rem] flex-col items-center gap-2 p-5 text-center">
            <h1 className="text-5xl font-bold">No se pudo establecer conexión el servidor</h1>
            <p className="text-2xl">
              Por favor, verifique su conexión al servidor por ethernet, si el problema persiste,
              comuniquese con ingeniería.
            </p>
            <div className="mt-3 w-full">
              <ExitButton />
            </div>
          </CardBody>
        </Card>
      </BaseLayout>
    </>
  )
}

export default NetworkError
