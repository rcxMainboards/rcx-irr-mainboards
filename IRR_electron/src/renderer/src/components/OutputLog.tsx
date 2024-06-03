import { OutputTable, ExitButton } from '../components/ui/index'
import BaseLayout from './ui/baseLayout'
import { Card, CardHeader } from '@nextui-org/react'
import { TbReportSearch } from 'react-icons/tb'
import { useQuery, useMutation } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getMainboardProps, sendOutputLog } from '../services/mainboard'
import { AxiosError } from 'axios'
import clsx from 'clsx'

function OutputLog({ Results, user }) {
  const [message, setMessage] = useState('')

  const { isLoading, data } = useQuery({
    queryKey: ['propMB'],
    queryFn: getMainboardProps, // conseguir los datos de la placa
    retry: false,
    refetchOnWindowFocus: false
  })

  const { mutate, isPending, isSuccess, isError } = useMutation({
    // subir los datos de la placa con junto con los resultados de las pruebas
    mutationFn: (args: { tests: any; Passed: any; mainboard: any; user: string, mb_test_type: string }) =>
      sendOutputLog(args),
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
    }
  })

  useEffect(() => {
    if (!isLoading && data) {
      const isPassed = Results.every((test) => test.details.result)
      const mainboardProfile = data

      const profileMBPcAs = { ...mainboardProfile, serial_number: mainboardProfile.SerialNumber_hp }

      mutate({
        tests: Results,
        Passed: isPassed,
        mainboard: profileMBPcAs,
        user: user,
        mb_test_type: 'PCaaS'
      })
    }
  }, [isLoading, data])

  return (
    <BaseLayout>
      <Card>
        <div className="m-4 flex h-full items-center gap-10 px-10 pb-5 text-text-700">
          <main className="mt-10 w-[40rem]">
            <CardHeader className=" flex items-center">
              <h1 className="text-4xl font-bold">Resultados</h1>
              <TbReportSearch size={40} />
            </CardHeader>
            <OutputTable Results={Results} />
          </main>
          <div className="flex h-full flex-col ">
            <h1 className="text-5xl font-bold">Estatus de Guardado</h1>
            <div className="m-4 ">
              {isPending ? (
                <h1 className="text-2xl font-bold">Subiendo...</h1>
              ) : (
                <div className="max-w-[30rem] overflow-auto break-words text-center">
                  <p
                    className={clsx('rounded-lg p-3 text-lg text-white', {
                      'bg-danger-500 ': isError,
                      ' bg-success-500': isSuccess
                    })}
                  >
                    {message}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className=" mt-auto">
            <ExitButton />
          </div>
        </div>
      </Card>
    </BaseLayout>
  )
}

export default OutputLog
