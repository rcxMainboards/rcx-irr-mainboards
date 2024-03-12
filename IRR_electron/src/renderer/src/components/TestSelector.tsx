// import tests from '../data/testParams'
import { ModalWelcome } from './ui'
import tests from '../data/paramsTests'
import Tests from './Tests'
import useCloseModal from './hooks/useCloseModal'
import { useLocation } from 'react-router-dom'

function TestSelector() {
  const { open, changeOpen } = useCloseModal()
  const location = useLocation()
  const numEmpleado = location.state.numEmpleado
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
