import LoginForm from '../components/LoginForm'
import useMainboard from '../components/hooks/useMainboard'
import { LoadingAnimation, ErrorMessage } from '../components/ui/index'
import { EthernetError, ModalFirmwareError } from '../components/ui/index'

function Aplicationstart() {
  const { netWorkError, EhternetError, errorFirmware, isLoading } = useMainboard()

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : errorFirmware ? (
        <ModalFirmwareError />
      ) : netWorkError ? (
        <ErrorMessage errorMessage={netWorkError} />
      ) : !EhternetError ? (
        <LoginForm />
      ) : (
        <EthernetError />
      )}
    </div>
  )
}

export default Aplicationstart
