import { MainboardNotFound, NetworkError } from '../ui/index'
import { networkError } from '../../utils/constants'

function ErrorMessage({ errorMessage }: any) {
  console.log(errorMessage)
  return (
    <div>
      {errorMessage.message === networkError ||
      errorMessage.code === 'ECONNABORTED' ? (
        <NetworkError />
      ) : errorMessage.response && errorMessage.response.status === 404 ? (
        <MainboardNotFound />
      ) : (
        <p className="text-2xl">Ocurrio un error inesperado</p>
      )}
    </div>
  )
}

export default ErrorMessage
