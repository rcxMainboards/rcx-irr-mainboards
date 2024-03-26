import BaseLayout from './baseLayout'
import ExitButton from './ExitButton'
import { Card, CardBody } from '@nextui-org/react'
function MainboardNotFound() {
  return (
    <>
      <BaseLayout>
        <Card>
          <CardBody className="flex max-w-[50rem] flex-col items-center gap-2 p-5 text-center">
            <h1 className="text-5xl font-bold">Mainboard aun no registrada</h1>
            <p className="text-2xl">
              El <strong>SSID</strong> de esta Mainboard aun no ha sido
              registrado, por lo que todavia no se le puede procesar y ejecutar
              las pruebas,{' '}
              <strong>se le ha enviado un correo a ingeniería</strong> para que
              sea registrado, por el momento{' '}
              <strong>puede cerrar el programa e intentar mas tarde</strong>.
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

export default MainboardNotFound
