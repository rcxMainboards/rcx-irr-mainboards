import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody, Button } from '@nextui-org/react'
import { useEffect } from 'react'
import { executeWifiTest } from './services/wifi'
import { errorData } from '../../../utils/functions'
import { Spinner } from "@nextui-org/react";
import { useState } from 'react'


function WifiTest({ TestName, nextTest }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [tries, setTries] = useState(2)
  
  const retry = () => {
      setError('')
      setLoading(true)
      executeWifiTest('b').then((res) => {
        console.log(res)
        nextTest(TestName, {
          result: true,
          message: "Test de Wifi Exitoso"
        })
      }).catch((err) => {
        setError(errorData(err))
        setTries(tries - 1)
      }).finally(() => {
        setLoading(false)
      }) 
  }


  useEffect(() => {
    setLoading(true)
    executeWifiTest('b').then((res) => {
      console.log(res)
      nextTest(TestName, {
        result: true,
        message: "Test de Wifi Exitoso"
      })
    }).catch((err) => {
      console.log(err)
      setError(errorData(err))
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    if(tries === 0) {
      nextTest(TestName, { result: false, message: error })
    }
  }, [tries])


  return (
    <BaseLayout>
      <Card className="p-10">
        <CardBody>
          {loading && (
            <div className='flex gap-4 items-center'>
              <p>Ejecutando Prueba de Wifi</p>
              <Spinner color="primary" />
            </div>
          )}
          {error && (
            <div className='flex flex-col gap-4 items-center'>
              <p className='text-danger-400 font-bold text-2xl'>Ocurrio un error al ejecutar la prueba de Wifi</p>
              <div>
                <p className='text-center text-lg font-bold'>Mensaje de error:</p>
                <p className='semi-bold text-lg'>{error}</p>
              </div>
              <p>Intentos restantes: {tries}</p>
              <Button color='primary' size="lg" onClick={retry}>Volver a intentar</Button>
            </div>
          )}
        </CardBody>
      </Card>
    </BaseLayout>
  )
}

export default WifiTest