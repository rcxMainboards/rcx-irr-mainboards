import axios from 'axios'
import { API_INTERNAL } from '../../../../utils/serviceEndPoints'

const executeUSBTest = async (usbAmount) => {
  const response = await axios.get(`${API_INTERNAL}/mountedDrives/TestUSB/${usbAmount}`)
  return response.data
}

export { executeUSBTest }
