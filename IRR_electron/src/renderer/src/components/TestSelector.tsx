// import tests from '../data/testParams'
import { ModalWelcome } from './ui'
import tests from '../data/paramsTests'
import Tests from './Tests'
import useCloseModal from './hooks/useCloseModal'

function TestSelector() {
  const { open, changeOpen } = useCloseModal()

  return <>{!open ? <Tests tests={tests} /> : <ModalWelcome onOpenChange={changeOpen} />}</>
}

export default TestSelector
