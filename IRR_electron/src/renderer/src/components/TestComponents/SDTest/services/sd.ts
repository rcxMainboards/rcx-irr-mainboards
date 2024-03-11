import axios from 'axios'
import { API_INTERNAL } from '../../../../utils/serviceEndPoints'

const executeSDTest = async () => {
  const response = await axios.get(`${API_INTERNAL}/mountedDrives/TestSD`)
  return response.data
}

export { executeSDTest }
