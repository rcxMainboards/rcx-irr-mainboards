import { MainboardNotFound, NetworkError } from '../ui/index'
import { networkError } from '../../utils/constants'

function ErrorMessage({ errorMessage }: any) {
  return (
    <div>
      {errorMessage === networkError || errorMessage.code === 'ECONNABORTED' ? (
        <NetworkError />
      ) : (
        <MainboardNotFound />
      )}
    </div>
  )
}

export default ErrorMessage
