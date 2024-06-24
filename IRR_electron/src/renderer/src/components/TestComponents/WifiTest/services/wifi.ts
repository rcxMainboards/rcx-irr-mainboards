import axios from 'axios'
import { API_INTERNAL } from '../../../../utils/serviceEndPoints'

const executeWifiTest = async (config) => {
  const response = await axios.get(`${API_INTERNAL}/wrt/wrt/${config}`)
  return response.data
}

export { executeWifiTest }
