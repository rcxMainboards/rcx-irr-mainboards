import BaseLayout from './baseLayout'
import ExitButton from './ExitButton'
import { Card, CardBody } from '@nextui-org/react'
function EhternetError() {
  return (
    <>
      <BaseLayout>
        <Card>
          <CardBody className="flex max-w-[50rem] flex-col items-center gap-2 p-5 text-center">
            <h1 className="text-5xl font-bold">
              No se puede iniciar la aplicación
            </h1>
            <p className="text-2xl">
              El perfil de este Mainboard tiene marcado que se debe usar el
              puerto de ethernet fisico, y se detecto que se esta conectando por
              USB.
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

export default EhternetError
