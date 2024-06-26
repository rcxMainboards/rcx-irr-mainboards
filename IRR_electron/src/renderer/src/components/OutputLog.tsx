import { OutputTable, ExitButton } from '../components/ui/index'
import BaseLayout from './ui/baseLayout'
import { Card, CardHeader, Spinner } from '@nextui-org/react'
import { TbReportSearch } from 'react-icons/tb'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getMainboardProps, sendOutputLog } from '../services/mainboard'
import { AxiosError } from 'axios'
import clsx from 'clsx'

function OutputLog({ Results, user }) {
  const [message, setMessage] = useState('')
  const [isPassed, setIsPassed] = useState()

  const { isLoading, data } = useQuery({
    queryKey: ['mbProfile'],
    queryFn: getMainboardProps, // conseguir los datos de la placa
    retry: false,
    refetchOnWindowFocus: false
  })

  const { mutate, status, isSuccess, isError } = useMutation({
    // subir los datos de la placa con junto con los resultados de las pruebas
    mutationFn: (args: { tests: any; Passed: any; mainboard: any; user: string, mb_test_type: string }) => sendOutputLog(args),
    onSuccess: (data) => {
      setMessage(data.message)
    },
    retry: false,
    onError: (error) => {
      if (error instanceof AxiosError) {
        setMessage(
          'Ocurrio un error al tratar de subir los resultados de la pruebas, puede ser que la conexion con el servidor fallo o que el servidor no este disponible, comuniquese con ingenieria.'
        )
      }
    },
  
  })

  useEffect(() => {
      if (!isLoading && data) {
        const isPassed = Results.every((test) => test.details.result)
        setIsPassed(isPassed)
        const mainboardProfile = data
        const {product, sku} = mainboardProfile
        const newProduct = `${product}&${sku}`

        // TODO, se tiene que modificar el product enviado para que matche con el tipo de perfil registrado en Admin y no provoque un error

        mutate({
          tests: Results,
          Passed: isPassed,
          mainboard: {...mainboardProfile, product: newProduct, serial_number: mainboardProfile.SerialNumber_hp}, //Cambiar
          user: user,
          mb_test_type: 'PCaaS'
        })
      }
    
  }, [isLoading, data])

  return (
    <BaseLayout>
      <Card>
        <div className="m-4 flex gap-12 h-full px-8 items-center py-2 text-text-700">
          <main className="mt-10 w-[40rem]">
            <CardHeader className=" flex items-center">
              <h1 className="text-4xl font-bold">Resultados</h1>
              <TbReportSearch size={40} />
            </CardHeader>
            <OutputTable Results={Results} />
          </main>
          <div className='flex-1 items-center h-full mt-8'>
              {status === 'pending' || status === 'idle' ? (
                <div className='p-2 flex flex-col items-center justify-center'>
                  <Spinner size='lg' color="primary" />
                  <p className="text-2xl">Subiendo resultados...</p>
                </div>
              ) : (
                <div className="max-w-[30rem] flex flex-col gap-2 overflow-auto break-words text-center">
                  <h1 className="text-3xl text-center font-bold">Estatus de Guardado</h1>
                  <p
                    className={clsx('rounded-lg p-3 text-lg text-white', {
                      'bg-danger-500 ': isError,
                      ' bg-success-500': isSuccess
                    })}
                  >
                    {message}
                  </p>
                  <div>
                    <h1 className="text-3xl p-2 text-center font-bold">Estatus de pruebas</h1>
                    {isPassed ? ( // si todas las pruebas pasaron  
                      <p className="text-lg rounded-md p-2 bg-success-500 text-white">Todas las pruebas pasaron</p>
                    ) : (
                      <p className="text-lg rounded-md bg-danger-500 p-2 text-white">Una prueba o varias fallaron</p>
                    )}
                  </div>
                  <div className='mt-2'>
                  <ExitButton /> 
                  </div>
                </div>
              )}
          </div>
        </div>
      </Card>
    </BaseLayout>
  )
}

export default OutputLog
