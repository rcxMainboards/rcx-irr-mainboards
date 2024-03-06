// import tests from '../data/testParams'
import { ModalWelcome } from './ui'
import useStartTests from './TestComponents/hooks/useStartTests'
import tests from '../data/paramsTests'
import Tests from './Tests'

function TestSelector() {
  const { start, open, endGuide } = useStartTests()

  return (
    <>
      <ModalWelcome start={start} />
      <Tests tests={tests} open={open} endGuide={endGuide} />
    </>
  )
}

export default TestSelector
