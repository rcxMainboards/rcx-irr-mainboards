import axios from 'axios'
import { API_INTERNAL, IRR_MB_API } from '../utils/serviceEndPoints'

const validateMainboard = async (CT: string) => {
  const response = await axios.get(
    `${API_INTERNAL}/mainboard/serial_number/${CT}`
  )
  return response.data
}

const getMainboardProduct = async () => {
  // Example : "8E91"
  const response = await axios.get(`${API_INTERNAL}/mainboard/product`)
  return response.data
}

const getMainboardProfile = async (SSID: string) => {
  // Example :SEND: "8E91"
  const response = await axios.get(
    `${IRR_MB_API}/mainboard/get_SSID_profile/${SSID}`,
    {
      timeout: 7500
    }
  )
  return response.data
}

const isMainboardRegistered = async (SSID: string) => {
  const response = await axios.get(`${IRR_MB_API}/mainboard/product/${SSID}`, {
    timeout: 7500
  })
  return response.data
}

const getMainboardProps = async () => {
  const response = await axios.get(`${API_INTERNAL}/mainboard/props`)
  return response.data
}

const sendOutputLog = async (data) => {
  const response = await axios.post(`${IRR_MB_API}/mainboard/saveLog`, data, {
    timeout: 7500
  })
  return response.data
}

export {
  validateMainboard,
  getMainboardProduct,
  isMainboardRegistered,
  getMainboardProfile,
  getMainboardProps,
  sendOutputLog
}
