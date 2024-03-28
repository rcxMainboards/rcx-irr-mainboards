import LoginForm from '../components/LoginForm'
import useMainboard from '../components/hooks/useMainboard'
import { LoadingAnimation, ErrorMessage } from '../components/ui/index'
import { EthernetError } from '../components/ui/index'

function Aplicationstart() {
  const { netWorkError, EhternetError, isLoading } = useMainboard()

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
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
