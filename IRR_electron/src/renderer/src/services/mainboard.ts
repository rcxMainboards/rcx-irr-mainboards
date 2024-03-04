import axios from 'axios'

const validateMainboard = async (CT: string) => {
  const response = await axios.get(`http://127.0.0.1:2010/mainboard/serial_number/${CT}`)
  return response.data
}

const getMainboardProduct = async () => {
  const response = await axios.get(`http://127.0.0.1:2010/mainboard/product`)
  return response.data
}

const isMainboardRegistered = async (SSID: string) => {
  const response = await axios.get(`http://localhost:9001/mainboard/product/${SSID}`)
  return response.data
}

export { validateMainboard, getMainboardProduct, isMainboardRegistered }
