import { useEffect, useState } from 'react'

export default function useUpdateCheck() {
  const [updateDownloading, setUpdateDownloading] = useState(false)
  const [checkingForUpdate, setCheckingForUpdate] = useState(true)

  useEffect(() => {
    window.api.on('checking-for-update', () => {
      setCheckingForUpdate(true) // Establece checkingForUpdate en true cuando se está verificando si hay actualizaciones
    })

    window.api.on('update-available', () => {
      setUpdateDownloading(true)
      setCheckingForUpdate(false) // Establece checkingForUpdate en false cuando hay una actualización disponible
    })

    window.api.on('update-not-available', () => {
      setUpdateDownloading(false)
      setCheckingForUpdate(false) // Establece checkingForUpdate en false cuando no hay una actualización disponible
    })

    window.api.on('update-cancelled', () => {
      setUpdateDownloading(false)
      setCheckingForUpdate(false) // Establece checkingForUpdate en false cuando no hay una actualización disponible
    })

    window.api.on('error', () => {})

    window.api.on('update-downloaded', () => {
      setUpdateDownloading(false)
    })
  }, [])

  return { updateDownloading, checkingForUpdate }
}
