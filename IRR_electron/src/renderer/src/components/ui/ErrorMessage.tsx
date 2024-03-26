import { MainboardNotFound, NetworkError } from '../ui/index'
import { networkError } from '../../utils/constants'

function ErrorMessage({ errorMessage }: any) {
  console.log(errorMessage)
  return (
    <div>
      {errorMessage === networkError ? <NetworkError /> : <MainboardNotFound />}
    </div>
  )
}

export default ErrorMessage
