import axios from 'axios'
import { API_INTERNAL } from '../../../../utils/serviceEndPoints'

const executeBurning = async () => {
  const response = await axios.get(`${API_INTERNAL}/stressTest/runBurnInTest`)
  return response.data
}

export { executeBurning }
