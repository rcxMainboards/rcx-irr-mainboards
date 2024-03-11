import axios from 'axios'
import { API_INTERNAL } from '../../../../utils/serviceEndPoints'

const executeFingerPrintTest = async () => {
  const response = await axios.get(`${API_INTERNAL}/deviceServices/fingerPrint`)
  return response.data
}

export { executeFingerPrintTest }
