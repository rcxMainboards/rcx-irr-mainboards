import LoginForm from '../components/LoginForm'
import useMainboard from '../components/hooks/useMainboard'
import { LoadingAnimation, ErrorMessage } from '../components/ui/index'
import { EthernetError } from '../components/ui/index'

function Aplicationstart() {
  const {
    isLoadingRegistration,
    netWorkError,
    EhternetError,
    loadingEthernet,
    loadingServer
  } = useMainboard()

  return (
    <div>
      {loadingServer ? (
        <LoadingAnimation />
      ) : isLoadingRegistration ? (
        <LoadingAnimation /> // Esperamos a que la peticion sobre la informacion de la mainboard se complete
      ) : netWorkError ? ( // si hay un error de red, mostramos el mensaje de error o de que el mainboard no esta registrado.
        <ErrorMessage errorMessage={netWorkError?.message} />
      ) : loadingEthernet ? ( // Esperamos a que la app compruebe la conexion ethernet
        <LoadingAnimation />
      ) : !EhternetError ? ( // Si no hay error de ethernet, mostramos el formulario de login
        <LoginForm />
      ) : (
        <EthernetError />
      )}
    </div>
  )
}

export default Aplicationstart
