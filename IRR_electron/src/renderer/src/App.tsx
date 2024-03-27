import Aplicationstart from './components/Aplicationstart'
import {
  WarningStartingApp,
  ModalCheckUpdates,
  UpdateInProgress
} from './components/ui'
import useCloseModal from './components/hooks/useCloseModal'
import useUpdateCheck from './components/hooks/useUpdateCheck'
import { useState, useEffect } from 'react'

function App(): JSX.Element {
  const { open, changeOpen } = useCloseModal()
  const { updateDownloading, updateChecking } = useUpdateCheck()
  const [AppStatus, setAppStatus] = useState<boolean>()

  useEffect(() => {
    window.api.getAppStatus().then((status: boolean) => {
      setAppStatus(status)
    })
  }, [])

  return (
    <>
      {updateChecking && AppStatus ? (
        <ModalCheckUpdates />
      ) : updateDownloading && AppStatus ? (
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
