// import tests from '../data/testParams'
import { ModalWelcome } from './ui'
import Tests from './Tests'

import useCloseModal from './hooks/useCloseModal'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { clearHpEvents, runHPBackgroundTests } from '@renderer/services/internalServices'
import useCreateConfig from '@renderer/data/useCreateConfig'

function TestSelector() {
  const { open, changeOpen } = useCloseModal()
  const location = useLocation()
  const numEmpleado = location.state.numEmpleado

  const { ProfileData, tests } = useCreateConfig()

  // Limpiamos los eventos del eventViewer relacionados con HPDiag y matamos los procesos relacionados con este
  //@ts-ignore
  const { isSuccess: isClearSuccess } = useQuery({
    queryKey: ['clearEvent'],
    queryFn: () => clearHpEvents(),
    refetchOnWindowFocus: false,
    retry: false
  })

  // Ejecutamos en el background desde que inicia la app el test de bateria y disco
  //@ts-ignore
  const { data } = useQuery({
    queryKey: ['runHpBackground'],
    queryFn: () => runHPBackgroundTests(),
    refetchOnWindowFocus: false,
    enabled: isClearSuccess,
    retry: false
  })

  return (
    <>{ProfileData && tests ? !open ? (
      <Tests tests={tests} ProfileData={ProfileData} user={numEmpleado} />
    ) : (
      <ModalWelcome tests={tests} onOpenChange={changeOpen} />
    ) : <h1>Cargando...</h1>}
    </>
  )
}

export default TestSelector
