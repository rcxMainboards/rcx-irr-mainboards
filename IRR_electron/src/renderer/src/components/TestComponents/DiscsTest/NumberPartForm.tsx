import {
  Input,
  Button,
  Divider,
  Card,
  CardBody,
  CardHeader,
  Spinner
} from '@nextui-org/react'
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { getPartNumber } from './services/disc'
import { AxiosError } from 'axios'
import { useState, useEffect } from 'react'
import { executeDiskTestWihtIntegrated } from './services/disc'
import { runHPDisk, getHpResults } from '@renderer/services/internalServices'
import useCountDown from '../hooks/useCountDown'
// import { executeDiskTest } from './services/disc'
// import { errorData } from '../../../utils/functions'
// import { useQuery } from '@tanstack/react-query'



function NumberPartForm({ TestName, nextTest, profile }) {
  const [tries, setTries] = useState(3)
  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    control,
    setValue,
    clearErrors,
    setError,
    formState: { errors }
  } = useForm({
    mode: 'onSubmit',
    defaultValues: { partNumber: '' }
  })

  useEffect(() => {
    if (tries === 0) {
      nextTest(TestName, {
        result: false,
        message: 'Se agotaron los intentos para validar el numero de parte'
      })
    }
  }, [tries])

  const { start } = useCountDown(() => getHpResults().then((data) => {
    checkTestDiskResult(data)
  }).catch((err) => console.log(err)))

  useEffect(() => {
    const disktest = async () => {
      setLoading(true)
      await runHPDisk()
      start(80)
    }
    disktest()
  }, [])


  const checkTestDiskResult = (hpResultData) => {
    if (hpResultData) {
      const { hpResults: { DiskReadVerify } } = hpResultData
      const testHpPassResult = DiskReadVerify.every((disk) => disk.Result === "ExecutionPassed")
      const generalTestResult = testHpPassResult

      if (DiskReadVerify === undefined) {
        nextTest(TestName, {
          result: false,
          message: "No se obtuvo resultado de la prueba de HP"
        })
      } else if (generalTestResult) {
        console.log("Prueba de discos con prueba de HP exitosa")
      } else {
        nextTest(TestName, {
          result: generalTestResult,
          message: `${!testHpPassResult ? 'La verificación de disco de HP Fallo' : ''}`
        })
      }
    }
    setLoading(false)
  }

  

  const { mutate: mutateInternalApi } = useMutation({
    mutationFn: (args: { partNumber: any; profile: any }) =>
      executeDiskTestWihtIntegrated(
        args.partNumber?.toUpperCase(),
        args.profile
      ),
    onSuccess: () => {
      nextTest(TestName, {
        result: true,
        message: 'Prueba discos exitosa'
      })
    },
    retry: false,
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.data?.detail) {
        nextTest(TestName, {
          result: false,
          message: error.response?.data?.detail
        })
      }
    }
  })

  const { mutate, isPending } = useMutation({
    mutationFn: (args: { partNumber: any; profile: any }) =>
      getPartNumber(args.partNumber.toUpperCase(), args.profile),
    onSuccess: ({ part }) => {
      mutateInternalApi({ partNumber: part, profile })
    },
    retry: false,
    onError: (error) => {
      if (error instanceof AxiosError && error.response?.data?.detail) {
        setError('partNumber', { message: error.response.data.detail })
        setTries((prev) => prev - 1)
      }
    }
  })

  return (
    <Card className="w-[60rem] text-text-700">
      <CardBody className="grid grid-cols-[2fr_3fr] gap-10 px-8 py-10">
        { loading ? <div className='flex gap-4 items-center justify-center'>
              <p>Ejecutando Prueba de Discos</p>
              <Spinner color="primary" />
          </div> : 
          <>
          <section className="flex gap-10">
          <div>
            <CardHeader>
              <h1 className="text-2xl font-bold">Perfil de Mainboard</h1>
            </CardHeader>
            <Divider />
            <p className="mt-3">
              Este perfil de Mainboard tiene partes integradas, por lo que es
              necesario proveer el numero de parte para poder continuar con el
              proceso.
            </p>
          </div>
          <Divider orientation="vertical" />
        </section>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(({ partNumber }) => {
              if (!/(-601|-001)$/.test(partNumber)) {
                // Asegurarse de que partNumber termine en -601 o -001
                setError('partNumber', {
                  message:
                    'Un número de parte válido debe terminar en -601 o -001'
                })
                return
              }
              mutate({ partNumber, profile })
            })()
          }}
        >
          <CardHeader>
            <h1 className="text-2xl font-bold">Numero de Parte</h1>
          </CardHeader>
          <Divider />
          <section className="mt-5 flex flex-col gap-3">
            <Controller
              name="partNumber"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="text"
                  maxLength={25}
                  label="Numero de Parte"
                  variant="bordered"
                  placeholder="Escribe el Numero de Parte"
                  isRequired
                  isClearable
                  isInvalid={!!errors.partNumber}
                  errorMessage={errors.partNumber?.message}
                  onClear={() => {
                    setValue('partNumber', '')
                    clearErrors('partNumber')
                  }}
                  onChange={(e) => {
                    setValue('partNumber', e.target.value.trim())
                    clearErrors('partNumber')
                  }}
                />
              )}
            />
            <p className="pl-1 text-sm">
              Numeros de intentos disponibles: {tries}
            </p>
            <section className="mt-3 flex flex-col gap-3 ">
              <Button
                className="bg-primary-700 font-semibold text-white"
                type="submit"
                isLoading={isPending}
              >
                {isPending ? 'Validando...' : 'Validar Información'}
              </Button>
            </section>
          </section>
        </form>
        </>}
          
        
      </CardBody>
    </Card>
  )
}

export default NumberPartForm
