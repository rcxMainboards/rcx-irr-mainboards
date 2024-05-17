// import tests from '../data/testParams'
import { ModalWelcome } from './ui'
import tests from '../data/paramsTests'
import Tests from './Tests'
import useCloseModal from './hooks/useCloseModal'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { clearHpEvents, runHPBackgroundTests } from '@renderer/services/internalServices'

function TestSelector() {
  const { open, changeOpen } = useCloseModal()
  const location = useLocation()
  const numEmpleado = location.state.numEmpleado

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
    <>
      {!open ? (
        <Tests tests={tests} user={numEmpleado} />
      ) : (
        <ModalWelcome onOpenChange={changeOpen} />
      )}
    </>
  )
}

export default TestSelector
