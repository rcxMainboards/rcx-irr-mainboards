import BaseLayout from '../../ui/baseLayout'
import { Card, CardBody } from '@nextui-org/react'
// import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
// import { executeWifiTest } from './services/wifi'
// import { errorData } from '../../../utils/functions'
import { Spinner } from "@nextui-org/react";
import { useState } from 'react'

function WifiTest({ TestName, nextTest }) {
  const [loading, setLoading] = useState(false)
  

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ['WifiTest'],
  //   queryFn: executeWifiTest,
  //   retry: false,
  //   refetchOnWindowFocus: false
  // })


  // useEffect(() => {
  //   if (!isLoading && !error) {
  //     nextTest(TestName, {
  //       result: true,
  //       message: data?.detail
  //     })
  //   } else if (!isLoading && error) {
      // nextTest(TestName, {
      //   result: false,
      //   message: errorData(error)
      // })
  //   }
  // }, [isLoading])



  useEffect(() => {
    setLoading(true)
    window.api.executeWifiTest().then((res) => {
      console.log(res)
      nextTest(TestName, {
        result: true,
        message: res
      })
    }).catch((err) => {
      console.log(err)

      nextTest(TestName, {
        result: false,
        message: err
      })
      
    }).finally(() => {
      setLoading(false)
    })
  }, [])


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
        </CardBody>
      </Card>
    </BaseLayout>
  )
}

export default WifiTest
