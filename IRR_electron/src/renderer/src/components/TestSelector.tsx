// import tests from '../data/testParams'
import { ModalWelcome } from './ui'
import tests from '../data/paramsTests'
import Tests from './Tests'
function TestSelector() {
  return (
    <>
      <ModalWelcome />
      <Tests tests={tests} />
    </>
  )
}

export default TestSelector
