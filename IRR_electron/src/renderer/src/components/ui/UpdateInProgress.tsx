import ClimbBox from 'react-spinners/ClimbingBoxLoader'
import BaseLayout from './baseLayout'

export default function UpdateInProgress() {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center gap-7 text-2xl text-white">
        <h1 className="font-bold">
          Se esta descargando una nueva actualización...
        </h1>
        <p>No cierre la aplicación</p>
        <ClimbBox color="white" size={40} />
      </div>
    </BaseLayout>
  )
}
