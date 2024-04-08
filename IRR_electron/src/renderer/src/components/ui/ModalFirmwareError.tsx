import BaseLayout from './baseLayout'
import ExitButton from './ExitButton'
import { Card, CardBody } from '@nextui-org/react'
function ModalFirmwareError() {
  return (
    <>
      <BaseLayout>
        <Card>
          <CardBody className="flex max-w-[50rem] flex-col items-center gap-2 p-5 text-center">
            <h1 className="text-5xl font-bold">El Firmware del mainboad no esta actualizado</h1>
            <p className="text-2xl">
              El Firmware del Mainboard no esta actualizado, por favor actualiza el firmware antes
              de iniciar las pruebas.
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

export default ModalFirmwareError
