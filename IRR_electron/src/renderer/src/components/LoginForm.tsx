import { Input, Button, Divider } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import ModalInstruccions from './ui/ModalInstruccions'
import ModalFAQ from './ui/ModalFAQ'

interface IFormInput {
  CT: string
  NumEmpleado: string
}

function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm<IFormInput>()

  return (
    <section className="grid min-h-screen place-content-center bg-gradient-to-l from-[#244a65] to-[#7cb4df] p-10 text-lg text-text-950">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex w-[25rem] flex-col rounded-md border bg-background-50 px-12 py-12  shadow-xl"
      >
        <h1 className="mb-8 inline-block bg-gradient-to-l from-[#244a65] to-[#7cb4df] bg-clip-text text-center text-3xl font-bold text-transparent">
          Bienvenido IRR MB Pruebas
        </h1>
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            label="CT"
            variant="bordered"
            placeholder="Escribe el CT de la Mainboard"
            isRequired
            {...register('CT')}
          />

          <Input
            isClearable
            type="text"
            label="Numero de empleado"
            variant="bordered"
            placeholder="Escribe tu Numbero de Empleado"
            isRequired
            {...register('NumEmpleado')}
          />

          <div className="mt-3 flex flex-col gap-3 ">
            <Button className="bg-primary-700 text-white" type="submit">
              Iniciar las Pruebas
            </Button>
            <Button className="bg-secondary-200">Salir</Button>
          </div>

          <Divider />
        </div>
        <section className="mt-4 flex justify-around">
          <ModalInstruccions />
          <ModalFAQ />
        </section>
      </form>
    </section>
  )
}

export default LoginForm
