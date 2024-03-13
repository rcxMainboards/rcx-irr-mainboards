import axios from 'axios'
import { API_INTERNAL } from '../utils/serviceEndPoints'

const checkEthernet = async (value: boolean) => {
  const response = await axios.get(
    `${API_INTERNAL}/ethernetTest/ethernetCheck/${value}`
  )
  return response.data
}

const disableWifi = async () => {
  const response = await axios.get(`${API_INTERNAL}/wifi/disableWifi/`)
  return response.data
}

export { checkEthernet, disableWifi }
