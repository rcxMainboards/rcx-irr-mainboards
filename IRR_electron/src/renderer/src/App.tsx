import LoginForm from './components/LoginForm'
import useMainboard from './components/hooks/useMainboard'
import { LoadingAnimation, ErrorMessage } from './components/ui/index'
function App(): JSX.Element {
  const { isLoadingRegistration, error } = useMainboard()

  return (
    <div>
      {isLoadingRegistration ? (
        <LoadingAnimation />
      ) : error ? (
        <ErrorMessage errorMessage={error?.message} />
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default App
