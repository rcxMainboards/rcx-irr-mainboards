import axios from 'axios'
import { API_INTERNAL } from '../../../../utils/serviceEndPoints'

const executeBluetooth = async (message: string) => {
  const response = await axios.get(
    `${API_INTERNAL}/bluetooth/TestBlueTooth/${message}`
  )
  return response.data
}

export { executeBluetooth }
