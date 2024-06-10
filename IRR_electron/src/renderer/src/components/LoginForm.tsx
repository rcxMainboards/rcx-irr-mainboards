import { Input, Button, Divider } from '@nextui-org/react'
import { useForm, Controller } from 'react-hook-form'
import { ModalInstruccions, ModalFAQ, ExitButton } from './ui'
import { validateSNB } from '../services/mainboard'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
// import { useEffect } from 'react'

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
    setError,
    getValues,
    formState: { errors }
  } = useForm<IFormInput>({
    mode: 'onSubmit',
    defaultValues: { CT: '', NumEmpleado: '' }
  })

  const navigate = useNavigate()

  // useEffect(() => { // => Go to test Menu if app is in dev mode
  //   window.api.getAppStatus().then((status: boolean) => {
  //     if (!status) {
  //       navigate('/TestMenu', {
  //         state: { numEmpleado: '00000' }
  //       })
  //     }
  //   })
  // }, [])

  const { mutate } = useMutation({
    mutationFn: validateSNB,
    onSuccess: () => {
      navigate('/TestMenu', {
        state: { numEmpleado: getValues('NumEmpleado') }
      })
    },
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.data?.detail) {
        setError('CT', { message: error.response.data.detail })
      }
    }
  })

  return (
    <section className="grid min-h-screen place-content-center bg-gradient-l p-10 text-lg text-text-950">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(({ CT }) => {
            mutate(CT.toUpperCase())
          })()
        }}
        className="flex w-[28rem] flex-col rounded-md border bg-background-50 px-12 py-12  text-text-700 shadow-xl"
      >
        <h1 className="mb-8 inline-block bg-gradient-l bg-clip-text text-center text-4xl font-bold text-transparent">
          Bienvenido a PcaaS
        </h1>
        <div className="flex flex-col gap-3">
          <Controller
            name="CT"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                maxLength={19}
                type="text"
                label="Numero de Serial"
                variant="bordered"
                isClearable
                isInvalid={!!errors.CT}
                errorMessage={errors.CT?.message}
                onClear={() => {
                  setValue('CT', '')
                  clearErrors('CT')
                }}
                onChange={(e) => {
                  setValue('CT', e.target.value)
                  clearErrors('CT')
                }}
                placeholder="Escribe el Numbero de Serial de la unidad"
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
                maxLength={19}
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

          <section className="mt-3 flex flex-col gap-3 ">
            <Button
              className="bg-primary-700 font-semibold text-white"
              type="submit"
            >
              Validar Información
            </Button>
            <ExitButton />
          </section>

          <Divider />
        </div>
        <section className="mt-4">
          <div className="w-full">
            <ModalInstruccions />
            <ModalFAQ />
          </div>
        </section>
      </form>
    </section>
  )
}

export default LoginForm
