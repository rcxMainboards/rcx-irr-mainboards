import { useEffect, useState } from 'react'

export default function useUpdateCheck() {
  const [updateChecking, setUpdateChecking] = useState(true)
  const [updateDownloading, setUpdateDownloading] = useState(false)

  useEffect(() => {
    window.api.send('check-for-updates')

    window.api.on('update-available', (_event) => {
      setUpdateChecking(false)
      setUpdateDownloading(true)
    })

    window.api.on('update-not-available', () => {
      setUpdateChecking(false)
    })
  }, [])

  return { updateChecking, updateDownloading }
}
