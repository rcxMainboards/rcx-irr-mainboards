import { Input, Button, Divider } from '@nextui-org/react'
import ExitButton from './ui/ExitButton'
import { useForm, Controller } from 'react-hook-form'
import ModalInstruccions from './ui/ModalInstruccions'
import ModalFAQ from './ui/ModalFAQ'

interface IFormInput {
  CT: string
  NumEmpleado: string
}

function LoginForm(): JSX.Element {
  const {
    handleSubmit,
    control,
    clearErrors,
    setValue,
    formState: { errors }
  } = useForm<IFormInput>({
    mode: 'onSubmit',
    defaultValues: { CT: '', NumEmpleado: '' }
  })

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
          <Controller
            name="CT"
            control={control}
            rules={{
              validate: (value) =>
                value === 'PSKQEH3MYHYQIK' ||
                'CT no coincide con Mainboard. Verifique la correspondencia.'
            }}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                label="CT"
                variant="bordered"
                isClearable
                errorMessage={errors.CT?.message}
                onClear={() => {
                  setValue('CT', '')
                  clearErrors('CT')
                }}
                onChange={(e) => {
                  setValue('CT', e.target.value)
                  clearErrors('CT')
                }}
                placeholder="Escribe el CT de la Mainboard"
                isRequired
              />
            )}
          />

          <Controller
            name="NumEmpleado"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="text"
                label="Numero de empleado"
                variant="bordered"
                isClearable
                onClear={() => {
                  setValue('NumEmpleado', '')
                  clearErrors('NumEmpleado')
                }}
                onChange={(e) => {
                  setValue('NumEmpleado', e.target.value)
                  clearErrors('NumEmpleado')
                }}
                placeholder="Escribe tu Numbero de Empleado"
                isRequired
              />
            )}
          />

          <div className="mt-3 flex flex-col gap-3 ">
            <Button className="bg-primary-700 font-semibold text-white" type="submit">
              Iniciar las Pruebas
            </Button>
            <ExitButton />
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
