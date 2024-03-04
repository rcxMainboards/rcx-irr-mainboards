import { useQuery } from '@tanstack/react-query'
import { getMainboardProduct, isMainboardRegistered } from '../../services/mainboard'

function useMainboard() {
  const { data } = useQuery({
    queryKey: ['SSID'],
    queryFn: getMainboardProduct
  })

  const ssid = data?.product
  

  const { isLoading: isLoadingRegistration, error } = useQuery({
    queryKey: ['isRegistered', ssid],
    queryFn: () => isMainboardRegistered(ssid),
    enabled: !!ssid,
    retry: false
  })

  return { isLoadingRegistration, error }
}
export default useMainboard
