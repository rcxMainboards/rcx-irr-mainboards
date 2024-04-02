import { useQuery } from '@tanstack/react-query'
import {
  getMainboardProduct,
  isMainboardRegistered,
  getMainboardProfile
} from '../../services/mainboard'
import { disableWifi, checkEthernet, initServer } from '../../services/internalServices'

function useMainboard() {
  const { isLoading: loadingServer, isSuccess } = useQuery({
    queryKey: ['initServer'],
    queryFn: initServer,
    refetchOnWindowFocus: false,
    retry: false
  })

  const {} = useQuery({
    queryKey: ['wifi'],
    queryFn: disableWifi,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: isSuccess
  })

  const { data } = useQuery({
    queryKey: ['SSID'],
    queryFn: getMainboardProduct,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: isSuccess
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

  const isLoading = loadingServer || isLoadingRegistration || loadingEthernet

  return {
    netWorkError,
    EhternetError,
    isLoading
  }
}
export default useMainboard
