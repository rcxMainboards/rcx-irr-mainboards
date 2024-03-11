import axios from 'axios'
import { API_INTERNAL } from '../../../../utils/serviceEndPoints'

const executeWifiTest = async () => {
  const response = await axios.get(`${API_INTERNAL}/wifi/TestWifi`)
  return response.data
}

export { executeWifiTest }
