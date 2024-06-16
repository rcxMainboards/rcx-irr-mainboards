// import tests from '../data/testParams'
import { ModalWelcome } from './ui'
import Tests from './Tests'

import useCloseModal from './hooks/useCloseModal'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import useCreateConfig from '@renderer/data/useCreateConfig'
import { clearHpEvents } from '@renderer/services/internalServices'

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
