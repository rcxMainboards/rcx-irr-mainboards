import { useQuery } from '@tanstack/react-query'
import {
  getMainboardProduct,
  isMainboardRegistered,
  getMainboardProfile
} from '../../services/mainboard'
import { disableWifi, checkEthernet } from '../../services/internalServices'
import { useEffect, useState } from 'react'

function useMainboard() {
  const [loadingServer, setLoadingServer] = useState(true)

  useEffect(() => {
    async function initialServer() {
      await (window.api as any).startServer()
      setLoadingServer(false)
    }
    initialServer()
  }, [])

  const { error: errorWifi } = useQuery({
    queryKey: ['wifi'],
    queryFn: disableWifi,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !loadingServer
  })

  const { data, isLoading: LoadinginternalApi } = useQuery({
    queryKey: ['SSID'],
    queryFn: getMainboardProduct,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: !loadingServer
  })

  const ssid = data?.product

  const {
    isLoading: isLoadingRegistration,
    error: netWorkError,
    data: isRegistered
  } = useQuery({
    queryKey: ['isRegistered', ssid],
    queryFn: () => isMainboardRegistered(ssid),
    enabled: !!ssid,
    refetchOnWindowFocus: false,
    retry: false
  })

  const { data: ProfileData } = useQuery({
    queryKey: ['profile', ssid],
    queryFn: () => getMainboardProfile(ssid),
    refetchOnWindowFocus: false,
    enabled: !!isRegistered,
    retry: false
  })

  const { error: EhternetError, isLoading: loadingEthernet } = useQuery({
    queryKey: ['ethernet', ssid],
    queryFn: () => checkEthernet(ProfileData.ethernet),
    refetchOnWindowFocus: false,
    enabled: !!ProfileData,
    retry: false
  })

  return {
    isLoadingRegistration,
    netWorkError,
    EhternetError,
    loadingEthernet,
    loadingServer
  }
}
export default useMainboard
