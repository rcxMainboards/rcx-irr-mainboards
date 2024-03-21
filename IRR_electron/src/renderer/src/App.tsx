import Aplicationstart from './components/Aplicationstart'
import { WarningStartingApp, UpdateInProgress } from './components/ui'
import useCloseModal from './components/hooks/useCloseModal'
import useUpdateCheck from './components/hooks/useUpdateCheck'

function App(): JSX.Element {
  const { open, changeOpen } = useCloseModal()
  const { updateDownloading, checkingForUpdate } = useUpdateCheck()

  return (
    <>
      {checkingForUpdate ? ( // Si la aplicación está verificando las actualizaciones, no renderiza nada
        <>
          <div className="flex h-screen flex-col items-center justify-center bg-gradient-l">
            <h1 className="text-4xl font-bold text-white">
              Verificando actualizaciones...
            </h1>
          </div>
        </>
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
