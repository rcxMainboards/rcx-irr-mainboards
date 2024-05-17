import { useQuery } from '@tanstack/react-query'
import {
  getMainboardProduct,
  isMainboardRegistered,
  getMainboardProfile
} from '../../services/mainboard'
import {
  disableWifi,
  checkEthernet,
  initServer,
  executeFirmware,
  clearHpEvents
} from '../../services/internalServices'
import { useEffect, useState } from 'react'

function useMainboard() {
  const [appStatus, setAppStatus] = useState<boolean>()

  useEffect(() => {
    window.api.getAppStatus().then((status: boolean) => {
      setAppStatus(status)
    })
  }, [])

  const { isLoading: loadingServer, isSuccess } = useQuery({
    queryKey: ['initServer'],
    queryFn: initServer,
    refetchOnWindowFocus: false,
    retry: false
  })
  
  
  // @ts-ignore
  const { isSuccess: isClearSuccess } = useQuery({
    queryKey: ['clearEvents'],
    queryFn: clearHpEvents,
    refetchOnWindowFocus: false,
    enabled: isSuccess,
    retry: false
  })
 

  const { isLoading: isLoadingFirmware, error: errorFirmware } = useQuery({
    queryKey: ['firmware'],
    queryFn: executeFirmware,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: isSuccess
  })

  const { isFetching } = useQuery({
    queryKey: ['wifi'],
    queryFn: disableWifi,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: isSuccess && appStatus
  })

  const { data } = useQuery({
    queryKey: ['SSID'],
    queryFn: getMainboardProduct,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: isSuccess && !isFetching
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

  const isLoading = loadingServer || isLoadingRegistration || loadingEthernet || isLoadingFirmware

  return {
    netWorkError,
    EhternetError,
    errorFirmware,
    isLoading
  }
}
export default useMainboard
