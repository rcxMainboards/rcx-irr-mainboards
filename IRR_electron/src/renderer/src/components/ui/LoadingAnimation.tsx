import GridLoader from 'react-spinners/GridLoader'
import BaseLayout from './baseLayout'

function LoadingAnimation() {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center gap-2">
        <GridLoader color="white" />
        <p className="text-2xl font-bold text-white">Cargando</p>
      </div>
    </BaseLayout>
  )
}

export default LoadingAnimation
