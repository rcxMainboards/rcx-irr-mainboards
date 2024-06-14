import axios from 'axios'
import { API_INTERNAL } from '../utils/serviceEndPoints'

const checkEthernet = async (value: boolean) => {
  const response = await axios.get(`${API_INTERNAL}/ethernetTest/ethernetCheck/${value}`)
  return response.data
}

const executeFirmware = async () => {
  const response = await axios.get(`${API_INTERNAL}/deviceServices/firmware`)
  return response.data
}

const disableWifi = async () => {
  const response = await axios.get(`${API_INTERNAL}/wifi/disableWifi`)
  return response.data
}


const clearHpEvents = async () => {
  const response = await axios.get(`${API_INTERNAL}/hpDiag/ClearHpEvents`)
  return response.data
}


const runHPDisk = async () => {
  const response = await axios.get(`${API_INTERNAL}/hpDiag/runHPDisk`)
  return response.data
}

const runHPBattery = async () => {
  const response = await axios.get(`${API_INTERNAL}/hpDiag/runHPBattery`)
  return response.data
}



const getHpResults =async () => {
  const response = await axios.get(`${API_INTERNAL}/hpDiag/hpResults`)
  return response.data
}

const initServer = async () => {
  const response = await (window.api as any).startServer()
  return response
}

export { checkEthernet, disableWifi, initServer, executeFirmware, clearHpEvents, runHPDisk, runHPBattery , getHpResults }
