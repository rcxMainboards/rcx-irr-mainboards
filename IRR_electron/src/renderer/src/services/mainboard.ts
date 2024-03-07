import axios from 'axios'
import { API_INTERNAL, IRR_MB_API } from '../utils/serviceEndPoints'

const validateMainboard = async (CT: string) => {
  const response = await axios.get(`${API_INTERNAL}/mainboard/serial_number/${CT}`)
  return response.data
}

const getMainboardProduct = async () => {
  const response = await axios.get(`${API_INTERNAL}/mainboard/product`)
  return response.data
}

const isMainboardRegistered = async (SSID: string) => {
  const response = await axios.get(`${IRR_MB_API}/mainboard/product/${SSID}`)
  return response.data
}

export { validateMainboard, getMainboardProduct, isMainboardRegistered }
