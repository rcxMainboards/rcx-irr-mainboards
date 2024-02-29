import axios from 'axios'

const validateMainboard = async (CT: string) => {
  const response = await axios.get(`http://127.0.0.1:2010/mainboard/serial_number/${CT}`)
  return response.data
}

export { validateMainboard }
