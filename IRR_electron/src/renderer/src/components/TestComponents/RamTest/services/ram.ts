import axios from 'axios'
import { API_INTERNAL } from '../../../../utils/serviceEndPoints'

const executeRamTest = async () => {
  const response = await axios.get(`${API_INTERNAL}/mainboard/memory`)
  return response.data
}

export { executeRamTest }
