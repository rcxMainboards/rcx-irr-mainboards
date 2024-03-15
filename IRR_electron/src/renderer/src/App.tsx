import Aplicationstart from './components/Aplicationstart'
import { WarningStartingApp } from './components/ui'
import useCloseModal from './components/hooks/useCloseModal'

function App(): JSX.Element {
  const { open, changeOpen } = useCloseModal()

  return (
    <>
      {!open ? (
        <Aplicationstart />
      ) : (
        <WarningStartingApp onOpenChange={changeOpen} />
      )}
    </>
  )
}

export default App
