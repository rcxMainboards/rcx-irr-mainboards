import Aplicationstart from './components/Aplicationstart'
import {
  WarningStartingApp,
  ModalCheckUpdates,
  UpdateInProgress
} from './components/ui'
import useCloseModal from './components/hooks/useCloseModal'
import useUpdateCheck from './components/hooks/useUpdateCheck'

function App(): JSX.Element {
  const { open, changeOpen } = useCloseModal()
  const { updateDownloading, updateChecking } = useUpdateCheck()

  return (
    <>
      {updateChecking ? (
        <ModalCheckUpdates />
      ) : updateDownloading ? (
        <UpdateInProgress />
      ) : !open ? (
        <Aplicationstart />
      ) : (
        <WarningStartingApp onOpenChange={changeOpen} />
      )}
    </>
  )
}

export default App
