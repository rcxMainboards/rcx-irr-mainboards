function ModalCheckUpdates() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gradient-l text-white">
      <h1 className="text-4xl font-bold ">Verificando actualizaciones...</h1>
      <p className="text-sm text-white">
        Si esta verificación falla, la aplicación cerrará, solucione esto
        revisando su conexión a internet.
      </p>
    </div>
  )
}

export default ModalCheckUpdates
