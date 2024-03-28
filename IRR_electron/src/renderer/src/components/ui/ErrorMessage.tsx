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
        'Error inesperado'
      )}
    </div>
  )
}

export default ErrorMessage
